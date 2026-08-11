import { profile } from '../content';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-ink-800">
      <div className="mx-auto max-w-content px-6 py-20 md:py-28">
        <p className="section-heading mb-3">Contact</p>
        <h2 className="mb-4 max-w-xl text-2xl font-bold text-ink-50 sm:text-3xl">
          Let's talk about your team's next hire
        </h2>
        <p className="mb-8 max-w-xl text-base leading-relaxed text-ink-200">
          Open to full-stack and frontend-architecture roles, remote or in
          Knoxville, TN. Reach out by email or LinkedIn — happy to walk
          through any of the work above in more detail.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.02]"
          >
            {profile.email}
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
      </div>
    </section>
  );
};

export default Contact;
