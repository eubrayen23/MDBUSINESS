import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { Search, Plus, MoreHorizontal } from 'lucide-react';

export const PatientManager: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const patients = [
    { id: '1', name: 'Manuel dos Santos', reg: 'SMPL-000124', phone: '923 456 789', email: 'manuel@email.ao', status: 'ativo' },
    { id: '2', name: 'Helena Moreno', reg: 'SMPL-000125', phone: '934 112 233', email: 'helena@email.ao', status: 'ativo' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">PACIENTES</h1>
        <Button onClick={() => setIsAddModalOpen(true)}><Plus size={18} className="mr-2" /> Novo Paciente</Button>
      </div>
      <Table headers={['Registo', 'Nome', 'Contacto', 'Estado', 'Ações']}>
        {patients.map((p) => (
          <TableRow key={p.id}>
            <TableCell className="font-mono text-neutral-400">{p.reg}</TableCell>
            <TableCell className="font-bold">{p.name}</TableCell>
            <TableCell>{p.phone}</TableCell>
            <TableCell><Badge variant="success">{p.status}</Badge></TableCell>
            <TableCell><Button variant="ghost" size="sm"><MoreHorizontal size={18} /></Button></TableCell>
          </TableRow>
        ))}
      </Table>
      <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Novo Paciente">
        <form className="space-y-4">
          <Input label="Nome Completo" />
          <Input label="Telefone" />
          <Button className="w-full">Salvar</Button>
        </form>
      </Modal>
    </div>
  );
};
