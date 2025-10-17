import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const { message } = await req.json();

    console.log('Received message:', message);

    // Context spécifique à OLCAP-CI
    const context = `Tu es l'assistant virtuel d'OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire).

MISSION: OLCAP-CI lutte contre l'anémie, la pauvreté, l'analphabétisme et sensibilise sur les cancers du sein et du col de l'utérus.

COORDONNÉES:
- Adresse: Ananeraie, Yopougon, Abidjan, Côte d'Ivoire
- Téléphones: (+225) 01 51 83 82 82 / (+225) 05 95 20 33 72
- Email: olcapcin@gmail.com

ACTIONS PRINCIPALES:
- Sensibilisation cancers du sein & col de l'utérus (Octobre Rose)
- Dépistages gratuits dans églises, écoles, mairies
- Formations de sensibilisateurs (60 formés au CHU Treichville)
- Partenariats avec associations, municipalités, ONG santé
- Accord-cadre avec PIF-CI pour lutte cancers féminins

Tu dois:
1. Répondre en français de manière chaleureuse et professionnelle
2. Fournir des informations précises sur OLCAP-CI
3. Orienter vers la page de don quand approprié (/don)
4. Rediriger vers le contact pour plus d'infos (/contact)
5. Être empathique et encourageant
6. Promouvoir l'engagement communautaire

Sois concis mais informatif.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: context },
          { role: 'user', content: message }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log('OpenAI response:', reply);

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in olcap-chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue. Veuillez réessayer.' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});