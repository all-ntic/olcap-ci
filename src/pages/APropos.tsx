import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Target, Users, TrendingUp, Award, Globe } from "lucide-react";
import { updateSEO, addStructuredData, organizationSchema } from "@/utils/seo";

const APropos = () => {
  useEffect(() => {
    updateSEO({
      title: "À Propos de l'OLCAP-CI | Notre Mission et Nos Valeurs",
      description: "Découvrez l'histoire, la mission et les valeurs de l'OLCAP-CI. Organisation engagée depuis 2020 dans la lutte contre l'anémie, la pauvreté et les cancers féminins en Côte d'Ivoire.",
      keywords: "OLCAP-CI à propos, ONG Côte d'Ivoire, mission OLCAP, valeurs santé, lutte anémie Abidjan, histoire ONG ivoirienne",
      canonical: "https://olcap-ci.allntic.online/a-propos",
      ogType: "website"
    });

    addStructuredData(organizationSchema);

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
        "name": "À Propos",
        "item": "https://olcap-ci.allntic.online/a-propos"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 text-lg px-6 py-2">Notre Histoire</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            À Propos de l'OLCAP-CI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Améliorer la santé et le bien-être des populations vulnérables en Côte d'Ivoire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Notre Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Devenir une référence nationale dans la lutte contre l'anémie, la pauvreté et les cancers féminins, 
                  en offrant des solutions durables et accessibles à tous.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nous aspirons à une Côte d'Ivoire où chaque citoyen a accès à des soins de santé de qualité 
                  et à des opportunités économiques équitables.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <Heart className="h-12 w-12 text-pink-rose mb-4" />
                <CardTitle className="text-2xl">Nos Valeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Solidarité :</strong> Nous croyons en l'entraide et le soutien mutuel
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Santé pour tous :</strong> Accès équitable aux soins médicaux
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Prévention :</strong> Mieux vaut prévenir que guérir
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Éducation :</strong> Sensibilisation et formation continue
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <strong>Espoir :</strong> Offrir un avenir meilleur aux plus vulnérables
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Notre Histoire</h2>
          
          <Card className="card-hover">
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  Fondation et Origine
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  L'OLCAP-CI a été fondée en 2020 avec la conviction profonde qu'il est possible de transformer 
                  des vies en s'attaquant aux problèmes de santé publique les plus urgents en Côte d'Ivoire. 
                  Née d'une volonté collective de médecins, d'infirmiers et de bénévoles passionnés, notre organisation 
                  s'est donnée pour mission de lutter contre l'anémie, la pauvreté et les cancers féminins.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Notre Évolution
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Depuis notre création, nous avons formé <strong>60 sensibilisateurs</strong> au CHU de Treichville, 
                  réalisé des dizaines de campagnes de dépistage gratuit dans les églises, écoles et mairies, 
                  et établi des partenariats solides avec des institutions publiques et privées.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  Chaque année, nous participons activement à <strong>Octobre Rose</strong>, organisant des 
                  émissions radio et des campagnes locales pour sensibiliser aux cancers du sein et du col de l'utérus.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Notre Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  À travers nos programmes de sensibilisation, de dépistage et de prévention, nous avons touché 
                  des milliers de personnes, sauvé des vies et apporté de l'espoir aux communautés les plus vulnérables.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partenariats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nos Partenaires</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nous collaborons avec des institutions publiques, des ONG et des acteurs de la santé pour maximiser notre impact.
          </p>
          <Card className="card-hover">
            <CardContent className="p-8">
              <ul className="space-y-3 text-left">
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>PIF-CI</strong> : Accord-cadre pour la lutte contre les cancers féminins</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>CHU de Treichville</strong> : Formation de sensibilisateurs</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>Municipalités locales</strong> : Campagnes de dépistage communautaires</span>
                </li>
                <li className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0" />
                  <span><strong>Associations locales</strong> : Sensibilisation et prévention</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default APropos;
