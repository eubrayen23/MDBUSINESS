import { Link } from 'react-router-dom';
export function Landing() {
  return (
    <div className="min-h-screen">
      <header className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-black text-primary italic">CVPro AI</div>
        <div className="space-x-4"><Link to="/login" className="font-bold">Entrar</Link><Link to="/register" className="bg-primary text-white px-6 py-2 rounded-full font-bold">Começar</Link></div>
      </header>
      <main className="max-w-7xl mx-auto px-8 pt-20 text-center">
        <h1 className="text-7xl font-black text-gray-900 leading-tight">O seu próximo emprego <br/><span className="text-primary italic underline">começa aqui.</span></h1>
        <p className="text-xl text-gray-500 mt-8 max-w-2xl mx-auto">Crie currículos profissionais com IA em minutos. Otimizado para o mercado angolano.</p>
        <div className="mt-12"><Link to="/register" className="bg-primary text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-xl inline-block hover:-translate-y-1 transition-all">Criar o meu CV Grátis</Link></div>
      </main>
    </div>
  );
}
