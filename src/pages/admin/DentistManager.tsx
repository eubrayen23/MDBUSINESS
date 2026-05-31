import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Users, Plus } from 'lucide-react';

export const DentistManager: React.FC = () => {
  const dentists = [
    { id: '1', name: 'Dra. Ana Santos', specialty: 'Ortodontia', status: 'ativo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">DENTISTAS</h1>
        <Button><Plus size={18} className="mr-2" /> Novo Dentista</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dentists.map((d) => (
          <Card key={d.id}>
            <h3 className="text-lg font-bold">{d.name}</h3>
            <p className="text-xs text-neutral-500 uppercase font-bold">{d.specialty}</p>
            <div className="mt-4"><Badge variant="success">{d.status}</Badge></div>
          </Card>
        ))}
      </div>
    </div>
  );
};
