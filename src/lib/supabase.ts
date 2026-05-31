import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rgcdbccrnbjhsmudglka.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnY2RiY2NybmJqaHNtdWdmbGthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMDM4NDgsImV4cCI6MjA5NTc3OTg0OH0.lTUmZ-PH7xg0DkfpjgfAUn8nCI4yUe7WUnv74eTl7lE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
