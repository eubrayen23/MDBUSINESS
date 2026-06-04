import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export default function BottomPillNav() {
  const { t } = useTranslation();
  const cartItems = useCartStore(state => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/90 backdrop-blur-xl rounded-full px-8 py-3 shadow-float border border-studio-accent/5 flex items-center gap-8">
        <Link to="/" className="font-mondwest text-2xl font-semibold text-studio-dark hover:scale-110 transition-transform">
          E
        </Link>

        <div className="w-[1px] h-6 bg-studio-accent/10" />

        <a
          href="https://wa.me/244934859497"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-studio-primary whitespace-nowrap text-sm py-2 px-6"
        >
          {t('studio.cta_chat')}
        </a>

        {itemCount > 0 && (
          <>
            <div className="w-[1px] h-6 bg-studio-accent/10" />
            <Link to="/cart" className="relative group">
              <span className="text-sm font-medium text-studio-dark group-hover:text-terracotta transition-colors">
                {t('nav.cart')}
              </span>
              <span className="absolute -top-2 -right-3 bg-terracotta text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
