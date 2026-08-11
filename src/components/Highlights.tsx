import { highlights } from '../content';

const Highlights = () => {
  return (
    <section id="highlights" className="border-t border-ink-800 bg-ink-900">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="section-heading mb-3">Selected Work</p>
        <h2 className="mb-10 max-w-2xl text-2xl font-bold text-ink-50 sm:text-3xl">
          Highlights from 5.5 years on a live healthcare platform
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-lg border border-ink-700 bg-ink-950 p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="text-base font-semibold text-ink-50">
                {item.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-200">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-ink-600 px-2.5 py-1 font-mono text-xs text-ink-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
