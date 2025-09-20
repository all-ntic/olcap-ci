import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Qu'est-ce que l'OLCAP-CI ?",
    answer: "Une ONG ivoirienne engagée dans la lutte contre l'anémie, la pauvreté et les cancers féminins."
  },
  {
    question: "Où êtes-vous situés ?",
    answer: "À Yopougon, Ananeraie, Abidjan, Côte d'Ivoire."
  },
  {
    question: "Comment puis-je faire un don ?",
    answer: "Via le module de dons sécurisé (Paystack) sur notre site."
  },
  {
    question: "Puis-je contribuer autrement qu'avec de l'argent ?",
    answer: "Oui, en devenant bénévole, partenaire ou ambassadeur de nos campagnes."
  },
  {
    question: "Les dons sont-ils sécurisés ?",
    answer: "Oui, les paiements sont traités par Paystack avec cryptage sécurisé."
  },
  {
    question: "Quelles actions menez-vous contre l'anémie ?",
    answer: "Sensibilisation, dépistages, campagnes de prévention et distribution de compléments."
  },
  {
    question: "Participez-vous à Octobre Rose ?",
    answer: "Oui, chaque année nous organisons des campagnes de sensibilisation et dépistage."
  },
  {
    question: "Proposez-vous des téléconsultations ou services médicaux directs ?",
    answer: "Nous collaborons avec des professionnels de santé partenaires pour orienter les patients."
  },
  {
    question: "Comment rejoindre l'équipe ou devenir bénévole ?",
    answer: "Via le formulaire de contact ou en nous appelant directement."
  },
  {
    question: "Comment vous suivre sur les réseaux sociaux ?",
    answer: "Sur notre page Facebook officielle : OLCAP-CI."
  }
];

const FAQSection = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-8 h-8 text-primary mr-3" />
            <h2 className="text-3xl font-bold gradient-text">Questions fréquentes</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur notre organisation et nos actions.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {faqData.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FAQSection;