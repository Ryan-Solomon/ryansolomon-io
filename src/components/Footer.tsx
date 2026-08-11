import { profile } from '../content';

const Footer = () => {
  return (
    <footer className="border-t border-ink-800">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-400 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono text-xs">
          Built with React, TypeScript & Vite
        </p>
      </div>
    </footer>
  );
};

export default Footer;
