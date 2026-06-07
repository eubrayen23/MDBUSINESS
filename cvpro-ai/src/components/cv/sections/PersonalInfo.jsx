import { useCVStore } from '../../../store/cvStore';
export function PersonalInfo() {
  const { cvData, updatePersonalInfo } = useCVStore();
  const info = cvData.personalInfo;
  const handleChange = (e) => updatePersonalInfo({ [e.target.name]: e.target.value });
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-4 border-b pb-2">Informação Pessoal</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['nome', 'email', 'telefone', 'bi_numero', 'nif', 'provincia', 'nacionalidade'].map(f => (
          <div key={f}>
            <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">{f.replace('_', ' ')}</label>
            <input name={f} value={info[f] || ''} onChange={handleChange} className="w-full p-2 border rounded-lg text-sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
