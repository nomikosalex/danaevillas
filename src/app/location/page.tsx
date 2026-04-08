'use client';

import { motion } from 'framer-motion';

export default function LocationPage() {
  return (
    <main className="bg-swiss-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-swiss-dark">
        <img
          src="/images/authentic/location-hero.jpg"
          alt="Danae Villa at Night"
          className="h-full w-full object-cover opacity-60 object-[center_75%]"
        />
        <div className="absolute inset-0 flex items-center justify-center p-8 text-center pt-24">
          <div>
            <span className="mb-4 block font-sans text-xs font-light uppercase tracking-[0.4em] text-swiss-gray/80">
              The Heart of Santorini
            </span>
            <h1 className="font-serif text-5xl font-bold tracking-tight text-swiss-white md:text-8xl">
              Fira
            </h1>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-8 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-swiss-dark mb-12">
            A Quiet Corner in the Capital
          </h2>
          <p className="text-swiss-dark/70 font-light text-lg md:text-xl leading-relaxed mb-8">
            Danae Villa is situated in the peaceful neighborhood of <span className="text-swiss-dark font-normal">Kontochori</span>.
            While nestled away from the bustling tourist crowds, it remains a mere 10-minute walk from
            the vibrant heart of Fira, the island's capital.
          </p>
          <p className="text-swiss-dark/60 font-light text-base md:text-lg leading-relaxed">
            Guests enjoy the luxury of choosing between the quiet serenity of the villa
            and the world-renowned sunsets, shops, and restaurants of the Caldera cliffside,
            which are easily accessible on foot.
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
                <h3 className="font-serif text-2xl mb-4">Walk to the Caldera</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  A gentle uphill walk of approximately 800 meters brings you to the edge of the Caldera,
                  offering spectacular views of the volcano and the Aegean Sea.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="font-serif text-2xl mb-4">Island Accessibility</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  Fira is the central hub for all Santorini exploration. The main bus terminal and taxi
                  stations are within walking distance, allowing effortless travel to Oia, Akrotiri, and the beaches.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="font-serif text-2xl mb-4">Local Life</h3>
                <p className="text-swiss-gray/60 font-light text-sm leading-relaxed max-w-md">
                  Kontochori is a residential area that offers a glimpse into authentic island life,
                  with local bakeries, small churches, and a more relaxed pace than the main streets.
                </p>
              </motion.div>
            </div>

            {/* Visual element (placeholder for map or local shot) */}
            <div className="relative aspect-[4/3] bg-swiss-white/5 overflow-hidden border border-swiss-white/10 group">
               <iframe
                 src="https://www.openstreetmap.org/export/embed.html?bbox=25.43599%2C36.41504%2C25.44199%2C36.42104&layer=mapnik&marker=36.41804%2C25.43899"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen={true}
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               ></iframe>
               {/* Minimalist Overlay to keep the aesthetic when not interacting */}
               <div className="absolute inset-0 pointer-events-none border-[15px] border-swiss-dark shadow-[inset_0_0_80px_rgba(0,0,0,0.4)] opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
