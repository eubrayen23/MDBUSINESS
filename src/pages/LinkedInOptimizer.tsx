import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, Linkedin, ArrowRight } from 'lucide-react';
import { callAI } from '@/lib/ai';
import toast from 'react-hot-toast';

export default function LinkedInOptimizer() {
  const [profileText, setProfileText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!profileText) return toast.error('Copia e cola o teu perfil.');
    setIsAnalyzing(true);
    try {
      await callAI('linkedin', { profileData: profileText });
      toast.success('Análise concluída!');
    } catch (e) {
      toast.error('Erro ao analisar.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-black mb-8">LinkedIn Optimizer</h1>
      <Card className="p-8">
        <textarea
          value={profileText}
          onChange={(e) => setProfileText(e.target.value)}
          className="w-full h-64 p-4 rounded-xl border border-ink-100 mb-6"
          placeholder="Cola aqui o teu perfil..."
        />
        <Button onClick={handleAnalyze} isLoading={isAnalyzing} className="w-full">
          <Sparkles size={20} className="mr-2" />Analisar com IA
        </Button>
      </Card>
    </DashboardLayout>
  );
}
