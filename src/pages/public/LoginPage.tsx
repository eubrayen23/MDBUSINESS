import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { useAuthStore } from '../../store/useAuthStore';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser, setProfile, setLoading } = useAuthStore();
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    // Real auth would go here
    toast.error('Autenticação real indisponível. Use o botão Demo.');
  };

  const handleDemoLogin = async () => {
    setIsDemoLoading(true);
    // Mocking a successful admin login
    setTimeout(() => {
      setUser({ id: 'admin-uuid', email: 'admin@smilepro.ao' });
      setProfile({
        id: 'admin-uuid',
        full_name: 'Administrador SmilePro',
        role: 'admin',
        phone: '934859497',
        avatar_url: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
      setLoading(false);
      toast.success('Bem-vindo, Administrador!');
      navigate('/dashboard/admin');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
            <span className="text-black font-black text-2xl">S</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">SmilePro Access</h1>
          <p className="text-neutral-500 text-xs mt-1 uppercase tracking-widest">Sistema de Gestão Clínica</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="E-mail"
            placeholder="exemplo@email.com"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="••••••••"
            {...register('password')}
            error={errors.password?.message}
          />

          <Button type="submit" className="w-full" isLoading={isSubmitting}>
            Entrar
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-neutral-500 font-bold">ou continue com</span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mb-4"
          onClick={handleDemoLogin}
          isLoading={isDemoLoading}
        >
          Entrar como Demo (Admin)
        </Button>

        <p className="text-center text-xs text-neutral-500 mt-6">
          Não tem uma conta?{' '}
          <Link to="/register" className="text-white font-bold hover:underline">
            Registar-se
          </Link>
        </p>
      </Card>
    </div>
  );
};
