import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Home,
  Calendar,
  FileText,
  User,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../lib/utils/utils';

export const PatientLayout: React.FC = () => {
  const { profile, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { label: 'Início', icon: Home, path: '/dashboard/patient' },
    { label: 'Agenda', icon: Calendar, path: '/dashboard/patient/appointments' },
    { label: 'Finanças', icon: FileText, path: '/dashboard/patient/billing' },
    { label: 'Perfil', icon: User, path: '/dashboard/patient/profile' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="h-16 border-b border-white/10 bg-black flex items-center justify-between px-6 sticky top-0 z-40">
         <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white flex items-center justify-center">
            <span className="text-black font-black text-sm">S</span>
          </div>
          <span className="text-lg font-black tracking-tighter">SmilePro</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-neutral-400 hover:text-white">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center">
            <span className="text-[10px] font-bold">{profile?.full_name?.charAt(0)}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-6 pb-24 max-w-4xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full h-16 bg-black border-t border-white/10 flex items-center justify-around px-2 z-40">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center justify-center gap-1 w-full h-full transition-colors',
                isActive ? 'text-white' : 'text-neutral-500'
              )
            }
            end
          >
            <item.icon size={20} />
            <span className="text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center justify-center gap-1 w-full h-full text-red-500/70"
        >
          <LogOut size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest">Sair</span>
        </button>
      </nav>
    </div>
  );
};
