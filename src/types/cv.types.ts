export interface CV {
  id: string;
  user_id: string;
  title: string;
  template_id: string;
  content: CVContent;
  color_scheme: string;
  font_family: string;
  ats_score: number | null;
  is_public: boolean;
  public_slug: string | null;
  pdf_url: string | null;
  thumbnail_url: string | null;
  downloads: number;
  last_ai_optimization: string | null;
  created_at: string;
  updated_at: string;
}

export interface CVContent {
  personalInfo: PersonalInfo;
  objective: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  languages: Language[];
  certifications: Certification[];
  references: Reference[];
  customSections: CustomSection[];
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  province: string;
  linkedin: string;
  website: string;
  photo_url?: string;
  role?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
}

export interface Skills {
  technical: string[];
  soft: string[];
  tools: string[];
}

export interface Language {
  id: string;
  language: string;
  level: 'Básico' | 'Intermédio' | 'Avançado' | 'Nativo';
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Reference {
  id: string;
  name: string;
  position: string;
  company: string;
  contact: string;
}

export interface CustomSection {
  id: string;
  title: string;
  content: string;
}
