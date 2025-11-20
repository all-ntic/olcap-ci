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
  "alternateName": "Organisation pour la Lutte Contre l'Anémie et la Pauvreté",
  "url": "https://olcap-ci.allntic.online",
  "logo": "https://olcap-ci.allntic.online/src/assets/olcap-logo.jpg",
  "description": "ONG ivoirienne engagée dans la lutte contre l'anémie, la pauvreté et les cancers féminins en Côte d'Ivoire",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ananeraie, Yopougon",
    "addressLocality": "Abidjan",
    "addressCountry": "CI"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+225-01-51-83-82-82",
    "contactType": "customer service",
    "email": "olcapcin@gmail.com",
    "availableLanguage": ["French"]
  },
  "sameAs": [
    "https://wa.me/2250151838282"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Côte d'Ivoire"
  },
  "knowsAbout": ["Santé publique", "Lutte contre l'anémie", "Prévention cancer du sein", "Cancer du col de l'utérus", "Octobre Rose"]
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
