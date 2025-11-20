import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Shield, BookOpen, Lightbulb, ArrowRight, CheckCircle2, Award, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData, organizationSchema } from "@/utils/seo";
import olcapLogo from "@/assets/olcap-logo.jpg";

const APropos = () => {
  useEffect(() => {
    updateSEO({
      title: "À propos d'OLCAP-CI – ONG humanitaire en Côte d'Ivoire",
      description: "Découvrez l'histoire, les valeurs et la mission d'OLCAP-CI, ONG engagée contre l'anémie et la pauvreté en Côte d'Ivoire.",
      keywords: "OLCAP-CI à propos, ONG Côte d'Ivoire, mission OLCAP, histoire ONG ivoirienne, valeurs organisation humanitaire, anémie pauvreté Abidjan",
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

  const values = [
    {
      icon: Heart,
      title: "Santé",
      description: "Nous plaçons la santé au cœur de nos actions pour améliorer le bien-être des populations vulnérables.",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Users,
      title: "Solidarité",
      description: "L'entraide et le soutien mutuel guident nos interventions auprès des communautés.",
      color: "from-secondary to-blue-500"
    },
    {
      icon: Shield,
      title: "Prévention",
      description: "Agir en amont pour éviter les maladies et améliorer la qualité de vie.",
      color: "from-accent to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Éducation",
      description: "Former et sensibiliser pour un changement durable dans les comportements de santé.",
      color: "from-hope to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "Espoir",
      description: "Apporter de l'espoir et des solutions concrètes aux familles en difficulté.",
      color: "from-primary to-secondary"
    }
  ];

  const achievements = [
    { icon: CheckCircle2, text: "Fondée en 2020 pour servir les communautés vulnérables" },
    { icon: CheckCircle2, text: "Interventions dans 12 zones de Côte d'Ivoire" },
    { icon: CheckCircle2, text: "Partenariats avec organisations locales et internationales" },
    { icon: CheckCircle2, text: "Formation de sensibilisateurs communautaires qualifiés" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shimmer">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Notre Histoire</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Qui sommes-nous ?</span>
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              <strong className="text-foreground">OLCAP-CI</strong> est une organisation à but non lucratif fondée pour combattre l'anémie, 
              la malnutrition et la pauvreté en Côte d'Ivoire. 
              Nous travaillons avec les communautés, écoles, femmes enceintes et populations rurales 
              pour renforcer la prévention et l'accès à une alimentation équilibrée.
            </p>

            <div className="flex justify-center">
              <img 
                src={olcapLogo} 
                alt="Logo OLCAP-CI - Organisation de lutte contre l'anémie et la pauvreté" 
                className="w-32 h-32 rounded-2xl shadow-2xl ring-4 ring-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="glass border-primary/20 overflow-hidden group hover-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-6 shimmer">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Notre Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Améliorer la santé, l'alimentation et les conditions de vie des familles les plus touchées 
                  par l'anémie et la pauvreté à travers des actions concrètes de sensibilisation, 
                  prévention, dépistage et accompagnement communautaire.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-secondary/20 overflow-hidden group hover-scale">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8 relative">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-blue-500 mb-6 shimmer">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Devenir une référence nationale dans la lutte contre l'anémie, la malnutrition et la pauvreté 
                  en Côte d'Ivoire, en offrant des solutions durables, accessibles et adaptées aux besoins 
                  des populations vulnérables.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="card-hover group border-0 shadow-xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <CardContent className="p-8 relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} mb-6 shimmer`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Nos Réalisations</h2>
              <p className="text-lg text-muted-foreground">
                Un engagement concret depuis notre création
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-xl glass border border-primary/10 hover:border-primary/30 transition-all hover-scale"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <achievement.icon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-lg">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-soft" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="glass border-primary/20 shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <CardContent className="p-12 lg:p-16">
              <div className="text-center space-y-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-glow mb-6 shimmer">
                  <TrendingUp className="w-10 h-10 text-white animate-pulse-soft" />
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Rejoignez notre mission
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Ensemble, nous pouvons faire la différence dans la lutte contre l'anémie et la pauvreté. 
                  Votre soutien permet de sauver des vies et d'améliorer durablement les conditions de vie des familles vulnérables.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link to="/don">
                    <Button size="lg" className="group shadow-elegant hover-scale">
                      <Heart className="mr-2 w-5 h-5" />
                      Faire un don
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link to="/projets">
                    <Button variant="outline" size="lg" className="hover-scale">
                      Découvrir nos projets
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default APropos;
