import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Validation schema for donation inputs
const donationSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().optional().refine(
    (val) => !val || /^\+?[0-9\s-]{8,20}$/.test(val),
    { message: "Invalid phone number format" }
  ),
  amount: z.number().min(1000, "Minimum donation is 1000 XOF").max(10000000, "Maximum donation is 10,000,000 XOF"),
  message: z.string().max(1000).optional(),
  campaign: z.enum(['general', 'cancer', 'education', 'health', 'emergency']).optional(),
});

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

    const requestData = await req.json();

    // Validate input data
    const validationResult = donationSchema.safeParse({
      name: requestData.name,
      email: requestData.email,
      phone: requestData.phone,
      amount: Number(requestData.amount),
      message: requestData.message,
      campaign: requestData.campaign || 'general',
    });

    if (!validationResult.success) {
      console.error('Validation error:', validationResult.error.errors);
      return new Response(JSON.stringify({ 
        success: false,
        error: 'Données invalides',
        details: validationResult.error.errors[0].message
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { name, email, amount, phone, message, campaign } = validationResult.data;

    console.log('Donation request validated:', { name, email, amount, campaign });

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