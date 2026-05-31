import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Plus } from 'lucide-react';
import { formatCurrency } from '../../lib/utils/utils';

export const ServiceCatalog: React.FC = () => {
  const treatments = [
    { id: '1', name: 'Consulta Geral', price: 15000, status: 'ativo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">SERVIÇOS</h1>
        <Button><Plus size={18} className="mr-2" /> Novo Serviço</Button>
      </div>
      <Table headers={['Serviço', 'Preço', 'Estado']}>
        {treatments.map((t) => (
          <TableRow key={t.id}>
            <TableCell className="font-bold">{t.name}</TableCell>
            <TableCell className="font-mono">{formatCurrency(t.price)}</TableCell>
            <TableCell><Badge variant="success">{t.status}</Badge></TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};
