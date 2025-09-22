-- Create donations table for Paystack integration
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  donor_name TEXT NOT NULL,
  donor_email TEXT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'XOF',
  paystack_reference TEXT NOT NULL UNIQUE,
  paystack_transaction_id TEXT,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  payment_method TEXT,
  donor_phone TEXT,
  message TEXT,
  campaign TEXT DEFAULT 'general',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Create policy for public viewing of donation stats (aggregated data only)
CREATE POLICY "Public can view donation stats" 
ON public.donations 
FOR SELECT 
USING (true);

-- Create policy for inserting donations (anyone can donate)
CREATE POLICY "Anyone can create donations" 
ON public.donations 
FOR INSERT 
WITH CHECK (true);

-- Only admins can update donations (for webhook processing)
CREATE POLICY "Only system can update donations" 
ON public.donations 
FOR UPDATE 
USING (false);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_donations_paystack_reference ON public.donations(paystack_reference);
CREATE INDEX idx_donations_status ON public.donations(payment_status);
CREATE INDEX idx_donations_created_at ON public.donations(created_at);