import { useState } from "react";
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
    campaign: "general"
  });

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
      // Validate form
      if (!formData.amount) {
        throw new Error('Veuillez indiquer le montant de votre don');
      }

      if (!isAnonymous && (!formData.name || !formData.email)) {
        throw new Error('Veuillez remplir votre nom et email ou cocher "Don anonyme"');
      }

      const amount = parseFloat(formData.amount);
      if (isNaN(amount) || amount < 1000) {
        throw new Error('Le montant minimum est de 1 000 FCFA');
      }

      // Initialize payment with Paystack
      const { data, error } = await supabase.functions.invoke('paystack-donation', {
        body: {
          name: isAnonymous ? "Donateur anonyme" : formData.name,
          email: isAnonymous ? "anonyme@olcap-ci.org" : formData.email,
          phone: formData.phone,
          amount: amount,
          message: formData.message,
          campaign: formData.campaign,
          isAnonymous: isAnonymous
        }
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
    { icon: Shield, text: "Paiement 100% sécurisé via Paystack" },
    { icon: Check, text: "Reçu fiscal délivré automatiquement" },
    { icon: Heart, text: "Impact direct sur nos missions de santé" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Faire un Don
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Votre générosité nous permet de sauver des vies et d'améliorer la santé 
              de milliers de personnes en Côte d'Ivoire
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Votre Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Découvrez comment votre don transforme des vies
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