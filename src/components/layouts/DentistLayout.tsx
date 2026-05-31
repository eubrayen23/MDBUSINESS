import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Users,
  ClipboardList,
  BarChart3,
  LogOut,
  User,
  Bell
} from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { cn } from '../../lib/utils/utils';

export const DentistLayout: React.FC = () => {
  const { profile, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { label: 'Agenda Hoje', icon: Calendar, path: '/dashboard/dentist' },
    { label: 'Pacientes', icon: Users, path: '/dashboard/dentist/patients' },
    { label: 'Produtividade', icon: BarChart3, path: '/dashboard/dentist/stats' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-white/10 bg-black fixed inset-y-0">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="text-black font-black text-xl">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter">SmilePro</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-4 py-3 rounded-sm text-sm font-bold transition-all duration-150 uppercase tracking-widest',
                  isActive
                    ? 'bg-white text-black'
                    : 'text-neutral-500 hover:text-white hover:bg-white/5'
                )
              }
              end={item.path === '/dashboard/dentist'}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
           <div className="flex items-center gap-3 px-4 py-3 mb-4">
            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center border border-white/10">
              <span className="text-xs font-bold">{profile?.full_name?.charAt(0)}</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">{profile?.full_name}</p>
              <p className="text-[10px] text-neutral-500 uppercase font-bold">Doutor(a)</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-sm text-sm font-bold text-red-500 hover:bg-red-500/10 transition-colors uppercase tracking-widest"
          >
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 flex flex-col">
        <div className="p-6 md:p-10">
          <Outlet />
        </div>
      </main>

       {/* Mobile Bottom Nav */}
       <nav className="lg:hidden fixed bottom-0 w-full h-16 bg-black border-t border-white/10 flex items-center justify-around px-2 z-40">
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
            end={item.path === '/dashboard/dentist'}
          >
            <item.icon size={20} />
            <span className="text-[8px] font-bold uppercase tracking-widest">{item.label.split(' ')[0]}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
