import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

export default function JobResources() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-black mb-8">Recursos de Emprego</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-8"><h3 className="font-bold">Guia de Entrevista</h3></Card>
        <Card className="p-8"><h3 className="font-bold">Trilhas de Carreira</h3></Card>
      </div>
    </DashboardLayout>
  );
}
