import { useCVStore } from '../../store/cvStore';
import { ClassicoTemplate } from '../../templates/ClassicoTemplate';
import { ModernoTemplate } from '../../templates/ModernoTemplate';
import { AngolanoTemplate } from '../../templates/AngolanoTemplate';
export function CVPreview() {
  const { cvData } = useCVStore();
  const renderTemplate = () => {
    switch (cvData.template) {
      case 'moderno': return <ModernoTemplate data={cvData} />;
      case 'angolano': return <AngolanoTemplate data={cvData} />;
      default: return <ClassicoTemplate data={cvData} />;
    }
  };
  return <div className="bg-gray-100 p-8 shadow-inner overflow-auto h-[600px] border rounded-2xl">{renderTemplate()}</div>;
}
