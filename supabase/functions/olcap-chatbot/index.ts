import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Base de connaissances RAG (Knowledge Base)
const knowledgeBase = {
  faq: [
    {
      keywords: ["olcap", "ong", "organisation", "c'est quoi", "qu'est-ce"],
      answer: "OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire) est une ONG ivoirienne créée pour améliorer la santé et le bien-être des populations vulnérables. Nous luttons activement contre l'anémie, la pauvreté, l'analphabétisme et sensibilisons sur les cancers du sein et du col de l'utérus. 💚\n\n💝 Vous pouvez nous soutenir en faisant un don ou nous contacter sur WhatsApp pour en savoir plus !"
    },
    {
      keywords: ["situé", "adresse", "localisation", "où", "yopougon", "contact"],
      answer: "Notre siège est situé à Ananeraie, Yopougon, Abidjan 🇨🇮. Contactez-nous :\n📞 (+225) 01 51 83 82 82 / 05 95 20 33 72\n📧 olcapcin@gmail.com\n💬 WhatsApp: +225 01 51 83 82 82"
    },
    {
      keywords: ["don", "donner", "contribution", "paiement", "paystack"],
      answer: "Faire un don est simple et 100% sécurisé ! 🔒\n\nRendez-vous sur notre page /don où vous trouverez un formulaire intégré à Paystack (certifié PCI DSS). Vous pouvez :\n✅ Donner de façon anonyme\n✅ Choisir votre campagne (anémie, cancers, Octobre Rose)\n✅ Recevoir un reçu fiscal automatiquement\n\nChaque contribution fait la différence ! 💝"
    },
    {
      keywords: ["bénévole", "volontaire", "aider", "participer", "engagement", "rejoindre"],
      answer: "Votre temps et compétences sont précieux ! 🌟\n\nVous pouvez :\n👥 Devenir bénévole lors de nos campagnes\n📢 Être ambassadeur dans votre communauté\n🤝 Devenir partenaire (locaux, matériel médical)\n📚 Participer à nos formations de sensibilisateurs\n\nContactez-nous au (+225) 01 51 83 82 82 ou via /contact"
    },
    {
      keywords: ["sécurisé", "sécurité", "protection", "paystack", "cryptage"],
      answer: "Vos dons sont 100% sécurisés ! 🛡️\n\n✅ Paiements via Paystack (certifié PCI DSS)\n✅ Cryptage SSL 256-bit\n✅ Aucune donnée bancaire stockée\n✅ Reçu fiscal automatique\n\nVous pouvez donner en toute confiance !"
    },
    {
      keywords: ["anémie", "dépistage", "test", "fer", "complément"],
      answer: "Notre programme contre l'anémie comprend :\n\n🎯 Sensibilisation dans écoles et communautés\n🔬 Dépistages gratuits avec kits de test rapide\n💊 Distribution de compléments alimentaires et fer\n🏥 Orientation vers structures de santé partenaires\n👨‍🏫 Formation de sensibilisateurs communautaires\n\n💝 Votre don peut sauver des vies ! Soutenez notre action contre l'anémie."
    },
    {
      keywords: ["octobre rose", "cancer", "sein", "col utérus", "dépistage cancer"],
      answer: "Oui ! Octobre Rose est un temps fort pour OLCAP-CI ! 🎀\n\nNos actions :\n📻 Émissions radio de sensibilisation\n⛪ Sessions dans églises et écoles\n🔬 Dépistages GRATUITS (sein & col de l'utérus)\n👨‍⚕️ 60 sensibilisateurs formés au CHU Treichville\n🤝 Partenariat avec PIF-CI\n\n💝 Aidez-nous à sauver plus de vies avec votre don ! Contactez-nous sur WhatsApp pour participer."
    },
    {
      keywords: ["téléconsultation", "consultation", "médecin", "soins", "santé"],
      answer: "OLCAP-CI se concentre sur la sensibilisation et le dépistage. 🏥\n\nNous ne proposons pas de téléconsultations directes, MAIS nous collaborons avec des professionnels de santé partenaires (CHU Treichville, cliniques) vers lesquels nous orientons les personnes ayant besoin de soins.\n\nNotre mission : détecter tôt et faciliter l'accès aux soins ! 💪"
    },
    {
      keywords: ["équipe", "travailler", "emploi", "recrutement", "carrière"],
      answer: "Nous sommes ravis d'accueillir de nouveaux membres ! 🌟\n\nPour rejoindre OLCAP-CI :\n📝 Formulaire de contact sur /contact\n📞 Appelez-nous au (+225) 01 51 83 82 82\n\nNous recherchons :\n👨‍⚕️ Professionnels de santé\n📱 Communicants\n❤️ Personnes passionnées par l'action sociale\n\nAucune expérience requise, formation assurée !"
    },
    {
      keywords: ["facebook", "réseaux sociaux", "social media", "suivre", "page"],
      answer: "Suivez-nous sur Facebook ! 📱\n\n👉 Page officielle : OLCAP-CI\n\nOn y partage :\n📸 Actions sur le terrain\n📅 Campagnes à venir\n💬 Témoignages inspirants\n💡 Conseils santé\n\nLikez, partagez, commentez pour nous aider à toucher plus de vies ! 🙏"
    },
    {
      keywords: ["mission", "objectif", "valeur", "vision"],
      answer: "Nos missions principales :\n\n🩸 Lutte contre l'anémie (causes, détection, correction, prévention)\n💰 Lutte contre la pauvreté\n📚 Lutte contre l'analphabétisme\n🎀 Sensibilisation cancers du sein et col de l'utérus\n\nNos valeurs : Santé, Solidarité, Prévention, Éducation, Espoir 💚"
    },
    {
      keywords: ["mission", "objectif", "valeur", "vision"],
      answer: "Nos missions principales :\n\n🩸 Lutte contre l'anémie (causes, détection, correction, prévention)\n💰 Lutte contre la pauvreté\n📚 Lutte contre l'analphabétisme\n🎀 Sensibilisation cancers du sein et col de l'utérus\n\nNos valeurs : Santé, Solidarité, Prévention, Éducation, Espoir 💚\n\n💝 Chaque don compte ! Ensemble, changeons des vies."
    },
    {
      keywords: ["merci", "remerciement", "bravo", "félicitation", "super", "génial"],
      answer: "Merci beaucoup pour votre intérêt ! 🙏💚\n\nVotre soutien est précieux. Vous pouvez :\n💝 Faire un don pour soutenir nos actions\n💬 Nous contacter sur WhatsApp pour en savoir plus\n👥 Devenir bénévole ou ambassadeur\n\nEnsemble, nous sommes plus forts !"
    },
    {
      keywords: ["bonjour", "salut", "coucou", "hello", "hey"],
      answer: "Bonjour ! 👋😊\n\nBienvenue chez OLCAP-CI ! Nous luttons pour la santé et le bien-être en Côte d'Ivoire.\n\nComment puis-je vous aider aujourd'hui ?\n\n💝 N'hésitez pas à faire un don ou nous contacter sur WhatsApp !"
    }
  ]
};

