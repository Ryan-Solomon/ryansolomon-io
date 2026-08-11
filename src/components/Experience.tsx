import { experience } from '../content';

const Experience = () => {
  return (
    <section id="experience" className="border-t border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="section-heading mb-3">Experience</p>
        <div className="mb-10 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
          <div>
            <h2 className="text-2xl font-bold text-ink-50 sm:text-3xl">
              {experience.role}
            </h2>
            <p className="mt-1 text-lg text-ink-200">{experience.company}</p>
          </div>
          <p className="font-mono text-sm text-ink-400">{experience.dates}</p>
        </div>

        <ul className="grid gap-4 md:grid-cols-2 md:gap-x-10 md:gap-y-5">
          {experience.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-3 text-sm leading-relaxed text-ink-200 sm:text-base"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
