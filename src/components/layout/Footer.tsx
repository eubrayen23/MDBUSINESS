import { Star, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-ink-950 text-white pt-20 pb-10 px-6 border-t border-ink-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="bg-brand-500 p-2 rounded-lg text-white">
              <Star size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              CV<span className="text-brand-500">Angola</span>
            </span>
          </Link>
          <p className="text-ink-400 text-sm leading-relaxed">
            Plataforma dedicada a capacitar jovens angolanos com as melhores ferramentas de empregabilidade do mundo.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Produto</h4>
          <ul className="space-y-4 text-ink-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Criar CV</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Modelos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">LinkedIn Optimizer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Recursos</h4>
          <ul className="space-y-4 text-ink-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guia de Entrevista</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trilhas de Carreira</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sectores</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Suporte</h4>
          <ul className="space-y-4 text-ink-400 text-sm">
            <li>
              <a href="https://wa.me/244934859497" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                <MessageCircle size={18} />
                <span>+244 934 859 497</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} />
              <span>Luanda, Angola</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-ink-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-ink-500 text-xs">
          © 2025 CVAngola. Todos os direitos reservados.
        </p>
        <div className="flex gap-8 text-ink-500 text-xs">
          <a href="#" className="hover:text-white">Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
