'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useLanguage } from '@/context/LanguageContext';
import { T } from '@/i18n/translations';

// Replace with your real site key from https://dashboard.hcaptcha.com
// The key below is hCaptcha's official test key — safe to deploy, always passes
const HCAPTCHA_SITE_KEY = '10000000-ffff-ffff-ffff-000000000001';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_SERVICES = ['none', 'transfers', 'tours', 'both'];

interface FormValues {
  name: string;
  email: string;
  checkIn: string;
  checkOut: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  service?: string;
  message?: string;
}

function validate(values: FormValues, c: T['contact']): FormErrors {
  const errors: FormErrors = {};
  const today = new Date().toISOString().split('T')[0];

  if (!values.name.trim()) {
    errors.name = c.errNameRequired;
  } else if (values.name.trim().length < 2) {
    errors.name = c.errNameMin;
  } else if (values.name.trim().length > 100) {
    errors.name = c.errNameMax;
  }

  if (!values.email.trim()) {
    errors.email = c.errEmailRequired;
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = c.errEmailInvalid;
  }

  if (!values.checkIn) {
    errors.checkIn = c.errCheckInRequired;
  } else if (values.checkIn < today) {
    errors.checkIn = c.errCheckInPast;
  }

  if (!values.checkOut) {
    errors.checkOut = c.errCheckOutRequired;
  } else if (values.checkIn && values.checkOut <= values.checkIn) {
    errors.checkOut = c.errCheckOutAfter;
  }

  if (!VALID_SERVICES.includes(values.service)) {
    errors.service = c.errServiceInvalid;
  }

  if (values.message.length > 1000) {
    errors.message = c.errMessageMax;
  }

  return errors;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const c = t.contact;

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [values, setValues] = useState<FormValues>({
    name: '', email: '', checkIn: '', checkOut: '', service: 'none', message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (field: keyof FormValues, value: string) => {
    const sanitized = value.slice(0, field === 'message' ? 1000 : 200);
    const next = { ...values, [field]: sanitized };
    setValues(next);
    if (touched[field]) setErrors(validate(next, c));
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values, c));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(values).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(values, c);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    setFormState('submitting');

    try {
      const body = new URLSearchParams({
        'form-name': 'contact',
        'bot-field': '',
        name: values.name,
        email: values.email,
        'check-in': values.checkIn,
        'check-out': values.checkOut,
        service: values.service,
        message: values.message,
        'h-captcha-response': captchaToken,
      });
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error('Network error');
      setFormState('success');
    } catch {
      setFormState('error');
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  const resetForm = () => {
    setFormState('idle');
    setValues({ name: '', email: '', checkIn: '', checkOut: '', service: 'none', message: '' });
    setErrors({});
    setTouched({});
    setCaptchaToken(null);
    setCaptchaError(false);
    captchaRef.current?.resetCaptcha();
  };

  const errorClass = 'mt-1 text-[10px] text-red-400 tracking-wider';
  const inputClass = (field: keyof FormValues) =>
    `w-full bg-transparent border-b py-4 px-2 outline-none transition-colors font-light text-sm ${
      errors[field] && touched[field]
        ? 'border-red-400'
        : 'border-swiss-white/10 focus:border-swiss-white'
    }`;

  return (
    <main className="bg-swiss-dark min-h-screen pt-32 pb-24 text-swiss-white">
      <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Column: Info */}
        <div className="space-y-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-gray/40 mb-6">{c.label}</span>
            <h1 className="font-serif text-5xl md:text-7xl mb-8">
              {c.titleMain} <br /><span className="italic font-normal text-swiss-gray/60">{c.titleItalic}</span>
            </h1>
            <p className="text-swiss-gray/60 font-light text-lg max-w-md leading-relaxed">
              {c.description}
            </p>
          </motion.div>

          <div className="space-y-8 pt-8 border-t border-swiss-white/5">
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-swiss-white mb-2">{c.directLabel}</h4>
              <p className="text-swiss-gray/40 text-sm font-light">danaevilla.01@gmail.com</p>
            </div>
            <div>
              <h4 className="font-sans text-[10px] uppercase tracking-widest text-swiss-white mb-2">{c.socialLabel}</h4>
              <div className="flex space-x-6">
                <a href="https://www.instagram.com/danae_villa_santorini_evi?igsh=MTczNXBqcnZocG91aA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-swiss-gray/40 hover:text-swiss-white transition-colors text-xs">Instagram</a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://wa.me/306955152317"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-all text-[10px] uppercase tracking-[0.2em]"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{c.whatsapp}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {formState === 'success' ? (
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
                <h2 className="font-serif text-3xl">{c.successTitle}</h2>
                <p className="text-swiss-gray/60 font-light text-sm max-w-xs mx-auto">{c.successText}</p>
                <button
                  onClick={resetForm}
                  className="text-[10px] uppercase tracking-[0.3em] text-swiss-white border-b border-swiss-white/20 pb-1"
                >
                  {c.successBtn}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-8"
              >
                {formState === 'error' && (
                  <div className="border border-red-400/30 bg-red-400/5 px-4 py-3 text-xs text-red-400 tracking-wider">
                    {c.errSubmit}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">{c.nameLabel}</label>
                    <input
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={inputClass('name')}
                      placeholder={c.namePlaceholder}
                    />
                    {errors.name && touched.name && <p className={errorClass}>{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">{c.emailLabel}</label>
                    <input
                      type="email"
                      autoComplete="email"
                      maxLength={200}
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={inputClass('email')}
                      placeholder={c.emailPlaceholder}
                    />
                    {errors.email && touched.email && <p className={errorClass}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">{c.checkInLabel}</label>
                    <input
                      type="date"
                      value={values.checkIn}
                      onChange={(e) => handleChange('checkIn', e.target.value)}
                      onBlur={() => handleBlur('checkIn')}
                      className={inputClass('checkIn') + ' uppercase'}
                    />
                    {errors.checkIn && touched.checkIn && <p className={errorClass}>{errors.checkIn}</p>}
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">{c.checkOutLabel}</label>
                    <input
                      type="date"
                      value={values.checkOut}
                      onChange={(e) => handleChange('checkOut', e.target.value)}
                      onBlur={() => handleBlur('checkOut')}
                      className={inputClass('checkOut') + ' uppercase'}
                    />
                    {errors.checkOut && touched.checkOut && <p className={errorClass}>{errors.checkOut}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">{c.serviceLabel}</label>
                  <select
                    value={values.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    onBlur={() => handleBlur('service')}
                    className={inputClass('service') + ' appearance-none cursor-pointer'}
                  >
                    <option className="bg-swiss-dark" value="none">{c.serviceNone}</option>
                    <option className="bg-swiss-dark" value="transfers">{c.serviceTransfers}</option>
                    <option className="bg-swiss-dark" value="tours">{c.serviceTours}</option>
                    <option className="bg-swiss-dark" value="both">{c.serviceBoth}</option>
                  </select>
                  {errors.service && touched.service && <p className={errorClass}>{errors.service}</p>}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-widest text-swiss-gray/40 ml-1">
                    {c.messageLabel}
                    <span className="ml-2 text-swiss-gray/20">{values.message.length}/1000</span>
                  </label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onBlur={() => handleBlur('message')}
                    className={inputClass('message') + ' resize-none'}
                    placeholder={c.messagePlaceholder}
                  />
                  {errors.message && touched.message && <p className={errorClass}>{errors.message}</p>}
                </div>

                {/* hCaptcha */}
                <div className="space-y-1">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey={HCAPTCHA_SITE_KEY}
                    theme="dark"
                    onVerify={(token) => { setCaptchaToken(token); setCaptchaError(false); }}
                    onExpire={() => setCaptchaToken(null)}
                  />
                  {captchaError && (
                    <p className={errorClass}>{c.captchaRequired}</p>
                  )}
                </div>

                <button
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full py-6 border border-swiss-white/20 text-[10px] uppercase tracking-[0.4em] hover:bg-swiss-white hover:text-swiss-dark transition-all disabled:opacity-50"
                >
                  {formState === 'submitting' ? c.submittingBtn : c.submitBtn}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
