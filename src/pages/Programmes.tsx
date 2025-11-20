import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, HeartPulse, Droplet, Ribbon, Users, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const Programmes = () => {
  useEffect(() => {
    updateSEO({
      title: "Nos Programmes de Santé | OLCAP-CI - Lutte contre l'Anémie et les Cancers",
      description: "Découvrez nos programmes de lutte contre l'anémie, de dépistage des cancers féminins, Octobre Rose et nos actions de prévention en Côte d'Ivoire. Résultats concrets et impact mesurable.",
      keywords: "programmes santé OLCAP, lutte anémie Côte d'Ivoire, dépistage cancer sein, octobre rose Abidjan, prévention cancer col utérus, dépistage gratuit Yopougon",
      canonical: "https://olcap-ci.allntic.online/programmes",
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
        "name": "Programmes",
        "item": "https://olcap-ci.allntic.online/programmes"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  const programmes = [
    {
      icon: Droplet,
      title: "Lutte contre l'Anémie",
      category: "Santé & Nutrition",
      description: "Programme de détection, prévention et correction de l'anémie en Côte d'Ivoire",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      actions: [
        "Dépistages gratuits dans les communautés",
        "Distribution de compléments alimentaires",
        "Sensibilisation sur la nutrition",
        "Suivi médical des cas détectés"
      ],
      results: [
        "500+ personnes dépistées en 2024",
        "150+ cas traités avec succès",
        "20 campagnes de sensibilisation"
      ]
    },
    {
      icon: Ribbon,
      title: "Octobre Rose",
      category: "Prévention Cancers",
      description: "Campagne annuelle de sensibilisation et dépistage des cancers du sein et du col de l'utérus",
      color: "text-pink-rose",
      bgColor: "bg-pink-500/10",
      actions: [
        "Dépistages gratuits (mammographie, frottis)",
        "Émissions radio éducatives",
        "Campagnes dans les églises et écoles",
        "Consultations médicales gratuites"
      ],
      results: [
        "300+ femmes dépistées (Octobre 2024)",
        "12 émissions radio diffusées",
        "Partenariat avec 8 structures de santé"
      ]
    },
    {
      icon: HeartPulse,
      title: "Prévention Cancers Féminins",
      category: "Santé de la Femme",
      description: "Programme continu de sensibilisation, dépistage et accompagnement des femmes",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      actions: [
        "Formation de 60 sensibilisateurs (CHU Treichville)",
        "Dépistages réguliers en milieu communautaire",
        "Accompagnement psychologique",
        "Orientation vers structures spécialisées"
      ],
      results: [
        "60 sensibilisateurs formés et actifs",
        "Accord-cadre avec PIF-CI signé",
        "15 partenaires institutionnels"
      ]
    },
    {
      icon: Activity,
      title: "Lutte contre la Pauvreté",
      category: "Développement Social",
      description: "Actions de soutien économique et d'autonomisation des populations vulnérables",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      actions: [
        "Microcrédits pour activités génératrices de revenus",
        "Formations professionnelles",
        "Dons de kits de démarrage d'activités",
        "Sensibilisation à l'entrepreneuriat"
      ],
      results: [
        "100+ familles soutenues",
        "50 formations réalisées",
        "Taux de réussite : 70%"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 text-lg px-6 py-2">Impact Concret</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Nos Programmes de Santé
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Des actions concrètes pour améliorer la santé et le bien-être des communautés vulnérables
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {programmes.map((programme, index) => {
              const Icon = programme.icon;
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className={`${programme.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className={`h-8 w-8 ${programme.color}`} />
                    </div>
                    <Badge className="w-fit mb-2">{programme.category}</Badge>
                    <CardTitle className="text-2xl">{programme.title}</CardTitle>
                    <CardDescription className="text-base">{programme.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" />
                        Nos Actions
                      </h3>
                      <ul className="space-y-2">
                        {programme.actions.map((action, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Résultats 2024
                      </h3>
                      <ul className="space-y-2">
                        {programme.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm font-medium">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prochains événements */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Prochains Événements</h2>
          
          <div className="space-y-4">
            <Card className="card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-pink-500/10 p-3 rounded-lg flex-shrink-0">
                  <Calendar className="h-6 w-6 text-pink-rose" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Campagne Octobre Rose 2025</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Dépistage gratuit du cancer du sein et du col de l'utérus
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Tout le mois d'octobre 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Yopougon, Abidjan
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-red-500/10 p-3 rounded-lg flex-shrink-0">
                  <Calendar className="h-6 w-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Journée de Dépistage Anémie</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Test sanguin gratuit et conseils nutritionnels personnalisés
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Tous les premiers samedis du mois
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Ananeraie, Yopougon
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Participez à Nos Actions</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Soutenez nos programmes ou rejoignez nos équipes de bénévoles pour faire la différence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/don">
                <HeartPulse className="h-5 w-5" />
                Faire un Don
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/contact">
                <Users className="h-5 w-5" />
                Devenir Bénévole
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Programmes;
