import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const TESTIMONIALS = [
  {
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    text: "Com muito pouca orientação, a equipa entregou designs que foram consistentemente certeiros. Eles entendem a alma africana como ninguém.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Alex Wu",
    role: "Founder, Nexgate",
    text: "A Viktor liderou a criação do nosso melhor deck de investimento até à data! As peças de arte que adquirimos valorizaram 40% num ano.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    text: "Trabalhar com a Ekton transformou a nossa visão de produto. A integração de estética tradicional com design moderno é sublime.",
    avatar: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    text: "A qualidade do design e da curadoria excedeu as nossas expectativas. Um serviço de concierge de arte de classe mundial.",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "David Zhang",
    role: "Head of Design, Paradigm",
    text: "Trabalho incrível do início ao fim. A Ekton Afrik Arts é a referência para quem busca autenticidade em Luanda.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export default function ArtCarousel() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <h2 className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-studio-accent tracking-tight">
            {t('studio.builders_say_1')}{' '}
            <span className="font-mondwest italic text-terracotta">{t('studio.builders_say_2')}</span>
            {t('studio.builders_say_3') && ` ${t('studio.builders_say_3')}`}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-studio-dark text-studio-dark" />)}
          </div>
          <span className="text-sm font-medium">{t('studio.clutch')}</span>
        </div>
      </div>

      <div
        className="relative px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-6xl mx-auto relative overflow-visible">
          <div
            className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${currentIndex * (427.5 + 24)}px)` }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testi, i) => (
              <div
                key={i}
                className="w-[calc(100vw-48px)] md:w-[427.5px] flex-shrink-0 bg-white rounded-[40px] shadow-float px-8 py-10 flex flex-col justify-between h-[300px]"
              >
                <div>
                  <svg className="w-8 h-8 text-terracotta mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L10.017 3V15C10.017 18.3137 12.7033 21 16.017 21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C6.91243 8 6.017 7.10457 6.017 6V3L2.017 3V15C2.017 18.3137 4.70327 21 8.017 21H6.017Z" />
                  </svg>
                  <p className="text-studio-accent leading-relaxed italic">"{testi.text}"</p>
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold text-sm">{testi.name}</h4>
                    <p className="text-xs text-studio-muted flex items-center gap-1">
                      <ChevronRight className="w-3 h-3" /> {testi.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 flex gap-4">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-studio-accent/20 flex items-center justify-center hover:bg-studio-accent hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-studio-accent/20 flex items-center justify-center hover:bg-studio-accent hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
