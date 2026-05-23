import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Estratégia', href: '#strategy' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Equipa', href: '#team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4 glass border-b' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <img src="/logo.png" alt="MD Business" className="h-8 md:h-12 w-auto grayscale contrast-125 rounded-full" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="text-sm font-medium tracking-widest uppercase text-brand-black/70 hover:text-brand-gold transition-colors duration-300"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 text-brand-black/70 hover:text-brand-gold transition-colors"
          >
            <Search size={20} />
          </motion.button>
          <motion.button
            onClick={() => setIsCartOpen(true)}
            whileHover={{ scale: 1.1 }}
            className="p-2 text-brand-black/70 hover:text-brand-gold transition-colors relative"
          >
            <ShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-brand-gold text-brand-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-brand-black text-brand-white rounded-full text-xs font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            Falar com Especialista
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button onClick={() => setIsCartOpen(true)} className="p-2 relative">
              <ShoppingCart size={24} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-brand-gold text-brand-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
           </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center">
                 <img src="/logo.png" alt="MD Business" className="h-8 w-auto grayscale rounded-full" />
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center p-12 space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-black uppercase tracking-tighter hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="p-12 border-t">
              <button className="w-full py-6 bg-brand-black text-brand-white font-black uppercase tracking-[0.2em] text-sm">
                Falar com Especialista
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
