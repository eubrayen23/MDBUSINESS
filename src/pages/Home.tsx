import React from 'react';
import HeroSection from '../components/HeroSection';
import ExecutiveImpactCarousel from '../components/ui/ExecutiveImpactCarousel';
import ScrollMorphHero from '../components/ui/ScrollMorphHero';
import CardStack from '../components/ui/CardStack';
import ArtMarquee from '../components/ArtMarquee';
import FounderQuote from '../components/FounderQuote';
import CollectionShowcase from '../components/CollectionShowcase';
import { useProductStore } from '../store/productStore';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const products = useProductStore((state) => state.products);
  const featuredProducts = products.filter((p) => p.featured);
  const { t } = useTranslation();

  return (
    <main className="bg-cream-white min-h-screen">
      {/* 1. Hero Section - Cinematic Entrance */}
      <HeroSection />

      {/* 2. Cultural Partners Marquee */}
      <ArtMarquee />

      {/* 3. Featured Collection - Executive Impact Carousel */}
      <section className="py-12 bg-ebony-black">
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-ochre-gold text-[10px] uppercase tracking-[0.5em] mb-4">Curadoria Selecta</p>
            <h2 className="text-white text-4xl md:text-5xl font-display">Obras em Destaque</h2>
          </motion.div>
        </div>
        <ExecutiveImpactCarousel products={featuredProducts} />
      </section>

      {/* 4. Narrative Bridge - Scroll Morph Hero */}
      <ScrollMorphHero />

      {/* 5. Collection Showcase - Grid with context */}
      <CollectionShowcase />

      {/* 6. Categories Exploration - Card Stack */}
      <CardStack />

      {/* 7. Founder Vision / Quote */}
      <FounderQuote />

      {/* 8. Call to Action - Final Section */}
      <section className="py-32 bg-ebony-black text-center relative overflow-hidden">
        <div className="absolute inset-0 kuba-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-white text-5xl md:text-8xl font-display mb-12 leading-tight">
              Leve a Alma de<br />
              <span className="italic font-normal text-ochre-gold">Angola</span> para o Mundo.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-terracotta text-white px-12 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-bold shadow-2xl"
                >
                  {t('common.start_collecting', 'Começar Colecção')}
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white/20 text-white px-12 py-5 rounded-full font-sans text-xs uppercase tracking-widest font-bold backdrop-blur-sm"
                >
                  {t('nav.about')}
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
