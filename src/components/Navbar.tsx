'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Experience', href: '/experience' },
  { name: 'Location', href: '/location' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? 'bg-swiss-dark/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="font-serif text-2xl font-bold tracking-tighter text-swiss-white transition-opacity group-hover:opacity-70">
            DANAE
          </span>
          <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-swiss-white transition-all group-hover:w-full" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-12 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative font-sans text-xs uppercase tracking-[0.2em] transition-colors hover:text-swiss-white ${
                pathname === link.href ? 'text-swiss-white' : 'text-swiss-gray/60'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-[1px] w-full bg-swiss-white"
                />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-swiss-white/20 px-6 py-2 font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-white transition-all hover:bg-swiss-white hover:text-swiss-dark"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-swiss-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 h-screen w-full bg-swiss-dark p-8 md:hidden"
          >
            <div className="flex flex-col space-y-8 pt-24 text-center">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-swiss-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 border border-swiss-white/20 py-4 font-sans text-xs uppercase tracking-widest text-swiss-white"
              >
                Inquire Now
              </Link>
            </div>
            <button
              className="absolute top-8 right-8 text-swiss-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
