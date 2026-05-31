import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
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

export const AdminLayout: React.FC = () => {
  const { profile, logout } = useAuthStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { label: 'Visão Geral', icon: LayoutDashboard, path: '/dashboard/admin' },
    { label: 'Agenda', icon: Calendar, path: '/dashboard/admin/appointments' },
    { label: 'Pacientes', icon: User, path: '/dashboard/admin/patients' },
    { label: 'Financeiro', icon: FileText, path: '/dashboard/admin/financial' },
    { label: 'Definições', icon: User, path: '/dashboard/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
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
              end={item.path === '/dashboard/admin'}
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 mb-4">
            <div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center">
              <User size={20} className="text-neutral-400" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold truncate">{profile?.full_name}</p>
              <p className="text-[10px] text-neutral-500 uppercase font-bold">{profile?.role}</p>
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

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden h-16 border-b border-white/10 bg-black flex items-center justify-between px-6 sticky top-0 z-40">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white flex items-center justify-center">
              <span className="text-black font-black text-sm">S</span>
            </div>
            <span className="text-lg font-black tracking-tighter">SmilePro</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        <div className="p-6 md:p-10">
          <Outlet />
        </div>
      </main>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col p-6 lg:hidden">
          <div className="flex justify-between items-center mb-8">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-black font-black text-xl">S</span>
              </div>
              <span className="text-xl font-black tracking-tighter">SmilePro</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
          </div>
          <nav className="flex-1 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-4 p-4 rounded-sm text-lg font-bold uppercase tracking-[0.2em]',
                    isActive ? 'bg-white text-black' : 'text-neutral-500'
                  )
                }
                end={item.path === '/dashboard/admin'}
              >
                <item.icon size={24} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 p-4 text-red-500 font-bold uppercase tracking-widest"
          >
            <LogOut size={24} />
            Terminar Sessão
          </button>
        </div>
      )}

      {/* Bottom Nav for Mobile - requirement for PWA */}
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
          >
            <item.icon size={20} />
            <span className="text-[8px] font-bold uppercase tracking-widest">{item.label.split(' ')[0]}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
