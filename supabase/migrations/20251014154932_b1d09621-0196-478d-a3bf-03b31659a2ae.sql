-- Créer la table donations pour les dons Paystack
CREATE TABLE IF NOT EXISTS public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  currency TEXT DEFAULT 'XOF',
  reference TEXT UNIQUE,
  status TEXT DEFAULT 'pending',
  payment_method TEXT,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
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

-- Créer index pour les recherches
CREATE INDEX IF NOT EXISTS idx_donations_email ON public.donations(email);
CREATE INDEX IF NOT EXISTS idx_donations_reference ON public.donations(reference);
CREATE INDEX IF NOT EXISTS idx_donations_created_at ON public.donations(created_at DESC);

-- Supprimer l'ancienne table contacts si elle existe
DROP TABLE IF EXISTS public.contacts CASCADE;

-- Modifier la table contact_messages pour inclure les nouveaux champs
ALTER TABLE public.contact_messages 
ADD COLUMN IF NOT EXISTS contact_type TEXT DEFAULT 'general',
ADD COLUMN IF NOT EXISTS preferred_contact TEXT DEFAULT 'email',
ADD COLUMN IF NOT EXISTS appointment_date TIMESTAMP WITH TIME ZONE;

-- Commentaires pour documentation
COMMENT ON TABLE public.donations IS 'Stocke les dons effectués via Paystack pour OLCAP-CI';
COMMENT ON TABLE public.contact_messages IS 'Messages de contact du site web OLCAP-CI';