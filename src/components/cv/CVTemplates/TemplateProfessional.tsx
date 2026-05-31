import { CVContent } from '@/types/cv.types';

export function TemplateProfessional({ data }: { data: CVContent }) {
  const { personalInfo, objective, experience, education, skills, certifications } = data;

  return (
    <div className="w-full h-full bg-white p-16 text-ink-900 font-serif">
      <header className="border-b-4 border-ink-900 pb-8 mb-10">
        <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
        <div className="flex flex-wrap gap-4 text-sm font-semibold">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.province}, Angola</span>
          {personalInfo.linkedin && (
            <>
              <span>•</span>
              <span className="truncate max-w-xs">{personalInfo.linkedin}</span>
            </>
          )}
        </div>
      </header>

      <div className="space-y-10">
        <section>
          <h2 className="text-lg font-bold uppercase border-b-2 border-ink-200 mb-4 tracking-wider">Perfil Profissional</h2>
          <p className="text-sm leading-relaxed text-justify">{objective}</p>
        </section>

        <section>
          <h2 className="text-lg font-bold uppercase border-b-2 border-ink-200 mb-4 tracking-wider">Experiência Profissional</h2>
          <div className="space-y-8">
            {(experience || []).map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-base font-bold">{exp.position}</h3>
                  <span className="text-sm italic">{exp.startDate} – {exp.current ? 'Presente' : exp.endDate}</span>
                </div>
                <p className="text-sm font-bold text-ink-600 mb-3 uppercase">{exp.company}</p>
                <p className="text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-10">
          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-ink-200 mb-4 tracking-wider">Educação</h2>
            <div className="space-y-6">
              {(education || []).map((edu, i) => (
                <div key={i}>
                  <h3 className="text-sm font-bold">{edu.degree}</h3>
                  <p className="text-sm">{edu.institution}</p>
                  <p className="text-xs italic text-ink-500">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase border-b-2 border-ink-200 mb-4 tracking-wider">Competências Técnicas</h2>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
               {(skills?.technical || []).map((s, i) => (
                 <span key={i} className="text-sm font-medium">• {s}</span>
               ))}
            </div>
          </section>
        </div>

        {certifications && certifications.length > 0 && (
          <section>
             <h2 className="text-lg font-bold uppercase border-b-2 border-ink-200 mb-4 tracking-wider">Certificações</h2>
             <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="text-sm">
                    <span className="font-bold">{cert.name}</span> — {cert.issuer} ({cert.date})
                  </div>
                ))}
             </div>
          </section>
        )}
      </div>
    </div>
  );
}
