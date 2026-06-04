import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { SonaSpiral } from '@/components/SonaSpiral';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    { title: 'Autenticidade', text: 'Garantimos a origem e a legitimidade de cada peça na nossa coleção.' },
    { title: 'Excelência', text: 'Selecionamos apenas obras que demonstram mestria técnica e profundidade artística.' },
    { title: 'Ética', text: 'Trabalhamos diretamente com artistas e comunidades para garantir um comércio justo.' },
    { title: 'Património', text: 'Dedicamo-nos à preservação e promoção da cultura angolana a nível global.' },
  ];

  return (
    <main className="bg-cream-white min-h-screen pt-32">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-mono text-ochre-gold text-xs tracking-[0.4em] uppercase mb-6"
            >
              Ekton Afrik Arts
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display text-ebony-black mb-10 leading-tight"
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
               <div className="w-12 h-0.5 bg-ochre-gold mt-4" />
               <p className="font-display text-xl italic text-ebony-black">Sourced ethically from local communities and master artisans.</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden bg-ebony-black p-12 flex items-center justify-center">
               <SonaSpiral className="w-full h-full opacity-50" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-ochre-gold rounded-full flex items-center justify-center p-8 text-center shadow-xl rotate-12">
               <span className="font-display text-ebony-black text-lg leading-tight uppercase font-bold tracking-tighter">Est. 2025 Luanda</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery of Artisans */}
      <section className="mb-32 overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          {[
            'https://picsum.photos/seed/artisan1/1200/800',
            'https://picsum.photos/seed/artisan2/1200/800',
            'https://picsum.photos/seed/artisan3/1200/800',
          ].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[80vw] md:w-[600px] h-[400px] rounded-[40px] overflow-hidden shadow-lg">
              <img src={img} alt="Artisan at work" className="w-full h-full object-cover" />
            </div>
          ))}
          {/* Repeat for seamlessness */}
          {[
            'https://picsum.photos/seed/artisan1/1200/800',
            'https://picsum.photos/seed/artisan2/1200/800',
            'https://picsum.photos/seed/artisan3/1200/800',
          ].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[80vw] md:w-[600px] h-[400px] rounded-[40px] overflow-hidden shadow-lg">
              <img src={img} alt="Artisan at work" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <h2 className="text-4xl md:text-5xl font-display text-ebony-black mb-6">{t('about.mission')}</h2>
              <p className="text-ebony-black/60 font-sans leading-relaxed">
                Nossa missão é elevar a arte africana ao patamar de luxo global, celebrando a herança cultural de Angola e apoiando o desenvolvimento sustentável das nossas comunidades artísticas.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              {values.map((v, i) => (
                <div key={i}>
                  <h3 className="font-display text-2xl text-terracotta mb-4 uppercase tracking-widest">{v.title}</h3>
                  <p className="text-ebony-black/60 font-sans leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kuba Pattern Divider */}
      <div className="h-24 kuba-pattern w-full opacity-10" />
    </main>
  );
};

export default About;
