import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica', fontSize: 10, lineHeight: 1.5 },
  header: { borderBottomWidth: 1, borderBottomColor: '#333', paddingBottom: 10, marginBottom: 20 },
  section: { marginBottom: 15 },
  title: { fontSize: 12, fontWeight: 'bold', marginBottom: 5, backgroundColor: '#f0f0f0', padding: 3, textTransform: 'uppercase' },
  bold: { fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  text: { color: '#444' }
});

export const CVDocument = ({ data }) => {
  const { personalInfo, summary, experience, education, skills } = data;
  return (
    <Document title={data.titulo}>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', textTransform: 'uppercase' }}>{personalInfo.nome || 'Currículo'}</Text>
          <Text style={styles.text}>{personalInfo.email} | {personalInfo.telefone}</Text>
          <Text style={styles.text}>{personalInfo.provincia}, Angola | BI: {personalInfo.bi_numero}</Text>
        </View>

        {summary && (
          <View style={styles.section}>
            <Text style={styles.title}>Resumo Profissional</Text>
            <Text style={styles.text}>{summary}</Text>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.title}>Experiência Profissional</Text>
          {experience.map((e, i) => (
            <View key={i} style={{ marginBottom: 10 }}>
              <View style={styles.row}>
                <Text style={styles.bold}>{e.cargo}</Text>
                <Text style={styles.text}>{e.empresa}</Text>
              </View>
              <Text style={styles.text}>{e.descricao}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Formação Académica</Text>
          {education.map((e, i) => (
            <View key={i} style={styles.row}>
              <Text style={styles.bold}>{e.curso}</Text>
              <Text style={styles.text}>{e.instituicao} | {e.data_conclusao}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Competências</Text>
          <Text style={styles.text}><Text style={styles.bold}>Técnicas: </Text>{skills.hard_skills.join(', ')}</Text>
          <Text style={styles.text}><Text style={styles.bold}>Transversais: </Text>{skills.soft_skills.join(', ')}</Text>
        </View>
      </Page>
    </Document>
  );
};
