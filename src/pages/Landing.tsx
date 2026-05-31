import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layout,
  Target,
  Linkedin,
  BookMarked
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-7xl font-black text-ink-950 leading-[1.1] mb-8">
              O teu currículo profissional,<br /> feito com <span className="text-brand-500">inteligência</span>.
            </h1>
            <p className="text-xl text-ink-600 max-w-3xl mx-auto mb-12">
              Cria CVs prontos para o mercado angolano em minutos — com IA.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/registar"><Button size="lg">Criar CV agora</Button></Link>
              <Link to="/entrar"><Button variant="outline" size="lg">Entrar</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
