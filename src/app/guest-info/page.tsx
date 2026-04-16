'use client';

import { useState } from 'react';
import Link from 'next/link';
import { guestInfo } from './config';

const i18n = {
  en: {
    location:       'Santorini, Greece',
    subtitle:       'Guest Information',
    welcomeLabel:   'Welcome',
    welcomeText:    "We are delighted to have you with us. This guide contains everything you need for a comfortable and enjoyable stay. Please don't hesitate to reach out at any time — we are here to help.",
    wifiLabel:      'Wi-Fi',
    networkLabel:   'Network',
    passwordLabel:  'Password',
    copy:           'Copy',
    copied:         'Copied',
    scheduleLabel:  'Daily Schedule',
    rulesLabel:     'House Regulations',
    contactLabel:   'Need Assistance?',
    contactText:    'Our team is available at any time. Message us on WhatsApp and we will respond as soon as possible.',
    hostLabel:      'Your Host',
    whatsapp:       'Message on WhatsApp',
    homeBtnLabel:   'Visit our website',
    footer:         'Danae Villa · Fira, Santorini',
    schedule: [
      { time: '08:30 – 10:00', label: 'Morning Coffee',  note: 'Complimentary coffee service' },
      { time: '08:30 – 20:30', label: 'Reception',       note: 'Check-in & assistance'        },
      { time: '10:00 – 20:00', label: 'Pool & Jacuzzi',  note: 'Open for guests'              },
    ],
    regulations: [
      'Swimming pool & jacuzzi open from 10:00 to 20:00',
      'Children must use the pool under parental supervision',
      'No diving permitted',
    ],
  },
  el: {
    location:       'Σαντορίνη, Ελλάδα',
    subtitle:       'Πληροφορίες Επισκεπτών',
    welcomeLabel:   'Καλώς Ήρθατε',
    welcomeText:    'Χαιρόμαστε που είστε μαζί μας. Αυτός ο οδηγός περιέχει όλα όσα χρειάζεστε για μια άνετη και ευχάριστη διαμονή. Μη διστάσετε να επικοινωνήσετε μαζί μας ανά πάσα στιγμή — είμαστε εδώ για να βοηθήσουμε.',
    wifiLabel:      'Wi-Fi',
    networkLabel:   'Δίκτυο',
    passwordLabel:  'Κωδικός',
    copy:           'Αντιγραφή',
    copied:         'Αντιγράφηκε',
    scheduleLabel:  'Ημερήσιο Πρόγραμμα',
    rulesLabel:     'Κανονισμός',
    contactLabel:   'Χρειάζεστε Βοήθεια;',
    contactText:    'Η ομάδα μας είναι διαθέσιμη ανά πάσα στιγμή. Στείλτε μας μήνυμα στο WhatsApp και θα απαντήσουμε το συντομότερο δυνατό.',
    hostLabel:      'Η Οικοδέσποινά σας',
    whatsapp:       'Μήνυμα στο WhatsApp',
    homeBtnLabel:   'Επισκεφτείτε την ιστοσελίδα μας',
    footer:         'Βίλα Δανάη · Φηρά, Σαντορίνη',
    schedule: [
      { time: '08:30 – 10:00', label: 'Πρωινός Καφές',  note: 'Δωρεάν υπηρεσία καφέ' },
      { time: '08:30 – 20:30', label: 'Ρεσεψιόν',       note: 'Check-in & εξυπηρέτηση' },
      { time: '10:00 – 20:00', label: 'Πισίνα & Τζακούζι', note: 'Ανοιχτό για επισκέπτες' },
    ],
    regulations: [
      'Πισίνα & τζακούζι ανοιχτά από 10:00 έως 20:00',
      'Τα παιδιά πρέπει να χρησιμοποιούν την πισίνα υπό γονική επίβλεψη',
      'Απαγορεύεται η βουτιά',
    ],
  },
};

type Lang = 'en' | 'el';

