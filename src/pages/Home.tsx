import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { HeroSection } from '@/components/HeroSection';
import { Marquee } from '@/components/Marquee';
import { ProductCard } from '@/components/ProductCard';
import { useProductStore } from '@/store/productStore';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const products = useProductStore((state) => state.products);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 6);

  const categories = [
    { id: 'pinturas', label: 'categories.pinturas', img: 'https://picsum.photos/seed/paint/800/1000' },
    { id: 'esculturas', label: 'categories.esculturas', img: 'https://picsum.photos/seed/sculpture/800/1000' },
    { id: 'paisagens', label: 'categories.paisagens', img: 'https://picsum.photos/seed/landscape/800/1000' },
    { id: 'artefactos', label: 'categories.artefactos', img: 'https://picsum.photos/seed/artifact/800/1000' },
  ];

  return (
    <main className="bg-cream-white min-h-screen">
      <HeroSection />

      <Marquee />

      {/* Featured Products */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display text-ebony-black mb-6"
            >
              {t('sections.featured')}
            </motion.h2>
            <p className="text-ebony-black/60 font-sans max-w-md">
              Uma seleção rigorosa das nossas peças mais exclusivas, representando a excelência artística de Angola.
            </p>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 group text-terracotta font-sans text-sm uppercase tracking-widest font-bold"
          >
            {t('shop.all')} <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
             <div className="col-span-full py-20 text-center border-2 border-dashed border-ebony-black/10 rounded-3xl">
                <p className="text-ebony-black/40 font-sans italic">A carregar obras em destaque...</p>
             </div>
          )}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 md:px-12 bg-ebony-black text-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-20 text-center"
          >
            {t('sections.categories')}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[500px] rounded-[40px] overflow-hidden cursor-pointer"
              >
                <Link to={`/shop?category=${cat.id}`}>
                  <img
                    src={cat.img}
                    alt={t(cat.label)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ebony-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl font-display group-hover:text-ochre-gold transition-colors">
                      {t(cat.label)}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-ochre-gold transition-all duration-500" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="max-w-3xl mx-auto"
         >
           <div className="w-16 h-16 bg-terracotta/10 rounded-full flex items-center justify-center text-terracotta text-2xl mx-auto mb-10">
             ✦
           </div>
           <h2 className="text-4xl md:text-5xl font-display text-ebony-black mb-8 italic">
             "A arte não é apenas o que vês, mas o que fazes os outros sentirem."
           </h2>
           <p className="text-ebony-black/60 font-sans text-lg mb-12">
             Na Ekton Afrik Arts, cada obra conta uma história de resistência, beleza e tradição. Explore a nossa galeria e descubra a alma vibrante de Angola.
           </p>
           <Link to="/about" className="btn-primary">
             {t('hero.cta_secondary')}
           </Link>
         </motion.div>
      </section>
    </main>
  );
};

export default Home;
