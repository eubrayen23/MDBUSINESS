import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useCartStore } from '../store/cartStore';

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl font-semibold tracking-widest text-studio-dark group-hover:text-terracotta transition-colors uppercase">
            Ekton Afrik Arts
          </span>
        </Link>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <div key={link.path} className="flex items-center">
              <Link
                to={link.path}
                className={`text-[13px] font-mono uppercase tracking-[0.2em] transition-all hover:text-terracotta ${
                  location.pathname === link.path ? 'text-terracotta' : 'text-studio-dark'
                }`}
              >
                {link.name}
              </Link>
              {i < navLinks.length - 1 && (
                <span className="ml-8 text-[10px] text-studio-accent/20">✦</span>
              )}
            </div>
          ))}
        </div>

        {/* Right: Lang + Cart */}
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <Link to="/cart" className="relative p-2 text-studio-dark hover:text-terracotta transition-colors">
            <ShoppingBag className="w-6 h-6 stroke-[1.5]" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-1 right-1 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          <button
            className="md:hidden p-2 text-studio-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-0 bg-white z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-4xl font-display uppercase tracking-tight text-studio-dark"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-studio-accent/10">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
