import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import olcapLogo from "@/assets/olcap-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Mission", href: "/mission" },
    { name: "Équipe", href: "/equipe" },
    { name: "Projets", href: "/projets" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={olcapLogo} 
              alt="OLCAP-CI Logo" 
              className="h-10 w-10 rounded-full group-hover:scale-110 transition-transform"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">OLCAP-CI</h1>
              <p className="text-xs text-muted-foreground">Santé • Solidarité • Espoir</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-foreground/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden md:flex pulse-glow" asChild>
              <Link to="/don">
                <Heart className="w-4 h-4 mr-2" />
                Faire un don
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="mt-4 w-fit" asChild>
                <Link to="/don">
                  <Heart className="w-4 h-4 mr-2" />
                  Faire un don
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;