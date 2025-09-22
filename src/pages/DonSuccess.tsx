import { useEffect, useState } from "react";
import { CheckCircle, Heart, Download, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const DonSuccess = () => {
  const { toast } = useToast();
  const [reference, setReference] = useState<string>("");

  useEffect(() => {
    // Get transaction reference from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('reference');
    if (ref) {
      setReference(ref);
    }

    // Show success notification
    toast({
      title: "Don reçu avec succès !",
      description: "Merci pour votre générosité. Vous recevrez un reçu par email.",
    });
  }, [toast]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'J\'ai fait un don à OLCAP-CI',
        text: 'Je viens de soutenir OLCAP-CI dans leur mission de santé et solidarité. Rejoignez-moi !',
        url: window.location.origin,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin);
      toast({
        title: "Lien copié !",
        description: "Partagez OLCAP-CI avec vos proches",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-primary/5">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-8 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Merci !
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Votre don a été traité avec succès. Grâce à votre générosité, 
            nous pourrons continuer notre mission de santé et de solidarité.
          </p>

          {/* Transaction Details */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <span>Détails de votre Don</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reference && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Référence:</span>
                    <span className="text-muted-foreground font-mono">{reference}</span>
                  </div>
                )}
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Statut:</span>
                  <span className="text-green-600 font-medium">✓ Confirmé</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Reçu fiscal:</span>
                  <span className="text-muted-foreground">Envoyé par email</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Message */}
          <Card className="mb-8 border-l-4 border-primary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Votre Impact
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Votre don contribue directement à nos programmes de dépistage de l'anémie, 
                de sensibilisation aux cancers féminins, et de lutte contre la pauvreté. 
                Chaque contribution compte pour sauver des vies et améliorer la santé de nos communautés.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button onClick={handleShare} className="flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>Partager OLCAP-CI</span>
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              <Heart className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-primary/5">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Restez informé(e) de nos actions
              </h3>
              <p className="text-muted-foreground mb-4">
                Recevez nos actualités et découvrez l'impact de votre soutien
              </p>
              <Button asChild>
                <a href="/contact">
                  S'abonner aux actualités
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Social Proof */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Vous rejoignez plus de <strong>500 donateurs</strong> qui soutiennent notre mission
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonSuccess;