import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Search, Heart, Users, Phone, DollarSign, Calendar, Award, MessageCircle, Share2 } from "lucide-react";

const faqData = [
  {
    question: "Qu'est-ce que l'OLCAP-CI ?",
    answer: "OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire) est une ONG ivoirienne créée pour améliorer la santé et le bien-être des populations vulnérables. Nous luttons activement contre l'anémie, la pauvreté, l'analphabétisme et sensibilisons sur les cancers du sein et du col de l'utérus. Notre engagement repose sur des valeurs de santé, solidarité, prévention, éducation et espoir.",
    category: "À propos",
    icon: Heart,
    tags: ["mission", "ong", "santé"]
  },
  {
    question: "Où êtes-vous situés et comment vous contacter ?",
    answer: "Notre siège est situé à Ananeraie, Yopougon, Abidjan en Côte d'Ivoire. Vous pouvez nous contacter par téléphone au (+225) 01 51 83 82 82 ou (+225) 05 95 20 33 72, par email à olcapcin@gmail.com, ou via WhatsApp au +225 01 51 83 82 82. Notre équipe est disponible pour répondre à toutes vos questions.",
    category: "Contact",
    icon: Phone,
    tags: ["contact", "localisation", "adresse"]
  },
  {
    question: "Comment puis-je faire un don ?",
    answer: "Faire un don est simple et sécurisé ! Rendez-vous sur notre page de don où vous trouverez un formulaire intégré à Paystack, notre partenaire de paiement certifié. Vous pouvez donner de façon anonyme si vous le souhaitez, et choisir la campagne que vous voulez soutenir : lutte contre l'anémie, dépistage des cancers, lutte contre la pauvreté ou Octobre Rose. Chaque contribution, quelle que soit sa taille, fait une réelle différence !",
    category: "Dons",
    icon: DollarSign,
    tags: ["don", "paiement", "contribution"]
  },
  {
    question: "Puis-je contribuer autrement qu'avec de l'argent ?",
    answer: "Absolument ! Votre temps et vos compétences sont tout aussi précieux. Vous pouvez devenir bénévole lors de nos campagnes de dépistage, ambassadeur pour sensibiliser dans votre communauté, ou partenaire en mettant à disposition des ressources (locaux, matériel médical, etc.). Nous organisons également des formations pour les sensibilisateurs. Contactez-nous pour discuter de la meilleure façon de vous impliquer !",
    category: "Engagement",
    icon: Users,
    tags: ["bénévolat", "partenariat", "engagement"]
  },
  {
    question: "Les dons sont-ils sécurisés ?",
    answer: "Oui, absolument ! Tous nos paiements sont traités par Paystack, une plateforme de paiement certifiée PCI DSS avec cryptage SSL 256-bit. Vos informations bancaires sont protégées par les standards de sécurité les plus élevés de l'industrie. De plus, vous recevez automatiquement un reçu fiscal pour chaque don effectué. Nous ne stockons jamais vos données bancaires.",
    category: "Dons",
    icon: Award,
    tags: ["sécurité", "paystack", "protection"]
  },
  {
    question: "Quelles actions menez-vous contre l'anémie ?",
    answer: "Notre programme de lutte contre l'anémie comprend plusieurs volets : sensibilisation dans les écoles et communautés sur les causes et la prévention de l'anémie, dépistages gratuits avec des kits de test rapide, distribution de compléments alimentaires et fer aux personnes diagnostiquées, et orientation vers des structures de santé partenaires pour les cas nécessitant un suivi médical approfondi. Nous formons également des sensibilisateurs communautaires pour démultiplier notre impact.",
    category: "Actions",
    icon: Heart,
    tags: ["anémie", "dépistage", "santé"]
  },
  {
    question: "Participez-vous à Octobre Rose ?",
    answer: "Oui, Octobre Rose est l'un de nos temps forts annuels ! Chaque année, nous organisons des campagnes massives de sensibilisation au cancer du sein avec des émissions radio, des sessions d'information dans les églises et écoles, et surtout des dépistages gratuits du cancer du sein et du col de l'utérus. Nous avons formé 60 sensibilisateurs au CHU de Treichville et travaillons en partenariat avec PIF-CI pour toucher un maximum de femmes. Rejoignez-nous en octobre !",
    category: "Campagnes",
    icon: Calendar,
    tags: ["octobre rose", "cancer", "dépistage"]
  },
  {
    question: "Proposez-vous des téléconsultations ou services médicaux directs ?",
    answer: "OLCAP-CI est principalement une organisation de sensibilisation et de dépistage. Nous ne fournissons pas de téléconsultations directement, mais nous collaborons étroitement avec des professionnels de santé et structures médicales partenaires (CHU de Treichville, cliniques privées, etc.) vers lesquels nous orientons les personnes ayant besoin de soins ou de suivi médical. Notre rôle est de détecter tôt les problèmes et de faciliter l'accès aux soins.",
    category: "Services",
    icon: MessageCircle,
    tags: ["consultation", "orientation", "santé"]
  },
  {
    question: "Comment rejoindre l'équipe ou devenir bénévole ?",
    answer: "Nous sommes toujours ravis d'accueillir de nouveaux membres engagés ! Pour rejoindre notre équipe, vous pouvez remplir le formulaire de contact sur notre site en précisant votre domaine d'intérêt et vos compétences, ou nous appeler directement au (+225) 01 51 83 82 82. Nous recherchons régulièrement des bénévoles pour nos campagnes de terrain, des professionnels de santé, des communicants, et des personnes passionnées par l'action sociale. Aucune expérience préalable n'est requise, nous assurons la formation !",
    category: "Engagement",
    icon: Users,
    tags: ["bénévolat", "recrutement", "équipe"]
  },
  {
    question: "Comment vous suivre sur les réseaux sociaux ?",
    answer: "Restez connecté avec OLCAP-CI sur Facebook via notre page officielle 'OLCAP-CI' où nous partageons régulièrement nos actions sur le terrain, nos campagnes à venir, des témoignages inspirants, et des conseils santé. N'hésitez pas à liker, partager et commenter nos publications pour nous aider à toucher plus de personnes ! Vous pouvez aussi nous contacter directement via WhatsApp pour des échanges plus personnalisés.",
    category: "Communauté",
    icon: Share2,
    tags: ["réseaux sociaux", "facebook", "communauté"]
  }
];

