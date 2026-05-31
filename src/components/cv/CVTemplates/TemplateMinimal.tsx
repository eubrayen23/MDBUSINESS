import { CVContent } from '@/types/cv.types';

export function TemplateMinimal({ data }: { data: CVContent }) {
  const { personalInfo, objective, experience, education, skills } = data;

  return (
    <div className="w-full h-full bg-white p-[25mm] text-ink-900 font-sans tracking-tight">
      <header className="mb-20">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-4">{personalInfo.name}</h1>
        <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-ink-400">
          <span>{personalInfo.email}</span>
          <span>/</span>
          <span>{personalInfo.phone}</span>
          <span>/</span>
          <span>{personalInfo.province}</span>
        </div>
      </header>

      <div className="space-y-16 max-w-[160mm]">
        <section>
           <p className="text-lg font-medium leading-relaxed text-ink-700">{objective}</p>
        </section>

        <section>
           <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-10">Experiência</h2>
           <div className="space-y-12">
              {(experience || []).map((exp, i) => (
                <div key={i} className="grid grid-cols-4 gap-8">
                  <div className="col-span-1 text-[10px] font-black uppercase tracking-widest text-ink-300 pt-1">
                    {exp.startDate} — {exp.current ? 'Presente' : exp.endDate}
                  </div>
                  <div className="col-span-3">
                    <h3 className="text-lg font-black uppercase mb-1">{exp.position}</h3>
                    <p className="text-sm font-bold text-ink-500 mb-4">{exp.company}</p>
                    <p className="text-sm leading-relaxed font-medium text-ink-600">{exp.description}</p>
                  </div>
                </div>
              ))}
           </div>
        </section>

        <div className="grid grid-cols-2 gap-20">
           <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-8">Educação</h2>
              <div className="space-y-8">
                 {(education || []).map((edu, i) => (
                   <div key={i}>
                     <h3 className="text-sm font-black uppercase mb-1">{edu.degree}</h3>
                     <p className="text-xs font-bold text-ink-500">{edu.institution}</p>
                   </div>
                 ))}
              </div>
           </section>

           <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-600 mb-8">Skills</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                 {[...(skills?.technical || []), ...(skills?.soft || [])].map((s, i) => (
                   <span key={i} className="text-xs font-bold uppercase tracking-tight text-ink-700">{s}</span>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
