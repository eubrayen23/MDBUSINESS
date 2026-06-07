export function ModernoTemplate({ data }) {
  const { personalInfo, summary, experience, education, skills } = data;
  return (
    <div className="bg-white shadow-lg min-h-[1056px] text-gray-800 font-sans flex">
      <aside className="w-1/3 bg-gray-900 text-white p-6">
        <div className="mb-8"><h1 className="text-2xl font-bold mb-2">{personalInfo.nome || 'Seu Nome'}</h1></div>
        <section className="mb-8">
          <h2 className="text-xs font-bold text-gray-500 uppercase mb-3">Contacto</h2>
          <div className="text-xs space-y-2"><p>{personalInfo.email}</p><p>{personalInfo.telefone}</p></div>
        </section>
        <section className="mb-8">
          <h2 className="text-xs font-bold text-gray-500 uppercase mb-3">Competências</h2>
          <div className="flex flex-wrap gap-1">{[...skills.hard_skills, ...skills.soft_skills].map((s, i) => <span key={i} className="bg-gray-800 text-[10px] px-2 py-1 rounded">{s}</span>)}</div>
        </section>
      </aside>
      <main className="w-2/3 p-8">
        <section className="mb-8"><h2 className="text-sm font-bold uppercase mb-3 border-b pb-1">Sobre Mim</h2><p className="text-sm leading-relaxed text-gray-600">{summary}</p></section>
        <section className="mb-8"><h2 className="text-sm font-bold uppercase mb-3 border-b pb-1">Experiência</h2>
          {experience.map((exp, idx) => (<div key={idx} className="mb-4"><h3 className="font-bold">{exp.cargo}</h3><p className="text-xs text-primary">{exp.empresa}</p><p className="text-xs text-gray-600">{exp.descricao}</p></div>))}
        </section>
      </main>
    </div>
  );
}
