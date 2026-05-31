export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  province: string | null;
  bio: string | null;
  linkedin_url: string | null;
  is_premium: boolean;
  plan: 'free' | 'pro' | 'enterprise';
  cv_count: number;
  ai_credits: number;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
}
