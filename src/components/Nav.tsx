import { useEffect, useState } from 'react';
import { nav, profile } from '../content';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? 'border-ink-700 bg-ink-950/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-lg font-semibold tracking-tight text-ink-50"
        >
          Ryan<span className="text-accent">.</span>Solomon
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-200 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            download
            className="rounded-md border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-600 text-ink-50 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink-700 bg-ink-950 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-ink-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            download
            onClick={() => setOpen(false)}
            className="mt-2 w-fit rounded-md border border-accent/40 px-3 py-1.5 text-sm font-medium text-accent"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Nav;
