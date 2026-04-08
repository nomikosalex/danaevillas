'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const IMAGES = [
  'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3', // Santorini caldera placeholder
  'https://images.unsplash.com/photo-1570784534720-33afc5bc08b9?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3', // Santorini villa view placeholder
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!mounted) return null;

  return (
    <motion.section
      className="relative h-screen w-full overflow-hidden bg-swiss-dark"
      style={{ y: yParallax, opacity: opacityFade }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={IMAGES[currentIndex]}
            alt="Santorini Caldera View"
            className="h-full w-full object-cover object-center grayscale-[0.2]"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-black/20" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center space-y-8 p-8">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="font-serif text-5xl font-bold tracking-wide text-swiss-white md:text-7xl lg:text-8xl">
            Welcome to Danae Villas
          </h1>
          <p className="mt-4 font-sans text-sm font-light uppercase tracking-[0.2em] text-swiss-gray">
            A Sanctuary on the Caldera
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-16 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4"
        >
          <span className="font-sans text-xs uppercase tracking-widest text-white/70">
            Scroll to Discover
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-12 w-[1px] bg-white/50"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
