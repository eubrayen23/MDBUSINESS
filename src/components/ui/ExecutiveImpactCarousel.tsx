import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { Product } from '../../store/productStore';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

interface ExecutiveImpactCarouselProps {
  products: Product[];
}

const ExecutiveImpactCarousel: React.FC<ExecutiveImpactCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const addItem = useCartStore((state) => state.addItem);

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const currentProduct = products[currentIndex];
  const lang = i18n.language as 'pt' | 'en' | 'fr';

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addItem(product);
    toast.success(t('cart.added_success'), {
      style: {
        background: '#0E0E0E',
        color: '#F5EFE0',
        border: '1px solid #C9882A',
      },
    });
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-ebony-black flex items-center">
      {/* Background Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProduct.id + "-bg"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={currentProduct.images[0]}
            alt=""
            className="w-full h-full object-cover blur-3xl scale-110"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 relative h-[50vh] lg:h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, x: -100, rotateY: 45 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 100, rotateY: -45 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full h-full relative"
              style={{ perspective: "2000px" }}
            >
              <div className="absolute inset-0 bg-ochre-gold/10 rounded-2xl -rotate-3 scale-105" />
              <img
                src={currentProduct.images[0]}
                alt={currentProduct.name[lang]}
                className="w-full h-full object-contain rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative z-10"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id + "-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
            >
              <p className="font-mono text-ochre-gold text-xs tracking-[0.4em] uppercase mb-4">
                {currentProduct.category}
              </p>
              <h2 className="text-4xl md:text-6xl font-display mb-4 leading-tight">
                {currentProduct.name[lang]}
              </h2>
              <p className="text-white/60 font-sans text-sm md:text-base mb-2 italic">
                {currentProduct.artist}
              </p>
              <p className="text-2xl font-mono text-white mb-8">
                ${currentProduct.price.toLocaleString()}
              </p>
              <p className="text-white/70 font-sans leading-relaxed mb-10 max-w-md">
                {currentProduct.description[lang]}
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={(e) => handleAddToCart(e, currentProduct)}
                  className="bg-terracotta hover:bg-ochre-gold text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all font-sans text-xs uppercase tracking-widest font-bold"
                >
                  <ShoppingBag size={18} />
                  {t('product.add_to_cart')}
                </button>
                <button className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full transition-all font-sans text-xs uppercase tracking-widest font-bold">
                  {t('product.view_details')}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-20">
        <button
          onClick={prev}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-ebony-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-ebony-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Counter */}
      <div className="absolute bottom-12 left-12 font-mono text-white/20 text-4xl">
        0{currentIndex + 1} <span className="text-xs align-top">/ 0{products.length}</span>
      </div>
    </div>
  );
};

export default ExecutiveImpactCarousel;
