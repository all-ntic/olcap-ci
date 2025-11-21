import { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Ribbon, Droplet, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { updateSEO, addStructuredData } from "@/utils/seo";

const Actualites = () => {
  useEffect(() => {
    updateSEO({
      title: "Actualités OLCAP-CI 2025 | Actions Santé, Dépistages & Octobre Rose Abidjan",
      description: "Suivez en temps réel nos campagnes de dépistage gratuit des cancers féminins, Octobre Rose 2025, formations de sensibilisateurs et actions contre l'anémie en Côte d'Ivoire. Actualités humanitaires OLCAP-CI Abidjan.",
      keywords: "actualités OLCAP-CI 2025, news santé Côte d'Ivoire, octobre rose Abidjan 2025, campagne dépistage cancer gratuit, dépistage anémie Yopougon, événements ONG santé Abidjan, formations sensibilisateurs santé, partenariat PIF-CI, CHU Treichville dépistage, actions humanitaires Côte d'Ivoire",
      canonical: "https://olcap-ci.allntic.online/actualites",
      ogType: "website",
      ogImage: "https://olcap-ci.allntic.online/src/assets/cancer-awareness.jpg"
    });

    // Breadcrumb Schema
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
        "name": "Actualités",
        "item": "https://olcap-ci.allntic.online/actualites"
      }]
    };

    // News Articles Schema (Collection)
    const newsArticlesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "NewsArticle",
          "position": 1,
          "headline": "Lancement de la Campagne Octobre Rose 2025 - OLCAP-CI",
          "description": "Notre grande campagne annuelle de sensibilisation et de dépistage gratuit des cancers féminins démarre ce mois-ci dans plusieurs quartiers d'Abidjan.",
          "datePublished": "2025-10-01",
          "dateModified": "2025-10-01",
          "author": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "url": "https://olcap-ci.allntic.online"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "image": "https://olcap-ci.allntic.online/src/assets/cancer-awareness.jpg",
          "articleSection": "Octobre Rose",
          "keywords": "octobre rose 2025, dépistage gratuit cancer, Yopougon, Abobo, Koumassi, mammographie gratuite"
        },
        {
          "@type": "NewsArticle",
          "position": 2,
          "headline": "300 Femmes Dépistées lors de la Journée Mondiale contre le Cancer",
          "description": "Un succès retentissant pour notre journée de dépistage gratuit organisée à l'occasion de la Journée Mondiale de Lutte contre le Cancer.",
          "datePublished": "2025-02-04",
          "dateModified": "2025-02-04",
          "author": {
            "@type": "Person",
            "name": "Dr. Kouassi"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "articleSection": "Dépistage",
          "keywords": "dépistage gratuit cancer, journée mondiale cancer, 300 femmes dépistées Abidjan"
        },
        {
          "@type": "NewsArticle",
          "position": 3,
          "headline": "Formation de 25 Nouveaux Sensibilisateurs au CHU de Treichville",
          "description": "Renforcement des capacités de nos équipes avec la formation de 25 nouveaux sensibilisateurs spécialisés dans la prévention des cancers féminins.",
          "datePublished": "2025-01-15",
          "dateModified": "2025-01-15",
          "author": {
            "@type": "Organization",
            "name": "Équipe Formation OLCAP-CI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "articleSection": "Formation",
          "keywords": "formation sensibilisateurs santé, CHU Treichville, prévention cancer féminin Abidjan"
        },
        {
          "@type": "NewsArticle",
          "position": 4,
          "headline": "500 Personnes Dépistées pour l'Anémie en Décembre 2024",
          "description": "Bilan très positif de notre campagne de fin d'année contre l'anémie : plus de 500 tests réalisés et 120 cas traités avec succès.",
          "datePublished": "2024-12-20",
          "dateModified": "2024-12-20",
          "author": {
            "@type": "Organization",
            "name": "OLCAP-CI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "articleSection": "Anémie",
          "keywords": "dépistage anémie Côte d'Ivoire, traitement anémie gratuit, compléments fer distribution"
        },
        {
          "@type": "NewsArticle",
          "position": 5,
          "headline": "Accord-Cadre Signé avec PIF-CI pour Renforcer la Lutte contre les Cancers Féminins",
          "description": "Signature d'un partenariat stratégique avec le PIF-CI pour intensifier nos actions de prévention et de dépistage des cancers du sein et du col de l'utérus.",
          "datePublished": "2024-11-10",
          "dateModified": "2024-11-10",
          "author": {
            "@type": "Organization",
            "name": "Direction OLCAP-CI"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "articleSection": "Partenariat",
          "keywords": "partenariat PIF-CI, accord-cadre santé, lutte cancer féminin Côte d'Ivoire"
        },
        {
          "@type": "NewsArticle",
          "position": 6,
          "headline": "Émission Radio Spéciale : Tout Savoir sur le Cancer du Col de l'Utérus",
          "description": "Retour sur notre émission radio à succès diffusée sur Radio Jam FM et suivie par plus de 50 000 auditeurs.",
          "datePublished": "2024-10-25",
          "dateModified": "2024-10-25",
          "author": {
            "@type": "Person",
            "name": "Dr. Assouan"
          },
          "publisher": {
            "@type": "Organization",
            "name": "OLCAP-CI",
            "logo": {
              "@type": "ImageObject",
              "url": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg"
            }
          },
          "articleSection": "Sensibilisation",
          "keywords": "sensibilisation cancer col utérus, radio Jam FM Abidjan, éducation santé Côte d'Ivoire"
        }
      ]
    };

    addStructuredData(breadcrumbSchema);
    
    // Add news articles schema
    const newsScript = document.createElement('script');
    newsScript.type = 'application/ld+json';
    newsScript.text = JSON.stringify(newsArticlesSchema);
    document.head.appendChild(newsScript);
  }, []);

  const actualites = [
    {
      id: 1,
      title: "Lancement de la Campagne Octobre Rose 2025",
      category: "Octobre Rose",
      date: "1 Octobre 2025",
      author: "OLCAP-CI",
      excerpt: "Notre grande campagne annuelle de sensibilisation et de dépistage gratuit des cancers féminins démarre ce mois-ci dans plusieurs quartiers d'Abidjan.",
      icon: Ribbon,
      color: "text-pink-rose",
      bgColor: "bg-pink-500/10",
      content: "Nous sommes fiers d'annoncer le lancement officiel de notre campagne Octobre Rose 2025. Cette année, nous ciblons plus de 500 femmes avec des dépistages gratuits (mammographie et frottis cervical) dans les quartiers de Yopougon, Abobo et Koumassi. En partenariat avec le CHU de Treichville et le PIF-CI, nous organisons également 15 émissions radio pour sensibiliser le grand public. Rejoignez-nous pour sauver des vies !"
    },
    {
      id: 2,
      title: "300 Femmes Dépistées lors de la Journée Mondiale contre le Cancer",
      category: "Dépistage",
      date: "4 Février 2025",
      author: "Dr. Kouassi",
      excerpt: "Un succès retentissant pour notre journée de dépistage gratuit organisée à l'occasion de la Journée Mondiale de Lutte contre le Cancer.",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      content: "Le 4 février dernier, à l'occasion de la Journée Mondiale contre le Cancer, l'OLCAP-CI a organisé une vaste campagne de dépistage gratuit qui a permis d'examiner plus de 300 femmes. 12 cas suspects ont été détectés et immédiatement orientés vers des structures spécialisées pour prise en charge. Nos équipes de sensibilisateurs ont également distribué plus de 500 brochures éducatives sur la prévention des cancers."
    },
    {
      id: 3,
      title: "Formation de 25 Nouveaux Sensibilisateurs au CHU de Treichville",
      category: "Formation",
      date: "15 Janvier 2025",
      author: "Équipe Formation",
      excerpt: "Renforcement des capacités de nos équipes avec la formation de 25 nouveaux sensibilisateurs spécialisés dans la prévention des cancers féminins.",
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      content: "Du 10 au 15 janvier 2025, 25 nouveaux volontaires ont été formés au CHU de Treichville sur les techniques de sensibilisation, les protocoles de dépistage et l'accompagnement psychologique des patientes. Avec ces nouveaux membres, l'OLCAP-CI compte désormais 85 sensibilisateurs actifs sur le terrain. La formation était animée par des médecins spécialistes en oncologie et gynécologie."
    },
    {
      id: 4,
      title: "500 Personnes Dépistées pour l'Anémie en Décembre 2024",
      category: "Anémie",
      date: "20 Décembre 2024",
      author: "OLCAP-CI",
      excerpt: "Bilan très positif de notre campagne de fin d'année contre l'anémie : plus de 500 tests réalisés et 120 cas traités avec succès.",
      icon: Droplet,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      content: "Notre campagne de dépistage de l'anémie organisée en décembre 2024 dans 5 centres de santé communautaires a permis de tester plus de 500 personnes. Parmi elles, 120 cas d'anémie modérée à sévère ont été détectés et pris en charge avec distribution gratuite de compléments en fer et suivi nutritionnel personnalisé. Les résultats après 3 mois montrent une amélioration significative de l'état de santé de 85% des patients suivis."
    },
    {
      id: 5,
      title: "Accord-Cadre Signé avec PIF-CI pour Renforcer la Lutte contre les Cancers Féminins",
      category: "Partenariat",
      date: "10 Novembre 2024",
      author: "Direction OLCAP-CI",
      excerpt: "Signature d'un partenariat stratégique avec le PIF-CI pour intensifier nos actions de prévention et de dépistage des cancers du sein et du col de l'utérus.",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      content: "L'OLCAP-CI a signé le 10 novembre 2024 un accord-cadre de partenariat avec le Programme Intégré de Lutte contre les Fléaux (PIF-CI). Cet accord prévoit la mise en commun de ressources humaines, matérielles et financières pour organiser des campagnes de grande envergure, la formation conjointe de sensibilisateurs, et le partage de données épidémiologiques. Objectif : doubler le nombre de femmes dépistées d'ici 2026."
    },
    {
      id: 6,
      title: "Émission Radio Spéciale : Tout Savoir sur le Cancer du Col de l'Utérus",
      category: "Sensibilisation",
      date: "25 Octobre 2024",
      author: "Dr. Assouan",
      excerpt: "Retour sur notre émission radio à succès diffusée sur Radio Jam FM et suivie par plus de 50 000 auditeurs.",
      icon: Ribbon,
      color: "text-pink-rose",
      bgColor: "bg-pink-500/10",
      content: "Le 25 octobre 2024, notre équipe médicale a participé à une émission radio spéciale de 2 heures sur Radio Jam FM. Le Dr. Assouan, gynécologue-oncologue, a répondu aux questions des auditeurs en direct et démystifié de nombreuses idées reçues sur le cancer du col de l'utérus. L'émission a été suivie par plus de 50 000 auditeurs et a généré une augmentation de 200% des demandes de dépistage dans la semaine suivante."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-4 text-lg px-6 py-2">Restez Informés</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Actualités & Événements
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Suivez nos dernières actions, événements et l'impact concret de nos programmes sur le terrain
          </p>
        </div>
      </section>

      {/* Actualités Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {actualites.map((actu) => {
              const Icon = actu.icon;
              return (
                <Card key={actu.id} className="card-hover flex flex-col">
                  <CardHeader>
                    <div className={`${actu.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-3`}>
                      <Icon className={`h-7 w-7 ${actu.color}`} />
                    </div>
                    <Badge className="w-fit mb-2">{actu.category}</Badge>
                    <CardTitle className="text-xl line-clamp-2">{actu.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{actu.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {actu.content}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {actu.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {actu.author}
                        </span>
                      </div>
                      <Link 
                        to="#" 
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Lire la suite
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Restez Informé de Nos Actions</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contactez-nous pour participer à nos prochains événements ou recevoir nos actualités
          </p>
          <Link to="/contact">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors">
              Nous Contacter
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Actualites;
