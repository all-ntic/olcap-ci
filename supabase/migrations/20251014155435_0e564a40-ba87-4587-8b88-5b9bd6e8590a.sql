-- Supprimer l'ancienne table donations
DROP TABLE IF EXISTS public.donations CASCADE;

-- Créer la nouvelle table donations avec les bonnes colonnes
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  donor_phone TEXT,
  amount NUMERIC NOT NULL,
  currency TEXT DEFAULT 'XOF',
  paystack_reference TEXT UNIQUE NOT NULL,
  paystack_transaction_id TEXT,
  payment_status TEXT DEFAULT 'pending',
  payment_method TEXT,
  message TEXT,
  campaign TEXT DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Activer RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Politique: Tout le monde peut créer un don
CREATE POLICY "Tout le monde peut créer un don"
ON public.donations
FOR INSERT
WITH CHECK (true);

-- Politique: Seuls les admins peuvent voir les dons
CREATE POLICY "Seuls les admins peuvent voir les dons"
ON public.donations
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Politique: Les edge functions peuvent mettre à jour les dons
CREATE POLICY "Edge functions peuvent mettre à jour les dons"
ON public.donations
FOR UPDATE
USING (true);

-- Créer index pour les recherches
CREATE INDEX idx_donations_email ON public.donations(donor_email);
CREATE INDEX idx_donations_reference ON public.donations(paystack_reference);
CREATE INDEX idx_donations_status ON public.donations(payment_status);
CREATE INDEX idx_donations_created_at ON public.donations(created_at DESC);

-- Trigger pour mettre à jour updated_at automatiquement
CREATE TRIGGER update_donations_updated_at
  BEFORE UPDATE ON public.donations
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Commentaire
COMMENT ON TABLE public.donations IS 'Stocke les dons effectués via Paystack pour OLCAP-CI';