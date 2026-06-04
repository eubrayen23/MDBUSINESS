import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'pinturas', image: 'https://picsum.photos/seed/paint/800/1000' },
  { id: 'esculturas', image: 'https://picsum.photos/seed/sculpt/800/1000' },
  { id: 'paisagens', image: 'https://picsum.photos/seed/land/800/1000' },
  { id: 'artefactos', image: 'https://picsum.photos/seed/artif/800/1000' },
];

const CategoriesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 md:px-12 bg-cream-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display text-ebony-black mb-6"
          >
            {t('sections.categories')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[3/4] rounded-[40px] overflow-hidden"
            >
              <motion.img
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.8 }}
                src={cat.image}
                alt={cat.id}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ebony-black/80 via-ebony-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-3xl font-display text-white mb-2 group-hover:text-ochre-gold transition-colors">
                  {t(`categories.${cat.id}`)}
                </h3>
                <div className="w-0 group-hover:w-full h-0.5 bg-terracotta transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
