import { Mail, Phone, MapPin, Facebook, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import olcapLogo from "@/assets/olcap-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={olcapLogo} 
                alt="OLCAP-CI Logo" 
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold gradient-text">OLCAP-CI</h3>
                <p className="text-sm text-muted-foreground">Santé • Solidarité • Espoir</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Organisation pour la Lutte Contre l'Anémie et la Pauvreté en Côte d'Ivoire. 
              Ensemble pour une santé meilleure et un avenir plus solidaire.
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/mission" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Notre Mission
              </Link>
              <Link to="/equipe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Notre Équipe
              </Link>
              <Link to="/projets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Nos Projets
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Ananeraie, Yopougon<br />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  (+225) 01 51 83 82 82
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  olcapcin@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Soutien */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Nous soutenir</h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Soutenez nos actions pour la santé et la solidarité
              </p>
              <div className="flex items-center space-x-3">
                <Facebook className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">OLCAP-CI</span>
              </div>
              <div className="pt-2">
                <Link 
                  to="/don" 
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un don
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 OLCAP-CI. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Mentions légales
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link to="/politique-confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Confidentialité
            </Link>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">
              Made with ❤️ for health
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;