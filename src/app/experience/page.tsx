'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperiencePage() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <main className="bg-swiss-dark min-h-screen pt-24 text-swiss-white">
      {/* Hero Section */}
      <section className="relative py-32 px-8 md:px-24 border-b border-swiss-white/5">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="block font-sans text-xs uppercase tracking-[0.5em] text-swiss-gray/40 mb-8"
          >
            {e.label}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-12"
          >
            {e.titleMain} <br /><span className="italic font-normal">{e.titleItalic}</span> {e.titleSuffix}
          </motion.h1>
        </div>
      </section>

      {/* Breakfast Section */}
      <section className="py-32 px-8 md:px-24 bg-swiss-white text-swiss-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/authentic/pool.jpg"
              alt="Traditional breakfast by the pool at Danae Villa"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-swiss-dark/40">{e.morningLabel}</span>
            <h2 className="font-serif text-4xl md:text-6xl">{e.morningTitle} <br />{e.morningTitleItalic}</h2>
            <p className="text-swiss-dark/70 font-light text-lg leading-relaxed">
              {e.morningText}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-2">{e.flavorsTitle}</h4>
                <p className="text-swiss-dark/50 text-xs font-light">{e.flavorsText}</p>
              </div>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-2">{e.tailoredTitle}</h4>
                <p className="text-swiss-dark/50 text-xs font-light">{e.tailoredText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Services Grid */}
      <section className="py-32 px-8 md:px-24 border-t border-swiss-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-swiss-gray/40">{e.servicesLabel}</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-4">{e.servicesTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Transfers */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group border border-swiss-white/10 p-12 space-y-8 transition-colors hover:border-swiss-white/30"
            >
              <div className="relative aspect-video bg-swiss-white/5 overflow-hidden">
                <Image
                  src="/images/transfers.png"
                  alt="Private airport transfer service — Danae Villa Santorini"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl">{e.transferTitle}</h3>
              <p className="text-swiss-gray/60 font-light text-sm leading-relaxed">
                {e.transferText}
              </p>
              <button className="text-[10px] uppercase tracking-[0.3em] text-swiss-white pt-4 border-b border-swiss-white/20 pb-1 group-hover:border-swiss-white transition-all">{e.transferBtn}</button>
            </motion.div>

            {/* Tours */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group border border-swiss-white/10 p-12 space-y-8 transition-colors hover:border-swiss-white/30"
            >
              <div className="relative aspect-video bg-swiss-white/5 overflow-hidden">
                <Image
                  src="/images/tours.png"
                  alt="Tailored Santorini island excursions and sunset cruises"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <h3 className="font-serif text-2xl">{e.toursTitle}</h3>
              <p className="text-swiss-gray/60 font-light text-sm leading-relaxed">
                {e.toursText}
              </p>
              <button className="text-[10px] uppercase tracking-[0.3em] text-swiss-white pt-4 border-b border-swiss-white/20 pb-1 group-hover:border-swiss-white transition-all">{e.toursBtn}</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filoxenia Banner */}
      <section className="py-48 px-8 md:px-24 bg-swiss-white text-swiss-dark text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-8xl italic font-normal tracking-tight mb-12">Filoxenia</h2>
          <p className="text-swiss-dark/70 font-light text-xl md:text-2xl leading-relaxed italic">
            {e.filoxeniaQuote}
          </p>
          <p className="text-swiss-dark/40 font-sans text-xs uppercase tracking-[0.5em] mt-8">{e.filoxeniaLabel}</p>
        </motion.div>
      </section>
    </main>
  );
}
