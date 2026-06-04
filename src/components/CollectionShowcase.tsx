import { useTranslation } from 'react-i18next';
import { useInView } from '../hooks/useInView';

const PROJECTS = [
  {
    title: "evr",
    desc: "From idea to millions raised for a web3 AI product",
    gif: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif"
  },
  {
    title: "Automation Machines",
    desc: "Streamlining industrial automation processes",
    gif: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif"
  },
  {
    title: "xPortfolio",
    desc: "Modern portfolio management platform",
    gif: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif"
  }
];

export default function CollectionShowcase() {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24 flex flex-col gap-24 md:gap-32">
      {PROJECTS.map((proj, i) => (
        <ProjectItem key={i} project={proj} />
      ))}
    </section>
  );
}

function ProjectItem({ project }: { project: typeof PROJECTS[0] }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref as any}
      className={`flex flex-col gap-8 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      <div className="ml-0 md:ml-28 max-w-md">
        <h3 className="font-mondwest text-2xl md:text-3xl font-semibold text-studio-dark mb-2">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-studio-dark/70">
          {project.desc}
        </p>
      </div>
      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-float">
        <img
          src={project.gif}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
