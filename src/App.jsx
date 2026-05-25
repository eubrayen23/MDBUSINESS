import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useInView, animate } from 'framer-motion';

// --- Icons (Inline SVGs to avoid external dependencies) ---

const IconChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);
const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);
const IconInstagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const IconFacebook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
const IconArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);
const IconQuote = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
);
const IconSend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
);
const IconMessageCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

// --- Types & Data ---

const SERVICES = [
  {
    id: 1,
    title: "Implantologia Avançada",
    category: "Reabilitação Oral",
    description: "Reabilitação oral com sistemas de implantes de alta precisão e materiais biocompatíveis de última geração.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Ortodontia Invisível",
    category: "Estética Funcional",
    description: "Correção do alinhamento dentário através de alinhadores transparentes, combinando estética e conforto.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Estética Dentária",
    category: "Smile Design",
    description: "Facetas de porcelana e branqueamento clínico para um sorriso harmonioso e natural.",
    image: "https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Cirurgia Oral",
    category: "Intervenção Técnica",
    description: "Procedimentos cirúrgicos especializados com abordagem minimamente invasiva e recuperação acelerada.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  }
];

const TEAM = [
  {
    id: 1,
    name: "Dr. Ricardo Almeida",
    role: "Director Clínico | Implantologia",
    bio: "Especialista em reabilitação oral complexa com mais de 15 anos de experiência internacional.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Dra. Ana Paula Santos",
    role: "Ortodontia Especializada",
    bio: "Mestre em Ortodontia, focada em soluções estéticas e funcionais para todas as idades.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Dr. João Pereira",
    role: "Estética & Reabilitação",
    bio: "Dedicado à perfeição estética e harmonia facial através de tecnologias digitais avançadas.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "A excelência no atendimento e o rigor técnico são incomparáveis. O Dental Center Talatona devolveu-me a confiança para sorrir.",
    author: "Maria Antónia Silva",
    role: "Empresária"
  },
  {
    id: 2,
    text: "Instalações de vanguarda e uma equipa altamente profissional. Senti-me seguro durante todo o processo cirúrgico.",
    author: "Carlos Manuel",
    role: "Engenheiro"
  },
  {
    id: 3,
    text: "O acompanhamento pós-operatório foi exemplar. Nota-se um compromisso genuíno com a saúde do paciente.",
    author: "Isabel Henriques",
    role: "Advogada"
  }
];

const METRICS = [
  { label: "Pacientes Satisfeitos", value: 12000, suffix: "+" },
  { label: "Anos de Experiência", value: 15, suffix: "" },
  { label: "Casos Complexos", value: 450, suffix: "" },
  { label: "Especialistas", value: 12, suffix: "" }
];

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const handleHover = (e) => {
      const target = e.target;
      setIsHovering(target.closest('a, button, input, select, textarea'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-luxury-gold rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'rgba(212, 175, 55, 0)'
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-luxury-gold rounded-full pointer-events-none z-[9999]"
        animate={{
          x: position.x - 3,
          y: position.y - 3
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200, mass: 0.1 }}
      />
    </>
  );
};

const Counter = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-luxury-black flex flex-col items-center justify-center p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="w-24 h-24 border-2 border-luxury-gold rounded-full flex items-center justify-center">
          <span className="text-luxury-gold font-serif text-3xl font-bold">DCT</span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-luxury-white font-serif text-2xl md:text-3xl tracking-widest text-center mb-12 uppercase"
      >
        Dental Center Talatona
      </motion.h1>

      <div className="w-full max-w-xs bg-white/10 h-[1px] relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute inset-y-0 left-0 bg-luxury-gold"
        />
      </div>

      <motion.span
        className="text-luxury-gold/50 font-sans text-xs mt-4 tracking-[0.2em]"
      >
        {progress}% SISTEMA A CARREGAR
      </motion.span>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: progress > 50 ? 1 : 0 }}
        onClick={onComplete}
        className="mt-12 text-luxury-white/40 hover:text-luxury-white text-xs tracking-widest uppercase transition-colors"
      >
        Saltar Introdução
      </motion.button>
    </motion.div>
  );
};

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Liderança Executiva", href: "#lideranca" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-luxury-gold origin-left z-[60]"
        style={{ scaleX }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-white/80 backdrop-blur-md py-4 border-b border-luxury-black/5' : 'bg-transparent py-4 md:py-8'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-4">
            <div className={`w-8 h-8 md:w-10 md:h-10 border-2 rounded-full flex items-center justify-center transition-colors duration-500 shrink-0 ${isScrolled ? 'border-luxury-black' : 'border-luxury-white'}`}>
              <span className={`font-serif text-[10px] md:text-sm font-bold ${isScrolled ? 'text-luxury-black' : 'text-luxury-white'}`}>DCT</span>
            </div>
            <span className={`font-serif text-sm md:text-xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-luxury-black' : 'text-luxury-white'}`}>Dental Center Talatona</span>
          </div>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-widest transition-colors duration-500 relative group ${isScrolled ? 'text-luxury-black/60 hover:text-luxury-black' : 'text-luxury-white/60 hover:text-luxury-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <button
              onClick={onOpenBooking}
              className={`px-6 py-3 text-xs uppercase tracking-widest transition-all duration-500 border ${isScrolled ? 'border-luxury-black text-luxury-black hover:bg-luxury-black hover:text-luxury-white' : 'border-luxury-white text-luxury-white hover:bg-luxury-white hover:text-luxury-black'}`}>
              Iniciar Consulta
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <div className={isScrolled ? 'text-luxury-black' : 'text-luxury-white'}>
              <IconMenu />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-luxury-black p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} aria-label="Fechar menu">
                <div className="text-luxury-white w-8 h-8">
                  <IconX />
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-luxury-white font-serif text-4xl"
                >
                  {link.name}
                </motion.a>
              ))}
              <button
                onClick={() => { onOpenBooking(); setMobileMenuOpen(false); }}
                className="mt-8 px-6 py-4 border border-luxury-gold text-luxury-gold uppercase tracking-widest text-sm text-center"
              >
                Iniciar Consulta
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = ({ onOpenBooking }) => {
  const titleWords = "Excelência em Medicina Dentária no Coração de Talatona".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-luxury-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-40"
          alt="Clínica Moderna"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block px-4"
        >
          <span className="text-luxury-gold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.4em] border-b border-luxury-gold/30 pb-2">
            Padrão Internacional • Tecnologia de Vanguarda
          </span>
        </motion.div>

        <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[5rem] font-serif text-luxury-white leading-tight mb-8 max-w-5xl mx-auto px-4">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-luxury-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Combinamos perícia técnica, tecnologia avançada e um ambiente de luxo para transformar o seu sorriso e bem-estar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center"
        >
          <button
            onClick={onOpenBooking}
            className="px-10 py-5 bg-luxury-gold text-luxury-black text-xs uppercase tracking-widest font-bold hover:bg-luxury-white transition-all duration-500 flex items-center justify-center gap-3 group"
          >
            Agendar Reunião
            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <IconArrowRight />
            </div>
          </button>
          <a href="#servicos" className="px-10 py-5 border border-luxury-white/30 text-luxury-white text-xs uppercase tracking-widest font-bold hover:bg-luxury-white hover:text-luxury-black transition-all duration-500 text-center">
            Explorar Soluções
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-luxury-white/30 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll para explorar</span>
        <div className="w-[1px] h-12 bg-luxury-gold/30 relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};

const ServicesSection = ({ onOpenBooking }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-32 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Sistemas Especializados
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] font-serif text-luxury-black"
            >
              Soluções Clínicas de Alta Complexidade
            </motion.h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              aria-label="Deslizar para a esquerda"
              className="w-14 h-14 border border-luxury-black/10 rounded-full flex items-center justify-center hover:bg-luxury-black hover:text-luxury-white transition-all duration-500"
            >
              <IconArrowLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Deslizar para a direita"
              className="w-14 h-14 border border-luxury-black/10 rounded-full flex items-center justify-center hover:bg-luxury-black hover:text-luxury-white transition-all duration-500"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[450px] group snap-start"
            >
              <div className="relative h-[500px] overflow-hidden mb-8">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-luxury-white/80 text-[10px] uppercase tracking-widest mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-luxury-white text-2xl font-serif mb-4">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-luxury-black/60 font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold group"
              >
                Explorar Detalhes
                <div className="w-4 h-4 group-hover:rotate-90 transition-transform duration-500">
                  <IconPlus />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 bg-luxury-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-6 block">
              Identidade Institucional
            </span>
            <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[3rem] font-serif text-luxury-black mb-10 leading-tight">
              Compromisso com a Perfeição Clínica
            </h2>
            <p className="text-luxury-black/70 text-lg font-light leading-relaxed mb-8">
              O Dental Center Talatona nasceu da visão de elevar os padrões da medicina dentária em Angola. Localizado no centro nevrálgico de Talatona, oferecemos uma experiência clínica onde o rigor científico se funde com o conforto absoluto.
            </p>
            <p className="text-luxury-black/70 text-lg font-light leading-relaxed mb-12">
              A nossa metodologia proprietária foca-se na personalização total de cada tratamento, utilizando as mais recentes inovações em odontologia digital para garantir resultados previsíveis e de excelência.
            </p>

            <a href="#contacto" className="px-10 py-5 border border-luxury-black text-luxury-black text-xs uppercase tracking-widest font-bold hover:bg-luxury-black hover:text-luxury-white transition-all duration-500 inline-block">
              Conhecer Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[600px] lg:h-[800px]"
          >
            <img
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1000"
              className="w-full h-full object-cover"
              alt="Clínica Talatona"
              loading="lazy"
            />
            <div className="absolute -bottom-10 -left-10 bg-luxury-black text-luxury-white p-12 max-w-xs hidden md:block">
              <div className="text-luxury-gold w-10 h-10 mb-6">
                <IconQuote />
              </div>
              <p className="font-serif text-xl italic mb-6">
                "Não tratamos apenas dentes, cuidamos de pessoas e transformamos vidas através do sorriso."
              </p>
              <span className="text-xs uppercase tracking-widest text-luxury-gold">
                Ricardo Almeida, Founder
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ResultsSection = () => {
  return (
    <section className="py-32 bg-luxury-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-gray/30 -z-10 translate-x-1/2 skew-x-12" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-6 block"
            >
              Resultados de Excelência
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-black mb-8 leading-tight">
              Impacto Clínico em Números Reais
            </h2>
            <p className="text-luxury-black/40 font-light leading-relaxed mb-12">
              A nossa trajetória é definida pelo rigor e pelo sucesso de milhares de intervenções especializadas.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-luxury-black/5 border border-luxury-black/5">
            {METRICS.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-luxury-white p-12 md:p-16 hover:bg-luxury-gray transition-colors duration-500 group"
              >
                <div className="text-6xl md:text-7xl font-serif text-luxury-black mb-6 group-hover:text-luxury-gold transition-colors duration-500">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-luxury-black/40 group-hover:text-luxury-black transition-colors duration-500">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="lideranca" className="py-32 bg-luxury-black text-luxury-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-4 block"
            >
              Liderança Executiva
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-serif leading-none"
            >
              Mestria Técnica <br /><span className="text-luxury-gold">& Rigor Clínico</span>
            </motion.h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              aria-label="Deslizar para a esquerda"
              className="w-14 h-14 border border-luxury-white/10 rounded-full flex items-center justify-center hover:bg-luxury-white hover:text-luxury-black transition-all duration-500"
            >
              <IconArrowLeft />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Deslizar para a direita"
              className="w-14 h-14 border border-luxury-white/10 rounded-full flex items-center justify-center hover:bg-luxury-white hover:text-luxury-black transition-all duration-500"
            >
              <IconArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TEAM.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] group snap-start"
            >
              <div className="relative h-[650px] overflow-hidden mb-8">
                <div className="absolute inset-0 bg-luxury-gold/5 -z-10 group-hover:scale-110 transition-transform duration-1000" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:translate-y-2"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-luxury-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border border-luxury-white/30 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300">
                      <IconLinkedin />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-luxury-white text-2xl font-serif mb-1">
                {member.name}
              </h3>
              <span className="text-luxury-gold text-xs uppercase tracking-widest mb-4 block">
                {member.role}
              </span>
              <p className="text-luxury-white/50 font-light leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-luxury-gray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-luxury-black/[0.02] pointer-events-none select-none uppercase">
        Confiança
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-12 block text-center"
          >
            Testemunhos Institucionais
          </motion.span>

          <div className="space-y-24">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 text-center md:text-left">
                   <div className="flex gap-1 mb-8 justify-center md:justify-start">
                    {[...Array(5)].map((_, idx) => (
                      <div key={idx} className="w-4 h-4 text-luxury-gold fill-luxury-gold">
                        <IconStar />
                      </div>
                    ))}
                  </div>
                  <p className="text-luxury-black font-serif text-2xl md:text-3xl italic mb-8 leading-relaxed">
                    "{t.text}"
                  </p>
                  <div>
                    <span className="block font-bold text-luxury-black uppercase tracking-[0.3em] text-xs mb-2">{t.author}</span>
                    <span className="text-[10px] text-luxury-black/40 uppercase tracking-[0.2em]">{t.role}</span>
                  </div>
                </div>
                <div className="w-24 h-px bg-luxury-gold/30 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingSystem = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    servico: "",
    especialista: "",
    nome: "",
    contacto: "",
    data: ""
  });

  const whatsappNumber = "244934859497";

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleFinalize = () => {
    const text = `*SOLICITAÇÃO DE MARCAÇÃO - DCT*%0A%0A*Serviço:* ${selection.servico}%0A*Especialista:* ${selection.especialista}%0A*Paciente:* ${selection.nome}%0A*Contacto:* ${selection.contacto}%0A*Previsão:* ${selection.data}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-luxury-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-4xl bg-luxury-white overflow-hidden flex flex-col md:flex-row min-h-[600px] shadow-2xl"
          >
            {/* Sidebar info */}
            <div className="md:w-1/3 bg-luxury-black p-8 text-luxury-white flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 border border-luxury-gold rounded-full flex items-center justify-center mb-8">
                  <span className="text-luxury-gold font-serif text-xs font-bold">DCT</span>
                </div>
                <h3 className="text-2xl font-serif mb-4">Marcação de Consulta</h3>
                <p className="text-luxury-white/40 text-sm font-light leading-relaxed">
                  Siga os passos para garantir o seu atendimento com os nossos especialistas de elite.
                </p>
              </div>

              <div className="space-y-4">
                <div className={`flex items-center gap-4 transition-opacity ${step >= 1 ? 'opacity-100' : 'opacity-20'}`}>
                  <span className="w-6 h-6 border border-luxury-gold rounded-full flex items-center justify-center text-[10px] text-luxury-gold">01</span>
                  <span className="text-[10px] uppercase tracking-widest">Especialidade</span>
                </div>
                <div className={`flex items-center gap-4 transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-20'}`}>
                  <span className="w-6 h-6 border border-luxury-gold rounded-full flex items-center justify-center text-[10px] text-luxury-gold">02</span>
                  <span className="text-[10px] uppercase tracking-widest">Especialista</span>
                </div>
                <div className={`flex items-center gap-4 transition-opacity ${step >= 3 ? 'opacity-100' : 'opacity-20'}`}>
                  <span className="w-6 h-6 border border-luxury-gold rounded-full flex items-center justify-center text-[10px] text-luxury-gold">03</span>
                  <span className="text-[10px] uppercase tracking-widest">Finalização</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 md:p-12 relative flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 text-luxury-black/20 hover:text-luxury-black transition-colors"
              >
                <IconX />
              </button>

              <div className="flex-1">
                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-luxury-gold text-[10px] uppercase tracking-widest mb-2 block">Passo 01</span>
                    <h4 className="text-3xl font-serif text-luxury-black mb-8">Seleccione a Especialidade</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {SERVICES.map(s => (
                        <button
                          key={s.id}
                          onClick={() => { setSelection({...selection, servico: s.title}); nextStep(); }}
                          className={`p-6 text-left border transition-all duration-500 group ${selection.servico === s.title ? 'border-luxury-gold bg-luxury-gold/5' : 'border-luxury-black/5 hover:border-luxury-gold/30'}`}
                        >
                          <span className="text-[10px] uppercase tracking-widest text-luxury-gold mb-2 block">{s.category}</span>
                          <span className="text-luxury-black font-serif text-lg group-hover:text-luxury-gold transition-colors">{s.title}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-luxury-gold text-[10px] uppercase tracking-widest mb-2 block">Passo 02</span>
                    <h4 className="text-3xl font-serif text-luxury-black mb-8">Escolha o Seu Especialista</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {TEAM.map(member => (
                        <button
                          key={member.id}
                          onClick={() => { setSelection({...selection, especialista: member.name}); nextStep(); }}
                          className={`flex items-center gap-6 p-4 border transition-all duration-500 text-left ${selection.especialista === member.name ? 'border-luxury-gold bg-luxury-gold/5' : 'border-luxury-black/5 hover:border-luxury-gold/30'}`}
                        >
                          <img src={member.image} className="w-16 h-16 object-cover rounded-full" alt={member.name} />
                          <div>
                            <span className="block text-luxury-black font-serif text-lg">{member.name}</span>
                            <span className="text-[10px] uppercase tracking-widest text-luxury-black/40">{member.role}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                    <button onClick={prevStep} className="mt-8 text-luxury-black/40 hover:text-luxury-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <div className="w-3 h-3"><IconArrowLeft /></div> Voltar
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <span className="text-luxury-gold text-[10px] uppercase tracking-widest mb-2 block">Passo 03</span>
                    <h4 className="text-3xl font-serif text-luxury-black mb-8">Dados de Contacto</h4>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-luxury-black/40">Nome Completo</label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-luxury-black/10 py-3 outline-none focus:border-luxury-gold transition-colors"
                          placeholder="Ex: Manuel Agostinho"
                          onChange={(e) => setSelection({...selection, nome: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-luxury-black/40">Telemóvel / WhatsApp</label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-luxury-black/10 py-3 outline-none focus:border-luxury-gold transition-colors"
                          placeholder="+244 ..."
                          onChange={(e) => setSelection({...selection, contacto: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-luxury-black/40">Previsão de Data (Opcional)</label>
                        <input
                          type="date"
                          className="w-full bg-transparent border-b border-luxury-black/10 py-3 outline-none focus:border-luxury-gold transition-colors"
                          onChange={(e) => setSelection({...selection, data: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="mt-12 flex gap-4">
                      <button
                        onClick={handleFinalize}
                        disabled={!selection.nome || !selection.contacto}
                        className="flex-1 py-5 bg-luxury-black text-luxury-white text-xs uppercase tracking-widest font-bold hover:bg-luxury-gold transition-all duration-500 disabled:opacity-30"
                      >
                Solicitar Proposta de Consulta
                      </button>
                    </div>
                    <button onClick={prevStep} className="mt-8 text-luxury-black/40 hover:text-luxury-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                      <div className="w-3 h-3"><IconArrowLeft /></div> Voltar
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ContactSection = ({ onOpenBooking }) => {
  return (
    <section id="contacto" className="py-32 bg-luxury-black text-luxury-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-luxury-gold text-xs uppercase tracking-[0.4em] mb-6 block">
              Estabelecer Contacto
            </span>
            <h2 className="text-[1.5rem] md:text-[2.25rem] lg:text-[4rem] font-serif mb-12 leading-none">
              A Excelência Está a Um Passo de Si
            </h2>

            <p className="text-luxury-white/40 text-lg font-light mb-12 max-w-lg">
              Utilize o nosso sistema de agendamento prioritário ou visite as nossas instalações no coração de Talatona.
            </p>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold block border-b border-luxury-gold/20 pb-2">Localização</span>
                <p className="text-luxury-white/70 text-sm font-light">Edifício Premium, Piso 2<br />Rua do Talatona, Luanda</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest text-luxury-gold block border-b border-luxury-gold/20 pb-2">Directo</span>
                <p className="text-luxury-white/70 text-sm font-light">+244 934 859 497<br />geral@dentalcenter.ao</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-luxury-white/5 border border-white/10 flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-2 border-dashed border-luxury-gold/10 rounded-full scale-150"
               />
               <h3 className="text-4xl font-serif mb-8 relative z-10">Agendamento Digital<br /><span className="text-luxury-gold">Prioritário</span></h3>
               <p className="text-luxury-white/40 text-sm mb-12 relative z-10 max-w-xs">
                 Aceda ao nosso ecossistema de marcação inteligente para um atendimento personalizado.
               </p>
               <button
                 onClick={onOpenBooking}
                 className="px-12 py-6 bg-luxury-gold text-luxury-black text-xs uppercase tracking-widest font-bold hover:bg-luxury-white transition-all duration-500 relative z-10 group-hover:scale-105"
               >
                 Iniciar Marcação Agora
               </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border-2 border-luxury-white rounded-full flex items-center justify-center">
                <span className="text-luxury-white font-serif text-lg font-bold">DCT</span>
              </div>
              <span className="font-serif text-2xl text-luxury-white">Dental Center Talatona</span>
            </div>
            <p className="text-luxury-white/40 font-light max-w-sm leading-relaxed mb-8">
              Elevando o padrão da medicina dentária através da excelência técnica e um compromisso inabalável com a estética e saúde oral.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-luxury-white/40 hover:text-luxury-gold transition-colors"><IconInstagram /></a>
              <a href="#" className="text-luxury-white/40 hover:text-luxury-gold transition-colors"><IconLinkedin /></a>
              <a href="#" className="text-luxury-white/40 hover:text-luxury-gold transition-colors"><IconFacebook /></a>
            </div>
          </div>

          <div>
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] mb-8 block">Navegação</span>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Sistemas Especializados</a></li>
              <li><a href="#sobre" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Identidade</a></li>
              <li><a href="#lideranca" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Liderança Executiva</a></li>
            </ul>
          </div>

          <div>
            <span className="text-luxury-gold text-[10px] uppercase tracking-[0.3em] mb-8 block">Legal & Suporte</span>
            <ul className="space-y-4">
              <li><a href="#" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Termos de Utilização</a></li>
              <li><a href="#" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Padrão de Governança</a></li>
              <li><a href="#contacto" className="text-luxury-white/60 hover:text-luxury-white text-xs uppercase tracking-widest transition-colors">Suporte ao Paciente</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-[10px] text-luxury-white/20 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Dental Center Talatona. Todos os direitos reservados.
          </span>
          <span className="text-[10px] text-luxury-white/20 uppercase tracking-[0.3em]">
            Desenvolvido por MD Business AO
          </span>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  return (
    <div className="relative min-h-screen bg-luxury-white selection:bg-luxury-gold selection:text-luxury-black">
      <CustomCursor />

      <AnimatePresence>
        {loading && <SplashScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar onOpenBooking={openBooking} />
          <Hero onOpenBooking={openBooking} />
          <ServicesSection onOpenBooking={openBooking} />
          <AboutSection />
          <ResultsSection />
          <TeamSection />
          <TestimonialsSection />
          <ContactSection onOpenBooking={openBooking} />
          <Footer />

          <BookingSystem isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </motion.div>
      )}
    </div>
  );
}
