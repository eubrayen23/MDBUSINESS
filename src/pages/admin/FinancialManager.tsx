import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Table, TableRow, TableCell } from '../../components/ui/Table';
import { Download, Plus } from 'lucide-react';
import { formatCurrency } from '../../lib/utils/utils';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { InvoicePDF } from '../../components/features/InvoicePDF';

export const FinancialManager: React.FC = () => {
  const invoices = [
    { id: '1', number: 'INV-001', patient: 'Manuel dos Santos', total: 450000, status: 'pago' },
  ];

  const mockData = {
    number: 'INV-001', date: '31/05/2024', patientName: 'Manuel dos Santos', patientNif: '500123',
    items: [{ desc: 'Implante', qty: 1, price: 450000 }], subtotal: 450000, discount: 0, total: 450000
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black uppercase tracking-tight">FINANCEIRO</h1>
        <Button><Plus size={18} className="mr-2" /> Faturar</Button>
      </div>
      <Table headers={['Fatura', 'Paciente', 'Total', 'Estado', 'Ações']}>
        {invoices.map((inv) => (
          <TableRow key={inv.id}>
            <TableCell>{inv.number}</TableCell>
            <TableCell className="font-bold">{inv.patient}</TableCell>
            <TableCell className="font-mono">{formatCurrency(inv.total)}</TableCell>
            <TableCell><Badge variant="success">{inv.status}</Badge></TableCell>
            <TableCell>
              <PDFDownloadLink document={<InvoicePDF data={mockData} />} fileName="fatura.pdf">
                <Button variant="ghost" size="sm"><Download size={16} /></Button>
              </PDFDownloadLink>
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </div>
  );
};
