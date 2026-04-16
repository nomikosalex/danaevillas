import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700'],
});

const SITE_URL = 'https://danaevilla.com';

export const metadata: Metadata = {
  verification: {
    google: 'itpHI4Coun16a2Jw2UDRm_1lStDKhzUyHCBLgG3WvpA',
  },
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Danae Villa | Boutique Luxury Villa in Fira, Santorini',
    template: '%s | Danae Villa Santorini',
  },
  description:
    'Discover Danae Villa — a boutique luxury villa in the heart of Fira, Santorini. Whitewashed Cycladic elegance, private pool, and authentic island living. Book directly for the best rate.',
  keywords: [
    'Santorini villa', 'Fira hotel', 'luxury boutique hotel Santorini',
    'Danae Villa', 'Cyclades accommodation', 'boutique villa Greece',
    'Santorini accommodation', 'Kontochori Fira',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Danae Villa Santorini',
    title: 'Danae Villa | Boutique Luxury Villa in Fira, Santorini',
    description:
      'Boutique luxury villa in the heart of Fira, Santorini. Whitewashed elegance, private pool, and authentic island living.',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'Danae Villa — Santorini Caldera View' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Danae Villa | Boutique Luxury Villa in Fira, Santorini',
    description: 'Boutique luxury villa in Fira, Santorini. Private pool, authentic Cycladic character, direct booking.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Danae Villa',
  alternateName: 'Danae Villa Santorini',
  description: 'A boutique luxury villa in the peaceful Kontochori neighbourhood of Fira, Santorini. Private pool, Cycladic architecture, direct booking.',
  url: SITE_URL,
  email: 'danaevilla.01@gmail.com',
  telephone: '+306955152317',
  image: [
    `${SITE_URL}/images/hero.png`,
    `${SITE_URL}/images/authentic/room-master.jpg`,
    `${SITE_URL}/images/authentic/room-double.jpg`,
  ],
  priceRange: '€€',
  numberOfRooms: 2,
  checkinTime: '14:00',
  checkoutTime: '11:00',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kontochori',
    addressLocality: 'Fira',
    addressRegion: 'Santorini',
    postalCode: '84700',
    addressCountry: 'GR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 36.41804, longitude: 25.43899 },
  sameAs: [
    'https://www.instagram.com/danae_villa_santorini_evi',
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool',      value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Jacuzzi',            value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning',   value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi',         value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Balcony',    value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Transfers',  value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Breakfast',          value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-swiss-dark text-swiss-gray antialiased selection:bg-white selection:text-black`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
