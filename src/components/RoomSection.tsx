'use client';

import { motion } from 'framer-motion';

const ROOMS = [
  {
    title: 'Traditional Master Suite',
    description: 'A spacious sanctuary featuring authentic Santorini architecture, vaulted ceilings, and hand-selected traditional furniture.',
    image: '/images/authentic/room-master.jpg',
    amenities: ['King Size Bed', 'Private Balcony', 'Traditional Decor'],
  },
  {
    title: 'Minimalist Double Room',
    description: 'Elegantly simple and filled with natural light, our double rooms provide a serene retreat with modern amenities.',
    image: '/images/authentic/room-double.jpg',
    amenities: ['Queen Size Bed', 'Air Conditioning', 'Pool View'],
  },
];

export default function RoomSection() {
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
          <span className="text-xs uppercase tracking-[0.4em] text-swiss-dark/40 font-medium">The Residences</span>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl text-swiss-dark">Authentic Living</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 contrast-[1.05] brightness-[1.05] saturate-[1.05]"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-swiss-dark mb-4 group-hover:italic transition-all">
                {room.title}
              </h3>
              <p className="text-swiss-dark/60 font-light leading-relaxed mb-6 max-w-md">
                {room.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {room.amenities.map(amenity => (
                  <span key={amenity} className="text-[10px] uppercase tracking-widest text-swiss-dark/40 border border-swiss-dark/10 px-3 py-1">
                    {amenity}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
