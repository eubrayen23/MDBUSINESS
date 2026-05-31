import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Plus, Loader2 } from 'lucide-react';
import { formatCurrency } from '../../lib/utils/utils';
import { useTreatments } from '../../hooks/useTreatments';

export const ServiceCatalog: React.FC = () => {
  const { data: treatments, isLoading, error } = useTreatments();

  if (error) return <div className="text-red-500 font-bold p-8">Erro: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">SERVIÇOS</h1>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Catálogo Live</p>
        </div>
        <Button><Plus size={18} className="mr-2" /> Novo Serviço</Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20">
          <Loader2 className="animate-spin text-white" size={40} />
        </div>
      ) : (
        <Table headers={['Serviço', 'Preço', 'Estado']}>
          {treatments?.map((t: any) => (
            <TableRow key={t.id}>
              <TableCell className="font-bold">{t.name}</TableCell>
              <TableCell className="font-mono">{formatCurrency(t.price)}</TableCell>
              <TableCell><Badge variant="success">{t.is_active ? 'ativo' : 'inativo'}</Badge></TableCell>
            </TableRow>
          ))}
        </Table>
      )}
    </div>
  );
};
