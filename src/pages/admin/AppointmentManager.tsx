import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Modal } from '../../components/ui/Modal';
import { Plus } from 'lucide-react';

export const AppointmentManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const appointments = [
    { id: '1', patient: 'Manuel dos Santos', dentist: 'Dra. Ana Santos', time: '09:00', type: 'Limpeza', status: 'confirmado' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">AGENDA</h1>
        <Button onClick={() => setIsModalOpen(true)}><Plus size={18} className="mr-2" /> Agendar</Button>
      </div>
      <Table headers={['Hora', 'Paciente', 'Dentista', 'Tipo', 'Estado']}>
        {appointments.map((a) => (
          <TableRow key={a.id}>
            <TableCell className="font-mono">{a.time}</TableCell>
            <TableCell className="font-bold">{a.patient}</TableCell>
            <TableCell>{a.dentist}</TableCell>
            <TableCell>{a.type}</TableCell>
            <TableCell><Badge variant="success">{a.status}</Badge></TableCell>
          </TableRow>
        ))}
      </Table>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Agendar Consulta">
        <p className="text-sm">Formulário de agendamento...</p>
      </Modal>
    </div>
  );
};
