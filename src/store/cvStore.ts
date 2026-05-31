import { create } from 'zustand';
import { CV, CVContent } from '@/types/cv.types';
import { supabase } from '@/lib/supabase';

interface CVState {
  currentCV: CV | null;
  cvs: CV[];
  isLoading: boolean;
  setCurrentCV: (cv: CV | null) => void;
  updateCVContent: (content: Partial<CVContent>) => void;
  saveCV: () => Promise<void>;
  fetchCVs: (userId: string) => Promise<void>;
  loadCV: (cvId: string) => Promise<void>;
  createCV: (userId: string, title: string) => Promise<string | null>;
}

export const useCVStore = create<CVState>((set, get) => ({
  currentCV: null,
  cvs: [],
  isLoading: false,

  setCurrentCV: (cv) => set({ currentCV: cv }),

  updateCVContent: (content) => {
    const { currentCV } = get();
    if (!currentCV) return;

    set({
      currentCV: {
        ...currentCV,
        content: { ...currentCV.content, ...content },
      },
    });
  },

  saveCV: async () => {
    const { currentCV } = get();
    if (!currentCV) return;

    const { error } = await supabase
      .from('cvs')
      .update({
        content: currentCV.content,
        title: currentCV.title,
        template_id: currentCV.template_id,
        color_scheme: currentCV.color_scheme,
        font_family: currentCV.font_family,
        updated_at: new Date().toISOString(),
      })
      .eq('id', currentCV.id);

    if (error) console.error('Error saving CV:', error);
  },

  fetchCVs: async (userId: string) => {
    set({ isLoading: true });
    const { data, error } = await supabase
      .from('cvs')
      .select('*')
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    if (!error && data) {
      set({ cvs: data as CV[] });
    }
    set({ isLoading: false });
  },

  loadCV: async (cvId: string) => {
    set({ isLoading: true });
    const { data, error } = await supabase
      .from('cvs')
      .select('*')
      .eq('id', cvId)
      .single();

    if (!error && data) {
      set({ currentCV: data as CV });
    }
    set({ isLoading: false });
  },

  createCV: async (userId: string, title: string) => {
    const newCV = {
      user_id: userId,
      title,
      template_id: 'modern',
      content: {
        personalInfo: {
          name: '',
          email: '',
          phone: '',
          address: '',
          province: '',
          linkedin: '',
          website: '',
        },
        objective: '',
        experience: [],
        education: [],
        skills: { technical: [], soft: [], tools: [] },
        languages: [],
        certifications: [],
        references: [],
        customSections: [],
      },
    };

    const { data, error } = await supabase
      .from('cvs')
      .insert(newCV)
      .select()
      .single();

    if (error) {
      console.error('Error creating CV:', error);
      return null;
    }

    set((state) => ({ cvs: [data as CV, ...state.cvs] }));
    return data.id;
  },
}));
