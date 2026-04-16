'use client';

import { useState } from 'react';
import { guestInfo } from './config';

export default function GuestInfoPage() {
  const [copied, setCopied] = useState(false);
  const { wifi, schedule, regulations, host } = guestInfo;

  function copyWifi() {
    navigator.clipboard.writeText(wifi.password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* Header */}
      <header className="px-6 pt-12 pb-10 border-b border-white/8">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-4">Santorini, Greece</p>
        <h1 className="text-3xl font-serif font-bold tracking-tight leading-tight mb-1">
          Danae Villa
        </h1>
        <p className="text-white/40 text-sm font-light">Guest Information</p>
      </header>

      {/* Welcome */}
      <section className="px-6 py-10 border-b border-white/8">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4">Welcome</span>
        <p className="text-white/70 text-base font-light leading-relaxed">
          We are delighted to have you with us. This guide contains everything you need
          for a comfortable and enjoyable stay. Please don&apos;t hesitate to reach out
          at any time — we are here to help.
        </p>
      </section>

      {/* WiFi */}
      {wifi.enabled && wifi.password && (
        <section className="px-6 py-10 border-b border-white/8">
          <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">Wi-Fi</span>
          <div className="space-y-3">
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Network</p>
              <p className="text-white/80 text-sm">{wifi.network}</p>
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Password</p>
              <div className="flex items-center gap-3">
                <p className="text-white/80 text-sm font-mono">{wifi.password}</p>
                <button
                  onClick={copyWifi}
                  className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white/70 border border-white/10 rounded-full px-3 py-1 transition-colors"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Daily Schedule */}
      <section className="px-6 py-10 border-b border-white/8">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">Daily Schedule</span>
        <div className="space-y-4">
          {schedule.map((item) => (
            <div key={item.label} className="flex items-start gap-4">
              <div className="min-w-[110px]">
                <span className="text-white text-sm font-light tabular-nums">{item.time}</span>
              </div>
              <div>
                <p className="text-white/90 text-sm font-medium">{item.label}</p>
                <p className="text-white/35 text-xs mt-0.5">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* House Regulations */}
      <section className="px-6 py-10 border-b border-white/8">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">House Regulations</span>
        <div className="space-y-4">
          {regulations.map((reg, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-white/20 text-xs mt-0.5 flex-shrink-0">◈</span>
              <p className="text-white/70 text-sm font-light leading-relaxed">{reg}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-10 border-b border-white/8">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">Need Assistance?</span>
        <p className="text-white/50 text-sm font-light mb-6 leading-relaxed">
          Our team is available at any time. Message us on WhatsApp and we will
          respond as soon as possible.
        </p>
        <div className="mb-5">
          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">Your Host</p>
          <p className="text-white/80 text-sm">{host.name}</p>
          <p className="text-white/35 text-xs mt-0.5">{host.phone}</p>
        </div>
        <button
          onClick={() => window.open(`https://wa.me/${host.whatsapp}`, '_blank')}
          className="w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-full py-4 px-6 text-[11px] uppercase tracking-[0.3em] text-white/70 hover:bg-white/10 hover:text-white transition-all active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Message on WhatsApp
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">Danae Villa · Fira, Santorini</p>
      </footer>

    </main>
  );
}
