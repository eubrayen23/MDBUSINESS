import { Link } from 'react-router-dom';
import { LoginForm } from '@/components/auth/LoginForm';
import { Star } from 'lucide-react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-md w-full">
        <Link to="/" className="flex items-center gap-2 mb-12">
          <div className="bg-brand-500 p-2 rounded-lg text-white">
            <Star size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold">CV<span className="text-brand-600">Angola</span></span>
        </Link>
        <h1 className="text-4xl font-black mb-2">Bem-vindo de volta</h1>
        <LoginForm />
        <p className="mt-8 text-sm">
          Ainda não tens conta? <Link to="/registar" className="text-brand-600 font-bold">Cria uma agora</Link>
        </p>
      </div>
    </div>
  );
}
