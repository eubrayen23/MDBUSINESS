import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './services/supabase';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Editor } from './pages/Editor';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setError('Configuração do Supabase ausente. Verifique as variáveis de ambiente.');
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setError('Erro ao conectar com o servidor.');
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-primary italic">Carregando CVPro AI...</div>;

  if (error) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center max-w-md">
        <h1 className="text-red-600 font-bold mb-2">Erro de Configuração</h1>
        <p className="text-sm text-red-500">{error}</p>
        <p className="text-xs text-gray-400 mt-4">Certifique-se de configurar VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no seu ambiente de deploy (Netlify).</p>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={session ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/editor" element={session ? <Editor /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
