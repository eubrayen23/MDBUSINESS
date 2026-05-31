import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Save,
  Download,
  Sparkles,
  Settings,
  Eye,
  ArrowLeft,
  Plus,
  Target
} from 'lucide-react';
import { useCVStore } from '@/store/cvStore';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { PersonalInfo } from './PersonalInfo';
import { AIAssistant } from '@/components/ai/AIAssistant';

// Templates
import { TemplateModern } from '../CVTemplates/TemplateModern';
import { TemplateAngolano } from '../CVTemplates/TemplateAngolano';
import { TemplateProfessional } from '../CVTemplates/TemplateProfessional';
import { TemplateCreative } from '../CVTemplates/TemplateCreative';
import { TemplateMinimal } from '../CVTemplates/TemplateMinimal';
import { TemplateExecutive } from '../CVTemplates/TemplateExecutive';

export default function CVEditor() {
  const { id } = useParams<{ id: string }>();
  const { currentCV, loadCV, saveCV, updateCVContent, isLoading } = useCVStore();
  const [activeTab, setActiveTab] = useState<'content' | 'design' | 'optimize'>('content');
  const [zoom, setZoom] = useState(100);

  useEffect(() => {
    if (id) loadCV(id);
  }, [id, loadCV]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentCV) saveCV();
    }, 30000);
    return () => clearInterval(timer);
  }, [currentCV, saveCV]);

  if (isLoading && !currentCV) return <div className="p-20 text-center">A carregar...</div>;
  if (!currentCV) return <div className="p-20 text-center">Currículo não encontrado.</div>;

  const renderTemplate = () => {
    const props = { data: currentCV.content };
    switch (currentCV.template_id) {
      case 'modern': return <TemplateModern {...props} />;
      case 'angolano': return <TemplateAngolano {...props} />;
      case 'professional': return <TemplateProfessional {...props} />;
      case 'creative': return <TemplateCreative {...props} />;
      case 'minimal': return <TemplateMinimal {...props} />;
      case 'executive': return <TemplateExecutive {...props} />;
      default: return <TemplateModern {...props} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-ink-50 overflow-hidden">
      <header className="h-20 bg-white border-b border-ink-100 flex items-center justify-between px-6 z-30 shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="p-2 hover:bg-ink-50 rounded-xl transition-colors"><ArrowLeft size={20} /></Link>
          <h1 className="text-lg font-black">{currentCV.title}</h1>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" size="sm" onClick={() => saveCV()}><Save size={18} className="mr-2" />Guardar</Button>
           <Button size="sm"><Download size={18} className="mr-2" />Exportar</Button>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
        <aside className="w-[450px] bg-white border-r border-ink-100 overflow-y-auto p-8">
           <PersonalInfo
             data={currentCV.content.personalInfo}
             onChange={(info) => updateCVContent({ personalInfo: { ...currentCV.content.personalInfo, ...info } })}
           />
        </aside>
        <main className="flex-1 bg-ink-100 overflow-y-auto flex justify-center p-12">
           <div className="bg-white shadow-2xl origin-top" style={{ width: '210mm', height: '297mm', transform: `scale(${zoom / 100})` }}>
             {renderTemplate()}
           </div>
        </main>
      </div>
      <AIAssistant />
    </div>
  );
}
