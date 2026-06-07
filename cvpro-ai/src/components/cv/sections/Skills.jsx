import { useCVStore } from '../../../store/cvStore';
import { sugerirCompetencias } from '../../../services/aiService';
import { useState } from 'react';
export function Skills() {
  const { cvData, setSkills } = useCVStore();
  const [loading, setLoading] = useState(false);
  const handleAI = async () => {
    setLoading(true);
    try {
      const res = await sugerirCompetencias(cvData.personalInfo.cargo || 'Profissional', 'Geral');
      setSkills({ hard_skills: [...new Set([...cvData.skills.hard_skills, ...res.hard_skills])], soft_skills: [...new Set([...cvData.skills.soft_skills, ...res.soft_skills])] });
    } finally { setLoading(false); }
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Competências</h3>
        <button onClick={handleAI} disabled={loading} className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-bold">{loading ? '...' : '✨ Sugerir com IA'}</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Hard Skills</p>
          <div className="flex flex-wrap gap-1">
            {cvData.skills.hard_skills.map((s, i) => <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[10px]">{s}</span>)}
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Soft Skills</p>
          <div className="flex flex-wrap gap-1">
            {cvData.skills.soft_skills.map((s, i) => <span key={i} className="bg-green-50 text-green-700 px-2 py-1 rounded text-[10px]">{s}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
