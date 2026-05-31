import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Phone, Calendar, Shield, Clock } from 'lucide-react';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-black text-xl">S</span>
            </div>
            <span className="text-xl font-black tracking-tighter">SmilePro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#servicos" className="hover:text-neutral-400">Serviços</a>
            <a href="#clinica" className="hover:text-neutral-400">A Clínica</a>
            <Link to="/login">
              <Button variant="outline" size="sm">Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9]">
              ODONTOLOGIA <br />
              <span className="text-neutral-500">DE PRECISÃO.</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-lg">
              Excelência clínica com estética minimalista. A Clínica SmilePro redefine o cuidado dentário em Luanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">Agendar Consulta</Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.open('tel:934859497')}>
                <Phone size={18} className="mr-2" /> 934 859 497
              </Button>
            </div>
          </div>
          <div className="relative aspect-square bg-neutral-900 border border-white/10 flex items-center justify-center overflow-hidden">
             {/* Abstract Geometric Tooth */}
             <div className="w-64 h-64 border-2 border-white relative">
                <div className="absolute top-0 left-0 w-full h-1/2 border-b-2 border-white" />
                <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 border-x-2 border-white" />
             </div>
             <div className="absolute bottom-8 left-8">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.3em]">Precision Engineering / Oral Health</p>
             </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="servicos" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-neutral-500 mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { title: 'Estética Dental', desc: 'Facetas, branqueamento e restaurações invisíveis.' },
              { title: 'Implantologia', desc: 'Reabilitação oral avançada com tecnologia suíça.' },
              { title: 'Ortodontia', desc: 'Alinhadores invisíveis e aparelhos convencionais.' },
              { title: 'Cirurgia Oral', desc: 'Extrações complexas e cirurgias periodontais.' },
              { title: 'Endodontia', desc: 'Tratamento de canal com microscopia operatória.' },
              { title: 'Prevenção', desc: 'Check-up digital e limpeza profissional.' },
            ].map((s, i) => (
              <Card key={i} className="rounded-none border-neutral-800 hover:border-white transition-colors group h-64 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-neutral-600">0{i + 1}</span>
                  <h3 className="text-xl font-bold mt-4">{s.title}</h3>
                </div>
                <p className="text-sm text-neutral-400 group-hover:text-white transition-colors">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { label: 'Pacientes Satisfeitos', val: '5k+' },
            { label: 'Anos de Experiência', val: '12' },
            { label: 'Especialistas', val: '08' },
            { label: 'Procedimentos/Ano', val: '15k' },
          ].map((stat, i) => (
            <div key={i}>
              <p className="text-5xl font-black tracking-tighter">{stat.val}</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
             <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <span className="text-black font-black text-sm">S</span>
              </div>
              <span className="text-lg font-black tracking-tighter">SmilePro</span>
            </div>
            <p className="text-xs text-neutral-500 uppercase tracking-widest">© 2024 Clínica SmilePro. Luanda, Angola.</p>
          </div>
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Contacto</p>
              <p className="text-sm font-bold">934 859 497</p>
              <p className="text-sm text-neutral-400">suporte@smilepro.ao</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Endereço</p>
              <p className="text-sm">Rua Major Kanhangulo</p>
              <p className="text-sm text-neutral-400">Luanda, Angola</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
