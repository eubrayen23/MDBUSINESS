import { PersonalInfo } from './sections/PersonalInfo';
import { Summary } from './sections/Summary';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
export function CVEditor() {
  return (
    <div className="space-y-6">
      <PersonalInfo />
      <Summary />
      <Experience />
      <Education />
      <Skills />
    </div>
  );
}
