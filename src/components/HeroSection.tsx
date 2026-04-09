'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const blur = useTransform(scrollY, [0, 500], [0, 4]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const textY = useTransform(scrollY, [0, 300], [0, -50]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  if (!mounted) return null;

  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-swiss-dark">
      <motion.div
        style={{ y, scale, filter: `blur(${blur}px)`, opacity }}
        className="absolute inset-0 z-0 h-[120vh] w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-swiss-dark z-10" />
        <Image
          src="/images/hero.png"
          alt="Danae Villa — Santorini Caldera View"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-30 transition-all duration-1000"
        />
      </motion.div>

      <div className="relative z-20 flex h-full flex-col items-center justify-center p-8 text-center">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-4 block font-sans text-xs font-light uppercase tracking-[0.4em] text-swiss-gray/80 md:text-sm">
            {t.hero.location}
          </span>
          <h1 className="font-serif text-5xl font-bold tracking-tight text-swiss-white md:text-8xl lg:text-9xl">
            Danae Villa
          </h1>
          <p className="mt-6 font-sans text-lg font-light italic tracking-wide text-swiss-gray/90 md:text-xl">
            {t.hero.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-24 flex flex-col items-center gap-6"
        >
          <div className="h-24 w-[1px] overflow-hidden bg-white/10">
            <motion.div
              animate={{ y: [0, 96, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-b from-transparent via-swiss-white to-transparent"
            />
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-white/40">
            {t.hero.scroll}
          </span>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 z-30 h-32 w-full bg-gradient-to-t from-swiss-dark to-transparent" />
    </section>
  );
}
