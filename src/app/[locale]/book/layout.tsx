import type { Metadata } from 'next';
import { Lang } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as Lang;
  return {
    title: 'Book Your Stay',
    description: 'Reserve your stay at Danae Villa, Santorini. Check live availability and book directly — no middleman, best rate guaranteed.',
    openGraph: { title: 'Book Your Stay | Danae Villa Santorini', url: `https://danaevilla.com/${lang}/book` },
    alternates: getAlternates(lang, '/book'),
  };
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
