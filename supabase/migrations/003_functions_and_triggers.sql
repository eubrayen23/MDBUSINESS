-- 003_functions_and_triggers.sql

-- Auto-generate Patient Registration Number (SMPL-XXXXXX)
CREATE OR REPLACE FUNCTION generate_registration_number()
RETURNS TRIGGER AS $$
DECLARE
  seq_val BIGINT;
BEGIN
  seq_val := nextval('patient_reg_seq');
  NEW.registration_number := 'SMPL-' || LPAD(seq_val::text, 6, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS patient_reg_seq;
CREATE TRIGGER tr_generate_registration_number
BEFORE INSERT ON patients
FOR EACH ROW
WHEN (NEW.registration_number IS NULL)
EXECUTE FUNCTION generate_registration_number();

-- Auto-generate Invoice Number (INV-YYYYMM-XXXX)
CREATE OR REPLACE FUNCTION generate_invoice_number()
RETURNS TRIGGER AS $$
DECLARE
  seq_val BIGINT;
  prefix TEXT;
BEGIN
  prefix := 'INV-' || to_char(CURRENT_DATE, 'YYYYMM') || '-';
  seq_val := nextval('invoice_seq');
  NEW.invoice_number := prefix || LPAD(seq_val::text, 4, '0');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS invoice_seq;
CREATE TRIGGER tr_generate_invoice_number
BEFORE INSERT ON invoices
FOR EACH ROW
WHEN (NEW.invoice_number IS NULL)
EXECUTE FUNCTION generate_invoice_number();

-- Update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_profiles_updated_at
BEFORE UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Function to handle new user registration in profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, role, avatar_url)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', 'Novo Utilizador'),
    COALESCE(new.raw_user_meta_data->>'role', 'patient'),
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
