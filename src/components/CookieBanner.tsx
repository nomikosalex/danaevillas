'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'danae_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-swiss-dark border-t border-swiss-white/10 px-6 py-5 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-swiss-gray/60 text-xs font-light leading-relaxed max-w-2xl">
          This website uses essential cookies to ensure basic functionality. No tracking or advertising cookies are used.{' '}
          <Link href="/en/privacy-policy" className="text-swiss-gray/80 underline underline-offset-2 hover:text-swiss-white transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-[10px] uppercase tracking-widest text-swiss-gray/40 hover:text-swiss-gray transition-colors px-4 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-[10px] uppercase tracking-widest bg-swiss-white text-swiss-dark hover:bg-swiss-gray transition-colors px-6 py-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
