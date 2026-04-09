import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Your Stay',
  description: 'Reserve your stay at Danae Villa, Santorini. Check live availability and book directly — no middleman, best rate guaranteed.',
  openGraph: {
    title: 'Book Your Stay | Danae Villa Santorini',
    description: 'Check live availability and book directly at Danae Villa — no middleman, best rate guaranteed.',
    url: 'https://danaevilla.eu/book',
  },
  alternates: { canonical: 'https://danaevilla.eu/book' },
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
