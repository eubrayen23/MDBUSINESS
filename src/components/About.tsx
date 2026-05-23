import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { value: "30+", label: "Projectos Concluídos", sub: "Experiência Comprovada" },
    { value: "100%", label: "Entrega de Valor", sub: "Rigor & Excelência" },
    { value: "Angola", label: "Cobertura Nacional", sub: "Impacto em todo o país" }
  ];

  return (
    <section id="about" className="py-40 px-6 md:px-12 bg-zinc-50 overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-gold mb-4 block">Sobre a MD Business</span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-12">
              Arquitectamos o <br /> <span className="text-black/20">Futuro Digital.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-black/60 italic mb-12">
              Com um portfólio de 30 projectos concluídos com sucesso, colaboramos com grandes corporações e pequenas empresas ambiciosas para transformar visões complexas em sistemas digitais de alta performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-black/5">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                   <span className="text-5xl font-black tracking-tighter text-black mb-2">{s.value}</span>
                   <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1">{s.label}</span>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-30">{s.sub}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative aspect-video bg-black overflow-hidden group"
          >
             <img
               src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
               alt="Digital Strategy"
               className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
             />
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <p className="text-white text-3xl font-black uppercase tracking-tighter leading-none mb-4">Parcerias de Longo Prazo</p>
                  <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.4em]">Corporativo | PME | Marcas Pessoais</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
