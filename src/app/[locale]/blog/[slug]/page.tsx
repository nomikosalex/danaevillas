import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BLOG_POSTS } from '@/content/blog/posts';
import { Lang, LOCALES } from '@/i18n/translations';
import { SITE_URL } from '@/lib/hreflang';

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    BLOG_POSTS.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Lang; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const canonicalUrl = `${SITE_URL}/en/blog/${slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Danae Villa',
      url: SITE_URL,
    },
    image: `${SITE_URL}${post.hero}`,
    mainEntityOfPage: canonicalUrl,
  };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      images: [{ url: post.hero, alt: post.heroAlt }],
      publishedTime: post.date,
    },
    alternates: { canonical: canonicalUrl },
    other: { 'application/ld+json': JSON.stringify(jsonLd) },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: Lang; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="bg-swiss-white min-h-screen pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-8 md:px-0">
        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="inline-block font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-dark/40 hover:text-swiss-dark transition-colors mb-12"
        >
          ← The Journal
        </Link>

        {/* Header */}
        <span className="block font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-dark/30 mb-4">
          {post.date} · {post.readTime}
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-swiss-dark mb-8 leading-tight">
          {post.title}
        </h1>
        <p className="text-swiss-dark/60 font-light text-xl leading-relaxed mb-12 border-l-2 border-swiss-dark/10 pl-6">
          {post.description}
        </p>

        {/* Hero image */}
        <div className="relative aspect-[16/9] overflow-hidden mb-16">
          <Image
            src={post.hero}
            alt={post.heroAlt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Content sections */}
        <div className="space-y-12">
          {post.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl text-swiss-dark mb-4">{section.heading}</h2>
              <p className="text-swiss-dark/70 font-light text-lg leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-swiss-dark/10 text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-dark/30 mb-6">
            Stay in the Heart of Santorini
          </p>
          <Link
            href={`/${locale}/book`}
            className="inline-block border border-swiss-dark/20 px-10 py-4 font-sans text-[10px] uppercase tracking-[0.3em] text-swiss-dark hover:bg-swiss-dark hover:text-swiss-white transition-all"
          >
            Book Danae Villa
          </Link>
        </div>
      </article>
    </main>
  );
}
