import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Reservations',
  description: 'Get in touch with Danae Villa in Santorini. Send a reservation enquiry, arrange private transfers, or ask about special requests. We respond personally within 24 hours.',
  openGraph: {
    title: 'Contact & Reservations | Danae Villa Santorini',
    description: 'Send a reservation enquiry or arrange private transfers. We respond personally within 24 hours.',
    url: 'https://danaevilla.eu/contact',
  },
  alternates: { canonical: 'https://danaevilla.eu/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
