import { CVContent } from '@/types/cv.types';
import { cn } from '@/lib/utils';

interface TemplateProps {
  data: CVContent;
  colorScheme?: string;
  fontFamily?: string;
}

export function TemplateModern({ data, colorScheme = 'brand', fontFamily = 'inter' }: TemplateProps) {
  const { personalInfo, objective, experience, education, skills, languages } = data;

  return (
    <div className={cn("w-full h-full flex bg-white text-ink-900", fontFamily)}>
      <div className="w-[75mm] bg-ink-950 text-white p-10 h-full flex flex-col">
        {personalInfo.photo_url && (
          <div className="mb-8 overflow-hidden rounded-2xl aspect-square bg-ink-800">
             <img src={personalInfo.photo_url} alt={personalInfo.name} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="space-y-8">
           <section>
             <h3 className="text-xs font-black uppercase tracking-widest text-brand-500 mb-4">Contacto</h3>
             <div className="space-y-3 text-sm opacity-80 font-medium">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.province}, Angola</p>
                {personalInfo.linkedin && <p className="truncate">{personalInfo.linkedin}</p>}
             </div>
           </section>

           <section>
             <h3 className="text-xs font-black uppercase tracking-widest text-brand-500 mb-4">Competências</h3>
             <div className="flex flex-wrap gap-2">
                {[...(skills?.technical || []), ...(skills?.soft || [])].map((s, i) => (
                  <span key={i} className="text-[10px] bg-white/10 px-2 py-1 rounded font-bold uppercase tracking-tight">
                    {s}
                  </span>
                ))}
             </div>
           </section>

           <section>
             <h3 className="text-xs font-black uppercase tracking-widest text-brand-500 mb-4">Idiomas</h3>
             <div className="space-y-2 text-sm opacity-80">
                {(languages || []).map((l, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span>{l.language}</span>
                    <span className="text-[10px] font-bold uppercase">{l.level}</span>
                  </div>
                ))}
             </div>
           </section>
        </div>
      </div>

      <div className="flex-1 p-12">
        <header className="mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">{personalInfo.name}</h1>
          <p className="text-xl font-bold text-brand-600 uppercase tracking-widest">{personalInfo.role}</p>
        </header>

        <section className="mb-12">
           <h2 className="text-sm font-black uppercase tracking-[0.2em] text-ink-400 border-b border-ink-100 pb-2 mb-6">Perfil</h2>
           <p className="text-sm leading-relaxed font-medium text-ink-700">{objective}</p>
        </section>

        <section className="mb-12">
           <h2 className="text-sm font-black uppercase tracking-[0.2em] text-ink-400 border-b border-ink-100 pb-2 mb-6">Experiência Profissional</h2>
           <div className="space-y-8">
              {(experience || []).map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-black text-ink-950 uppercase tracking-tight">{exp.position}</h3>
                      <p className="text-sm font-bold text-brand-600">{exp.company}</p>
                    </div>
                    <span className="text-xs font-black text-ink-400 uppercase">
                      {exp.startDate} — {exp.current ? 'Presente' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-ink-600 font-medium">{exp.description}</p>
                </div>
              ))}
           </div>
        </section>

        <section>
           <h2 className="text-sm font-black uppercase tracking-[0.2em] text-ink-400 border-b border-ink-100 pb-2 mb-6">Educação</h2>
           <div className="space-y-6">
              {(education || []).map((edu, i) => (
                <div key={i}>
                  <h3 className="font-black text-ink-950 uppercase tracking-tight">{edu.degree}</h3>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs font-bold text-ink-600">{edu.institution}</p>
                    <span className="text-[10px] font-black text-ink-400 uppercase">{edu.startDate} — {edu.endDate}</span>
                  </div>
                </div>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
}
