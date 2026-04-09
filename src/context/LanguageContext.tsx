'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Lang, T, translations } from '@/i18n/translations';

interface LanguageContextValue {
  lang: Lang;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  t: translations.en,
});

export function LanguageProvider({
  children,
  initialLocale = 'en',
}: {
  children: ReactNode;
  initialLocale?: Lang;
}) {
  return (
    <LanguageContext.Provider value={{ lang: initialLocale, t: translations[initialLocale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
