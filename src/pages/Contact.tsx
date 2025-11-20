import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { updateSEO, addStructuredData } from "@/utils/seo";

// Validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom ne peut pas dépasser 100 caractères"),
  email: z.string().trim().email("Email invalide").max(255, "L'email ne peut pas dépasser 255 caractères"),
  phone: z.string().optional().refine(
    (val) => !val || /^\+?[0-9\s-]{8,20}$/.test(val),
    "Le numéro de téléphone doit être valide (8-20 chiffres)"
  ),
  message: z.string().trim().min(1, "Le message est requis").max(2000, "Le message ne peut pas dépasser 2000 caractères"),
  contactType: z.enum(['general', 'volunteer', 'partnership', 'donation', 'medical', 'media'], {
    errorMap: () => ({ message: "Type de demande invalide" })
  }),
  preferredContact: z.enum(['email', 'phone', 'whatsapp'], {
    errorMap: () => ({ message: "Moyen de contact invalide" })
  }),
  appointmentDate: z.string().optional().refine(
    (val) => !val || new Date(val) > new Date(),
    "La date de rendez-vous doit être dans le futur"
  ),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactType: "",
    preferredContact: "",
    message: "",
    appointmentDate: ""
  });

  useEffect(() => {
    updateSEO({
      title: "Contactez-nous | OLCAP-CI - Yopougon, Abidjan",
      description: "Contactez l'OLCAP-CI pour vos questions, partenariats ou bénévolat. Téléphone : +225 01 51 83 82 82. Email : olcapcin@gmail.com. Yopougon, Abidjan.",
      keywords: "contact OLCAP, téléphone ONG Abidjan, email OLCAP-CI, adresse Yopougon, contacter ONG santé Côte d'Ivoire",
      canonical: "https://olcap-ci.allntic.online/contact",
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
        "name": "Contact",
        "item": "https://olcap-ci.allntic.online/contact"
      }]
    };
    addStructuredData(breadcrumbSchema);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Ananeraie, Yopougon\nAbidjan, Côte d'Ivoire",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Téléphones",
      content: "(+225) 01 51 83 82 82\n(+225) 05 95 20 33 72",
      color: "text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: "olcapcin@gmail.com",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Ven: 8h00 - 17h00\nSam: 8h00 - 12h00",
      color: "text-primary"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      const validationResult = contactSchema.safeParse({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message,
        contactType: formData.contactType || 'general',
        preferredContact: formData.preferredContact || 'email',
        appointmentDate: formData.appointmentDate || undefined,
      });

      if (!validationResult.success) {
        const firstError = validationResult.error.errors[0];
        toast({
          title: "Erreur de validation",
          description: firstError.message,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      const validatedData = validationResult.data;

      const { error } = await supabase.from('contact_messages').insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          subject: validatedData.contactType,
          message: validatedData.message,
          company: validatedData.phone || null,
        }
      ]);

      if (error) throw error;

      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        contactType: "",
        preferredContact: "",
        message: "",
        appointmentDate: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nous sommes là pour répondre à vos questions et accueillir votre soutien 
              dans notre mission de santé et solidarité
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <info.icon className={`w-8 h-8 ${info.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{info.title}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Envoyez-nous un Message
              </h2>
              <p className="text-lg text-muted-foreground">
                Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
              </p>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Formulaire de Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom complet"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
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
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <div className="space-y-2">
                      <Label htmlFor="contactType">Type de demande</Label>
                      <Select value={formData.contactType} onValueChange={(value) => handleInputChange('contactType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Information générale</SelectItem>
                          <SelectItem value="volunteer">Devenir bénévole</SelectItem>
                          <SelectItem value="partnership">Partenariat</SelectItem>
                          <SelectItem value="donation">Don / Soutien</SelectItem>
                          <SelectItem value="medical">Question médicale</SelectItem>
                          <SelectItem value="media">Média / Presse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredContact">Moyen de contact préféré</Label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Comment vous joindre ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="phone">Téléphone</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="appointmentDate">Date de rendez-vous souhaitée</Label>
                      <Input
                        id="appointmentDate"
                        type="date"
                        value={formData.appointmentDate}
                        onChange={(e) => handleInputChange('appointmentDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande ou question..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      className="flex-1 pulse-glow" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Envoyer le Message
                        </>
                      )}
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => window.open('https://wa.me/22501518382', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Direct
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Nous Trouver
            </h3>
            <p className="text-muted-foreground mb-8">
              Situés au cœur d'Abidjan, nous sommes facilement accessibles
            </p>
            <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Ananeraie, Yopougon</p>
                <p className="text-muted-foreground">Abidjan, Côte d'Ivoire</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;