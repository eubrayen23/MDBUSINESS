import { useCVStore } from '../../../store/cvStore';
import { useState } from 'react';
export function Education() {
  const { cvData, addEducation, removeEducation } = useCVStore();
  const [isAdding, setIsAdding] = useState(false);
  const [newEdu, setNewEdu] = useState({ id: Date.now(), curso: '', instituicao: '', data_conclusao: '' });
  const handleAdd = () => { addEducation({ ...newEdu, id: Date.now() }); setIsAdding(false); };
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Educação</h3>
        <button onClick={() => setIsAdding(true)} className="text-xs bg-primary text-white px-3 py-1 rounded-full font-bold">+ Novo</button>
      </div>
      <div className="space-y-4">
        {cvData.education.map(edu => (
          <div key={edu.id} className="p-4 border rounded-xl relative">
            <button onClick={() => removeEducation(edu.id)} className="absolute top-2 right-2 text-[10px] text-red-400">Remover</button>
            <p className="font-bold">{edu.curso}</p>
            <p className="text-xs text-gray-500">{edu.instituicao} | {edu.data_conclusao}</p>
          </div>
        ))}
      </div>
      {isAdding && (
        <div className="mt-4 p-4 border-2 border-dashed rounded-xl space-y-2">
          <input placeholder="Curso" value={newEdu.curso} onChange={e => setNewEdu({ ...newEdu, curso: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <input placeholder="Instituição" value={newEdu.instituicao} onChange={e => setNewEdu({ ...newEdu, instituicao: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <input placeholder="Data" value={newEdu.data_conclusao} onChange={e => setNewEdu({ ...newEdu, data_conclusao: e.target.value })} className="w-full p-2 border rounded-lg text-sm" />
          <button onClick={handleAdd} className="bg-primary text-white px-4 py-1 rounded-lg text-xs font-bold">Adicionar</button>
        </div>
      )}
    </div>
  );
}
