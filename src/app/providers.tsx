'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import { Lang } from '@/i18n/translations';
import { ReactNode } from 'react';

export default function Providers({
  children,
  initialLocale,
}: {
  children: ReactNode;
  initialLocale?: Lang;
}) {
  return <LanguageProvider initialLocale={initialLocale}>{children}</LanguageProvider>;
}
