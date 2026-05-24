import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowLeft, ArrowRight } from 'lucide-react';

const Team: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  const members = [
    {
      name: "Matias Domingos",
      role: "Founder",
      desc: "Técnico Electromecânico e Especialista em Machine Learning. A visão técnica por trás dos sistemas de alta performance."
    },
    {
      name: "Manuel Agostinho",
      role: "Co-Founder",
      desc: "Engenheiro Informático & Ciências da Computação. Arquitecto de soluções digitais complexas e escaláveis."
    },
    {
      name: "Josemar Gaspar",
      role: "Gestor de Marketing & Branding",
      desc: "Estratega de marcas. Responsável por elevar a percepção de valor e autoridade institucional dos nossos parceiros."
    }
  ];

  return (
    <section id="team" className="py-40 px-6 md:px-12 bg-black text-white">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-4 block">Corpo Directivo</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Liderança <br className="hidden md:block" /><span className="text-white/20">Executiva.</span></h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft size={24} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-12 gap-12 no-scrollbar hide-scrollbar cursor-grab active:cursor-grabbing"
        >
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[320px] md:min-w-[450px] p-12 border border-white/10 bg-zinc-900/50 backdrop-blur-sm flex flex-col"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-10 border border-white/10">
                 <User size={48} className="text-white/20" />
              </div>

              <div className="mb-8">
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold block mb-2">{m.role}</span>
                 <h3 className="text-4xl font-black uppercase tracking-tighter">{m.name}</h3>
              </div>

              <div className="h-px w-12 bg-brand-gold/30 mb-8" />

              <p className="text-white/40 font-medium leading-relaxed italic text-base flex-1">
                "{m.desc}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
