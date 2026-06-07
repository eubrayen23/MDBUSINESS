import { supabase } from './supabase';
export async function saveCV(cvData) {
  const { data, error } = await supabase.from('cvs').upsert(cvData).select();
  if (error) throw error;
  return data[0];
}
export async function getUserCVs(userId) {
  const { data, error } = await supabase.from('cvs').select('*').eq('user_id', userId).order('updated_at', { ascending: false });
  if (error) throw error;
  return data;
}
export async function deleteCV(id) {
  const { error } = await supabase.from('cvs').delete().eq('id', id);
  if (error) throw error;
}
export default { saveCV, getUserCVs, deleteCV };
