import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthGuard } from '@/components/auth/AuthGuard';
import { useAuthStore } from '@/store/authStore';

// Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CVEditor from './components/cv/CVEditor/CVEditor';
import LinkedInOptimizer from './pages/LinkedInOptimizer';
import JobResources from './pages/JobResources';

import './index.css';

function App() {
  const initializeAuth = useAuthStore((state) => state.initialize);

  React.useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/registar" element={<Register />} />

        <Route path="/dashboard" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/cv/editar/:id" element={<AuthGuard><CVEditor /></AuthGuard>} />
        <Route path="/cv/criar" element={<AuthGuard><Navigate to="/dashboard" replace /></AuthGuard>} />
        <Route path="/cv/lista" element={<AuthGuard><Dashboard /></AuthGuard>} />

        <Route path="/linkedin" element={<AuthGuard><LinkedInOptimizer /></AuthGuard>} />
        <Route path="/recursos" element={<AuthGuard><JobResources /></AuthGuard>} />

        <Route path="/perfil" element={<AuthGuard><Dashboard /></AuthGuard>} />
        <Route path="/definicoes" element={<AuthGuard><Dashboard /></AuthGuard>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
