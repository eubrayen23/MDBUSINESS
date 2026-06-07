import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useCVStore } from '../store/cvStore';
import { saveCV } from '../services/cvService';
import { CVEditor } from '../components/cv/CVEditor';
import { CVPreview } from '../components/cv/CVPreview';
import { CVTemplates } from '../components/cv/CVTemplates';
import { CVDocument } from '../components/cv/CVDocument';
import { supabase } from '../services/supabase';
export function Editor() {
  const { cvData, setCVData } = useCVStore();
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const cvId = new URLSearchParams(location.search).get('id');
  const handleSave = async () => {
    const user = (await supabase.auth.getUser()).data.user;
    if (!user) return alert('Login required');
    const p = { user_id: user.id, titulo: cvData.titulo, data: cvData };
    if (cvId) p.id = cvId;
    await saveCV(p); alert('Salvo!'); navigate('/dashboard');
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white border-b flex justify-between items-center sticky top-0 z-50">
        <button onClick={() => navigate('/dashboard')} className="font-bold">← Dashboard</button>
        <div className="flex gap-4">
          <button onClick={() => setShowPreview(!showPreview)} className="px-4 py-2 border rounded-lg font-bold">{showPreview ? 'Editar' : 'Preview'}</button>
          <PDFDownloadLink document={<CVDocument data={cvData} />} fileName="cv.pdf">
            {({ loading }) => <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-bold">{loading ? '...' : 'PDF'}</button>}
          </PDFDownloadLink>
          <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-lg font-bold">Guardar</button>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto p-8 space-y-6">
        {showPreview ? <CVPreview /> : <><CVTemplates /><CVEditor /></>}
      </main>
    </div>
  );
}
