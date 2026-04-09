import { MetadataRoute } from 'next';
import { LOCALES } from '@/i18n/translations';
import { BLOG_POSTS } from '@/content/blog/posts';

const BASE = 'https://danaevilla.eu';

const PAGES = [
  { path: '',          priority: 1.0, freq: 'monthly'  as const },
  { path: '/rooms',    priority: 0.9, freq: 'monthly'  as const },
  { path: '/book',     priority: 0.9, freq: 'monthly'  as const },
  { path: '/experience', priority: 0.8, freq: 'monthly' as const },
  { path: '/contact',  priority: 0.7, freq: 'yearly'   as const },
  { path: '/location', priority: 0.6, freq: 'yearly'   as const },
  { path: '/blog',     priority: 0.7, freq: 'weekly'   as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // All locale variants of each page
  const pageUrls: MetadataRoute.Sitemap = LOCALES.flatMap((locale) =>
    PAGES.map(({ path, priority, freq }) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified: now,
      changeFrequency: freq,
      priority,
    })),
  );

  // Blog posts — English only (canonical)
  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/en/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    ...pageUrls,
    ...blogUrls,
  ];
}
