export function ClassicoTemplate({ data }) {
  const { personalInfo, summary, experience, education, skills } = data;
  return (
    <div className="bg-white p-8 shadow-lg min-h-[1056px] text-gray-800 font-serif">
      <header className="border-b-2 border-gray-800 pb-4 mb-6 text-center">
        <h1 className="text-3xl font-bold uppercase tracking-wide">{personalInfo.nome || 'Seu Nome'}</h1>
        <div className="text-sm mt-2 space-x-2">
          <span>{personalInfo.email}</span>
          {personalInfo.telefone && <span>• {personalInfo.telefone}</span>}
          {personalInfo.provincia && <span>• {personalInfo.provincia}, Angola</span>}
        </div>
      </header>
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase">Resumo</h2>
        <p className="text-sm leading-relaxed">{summary}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase">Experiência Profissional</h2>
        <div className="space-y-4">
          {experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between font-bold text-sm"><span>{exp.cargo}</span><span>{exp.data_inicio} - {exp.actual ? 'Presente' : exp.data_fim}</span></div>
              <div className="text-sm italic">{exp.empresa}</div>
              <p className="text-sm mt-1 whitespace-pre-line">{exp.descricao}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase">Educação</h2>
        <div className="space-y-2">
          {education.map((edu, idx) => (
            <div key={idx} className="flex justify-between text-sm"><div><span className="font-bold">{edu.curso}</span>, {edu.instituicao}</div><span>{edu.data_conclusao}</span></div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-lg font-bold border-b border-gray-300 mb-2 uppercase">Competências</h2>
        <div className="text-sm">
          <p><strong>Técnicas:</strong> {skills.hard_skills.join(', ')}</p>
          <p><strong>Transversais:</strong> {skills.soft_skills.join(', ')}</p>
        </div>
      </section>
    </div>
  );
}
