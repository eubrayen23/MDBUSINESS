import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Linkedin,
  BookOpen,
  User,
  Settings,
  ChevronRight,
  LogOut,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { name: 'Os meus CVs', icon: FileText, href: '/cv/lista' },
    { name: 'Criar CV', icon: PlusCircle, href: '/cv/criar' },
    { name: 'LinkedIn Optimizer', icon: Linkedin, href: '/linkedin' },
    { name: 'Recursos', icon: BookOpen, href: '/recursos' },
    { name: 'Perfil', icon: User, href: '/perfil' },
    { name: 'Definições', icon: Settings, href: '/definicoes' },
  ];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[280px] bg-white border-r border-ink-100 flex flex-col z-40">
      <div className="p-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-brand-500 p-1.5 rounded-lg text-white">
            <Zap size={18} fill="currentColor" />
          </div>
          <span className="text-xl font-black tracking-tight text-ink-950 uppercase">
            CV<span className="text-brand-600">Angola</span>
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-brand-50 text-brand-700 shadow-sm'
                  : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900'
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={cn(isActive ? 'text-brand-600' : 'text-ink-400 group-hover:text-ink-900')} />
                <span className="font-semibold text-sm">{item.name}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          );
        })}
      </nav>

      <div className="p-6">
        <div className="bg-ink-950 rounded-2xl p-5 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-ink-400 text-xs font-bold uppercase tracking-widest mb-1">Créditos IA</p>
            <p className="text-white text-2xl font-black mb-4">10 Restantes</p>
            <button className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 rounded-lg text-xs font-bold transition-colors">
              Upgrade para PRO
            </button>
          </div>
          <Zap size={80} className="absolute -bottom-4 -right-4 text-white/5 group-hover:scale-110 transition-transform duration-500" />
        </div>

        <button className="w-full mt-6 flex items-center gap-3 px-4 py-3 text-danger-500 hover:bg-danger-50 rounded-xl font-bold text-sm transition-colors">
          <LogOut size={20} />
          <span>Terminar Sessão</span>
        </button>
      </div>
    </aside>
  );
}