const categories = [...new Set(faqData.map(item => item.category))];

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <HelpCircle className="w-16 h-16 text-primary animate-pulse-soft" />
              <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full animate-ping" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tout ce que vous devez savoir sur OLCAP-CI, nos actions, et comment vous pouvez faire la différence
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher une question, un mot-clé..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-2 focus:border-primary transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={!selectedCategory ? "default" : "outline"}
              className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/90 transition-all"
              onClick={() => setSelectedCategory(null)}
            >
              Toutes les catégories
            </Badge>
            {categories.map(category => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/90 transition-all"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-2 backdrop-blur-sm bg-background/95">
          <div className="p-6">
            {filteredFAQ.length > 0 ? (
              <Accordion type="single" collapsible className="space-y-3">
                {filteredFAQ.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-2 rounded-xl px-6 py-2 hover:border-primary/50 transition-all hover:shadow-lg bg-card"
                    >
                      <AccordionTrigger className="text-left hover:text-primary hover:no-underline group">
                        <div className="flex items-start gap-4 pr-4">
                          <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-base md:text-lg mb-1">
                              {item.question}
                            </div>
                            <div className="flex flex-wrap gap-1.5 mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {item.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 pt-2 pl-16">
                        <p className="leading-relaxed text-base">{item.answer}</p>
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {item.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="outline"
                              className="text-xs px-2 py-0.5"
                            >
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  Aucune question ne correspond à votre recherche.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Essayez avec d'autres mots-clés ou contactez-nous directement !
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <h3 className="text-2xl font-bold mb-3">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-muted-foreground mb-6">
              Notre équipe est là pour vous ! N'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Nous contacter
              </a>
              <a
                href="https://wa.me/22501518382?text=Bonjour%20OLCAP-CI%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#20b858] transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Direct
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;