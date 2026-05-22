import React from 'react';
import { ShoppingCart, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  onAddToCart: () => void;
  dark?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  description,
  features,
  onAddToCart,
  dark = true
}) => {
  const baseClasses = "p-8 md:p-10 transition-all duration-500 flex flex-col h-full group relative overflow-hidden";
  const lightClasses = "border border-black bg-white text-black hover:bg-black hover:text-white";
  const darkClasses = "border border-white/20 bg-black text-white hover:bg-white hover:text-black";

  return (
    <div className={`${baseClasses} ${dark ? darkClasses : lightClasses}`}>
      {/* Hover Background Fill Effect */}
      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${dark ? 'bg-white' : 'bg-black'} -z-0`} />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none max-w-[70%]">{title}</h3>
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center opacity-20 ${dark ? 'border-white' : 'border-black'}`}>
             <span className="text-[10px] font-black">MD</span>
          </div>
        </div>

        <p className="text-sm md:text-base mb-8 flex-1 font-medium opacity-60 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-black">
              <CheckCircle2 size={12} className="mr-3 flex-shrink-0" />
              {f}
            </div>
          ))}
        </div>

        <div className={`flex items-center justify-between pt-8 border-t ${dark ? 'border-white/10' : 'border-black/10'}`}>
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-1">Investimento</span>
            <div className="text-2xl font-black tracking-tighter leading-none">{price}</div>
          </div>

          {price !== 'Personalizado' && (
            <button
              onClick={onAddToCart}
              className={`p-4 border transition-all duration-500 flex items-center justify-center hover:scale-110 ${dark ? 'border-white/20 group-hover:border-black' : 'border-black/20 group-hover:border-white'}`}
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
