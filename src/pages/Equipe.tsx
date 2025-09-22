import { Users, Heart, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Equipe = () => {
  const teamMembers = [
    {
      name: "Dr. Kouamé Assouan",
      role: "Directeur Médical",
      specialty: "Hématologie & Nutrition",
      image: "/placeholder.svg",
      description: "Expert en lutte contre l'anémie avec 15 ans d'expérience clinique"
    },
    {
      name: "Mme Adjoua Koffi",
      role: "Coordinatrice Programmes",
      specialty: "Santé Communautaire",
      image: "/placeholder.svg",
      description: "Spécialisée dans la sensibilisation et l'éducation sanitaire"
    },
    {
      name: "Dr. Marie Tanoh",
      role: "Responsable Dépistage",
      specialty: "Oncologie Gynécologique",
      image: "/placeholder.svg",
      description: "Experte en dépistage des cancers du sein et du col de l'utérus"
    },
    {
      name: "M. Yao Kouassi",
      role: "Responsable Terrain",
      specialty: "Mobilisation Sociale",
      image: "/placeholder.svg",
      description: "Coordinateur des actions de proximité et sensibilisation"
    }
  ];

  const stats = [
    { icon: Users, value: "12+", label: "Membres actifs", color: "text-primary" },
    { icon: Heart, value: "500+", label: "Bénévoles", color: "text-accent" },
    { icon: Award, value: "8", label: "Années d'expérience", color: "text-secondary" },
    { icon: Globe, value: "15", label: "Communautés touchées", color: "text-primary" }
  ];

  const values = [
    {
      title: "Professionnalisme",
      description: "Une équipe qualifiée et engagée pour des actions de qualité",
      icon: Award
    },
    {
      title: "Proximité",
      description: "Au plus près des communautés pour un impact réel et durable",
      icon: Heart
    },
    {
      title: "Transparence",
      description: "Une gestion transparente et responsable de nos actions",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Une équipe passionnée et qualifiée au service de la santé et du bien-être 
              des communautés ivoiriennes
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Membres de l'Équipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Rencontrez les professionnels dévoués qui dirigent nos initiatives de santé
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-accent mb-3">{member.specialty}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre action quotidienne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rejoignez Notre Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nous recherchons toujours des professionnels passionnés et des bénévoles 
              dévoués pour renforcer notre équipe et amplifier notre impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Devenir Bénévole
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Heart className="w-5 h-5 mr-2" />
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Equipe;