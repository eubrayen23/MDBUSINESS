export function AngolanoTemplate({ data }) {
  const { personalInfo, summary, experience, education, skills } = data;
  return (
    <div className="bg-white p-10 shadow-lg min-h-[1056px] text-gray-900 font-sans">
      <header className="mb-10"><h1 className="text-4xl font-black uppercase">{personalInfo.nome || 'Seu Nome'}</h1>
        <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
          <p><strong>BI:</strong> {personalInfo.bi_numero}</p>
          <p><strong>Nacionalidade:</strong> {personalInfo.nacionalidade}</p>
          <p><strong>Email:</strong> {personalInfo.email}</p>
        </div>
      </header>
      <section className="mb-8"><h2 className="text-lg font-bold bg-gray-900 text-white px-3 py-1 inline-block mb-4">PERFIL</h2><p className="text-sm leading-relaxed">{summary}</p></section>
      <section className="mb-8"><h2 className="text-lg font-bold bg-gray-900 text-white px-3 py-1 inline-block mb-4">EXPERIÊNCIA</h2>
        {experience.map((exp, idx) => (<div key={idx} className="mb-4"><h3 className="font-bold">{exp.cargo}</h3><p className="text-xs font-bold text-primary">{exp.empresa}</p><p className="text-sm text-gray-600">{exp.descricao}</p></div>))}
      </section>
    </div>
  );
}
