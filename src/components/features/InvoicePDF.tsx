import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Note: Registering fonts would go here if needed

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 20,
    marginBottom: 40,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  clinicInfo: {
    fontSize: 10,
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  invoiceTitle: {
    fontSize: 40,
    fontWeight: 'black',
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  detailsCol: {
    flex: 1,
  },
  label: {
    fontSize: 8,
    color: '#666666',
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  table: {
    width: '100%',
    marginTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 8,
    marginBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEEEEE',
  },
  colDesc: { flex: 3, fontSize: 10 },
  colQty: { flex: 1, fontSize: 10, textAlign: 'center' },
  colPrice: { flex: 1, fontSize: 10, textAlign: 'right' },
  colTotal: { flex: 1, fontSize: 10, textAlign: 'right', fontWeight: 'bold' },
  footer: {
    marginTop: 60,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    paddingTop: 20,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  totalBox: {
    width: 200,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  grandTotal: {
    borderTopWidth: 2,
    borderTopColor: '#000000',
    marginTop: 8,
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

interface InvoicePDFProps {
  data: {
    number: string;
    date: string;
    patientName: string;
    patientNif: string;
    items: Array<{ desc: string; qty: number; price: number }>;
    subtotal: number;
    discount: number;
    total: number;
  };
}

export const InvoicePDF: React.FC<InvoicePDFProps> = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.logo}>SmilePro</Text>
        <View>
          <Text style={styles.clinicInfo}>Clínica SmilePro Lda.</Text>
          <Text style={styles.clinicInfo}>Rua Major Kanhangulo, Luanda</Text>
          <Text style={styles.clinicInfo}>NIF: 5001234567</Text>
          <Text style={styles.clinicInfo}>+244 934 859 497</Text>
        </View>
      </View>

      <Text style={styles.invoiceTitle}>Fatura</Text>

      <View style={styles.detailsRow}>
        <View style={styles.detailsCol}>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.value}>{data.patientName}</Text>
          <Text style={styles.value}>NIF: {data.patientNif}</Text>
        </View>
        <View style={styles.detailsCol}>
          <Text style={styles.label}>Número</Text>
          <Text style={styles.value}>{data.number}</Text>
        </View>
        <View style={styles.detailsCol}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.value}>{data.date}</Text>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.colDesc, { fontWeight: 'bold' }]}>Descrição</Text>
          <Text style={[styles.colQty, { fontWeight: 'bold' }]}>Qtd</Text>
          <Text style={[styles.colPrice, { fontWeight: 'bold' }]}>Preço</Text>
          <Text style={[styles.colTotal, { fontWeight: 'bold' }]}>Total</Text>
        </View>

        {data.items.map((item, i) => (
          <View key={i} style={styles.tableRow}>
            <Text style={styles.colDesc}>{item.desc}</Text>
            <Text style={styles.colQty}>{item.qty}</Text>
            <Text style={styles.colPrice}>{item.price.toLocaleString()} Kz</Text>
            <Text style={styles.colTotal}>{(item.qty * item.price).toLocaleString()} Kz</Text>
          </View>
        ))}
      </View>

      <View style={styles.totalSection}>
        <View style={styles.totalBox}>
          <View style={styles.totalRow}>
            <Text style={styles.label}>Subtotal</Text>
            <Text style={styles.value}>{data.subtotal.toLocaleString()} Kz</Text>
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.label}>Desconto</Text>
            <Text style={styles.value}>{data.discount.toLocaleString()} Kz</Text>
          </View>
          <View style={[styles.totalRow, styles.grandTotal]}>
            <Text style={{ fontWeight: 'bold' }}>TOTAL</Text>
            <Text style={{ fontWeight: 'bold' }}>{data.total.toLocaleString()} Kz</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={{ fontSize: 8, color: '#999', textTransform: 'uppercase' }}>
          Obrigado pela sua confiança. Este documento serve de prova de pagamento.
        </Text>
      </View>
    </Page>
  </Document>
);
