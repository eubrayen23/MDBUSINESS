import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Trash2, MessageCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const { items, removeItem, updateQty, getTotal } = useCartStore();
  const total = getTotal();

  const handleCheckout = () => {
    const itemsList = items.map(i => `• ${i.name} (x${i.qty}) — $${i.price}`).join('\n');
    const msg = encodeURIComponent(
      `${t('cart.whatsapp_msg')}\n\n${itemsList}\n\nTotal: $${total}`
    );
    window.open(`https://wa.me/244934859497?text=${msg}`, '_blank');
  };

  return (
    <main className="bg-cream-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-display text-ebony-black mb-16">{t('cart.title')}</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatePresence mode="popLayout">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex flex-col sm:flex-row items-center gap-8 p-6 bg-white rounded-[32px] border border-ebony-black/5"
                  >
                    <div className="w-24 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="font-display text-2xl text-ebony-black mb-1">{item.name}</h3>
                      <p className="font-sans text-xs text-ebony-black/40 uppercase tracking-widest mb-4">{item.artist}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-4">
                        <div className="flex items-center bg-cream-white rounded-full px-4 py-2">
                           <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-6 h-6 flex items-center justify-center font-mono">-</button>
                           <span className="font-mono font-bold w-10 text-center text-xs">{item.qty}</span>
                           <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 flex items-center justify-center font-mono">+</button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-terracotta/40 hover:text-terracotta transition-colors">
                           <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-2xl font-mono font-bold text-ebony-black">
                      ${item.price * item.qty}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-ebony-black text-white p-10 rounded-[48px] sticky top-32">
                <h2 className="text-3xl font-display mb-10">{t('cart.summary')}</h2>

                <div className="space-y-6 mb-10 border-b border-white/10 pb-10">
                  <div className="flex justify-between items-center text-white/60 font-sans text-sm uppercase tracking-widest">
                    <span>{t('cart.subtotal')}</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between items-center text-white/60 font-sans text-sm uppercase tracking-widest">
                    <span>{t('cart.shipping')}</span>
                    <span className="text-ochre-gold">{t('cart.free')}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-12">
                  <span className="font-display text-2xl">{t('cart.total')}</span>
                  <span className="font-mono text-3xl text-ochre-gold font-bold">${total}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-terracotta text-white rounded-full py-5 flex items-center justify-center gap-3 font-sans text-sm uppercase tracking-widest font-bold hover:bg-ochre-gold hover:text-ebony-black transition-all group"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cart.checkout')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>

                <p className="mt-8 text-white/30 text-[10px] text-center uppercase tracking-[0.2em] font-sans">
                   Pagamento seguro via WhatsApp Business
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-32 text-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-10 border border-ebony-black/5 shadow-sm">
               <ShoppingBag className="w-8 h-8 text-ebony-black/20" />
            </div>
            <h2 className="text-4xl font-display text-ebony-black mb-8">{t('cart.empty')}</h2>
            <Link to="/shop" className="btn-primary">
              Voltar para a Loja
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
