import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/app/providers';
import { Lang, LOCALES } from '@/i18n/translations';
import { getAlternates } from '@/lib/hreflang';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Lang)) return {};
  return { alternates: getAlternates(locale as Lang) };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Lang)) notFound();

  return (
    <Providers initialLocale={locale as Lang}>
      <Navbar />
      {children}
      <Footer />
    </Providers>
  );
}
