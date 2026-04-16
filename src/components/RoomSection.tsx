'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ROOM_IMAGES = [
  // Room 1 — Master Suite
  [
    { src: '/images/authentic/room-master.jpg', alt: 'Master Suite — Danae Villa' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642618699.jpg?k=573da0d9ec8e29ad5ad06e9f2e18571b45b457392c560ead854a12d6a73d2523&o=', alt: 'Master Suite — Bedroom' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642525603.jpg?k=0b03998699da74193e45e13113bb10c2dfbeca9c653919ed29bf98c0759abd9e&o=', alt: 'Master Suite — Bathroom' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642560246.jpg?k=6d342ef7b9de1bfca1a97d550de6ec7d5cdcb9803dac4c009ce6f859e7937768&o=', alt: 'Master Suite — View' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642525187.jpg?k=93fe883e6897c0dbdd13eb14e62b9aa82600ac01790f286beabc5dea171e7f16&o=', alt: 'Master Suite — Details' },
  ],
  // Room 2 — Double Room
  [
    { src: '/images/authentic/room-double.jpg', alt: 'Double Room — Danae Villa' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/463983131.jpg?k=805655c813a3cd16537a3ffe132ccd918fe29a923644c07499dfc788017a3459&o=', alt: 'Double Room — Bedroom' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351578651.jpg?k=76fd39bdc615491b730cbc5df4bc8fc9ef12433141b0fd638c701c7a61decc70&o=', alt: 'Double Room — Bathroom' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/642559921.jpg?k=c8963e0ac7316b9d3eb15f4a4a41c996a3a42ea2e1e2d276d3de4ea82e8d9f11&o=', alt: 'Double Room — Terrace' },
    { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/351578594.jpg?k=32ec2a010e88c0778b0dca06f1d842e4313b12b0ba0f77748845627c2c1a6f01&o=', alt: 'Double Room — Details' },
  ],
];

const SEASON_PRICES_2026 = [
  { period: 'May 2026',       dates: '1 – 31 May',      price: 57  },
  { period: 'June 2026',      dates: '1 – 30 June',     price: 90  },
  { period: 'July 2026',      dates: '1 – 31 July',     price: 110 },
  { period: 'August 2026',    dates: '1 – 31 August',   price: 110 },
  { period: 'September 2026', dates: '1 – 30 September',price: 90  },
  { period: 'October 2026',   dates: '1 – 31 October',  price: 57  },
];

export default function RoomSection() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState<Record<number, number>>({ 0: 0, 1: 0 });
  const [showPrices, setShowPrices] = useState(false);

  const go = (roomIdx: number, dir: 1 | -1) => {
    const total = ROOM_IMAGES[roomIdx].length;
    setCurrentImage((prev) => ({
      ...prev,
      [roomIdx]: (prev[roomIdx] + dir + total) % total,
    }));
  };

  const rooms = [
    {
      title: t.roomSection.room1Title,
      description: t.roomSection.room1Desc,
      amenities: [t.roomSection.room1a1, t.roomSection.room1a2, t.roomSection.room1a3],
    },
    {
      title: t.roomSection.room2Title,
      description: t.roomSection.room2Desc,
      amenities: [t.roomSection.room2a1, t.roomSection.room2a2, t.roomSection.room2a3],
    },
  ];

  return (
    <section className="bg-swiss-white py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-swiss-dark/40 font-medium">{t.roomSection.label}</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-swiss-dark">{t.roomSection.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {rooms.map((room, roomIdx) => {
            const images = ROOM_IMAGES[roomIdx];
            const imgIdx = currentImage[roomIdx];

            return (
              <motion.div
                key={roomIdx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: roomIdx * 0.2 }}
                className="group"
              >
                {/* Photo carousel */}
                <div className="relative overflow-hidden aspect-[4/5] mb-8">
                  <Image
                    key={images[imgIdx].src}
                    src={images[imgIdx].src}
                    alt={images[imgIdx].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 contrast-[1.05] brightness-[1.03]"
                  />

                  {/* Prev / Next */}
                  <button
                    aria-label="Previous photo"
                    onClick={() => go(roomIdx, -1)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    aria-label="Next photo"
                    onClick={() => go(roomIdx, 1)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-black/60 text-white rounded-full p-1.5 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImage((prev) => ({ ...prev, [roomIdx]: i }))}
                        className={`h-1 rounded-full transition-all ${i === imgIdx ? 'bg-white w-5' : 'bg-white/50 w-1.5'}`}
                      />
                    ))}
                  </div>

                  {/* Image count badge */}
                  <div className="absolute top-3 right-3 bg-black/40 text-white text-[9px] uppercase tracking-widest px-2 py-1 z-10">
                    {imgIdx + 1} / {images.length}
                  </div>
                </div>

                {/* Room info */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-swiss-dark group-hover:italic transition-all">
                    {room.title}
                  </h3>
                  <div className="text-right ml-4 shrink-0">
                    <div className="font-serif text-2xl text-swiss-dark">€57</div>
                    <div className="text-[9px] uppercase tracking-widest text-swiss-dark/40">from / night</div>
                    <button
                      onClick={() => setShowPrices(true)}
                      className="mt-1.5 text-[9px] uppercase tracking-widest text-swiss-dark/60 border border-swiss-dark/20 px-2.5 py-1 hover:bg-swiss-dark hover:text-swiss-white transition-all"
                    >
                      2026 Prices
                    </button>
                  </div>
                </div>

                <p className="text-swiss-dark/60 font-light leading-relaxed mb-6 max-w-md">
                  {room.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {room.amenities.map((amenity, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest text-swiss-dark/40 border border-swiss-dark/10 px-3 py-1">
                      {amenity}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Price Modal */}
      <AnimatePresence>
        {showPrices && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            onClick={() => setShowPrices(false)}
          >
            <div className="absolute inset-0 bg-swiss-dark/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-swiss-white w-full max-w-sm shadow-2xl"
            >
              {/* Modal header */}
              <div className="px-8 pt-8 pb-6 border-b border-swiss-dark/10">
                <span className="block text-[9px] uppercase tracking-[0.5em] text-swiss-dark/40 mb-3">Season 2026</span>
                <h3 className="font-serif text-2xl text-swiss-dark">Price List</h3>
                <button
                  onClick={() => setShowPrices(false)}
                  className="absolute top-6 right-6 text-swiss-dark/40 hover:text-swiss-dark transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Price rows */}
              <div className="px-8 py-6 space-y-0">
                {SEASON_PRICES_2026.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3.5 border-b border-swiss-dark/8 last:border-0"
                  >
                    <div>
                      <p className="text-swiss-dark text-sm font-light">{row.period}</p>
                      <p className="text-swiss-dark/40 text-[10px] tracking-wider">{row.dates}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-xl text-swiss-dark">€{row.price}</span>
                      <span className="text-[9px] uppercase tracking-widest text-swiss-dark/40 block">/ night</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal footer note */}
              <div className="px-8 pb-8">
                <p className="text-[10px] text-swiss-dark/40 leading-relaxed">
                  Prices are per room, per night. Subject to availability.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
