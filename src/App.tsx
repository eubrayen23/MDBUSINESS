import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { CartProvider, useCart } from './context/CartContext';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-brand-gold rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};

const AppContent = () => {
  const { total, clearCart, isCheckoutOpen, setIsCheckoutOpen } = useCart();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const formatPrice = (p: number) => {
    return p.toLocaleString('pt-PT') + ' Kz';
  };

  return (
    <div className="relative min-h-screen bg-brand-white selection:bg-brand-gold/30">
      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
      </main>
      <footer className="py-20 border-t border-brand-black/5 bg-brand-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-brand-black flex items-center justify-center rounded-lg">
              <span className="text-brand-gold font-bold text-sm">MD</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-brand-black">BUSINESS</span>
          </div>
          <p className="text-brand-black/40 text-sm font-medium uppercase tracking-[0.2em] mb-12">
            © 2025 MD Business. Todos os direitos reservados. <br />
            Luanda, Angola.
          </p>
          <div className="flex justify-center space-x-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black/60 hover:text-brand-gold transition-colors">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black/60 hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black/60 hover:text-brand-gold transition-colors">Behance</a>
            <a href="https://wa.me/244934859497" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black/60 hover:text-brand-gold transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>

      <Cart />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => {
            setIsCheckoutOpen(false);
            clearCart();
        }}
        orderTotal={formatPrice(total)}
      />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
