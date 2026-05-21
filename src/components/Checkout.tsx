import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, MessageSquare, Mail, Rocket } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderTotal: string;
}

const Checkout: React.FC<CheckoutModalProps> = ({ isOpen, onClose, orderTotal }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-brand-white w-full max-w-2xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            <div className="flex-1 p-12 text-center md:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto md:mx-0"
              >
                <CheckCircle size={32} />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4 tracking-tight">
                Pedido Quase Concluído.
              </h2>
              <p className="text-brand-black/60 mb-8 leading-relaxed">
                O seu pedido foi processado pelo nosso sistema premium. Para garantir a exclusividade e o rigor técnico, um especialista MD Business entrará em contacto brevemente.
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-center space-x-4 text-brand-black/80 font-medium">
                  <div className="w-10 h-10 bg-brand-gray rounded-xl flex items-center justify-center text-brand-gold">
                    <MessageSquare size={20} />
                  </div>
                  <span>Notificação via WhatsApp Automática</span>
                </div>
                <div className="flex items-center space-x-4 text-brand-black/80 font-medium">
                  <div className="w-10 h-10 bg-brand-gray rounded-xl flex items-center justify-center text-brand-gold">
                    <Mail size={20} />
                  </div>
                  <span>Confirmação enviada para mdbusinessorg@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 py-4 bg-brand-black text-brand-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                >
                  Continuar no Ecossistema
                </button>
              </div>
            </div>

            <div className="w-full md:w-[240px] bg-brand-gray p-12 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-brand-black/5">
              <span className="text-[10px] font-bold text-brand-black/40 uppercase tracking-[0.3em] mb-4">Total do Projeto</span>
              <span className="text-3xl font-bold text-brand-black mb-8 tracking-tighter">{orderTotal}</span>
              <div className="w-20 h-20 bg-brand-black rounded-3xl flex items-center justify-center text-brand-gold animate-bounce mb-4">
                <Rocket size={32} />
              </div>
              <p className="text-[10px] text-brand-black/30 font-bold uppercase tracking-widest leading-loose">
                Próxima Etapa: <br />
                Kickoff Estratégico
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Checkout;
