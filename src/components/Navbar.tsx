import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { LanguageSwitcher } from './LanguageSwitcher';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItemsCount = useCartStore((state) => state.items.reduce((acc, item) => acc + item.qty, 0));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-ebony-black/95 backdrop-blur-xl border-b border-ochre-gold/20 py-3'
          : 'bg-ebony-black/85 backdrop-blur-md border-b border-ochre-gold/10 py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-ochre-gold rounded-full flex items-center justify-center text-ebony-black text-xl">
            ✦
          </div>
          <span className="font-display text-white text-xl md:text-2xl tracking-[0.2em] uppercase font-bold group-hover:text-ochre-gold transition-colors">
            Ekton Afrik Arts
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.path}>
              <Link
                to={link.path}
                className={`font-sans text-[11px] uppercase tracking-[0.3em] transition-all hover:text-ochre-gold ${
                  location.pathname === link.path ? 'text-ochre-gold' : 'text-white/70'
                }`}
              >
                {link.name}
              </Link>
              {i < navLinks.length - 1 && <span className="text-ochre-gold/40 text-[8px]">✦</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Lang + Cart + Mobile Toggle */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Link to="/cart" className="relative group p-2">
            <ShoppingBag className="w-5 h-5 text-white group-hover:text-ochre-gold transition-colors" />
            <AnimatePresence>
              {cartItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  key={cartItemsCount}
                  className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-mono"
                >
                  {cartItemsCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="fixed inset-0 bg-ebony-black z-[60] flex flex-col p-8 pt-24"
          >
            <button
              className="absolute top-8 right-8 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col gap-8 mb-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-display text-4xl uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-ochre-gold' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-8 flex justify-between items-center">
              <LanguageSwitcher />
              <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
                Luanda, Angola
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
