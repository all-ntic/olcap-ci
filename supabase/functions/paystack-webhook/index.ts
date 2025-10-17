import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-paystack-signature',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const paystackSecretKey = Deno.env.get('PAYSTACK_SECRET_KEY');
    if (!paystackSecretKey) {
      throw new Error('PAYSTACK_SECRET_KEY is not set');
    }

    // Verify Paystack signature (MANDATORY)
    const signature = req.headers.get('x-paystack-signature');
    const body = await req.text();
    
    if (!signature) {
      console.error('Missing Paystack signature');
      return new Response('Unauthorized', { status: 401 });
    }
    
    const hash = await crypto.subtle.digest(
      'SHA-512',
      new TextEncoder().encode(paystackSecretKey + body)
    );
    const expectedSignature = Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');

    if (signature !== expectedSignature) {
      console.error('Invalid Paystack signature');
      return new Response('Unauthorized', { status: 401 });
    }

    const event = JSON.parse(body);
    console.log('Webhook event:', event.event, event.data?.reference);

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    if (event.event === 'charge.success') {
      const { reference, status, amount, currency, transaction_date, channel } = event.data;
      
      // Verify the donation exists and is in pending status
      const { data: existingDonation, error: fetchError } = await supabase
        .from('donations')
        .select('payment_status')
        .eq('paystack_reference', reference)
        .single();

      if (fetchError || !existingDonation) {
        console.error('Donation not found:', reference, fetchError);
        return new Response('Donation not found', { status: 404, headers: corsHeaders });
      }

      if (existingDonation.payment_status !== 'pending') {
        console.warn('Donation already processed:', reference, existingDonation.payment_status);
        return new Response('Donation already processed', { status: 200, headers: corsHeaders });
      }
      
      // Update donation status in database
      const { error } = await supabase
        .from('donations')
        .update({
          payment_status: 'completed',
          paystack_transaction_id: event.data.id,
          payment_method: channel,
          updated_at: new Date().toISOString()
        })
        .eq('paystack_reference', reference);

      if (error) {
        console.error('Database update error:', error);
        throw error;
      }

      console.log('Donation completed successfully:', reference);
    }

    return new Response('OK', {
      headers: corsHeaders,
    });

  } catch (error) {
    console.error('Error in paystack-webhook function:', error);
    return new Response('Internal Server Error', {
      status: 500,
      headers: corsHeaders,
    });
  }
});