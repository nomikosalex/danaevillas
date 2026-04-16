import { Lang, LOCALES } from '@/i18n/translations';

export const SITE_URL = 'https://danaevilla.com';

const HREFLANG: Record<Lang, string> = {
  en: 'en',
  el: 'el',
  it: 'it',
  fr: 'fr',
  de: 'de',
  zh: 'zh-Hans',
};

/** Returns alternates metadata with self-referencing canonical + full hreflang set. */
export function getAlternates(locale: Lang, path = '') {
  const languages: Record<string, string> = {
    'x-default': `${SITE_URL}/en${path}`,
  };
  for (const l of LOCALES) {
    languages[HREFLANG[l]] = `${SITE_URL}/${l}${path}`;
  }
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages,
  };
}
