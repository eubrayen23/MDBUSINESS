import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { getUserCVs, deleteCV } from '../services/cvService';
export function Dashboard() {
  const [cvs, setCvs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) navigate('/login'); else loadCVs(user.id);
    });
  }, []);
  const loadCVs = async (uid) => { try { const res = await getUserCVs(uid); setCvs(res); } catch(e) {} };
  const handleDelete = async (id) => { if(confirm('Eliminar?')) { await deleteCV(id); loadCVs((await supabase.auth.getUser()).data.user.id); } };
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-6 border-b bg-white flex justify-between items-center">
        <h1 className="text-2xl font-black text-primary italic">CVPro AI</h1>
        <button onClick={async () => { await supabase.auth.signOut(); navigate('/'); }} className="text-sm font-bold text-red-500">Sair</button>
      </nav>
      <main className="max-w-5xl mx-auto p-8">
        <div className="flex justify-between items-center mb-10"><h2 className="text-3xl font-bold">Meus CVs</h2><Link to="/editor" className="bg-primary text-white px-6 py-3 rounded-xl font-bold">+ Criar Novo</Link></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cvs.map(cv => (
            <div key={cv.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-xl mb-4">{cv.titulo}</h3>
              <div className="flex justify-between border-t pt-4">
                <Link to={`/editor?id=${cv.id}`} className="text-blue-600 font-bold">Editar</Link>
                <button onClick={() => handleDelete(cv.id)} className="text-red-500 font-bold">Apagar</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
