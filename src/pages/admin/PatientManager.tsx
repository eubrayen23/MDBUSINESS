import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { Search, Plus, MoreHorizontal, Loader2 } from 'lucide-react';
import { usePatients } from '../../hooks/usePatients';

export const PatientManager: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { patients, isLoading, error } = usePatients();

  if (error) return <div className="text-red-500 font-bold p-8">Erro ao carregar pacientes: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">PACIENTES</h1>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Base de Dados Supabase</p>
        </div>
        <Button onClick={() => setIsAddModalOpen(true)}><Plus size={18} className="mr-2" /> Novo Paciente</Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20">
          <Loader2 className="animate-spin text-white" size={40} />
        </div>
      ) : (
        <Table headers={['Registo', 'Nome', 'Contacto', 'Estado', 'Ações']}>
          {patients?.map((p: any) => (
            <TableRow key={p.id}>
              <TableCell className="font-mono text-neutral-400">{p.registration_number}</TableCell>
              <TableCell className="font-bold">{p.profiles?.full_name}</TableCell>
              <TableCell>{p.profiles?.phone || 'Sem contacto'}</TableCell>
              <TableCell><Badge variant="success">ativo</Badge></TableCell>
              <TableCell><Button variant="ghost" size="sm"><MoreHorizontal size={18} /></Button></TableCell>
            </TableRow>
          ))}
          {patients?.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-10 text-neutral-500 font-bold uppercase tracking-widest">
                Nenhum paciente encontrado.
              </TableCell>
            </TableRow>
          )}
        </Table>
      )}

      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Novo Paciente">
        <form className="space-y-4">
          <Input label="Nome Completo" placeholder="O perfil será criado no Supabase" />
          <Input label="Telefone" placeholder="9XXXXXXXX" />
          <p className="text-[10px] text-neutral-500 uppercase font-bold italic">Nota: Para produção, use o hook useMutation configurado em hooks/usePatients.ts</p>
          <Button className="w-full">Salvar</Button>
        </form>
      </Modal>
    </div>
  );
};
