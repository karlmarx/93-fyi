import Link from 'next/link';

export default function Home() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/karlmarx', description: 'Development and projects' },
    { label: 'GitLab', href: 'https://gitlab.com/karlmarx2', description: 'Version control repository' },
    { label: 'TrickAdvisor', href: 'https://ta.93.fyi', description: 'Redirect to trickadvisor.cc' },
    { label: 'NWB Workout Plan', href: 'https://nfit.93.fyi', description: 'MRI-adjusted workout protocol' },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col items-center justify-center p-8 font-mono">
      <main className="max-w-2xl w-full">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">93.fyi</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            A minimalist domain serving as a hub for various projects and personal shortcuts. 
            The number was randomly selected for its brevity and cost-efficiency.
          </p>
        </header>

        <section className="space-y-6">
          {links.map((link) => (
            <div key={link.label} className="group relative border border-zinc-800 p-6 rounded-lg transition-all hover:bg-zinc-900 hover:border-zinc-700">
              <Link href={link.href} className="flex flex-col gap-1">
                <span className="text-xl font-medium tracking-tight group-hover:underline">
                  {link.label}
                </span>
                <span className="text-sm text-zinc-500">{link.description}</span>
                <span className="mt-2 text-xs text-zinc-600 truncate">{link.href}</span>
              </Link>
            </div>
          ))}
        </section>

        <footer className="mt-16 pt-8 border-t border-zinc-900 text-xs text-zinc-600 flex justify-between">
          <span>&copy; {new Date().getFullYear()} 93.fyi</span>
          <span className="hover:text-zinc-400 cursor-default transition-colors">
            Love is the law, love under will.
          </span>
        </footer>
      </main>
    </div>
  );
}
