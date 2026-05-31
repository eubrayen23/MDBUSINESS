import React from 'react';
import { Card } from '../../components/ui/Card';
import {
  Users,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';
import { formatCurrency } from '../../lib/utils/utils';

const data = [
  { name: 'Jan', revenue: 450000 },
  { name: 'Fev', revenue: 520000 },
  { name: 'Mar', revenue: 480000 },
  { name: 'Abr', revenue: 610000 },
  { name: 'Mai', revenue: 750000 },
];

const statusData = [
  { name: 'Concluído', value: 400 },
  { name: 'Agendado', value: 300 },
  { name: 'Cancelado', value: 100 },
];

const COLORS = ['#FFFFFF', '#444444', '#111111'];

export const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-black tracking-tight">COMMAND CENTER</h1>
        <p className="text-neutral-500 uppercase text-xs font-bold tracking-[0.3em] mt-1">Visão Geral do Sistema</p>
      </header>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Pacientes', val: '1,284', icon: Users, delta: '+12%', positive: true },
          { label: 'Consultas Hoje', val: '42', icon: Calendar, delta: '+5', positive: true },
          { label: 'Receita (Mês)', val: formatCurrency(750000), icon: CreditCard, delta: '+18%', positive: true },
          { label: 'Faturas Pendentes', val: '14', icon: TrendingUp, delta: '-2', positive: true },
        ].map((kpi, i) => (
          <Card key={i} className="relative overflow-hidden group">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">{kpi.label}</p>
                <p className="text-2xl font-black mt-1 tracking-tighter">{kpi.val}</p>
              </div>
              <div className="p-2 bg-neutral-900 rounded-sm">
                <kpi.icon size={20} className="text-white" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              {kpi.positive ? <ArrowUpRight size={14} className="text-white" /> : <ArrowDownRight size={14} className="text-red-500" />}
              <span className={kpi.positive ? 'text-xs font-bold' : 'text-xs font-bold text-red-500'}>{kpi.delta}</span>
              <span className="text-[10px] text-neutral-600 font-bold uppercase">vs. mês anterior</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <Card title="Receita Bruta (AOA)" className="lg:col-span-2">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis
                  dataKey="name"
                  stroke="#555"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontWeight: 'bold' }}
                />
                <YAxis
                  stroke="#555"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `${val/1000}k`}
                />
                <Tooltip
                  cursor={{ fill: '#111' }}
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '4px' }}
                />
                <Bar dataKey="revenue" fill="#FFF" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Status Distribution */}
        <Card title="Distribuição de Consultas">
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
             {statusData.map((s, i) => (
               <div key={i} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="font-bold uppercase tracking-widest text-neutral-400">{s.name}</span>
                  </div>
                  <span className="font-black">{s.value}</span>
               </div>
             ))}
          </div>
        </Card>
      </div>

      {/* Recent Appointments */}
      <section className="space-y-4">
        <h2 className="text-xl font-black uppercase tracking-tight">Atividade Recente</h2>
        <Table headers={['Paciente', 'Especialista', 'Procedimento', 'Valor', 'Status']}>
           {[
             { p: 'Manuel dos Santos', d: 'Dra. Ana Santos', t: 'Implante', v: 450000, s: 'Concluído' },
             { p: 'Helena Moreno', d: 'Dr. Carlos Mendes', t: 'Limpeza', v: 25000, s: 'Agendado' },
             { p: 'José Eduardo', d: 'Dra. Sofia Lopes', t: 'Restauração', v: 30000, s: 'Pendente' },
             { p: 'Tatiana Silva', d: 'Dra. Ana Santos', t: 'Consulta Geral', v: 15000, s: 'Concluído' },
           ].map((row, i) => (
             <TableRow key={i}>
                <TableCell className="font-bold">{row.p}</TableCell>
                <TableCell>{row.d}</TableCell>
                <TableCell className="text-neutral-400">{row.t}</TableCell>
                <TableCell className="font-mono">{formatCurrency(row.v)}</TableCell>
                <TableCell>
                   <Badge variant={row.s === 'Concluído' ? 'success' : 'outline'}>{row.s}</Badge>
                </TableCell>
             </TableRow>
           ))}
        </Table>
      </section>
    </div>
  );
};
