import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabase';
export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) navigate('/dashboard'); else alert(error.message);
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-black mb-8 text-center text-gray-900 italic">CVPro AI</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold">Entrar</button>
      </form>
      <p className="mt-6 text-center text-sm">Não tem conta? <button onClick={() => navigate('/register')} className="text-primary font-bold">Registe-se</button></p>
    </div>
  );
}
