import { useCVStore } from '../../../store/cvStore';
import { gerarResumoProfissional } from '../../../services/aiService';
import { useState } from 'react';
export function Summary() {
  const { cvData, setSummary } = useCVStore();
  const [loading, setLoading] = useState(false);
  const handleAI = async () => {
    setLoading(true);
    try { const res = await gerarResumoProfissional(cvData.personalInfo); setSummary(res); } finally { setLoading(false); }
  };
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Resumo Profissional</h3>
        <button onClick={handleAI} disabled={loading} className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full font-bold">{loading ? '...' : '✨ IA'}</button>
      </div>
      <textarea value={cvData.summary} onChange={e => setSummary(e.target.value)} rows={4} className="w-full p-3 border rounded-xl text-sm" placeholder="O seu resumo profissional..." />
    </div>
  );
}
