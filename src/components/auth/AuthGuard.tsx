import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, isLoading, initialized } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (initialized && !isLoading && !user) {
      navigate('/entrar');
    }
  }, [user, isLoading, initialized, navigate]);

  if (isLoading || !initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-500 border-t-transparent" />
      </div>
    );
  }

  return user ? <>{children}</> : null;
}
