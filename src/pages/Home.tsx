import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, ArrowRight, Stethoscope, HandHeart, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import olcapLogo from "@/assets/olcap-logo.jpg";
import cancerAwareness from "@/assets/cancer-awareness.jpg";
import FAQSection from "@/components/FAQ/FAQSection";

const Home = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Bénéficiaires" },
    { icon: Heart, value: "50+", label: "Dépistages" },
    { icon: Target, value: "12", label: "Campagnes" },
    { icon: Award, value: "3", label: "Années d'action" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Lutte contre l'anémie",
      description: "Dépistage, prévention et traitement de l'anémie dans les communautés vulnérables."
    },
    {
      icon: HandHeart,
      title: "Sensibilisation cancers",
      description: "Campagnes de sensibilisation sur les cancers du sein et du col de l'utérus."
    },
    {
      icon: ShieldCheck,
      title: "Réduction de la pauvreté",
      description: "Programmes d'autonomisation et de soutien aux familles démunies."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text">Santé, Solidarité</span>
                  <br />
                  <span className="text-foreground">& Espoir</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  OLCAP-CI lutte contre l'anémie, la pauvreté et sensibilise aux cancers féminins 
                  pour un avenir plus sain en Côte d'Ivoire.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow">
                  <Heart className="w-5 h-5 mr-2" />
                  Soutenir notre mission
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/mission">
                    Découvrir nos actions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Vies touchées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">12</div>
                  <div className="text-sm text-muted-foreground">Campagnes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3</div>
                  <div className="text-sm text-muted-foreground">Années</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative">
                <img 
                  src={cancerAwareness} 
                  alt="Sensibilisation aux cancers" 
                  className="rounded-2xl shadow-2xl hero-float"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <img 
                    src={olcapLogo} 
                    alt="OLCAP-CI" 
                    className="w-16 h-16 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center card-hover">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Nos domaines d'action</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons sur plusieurs fronts pour améliorer la santé et le bien-être des communautés ivoiriennes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Rejoignez notre mission pour la santé et la solidarité
            </h2>
            <p className="text-lg text-muted-foreground">
              Ensemble, nous pouvons faire la différence dans la vie de milliers de personnes. 
              Votre soutien nous aide à continuer nos actions essentielles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="pulse-glow">
                <Heart className="w-5 h-5 mr-2" />
                Faire un don maintenant
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Devenir bénévole
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default Home;