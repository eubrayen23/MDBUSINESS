import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowLeft, ShieldCheck, Truck, ChevronRight, MessageCircle } from 'lucide-react';
import { useProductStore } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const product = useProductStore((state) => state.products.find((p) => p.id === id));
  const addItem = useCartStore((state) => state.addItem);

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center bg-cream-white">
        <div className="text-center">
          <h2 className="text-4xl font-display mb-6">Obra não encontrada</h2>
          <button onClick={() => navigate('/shop')} className="btn-primary">Voltar para a Galeria</button>
        </div>
      </div>
    );
  }

  const currentLang = i18n.language as keyof typeof product.name;
  const productName = product.name[currentLang] || product.name.pt;
  const productDesc = product.description[currentLang] || product.description.pt;

  const handleAddToCart = () => {
    addItem(product, qty);
    toast.success(t('product.added'));
  };

  const handleBuyNow = () => {
    const msg = encodeURIComponent(
      `Olá! Gostaria de comprar a obra:\n\n• ${productName} — $${product.price}\n\nTotal: $${product.price}`
    );
    window.open(`https://wa.me/244934859497?text=${msg}`, '_blank');
  };

  return (
    <main className="bg-cream-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-ebony-black/40 hover:text-ebony-black font-sans text-[10px] uppercase tracking-widest font-bold mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[3/4] rounded-[48px] overflow-hidden bg-white border border-ebony-black/5"
            >
              <img
                src={product.images[activeImage]}
                alt={productName}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === i ? 'border-ochre-gold scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${productName} thumbnail ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-ochre-gold mb-4">
              {t(`categories.${product.category}`)}
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-ebony-black mb-6 leading-tight">
              {productName}
            </h1>

            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-ebony-black flex items-center justify-center text-white text-xl">
                 {product.artist.charAt(0)}
               </div>
               <div>
                 <p className="font-sans text-xs uppercase tracking-widest text-ebony-black font-bold">{product.artist}</p>
                 <p className="font-sans text-[10px] text-ebony-black/40 uppercase tracking-widest">Artista Angolano</p>
               </div>
            </div>

            <div className="text-4xl font-mono text-terracotta mb-10 font-bold">
              ${product.price}
            </div>

            <p className="text-ebony-black/60 font-sans text-lg leading-relaxed mb-12">
              {productDesc}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-ebony-black/5 mb-12">
               <div>
                 <p className="font-sans text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">{t('product.dimensions')}</p>
                 <p className="font-mono text-sm font-bold">{product.dimensions || 'N/A'}</p>
               </div>
               <div>
                 <p className="font-sans text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">{t('product.medium')}</p>
                 <p className="font-mono text-sm font-bold">{product.medium || 'N/A'}</p>
               </div>
               <div>
                 <p className="font-sans text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">{t('product.year')}</p>
                 <p className="font-mono text-sm font-bold">{product.year || 'N/A'}</p>
               </div>
            </div>

            {/* Quantity and CTA */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-12">
              <div className="flex items-center bg-white border border-ebony-black/5 rounded-full px-6 py-4">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center text-xl font-mono">-</button>
                <span className="flex-1 text-center font-mono font-bold w-12">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center text-xl font-mono">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-ebony-black text-white rounded-full py-4 flex items-center justify-center gap-3 font-sans text-xs uppercase tracking-widest font-bold hover:bg-terracotta transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                {t('product.add_to_cart')}
              </button>
            </div>

            <button
               onClick={handleBuyNow}
               className="w-full bg-white border-2 border-ebony-black text-ebony-black rounded-full py-5 flex items-center justify-center gap-3 font-sans text-sm uppercase tracking-widest font-bold hover:bg-ebony-black hover:text-white transition-all mb-12"
            >
              <MessageCircle className="w-5 h-5" />
              {t('product.buy_now')}
            </button>

            {/* Badges */}
            <div className="space-y-4">
               <div className="flex items-center gap-4 text-ebony-black/60">
                 <ShieldCheck className="w-5 h-5 text-ochre-gold" />
                 <span className="font-sans text-xs uppercase tracking-widest">{t('product.authenticity')}</span>
               </div>
               <div className="flex items-center gap-4 text-ebony-black/60">
                 <Truck className="w-5 h-5 text-ochre-gold" />
                 <span className="font-sans text-xs uppercase tracking-widest">{t('product.shipping')}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
