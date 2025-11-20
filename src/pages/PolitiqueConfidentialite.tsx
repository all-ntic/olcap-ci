import { useEffect } from "react";
import { Shield, Lock, Database, Eye, UserCheck, FileText, Mail, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const PolitiqueConfidentialite = () => {
  useEffect(() => {
    updateSEO({
      title: "Politique de Confidentialité – OLCAP-CI",
      description: "Découvrez comment OLCAP-CI collecte, utilise et protège vos données personnelles conformément au RGPD.",
      keywords: "politique confidentialité OLCAP-CI, RGPD, protection données, vie privée",
      canonical: "https://olcap-ci.allntic.online/politique-confidentialite",
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
        "name": "Politique de Confidentialité",
        "item": "https://olcap-ci.allntic.online/politique-confidentialite"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  const privacySections = [
    {
      title: "Responsable du Traitement des Données",
      icon: UserCheck,
      content: [
        "OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté - Côte d'Ivoire)",
        "Siège social : Ananeraie, Yopougon, Abidjan, Côte d'Ivoire",
        "Email : olcapcin@gmail.com",
        "Téléphones : (+225) 01 51 83 82 82 / (+225) 05 95 20 33 72",
        "En tant que responsable du traitement, OLCAP-CI s'engage à respecter la confidentialité et la sécurité de vos données personnelles."
      ]
    },
    {
      title: "Données Collectées",
      icon: Database,
      content: [
        "Données d'identité : nom, prénom, adresse postale",
        "Données de contact : adresse email, numéro de téléphone",
        "Données de paiement : montant du don, référence de transaction (via Paystack)",
        "Données de navigation : adresse IP, type de navigateur, pages visitées (anonymisées)",
        "Données de correspondance : messages envoyés via nos formulaires de contact",
        "IMPORTANT : Nous ne collectons jamais vos coordonnées bancaires. Le traitement des paiements est entièrement géré par Paystack de manière sécurisée."
      ]
    },
    {
      title: "Finalités du Traitement",
      icon: FileText,
      content: [
        "Gestion des dons et délivrance de reçus fiscaux",
        "Réponse à vos demandes de contact et d'information",
        "Gestion des inscriptions à nos campagnes de bénévolat",
        "Envoi de newsletters et communications relatives à nos actions (avec votre consentement)",
        "Amélioration de notre site web et de nos services",
        "Respect de nos obligations légales et fiscales",
        "Prévention de la fraude et sécurisation des transactions"
      ]
    },
    {
      title: "Base Légale du Traitement",
      icon: Shield,
      content: [
        "Consentement : vous donnez votre accord explicite lors de la collecte de vos données",
        "Exécution d'un contrat : traitement nécessaire pour gérer votre don ou votre demande",
        "Obligation légale : conservation des données de don pour obligations fiscales et comptables",
        "Intérêt légitime : amélioration de nos services et communication sur nos missions"
      ]
    },
    {
      title: "Durée de Conservation",
      icon: Database,
      content: [
        "Données de don : 10 ans à partir de la date du don (obligation légale fiscale)",
        "Données de contact (formulaire) : 3 ans à compter du dernier contact",
        "Données de newsletter : jusqu'à votre désinscription",
        "Données de navigation : 13 mois maximum",
        "À l'expiration de ces délais, vos données sont supprimées de manière sécurisée et définitive."
      ]
    },
    {
      title: "Destinataires des Données",
      icon: Eye,
      content: [
        "Personnel autorisé d'OLCAP-CI : accès strictement limité aux données nécessaires à leurs missions",
        "Prestataire de paiement : Paystack (pour le traitement sécurisé des dons en ligne)",
        "Hébergeur : Lovable Cloud Platform (infrastructure sécurisée)",
        "Autorités compétentes : sur réquisition judiciaire uniquement",
        "IMPORTANT : Nous ne vendons, ne louons ni ne transmettons jamais vos données à des tiers à des fins commerciales."
      ]
    },
    {
      title: "Transferts de Données hors UE",
      icon: AlertCircle,
      content: [
        "Certaines données peuvent être transférées vers des serveurs situés hors de l'Union Européenne (notamment via nos prestataires techniques).",
        "Ces transferts sont encadrés par des garanties appropriées conformément au RGPD (clauses contractuelles types, Privacy Shield, etc.).",
        "Nous nous assurons que vos données bénéficient d'un niveau de protection équivalent à celui de l'Union Européenne."
      ]
    },
    {
      title: "Sécurité des Données",
      icon: Lock,
      content: [
        "Chiffrement SSL/TLS pour toutes les communications avec notre site",
        "Stockage sécurisé dans des bases de données protégées",
        "Accès aux données limité par authentification et contrôle d'accès",
        "Sauvegardes régulières et sécurisées",
        "Paiements traités uniquement par Paystack (certifié PCI DSS)",
        "Audits de sécurité réguliers de nos systèmes",
        "Formation continue de notre équipe aux bonnes pratiques de sécurité"
      ]
    },
    {
      title: "Vos Droits sur vos Données",
      icon: UserCheck,
      content: [
        "Droit d'accès : obtenir une copie de toutes vos données personnelles",
        "Droit de rectification : corriger ou mettre à jour vos informations",
        "Droit à l'effacement (droit à l'oubli) : demander la suppression de vos données",
        "Droit à la limitation du traitement : restreindre l'utilisation de vos données",
        "Droit à la portabilité : recevoir vos données dans un format structuré",
        "Droit d'opposition : vous opposer au traitement de vos données (newsletters, etc.)",
        "Droit de retirer votre consentement à tout moment",
        "Droit de définir des directives sur le sort de vos données après votre décès"
      ]
    },
    {
      title: "Exercice de vos Droits",
      icon: Mail,
      content: [
        "Pour exercer l'un de vos droits, contactez-nous à : olcapcin@gmail.com",
        "Précisez dans votre demande : nom, prénom, email, nature de la demande",
        "Joignez une copie d'une pièce d'identité (pour vérification)",
        "Nous vous répondrons dans un délai maximum d'un mois",
        "Si votre demande est complexe, ce délai peut être prolongé de deux mois (vous serez informé)",
        "En cas de difficulté, vous pouvez introduire une réclamation auprès de la CNIL (France) ou de l'autorité de contrôle compétente en Côte d'Ivoire."
      ]
    },
    {
      title: "Cookies et Traceurs",
      icon: Database,
      content: [
        "Cookies strictement nécessaires : essentiels au fonctionnement du site (session, sécurité)",
        "Cookies analytiques : mesure d'audience anonymisée pour améliorer nos services",
        "Aucun cookie publicitaire ou de profilage n'est utilisé",
        "Vous pouvez paramétrer votre navigateur pour refuser les cookies, mais certaines fonctionnalités pourraient être limitées.",
        "Les cookies ont une durée de vie maximale de 13 mois."
      ]
    },
    {
      title: "Modifications de la Politique",
      icon: FileText,
      content: [
        "OLCAP-CI se réserve le droit de modifier cette politique de confidentialité à tout moment.",
        "Toute modification substantielle vous sera notifiée par email ou via un bandeau sur le site.",
        "La version en vigueur est toujours accessible sur cette page.",
        "Date de dernière mise à jour : 20 janvier 2025",
        "Nous vous encourageons à consulter régulièrement cette page pour rester informé."
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-secondary/20">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Protection des Données</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Politique de Confidentialité</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              OLCAP-CI s'engage à protéger votre vie privée et vos données personnelles. 
              Découvrez comment nous collectons, utilisons et sécurisons vos informations.
            </p>
            <p className="text-sm text-muted-foreground">
              Dernière mise à jour : 20 janvier 2025
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {privacySections.map((section, index) => (
              <Card 
                key={index}
                className="glass border-secondary/10 overflow-hidden hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-blue-500 shimmer">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
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

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Des Questions sur vos Données ?</h2>
            <p className="text-lg text-muted-foreground">
              Notre équipe est à votre disposition pour répondre à toutes vos questions 
              concernant la protection de vos données personnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Card className="glass hover-scale cursor-pointer p-6 text-center">
                  <Mail className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="font-semibold">Nous contacter</p>
                  <p className="text-sm text-muted-foreground">olcapcin@gmail.com</p>
                </Card>
              </Link>
              <Link to="/mentions-legales">
                <Card className="glass hover-scale cursor-pointer p-6 text-center">
                  <FileText className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="font-semibold">Mentions légales</p>
                  <p className="text-sm text-muted-foreground">Informations juridiques</p>
                </Card>
              </Link>
            </div>
            <div className="pt-6 p-6 rounded-xl glass border border-secondary/20">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="font-semibold mb-2">Engagement de Confidentialité</p>
                  <p className="text-sm text-muted-foreground">
                    OLCAP-CI s'engage à ne jamais vendre, louer ou transmettre vos données personnelles 
                    à des tiers à des fins commerciales. Vos informations sont utilisées exclusivement 
                    dans le cadre de nos missions humanitaires et statutaires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PolitiqueConfidentialite;