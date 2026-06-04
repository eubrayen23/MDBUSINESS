import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ebony-black/55 via-ebony-black/15 to-ebony-black/75 z-[1]" />
      <div className="absolute inset-0 bg-ebony-black/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-mono text-ochre-gold text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6"
        >
          {t('hero.eyebrow')}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-white text-5xl md:text-8xl font-normal leading-[1.05] tracking-tight mb-8"
        >
          {t('hero.headline').split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i === 1 ? <span className="italic">{line}</span> : line}
              {i === 0 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/70 text-base md:text-lg max-w-xl mx-auto font-sans leading-relaxed mb-10"
        >
          {t('hero.subtext')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="/shop" className="btn-primary w-full sm:w-auto px-10 py-4 uppercase text-[12px] tracking-widest font-bold">
            {t('hero.cta_primary')}
          </a>
          <a href="/about" className="btn-secondary w-full sm:w-auto px-10 py-4 uppercase text-[12px] tracking-widest font-bold">
            {t('hero.cta_secondary')}
          </a>
        </motion.div>
      </div>

      {/* Partner Badge */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-6 md:left-12 z-10 flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10"
      >
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px]">
          🇦🇴
        </div>
        <div className="flex flex-col">
          <span className="text-white text-[10px] font-bold uppercase tracking-wider">Ministério da Cultura</span>
          <span className="text-white/50 text-[8px] uppercase tracking-widest">{t('hero.partner')}</span>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-ochre-gold to-transparent" />
      </motion.div>
    </section>
  );
};
