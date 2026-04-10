'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642559599.jpg?k=52864c0af41f4af534ce5cdb0c2bc1018d5042bc2b724b51de147ab690cf462b&o=', alt: 'Danae Villa — Santorini' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351578530.jpg?k=a7c176af14bb9e2b7090d48e890aa1b9628e9c386b09684b2dfcad8829a1327b&o=', alt: 'Danae Villa — Pool & Grounds' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/239535361.jpg?k=2edcaa1287c273ff820b8aa01d0814873122e159881bb3c54aab6e5fb1bbe2ff&o=', alt: 'Danae Villa — Garden & Terrace' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/239536272.jpg?k=48d675f0c6f864b9a333b6ca394e462ebe523dcf49ed22c66d413d362853ecf7&o=', alt: 'Danae Villa — Exterior' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/550992707.jpg?k=58c93efc33617615065f8c42a77a15647488d75e2e996df5528c311520f339ca&o=', alt: 'Danae Villa — Outdoor Spaces' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642615742.jpg?k=b264dc79ba58aba994f8b479b672821d760f00a6a2244d5c259bf3e57b177ba6&o=', alt: 'Danae Villa — Santorini Views' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/65918676.jpg?k=2e4db85cdcca0735f58cf67bb1c3f76cc973cde5f5247487f2aa5db898c63499&o=', alt: 'Danae Villa — Common Areas' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/89991719.jpg?k=29698f9810ef20ab5289b7196b56928de97730f4f80fcb2a77393bf626f21084&o=', alt: 'Danae Villa — Breakfast & Dining' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351578306.jpg?k=3c34151cb49af3e12297b523b0a172497aa3bf21cdddd3da904645f8cee88a8c&o=', alt: 'Danae Villa — Cycladic Architecture' },
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
