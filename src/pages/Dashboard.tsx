import { useEffect } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAuthStore } from '@/store/authStore';
import { useCVStore } from '@/store/cvStore';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Plus, FileText, Download, Trash2, Clock, Target, Zap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate } from '@/lib/utils';
import toast from 'react-hot-toast';

export default function Dashboard() {
  const { profile } = useAuthStore();
  const { cvs, fetchCVs, isLoading, createCV } = useCVStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) fetchCVs(profile.id);
  }, [profile, fetchCVs]);

  const handleCreateNew = async () => {
    if (!profile) return;
    const id = await createCV(profile.id, 'Meu Novo Currículo');
    if (id) {
      toast.success('Currículo criado!');
      navigate(`/cv/editar/${id}`);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black">Olá, {profile?.full_name?.split(' ')[0]}!</h1>
        <Button onClick={handleCreateNew}><Plus size={20} className="mr-2" />Criar Novo CV</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cvs.map(cv => (
          <Card key={cv.id} className="p-6">
            <h3 className="font-bold text-xl mb-4">{cv.title}</h3>
            <div className="flex gap-2">
              <Link to={`/cv/editar/${cv.id}`}><Button variant="outline" size="sm">Editar</Button></Link>
              <Button variant="ghost" size="sm"><Trash2 size={18} /></Button>
            </div>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
