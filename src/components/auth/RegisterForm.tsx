import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const registerSchema = z.object({
  fullName: z.string().min(3, 'Nome completo é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A palavra-passe deve ter pelo menos 6 caracteres'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    setIsLoading(true);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
        },
      },
    });

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
    } else {
      toast.success('Conta criada com sucesso! Podes agora entrar.');
      navigate('/entrar');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-sm">
      <Input
        label="Nome Completo"
        type="text"
        placeholder="António José"
        error={errors.fullName?.message}
        {...register('fullName')}
      />
      <Input
        label="Email"
        type="email"
        placeholder="teu@email.com"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Palavra-passe"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register('password')}
      />
      <Button type="submit" className="w-full" isLoading={isLoading}>
        Criar Conta
      </Button>
    </form>
  );
}
