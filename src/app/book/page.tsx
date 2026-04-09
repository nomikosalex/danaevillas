import SmoobuWidget from '@/components/SmoobuWidget';

export const metadata = {
  title: 'Book Your Stay | Danae Villa Santorini',
  description: 'Check availability and book your stay at Danae Villa, Santorini.',
};

// Replace these with your real Smoobu account and apartment IDs
// Found in Smoobu > Configuration > Accommodations > Embed in Website
const SMOOBU_ACCOUNT_ID = 'YOUR_ACCOUNT_ID';
const SMOOBU_APARTMENT_ID = 'YOUR_APARTMENT_ID';

export default function BookPage() {
  return (
    <main className="bg-swiss-white min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="px-8 md:px-24 max-w-7xl mx-auto mb-16">
        <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-dark/40 mb-6">
          Reserve Your Stay
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-swiss-dark">
          Book Danae Villa
        </h1>
        <p className="mt-6 text-swiss-dark/60 font-light text-lg max-w-xl leading-relaxed">
          Check live availability and book directly — no middleman, best rate guaranteed.
        </p>
      </section>

      {/* Smoobu booking widget */}
      <section className="px-8 md:px-24 max-w-7xl mx-auto">
        {/*
          Smoobu injects its own UI into this component.
          To customize colours, go to:
          Smoobu > Configuration > Booking Engine > Booking System Settings > Custom Style
        */}
        <SmoobuWidget
          accountId={SMOOBU_ACCOUNT_ID}
          apartmentId={SMOOBU_APARTMENT_ID}
        />
      </section>
    </main>
  );
}
