import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

// Layouts
import { AdminLayout } from './components/layouts/AdminLayout';
import { PatientLayout } from './components/layouts/PatientLayout';
import { DentistLayout } from './components/layouts/DentistLayout';

// Public Pages
import { LandingPage } from './pages/public/LandingPage';
import { LoginPage } from './pages/public/LoginPage';
import { RegisterPage } from './pages/public/RegisterPage';

// Dashboard Pages
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { PatientManager } from './pages/admin/PatientManager';
import { AppointmentManager } from './pages/admin/AppointmentManager';
import { FinancialManager } from './pages/admin/FinancialManager';
import { DentistManager } from './pages/admin/DentistManager';
import { ServiceCatalog } from './pages/admin/ServiceCatalog';
import { SettingsPage } from './pages/admin/SettingsPage';
import { PatientDashboard } from './pages/patient/PatientDashboard';
import { DentistDashboard } from './pages/dentist/DentistDashboard';

// Features
import { ToothChart } from './components/features/ToothChart';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/dashboard/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="appointments" element={<AppointmentManager />} />
            <Route path="patients" element={<PatientManager />} />
            <Route path="financial" element={<FinancialManager />} />
            <Route path="dentists" element={<DentistManager />} />
            <Route path="services" element={<ServiceCatalog />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          <Route path="/dashboard/patient" element={<PatientLayout />}>
            <Route index element={<PatientDashboard />} />
            <Route path="appointments" element={<div className="p-8 text-2xl font-black">MINHAS CONSULTAS</div>} />
            <Route path="billing" element={<div className="p-8 text-2xl font-black">MINHAS FATURAS</div>} />
            <Route path="profile" element={<div className="p-8 text-2xl font-black">MEU PERFIL</div>} />
          </Route>

          <Route path="/dashboard/dentist" element={<DentistLayout />}>
            <Route index element={<DentistDashboard />} />
            <Route path="patients" element={
               <div className="space-y-8">
                  <h1 className="text-3xl font-black">ODONTOGRAMA INTERATIVO</h1>
                  <ToothChart />
               </div>
            } />
            <Route path="stats" element={<div className="p-8 text-2xl font-black">MINHA PERFORMANCE</div>} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" theme="dark" />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
