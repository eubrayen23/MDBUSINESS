import { CVContent } from '@/types/cv.types';

export function TemplateExecutive({ data }: { data: CVContent }) {
  const { personalInfo, objective, experience, education, skills } = data;

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans">
      <header className="bg-ink-950 text-white p-16 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tight mb-2">{personalInfo.name}</h1>
          <p className="text-xl font-bold text-brand-500 uppercase tracking-[0.3em]">{personalInfo.role}</p>
        </div>
        <div className="text-right text-sm font-medium opacity-70">
           <p>{personalInfo.email}</p>
           <p>{personalInfo.phone}</p>
           <p>{personalInfo.province}, Angola</p>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12">
         <div className="col-span-4 bg-ink-50 p-12 border-r border-ink-100 space-y-12">
            <section>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink-400 mb-6">Educação Executiva</h3>
               <div className="space-y-6">
                  {(education || []).map((edu, i) => (
                    <div key={i}>
                       <h4 className="font-black text-sm uppercase text-ink-900">{edu.degree}</h4>
                       <p className="text-xs font-bold text-ink-600">{edu.institution}</p>
                       <p className="text-[10px] font-black text-ink-400 mt-1 uppercase">{edu.startDate} – {edu.endDate}</p>
                    </div>
                  ))}
               </div>
            </section>

            <section>
               <h3 className="text-xs font-black uppercase tracking-[0.2em] text-ink-400 mb-6">Liderança & Core</h3>
               <div className="space-y-3">
                  {(skills?.technical || []).map((s, i) => (
                    <div key={i} className="flex items-center gap-3">
                       <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                       <span className="text-xs font-bold uppercase text-ink-800">{s}</span>
                    </div>
                  ))}
               </div>
            </section>
         </div>

         <div className="col-span-8 p-16 space-y-16">
            <section>
               <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-600 mb-6 italic">Executive Summary</h2>
               <p className="text-lg font-medium leading-relaxed text-ink-800 border-l-2 border-brand-500 pl-8">
                 {objective}
               </p>
            </section>

            <section>
               <h2 className="text-xs font-black uppercase tracking-[0.4em] text-brand-600 mb-10">Trajectória Profissional</h2>
               <div className="space-y-12">
                  {(experience || []).map((exp, i) => (
                    <div key={i}>
                       <div className="flex justify-between items-baseline mb-2">
                          <h3 className="text-2xl font-black uppercase text-ink-950">{exp.position}</h3>
                          <span className="text-xs font-black text-ink-400 uppercase tracking-widest">
                            {exp.startDate} — {exp.current ? 'Presente' : exp.endDate}
                          </span>
                       </div>
                       <p className="text-sm font-black text-brand-600 mb-6 uppercase tracking-widest">{exp.company}</p>
                       <p className="text-sm leading-relaxed font-medium text-ink-700">{exp.description}</p>
                    </div>
                  ))}
               </div>
            </section>
         </div>
      </div>
    </div>
  );
}
