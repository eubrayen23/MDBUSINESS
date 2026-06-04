import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';
import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import market1 from '../assets/market1.jpg';
import market_sign from '../assets/market_sign.jpg';
import curio_shop from '../assets/curio_shop.jpg';
import mask_ritual from '../assets/mask_ritual.jpg';

const THUMBNAILS = [
  art1, art2, art3,
  market1, market_sign,
  curio_shop, mask_ritual
];

interface Particle {
  id: number;
  x: number;
  y: number;
  rotation: number;
  src: string;
}

export default function InteractiveArtPartner() {
  const { t } = useTranslation();
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastSpawnTime = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawnTime.current < 80) return;

    lastSpawnTime.current = now;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticle: Particle = {
      id: now,
      x,
      y,
      rotation: Math.random() * 20 - 10,
      src: THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)]
    };

    setParticles(prev => [...prev, newParticle]);

    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <section className="px-6 py-24">
      <div
        onMouseMove={handleMouseMove}
        className="max-w-7xl mx-auto py-32 md:py-48 bg-white rounded-[40px] shadow-float relative overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair"
      >
        {/* Particle Trail */}
        {particles.map(p => (
          <img
            key={p.id}
            src={p.src}
            className="absolute pointer-events-none w-24 md:w-32 rounded-lg shadow-float animate-particle"
            style={{
              left: p.x,
              top: p.y,
              transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
              zIndex: 10
            }}
          />
        ))}

        <div className="relative z-20 px-6">
          <h2 className="font-mondwest text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-studio-accent mb-12">
            {t('studio.partner_heading')}
          </h2>

          <a
            href="https://wa.me/244934859497"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio-primary flex items-center gap-3 py-4 pl-4 pr-8 mx-auto w-fit"
          >
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
              className="w-10 h-10 rounded-full object-cover"
              alt="Viktor"
            />
            <span>{t('studio.start_chat_with')}</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes particle {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(var(--rotation)); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) rotate(var(--rotation)); }
        }
        .animate-particle {
          animation: particle 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
