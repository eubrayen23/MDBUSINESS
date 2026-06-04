import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const partners = [
  { name: "Ministério da Cultura" },
  { name: "Museu Nacional de Antropologia" },
  { name: "Centro Cultural Brasil-Angola" },
  { name: "Galeria Indigo" },
  { name: "Governo Provincial de Luanda" },
  { name: "AAAC – Associação de Artistas" },
  { name: "Museu Nacional da Escravatura" },
  { name: "Instituto Nacional das Artes" },
];

export const Marquee: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-cream-white py-24 overflow-hidden border-y border-ebony-black/5">
      <div className="max-w-[1400px] mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-ebony-black tracking-tight">
          {t('sections.partners')}
        </h2>
      </div>

      <div className="relative">
        {/* Gradients to mask edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-cream-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-cream-white to-transparent z-10" />

        <div className="animate-marquee flex gap-8 py-4">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 h-24 bg-white border border-ebony-black/5 rounded-2xl flex items-center justify-center p-6 shadow-sm hover:border-ochre-gold/30 hover:bg-ochre-gold/5 transition-all group cursor-default"
            >
              <span className="text-ebony-black/60 font-sans text-xs uppercase tracking-[0.2em] font-bold text-center group-hover:text-terracotta transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
