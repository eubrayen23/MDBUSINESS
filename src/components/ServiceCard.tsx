import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  image: string;
  isPopular?: boolean;
  onAddToCart: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  features,
  image,
  isPopular,
  onAddToCart
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className={`relative group bg-brand-white border border-brand-black/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${isPopular ? 'border-brand-gold/30 ring-1 ring-brand-gold/20' : ''}`}
    >
      {isPopular && (
        <div className="absolute top-4 right-4 bg-brand-gold text-brand-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest z-10">
          Mais Vendido
        </div>
      )}

      {/* Image / Mockup Area */}
      <div className="h-64 bg-brand-gray relative overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 to-transparent" />
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-gold transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center text-brand-gold">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-bold ml-1">4.9</span>
          </div>
        </div>

        <p className="text-sm text-brand-black/60 mb-6 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center space-x-3">
              <CheckCircle2 size={16} className="text-brand-gold" />
              <span className="text-xs text-brand-black/80">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] text-brand-black/40 uppercase font-bold tracking-widest block mb-1">Investimento</span>
            <span className="text-2xl font-bold text-brand-black tracking-tight">{price}</span>
          </div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.4)"
            }}
            onClick={onAddToCart}
            className="w-14 h-14 bg-brand-black text-brand-white rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all duration-500 shadow-lg shadow-black/10"
          >
            <ShoppingCart size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
