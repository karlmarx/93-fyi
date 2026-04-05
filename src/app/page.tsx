import { headers } from 'next/headers';
import ClientShell from './ClientShell';

const PUBLIC_LINKS = [
  { name: 'Status', href: 'https://status.93.fyi' },
  { name: 'Now', href: 'https://now.93.fyi' },
  { name: 'NWB Workout', href: 'https://nfit.93.fyi' },
  { name: 'NWB Yoga', href: 'https://nyoga.93.fyi' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/karlmarx', icon: 'github' },
  { name: 'GitLab', href: 'https://gitlab.com/karlmarx2', icon: 'gitlab' },
  { name: 'Instagram', href: 'https://instagram.com/karlmarx9193', icon: 'instagram' },
];

const PRIVATE_LINKS: Record<string, { name: string; href: string }[]> = {
  'karlmarx9193@gmail.com': [
    { name: 'Home Assistant', href: 'https://ha.93.fyi' },
    { name: 'TrickAdvisor', href: 'https://ta.93.fyi' },
    { name: 'Seedbox', href: 'https://seed.93.fyi' },
    { name: 'Dashboard', href: 'https://me.93.fyi' },
    { name: 'Todo', href: 'https://todo.93.fyi' },
  ],
  'brian.mina17@gmail.com': [
    { name: 'Home Assistant', href: 'https://ha.93.fyi' },
  ],
};

export default async function Home() {
  const hdrs = await headers();
  const userEmail = hdrs.get('x-user-email') || '';
  const privateLinks = PRIVATE_LINKS[userEmail] || [];
  const isAuthenticated = privateLinks.length > 0;

  return (
    <ClientShell
      publicLinks={PUBLIC_LINKS}
      socialLinks={SOCIAL_LINKS}
      privateLinks={privateLinks}
      isAuthenticated={isAuthenticated}
    />
  );
}
