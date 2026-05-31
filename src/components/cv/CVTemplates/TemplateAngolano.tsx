import { CVContent } from '@/types/cv.types';

interface TemplateProps {
  data: CVContent;
}

export function TemplateAngolano({ data }: TemplateProps) {
  const { personalInfo, objective, experience, education, references } = data;

  return (
    <div className="w-full h-full bg-white p-16 text-ink-900 font-sans">
      <header className="text-center mb-12 border-b-2 border-ink-950 pb-8">
        <h1 className="text-3xl font-black uppercase mb-2 tracking-widest">{personalInfo.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-tight text-ink-600">
          <span>{personalInfo.province}, Angola</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.email}</span>
        </div>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-black uppercase tracking-widest bg-ink-100 px-4 py-1 mb-6">Objectivo Profissional</h2>
          <p className="text-sm leading-relaxed font-medium">{objective}</p>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-widest bg-ink-100 px-4 py-1 mb-6">Dados Pessoais & Identificação</h2>
          <div className="grid grid-cols-2 gap-4 text-xs">
             <div><span className="font-bold">Nacionalidade:</span> Angolana</div>
             <div><span className="font-bold">Naturalidade:</span> {personalInfo.province}</div>
             <div><span className="font-bold">Estado Civil:</span> Solteiro(a)</div>
             <div><span className="font-bold">Residência:</span> {personalInfo.address || personalInfo.province}</div>
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-widest bg-ink-100 px-4 py-1 mb-6">Experiência Profissional</h2>
          <div className="space-y-6">
            {(experience || []).map((exp, i) => (
              <div key={i} className="relative pl-4 border-l-2 border-ink-200">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-black text-sm uppercase">{exp.position}</h3>
                  <span className="text-[10px] font-bold text-ink-400">{exp.startDate} - {exp.current ? 'Presente' : exp.endDate}</span>
                </div>
                <p className="text-xs font-bold text-ink-600 mb-2 uppercase">{exp.company}</p>
                <p className="text-xs leading-relaxed opacity-80">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black uppercase tracking-widest bg-ink-100 px-4 py-1 mb-6">Formação Académica</h2>
          <div className="space-y-4">
            {(education || []).map((edu, i) => (
              <div key={i} className="flex justify-between">
                <div>
                  <h3 className="font-black text-xs uppercase">{edu.degree}</h3>
                  <p className="text-xs font-medium">{edu.institution}</p>
                </div>
                <span className="text-[10px] font-bold text-ink-400 uppercase">{edu.startDate} - {edu.endDate}</span>
              </div>
            ))}
          </div>
        </section>

        {references && references.length > 0 && (
          <section>
            <h2 className="text-sm font-black uppercase tracking-widest bg-ink-100 px-4 py-1 mb-6">Referências Profissionais</h2>
            <div className="grid grid-cols-2 gap-6">
              {references.map((ref, i) => (
                <div key={i} className="text-xs">
                  <p className="font-black uppercase">{ref.name}</p>
                  <p className="font-medium text-ink-600">{ref.position} na {ref.company}</p>
                  <p className="opacity-70 mt-1">{ref.contact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
