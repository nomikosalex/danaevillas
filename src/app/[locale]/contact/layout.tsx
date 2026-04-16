import type { Metadata } from 'next';
import { Lang } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = locale as Lang;
  return {
    title: 'Contact & Reservations',
    description: 'Get in touch with Danae Villa in Santorini. Send a reservation enquiry, arrange private transfers, or ask about special requests. We respond personally within 24 hours.',
    openGraph: { title: 'Contact & Reservations | Danae Villa Santorini', url: `https://danaevilla.com/${lang}/contact` },
    alternates: getAlternates(lang, '/contact'),
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
