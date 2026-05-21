import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const particles = Array.from({ length: 30 });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-brand-white">
      {/* Cinematic Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-brand-gold rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Volumetric Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          style={{ y: y1, opacity }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-brand-black leading-tight mb-8"
          >
            Transformamos Ideias em <br />
            <span className="text-brand-gold">Sistemas Digitais</span> de <br />
            Alto Impacto.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-brand-black/60 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Automação, Inteligência Artificial, Branding e Soluções Empresariais para empresas que desejam dominar o futuro.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-brand-black text-brand-white rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-gold hover:text-brand-black transition-all duration-500 transform hover:scale-105"
            >
              Explorar Serviços
            </button>
            <button
              onClick={() => window.open('https://wa.me/244934859497', '_blank')}
              className="px-10 py-5 border border-brand-black/10 text-brand-black rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-gray transition-all duration-500 transform hover:scale-105"
            >
              Falar com Especialista
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-black/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
