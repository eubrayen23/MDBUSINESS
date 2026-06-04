import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { SonaSpiral } from '@/components/SonaSpiral';
import fortress from '../assets/fortress.webp';
import market1 from '../assets/market1.jpg';
import market_sign from '../assets/market_sign.jpg';
import mask_ritual from '../assets/mask_ritual.jpg';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { title: 'Autenticidade', text: 'Garantimos a origem e a legitimidade de cada peça na nossa coleção.' },
    { title: 'Excelência', text: 'Selecionamos apenas obras que demonstram mestria técnica e profundidade artística.' },
    { title: 'Ética', text: 'Trabalhamos diretamente com artistas e comunidades para garantir um comércio justo.' },
    { title: 'Património', text: 'Dedicamo-nodes à preservação e promoção da cultura angolana a nível global.' },
  ];

  return (
    <main className="bg-white min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-ochre-gold text-[10px] tracking-[0.4em] uppercase mb-6"
            >
              Ekton Afrik Arts Gallery
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display text-ebony-black mb-10 leading-tight tracking-tight"
            >
              Conectando o Mundo à <span className="italic text-terracotta">Alma Africana</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-ebony-black/70 text-lg font-sans leading-relaxed mb-10"
            >
              {t('about.story_text')}
            </motion.p>
            <div className="flex gap-4">
               <div className="w-12 h-0.5 bg-terracotta mt-4" />
               <p className="font-display text-xl italic text-ebony-black">Sourced ethically from local communities and master artisans.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden bg-ebony-black p-12 flex items-center justify-center shadow-2xl">
               <SonaSpiral className="w-full h-full opacity-40" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white rounded-full flex items-center justify-center p-8 text-center shadow-xl rotate-12 border border-ebony-black/5">
               <span className="font-display text-ebony-black text-lg leading-tight uppercase font-bold tracking-tight">Est. 2018 Luanda</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {[fortress, market1, market_sign, mask_ritual].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-lg"
            >
              <img src={img} alt="Ekton Afrik Arts" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 px-6 md:px-12 bg-cream-white/30 border-y border-ebony-black/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-display text-ebony-black mb-6">{t('about.mission')}</h2>
              <p className="text-ebony-black/70 font-sans leading-relaxed">
                Nossa missão é elevar a arte africana ao patamar de luxo global, celebrando a herança cultural de Angola e apoiando o desenvolvimento sustentável das nossas comunidades artísticas.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {values.map((v, i) => (
                <div key={i}>
                  <h3 className="font-display text-2xl text-terracotta mb-4 italic">{v.title}</h3>
                  <p className="text-ebony-black/70 font-sans leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Pattern */}
      <div className="h-24 bg-white w-full" />
    </main>
  );
};

export default About;
