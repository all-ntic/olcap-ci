import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { updateSEO } from "@/utils/seo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    updateSEO({
      title: "Page non trouvée - 404 | OLCAP-CI",
      description: "La page que vous recherchez n'existe pas. Retournez à l'accueil d'OLCAP-CI pour découvrir nos actions en santé et solidarité.",
      keywords: "404, page non trouvée, OLCAP-CI",
      canonical: `https://olcap-ci.allntic.online${location.pathname}`
    });
    
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-4 text-2xl text-foreground">Page non trouvée</p>
        <p className="mb-8 text-muted-foreground">La page que vous recherchez n'existe pas ou a été déplacée.</p>
        <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90 transition-colors">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
