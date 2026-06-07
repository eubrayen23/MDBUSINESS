import { useCVStore } from '../../store/cvStore';
export function CVTemplates() {
  const { cvData, setCVData } = useCVStore();
  const templates = [
    { id: 'classico', name: 'Clássico' }, { id: 'moderno', name: 'Moderno' }, { id: 'angolano', name: 'Executivo Angola' }
  ];
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4">Escolher Template</h3>
      <div className="grid grid-cols-3 gap-4">
        {templates.map(t => (
          <button key={t.id} onClick={() => setCVData({ template: t.id })} className={`p-4 border-2 rounded-xl font-bold ${cvData.template === t.id ? 'border-primary bg-primary/5 text-primary' : 'border-gray-100'}`}>{t.name}</button>
        ))}
      </div>
    </div>
  );
}
