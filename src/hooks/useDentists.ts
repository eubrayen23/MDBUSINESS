import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';

export function useDentists() {
  return useQuery({
    queryKey: ['dentists'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('dentists')
        .select(`
          *,
          profiles (
            full_name
          )
        `)
        .eq('is_active', true);

      if (error) throw error;
      return data;
    },
  });
}
