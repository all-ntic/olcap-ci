import { Activity, Users, Heart, Calendar, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projets = () => {
  const projects = [
    {
      title: "Dépistage Anémie Communautaire",
      description: "Programme de dépistage gratuit de l'anémie dans les écoles et centres de santé communautaires",
      status: "En cours",
      period: "2024-2025",
      beneficiaries: "2,500+ personnes",
      icon: Activity,
      image: "/placeholder.svg",
      achievements: [
        "15 centres de dépistage actifs",
        "500 cas d'anémie détectés",
        "85% de taux de suivi médical"
      ],
      statusColor: "bg-green-500"
    },
    {
      title: "Octobre Rose OLCAP-CI",
      description: "Campagne annuelle de sensibilisation et dépistage des cancers du sein et du col de l'utérus",
      status: "Annuel",
      period: "Octobre 2024",
      beneficiaries: "1,200+ femmes",
      icon: Heart,
      image: "/placeholder.svg",
      achievements: [
        "8 journées de dépistage gratuites",
        "200 mammographies réalisées",
        "50 cas suspects référés"
      ],
      statusColor: "bg-pink-500"
    },
    {
      title: "Formation Sensibilisateurs",
      description: "Programme de formation de sensibilisateurs communautaires sur les questions de santé",
      status: "Terminé",
      period: "2023-2024",
      beneficiaries: "60 formés",
      icon: Users,
      image: "/placeholder.svg",
      achievements: [
        "60 sensibilisateurs formés",
        "12 modules de formation développés",
        "Partenariat avec CHU Treichville"
      ],
      statusColor: "bg-blue-500"
    },
    {
      title: "Lutte Contre la Pauvreté",
      description: "Initiatives d'autonomisation économique et de soutien aux familles vulnérables",
      status: "En cours",
      period: "2024-2026",
      beneficiaries: "300+ familles",
      icon: Target,
      image: "/placeholder.svg",
      achievements: [
        "50 microcrédits accordés",
        "100 formations professionnelles",
        "25 coopératives créées"
      ],
      statusColor: "bg-green-500"
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Nos Projets
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Découvrez nos initiatives concrètes pour améliorer la santé et le bien-être 
              des communautés ivoiriennes
            </p>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projets Actuels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos initiatives en cours qui transforment des vies
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
              <a 
                href="/don" 
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors pulse-glow"
              >
                <Heart className="w-5 h-5 mr-2" />
                Faire un Don
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Devenir Partenaire
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projets;