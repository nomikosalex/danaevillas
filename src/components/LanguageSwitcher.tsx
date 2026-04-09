'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { Lang } from '@/i18n/translations';

const LANGUAGES: { code: Lang; flag: string; label: string }[] = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'el', flag: '🇬🇷', label: 'Ελληνικά' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'fr', flag: '🇫🇷', label: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'zh', flag: '🇨🇳', label: '中文' },
];

export default function LanguageSwitcher() {
  const { lang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname(); // e.g. '/en/rooms'

  const switchLang = (newLocale: Lang) => {
    const segments = pathname.split('/'); // ['', 'en', 'rooms']
    segments[1] = newLocale;             // ['', 'el', 'rooms']
    router.push(segments.join('/') || '/');
  };

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map(({ code, flag, label }) => (
        <button
          key={code}
          onClick={() => switchLang(code)}
          title={label}
          aria-label={`Switch to ${label}`}
          className={`text-base leading-none transition-all duration-200 select-none
            ${lang === code
              ? 'opacity-100 scale-110'
              : 'opacity-30 hover:opacity-70 hover:scale-105'
            }`}
        >
          {flag}
        </button>
      ))}
    </div>
  );
}
