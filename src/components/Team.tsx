import React from 'react';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  const members = [
    {
      name: "Matias Domingos",
      role: "Founder",
      desc: "Técnico Electromecânico e Especialista em Machine Learning. A visão técnica por trás dos sistemas de alta performance.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Manuel Agostinho",
      role: "Co-Founder",
      desc: "Engenheiro Informático & Ciências da Computação. Arquitecto de soluções digitais complexas e escaláveis.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Josemar Gaspar",
      role: "Gestor de Marketing & Branding",
      desc: "Estratega de marcas. Responsável por elevar a percepção de valor e autoridade dos nossos parceiros.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="team" className="py-40 px-6 md:px-12 bg-black text-white">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center md:text-left"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-4 block">Executive Leadership</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Mentes <br className="hidden md:block" /><span className="text-white/20">Brilhantes.</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {members.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                 <img src={m.image} alt={m.name} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                 <div className="absolute bottom-8 left-8">
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold bg-black/80 px-4 py-2 border border-brand-gold/20 backdrop-blur-md">
                      {m.role}
                    </span>
                 </div>
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{m.name}</h3>
              <p className="text-white/40 font-medium leading-relaxed italic text-sm md:text-base">
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
