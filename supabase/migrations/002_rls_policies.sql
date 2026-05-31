-- 002_rls_policies.sql
-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE clinics ENABLE ROW LEVEL SECURITY;
ALTER TABLE dentists ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE medical_records ENABLE ROW LEVEL SECURITY;
ALTER TABLE treatments ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Helper Function
CREATE OR REPLACE FUNCTION get_user_role() RETURNS TEXT AS $$
  SELECT role FROM profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

-- Profiles Policies
CREATE POLICY "Public profiles are viewable by everyone" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Admin: Full Access
CREATE POLICY "Admins have full access" ON profiles FOR ALL USING (get_user_role() = 'admin');
-- (Apply similar logic for other tables)

-- Generic Admin Policy Generator (simplification for the script)
DO $$
DECLARE
    t text;
BEGIN
    FOR t IN
        SELECT table_name
        FROM information_schema.tables
        WHERE table_schema = 'public'
    LOOP
        EXECUTE format('CREATE POLICY "Admin full access on %I" ON %I FOR ALL USING (get_user_role() = ''admin'')', t, t);
    END LOOP;
END $$;

-- Dentist Policies
CREATE POLICY "Dentists can read own appointments" ON appointments FOR SELECT USING (dentist_id IN (SELECT id FROM dentists WHERE profile_id = auth.uid()));
CREATE POLICY "Dentists can update own appointments" ON appointments FOR UPDATE USING (dentist_id IN (SELECT id FROM dentists WHERE profile_id = auth.uid()));
CREATE POLICY "Dentists can read medical records of their patients" ON medical_records FOR SELECT USING (dentist_id IN (SELECT id FROM dentists WHERE profile_id = auth.uid()));
CREATE POLICY "Dentists can create medical records" ON medical_records FOR INSERT WITH CHECK (dentist_id IN (SELECT id FROM dentists WHERE profile_id = auth.uid()));
CREATE POLICY "Dentists can read their own invoices" ON invoices FOR SELECT USING (EXISTS (SELECT 1 FROM appointments WHERE id = invoices.appointment_id AND dentist_id IN (SELECT id FROM dentists WHERE profile_id = auth.uid())));

-- Receptionist Policies
CREATE POLICY "Receptionists can read/write appointments" ON appointments FOR ALL USING (get_user_role() = 'receptionist');
CREATE POLICY "Receptionists can read/write patients" ON patients FOR ALL USING (get_user_role() = 'receptionist');
CREATE POLICY "Receptionists can read invoices" ON invoices FOR SELECT USING (get_user_role() = 'receptionist');

-- Patient Policies
CREATE POLICY "Patients can read own record" ON patients FOR SELECT USING (profile_id = auth.uid());
CREATE POLICY "Patients can read own appointments" ON appointments FOR SELECT USING (patient_id IN (SELECT id FROM patients WHERE profile_id = auth.uid()));
CREATE POLICY "Patients can read own medical records" ON medical_records FOR SELECT USING (patient_id IN (SELECT id FROM patients WHERE profile_id = auth.uid()));
CREATE POLICY "Patients can read own invoices" ON invoices FOR SELECT USING (patient_id IN (SELECT id FROM patients WHERE profile_id = auth.uid()));
