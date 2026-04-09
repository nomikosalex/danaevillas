import type { Metadata } from 'next';
import { Lang } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as Lang;
  return {
    title: 'Rooms & Suites',
    description: 'Explore our collection of traditional Santorini suites at Danae Villa in Fira. Whitewashed elegance, modern comfort, and authentic Cycladic character — book directly for the best rate.',
    openGraph: { title: 'Rooms & Suites | Danae Villa Santorini', url: `https://danaevilla.eu/${lang}/rooms` },
    alternates: getAlternates(lang, '/rooms'),
  };
}

export default function RoomsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
