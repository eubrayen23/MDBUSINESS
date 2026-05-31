import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Modal } from '../../components/ui/Modal';
import { Plus, Loader2 } from 'lucide-react';
import { useAppointments } from '../../hooks/useAppointments';

export const AppointmentManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { appointments, isLoading, error } = useAppointments();

  if (error) return <div className="text-red-500 font-bold p-8 text-center uppercase tracking-widest border border-red-500/20">Erro de Sincronização: {error.message}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tight">AGENDA</h1>
          <p className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Tempo Real via Supabase</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}><Plus size={18} className="mr-2" /> Agendar</Button>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-20">
          <Loader2 className="animate-spin text-white" size={40} />
        </div>
      ) : (
        <Table headers={['Hora', 'Paciente', 'Dentista', 'Tipo', 'Estado']}>
          {appointments?.map((a: any) => (
            <TableRow key={a.id}>
              <TableCell className="font-mono font-bold">{new Date(a.scheduled_at).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}</TableCell>
              <TableCell className="font-bold">{a.patients?.profiles?.full_name}</TableCell>
              <TableCell className="text-neutral-400">{a.dentists?.profiles?.full_name}</TableCell>
              <TableCell className="text-[10px] font-black uppercase tracking-widest">{a.type}</TableCell>
              <TableCell>
                <Badge variant={a.status === 'confirmado' ? 'success' : 'default'}>{a.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
          {appointments?.length === 0 && (
             <TableRow>
              <TableCell colSpan={5} className="text-center py-10 text-neutral-500 font-bold uppercase tracking-widest">
                Sem consultas agendadas.
              </TableCell>
            </TableRow>
          )}
        </Table>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Agendar Consulta">
        <p className="text-xs font-bold uppercase text-neutral-500 mb-6">Selecione os dados do paciente e dentista existentes no Supabase.</p>
        <form className="space-y-4">
           {/* Form implementation would go here using useMutation */}
           <Button className="w-full">Confirmar Agendamento</Button>
        </form>
      </Modal>
    </div>
  );
};
