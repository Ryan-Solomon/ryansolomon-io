import { education } from '../content';

const Education = () => {
  return (
    <section id="education" className="border-t border-ink-800 bg-ink-900">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="section-heading mb-3">Education</p>
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <h2 className="text-2xl font-bold text-ink-50 sm:text-3xl">
              {education.degree}
            </h2>
            <p className="mt-1 text-lg text-ink-200">{education.school}</p>
          </div>
          <p className="font-mono text-sm text-ink-400">{education.detail}</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
