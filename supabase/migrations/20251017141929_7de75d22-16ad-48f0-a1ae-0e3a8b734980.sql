-- Create OLCAP-CI_message table for contact form
CREATE TABLE public."OLCAP-CI_message" (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text,
  phone text,
  message text NOT NULL,
  contact_type text DEFAULT 'general'::text,
  preferred_contact text DEFAULT 'email'::text,
  appointment_date timestamp with time zone,
  company text,
  subject text,
  status text DEFAULT 'new'::text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public."OLCAP-CI_message" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Anyone can insert messages" 
ON public."OLCAP-CI_message"
FOR INSERT 
WITH CHECK (true);

-- Only admins can view messages
CREATE POLICY "Only admins can view messages" 
ON public."OLCAP-CI_message"
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update messages
CREATE POLICY "Only admins can update messages" 
ON public."OLCAP-CI_message"
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete messages
CREATE POLICY "Only admins can delete messages" 
ON public."OLCAP-CI_message"
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));