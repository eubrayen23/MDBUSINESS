import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const Strategy: React.FC = () => {
  const challenges = [
    {
      problem: "Processos manuais lentos e propensos a erro.",
      solution: "Automação inteligente e fluxos de trabalho digitais integrados."
    },
    {
      problem: "Presença digital genérica e de baixo impacto.",
      solution: "Interfaces cinematográficas premium que transmitem autoridade imediata."
    },
    {
      problem: "Dificuldade em escalar operações e gerir leads.",
      solution: "Sistemas de CRM e BI customizados para decisões baseadas em dados."
    }
  ];

  return (
    <section id="strategy" className="py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-4 block">Estratégia & Resultados</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
            Desafios Complexos,<br />
            <span className="text-brand-black/20">Excelência Técnica.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4">
          {challenges.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col md:flex-row items-stretch border border-black/5 hover:border-brand-gold/30 transition-all duration-700"
            >
              <div className="flex-1 p-12 bg-zinc-50/50">
                <div className="flex items-center gap-4 mb-6">
                  <AlertCircle size={20} className="text-black/20" />
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-40">O Problema</span>
                </div>
                <p className="text-2xl md:text-3xl font-light tracking-tight italic text-black/60">{item.problem}</p>
              </div>

              <div className="hidden md:flex items-center justify-center px-8 bg-white">
                 <div className="w-px h-24 bg-black/5" />
              </div>

              <div className="flex-1 p-12 bg-black text-white relative overflow-hidden">
                <motion.div
                   className="absolute inset-0 bg-brand-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <CheckCircle2 size={20} className="text-brand-gold" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold">A Solução MD</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-black tracking-tighter uppercase">{item.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
