import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Modelos', href: '#templates' },
    { name: 'LinkedIn', href: '#linkedin' },
    { name: 'Recursos', href: '#resources' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-ink-100 py-3 shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand-500 p-2 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-glow">
            <Star size={20} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight text-ink-900">
            CV<span className="text-brand-600">Angola</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-ink-600 hover:text-brand-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/entrar">
            <Button variant="ghost" size="sm">Entrar</Button>
          </Link>
          <Link to="/registar">
            <Button size="sm">Começar grátis</Button>
          </Link>
        </div>

        <button
          className="md:hidden text-ink-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-ink-100 p-6 flex flex-col gap-6 animate-slide-up shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-ink-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-ink-100">
            <Link to="/entrar" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">Entrar</Button>
            </Link>
            <Link to="/registar" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full">Começar grátis</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