export default function GuestInfoPage() {
  const [copied, setCopied] = useState(false);
  const [lang, setLang] = useState<Lang>('en');
  const { wifi, host } = guestInfo;
  const t = i18n[lang];

  function copyWifi() {
    navigator.clipboard.writeText(wifi.password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <main className="min-h-screen bg-[#f5f0eb] text-[#1a1a1a] font-sans">

      {/* Top bar */}
      <div className="flex items-center justify-between px-6 pt-6">
        <Link
          href="/en"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8a7e74] hover:text-[#1a1a1a] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          {t.homeBtnLabel}
        </Link>

        <button
          onClick={() => setLang(lang === 'en' ? 'el' : 'en')}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#8a7e74] hover:text-[#1a1a1a] transition-colors border border-[#1a1a1a]/15 rounded-full px-3 py-1.5"
          aria-label="Switch language"
        >
          {lang === 'en' ? (
            <><span className="text-base leading-none">🇬🇷</span><span>Ελληνικά</span></>
          ) : (
            <><span className="text-base leading-none">🇬🇧</span><span>English</span></>
          )}
        </button>
      </div>

      {/* Header */}
      <header className="px-6 pt-8 pb-10 border-b border-[#1a1a1a]/10">
        <p className="text-[10px] uppercase tracking-[0.5em] text-[#8a7e74] mb-4">{t.location}</p>
        <h1 className="text-3xl font-serif font-bold tracking-tight leading-tight mb-1">
          Danae Villa
        </h1>
        <p className="text-[#8a7e74] text-sm font-light">{t.subtitle}</p>
      </header>

      {/* Welcome */}
      <section className="px-6 py-10 border-b border-[#1a1a1a]/10">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-[#8a7e74] mb-4">{t.welcomeLabel}</span>
        <p className="text-[#1a1a1a]/70 text-base font-light leading-relaxed">{t.welcomeText}</p>
      </section>

      {/* WiFi */}
      {wifi.enabled && wifi.password && (
        <section className="px-6 py-10 border-b border-[#1a1a1a]/10">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-[#8a7e74] mb-6">{t.wifiLabel}</span>
          <div className="space-y-3">
            <div>
              <p className="text-[#8a7e74] text-[10px] uppercase tracking-widest mb-1">{t.networkLabel}</p>
              <p className="text-[#1a1a1a] text-sm">{wifi.network}</p>
            </div>
            <div>
              <p className="text-[#8a7e74] text-[10px] uppercase tracking-widest mb-1">{t.passwordLabel}</p>
              <div className="flex items-center gap-3">
                <p className="text-[#1a1a1a] text-sm font-mono">{wifi.password}</p>
                <button
                  onClick={copyWifi}
                  className="text-[10px] uppercase tracking-widest text-[#8a7e74] hover:text-[#1a1a1a] border border-[#1a1a1a]/20 rounded-full px-3 py-1 transition-colors"
                >
                  {copied ? t.copied : t.copy}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Daily Schedule */}
      <section className="px-6 py-10 border-b border-[#1a1a1a]/10">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-[#8a7e74] mb-6">{t.scheduleLabel}</span>
        <div className="space-y-4">
          {t.schedule.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="min-w-[110px]">
                <span className="text-[#1a1a1a] text-sm font-light tabular-nums">{item.time}</span>
              </div>
              <div>
                <p className="text-[#1a1a1a] text-sm font-medium">{item.label}</p>
                <p className="text-[#8a7e74] text-xs mt-0.5">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* House Regulations */}
      <section className="px-6 py-10 border-b border-[#1a1a1a]/10">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-[#8a7e74] mb-6">{t.rulesLabel}</span>
        <div className="space-y-4">
          {t.regulations.map((reg, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-[#8a7e74] text-xs mt-0.5 flex-shrink-0">◈</span>
              <p className="text-[#1a1a1a]/75 text-sm font-light leading-relaxed">{reg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-10 border-b border-[#1a1a1a]/10">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-[#8a7e74] mb-6">{t.contactLabel}</span>
        <p className="text-[#1a1a1a]/60 text-sm font-light mb-6 leading-relaxed">{t.contactText}</p>
        <div className="mb-5">
          <p className="text-[#8a7e74] text-[10px] uppercase tracking-widest mb-1">{t.hostLabel}</p>
          <p className="text-[#1a1a1a] text-sm">{host.name}</p>
          <p className="text-[#8a7e74] text-xs mt-0.5">{host.phone}</p>
        </div>
        <button
          onClick={() => window.open(`https://wa.me/${host.whatsapp}`, '_blank')}
          className="w-full flex items-center justify-center gap-3 bg-[#1a1a1a] text-[#f5f0eb] rounded-full py-4 px-6 text-[11px] uppercase tracking-[0.3em] hover:bg-[#2a2a2a] transition-all active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          {t.whatsapp}
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <p className="text-[#8a7e74] text-[10px] uppercase tracking-[0.3em]">{t.footer}</p>
      </footer>

    </main>
  );
}
