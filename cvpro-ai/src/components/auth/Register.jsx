import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../services/supabase';
export function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { nome } } });
    if (!error) { alert('Verifique o seu email!'); navigate('/login'); } else alert(error.message);
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-black mb-8 text-center text-gray-900 italic">Criar Conta</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="text" placeholder="Nome Completo" value={nome} onChange={e => setNome(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-xl" required />
        <button type="submit" className="w-full bg-primary text-white py-3 rounded-xl font-bold">Registar</button>
      </form>
    </div>
  );
}
