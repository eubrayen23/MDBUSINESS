import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { clsx } from 'clsx';

export default function StudioHero() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref as any}
      className="bg-white px-6 pt-24 md:pt-32 pb-16 flex flex-col items-center text-center"
    >
      <div className={clsx(
        "max-w-[440px] w-full",
        isInView ? "animate-fade-in-up" : "opacity-0"
      )}>
        <h2
          className="font-mondwest text-[32px] md:text-[40px] lg:text-[44px] font-semibold text-studio-dark tracking-tight mb-4"
          style={{ animationDelay: '0.1s' }}
        >
          Ekton Afrik Arts
        </h2>

        <p
          className="font-mono text-xs md:text-sm text-studio-dark uppercase tracking-widest mb-2"
          style={{ animationDelay: '0.2s' }}
        >
          {t('studio.tagline')}
        </p>

        <h1
          className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-studio-accent tracking-tight mb-8"
          style={{ animationDelay: '0.3s' }}
        >
          {t('studio.heading1')}<br />
          <span className="font-mondwest italic">{t('studio.heading2')}</span>
        </h1>

        <div
          className="flex flex-col gap-6 text-sm md:text-base text-studio-dark leading-relaxed font-neue"
          style={{ animationDelay: '0.4s' }}
        >
          <p>{t('studio.p1')}</p>
          <p>{t('studio.p2')}</p>
          <p className="font-medium">{t('studio.p3')}</p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 justify-center"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href="https://wa.me/244934859497"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio-primary flex items-center justify-center"
          >
            {t('studio.cta_chat')}
          </a>
          <button className="btn-studio-secondary">
            {t('studio.cta_projects')}
          </button>
        </div>
      </div>
    </section>
  );
}
