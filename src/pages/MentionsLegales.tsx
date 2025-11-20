import { useEffect } from "react";
import { Shield, User, Database, Mail, FileText, Scale, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const MentionsLegales = () => {
  useEffect(() => {
    updateSEO({
      title: "Mentions Légales – OLCAP-CI",
      description: "Mentions légales et informations juridiques d'OLCAP-CI, ONG humanitaire en Côte d'Ivoire.",
      keywords: "mentions légales OLCAP-CI, informations juridiques ONG, RGPD Côte d'Ivoire",
      canonical: "https://olcap-ci.allntic.online/mentions-legales",
      ogType: "website"
    });

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://olcap-ci.allntic.online/"
      }, {
        "@type": "ListItem",
        "position": 2,
        "name": "Mentions Légales",
        "item": "https://olcap-ci.allntic.online/mentions-legales"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  const legalSections = [
    {
      title: "Identification de l'Organisation",
      icon: User,
      content: [
        "Dénomination : OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté - Côte d'Ivoire)",
        "Statut juridique : Organisation Non Gouvernementale (ONG)",
        "Siège social : Ananeraie, Yopougon, Abidjan, Côte d'Ivoire",
        "Email : olcapcin@gmail.com",
        "Téléphones : (+225) 01 51 83 82 82 / (+225) 05 95 20 33 72",
        "Année de création : 2020"
      ]
    },
    {
      title: "Responsable de la Publication",
      icon: Mail,
      content: [
        "Directeur de la publication : Direction OLCAP-CI",
        "Contact éditorial : olcapcin@gmail.com",
        "Responsable technique : Équipe digitale OLCAP-CI",
        "Hébergement : Lovable Cloud Platform"
      ]
    },
    {
      title: "Propriété Intellectuelle",
      icon: Shield,
      content: [
        "L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive d'OLCAP-CI ou de ses partenaires.",
        "Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans autorisation écrite préalable.",
        "Les marques, logos et signes distinctifs reproduits sur ce site sont protégés au titre du droit des marques.",
        "Toute utilisation non autorisée constitue une contrefaçon passible de sanctions civiles et pénales.",
        "Les photographies de bénéficiaires sont utilisées avec leur consentement dans le cadre de nos missions humanitaires."
      ]
    },
    {
      title: "Protection des Données Personnelles (RGPD)",
      icon: Lock,
      content: [
        "OLCAP-CI s'engage à protéger la vie privée et les données personnelles conformément aux lois ivoiriennes et internationales en vigueur.",
        "Les données collectées via les formulaires (contact, don) sont utilisées exclusivement pour nos missions statutaires et la gestion des dons.",
        "Aucune donnée personnelle n'est vendue, louée ou transmise à des tiers sans consentement explicite.",
        "Vos droits : accès, rectification, suppression, limitation du traitement, portabilité et opposition.",
        "Pour exercer vos droits ou toute question relative aux données personnelles : olcapcin@gmail.com",
        "Durée de conservation : les données sont conservées le temps nécessaire aux finalités pour lesquelles elles ont été collectées."
      ]
    },
    {
      title: "Cookies et Technologies",
      icon: Database,
      content: [
        "Ce site utilise des cookies techniques strictement nécessaires à son fonctionnement optimal.",
        "Aucun cookie de traçage publicitaire ou de profilage n'est utilisé.",
        "Les données de navigation sont anonymisées et utilisées uniquement pour améliorer nos services.",
        "Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient être affectées.",
        "Cookies utilisés : session utilisateur, préférences d'affichage, sécurité des formulaires."
      ]
    },
    {
      title: "Limitation de Responsabilité",
      icon: Scale,
      content: [
        "OLCAP-CI s'efforce de maintenir des informations exactes, complètes et à jour sur ce site.",
        "Toutefois, nous ne garantissons pas l'exactitude, la complétude, l'actualité ou la pertinence des informations diffusées.",
        "OLCAP-CI ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.",
        "Les liens hypertextes externes présents sur le site sont fournis à titre informatif et n'engagent pas la responsabilité d'OLCAP-CI.",
        "OLCAP-CI se réserve le droit de modifier ou corriger le contenu du site à tout moment sans préavis."
      ]
    },
    {
      title: "Conditions d'Utilisation des Dons",
      icon: FileText,
      content: [
        "Les paiements en ligne sont traités de manière sécurisée via la plateforme Paystack (certifiée PCI DSS).",
        "OLCAP-CI s'engage à utiliser l'intégralité des fonds collectés exclusivement pour ses missions statutaires.",
        "Un reçu fiscal peut être délivré sur demande pour les dons éligibles conformément à la législation ivoirienne.",
        "Les coordonnées bancaires ne sont jamais stockées sur nos serveurs et sont traitées uniquement par Paystack.",
        "En cas de problème technique lors d'un don, contactez-nous dans les 48 heures à olcapcin@gmail.com.",
        "Les dons effectués sont définitifs et non remboursables, sauf erreur manifeste de traitement."
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Informations Légales</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Mentions Légales</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Informations légales, conditions d'utilisation et protection des données personnelles du site OLCAP-CI
            </p>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : 20 janvier 2025
            </p>
          </div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {legalSections.map((section, index) => (
              <Card 
                key={index}
                className="glass border-primary/10 overflow-hidden hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow shimmer">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Links Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Questions ou Réclamations ?</h2>
            <p className="text-lg text-muted-foreground">
              Pour toute question concernant ces mentions légales, la protection de vos données 
              ou l'exercice de vos droits, contactez-nous :
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Card className="glass hover-scale cursor-pointer p-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">olcapcin@gmail.com</p>
                </Card>
              </Link>
              <Card className="glass p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-semibold">Confidentialité</p>
                <p className="text-sm text-muted-foreground">Données protégées</p>
              </Card>
            </div>
            <p className="text-sm text-muted-foreground pt-6">
              En utilisant ce site, vous acceptez les présentes mentions légales et notre politique de confidentialité.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MentionsLegales;