import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-ebony-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-8 h-8 bg-ochre-gold rounded-full flex items-center justify-center text-ebony-black text-lg">
                ✦
              </div>
              <span className="font-display text-white text-xl tracking-[0.2em] uppercase font-bold">
                Ekton Afrik Arts
              </span>
            </Link>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-8">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-ochre-gold hover:text-ebony-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-ochre-gold hover:text-ebony-black transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-ochre-gold hover:text-ebony-black transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display text-lg mb-8 uppercase tracking-widest text-ochre-gold">Links Rápidos</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">{t('nav.home')}</Link></li>
              <li><Link to="/shop" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">{t('nav.shop')}</Link></li>
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div>
            <h4 className="font-display text-lg mb-8 uppercase tracking-widest text-ochre-gold">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">Privacidade</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">Termos de Uso</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors font-sans text-sm uppercase tracking-widest">Envio & Devoluções</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="font-display text-lg mb-8 uppercase tracking-widest text-ochre-gold">Contacto</h4>
            <p className="text-white/50 font-sans text-sm mb-4">
              Rua Rainha Ginga, Luanda<br />
              Angola
            </p>
            <p className="text-white font-mono text-sm">
              +244 934 859 497
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/30 font-sans text-[10px] uppercase tracking-widest">
            {t('footer.rights')}
          </p>

          <div className="flex items-center gap-2">
             <span className="text-white/30 font-sans text-[10px] uppercase tracking-widest">{t('footer.made_in')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
