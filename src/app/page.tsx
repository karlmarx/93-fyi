const links = [
  { label: 'Status',          href: 'https://status.93.fyi',          description: 'System uptime',               icon: '🟢' },
  { label: 'Now',             href: 'https://now.93.fyi',             description: "What I'm up to",              icon: '📍' },
  { label: 'Seedbox',         href: 'https://seed.93.fyi',            description: 'Torrent dashboard',           icon: '🌊' },
  { label: 'Dashboard',       href: 'https://me.93.fyi',              description: 'Private admin',               icon: '⚡' },
  { label: 'Todo',            href: 'https://todo.93.fyi',            description: 'Global task list',            icon: '✅' },
  { label: 'GitHub',          href: 'https://github.com/karlmarx',    description: 'Development and projects',    icon: '🐙' },
  { label: 'GitLab',          href: 'https://gitlab.com/karlmarx2',  description: 'Version control repository',  icon: '🦊' },
  { label: 'TrickAdvisor',    href: 'https://ta.93.fyi',              description: 'Redirect to trickadvisor.cc', icon: '🃏' },
  { label: 'NWB Workout',     href: 'https://nfit.93.fyi',            description: 'MRI-adjusted workout protocol', icon: '💪' },
];

export default function Home() {
  return (
    <div className="bg-scene min-h-screen text-white flex flex-col">
      {/* Content sits above the ::before/::after pseudo-elements */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Top nav — subtle login link */}
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
        <main className="flex justify-center px-4 pb-12">
          <section className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="link-card group border border-zinc-800 bg-[#0f0808]/50 rounded-lg p-4 flex items-start gap-3"
              >
                <span className="text-xl mt-0.5 flex-shrink-0" aria-hidden="true">
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
