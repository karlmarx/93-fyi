'use client';

import { useEffect, useState, type ReactNode } from 'react';

// ── SVG Icons ─────────────────────────────────────────────────────────────────

function IconStatus() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
    </svg>
  );
}

function IconDumbbell() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z" />
    </svg>
  );
}

function IconDiamond() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5L21.5 12 12 21.5 2.5 12z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconGitLab() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 014.82 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0118.6 2a.43.43 0 01.58 0 .42.42 0 01.11.18l2.44 7.51L23 13.45a.84.84 0 01-.35.94z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconWaves() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M2 7c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 12c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
      <path d="M2 17c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

// ── Types & data ──────────────────────────────────────────────────────────────

type LinkDef = {
  label: string;
  href: string;
  description: string;
  icon: ReactNode;
};

const publicLinks: LinkDef[] = [
  { label: 'Status',      href: 'https://status.93.fyi', description: 'System uptime',                icon: <IconStatus /> },
  { label: 'Now',         href: 'https://now.93.fyi',    description: "What I'm up to",               icon: <IconPin /> },
  { label: 'NWB Workout', href: 'https://nfit.93.fyi',   description: 'MRI-adjusted workout protocol', icon: <IconDumbbell /> },
];

const socialLinks: LinkDef[] = [
  { label: 'GitHub',    href: 'https://github.com/karlmarx',        description: 'Development and projects',   icon: <IconGitHub /> },
  { label: 'GitLab',    href: 'https://gitlab.com/karlmarx2',       description: 'Version control repository', icon: <IconGitLab /> },
  { label: 'Instagram', href: 'https://instagram.com/karlmarx9193', description: 'Photos and life',            icon: <IconInstagram /> },
];

const privateLinks: LinkDef[] = [
  { label: 'TrickAdvisor', href: 'https://ta.93.fyi',     description: 'Rate · Review · Anonymous', icon: <IconDiamond /> },
  { label: 'Seedbox',      href: 'https://seed.93.fyi',   description: 'Torrent dashboard',         icon: <IconWaves /> },
  { label: 'Dashboard',    href: 'https://me.93.fyi',     description: 'Private admin',             icon: <IconBolt /> },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function LinkCard({ link, iconAccent = false }: { link: LinkDef; iconAccent?: boolean }) {
  return (
    <a
      href={link.href}
      className={`link-card group border border-zinc-800 rounded-xl p-5 flex items-start gap-4 bg-[#0f0808]/50 ${
        iconAccent ? 'bg-[#0f0808]/60' : ''
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 text-[#ff2070] ${
          iconAccent ? 'bg-[#ff2070]/15' : 'bg-[#ff2070]/10'
        }`}
      >
        {link.icon}
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="font-medium text-white group-hover:text-[#ff2070] transition-colors duration-200 tracking-tight leading-tight text-sm">
          {link.label}
        </div>
        <div className="text-xs text-zinc-500 mt-0.5 leading-snug">
          {link.description}
        </div>
      </div>
    </a>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="h-px flex-1 bg-zinc-800/60" />
      <span className="text-zinc-600 text-[10px] tracking-[0.25em] uppercase font-mono">{label}</span>
      <div className="h-px flex-1 bg-zinc-800/60" />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [showPrivate, setShowPrivate] = useState(false);

  useEffect(() => {
    const match = document.cookie.split(';').find(c => c.trim().startsWith('hub_auth='));
    if (match && match.split('=')[1]?.trim() === 'karl') {
      setShowPrivate(true);
    }
  }, []);

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
        <main className="flex justify-center px-4 pb-12">
          <div className="w-full max-w-2xl space-y-4">

            {/* Public utility + project links */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {publicLinks.map(link => (
                <LinkCard key={link.label} link={link} />
              ))}
            </section>

            {/* Social links */}
            <section className="space-y-3">
              <SectionDivider label="social" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {socialLinks.map(link => (
                  <LinkCard key={link.label} link={link} iconAccent />
                ))}
              </div>
            </section>

            {/* Private links — only shown when hub_auth=karl cookie is present */}
            {showPrivate && (
              <section className="space-y-3">
                <SectionDivider label="private" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {privateLinks.map(link => (
                    <LinkCard key={link.label} link={link} />
                  ))}
                </div>
              </section>
            )}

          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 flex justify-center items-center px-6 py-5 border-t border-zinc-900 font-mono text-xs text-zinc-600">
          <span>&copy; {new Date().getFullYear()} 93.fyi</span>
        </footer>

      </div>
    </div>
  );
}
