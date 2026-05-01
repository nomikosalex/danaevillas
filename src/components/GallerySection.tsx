'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/images/authentic/pool.jpg',              alt: 'Danae Villa — Pool' },
  { src: '/images/gallery/villa-exterior.jpg',      alt: 'Danae Villa — Exterior' },
  { src: '/images/gallery/garden-pool.jpg',         alt: 'Danae Villa — Garden & Pool' },
  { src: '/images/gallery/villa-pool.jpg',          alt: 'Danae Villa — Pool & Building' },
  { src: '/images/gallery/pool-day.jpg',            alt: 'Danae Villa — Pool Terrace' },
  { src: '/images/gallery/pool-night.png',          alt: 'Danae Villa — Pool at Night' },
  { src: '/images/gallery/jacuzzi.jpg',             alt: 'Danae Villa — Private Jacuzzi' },
  { src: '/images/gallery/balcony-view.jpg',        alt: 'Danae Villa — Balcony View' },
  { src: '/images/gallery/reception-exterior.jpg',  alt: 'Danae Villa — Reception' },
  { src: '/images/gallery/pool-garden.jpg',         alt: 'Danae Villa — Lush Gardens' },
  { src: '/images/gallery/red-beach.jpg',           alt: 'Red Beach — Santorini' },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : 0), []);
  const next = useCallback(() => setLightboxIndex((i) => i !== null ? (i + 1) % GALLERY_IMAGES.length : 0), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <section className="py-32 px-8 md:px-24 bg-swiss-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-swiss-white/40 font-medium">Gallery</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-swiss-white">The Property</h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="relative overflow-hidden cursor-pointer group mb-3 break-inside-avoid"
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={768}
                height={576}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/80 text-[10px] uppercase tracking-[0.3em]">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/97 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close gallery"
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>
            <button
              aria-label="Previous image"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              aria-label="Next image"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[lightboxIndex].src}
                alt={GALLERY_IMAGES[lightboxIndex].alt}
                width={1024}
                height={768}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center">
              {GALLERY_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-1 h-1 rounded-full transition-all ${i === lightboxIndex ? 'bg-white w-4' : 'bg-white/30'}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
