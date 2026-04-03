'use client';

import { useEffect, useState } from 'react';

const publicLinks = [
  {
    label: 'Status',
    href: 'https://status.93.fyi',
    description: 'System uptime',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4"/>
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    label: 'Now',
    href: 'https://now.93.fyi',
    description: "What I'm up to",
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
  {
    label: 'Dashboard',
    href: 'https://me.93.fyi',
    description: 'Private admin',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
      </svg>
    ),
  },
  {
    label: 'Todo',
    href: 'https://todo.93.fyi',
    description: 'Global task list',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
  },
  {
    label: 'TrickAdvisor',
    href: 'https://ta.93.fyi',
    description: 'Rate · Review · Anonymous',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L8.5 8.5 2 9.27l4.5 4.38L5.18 20 12 16.54 18.82 20l-1.32-6.35L22 9.27l-6.5-.77z"/>
      </svg>
    ),
  },
  {
    label: 'NWB Workout',
    href: 'https://nfit.93.fyi',
    description: 'MRI-adjusted workout protocol',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
      </svg>
    ),
  },
];

const privateLinks = [
  {
    label: 'Seedbox',
    href: 'https://seed.93.fyi',
    description: 'Torrent dashboard',
    icon: (
      <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </svg>
    ),
  },
];

const socialLinks = [
  {
    href: 'https://github.com/karlmarx',
    label: 'GitHub',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    href: 'https://gitlab.com/karlmarx2',
    label: 'GitLab',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.49a.42.42 0 01.11-.18.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z"/>
      </svg>
    ),
  },
  {
    href: 'https://instagram.com/karlmarx9193',
    label: 'Instagram',
    icon: (
      <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

export default function Home() {
  const [showPrivate, setShowPrivate] = useState(false);

  useEffect(() => {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const authCookie = cookies.find(c => c.startsWith('hub_auth='));
    if (authCookie && authCookie.split('=')[1] === 'karl') {
      setShowPrivate(true);
    }
  }, []);

  const allLinks = showPrivate ? [...publicLinks, ...privateLinks] : publicLinks;

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
          <h1 className="neon-glow font-mono font-bold tracking-tighter text-white select-none text-6xl sm:text-8xl md:text-9xl">
            93.fyi
          </h1>
          <p className="mt-4 text-zinc-600 text-xs tracking-[0.3em] uppercase font-mono">
            personal hub
          </p>
        </header>

        {/* Link cards */}
        <main className="flex flex-col items-center px-4 pb-4">
          <section className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-card group border border-zinc-800 bg-[#0f0808]/50 rounded-lg p-4 flex items-start gap-3 hover:border-[#ff207044] transition-all duration-200"
                style={{ boxShadow: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 12px rgba(255,32,112,0.08)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <span className="mt-0.5 flex-shrink-0 text-zinc-500 group-hover:text-[#ff2070] transition-colors duration-200">
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

          {/* Social icons row */}
          <div className="flex justify-center gap-5 mt-6 mb-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-[#ff2070] transition-colors duration-200"
                title={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </main>

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
