import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';

export function usePatients() {
  const queryClient = useQueryClient();

  const { data: patients, isLoading, error } = useQuery({
    queryKey: ['patients'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('patients')
        .select(`
          *,
          profiles (
            full_name,
            phone
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const createPatient = useMutation({
    mutationFn: async (newPatient: any) => {
      const { data, error } = await supabase
        .from('patients')
        .insert(newPatient)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['patients'] });
      toast.success('Paciente registado com sucesso');
    },
    onError: (error: any) => {
      toast.error('Erro ao registar paciente: ' + error.message);
    }
  });

  return { patients, isLoading, error, createPatient };
}
