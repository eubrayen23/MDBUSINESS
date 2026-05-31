-- 004_seed_data.sql

-- Clinic
INSERT INTO clinics (id, name, address, phone, nif)
VALUES (gen_random_uuid(), 'Clínica SmilePro', 'Rua Major Kanhangulo, Luanda, Angola', '934859497', '5001234567')
ON CONFLICT DO NOTHING;

-- Seed data for treatments
INSERT INTO treatments (name, description, price, duration_minutes, category)
VALUES
('Consulta Geral', 'Exame clínico completo e diagnóstico', 15000.00, 30, 'Diagnóstico'),
('Limpeza Profissional', 'Destartarização e polimento', 25000.00, 45, 'Preventiva'),
('Extração Simples', 'Remoção de dente sem complicações', 35000.00, 45, 'Cirurgia'),
('Restauração Resina', 'Tratamento de cárie com resina composta', 30000.00, 60, 'Dentística'),
('Tratamento de Canal', 'Endodontia de dente anterior', 85000.00, 90, 'Endodontia'),
('Implante Dentário', 'Colocação de implante de titânio', 450000.00, 120, 'Implantologia'),
('Branqueamento', 'Clareamento dental a laser', 120000.00, 60, 'Estética'),
('Aparelho Ortodôntico', 'Manutenção mensal de aparelho fixo', 20000.00, 30, 'Ortodontia');

-- Note: User/Profile/Dentist/Patient seed data should be handled via Auth API or in a script
-- because it requires auth.users entries which cannot be easily done via pure SQL in Supabase dashboard
-- without raw access. The "Demo" button will handle the mock auth state.
