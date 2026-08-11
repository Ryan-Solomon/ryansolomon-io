import { skills } from '../content';

const Skills = () => {
  return (
    <section id="skills" className="border-t border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="section-heading mb-3">Technical Strengths</p>
        <h2 className="mb-10 text-2xl font-bold text-ink-50 sm:text-3xl">
          Skills & tools
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 font-mono text-sm font-medium text-accent">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-ink-800 px-3 py-1.5 text-sm text-ink-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
