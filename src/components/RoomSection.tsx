'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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

// Update these prices to match current Booking.com rates
const ROOM_PRICES = [85, 70];

export default function RoomSection() {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState<Record<number, number>>({ 0: 0, 1: 0 });

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
                    <div className="font-serif text-2xl text-swiss-dark">€{ROOM_PRICES[roomIdx]}</div>
                    <div className="text-[9px] uppercase tracking-widest text-swiss-dark/40">from / night</div>
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
    </section>
  );
}
