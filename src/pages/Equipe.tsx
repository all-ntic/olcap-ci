import { useEffect } from "react";
import { Users, Heart, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const Equipe = () => {
  useEffect(() => {
    updateSEO({
      title: "Notre Équipe & Partenaires | OLCAP-CI - Professionnels de Santé Dévoués en Côte d'Ivoire",
      description: "Découvrez l'équipe pluridisciplinaire d'OLCAP-CI : médecins, nutritionnistes, coordinateurs et 500+ bénévoles engagés contre l'anémie, la pauvreté et les cancers féminins en Côte d'Ivoire. 8 ans d'expérience, 15 communautés touchées.",
      keywords: "équipe OLCAP-CI, médecins ONG Abidjan, professionnels santé Côte d'Ivoire, bénévoles santé publique, hématologues Abidjan, oncologues Yopougon, nutritionnistes ONG, sensibilisateurs santé, équipe humanitaire Côte d'Ivoire, Dr Kouamé Assouan, partenaires santé Abidjan, ONG santé communautaire",
      canonical: "https://olcap-ci.allntic.online/equipe",
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
        "name": "Équipe & Partenaires",
        "item": "https://olcap-ci.allntic.online/equipe"
      }]
    };

    const organizationTeamSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OLCAP-CI",
      "url": "https://olcap-ci.allntic.online",
      "member": [
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Dr. Kouamé Assouan",
            "jobTitle": "Directeur Médical",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Hématologue & Nutritionniste"
            }
          },
          "roleName": "Directeur Médical"
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Mme Adjoua Koffi",
            "jobTitle": "Coordinatrice Programmes"
          },
          "roleName": "Coordinatrice Programmes Santé Communautaire"
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "Dr. Marie Tanoh",
            "jobTitle": "Responsable Dépistage"
          },
          "roleName": "Responsable Dépistage Cancers Féminins"
        },
        {
          "@type": "OrganizationRole",
          "member": {
            "@type": "Person",
            "name": "M. Yao Kouassi",
            "jobTitle": "Responsable Terrain"
          },
          "roleName": "Coordinateur Actions de Proximité"
        }
      ]
    };

    addStructuredData(breadcrumbSchema);
    addStructuredData(organizationTeamSchema);
  }, []);
  const teamMembers = [
    {
      name: "Dr. Kouamé Assouan",
      role: "Directeur Médical & Fondateur",
      specialty: "Hématologie, Nutrition & Santé Publique",
      image: "/placeholder.svg",
      description: "Expert en lutte contre l'anémie et malnutrition avec 15+ ans d'expérience clinique en Afrique de l'Ouest. Pionnier des programmes de dépistage communautaire en Côte d'Ivoire."
    },
    {
      name: "Mme Adjoua Koffi",
      role: "Coordinatrice Programmes Sociaux",
      specialty: "Santé Communautaire & Éducation",
      image: "/placeholder.svg",
      description: "10 ans d'expérience en mobilisation sociale et sensibilisation sanitaire. A formé 60+ agents de santé communautaire à travers Abidjan et l'intérieur du pays."
    },
    {
      name: "Dr. Marie Tanoh",
      role: "Responsable Dépistage Cancers Féminins",
      specialty: "Oncologie Gynécologique & Prévention",
      image: "/placeholder.svg",
      description: "Spécialiste en dépistage précoce des cancers du sein et du col de l'utérus. Coordonne les campagnes Octobre Rose et les partenariats avec le CHU de Treichville."
    },
    {
      name: "M. Yao Kouassi",
      role: "Responsable Actions de Terrain",
      specialty: "Mobilisation Sociale & Proximité",
      image: "/placeholder.svg",
      description: "Coordinateur des interventions dans les écoles, églises et villages. Expert en animation communautaire et gestion de bénévoles sur le terrain."
    }
  ];

  const stats = [
    { icon: Users, value: "12+", label: "Professionnels de santé", color: "text-primary" },
    { icon: Heart, value: "500+", label: "Bénévoles formés et actifs", color: "text-accent" },
    { icon: Award, value: "8+", label: "Années d'expertise terrain", color: "text-secondary" },
    { icon: Globe, value: "15+", label: "Communautés partenaires", color: "text-primary" }
  ];

  const values = [
    {
      title: "Excellence Médicale",
      description: "Une équipe hautement qualifiée de médecins, nutritionnistes et spécialistes certifiés garantissant des interventions sanitaires de classe internationale",
      icon: Award
    },
    {
      title: "Proximité Communautaire",
      description: "Présence active sur le terrain dans 15+ communautés. Actions directes dans les écoles, églises, villages et quartiers pour toucher les populations les plus vulnérables",
      icon: Heart
    },
    {
      title: "Transparence Totale",
      description: "Gestion rigoureuse et traçable de chaque don, publication régulière des rapports d'activités et communication ouverte avec nos partenaires et bénéficiaires",
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
              Notre Équipe & Partenaires
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Des professionnels de santé dévoués, 500+ bénévoles engagés et des partenaires stratégiques 
              unis pour transformer la santé communautaire en Côte d'Ivoire. Ensemble depuis 2020, 
              nous touchons 15+ communautés à Abidjan et dans tout le pays.
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
              Équipe Dirigeante OLCAP-CI
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une équipe pluridisciplinaire de médecins, coordinateurs et spécialistes terrain 
              avec des décennies d'expérience cumulée en santé publique et action sociale
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
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes éthiques et professionnels qui orientent chaque action de l'OLCAP-CI 
              depuis sa création et guident notre engagement quotidien
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
              Devenez Acteur du Changement
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Rejoignez nos 500+ bénévoles et notre réseau de 15+ partenaires communautaires. 
              Que vous soyez professionnel de santé, étudiant, retraité ou simplement passionné 
              par l'action sociale, il y a une place pour vous dans l'équipe OLCAP-CI. 
              Ensemble, sauvons des vies et bâtissons une Côte d'Ivoire en meilleure santé.
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