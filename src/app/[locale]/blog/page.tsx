import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/content/blog/posts';
import { Lang } from '@/i18n/translations';
import { getAlternates, SITE_URL } from '@/lib/hreflang';

export async function generateMetadata({ params }: { params: Promise<{ locale: Lang }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Santorini Travel Journal',
    description: 'Practical guides, local tips, and insider knowledge for travelling to Santorini — from the best sunset spots to getting around the island.',
    alternates: getAlternates(locale, '/blog'),
    openGraph: { url: `${SITE_URL}/${locale}/blog` },
  };
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: Lang }> }) {
  const { locale } = await params;

  return (
    <main className="bg-swiss-white min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-8 md:px-24">
        <span className="block font-sans text-[10px] uppercase tracking-[0.5em] text-swiss-dark/40 mb-6">
          Santorini Travel Journal
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-swiss-dark mb-4">The Journal</h1>
        <p className="text-swiss-dark/50 font-light text-lg mb-20 max-w-xl">
          Guides, tips, and local knowledge for making the most of your time in Santorini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <Image
                  src={post.hero}
                  alt={post.heroAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-dark/30">
                {post.date} · {post.readTime}
              </span>
              <h2 className="font-serif text-2xl text-swiss-dark mt-2 mb-3 group-hover:italic transition-all">
                {post.title}
              </h2>
              <p className="text-swiss-dark/50 font-light text-sm leading-relaxed line-clamp-2">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
