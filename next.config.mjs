/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cf.bstatic.com' },
    ],
  },
  async redirects() {
    // Preserve old flat URLs → redirect to /en equivalents (301 permanent)
    const pages = ['rooms', 'experience', 'location', 'contact', 'book'];
    const legacyRedirects = pages.map((page) => ({
      source: `/${page}`,
      destination: `/en/${page}`,
      permanent: true,
    }));

    // Non-English blog requests → redirect to English canonical
    const blogRedirects = [
      { source: '/:locale(el|it|fr|de|zh)/blog', destination: '/en/blog', permanent: false },
      { source: '/:locale(el|it|fr|de|zh)/blog/:slug', destination: '/en/blog/:slug', permanent: false },
    ];

    return [...legacyRedirects, ...blogRedirects];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https://*.tile.openstreetmap.org https://cf.bstatic.com; font-src 'self' data:; connect-src 'self'; frame-src https://www.openstreetmap.org;",
          },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()' },
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
        ],
      },
    ];
  },
};

export default nextConfig;
