'use client';

import RoomSection from "@/components/RoomSection";
import { useLanguage } from "@/context/LanguageContext";

export default function RoomsPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-swiss-white min-h-screen">
      {/* Header Space */}
      <div className="h-32 bg-swiss-dark" />

      <section className="py-24 px-8 md:px-24 bg-swiss-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl text-swiss-white mb-8">{t.roomsPage.title}</h1>
          <p className="text-swiss-gray/60 font-light text-lg md:text-xl leading-relaxed">
            {t.roomsPage.description}
          </p>
        </div>
      </section>

      <RoomSection />

      {/* Extended Details Section */}
      <section className="py-32 px-8 md:px-24 bg-swiss-white border-t border-swiss-dark/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">{t.roomsPage.craftTitle}</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              {t.roomsPage.craftText}
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">{t.roomsPage.comfortTitle}</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              {t.roomsPage.comfortText}
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl text-swiss-dark mb-4">{t.roomsPage.locationTitle}</h4>
            <p className="text-swiss-dark/60 font-light text-sm leading-relaxed">
              {t.roomsPage.locationText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
