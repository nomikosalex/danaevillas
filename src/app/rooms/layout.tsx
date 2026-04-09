import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rooms & Suites',
  description: 'Explore our collection of traditional Santorini suites at Danae Villa in Fira. Whitewashed elegance, modern comfort, and authentic Cycladic character — book directly for the best rate.',
  openGraph: {
    title: 'Rooms & Suites | Danae Villa Santorini',
    description: 'Explore our collection of traditional Santorini suites at Danae Villa in Fira.',
    url: 'https://danaevilla.eu/rooms',
  },
  alternates: { canonical: 'https://danaevilla.eu/rooms' },
};

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
