'use client';

import SmoobuWidget from '@/components/SmoobuWidget';
import { useLanguage } from '@/context/LanguageContext';

const SMOOBU_ACCOUNT_ID = 'YOUR_ACCOUNT_ID';
const SMOOBU_APARTMENT_ID = 'YOUR_APARTMENT_ID';

export default function BookPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-swiss-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-8 md:px-24 max-w-7xl mx-auto mb-16">
        <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-dark/40 mb-6">
          {t.book.label}
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-swiss-dark">
          {t.book.title}
        </h1>
        <p className="mt-6 text-swiss-dark/60 font-light text-lg max-w-xl leading-relaxed">
          {t.book.description}
        </p>
      </section>

      {/* Smoobu booking widget */}
      <section className="px-8 md:px-24 max-w-7xl mx-auto">
        <SmoobuWidget
          accountId={SMOOBU_ACCOUNT_ID}
          apartmentId={SMOOBU_APARTMENT_ID}
        />
      </section>
    </main>
  );
}