// Fonction pour rechercher dans le RAG
function searchInRAG(userMessage: string): string | null {
  const messageLower = userMessage.toLowerCase();
  
  // Recherche dans la base de connaissances
  for (const item of knowledgeBase.faq) {
    // Vérifie si un des mots-clés correspond
    if (item.keywords.some(keyword => messageLower.includes(keyword))) {
      return item.answer;
    }
  }
  
  return null;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    console.log('Received message:', message);

    // Étape 1 : Recherche dans le RAG
    const ragAnswer = searchInRAG(message);
    
    if (ragAnswer) {
      console.log('Answer found in RAG, no OpenAI call needed');
      return new Response(JSON.stringify({ reply: ragAnswer, source: 'rag' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Étape 2 : Si pas de réponse dans RAG, appel à OpenAI
    console.log('No answer in RAG, calling OpenAI...');
    
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Context enrichi pour OpenAI avec toutes les infos du RAG
    const context = `Tu es l'assistant virtuel d'OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire).

MISSION: OLCAP-CI lutte contre l'anémie, la pauvreté, l'analphabétisme et sensibilise sur les cancers du sein et du col de l'utérus.

COORDONNÉES:
- Adresse: Ananeraie, Yopougon, Abidjan, Côte d'Ivoire
- Téléphones: (+225) 01 51 83 82 82 / (+225) 05 95 20 33 72
- Email: olcapcin@gmail.com
- WhatsApp: +225 01 51 83 82 82

ACTIONS PRINCIPALES:
- Sensibilisation cancers du sein & col de l'utérus (émissions radio, campagnes locales, Octobre Rose)
- Dépistages gratuits dans églises, écoles, mairies
- Formations de sensibilisateurs (60 formés au CHU Treichville)
- Partenariats avec associations, municipalités, ONG santé
- Accord-cadre avec PIF-CI pour lutte cancers féminins

VALEURS: Santé, Solidarité, Prévention, Éducation, Espoir

DONS:
- Formulaire sécurisé via Paystack (page /don)
- Paiements certifiés PCI DSS avec cryptage SSL 256-bit
- Possibilité de don anonyme
- Reçu fiscal automatique

Tu dois:
1. Répondre en français de manière chaleureuse, empathique et professionnelle
2. Fournir des informations précises sur OLCAP-CI
3. Utiliser des emojis pour rendre les réponses plus vivantes et engageantes
4. **IMPORTANT: Toujours terminer tes réponses en encourageant soit:**
   - 💝 "Vous pouvez nous soutenir en faisant un don pour cette cause !"
   - 💬 "N'hésitez pas à nous contacter sur WhatsApp pour en savoir plus !"
   - OU les deux quand c'est pertinent
5. Être concis mais informatif (max 120 mots)
6. Encourager l'action et la solidarité
7. Mentionner les pages /don et /contact quand approprié

**RÈGLE D'OR**: Chaque réponse doit inclure un appel à l'action (don ou WhatsApp) de manière naturelle et appropriée au contexte.

Si on te pose une question sur quelque chose que tu ne sais pas, invite gentiment la personne à nous contacter sur WhatsApp au +225 01 51 83 82 82 ou faire un don pour soutenir nos actions.`;

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
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    console.log('OpenAI response:', reply);

    return new Response(JSON.stringify({ reply, source: 'openai' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in olcap-chatbot function:', error);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue. Contactez-nous au (+225) 01 51 83 82 82 ou via olcapcin@gmail.com 📞' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});