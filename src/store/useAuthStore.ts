import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Database } from '../types/supabase';

type Profile = Database['public']['Tables']['profiles']['Row'];

interface AuthState {
  user: any | null;
  profile: Profile | null;
  isLoading: boolean;
  setUser: (user: any | null) => void;
  setProfile: (profile: Profile | null) => void;
  setLoading: (isLoading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      profile: null,
      isLoading: true,
      setUser: (user) => set({ user }),
      setProfile: (profile) => set({ profile }),
      setLoading: (isLoading) => set({ isLoading }),
      logout: () => set({ user: null, profile: null, isLoading: false }),
    }),
    {
      name: 'smilepro-auth',
    }
  )
);
