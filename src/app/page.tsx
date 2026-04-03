'use client';

import { useEffect, useState } from 'react';

type LinkItem = {
  label: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

function PulseDot() {
  return (
    <span className="relative flex h-[18px] w-[18px] items-center justify-center flex-shrink-0">
      <span className="animate-ping absolute h-3 w-3 rounded-full bg-current opacity-25" />
      <span className="relative h-2 w-2 rounded-full bg-current" />
    </span>
  );
}

const publicLinks: LinkItem[] = [
  {
    label: 'Status',
    href: 'https://status.93.fyi',
    description: 'System uptime',
    icon: <PulseDot />,
  },
  {
    label: 'Now',
    href: 'https://now.93.fyi',
    description: "What I'm up to",
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M9 1a5.5 5.5 0 0 0-5.5 5.5C3.5 11 9 17 9 17s5.5-6 5.5-10.5A5.5 5.5 0 0 0 9 1zm0 7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    ),
  },
  {
    label: 'NWB Workout',
    href: 'https://nfit.93.fyi',
    description: 'MRI-adjusted workout protocol',
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <rect x="0.5" y="7" width="3" height="4" rx="1" />
        <rect x="14.5" y="7" width="3" height="4" rx="1" />
        <rect x="3.5" y="5.5" width="2" height="7" rx="0.75" />
        <rect x="12.5" y="5.5" width="2" height="7" rx="0.75" />
        <rect x="5.5" y="7.75" width="7" height="2.5" rx="1" />
      </svg>
    ),
  },
  {
    label: 'TrickAdvisor',
    href: 'https://ta.93.fyi',
    description: 'Redirect to trickadvisor.cc',
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M9 1.5 16.5 9 9 16.5 1.5 9Z" />
      </svg>
    ),
  },
  {
    label: 'Todo',
    href: 'https://todo.93.fyi',
    description: 'Global task list',
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="2.5" />
        <path d="M5.5 9 8 11.5l4.5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const privateLinks: LinkItem[] = [
  {
    label: 'Seedbox',
    href: 'https://seed.93.fyi',
    description: 'Torrent dashboard',
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm0 1.5a6.5 6.5 0 0 1 4.33 1.67L3.17 13.33A6.5 6.5 0 0 1 9 2.5zm0 13a6.5 6.5 0 0 1-4.33-1.67l10.16-10.16A6.5 6.5 0 0 1 9 15.5z" />
      </svg>
    ),
  },
  {
    label: 'Dashboard',
    href: 'https://me.93.fyi',
    description: 'Private admin',
    icon: (
      <svg width={18} height={18} viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <rect x="2" y="2" width="6" height="6" rx="1.25" />
        <rect x="10" y="2" width="6" height="6" rx="1.25" />
        <rect x="2" y="10" width="6" height="6" rx="1.25" />
        <rect x="10" y="10" width="6" height="6" rx="1.25" />
      </svg>
    ),
  },
];

export default function Home() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    for (const raw of cookies) {
      const [k, v] = raw.trim().split('=');
      if (k === 'hub_auth' && v === 'karl') {
        setAuthed(true);
        break;
      }
    }
  }, []);

  const visibleLinks = authed ? [...publicLinks, ...privateLinks] : publicLinks;

  return (
    <div className="bg-scene min-h-screen text-white flex flex-col">
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Top nav */}
        <nav className="flex justify-end px-6 pt-6">
          <a
            href="https://me.93.fyi"
            className="text-zinc-600 hover:text-[#ff2070] transition-colors duration-200 text-sm font-mono tracking-widest"
          >
            → me
          </a>
        </nav>

        {/* Hero */}
        <header className="flex flex-col items-center justify-center flex-1 px-6 pt-8 pb-4">
          <h1 className="neon-glow font-mono font-bold tracking-tighter text-white select-none
                         text-6xl sm:text-8xl md:text-9xl">
            93.fyi
          </h1>
          <p className="mt-4 text-zinc-600 text-xs tracking-[0.3em] uppercase font-mono">
            personal hub
          </p>
        </header>

        {/* Link cards */}
        <main className="flex justify-center px-4 pb-2">
          <section className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-card group border border-zinc-800 bg-[#0f0808]/50 rounded-lg p-4 flex items-start gap-3"
              >
                <span className="text-zinc-500 group-hover:text-[#ff2070] transition-colors duration-200 mt-0.5 flex-shrink-0">
                  {link.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-medium text-white group-hover:text-[#ff2070] transition-colors duration-200 tracking-tight leading-tight">
                    {link.label}
                  </div>
                  <div className="text-xs text-zinc-500 mt-0.5 leading-snug">
                    {link.description}
                  </div>
                </div>
              </a>
            ))}
          </section>
        </main>

        {/* Social icons row */}
        <div className="flex justify-center gap-4 mt-6 mb-4">
          <a
            href="https://github.com/karlmarx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-600 hover:text-[#ff2070] transition-colors duration-200"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://gitlab.com/karlmarx2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitLab"
            className="text-zinc-600 hover:text-[#ff2070] transition-colors duration-200"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 0 0-.867 0L16.418 9.452H7.582L4.918 1.263a.455.455 0 0 0-.867 0L1.387 9.452.045 13.587a.924.924 0 0 0 .331 1.023L12 23.054l11.624-8.443a.92.92 0 0 0 .331-1.024" />
            </svg>
          </a>
          <a
            href="https://instagram.com/karlmarx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-600 hover:text-[#ff2070] transition-colors duration-200"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer className="relative z-10 flex justify-between items-center px-6 py-5 border-t border-zinc-900 font-mono text-xs text-zinc-600">
          <span>&copy; {new Date().getFullYear()} 93.fyi</span>
          <span className="hover:text-zinc-400 transition-colors duration-200 cursor-default">
            Love is the law, love under will.
          </span>
        </footer>

      </div>
    </div>
  );
}
