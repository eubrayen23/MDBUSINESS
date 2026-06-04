import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-ebony-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 scale-105"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ebony-black/60 via-transparent to-ebony-black/80" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-[11px] tracking-[0.5em] text-ochre-gold uppercase mb-6"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] tracking-tight mb-8"
        >
          A Alma de Angola,<br />
          <span className="italic font-normal">Moldurada em Arte.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 font-sans text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t('hero.subtext')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/shop"
            className="bg-terracotta text-white rounded-full px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:scale-105 hover:bg-ochre-gold transition-all shadow-xl"
          >
            {t('hero.cta_primary')}
          </Link>
          <Link
            to="/about"
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-white/20 transition-all"
          >
            {t('hero.cta_secondary')}
          </Link>
        </motion.div>
      </div>

      {/* Partner Badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-6 md:left-12 z-20 flex items-center gap-4 group"
      >
        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all">
          <span className="text-white font-bold text-[10px]">MC</span>
        </div>
        <div className="text-left">
          <p className="text-white/40 font-mono text-[9px] uppercase tracking-widest leading-none mb-1">
            {t('hero.partner')}
          </p>
          <p className="text-white font-sans text-[11px] font-bold uppercase tracking-wider">
            Ministério da Cultura
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-ochre-gold to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
