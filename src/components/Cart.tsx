import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, isCartOpen, setIsCartOpen, total, clearCart, setIsCheckoutOpen } = useCart();

  const formatPrice = (p: number) => {
    return p.toLocaleString('pt-PT') + ' Kz';
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] glass z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-8 flex justify-between items-center border-b border-brand-black/5">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="text-brand-gold" />
                <h2 className="text-2xl font-bold tracking-tight text-brand-black">O Teu Carrinho</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-brand-black hover:text-brand-white rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-brand-gray rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-brand-black/20" />
                  </div>
                  <p className="text-brand-black/40 font-medium italic">O seu carrinho está vazio.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-brand-gold font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Explorar Serviços
                  </button>
                </div>
              ) : (
                cart.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-20 h-20 bg-brand-gray rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-brand-black group-hover:text-brand-gold transition-colors">{item.title}</h4>
                      <p className="text-brand-gold font-bold text-sm mt-1">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-black/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 bg-brand-white border-t border-brand-black/5 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-brand-black/40 font-bold uppercase tracking-widest text-xs">Total Estimado</span>
                  <span className="text-3xl font-bold tracking-tight text-brand-black">{formatPrice(total)}</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                   <button
                    onClick={() => {
                        setIsCartOpen(false);
                        setIsCheckoutOpen(true);
                    }}
                    className="w-full py-5 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-brand-gold hover:text-brand-black transition-all duration-500"
                   >
                    Finalizar Pedido
                  </button>
                  <button
                    onClick={clearCart}
                    className="text-brand-black/40 text-xs font-bold uppercase tracking-widest hover:text-brand-black transition-colors"
                  >
                    Limpar Tudo
                  </button>
                </div>
                <p className="text-[10px] text-center text-brand-black/30 leading-relaxed uppercase tracking-tighter">
                  Um especialista MD Business entrará em contacto para <br /> confirmar os detalhes técnicos e prazos.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
