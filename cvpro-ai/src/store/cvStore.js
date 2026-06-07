import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useCVStore = create(persist((set) => ({
  cvData: {
    titulo: 'Meu Novo CV', template: 'classico',
    personalInfo: { nome: '', email: '', bi_numero: '', nif: '', provincia: '', municipio: '', nacionalidade: 'Angolana' },
    summary: '', experience: [], education: [], skills: { hard_skills: [], soft_skills: [] }
  },
  setCVData: (data) => set((state) => ({ cvData: { ...state.cvData, ...data } })),
  updatePersonalInfo: (info) => set((state) => ({ cvData: { ...state.cvData, personalInfo: { ...state.cvData.personalInfo, ...info } } })),
  addExperience: (exp) => set((state) => ({ cvData: { ...state.cvData, experience: [...state.cvData.experience, exp] } })),
  updateExperience: (id, u) => set((state) => ({ cvData: { ...state.cvData, experience: state.cvData.experience.map(e => e.id === id ? u : e) } })),
  removeExperience: (id) => set((state) => ({ cvData: { ...state.cvData, experience: state.cvData.experience.filter(e => e.id !== id) } })),
  addEducation: (edu) => set((state) => ({ cvData: { ...state.cvData, education: [...state.cvData.education, edu] } })),
  removeEducation: (id) => set((state) => ({ cvData: { ...state.cvData, education: state.cvData.education.filter(e => e.id !== id) } })),
  setSkills: (s) => set((state) => ({ cvData: { ...state.cvData, skills: { ...state.cvData.skills, ...s } } })),
  setSummary: (s) => set((state) => ({ cvData: { ...state.cvData, summary: s } }))
}), { name: 'cv-storage' }));
