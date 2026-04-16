'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function LocationPage() {
  const { t } = useLanguage();
  const l = t.location;

  return (
    <main className="bg-swiss-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-swiss-dark">
        <Image
          src="/images/authentic/location-hero.jpg"
          alt="Danae Villa at night — Fira, Santorini"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 object-[center_75%]"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center pt-24">
          <div>
            <span className="mb-4 block font-sans text-xs font-light uppercase tracking-[0.4em] text-swiss-gray/80">
              {l.label}
            </span>
            <h1 className="font-serif text-5xl font-bold tracking-tight text-swiss-white md:text-8xl">
              {l.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-swiss-dark mb-12">
            {l.sectionTitle}
          </h2>
          <p className="text-swiss-dark/70 font-light text-lg md:text-xl leading-relaxed mb-8">
            {l.p1}
          </p>
          <p className="text-swiss-dark/60 font-light text-base md:text-lg leading-relaxed">
            {l.p2}
          </p>
        </div>
      </section>

      {/* Proximity / Details Grid */}
      <section className="bg-swiss-dark py-32 px-8 md:px-24 text-swiss-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-2xl mb-4">{l.calderaTitle}</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  {l.calderaText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-serif text-2xl mb-4">{l.accessTitle}</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  {l.accessText}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-serif text-2xl mb-4">{l.localTitle}</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  {l.localText}
                </p>
              </motion.div>
            </div>

            {/* Map */}
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=36.41804,25.43899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-swiss-white/60 hover:text-swiss-white transition-colors border-b border-swiss-white/20 pb-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Open in Google Maps
              </a>
            <div className="relative aspect-[4/3] bg-swiss-white/5 overflow-hidden border border-swiss-white/10 group">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=25.43599%2C36.41504%2C25.44199%2C36.42104&layer=mapnik&marker=36.41804%2C25.43899"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                sandbox="allow-same-origin allow-scripts"
                title="Danae Villa location map — Kontochori, Fira, Santorini"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[15px] border-swiss-dark shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
