import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, TrendingUp, Stethoscope, BookOpen, ShieldCheck } from "lucide-react";
import cancerAwareness from "@/assets/cancer-awareness.jpg";
import { updateSEO, addStructuredData } from "@/utils/seo";

const Mission = () => {
  useEffect(() => {
    updateSEO({
      title: "Notre Mission | OLCAP-CI - Santé, Solidarité et Espoir en Côte d'Ivoire",
      description: "Découvrez la mission de l'OLCAP-CI : lutte contre l'anémie, réduction de la pauvreté, sensibilisation aux cancers féminins et alphabétisation en Côte d'Ivoire.",
      keywords: "mission OLCAP, objectifs ONG, santé Côte d'Ivoire, lutte anémie, prévention cancer, alphabétisation, pauvreté Abidjan",
      canonical: "https://olcap-ci.allntic.online/mission",
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
        "name": "Mission",
        "item": "https://olcap-ci.allntic.online/mission"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);
  const missions = [
    {
      icon: Stethoscope,
      title: "Lutte contre l'anémie",
      description: "Prévention, détection, correction et sensibilisation sur l'anémie dans les communautés vulnérables.",
      actions: ["Dépistages gratuits", "Distribution de compléments", "Sensibilisation nutritionnelle", "Suivi médical"]
    },
    {
      icon: ShieldCheck,
      title: "Réduction de la pauvreté",
      description: "Programmes d'autonomisation et de soutien économique pour les familles démunies.",
      actions: ["Microcrédits", "Formation professionnelle", "Soutien aux activités génératrices", "Aide alimentaire"]
    },
    {
      icon: BookOpen,
      title: "Lutte contre l'analphabétisme",
      description: "Programmes d'alphabétisation et d'éducation pour tous les âges.",
      actions: ["Cours d'alphabétisation", "Soutien scolaire", "Formation continue", "Sensibilisation à l'éducation"]
    },
    {
      icon: Heart,
      title: "Sensibilisation aux cancers féminins",
      description: "Campagnes de prévention et dépistage des cancers du sein et du col de l'utérus.",
      actions: ["Octobre Rose", "Dépistages gratuits", "Sensibilisation communautaire", "Accompagnement psychologique"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Solidarité",
      description: "Nous croyons en la force de l'entraide et du soutien mutuel."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans toutes nos interventions."
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Nous œuvrons pour une société inclusive et équitable."
    },
    {
      icon: TrendingUp,
      title: "Impact",
      description: "Nous mesurons notre succès par l'impact positif sur les communautés."
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Notre Mission</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Transformer des vies</span>
            <br />
            <span className="text-foreground">par la santé et la solidarité</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OLCAP-CI s'engage quotidiennement pour améliorer les conditions de vie des populations 
            ivoiriennes à travers des actions concrètes et mesurables dans le domaine de la santé 
            et du développement social.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <img 
            src={cancerAwareness} 
            alt="Sensibilisation aux cancers féminins" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Missions principales */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Nos domaines d'intervention</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quatre piliers fondamentaux guident notre action pour créer un impact durable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                      <mission.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{mission.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-primary">Actions concrètes :</h4>
                    <ul className="space-y-1">
                      {mission.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nos valeurs */}
        <section className="py-16 bg-muted/20 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-text">Nos valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions et définissent notre identité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision et Impact */}
        <section className="mt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="mb-4">Notre Vision</Badge>
                <h2 className="text-3xl font-bold mb-4">
                  Une Côte d'Ivoire en bonne santé et prospère
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous aspirons à un pays où chaque citoyen a accès aux soins de santé de qualité, 
                  où la pauvreté n'est plus un obstacle au bien-être, et où l'éducation est 
                  accessible à tous.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Santé pour tous :</strong> Accès universel aux soins de santé préventifs et curatifs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Autonomisation :</strong> Renforcement des capacités des communautés locales
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Durabilité :</strong> Solutions pérennes et respectueuses de l'environnement
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Personnes aidées</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Dépistages réalisés</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-muted-foreground">Campagnes menées</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-hope mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Communautés touchées</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mission;