import type { Metadata } from 'next';
import { Lang } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as Lang;
  return {
    title: 'The Santorini Experience',
    description: 'Discover authentic Santorini at Danae Villa — from traditional breakfasts by the pool to private sunset cruises and curated island excursions.',
    openGraph: { title: 'The Santorini Experience | Danae Villa', url: `https://danaevilla.eu/${lang}/experience` },
    alternates: getAlternates(lang, '/experience'),
  };
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
