import { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Strategy from './components/Strategy';
import About from './components/About';
import Team from './components/Team';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Preloader from './components/Preloader';
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
  const { cart, total, clearCart, isCheckoutOpen, setIsCheckoutOpen } = useCart();
  const [loading, setLoading] = useState(true);

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
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Strategy />
        <Services />
        <About />
        <Team />
      </main>
      <footer className="py-20 border-t border-brand-black/5 bg-brand-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-12">
            <img src="/logo.png" alt="MD Business" className="w-32 h-auto grayscale mb-6 rounded-full" />
            <p className="text-brand-black/40 text-xs font-bold uppercase tracking-[0.4em]">
              Sistemas Digitais de Alto Impacto
            </p>
          </div>

          <div className="mb-16">
            <h4 className="text-brand-black text-2xl font-black uppercase tracking-tighter mb-8">Pronto para elevar os seus <br /> padrões tecnológicos?</h4>
            <a
              href="https://wa.me/244934859497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-black text-brand-white px-12 py-6 text-xs font-black uppercase tracking-[0.3em] hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
            >
              Iniciar Consultoria
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
            <a href="https://instagram.com/md_business.ao" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors">Instagram</a>
            <a href="https://linkedin.com/company/md-business-ao" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors">LinkedIn</a>
            <a href="https://facebook.com/mdbusinessao" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors">Facebook</a>
            <a href="https://wa.me/244934859497" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-brand-black hover:text-brand-gold transition-colors">WhatsApp</a>
          </div>

          <p className="text-brand-black/20 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2025 MD Business. Angola, África. <br />
            Designed for the 1%.
          </p>
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
        items={cart}
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
