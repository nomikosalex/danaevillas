import { MetadataRoute } from 'next';

const BASE = 'https://danaevilla.eu';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/rooms`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/book`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/experience`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,       lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE}/location`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ];
}
