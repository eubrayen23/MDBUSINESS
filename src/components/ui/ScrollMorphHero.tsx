import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SonaSpiral } from '../SonaSpiral';

const ScrollMorphHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section ref={containerRef} className="relative h-[200vh] bg-ebony-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, rotate, opacity }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 kuba-pattern opacity-10" />

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mb-8 flex justify-center"
            >
              <SonaSpiral className="w-32 h-32" />
            </motion.div>

            <motion.h2
              style={{ y: textY }}
              className="text-white text-5xl md:text-8xl font-display leading-none mb-8"
            >
              Raízes &<br />
              <span className="italic font-normal text-ochre-gold">Evolução</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-dusty-sand font-sans text-lg max-w-2xl mx-auto leading-relaxed"
            >
              {t('about.roots_desc', 'Desde os planaltos da Huíla às margens do Mussulo, Ekton Afrik Arts celebra a continuidade da alma angolana através da matéria e da forma.')}
            </motion.p>
          </div>
        </motion.div>

        {/* Narrative Flow */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <p className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Scroll Story</p>
          <div className="w-[1px] h-20 bg-gradient-to-b from-ochre-gold to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default ScrollMorphHero;
