import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'pinturas',
    label: 'Pinturas',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
    color: '#8B3A1E'
  },
  {
    id: 'esculturas',
    label: 'Esculturas',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800',
    color: '#C9882A'
  },
  {
    id: 'paisagens',
    label: 'Paisagens',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800',
    color: '#D4B896'
  },
  {
    id: 'artefactos',
    label: 'Artefactos',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=800',
    color: '#0E0E0E'
  }
];

const CardStack: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-cream-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-terracotta text-xs tracking-[0.4em] uppercase mb-4">Explore</p>
            <h2 className="text-5xl md:text-7xl font-display leading-tight">
              Curadoria de<br />
              <span className="italic font-normal">Excelência</span>
            </h2>
          </div>
          <Link to="/shop" className="text-ebony-black font-sans text-xs uppercase tracking-widest font-bold border-b border-ebony-black pb-1 hover:text-terracotta hover:border-terracotta transition-all">
            {t('common.view_all', 'Ver Galeria Completa')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-2xl cursor-pointer"
            >
              <Link to={`/shop?category=${cat.id}`}>
                {/* Background Image */}
                <motion.img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ebony-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: cat.color }}
                />

                {/* Content */}
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white/60 font-mono text-[10px] uppercase tracking-widest mb-2">0{index + 1}</p>
                  <h3 className="text-white text-3xl font-display mb-4">{cat.label}</h3>
                  <div className="w-0 group-hover:w-full h-[1px] bg-white/40 transition-all duration-500" />
                  <p className="mt-4 text-white/0 group-hover:text-white/70 font-sans text-xs uppercase tracking-widest transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    Explorar Obras
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStack;
