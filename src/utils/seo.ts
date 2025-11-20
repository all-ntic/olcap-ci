export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export const updateSEO = (data: SEOData) => {
  // Title
  document.title = data.title;

  // Meta description
  updateMetaTag('name', 'description', data.description);
  
  // Meta keywords
  updateMetaTag('name', 'keywords', data.keywords);

  // Open Graph
  updateMetaTag('property', 'og:title', data.title);
  updateMetaTag('property', 'og:description', data.description);
  updateMetaTag('property', 'og:type', data.ogType || 'website');
  updateMetaTag('property', 'og:url', window.location.href);
  if (data.ogImage) {
    updateMetaTag('property', 'og:image', data.ogImage);
  }

  // Twitter Card
  updateMetaTag('name', 'twitter:card', 'summary_large_image');
  updateMetaTag('name', 'twitter:title', data.title);
  updateMetaTag('name', 'twitter:description', data.description);
  if (data.ogImage) {
    updateMetaTag('name', 'twitter:image', data.ogImage);
  }

  // Canonical
  updateCanonical(data.canonical || window.location.href);
};

const updateMetaTag = (attribute: string, key: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const updateCanonical = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
};

// Données structurées JSON-LD pour l'organisation
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "OLCAP-CI",
  "alternateName": "Organisation pour la Lutte Contre l'Anémie et la Pauvreté - Côte d'Ivoire",
  "url": "https://olcap-ci.allntic.online",
  "logo": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg",
  "image": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg",
  "description": "ONG ivoirienne engagée contre l'anémie, la malnutrition et la pauvreté. Actions sociales, projets humanitaires et programmes de santé communautaire en Côte d'Ivoire.",
  "foundingDate": "2020",
  "slogan": "Ensemble, luttons contre l'anémie et la pauvreté en Côte d'Ivoire",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ananeraie, Yopougon",
    "addressLocality": "Abidjan",
    "addressCountry": "CI"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "5.3599517",
    "longitude": "-4.0082563"
  },
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+225-01-51-83-82-82",
    "contactType": "customer service",
    "email": "olcapcin@gmail.com",
    "availableLanguage": ["French"],
    "areaServed": "CI"
  }],
  "sameAs": [
    "https://wa.me/2250151838282",
    "https://www.facebook.com/OLCAPCI"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  },
  "knowsAbout": [
    "Santé publique",
    "Lutte contre l'anémie", 
    "Malnutrition",
    "Pauvreté",
    "Prévention cancer du sein", 
    "Cancer du col de l'utérus",
    "Programmes sociaux",
    "Aide humanitaire",
    "Santé communautaire",
    "Actions sociales Afrique de l'Ouest"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Dépistage gratuit de l'anémie",
        "description": "Dépistages gratuits dans les écoles, églises et villages de Côte d'Ivoire"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Distribution de kits nutritionnels",
        "description": "Distribution de kits alimentaires et nutritionnels aux familles vulnérables"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Sensibilisation cancers féminins",
        "description": "Campagnes de sensibilisation sur les cancers du sein et du col de l'utérus"
      }
    }
  ]
};

export const addStructuredData = (schema: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schema);
  
  // Retirer ancien schema similaire si existe
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  document.head.appendChild(script);
};
