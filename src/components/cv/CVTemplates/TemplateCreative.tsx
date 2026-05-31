import { CVContent } from '@/types/cv.types';

export function TemplateCreative({ data }: { data: CVContent }) {
  const { personalInfo, objective, experience, education, skills } = data;

  return (
    <div className="w-full h-full bg-brand-50 flex flex-col font-sans">
      <header className="bg-brand-600 text-white p-16 pb-32">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-4">{personalInfo.name}</h1>
          <p className="text-2xl font-bold opacity-90 uppercase tracking-widest">{personalInfo.role}</p>
        </div>
      </header>

      <div className="flex-1 flex gap-12 px-16 -mt-16">
        <div className="w-[80mm] space-y-12">
          <div className="bg-white p-8 rounded-[2rem] shadow-xl space-y-8">
             <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-brand-600 mb-4">Fala comigo</h3>
                <div className="space-y-3 text-sm font-medium text-ink-600">
                   <p className="break-all">{personalInfo.email}</p>
                   <p>{personalInfo.phone}</p>
                   <p>{personalInfo.province}</p>
                </div>
             </section>

             <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-brand-600 mb-4">Competências</h3>
                <div className="flex flex-wrap gap-2">
                   {[...(skills?.technical || []), ...(skills?.soft || [])].map((s, i) => (
                     <span key={i} className="text-[10px] font-black uppercase bg-brand-50 text-brand-700 px-2 py-1 rounded-lg">
                       {s}
                     </span>
                   ))}
                </div>
             </section>
          </div>

          <section className="px-8">
             <h3 className="text-xs font-black uppercase tracking-widest text-brand-600 mb-6">Educação</h3>
             <div className="space-y-8">
                {(education || []).map((edu, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-sm text-ink-900">{edu.degree}</h4>
                    <p className="text-xs font-medium text-ink-500">{edu.institution}</p>
                    <p className="text-[10px] font-black text-brand-500 mt-1 uppercase">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
             </div>
          </section>
        </div>

        <div className="flex-1 space-y-16 py-8">
           <section>
              <p className="text-xl font-bold text-ink-800 leading-relaxed italic border-l-4 border-brand-500 pl-8">
                {objective}
              </p>
           </section>

           <section>
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-brand-600 mb-10">Experiência</h2>
              <div className="space-y-12">
                {(experience || []).map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-12 top-2 w-4 h-4 rounded-full bg-brand-200 border-4 border-white shadow-sm" />
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="text-xl font-black text-ink-950 uppercase">{exp.position}</h3>
                       <span className="text-[10px] font-black uppercase text-brand-500 bg-brand-50 px-2 py-1 rounded">
                         {exp.startDate} – {exp.current ? 'Presente' : exp.endDate}
                       </span>
                    </div>
                    <p className="text-sm font-bold text-ink-600 mb-4 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-ink-700 font-medium">{exp.description}</p>
                  </div>
                ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
