import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';
import { Product } from '@/store/productStore';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { i18n, t } = useTranslation();
  const addItem = useCartStore((state) => state.addItem);

  const currentLang = i18n.language as keyof typeof product.name;
  const productName = product.name[currentLang] || product.name.pt;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(t('product.added'));
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-[32px] overflow-hidden border border-ebony-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
    >
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[3/4]">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={product.images[0]}
          alt={productName}
          className="w-full h-full object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-ebony-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
           <span className="bg-white/90 backdrop-blur text-ebony-black px-6 py-2 rounded-full font-sans text-[10px] uppercase tracking-widest font-bold">
             Ver Detalhes
           </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-ochre-gold">
            {t(`categories.${product.category}`)}
          </span>
          <span className="font-mono text-xs font-bold text-terracotta">
            ${product.price}
          </span>
        </div>

        <Link to={`/product/${product.id}`}>
          <h3 className="font-display text-xl text-ebony-black mb-1 group-hover:text-terracotta transition-colors line-clamp-1">
            {productName}
          </h3>
        </Link>

        <p className="font-sans text-[11px] text-ebony-black/50 uppercase tracking-widest mb-6">
          {product.artist}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-ebony-black text-white rounded-full py-3 flex items-center justify-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-terracotta transition-all active:scale-95"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          {t('product.add_to_cart')}
        </button>
      </div>

      {product.featured && (
        <div className="absolute top-4 left-4 bg-ochre-gold text-ebony-black px-3 py-1 rounded-full font-mono text-[8px] uppercase tracking-widest font-bold">
          Destaque
        </div>
      )}
    </motion.div>
  );
};
