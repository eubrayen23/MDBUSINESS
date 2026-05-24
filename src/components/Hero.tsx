import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Magnetic Button Effect
  useEffect(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const distance = Math.sqrt(x * x + y * y);
      if (distance < 150) {
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      } else {
        btn.style.transform = `translate(0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      btn.style.transform = `translate(0, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    btn.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      btn.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-white text-black pt-20 overflow-hidden"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Volumetric Light */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/3 blur-[100px] rounded-full" />

        {/* Particle Canvas Mockup (CSS Particles) */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
            animate={{
              y: [null, '-20%'],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full"
          />
        ))}
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-[1800px] mx-auto w-full"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-2"
          >
            We create
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase mb-2 flex items-center"
          >
            <span className="bg-black text-white px-2 md:px-[0.1em] py-[0.01em] inline-block">digital</span>
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter uppercase"
          >
            experiences<span className="text-[#D4AF37]">.</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-12"
        >
          <p className="text-lg md:text-3xl max-w-2xl font-light leading-tight text-black/60 italic">
            Sistemas de alto desempenho para organizações que definem o futuro. O seu parceiro estratégico em toda Angola.
          </p>

          <button
            ref={buttonRef}
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative bg-black text-white px-8 py-6 md:px-12 md:py-8 text-xs md:text-sm font-black uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 ease-out whitespace-nowrap"
          >
            <span className="relative z-10">Explorar Ecossistema</span>
            <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-20">Scroll</span>
        <div className="w-px h-12 bg-black/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
