import { useCVStore } from '../../../store/cvStore';
import { melhorarExperiencia } from '../../../services/aiService';
import { useState } from 'react';
export function Experience() {
  const { cvData, addExperience, updateExperience, removeExperience } = useCVStore();
  const [isAdding, setIsAdding] = useState(false);
  const [newExp, setNewExp] = useState({ id: Date.now(), cargo: '', empresa: '', descricao: '' });
  const [loading, setLoading] = useState(false);
  const handleAdd = () => { addExperience({ ...newExp, id: Date.now() }); setIsAdding(false); };
  const handleImprove = async (exp) => {
    setLoading(true);
    try { const res = await melhorarExperiencia(exp); updateExperience(exp.id, { ...exp, descricao: res }); } finally { setLoading(false); }
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Experiência</h3>
        <button onClick={() => setIsAdding(true)} className="text-xs bg-primary text-white px-3 py-1 rounded-full font-bold">+ Novo</button>
      </div>
      <div className="space-y-4">
        {cvData.experience.map(exp => (
          <div key={exp.id} className="p-4 border rounded-xl relative">
            <button onClick={() => removeExperience(exp.id)} className="absolute top-2 right-2 text-[10px] text-red-400">Remover</button>
            <p className="font-bold">{exp.cargo}</p>
            <p className="text-xs text-gray-500 mb-2">{exp.empresa}</p>
            <p className="text-sm whitespace-pre-line">{exp.descricao}</p>
            <button onClick={() => handleImprove(exp)} className="mt-2 text-[10px] text-purple-600 font-bold">✨ Melhorar com IA</button>
          </div>
        ))}
      </div>
      {isAdding && (
        <div className="mt-4 p-4 border-2 border-dashed rounded-xl space-y-2">
          <input placeholder="Cargo" value={newExp.cargo} onChange={e => setNewExp({ ...newExp, cargo: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <input placeholder="Empresa" value={newExp.empresa} onChange={e => setNewExp({ ...newExp, empresa: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <textarea placeholder="Descrição" value={newExp.descricao} onChange={e => setNewExp({ ...newExp, descricao: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <button onClick={handleAdd} className="bg-primary text-white px-4 py-1 rounded-lg text-xs font-bold">Adicionar</button>
        </div>
      )}
    </div>
  );
}
