'use client';

import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: 'Evelyn L.',
    origin: 'Israel',
    quote: 'Danae Villa is simply stunning — colorful, spotless, and perfectly maintained. From now on, Danae Villa will be our home in Santorini — because Evi is now part of our family.',
    platform: 'TripAdvisor',
    date: 'July 2025',
  },
  {
    name: 'Emma P.',
    origin: 'United Kingdom',
    quote: 'Evi is an exceptional host, nothing is too much for her and she goes above and beyond. You will not find a better host than her — she puts her heart and soul into running the property.',
    platform: 'TripAdvisor',
    date: 'June 2024',
  },
  {
    name: 'Giorgia L.',
    origin: 'Italy',
    quote: 'The place is very nice and clean, the rooms are cleaned every day. Evi is very kind, patient and always ready to help and listen to her guests\' needs.',
    platform: 'TripAdvisor',
    date: 'September 2024',
  },
];

function StarRow() {
  return (
    <div className="flex gap-1 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 fill-amber-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-32 px-8 md:px-24 bg-swiss-white">
      <div className="max-w-7xl mx-auto">

        {/* Score badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-12 mb-24 pb-24 border-b border-swiss-dark/5"
        >
          <div className="text-center space-y-2">
            <div className="font-serif text-8xl font-light text-swiss-dark leading-none">9.6</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-swiss-dark/50 font-medium">Booking.com</div>
            <div className="text-[10px] text-swiss-dark/30">612 verified reviews</div>
          </div>

          <div className="h-px w-24 sm:h-32 sm:w-px bg-swiss-dark/10" />

          <div className="text-center space-y-2">
            <div className="font-serif text-8xl font-light text-swiss-dark leading-none">4.7</div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-swiss-dark/50 font-medium">TripAdvisor</div>
            <div className="text-[10px] text-swiss-dark/30">202 reviews · Travellers&apos; Choice</div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-swiss-dark/40 font-medium">Guest Voices</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-swiss-dark">What Our Guests Say</h2>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-swiss-dark/8 p-8 space-y-6 hover:border-swiss-dark/20 transition-colors"
            >
              <StarRow />
              <p className="text-swiss-dark/65 font-light text-sm leading-relaxed italic text-center">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-swiss-dark/5 flex justify-between items-end">
                <div>
                  <p className="text-swiss-dark text-xs font-medium">{review.name}</p>
                  <p className="text-swiss-dark/40 text-[10px] uppercase tracking-widest mt-0.5">{review.origin}</p>
                </div>
                <div className="text-right">
                  <p className="text-swiss-dark/30 text-[10px] uppercase tracking-wider">{review.platform}</p>
                  <p className="text-swiss-dark/25 text-[10px] mt-0.5">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Booking.com */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.booking.com/hotel/gr/danae-villa.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] uppercase tracking-[0.3em] text-swiss-dark/40 hover:text-swiss-dark transition-colors border-b border-swiss-dark/20 pb-1"
          >
            Read all 612 reviews on Booking.com
          </a>
        </motion.div>

      </div>
    </section>
  );
}
