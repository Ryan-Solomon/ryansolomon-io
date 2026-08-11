import { profile } from '../content';
import headshot from '../assets/headshot.jpg';

const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-content flex-col gap-10 px-6 pb-20 pt-16 md:flex-row md:items-center md:justify-between md:gap-12 md:pb-28 md:pt-24"
    >
      <div className="flex max-w-2xl flex-col gap-8">
        <p className="section-heading">
          {profile.location} · {profile.remote}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>

        <p className="font-mono text-base text-accent sm:text-lg">
          {profile.title} — {profile.tagline}
        </p>

        <p className="text-base leading-relaxed text-ink-200 sm:text-lg">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#contact"
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
        </div>
      </div>

      <div className="shrink-0 self-center md:self-auto">
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-accent/20" />
          <img
            src={headshot}
            alt="Ryan Solomon"
            className="relative h-full w-full rounded-2xl border border-ink-700 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
