import { headers } from 'next/headers';
import ClientShell from './ClientShell';

// Big tiles: the sites other people actually use.
const FEATURED = [
  { name: 'Score Parity', href: 'https://score.93.fyi', emoji: '🔢', desc: 'Odd or even: where to stand in doubles' },
  { name: 'LT Pro 48 Balls', href: 'https://balls.93.fyi', emoji: '🟡', desc: 'Ball proposal for LT Pro 48' },
  { name: 'Drill Partner', href: 'https://drill.93.fyi', emoji: '🎯', desc: 'Drill picker and scoreboard for two players' },
  { name: 'Volley Parton', href: 'https://volleyparton.org', emoji: '🏳️‍🌈', desc: 'Our Pride Sports USA pickleball team' },
  { name: 'Infra', href: 'https://github.com/karlmarx/karl-infra', emoji: '🗺️', desc: 'Map of all my apps, automation and hosting' },
];

// Plain links under the tiles: public, but mostly useful to me.
const MORE_LINKS = [
  { name: 'Injury-Specific Drills', href: 'https://pwbpb.93.fyi' },
  { name: 'NWB Workout', href: 'https://nfit.93.fyi' },
  { name: 'NWB Yoga', href: 'https://nyoga.93.fyi' },
  { name: 'Thumb-Fit', href: 'https://thumbfit.93.fyi' },
  { name: 'Thumb Yoga', href: 'https://thumbyoga.93.fyi' },
  { name: 'Suspect', href: 'https://suspect.93.fyi' },
  { name: 'Layover (for Mom)', href: 'https://layover.93.fyi' },
  { name: 'Status', href: 'https://status.93.fyi' },
  { name: 'Automation', href: 'https://auto.93.fyi' },
];

const PROJECTS = [
  {
    host: 'mom.93.fyi',
    href: 'https://mom.93.fyi',
    description:
      'A small private app I built for my mother, who is going through a bed bug remediation plan. She uses it daily to track loads, follow steps, and text questions she has about the plan to a number that replies with answers.',
    cta: 'Open the app',
    legal: [
      { name: 'Privacy', href: 'https://mom.93.fyi/privacy' },
      { name: 'SMS terms', href: 'https://mom.93.fyi/sms-terms' },
    ],
  },
  {
    host: 'bedbug.93.fyi',
    href: 'https://bedbug.93.fyi',
    description:
      'Webhook + answer endpoint backing the SMS feature on mom.93.fyi. Receives texts, looks up the right step in the remediation plan, and replies.',
  },
  {
    host: 'house.93.fyi',
    href: 'https://house.93.fyi',
    description:
      'Shared household tracker — chores, recurring tasks, and the running list of what needs doing this week.',
  },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com/karlmarx', icon: 'github' },
  { name: 'GitLab', href: 'https://gitlab.com/karlmarx2', icon: 'gitlab' },
  { name: 'Instagram', href: 'https://instagram.com/karlmarx9193', icon: 'instagram' },
];

const PRIVATE_LINKS: Record<string, { name: string; href: string }[]> = {
  'karlmarx9193@gmail.com': [
    { name: 'Where', href: 'https://where.93.fyi' },
    { name: 'Go (directions)', href: 'https://go.93.fyi' },
    { name: 'Ortho', href: 'https://ortho.93.fyi' },
    { name: 'Command', href: 'https://command.93.fyi' },
    { name: 'Scout', href: 'https://scout.93.fyi' },
    { name: 'Voice compare', href: 'https://fake.93.fyi' },
    { name: 'Contact', href: 'https://contact.93.fyi' },
    { name: 'ID', href: 'https://id.93.fyi' },
    { name: 'Hot', href: 'https://hot.93.fyi' },
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
      projects={PROJECTS}
      featured={FEATURED}
      moreLinks={MORE_LINKS}
      socialLinks={SOCIAL_LINKS}
      privateLinks={privateLinks}
      isAuthenticated={isAuthenticated}
    />
  );
}
