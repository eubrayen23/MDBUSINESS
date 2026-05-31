import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';
import { toast } from 'sonner';

const registerSchema = z.object({
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().regex(/^9\d{8}$/, 'Formato inválido (9XXXXXXXX)'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
  confirmPassword: z.string().min(6, 'Mínimo 6 caracteres'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    // Mock registration
    console.log(data);
    toast.success('Conta criada com sucesso! Faça login.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white flex items-center justify-center mb-4">
            <span className="text-black font-black text-2xl">S</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase">Novo Registo</h1>
          <p className="text-neutral-500 text-xs mt-1 uppercase tracking-widest">Junte-se à Clínica SmilePro</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Nome Completo"
            placeholder="Seu nome aqui"
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="E-mail"
              placeholder="exemplo@email.com"
              {...register('email')}
              error={errors.email?.message}
            />
            <Input
              label="Telefone (Angola)"
              placeholder="9XXXXXXXX"
              {...register('phone')}
              error={errors.phone?.message}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              {...register('password')}
              error={errors.password?.message}
            />
            <Input
              label="Confirmar Senha"
              type="password"
              placeholder="••••••••"
              {...register('confirmPassword')}
              error={errors.confirmPassword?.message}
            />
          </div>

          <Button type="submit" className="w-full" isLoading={isSubmitting}>
            Criar Conta
          </Button>
        </form>

        <p className="text-center text-xs text-neutral-500 mt-6">
          Já tem uma conta?{' '}
          <Link to="/login" className="text-white font-bold hover:underline">
            Entrar
          </Link>
        </p>
      </Card>
    </div>
  );
};
