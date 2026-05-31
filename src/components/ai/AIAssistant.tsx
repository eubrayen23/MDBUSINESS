import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, MessageSquare, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { callAI } from '@/lib/ai';
import toast from 'react-hot-toast';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAsk = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    try {
      await callAI('optimize_section', { section: 'Geral', content: prompt });
      toast.success('IA respondeu!');
    } catch (e) {
      toast.error('Erro.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen && (
        <Card className="w-80 h-96 mb-4 p-4 flex flex-col shadow-2xl">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 border p-2 mb-2 rounded"
            placeholder="Pergunta à IA..."
          />
          <Button onClick={handleAsk} isLoading={isGenerating}>Enviar</Button>
        </Card>
      )}
      <Button onClick={() => setIsOpen(!isOpen)} className="rounded-full h-16 w-16">
        {isOpen ? <X /> : <Sparkles />}
      </Button>
    </div>
  );
}
