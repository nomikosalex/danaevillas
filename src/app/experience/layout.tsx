import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Santorini Experience',
  description: 'Discover authentic Santorini at Danae Villa — from traditional breakfasts by the pool to private sunset cruises and curated island excursions. Stealth luxury, your way.',
  openGraph: {
    title: 'The Santorini Experience | Danae Villa',
    description: 'From traditional breakfasts by the pool to private sunset cruises — authentic Santorini at Danae Villa.',
    url: 'https://danaevilla.eu/experience',
  },
  alternates: { canonical: 'https://danaevilla.eu/experience' },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
