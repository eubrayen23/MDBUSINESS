import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { useProductStore } from '@/store/productStore';
import { ProductCard } from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();
  const products = useProductStore((state) => state.products.filter(p => p.featured).slice(0, 6));

  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display text-ebony-black mb-6"
          >
            {t('sections.featured')}
          </motion.h2>
          <div className="w-24 h-1 bg-terracotta mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
