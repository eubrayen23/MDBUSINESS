import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const landingPages = [
  {
    id: 'lp-essencial',
    title: 'Landing Page Essencial',
    price: '17.500 Kz',
    description: 'Presença digital básica com alto padrão visual e carregamento ultra-rápido.',
    features: ['Design Moderno', 'Responsiva', 'Integração WhatsApp', 'SEO Básico']
  },
  {
    id: 'lp-comercial',
    title: 'Landing Page Comercial',
    price: '25.000 Kz',
    description: 'Design moderno focado em conversão e resultados imediatos para o seu negócio.',
    features: ['Design Moderno', 'Responsiva', 'Integração WhatsApp', 'Otimização Mobile']
  },
  {
    id: 'lp-premium',
    title: 'Landing Page Especializada',
    price: '35.000 Kz',
    description: 'Experiência visual superior com animações customizadas e storytelling estratégico.',
    features: ['Animações Customizadas', 'Storytelling Digital', 'Copywriting de Alto Impacto']
  },
  {
    id: 'lp-cinematografica',
    title: 'Landing Page Cinematográfica',
    price: '50.000 Kz',
    description: 'Rigor visual absoluto. Efeitos imersivos e experiência institucional de alto nível.',
    features: ['Efeitos Visuais Avançados', 'Smooth Scroll Pro', 'Interações Complexas']
  }
];

const websites = [
  {
    id: 'web-basico',
    title: 'Website Básico',
    price: '25.000 Kz',
    description: 'Site institucional completo para pequenas empresas e profissionais liberais.',
    features: ['Até 3 Páginas', 'Painel Admin', 'Blog Integrado']
  },
  {
    id: 'web-profissional',
    title: 'Website Profissional',
    price: '40.000 Kz',
    description: 'Estrutura robusta para empresas que buscam autoridade e performance.',
    features: ['Até 7 Páginas', 'SEO Avançado', 'Gestão de Conteúdo']
  },
  {
    id: 'web-empresarial',
    title: 'Website Empresarial',
    price: '50.000 Kz',
    description: 'Solução completa para grandes empresas com necessidades específicas.',
    features: ['Páginas Ilimitadas', 'Multi-idiomas', 'Suporte Prioritário']
  },
  {
    id: 'web-corp-premium',
    title: 'Corporativo de Alto Nível',
    price: 'Personalizado',
    description: 'Soluções de engenharia empresarial. Sistemas sob medida e arquitectura exclusiva.',
    features: ['IA Integrada', 'Sistemas Customizados', 'Segurança Robusta']
  }
];

const Services: React.FC = () => {
  const { addToCart } = useCart();
  const lpScrollRef = useRef<HTMLDivElement>(null);
  const webScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div id="services">
      <section className="py-32 px-6 md:px-12 bg-black text-white">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Landing Pages</h2>
              <div className="h-2 w-32 bg-[#D4AF37]"></div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scroll(lpScrollRef, 'left')}
                className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => scroll(lpScrollRef, 'right')}
                className="p-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

          <div
            ref={lpScrollRef}
            className="flex overflow-x-auto pb-12 gap-8 no-scrollbar cursor-grab active:cursor-grabbing hide-scrollbar"
          >
            {landingPages.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[320px] md:min-w-[450px]"
              >
                <ServiceCard {...s} onAddToCart={() => addToCart(s)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6">Sistemas & Web</h2>
              <div className="h-2 w-32 bg-black"></div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => scroll(webScrollRef, 'left')}
                className="p-4 border border-black/20 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <ArrowLeft size={24} />
              </button>
              <button
                onClick={() => scroll(webScrollRef, 'right')}
                className="p-4 border border-black/20 rounded-full hover:bg-black hover:text-white transition-all"
              >
                <ArrowRight size={24} />
              </button>
            </div>
          </motion.div>

          <div
            ref={webScrollRef}
            className="flex overflow-x-auto pb-12 gap-8 no-scrollbar cursor-grab active:cursor-grabbing hide-scrollbar"
          >
            {websites.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[320px] md:min-w-[450px]"
              >
                <ServiceCard {...s} onAddToCart={() => addToCart(s)} dark={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 md:px-12 bg-zinc-50 text-black overflow-hidden relative">
        <motion.div
          style={{ opacity: 0.03 }}
          className="absolute inset-0 text-[20vw] font-black uppercase flex items-center justify-center whitespace-nowrap pointer-events-none"
        >
          Custom Solutions
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-12 tracking-tighter uppercase leading-none">
              Projectos <br /> Personalizados
            </h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-16 text-black/60 italic">
              "Desenvolvemos soluções adaptadas às necessidades operacionais e estratégicas de cada cliente."
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/244934859497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-16 py-8 text-sm font-black uppercase tracking-[0.4em] hover:bg-zinc-800 transition-all shadow-2xl"
            >
              Solicitar Orçamento
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
