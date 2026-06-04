import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useCartStore } from '../store/cartStore';

import React from 'react';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartItems = useCartStore(state => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.shop'), path: '/shop' },
    { name: t('nav.about'), path: '/about' },
  ];

  const AdinkraStar = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-ochre-gold/40">
      <path d="M12 0l3.09 8.26L24 9.27l-6 5.84L19.47 24 12 19.77 4.53 24 6 15.11 0 9.27l8.91-1.01L12 0z" />
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      scrolled
        ? 'bg-ebony-black/90 backdrop-blur-2xl py-4 border-b border-white/5 shadow-2xl'
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.2em] text-white group-hover:text-ochre-gold transition-colors uppercase">
            Ekton Afrik Arts
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <React.Fragment key={link.path}>
              <Link
                to={link.path}
                className={`text-[13px] font-sans font-bold uppercase tracking-[0.3em] transition-all relative py-2 group ${
                  location.pathname === link.path ? 'text-ochre-gold' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-terracotta transition-all group-hover:w-full"
                  initial={false}
                  animate={{ width: location.pathname === link.path ? '100%' : '0%' }}
                />
              </Link>
              {i < navLinks.length - 1 && <AdinkraStar />}
            </React.Fragment>
          ))}
        </div>

        {/* Right: Lang + Cart */}
        <div className="flex items-center gap-8">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Link to="/cart" className="relative p-2 text-white hover:text-ochre-gold transition-colors group">
            <ShoppingBag className="w-6 h-6 stroke-[1.5] group-hover:scale-110 transition-transform" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 bg-terracotta text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 bg-ebony-black z-40 lg:hidden flex flex-col justify-center px-12"
          >
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-white hover:text-ochre-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-12 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </div>

            <div className="absolute bottom-12 left-12">
               <p className="text-white/20 font-mono text-xs uppercase tracking-widest">Ekton Afrik Arts — Luanda, Angola</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
