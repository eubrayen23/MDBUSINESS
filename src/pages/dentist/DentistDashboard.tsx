import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Clock, User, ArrowRight, ClipboardList } from 'lucide-react';
import { formatCurrency } from '../../lib/utils/utils';

const appointments = [
  { id: '1', patient: 'Manuel dos Santos', time: '08:30', type: 'Consulta Geral', status: 'concluido' },
  { id: '2', patient: 'Ana Paula', time: '09:30', type: 'Extração Simples', status: 'em_atendimento' },
  { id: '3', patient: 'João Gabriel', time: '10:30', type: 'Limpeza', status: 'agendado' },
  { id: '4', patient: 'Maria Teresa', time: '14:00', type: 'Restauração', status: 'agendado' },
];

export const DentistDashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-black tracking-tight">AGENDA DE HOJE</h1>
          <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest mt-1">31 de Maio, 2024</p>
        </div>
        <div className="flex gap-2">
           <Card className="px-6 py-2 border-white/20 bg-white text-black">
              <p className="text-[10px] font-bold uppercase tracking-widest">Ganhos Hoje</p>
              <p className="text-lg font-black">{formatCurrency(125000)}</p>
           </Card>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
           {appointments.map((apt) => (
             <Card key={apt.id} className={apt.status === 'em_atendimento' ? 'border-white ring-1 ring-white' : ''}>
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-4">
                   <div className="text-2xl font-black font-mono w-20">{apt.time}</div>
                   <div className="h-10 w-px bg-white/10" />
                   <div>
                     <p className="font-bold text-lg">{apt.patient}</p>
                     <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">{apt.type}</p>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <Badge variant={apt.status === 'concluido' ? 'default' : apt.status === 'em_atendimento' ? 'success' : 'outline'}>
                      {apt.status.replace('_', ' ')}
                    </Badge>
                    <Button size="sm" variant={apt.status === 'em_atendimento' ? 'primary' : 'ghost'}>
                      {apt.status === 'concluido' ? <ClipboardList size={18} /> : <ArrowRight size={18} />}
                    </Button>
                 </div>
               </div>
             </Card>
           ))}
        </div>

        <div className="space-y-6">
          <Card title="Próximo Paciente">
             <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="w-16 h-16 bg-neutral-900 border border-white/10 rounded-sm flex items-center justify-center">
                      <User size={32} className="text-neutral-500" />
                   </div>
                   <div>
                      <p className="text-xl font-bold tracking-tight">João Gabriel</p>
                      <p className="text-xs text-neutral-500 font-bold uppercase">Paciente desde 2022</p>
                   </div>
                </div>
                <div className="space-y-2 border-t border-white/10 pt-4">
                   <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-bold">Última Visita</span>
                      <span className="font-bold">15 Jan, 2024</span>
                   </div>
                   <div className="flex justify-between text-xs">
                      <span className="text-neutral-500 uppercase font-bold">Alergias</span>
                      <span className="font-bold text-red-500">Penicilina</span>
                   </div>
                </div>
                <Button className="w-full">Ver Histórico Completo</Button>
             </div>
          </Card>

          <Card title="Notas de Hoje" className="bg-neutral-900/50">
             <textarea
               className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-neutral-600 resize-none h-32"
               placeholder="Escreva notas rápidas para o dia..."
             />
          </Card>
        </div>
      </div>
    </div>
  );
};
