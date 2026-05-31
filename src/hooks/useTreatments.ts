import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function useTreatments() {
  return useQuery({
    queryKey: ['treatments'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('treatments')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;
      return data;
    },
  });
}
