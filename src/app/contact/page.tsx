'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <main className="bg-swiss-dark min-h-screen pt-32 pb-24 text-swiss-white">
      <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column: Info */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-gray/40 mb-6">Connect</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">Begin Your <br /><span className="italic font-normal text-swiss-gray/60">Journey</span></h1>
            <p className="text-swiss-gray/60 font-light text-lg max-w-md leading-relaxed">
              For reservations, specialty requests, or to arrange your private transfers, please complete the inquiry form. 
              Our team will respond personally within 24 hours.
            </p>
          </motion.div>

          <div className="space-y-8 pt-8 border-t border-swiss-white/5">
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-swiss-white mb-2">Direct Contact</h4>
              <p className="text-swiss-gray/40 text-sm font-light">info@danaevilla.eu</p>
            </div>
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-swiss-white mb-2">Social</h4>
              <div className="flex space-x-6">
                 <a href="#" className="text-swiss-gray/40 hover:text-swiss-white transition-colors text-xs">Instagram</a>
                 <a href="#" className="text-swiss-gray/40 hover:text-swiss-white transition-colors text-xs">Facebook</a>
              </div>
            </div>
            <div className="pt-4">
               <a 
                 href="https://wa.me/30XXXXXXXXXX" 
                 className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all text-[10px] uppercase tracking-[0.2em]"
               >
                 <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <span>Message on WhatsApp</span>
               </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {formState !== 'success' ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Full Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Email Address</label>
                    <input required type="email" className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Check-In</label>
                    <input required type="date" className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Check-Out</label>
                    <input required type="date" className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm uppercase" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Services of Interest</label>
                  <select className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm appearance-none cursor-pointer">
                    <option className="bg-swiss-dark" value="none">Just Accommodation</option>
                    <option className="bg-swiss-dark" value="transfers">Private Transfers</option>
                    <option className="bg-swiss-dark" value="tours">Island Tours</option>
                    <option className="bg-swiss-dark" value="both">Both Transfers & Tours</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">Special Requests</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-swiss-white/10 py-4 px-2 outline-none focus:border-swiss-white transition-colors font-light text-sm resize-none" placeholder="Is there anything we can prepare for your arrival?" />
                </div>

                <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full py-6 border border-swiss-white/20 text-[10px] uppercase tracking-[0.4em] hover:bg-swiss-white hover:text-swiss-dark transition-all disabled:opacity-50"
                >
                  {formState === 'submitting' ? 'Sending Inquiry...' : 'Send Inquiry'}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-24 border border-swiss-white/10"
              >
                <div className="w-16 h-16 border border-swiss-white rounded-full flex items-center justify-center">
                   <svg className="w-8 h-8 text-swiss-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
                <h2 className="font-serif text-3xl">Inquiry Received</h2>
                <p className="text-swiss-gray/60 font-light text-sm max-w-xs mx-auto">
                  Thank you for choosing Danae Villa. We will review your request and contact you shortly to finalize your stay.
                </p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-[10px] uppercase tracking-[0.3em] text-swiss-white border-b border-swiss-white/20 pb-1"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
