import { useTranslation } from 'react-i18next';
import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useEffect, useState, useRef } from 'react';
import fortress from '../assets/fortress.webp';

export default function FounderQuote() {
  const { t } = useTranslation();
  const { ref, isInView } = useInView();
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrolled = window.innerHeight - rect.top;
      if (scrolled > 0 && rect.bottom > 0) {
        setOffset(scrolled * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 flex flex-col items-center max-w-4xl mx-auto text-center overflow-hidden"
    >
      <div
        ref={ref as any}
        className={isInView ? "animate-fade-in-up" : "opacity-0"}
      >
        <Quote className="w-8 h-8 text-studio-accent mb-8 mx-auto" />

        <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-studio-accent tracking-tight mb-6">
          {t('studio.quote').split('Ekton').map((part, i, arr) => (
            <span key={i}>
              {part}
              {i < arr.length - 1 && <span className="font-mondwest italic text-terracotta">Ekton</span>}
            </span>
          ))}
        </h2>

        <p className="italic text-studio-muted mb-16">
          {t('studio.founder')}
        </p>

        <div className="flex gap-12 items-center justify-center mb-20 opacity-50">
          <span className="text-xl font-medium tracking-tight">UNESCO</span>
          <span className="text-xl font-medium tracking-tight">MINCULT</span>
          <span className="text-xl font-medium tracking-tight">UNICEF</span>
        </div>

        <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-float mx-auto">
          <img
            src={fortress}
            alt="Fortress"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `translateY(${offset - 50}px) scale(1.2)`,
              transition: 'transform 0.1s ease-out'
            }}
          />
        </div>
      </div>
    </section>
  );
}
