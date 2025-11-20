import { useEffect } from "react";
import { Activity, Users, Heart, Calendar, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const Projets = () => {
  useEffect(() => {
    updateSEO({
      title: "Nos actions – Lutte contre l'anémie et la pauvreté",
      description: "Découvrez les actions et programmes menés par OLCAP-CI contre l'anémie, la malnutrition et la pauvreté en Côte d'Ivoire.",
      keywords: "projets OLCAP-CI, actions lutte anémie, dépistage gratuit Abidjan, kits nutritionnels, campagnes sensibilisation Côte d'Ivoire",
      canonical: "https://olcap-ci.allntic.online/projets",
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
        "name": "Projets",
        "item": "https://olcap-ci.allntic.online/projets"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);
  const projects = [
    {
      title: "Lutte contre l'anémie chez les enfants et femmes enceintes",
      description: "Dépistage gratuit de l'anémie, distribution de kits alimentaires et nutritionnels, sensibilisation dans les écoles et villages, programmes de suivi nutritionnel.",
      status: "En cours",
      period: "2024-2025",
      beneficiaries: "3 500+ personnes aidées",
      icon: Activity,
      image: "/placeholder.svg",
      achievements: [
        "18 campagnes de sensibilisation menées",
        "800+ kits nutritionnels distribués",
        "12 zones d'intervention actives",
        "Partenariats avec centres de santé locaux"
      ],
      statusColor: "bg-green-500"
    },
    {
      title: "Sensibilisation cancers du sein & col de l'utérus",
      description: "Émissions radio, campagnes locales, dépistages gratuits dans églises, écoles et mairies. Partenariat avec PIF-CI pour la lutte contre les cancers féminins.",
      status: "En cours",
      period: "Permanent",
      beneficiaries: "1 500+ femmes sensibilisées",
      icon: Heart,
      image: "/placeholder.svg",
      achievements: [
        "Dépistages gratuits dans toute la Côte d'Ivoire",
        "Accord-cadre avec PIF-CI",
        "60 sensibilisateurs formés au CHU Treichville",
        "Partenariats avec associations et municipalités"
      ],
      statusColor: "bg-pink-500"
    },
    {
      title: "Réduction de la pauvreté et autonomisation",
      description: "Programmes d'autonomisation et de soutien aux familles démunies, lutte contre l'analphabétisme et amélioration des conditions de vie.",
      status: "En cours",
      period: "2024-2026",
      beneficiaries: "500+ familles accompagnées",
      icon: Target,
      image: "/placeholder.svg",
      achievements: [
        "Appui aux familles en grande difficulté",
        "Formations professionnelles offertes",
        "Distribution aide alimentaire d'urgence",
        "Accompagnement vers l'autonomie économique"
      ],
      statusColor: "bg-secondary"
    },
    {
      title: "Distribution de kits alimentaires et nutritionnels",
      description: "Distribution ciblée de kits nutritionnels aux populations les plus vulnérables pour lutter contre la malnutrition et l'anémie.",
      status: "En cours",
      period: "Permanent",
      beneficiaries: "800+ bénéficiaires",
      icon: Users,
      image: "/placeholder.svg",
      achievements: [
        "800+ kits nutritionnels distribués",
        "Ciblage familles vulnérables prioritaires",
        "Suivi nutritionnel régulier",
        "Partenariats avec structures locales"
      ],
      statusColor: "bg-hope"
    }
  ];

  const partnerships = [
    {
      name: "CHU Treichville",
      type: "Partenaire Médical",
      description: "Formation et supervision médicale"
    },
    {
      name: "PIF-CI",
      type: "Accord-cadre",
      description: "Lutte contre les cancers féminins"
    },
    {
      name: "Municipalités",
      type: "Partenaire Local",
      description: "Facilitation accès communautés"
    },
    {
      name: "Églises & Écoles",
      type: "Lieux d'intervention",
      description: "Sites de dépistage et sensibilisation"
    }
  ];

  const upcomingProjects = [
    {
      title: "Téléconsultation Rurale",
      description: "Mise en place d'un système de téléconsultation pour les zones rurales",
      startDate: "Q2 2025",
      icon: Activity
    },
    {
      title: "Centre de Nutrition",
      description: "Création d'un centre de prise en charge nutritionnelle",
      startDate: "Q3 2025",
      icon: Heart
    },
    {
      title: "Programme Alphabétisation",
      description: "Lutte contre l'analphabétisme chez les femmes",
      startDate: "Q4 2025",
      icon: Users
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shimmer">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Nos Actions</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Nos projets en Côte d'Ivoire</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Nous œuvrons pour améliorer la santé, l'alimentation et les conditions de vie 
              des familles les plus touchées par l'anémie et la pauvreté.
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nos Actions Prioritaires
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Des interventions concrètes qui changent la vie des communautés vulnérables 
              en Côte d'Ivoire
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <project.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge className={`${project.statusColor} text-white`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Période</div>
                      <div className="font-medium">{project.period}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Bénéficiaires</div>
                      <div className="font-medium">{project.beneficiaries}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground mb-3">Réalisations clés :</h4>
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Partenaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborations stratégiques pour un impact maximal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{partner.name}</h3>
                  <Badge variant="outline" className="mb-3">{partner.type}</Badge>
                  <p className="text-sm text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projets à Venir
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos prochaines initiatives pour étendre notre impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-dashed border-2">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <project.icon className="w-8 h-8 text-primary/60" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-accent">{project.startDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Soutenez Nos Projets
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Votre soutien nous permet de concrétiser ces projets et d'en lancer de nouveaux. 
              Chaque contribution compte pour sauver des vies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/don" 
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors pulse-glow"
              >
                <Heart className="w-5 h-5 mr-2" />
                Faire un Don
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Devenir Partenaire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projets;