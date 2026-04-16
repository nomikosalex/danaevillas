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

        {/* Direct booking buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href={`mailto:danaevilla.01@gmail.com?subject=Booking%20Request%20%E2%80%93%20Danae%20Villa&body=Hello%2C%0A%0AI%20would%20like%20to%20make%20a%20booking%20inquiry%20at%20Danae%20Villa.%0A%0AName%3A%0ACheck-in%20date%3A%0ACheck-out%20date%3A%0ANumber%20of%20guests%3A%0A%0AThank%20you`}
            className="inline-flex items-center justify-center gap-3 border border-swiss-dark/20 px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-swiss-dark hover:bg-swiss-dark hover:text-swiss-white transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Book via Email
          </a>
          <a
            href="https://wa.me/306955152317?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20Danae%20Villa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-[#25D366] border border-[#25D366] px-8 py-4 text-[11px] uppercase tracking-[0.3em] text-white hover:bg-[#1ebe5d] transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book via WhatsApp
          </a>
        </div>
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
