import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart, Users, Target, Award, ArrowRight, Stethoscope, HandHeart, ShieldCheck, Sparkles, TrendingUp, CheckCircle2, Ribbon } from "lucide-react";
import { Link } from "react-router-dom";
import olcapLogo from "@/assets/olcap-logo.jpg";
import cancerAwareness from "@/assets/cancer-awareness.jpg";
import FAQSection from "@/components/FAQ/FAQSection";

const Home = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Bénéficiaires", color: "primary" },
    { icon: Heart, value: "50+", label: "Dépistages", color: "accent" },
    { icon: Target, value: "12", label: "Campagnes", color: "secondary" },
    { icon: Award, value: "3", label: "Années d'action", color: "hope" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "Lutte contre l'anémie",
      description: "Dépistage, prévention et traitement de l'anémie dans les communautés vulnérables.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: HandHeart,
      title: "Sensibilisation cancers",
      description: "Campagnes de sensibilisation sur les cancers du sein et du col de l'utérus.",
      gradient: "from-accent to-pink-500"
    },
    {
      icon: ShieldCheck,
      title: "Réduction de la pauvreté",
      description: "Programmes d'autonomisation et de soutien aux familles démunies.",
      gradient: "from-secondary to-blue-500"
    }
  ];

  const impacts = [
    { icon: CheckCircle2, text: "60 sensibilisateurs formés au CHU Treichville" },
    { icon: CheckCircle2, text: "Partenariats avec PIF-CI et associations locales" },
    { icon: CheckCircle2, text: "Dépistages gratuits dans toute la Côte d'Ivoire" },
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Octobre Rose Banner */}
      <section className="relative py-4 bg-gradient-to-r from-pink-rose via-pink-rose/90 to-pink-rose overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Alert className="border-white/50 bg-white/95 backdrop-blur-sm">
            <Ribbon className="h-5 w-5 text-pink-rose" />
            <AlertTitle className="text-pink-rose font-bold text-lg">Octobre Rose 2025 - Ensemble contre le cancer du sein</AlertTitle>
            <AlertDescription className="text-foreground">
              Rejoignez notre campagne de dépistage gratuit ce mois-ci. Ensemble, sauvons des vies ! 
              <Link to="/projets" className="underline font-semibold ml-2 hover:text-pink-rose transition-colors text-pink-rose">
                Voir nos actions →
              </Link>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Hero Section with Advanced Effects */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-animated opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        
        {/* Floating Particles */}
        <div className="particles-bg">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle bg-primary"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shimmer">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">3 ans d'impact positif</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                  <span className="gradient-text glow-text">Santé, Solidarité</span>
                  <br />
                  <span className="text-foreground">& Espoir</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  OLCAP-CI lutte contre l'anémie, la pauvreté et sensibilise aux cancers féminins 
                  pour un avenir plus sain en Côte d'Ivoire.
                </p>
              </div>

              {/* Impact Points */}
              <div className="space-y-3">
                {impacts.map((impact, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <impact.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{impact.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="pulse-glow text-lg h-14 px-8" asChild>
                  <Link to="/don">
                    <Heart className="w-5 h-5 mr-2" />
                    Soutenir notre mission
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg h-14 px-8 hover:scale-105 transition-transform" asChild>
                  <Link to="/mission">
                    Découvrir nos actions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image with Neon Border */}
            <div className="relative bounce-in lg:scale-110">
              <div className="neon-border">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={cancerAwareness} 
                    alt="Sensibilisation aux cancers" 
                    className="w-full h-auto hero-float"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
              
              {/* Floating Logo */}
              <div className="absolute -bottom-8 -left-8 glass p-4 rounded-2xl border border-primary/30 shadow-2xl shimmer">
                <img 
                  src={olcapLogo} 
                  alt="OLCAP-CI" 
                  className="w-20 h-20 rounded-xl"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-primary/20 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Vies changées</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Modern Cards */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center card-hover glass border-primary/10 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${stat.color} to-${stat.color}/50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-extrabold text-${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Gradient Cards */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nos Actions</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              <span className="gradient-text">Nos domaines d'action</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nous intervenons sur plusieurs fronts pour améliorer la santé et le bien-être des communautés ivoiriennes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="card-hover group border-0 shadow-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardContent className="p-8 relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shimmer`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
                  
                  <div className="mt-6 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    <span className="text-sm">En savoir plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Gradient Background */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animated" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/90 to-background/80" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 shimmer">
                <Heart className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Faites partie du changement</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight">
                <span className="gradient-text glow-text">Rejoignez notre mission</span>
                <br />
                <span className="text-foreground">pour la santé et la solidarité</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ensemble, nous pouvons faire la différence dans la vie de milliers de personnes. 
                Votre soutien nous aide à continuer nos actions essentielles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button size="lg" className="pulse-glow text-lg h-16 px-10 text-white shadow-2xl" asChild>
                <Link to="/don">
                  <Heart className="w-6 h-6 mr-2 animate-pulse" />
                  Faire un don maintenant
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg h-16 px-10 border-2 hover:scale-105 transition-transform glass" asChild>
                <Link to="/contact">
                  Devenir bénévole
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Paiements sécurisés</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>100% transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Impact mesurable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Octobre Rose Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-pink-rose/5 via-background to-accent/5">
        <div className="absolute inset-0 opacity-5">
          {[...Array(15)].map((_, i) => (
            <Ribbon
              key={i}
              className="absolute text-pink-rose"
              style={{
                width: `${Math.random() * 40 + 20}px`,
                height: `${Math.random() * 40 + 20}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-pink-rose/10 border border-pink-rose/30 mb-6">
              <Ribbon className="w-5 h-5 text-pink-rose" />
              <span className="text-sm font-semibold text-pink-rose">Octobre Rose 2025</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-pink-rose via-accent to-pink-rose bg-clip-text text-transparent">
                Mobilisons-nous contre le cancer du sein
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Chaque année, des milliers de femmes sont touchées par le cancer du sein. 
              Ensemble, sensibilisons, dépistons et soutenons les femmes dans leur combat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="card-hover border-pink-rose/20 bg-gradient-to-br from-white to-pink-rose/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-rose to-accent flex items-center justify-center mb-6 mx-auto">
                  <Ribbon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Dépistage gratuit</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Participez à nos campagnes de dépistage gratuit dans les églises, écoles et mairies de toute la Côte d'Ivoire.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-pink-rose/20 bg-gradient-to-br from-white to-pink-rose/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-rose to-accent flex items-center justify-center mb-6 mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Sensibilisation</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  60 sensibilisateurs formés au CHU Treichville pour éduquer et informer les communautés sur la prévention.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-pink-rose/20 bg-gradient-to-br from-white to-pink-rose/5">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-rose to-accent flex items-center justify-center mb-6 mx-auto">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Soutien aux femmes</h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Accompagnement psychologique et matériel des femmes atteintes, en partenariat avec PIF-CI.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-rose to-accent hover:from-pink-rose/90 hover:to-accent/90 text-white text-lg h-14 px-8 shadow-lg" asChild>
                <Link to="/don">
                  <Heart className="w-5 h-5 mr-2" />
                  Soutenir Octobre Rose
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-pink-rose text-pink-rose hover:bg-pink-rose/10 text-lg h-14 px-8" asChild>
                <Link to="/contact">
                  Participer aux campagnes
                  <ArrowRight className="w-5 h-5 ml-2" />
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