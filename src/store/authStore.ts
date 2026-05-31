import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { Profile, User } from '@/types/user.types';

interface AuthState {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  initialized: boolean;
  setUser: (user: User | null) => void;
  setProfile: (profile: Profile | null) => void;
  setLoading: (loading: boolean) => void;
  signOut: () => Promise<void>;
  fetchProfile: (userId: string) => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  isLoading: true,
  initialized: false,
  setUser: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
  setLoading: (isLoading) => set({ isLoading }),
  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, profile: null });
  },
  fetchProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (!error && data) {
      set({ profile: data as Profile });
    }
  },
  initialize: async () => {
    if (get().initialized) return;

    try {
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        set({ user: { id: session.user.id, email: session.user.email! } });
        await get().fetchProfile(session.user.id);
      }

      supabase.auth.onAuthStateChange(async (_event, session) => {
        if (session?.user) {
          set({ user: { id: session.user.id, email: session.user.email! } });
          await get().fetchProfile(session.user.id);
        } else {
          set({ user: null, profile: null });
        }
      });

      set({ initialized: true, isLoading: false });
    } catch (error) {
      console.error('Auth initialization error:', error);
      set({ initialized: true, isLoading: false });
    }
  },
}));
