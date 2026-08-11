import { useState } from 'react';
import { profile } from '../content';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex overflow-hidden rounded-md bg-accent">
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-accent-soft"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy email address"
              title="Copy email address"
              className="flex items-center border-l border-ink-950/20 px-3 text-ink-950 transition-colors hover:bg-accent-soft"
            >
              {copied ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.16 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                  <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                </svg>
              )}
            </button>
          </div>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-ink-600 px-5 py-2.5 text-sm font-semibold text-ink-50 transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <span
            role="status"
            aria-live="polite"
            className={`text-sm text-accent transition-opacity ${
              copied ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Copied!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
