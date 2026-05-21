import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { useCart } from '../context/CartContext';

const services = [
  {
    id: 'lp-essencial',
    title: 'Landing Page Essencial',
    price: '17.500 Kz',
    description: 'Presença digital básica com alto padrão visual e carregamento ultra-rápido.',
    features: ['Design Moderno', 'Responsiva', 'Integração WhatsApp', 'SEO Básico'],
    image: 'https://images.unsplash.com/photo-1557264305-7e2764da873b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lp-comercial',
    title: 'Landing Page Comercial',
    price: '25.000 Kz',
    description: 'Design moderno focado em conversão e resultados imediatos para o seu negócio.',
    features: ['Design Moderno', 'Responsiva', 'Integração WhatsApp', 'Otimização Mobile'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'lp-premium',
    title: 'Landing Page Premium',
    price: '35.000 Kz',
    description: 'Experiência visual superior com animações customizadas e storytelling estratégico.',
    features: ['Animações Customizadas', 'Storytelling Digital', 'Copywriting Premium', 'SEO Avançado'],
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lp-cinematografica',
    title: 'Landing Page Cinematográfica',
    price: '50.000 Kz',
    description: 'A elite do design digital. Efeitos visuais imersivos e experiência de luxo.',
    features: ['Efeitos Visuais Elite', 'Smooth Scroll Pro', 'Interações Avançadas', 'Performance Max'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'website-basico',
    title: 'Website Básico',
    price: '25.000 Kz',
    description: 'O ponto de partida ideal para a sua marca na web.',
    features: ['Até 3 Páginas', 'Formulário Contacto', 'Link Bio', 'Mobile Friendly'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'website-prof',
    title: 'Website Profissional',
    price: '40.000 Kz',
    description: 'Presença digital completa para profissionais que buscam autoridade no mercado.',
    features: ['Multi-páginas', 'Gestão de Conteúdo', 'Domínio Personalizado', 'Certificado SSL'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'website-emp',
    title: 'Website Empresarial',
    price: '50.000 Kz',
    description: 'Solução corporativa robusta para empresas em expansão digital.',
    features: ['Integração CRM', 'Painel Administrativo', 'Formulários Inteligentes', 'Suporte Prioritário'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'loja-simples',
    title: 'Loja Online Simples',
    price: '45.000 Kz',
    description: 'Comece a vender online agora com um catálogo digital intuitivo e funcional.',
    features: ['Catálogo de Produtos', 'Cesto de Compras', 'Gestão de Inventário', 'Integração de Pagamento'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'loja-premium',
    title: 'Loja Online Premium',
    price: '75.000 Kz',
    description: 'Ecossistema de e-commerce completo com alta performance e design elite.',
    features: ['Filtros Avançados', 'Gestão de Clientes', 'Relatórios Vendas', 'Multi-pagamento'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section id="services" className="py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.4em] uppercase text-brand-gold block mb-4"
            >
              Nossa Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-brand-black tracking-tight"
            >
              Soluções Digitais <br /> de Próxima Geração.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-brand-black/40 text-sm font-medium max-w-xs text-right hidden md:block"
          >
            Oferecemos uma gama completa de serviços para elevar o padrão tecnológico da sua empresa.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onAddToCart={() => addToCart(service)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-brand-black rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-6 relative z-10">
            Precisa de um Projeto Personalizado?
          </h3>
          <p className="text-brand-white/60 mb-10 max-w-2xl mx-auto relative z-10">
            Desenvolvemos soluções adaptadas às necessidades operacionais e estratégicas de cada cliente.
            Sistemas empresariais, dashboards, CRM e IA personalizada.
          </p>
          <button className="px-10 py-5 bg-brand-gold text-brand-black rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-brand-white transition-all duration-300 relative z-10">
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
