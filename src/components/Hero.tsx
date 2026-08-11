import { profile } from '../content';

const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-content flex-col gap-8 px-6 pb-20 pt-16 md:pb-28 md:pt-24"
    >
      <p className="section-heading">{profile.location} · {profile.remote}</p>

      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>

      <p className="max-w-2xl font-mono text-base text-accent sm:text-lg">
        {profile.title} — {profile.tagline}
      </p>

      <p className="max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
        {profile.summary}
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeHref}
          download
          className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-semibold text-ink-50 transition-colors hover:border-accent hover:text-accent"
        >
          Download résumé
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-semibold text-ink-50 transition-colors hover:border-accent hover:text-accent"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-semibold text-ink-50 transition-colors hover:border-accent hover:text-accent"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Hero;
