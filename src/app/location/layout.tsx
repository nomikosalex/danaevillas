import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location in Fira, Santorini',
  description: 'Danae Villa is nestled in the peaceful Kontochori neighbourhood of Fira — just a 10-minute walk from the Caldera cliffs, iconic sunsets, and the heart of Santorini.',
  openGraph: {
    title: 'Location in Fira, Santorini | Danae Villa',
    description: 'Nestled in peaceful Kontochori, Fira — 10 minutes from the Caldera and all the best of Santorini.',
    url: 'https://danaevilla.eu/location',
  },
  alternates: { canonical: 'https://danaevilla.eu/location' },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
