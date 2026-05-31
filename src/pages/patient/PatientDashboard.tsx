import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { useAuthStore } from '../../store/useAuthStore';
import { Calendar, Clock, FileText, CheckCircle2 } from 'lucide-react';
import { formatCurrency, formatDate } from '../../lib/utils/utils';

export const PatientDashboard: React.FC = () => {
  const { profile } = useAuthStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-3xl font-black tracking-tight">OLÁ, {profile?.full_name?.split(' ')[0].toUpperCase()}</h1>
        <p className="text-neutral-500 uppercase text-xs font-bold tracking-widest mt-1">Bem-vindo de volta à Clínica SmilePro</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Próxima Consulta" className="border-white/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white text-black flex flex-col items-center justify-center font-black">
              <span className="text-[10px] leading-none uppercase">Jun</span>
              <span className="text-xl leading-none">12</span>
            </div>
            <div className="flex-1">
              <p className="font-bold">Check-up Semestral</p>
              <div className="flex items-center gap-2 text-xs text-neutral-400 mt-1">
                <Clock size={12} />
                <span>09:30 - 10:00</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">Dra. Ana Santos</p>
            </div>
            <Badge variant="success">Confirmado</Badge>
          </div>
          <div className="mt-6 flex gap-2">
            <Button size="sm" className="flex-1">Reagendar</Button>
            <Button variant="outline" size="sm" className="flex-1">Cancelar</Button>
          </div>
        </Card>

        <Card title="Estado Financeiro">
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-neutral-500 uppercase font-bold tracking-widest">Saldo Pendente</p>
                <p className="text-3xl font-black">{formatCurrency(0)}</p>
              </div>
              <CheckCircle2 className="text-white" size={32} />
            </div>
            <div className="h-1 bg-neutral-900 w-full">
              <div className="h-full bg-white w-full"></div>
            </div>
            <p className="text-[10px] text-neutral-500 uppercase font-bold">Todas as faturas estão pagas. Obrigado!</p>
          </div>
        </Card>
      </div>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold uppercase tracking-tighter">Histórico Recente</h2>
          <Button variant="ghost" size="sm" className="text-[10px] uppercase tracking-widest">Ver Tudo</Button>
        </div>
        <Table headers={['Data', 'Procedimento', 'Dentista', 'Estado']}>
          <TableRow>
            <TableCell>{formatDate('2024-05-15')}</TableCell>
            <TableCell className="font-bold">Limpeza Profissional</TableCell>
            <TableCell>Dr. Carlos Mendes</TableCell>
            <TableCell><Badge>Concluído</Badge></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{formatDate('2024-04-10')}</TableCell>
            <TableCell className="font-bold">Restauração Resina</TableCell>
            <TableCell>Dra. Sofia Lopes</TableCell>
            <TableCell><Badge>Concluído</Badge></TableCell>
          </TableRow>
        </Table>
      </section>

      <section className="bg-neutral-900 p-8 border border-white/5 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold">Precisa de um novo agendamento?</h3>
          <p className="text-sm text-neutral-400">Escolha o seu especialista e marque a sua consulta online em segundos.</p>
        </div>
        <Button size="lg" className="w-full md:w-auto">Marcar Agora</Button>
      </section>
    </div>
  );
};
