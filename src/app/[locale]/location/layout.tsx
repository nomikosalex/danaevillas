import type { Metadata } from 'next';
import { Lang } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as Lang;
  return {
    title: 'Location in Fira, Santorini',
    description: 'Danae Villa is nestled in the peaceful Kontochori neighbourhood of Fira — just a 10-minute walk from the Caldera cliffs, iconic sunsets, and the heart of Santorini.',
    openGraph: { title: 'Location in Fira, Santorini | Danae Villa', url: `https://danaevilla.com/${lang}/location` },
    alternates: getAlternates(lang, '/location'),
  };
}

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
