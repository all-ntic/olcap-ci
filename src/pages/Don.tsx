import { useState, useEffect } from "react";
import { Heart, CreditCard, Shield, Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { updateSEO, addStructuredData } from "@/utils/seo";

// Validation schema for donation form
const donationSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Le nom est requis" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z.string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  phone: z.string()
    .trim()
    .max(20, { message: "Le numéro de téléphone ne peut pas dépasser 20 caractères" })
    .optional()
    .or(z.literal("")),
  amount: z.number()
    .min(1000, { message: "Le montant minimum est de 1 000 FCFA" })
    .max(100000000, { message: "Le montant ne peut pas dépasser 100 000 000 FCFA" }),
  message: z.string()
    .trim()
    .max(1000, { message: "Le message ne peut pas dépasser 1 000 caractères" })
    .optional()
    .or(z.literal("")),
  campaign: z.string()
    .min(1, { message: "Veuillez sélectionner une destination" }),
  isAnonymous: z.boolean()
});

const Don = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    campaign: ""
  });

  useEffect(() => {
    updateSEO({
      title: "Faire un don – Soutenez OLCAP-CI",
      description: "Contribuez à la lutte contre l'anémie et la pauvreté en Côte d'Ivoire en faisant un don sécurisé. Paiement 100% sécurisé via Paystack.",
      keywords: "faire un don OLCAP-CI, donation sécurisée, soutenir ONG Côte d'Ivoire, don Paystack, aide humanitaire Abidjan",
      canonical: "https://olcap-ci.allntic.online/don",
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
        "name": "Faire un Don",
        "item": "https://olcap-ci.allntic.online/don"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000];
  const campaigns = [
    { value: "general", label: "Don général" },
    { value: "anemia", label: "Lutte contre l'anémie" },
    { value: "cancer", label: "Dépistage cancers féminins" },
    { value: "poverty", label: "Lutte contre la pauvreté" },
    { value: "october_rose", label: "Octobre Rose" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount: amount.toString() }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Parse amount
      const amount = parseFloat(formData.amount);
      if (isNaN(amount)) {
        throw new Error('Veuillez indiquer un montant valide');
      }

      // Prepare data for validation
      const dataToValidate = {
        name: isAnonymous ? "Donateur anonyme" : formData.name,
        email: isAnonymous ? "anonyme@olcap-ci.org" : formData.email,
        phone: formData.phone || "",
        amount: amount,
        message: formData.message || "",
        campaign: formData.campaign,
        isAnonymous: isAnonymous
      };

      // Validate with Zod schema
      const validationResult = donationSchema.safeParse(dataToValidate);
      
      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        throw new Error(firstError.message);
      }

      // Initialize payment with Paystack
      const { data, error } = await supabase.functions.invoke('paystack-donation', {
        body: validationResult.data
      });

      if (error) throw error;

      if (data.success) {
        // Redirect to Paystack payment page
        window.location.href = data.authorization_url;
      } else {
        throw new Error(data.error || 'Erreur lors de l\'initialisation du paiement');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Erreur",
        description: error.message || "Une erreur est survenue lors du traitement",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const features = [
    { icon: Shield, text: "Paiement 100% sécurisé via Paystack (certifié PCI DSS)" },
    { icon: Check, text: "Reçu fiscal délivré automatiquement par email" },
    { icon: CreditCard, text: "Aucune donnée bancaire stockée sur nos serveurs" },
    { icon: Heart, text: "Impact direct et mesurable sur nos missions de santé" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-soft" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 shimmer">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Solidarité & Espoir</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="text-gradient">Votre soutien change des vies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Votre contribution permet de sauver des vies et d'améliorer durablement les conditions de vie 
              des familles vulnérables. Chaque don compte dans la lutte contre l'anémie et la pauvreté en Côte d'Ivoire.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Votre soutien change des vies
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Chaque don contribue directement à nos actions de lutte contre l'anémie et la pauvreté. 
              Découvrez l'impact concret de votre générosité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">5 000 FCFA</div>
                <p className="text-muted-foreground">
                  Permet le dépistage de l'anémie pour 5 personnes
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-accent mb-2">25 000 FCFA</div>
                <p className="text-muted-foreground">
                  Finance une campagne de sensibilisation complète
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-secondary mb-2">50 000 FCFA</div>
                <p className="text-muted-foreground">
                  Équipe un centre de dépistage mobile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                  <Heart className="w-6 h-6 text-primary" />
                  <span>Formulaire de Don</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Anonymous Option */}
                  <div className="flex items-center space-x-2 bg-muted/50 p-4 rounded-lg">
                    <Checkbox 
                      id="anonymous" 
                      checked={isAnonymous}
                      onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
                    />
                    <Label 
                      htmlFor="anonymous" 
                      className="text-sm font-medium cursor-pointer"
                    >
                      Don anonyme (vos informations ne seront pas enregistrées)
                    </Label>
                  </div>

                  {/* Personal Information */}
                  {!isAnonymous && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Votre nom complet"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required={!isAnonymous}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required={!isAnonymous}
                        />
                      </div>
                    </div>
                  )}

                  {!isAnonymous && (
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+225 XX XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  )}

                  {/* Campaign Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="campaign">Destination du don</Label>
                    <Select value={formData.campaign} onValueChange={(value) => handleInputChange('campaign', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez la destination" />
                      </SelectTrigger>
                      <SelectContent>
                        {campaigns.map((campaign) => (
                          <SelectItem key={campaign.value} value={campaign.value}>
                            {campaign.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-4">
                    <Label>Montant du don (FCFA) *</Label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                      {predefinedAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={formData.amount === amount.toString() ? "default" : "outline"}
                          onClick={() => handleAmountSelect(amount)}
                          className="text-sm"
                        >
                          {amount.toLocaleString()}
                        </Button>
                      ))}
                    </div>
                    <Input
                      type="number"
                      placeholder="Autre montant"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      min="1000"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message (optionnel)</Label>
                    <Textarea
                      id="message"
                      placeholder="Un message pour l'équipe OLCAP-CI..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  {/* Security Features */}
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="space-y-2">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <feature.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full pulse-glow" 
                    size="lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      "Traitement en cours..."
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5 mr-2" />
                        Procéder au Paiement Sécurisé
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Paiement Sécurisé par Paystack
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6" />
              <span>SSL 256-bit</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-6 h-6" />
              <span>PCI DSS Conforme</span>
            </div>
            <div className="flex items-center space-x-2">
              <CreditCard className="w-6 h-6" />
              <span>Cartes & Mobile Money</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Don;