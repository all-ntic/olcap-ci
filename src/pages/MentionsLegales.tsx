import { Shield, User, Database, Mail, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MentionsLegales = () => {
  const legalSections = [
    {
      title: "Identification de l'Organisation",
      icon: User,
      content: [
        "Dénomination : OLCAP-CI (Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire)",
        "Statut : Organisation Non Gouvernementale (ONG)",
        "Siège social : Ananeraie, Yopougon, Abidjan, Côte d'Ivoire",
        "Email : olcapcin@gmail.com",
        "Téléphones : (+225) 01 51 83 82 82 / (+225) 05 95 20 33 72"
      ]
    },
    {
      title: "Responsable de la Publication",
      icon: Mail,
      content: [
        "Directeur de la publication : Direction OLCAP-CI",
        "Contact éditorial : olcapcin@gmail.com",
        "Responsable technique : Équipe digitale OLCAP-CI"
      ]
    },
    {
      title: "Propriété Intellectuelle",
      icon: Shield,
      content: [
        "Le contenu de ce site (textes, images, logos) est la propriété exclusive d'OLCAP-CI.",
        "Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.",
        "Les marques et logos présents sur le site sont protégés par le droit des marques.",
        "L'utilisation non autorisée constitue une contrefaçon passible de sanctions pénales."
      ]
    },
    {
      title: "Protection des Données Personnelles",
      icon: Database,
      content: [
        "OLCAP-CI s'engage à protéger vos données personnelles conformément aux lois ivoiriennes.",
        "Les informations collectées via nos formulaires sont utilisées uniquement pour nos missions statutaires.",
        "Vos données ne sont jamais vendues, louées ou transmises à des tiers sans votre consentement.",
        "Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
        "Pour exercer ces droits, contactez-nous à : olcapcin@gmail.com"
      ]
    },
    {
      title: "Cookies et Technologie",
      icon: Database,
      content: [
        "Ce site utilise des cookies techniques nécessaires à son fonctionnement.",
        "Aucun cookie de traçage publicitaire n'est utilisé.",
        "Les données de navigation sont anonymisées et utilisées pour améliorer nos services.",
        "Vous pouvez paramétrer votre navigateur pour refuser les cookies."
      ]
    },
    {
      title: "Limitation de Responsabilité",
      icon: Shield,
      content: [
        "OLCAP-CI s'efforce de maintenir des informations exactes et à jour sur ce site.",
        "Cependant, nous ne garantissons pas l'exactitude, la complétude ou l'actualité des informations.",
        "OLCAP-CI ne saurait être tenue responsable des dommages directs ou indirects liés à l'utilisation du site.",
        "Les liens externes sont fournis à titre informatif et n'engagent pas notre responsabilité."
      ]
    }
  ];

  const donationTerms = [
    "Les dons sont traités via la plateforme sécurisée Paystack.",
    "OLCAP-CI s'engage à utiliser les fonds exclusivement pour ses missions statutaires.",
    "Un reçu fiscal peut être délivré sur demande pour les dons éligibles.",
    "Les coordonnées bancaires ne sont jamais stockées sur nos serveurs.",
    "En cas de problème de paiement, contactez-nous dans les 48h."
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Informations légales et conditions d'utilisation du site OLCAP-CI
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {legalSections.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xl">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Terms */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">Conditions des Dons</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {donationTerms.map((term, index) => (
                    <li key={index} className="text-muted-foreground leading-relaxed">
                      • {term}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Update Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Mise à Jour</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Dernière mise à jour :</strong> Janvier 2025
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    OLCAP-CI se réserve le droit de modifier ces mentions légales à tout moment. 
                    Les modifications prennent effet dès leur publication sur le site. 
                    Nous vous recommandons de consulter régulièrement cette page.
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Contact :</strong> Pour toute question concernant ces mentions légales, 
                    contactez-nous à <a href="mailto:olcapcin@gmail.com" className="text-primary hover:underline">olcapcin@gmail.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Des Questions ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est à votre disposition pour tout éclaircissement
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;