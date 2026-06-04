import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';
import { MessageCircle } from 'lucide-react';

export default function ServicePricing() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 px-6 bg-cream-white/30">
      <div
        ref={ref as any}
        className="max-w-6xl mx-auto flex flex-col md:items-end"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-4xl">
          {/* Card 1: Dark */}
          <div
            className={`bg-studio-dark rounded-[40px] px-10 pt-12 pb-16 text-studio-light shadow-primary transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            <h3 className="text-2xl font-medium mb-4">{t('studio.pricing_partnership_title')}</h3>
            <p className="text-studio-ice/70 leading-relaxed mb-8">
              {t('studio.pricing_partnership_desc')}
            </p>
            <div className="mb-12">
              <span className="text-4xl font-display">$5,000</span>
              <span className="block text-sm text-studio-ice/50 uppercase tracking-widest mt-1">Monthly</span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/244934859497"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-studio-dark rounded-full px-7 py-3 text-center font-medium shadow-secondary flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t('studio.cta_chat')}
              </a>
              <button className="text-studio-ice/60 hover:text-white transition-colors">
                How it works
              </button>
            </div>
          </div>

          {/* Card 2: Light */}
          <div
            className={`bg-white rounded-[40px] px-10 pt-12 pb-16 text-studio-dark shadow-float transition-all duration-700 ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-medium mb-4">{t('studio.pricing_project_title')}</h3>
            <p className="text-studio-muted leading-relaxed mb-8">
              {t('studio.pricing_project_desc')}
            </p>
            <div className="mb-12">
              <span className="text-4xl font-display">$5,000</span>
              <span className="block text-sm text-studio-muted uppercase tracking-widest mt-1">Minimum</span>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/244934859497"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-studio-primary text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {t('studio.cta_chat')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
