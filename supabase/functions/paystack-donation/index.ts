import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { name, email, amount, phone, message, campaign } = await req.json();

    console.log('Donation request:', { name, email, amount, campaign });

    // Validate required fields
    if (!name || !email || !amount) {
      throw new Error('Nom, email et montant sont requis');
    }

    // Convert amount to kobo (CFA centimes)
    const amountInKobo = Math.round(amount * 100);

    // Initialize transaction with Paystack
    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        amount: amountInKobo,
        currency: 'XOF', // CFA Franc
        reference: `OLCAP_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        callback_url: `${req.url.split('/functions')[0]}/don/success`,
        metadata: {
          donor_name: name,
          donor_phone: phone || '',
          message: message || '',
          campaign: campaign || 'general'
        }
      }),
    });

    if (!paystackResponse.ok) {
      const errorData = await paystackResponse.text();
      console.error('Paystack error:', errorData);
      throw new Error('Erreur lors de l\'initialisation du paiement');
    }

    const paystackData = await paystackResponse.json();
    
    if (!paystackData.status) {
      throw new Error(paystackData.message || 'Erreur Paystack');
    }

    // Save donation record in Supabase
    const { error: dbError } = await supabase
      .from('donations')
      .insert([
        {
          donor_name: name,
          donor_email: email,
          amount: amount,
          currency: 'XOF',
          paystack_reference: paystackData.data.reference,
          payment_status: 'pending',
          donor_phone: phone || null,
          message: message || null,
          campaign: campaign || 'general'
        }
      ]);

    if (dbError) {
      console.error('Database error:', dbError);
      // Continue anyway - payment is more important than logging
    }

    console.log('Donation initialized successfully:', paystackData.data.reference);

    return new Response(JSON.stringify({
      success: true,
      authorization_url: paystackData.data.authorization_url,
      access_code: paystackData.data.access_code,
      reference: paystackData.data.reference
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in paystack-donation function:', error);
    return new Response(JSON.stringify({ 
      success: false,
      error: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});