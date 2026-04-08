'use client';

import { motion } from 'framer-motion';

export default function ExperiencePage() {
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
            The Art of Living
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-8xl font-bold tracking-tight mb-12"
          >
            Experience <br /><span className="italic font-normal">Authentic</span> Santorini
          </motion.h1>
        </div>
      </section>

      {/* Breakfast Section */}
      <section className="py-32 px-8 md:px-24 bg-swiss-white text-swiss-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
             <img 
               src="/images/authentic/pool.jpg" 
               alt="Breakfast by the pool" 
               className="w-full h-full object-cover"
             />
          </div>
          <div className="space-y-8">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-swiss-dark/40">The Morning Ritual</span>
            <h2 className="font-serif text-4xl md:text-6xl">A Taste of <br />Tradition</h2>
            <p className="text-swiss-dark/70 font-light text-lg leading-relaxed">
              Start your day with a traditional breakfast served in the comfort of your suite or by the shimmering pool. 
              We take pride in sourcing local, seasonal ingredients to provide a truly authentic taste of Santorini.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-2">Local Flavors</h4>
                <p className="text-swiss-dark/50 text-xs font-light">Fresh pastries, local cheeses, and organic honey.</p>
              </div>
              <div>
                <h4 className="font-sans text-xs uppercase tracking-widest font-bold mb-2">Tailored Choice</h4>
                <p className="text-swiss-dark/50 text-xs font-light">Vegan and vegetarian options available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Services Grid */}
      <section className="py-32 px-8 md:px-24 border-t border-swiss-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
             <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-swiss-gray/40">Curated Services</span>
             <h2 className="font-serif text-4xl md:text-6xl mt-4">Stealth Luxury</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Transfers */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group border border-swiss-white/10 p-12 space-y-8 transition-colors hover:border-swiss-white/30"
            >
              <div className="aspect-video bg-swiss-white/5 overflow-hidden">
                 <img src="/images/transfers.png" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Private Transfer" />
              </div>
              <h3 className="font-serif text-2xl">Private Transfers</h3>
              <p className="text-swiss-gray/60 font-light text-sm leading-relaxed">
                Experience a seamless arrival. Our premium private transfer service ensures you are met at the airport or port and whisked directly to your sanctuary.
              </p>
              <button className="text-[10px] uppercase tracking-[0.3em] text-swiss-white pt-4 border-b border-swiss-white/20 pb-1 group-hover:border-swiss-white transition-all">Book Arrival</button>
            </motion.div>

            {/* Tours */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group border border-swiss-white/10 p-12 space-y-8 transition-colors hover:border-swiss-white/30"
            >
              <div className="aspect-video bg-swiss-white/5 overflow-hidden">
                 <img src="/images/tours.png" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Island Tours" />
              </div>
              <h3 className="font-serif text-2xl">Tailored Excursions</h3>
              <p className="text-swiss-gray/60 font-light text-sm leading-relaxed">
                Discover the hidden gems of Santorini. From private sunset cruises to wine-tasting tours in the Oia vineyards, we curate experiences that linger.
              </p>
              <button className="text-[10px] uppercase tracking-[0.3em] text-swiss-white pt-4 border-b border-swiss-white/20 pb-1 group-hover:border-swiss-white transition-all">Explore Tours</button>
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
              &ldquo;To make a stranger a friend.&rdquo;
            </p>
            <p className="text-swiss-dark/40 font-sans text-xs uppercase tracking-[0.5em] mt-8">The Essence of Danae Villa</p>
         </motion.div>
      </section>
    </main>
  );
}
