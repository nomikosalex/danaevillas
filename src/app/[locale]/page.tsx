'use client';

import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import RoomSection from '@/components/RoomSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen flex-col bg-swiss-dark selection:bg-swiss-white selection:text-swiss-dark">
      <HeroSection />

      {/* Philosophy Section */}
      <section className="relative z-40 -mt-20 flex min-h-[70vh] flex-col items-center justify-center px-8 py-32 md:px-24">
        <div className="max-w-4xl text-center">
          <span className="mb-6 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-swiss-white/40">
            {t.home.philosophyLabel}
          </span>
          <h2 className="mb-12 font-serif text-4xl font-light leading-tight text-swiss-white md:text-6xl lg:text-7xl">
            {t.home.philosophyTitle}
          </h2>
          <div className="mx-auto mb-16 h-px w-24 bg-gradient-to-r from-transparent via-swiss-white/20 to-transparent" />
          <p className="mx-auto max-w-2xl font-sans text-xl font-extralight leading-relaxed text-swiss-gray/70 md:text-2xl">
            {t.home.philosophyText}
          </p>
        </div>
      </section>

      {/* Pool Highlight Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/images/authentic/pool.jpg"
          alt="Danae Villa — Private Swimming Pool at Twilight"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h3 className="font-serif text-3xl md:text-5xl text-swiss-white mb-4">{t.home.serenityTitle}</h3>
            <p className="font-sans text-sm uppercase tracking-widest text-swiss-white/60">{t.home.serenityCaption}</p>
          </div>
        </div>
      </section>

      <RoomSection />
      <section className="h-[20vh] bg-swiss-dark" />
    </main>
  );
}
