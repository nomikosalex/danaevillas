'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footer.linkHome, href: '/' },
    { label: t.footer.linkRooms, href: '/rooms' },
    { label: t.footer.linkExperience, href: '/experience' },
    { label: t.footer.linkLocation, href: '/location' },
    { label: t.footer.linkContact, href: '/contact' },
  ];

  return (
    <footer className="bg-swiss-dark border-t border-swiss-white/5 py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Brand */}
        <div className="space-y-6">
          <h4 className="font-serif text-2xl text-swiss-white">DANAE</h4>
          <p className="text-swiss-gray/40 font-light text-xs leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h5 className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-white font-medium">{t.footer.exploreLabel}</h5>
          <ul className="space-y-4">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-swiss-gray/60 hover:text-swiss-white transition-colors text-xs font-light uppercase tracking-widest"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="space-y-6">
          <h5 className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-white font-medium">{t.footer.locationLabel}</h5>
          <address className="not-italic space-y-2">
            <p className="text-swiss-gray/60 text-xs font-light leading-relaxed">
              Fira, Santorini<br />
              Greece, 84700
            </p>
            <p className="text-swiss-gray/40 text-[10px] font-light italic mt-4">
              Quiet Area: Kontochori
            </p>
          </address>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h5 className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-white font-medium">{t.footer.contactLabel}</h5>
          <p className="text-swiss-gray/60 text-xs font-light">info@danaevilla.eu</p>
          <div className="flex space-x-6 mt-8">
            {['Instagram', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-swiss-gray/40 hover:text-swiss-white transition-colors text-[10px] uppercase tracking-[0.2em]"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-swiss-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-swiss-gray/20 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Danae Villa Santorini
        </p>
        <p className="text-swiss-gray/20 text-[10px] uppercase tracking-widest font-light italic">
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
