/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },

  async redirects() {
    return [
      { source: '/about', destination: '/company', permanent: true },
      { source: '/about/', destination: '/company', permanent: true },
      { source: '/staffing-services', destination: '/services/recruitment', permanent: true },
      { source: '/staffing-services/', destination: '/services/recruitment', permanent: true },
      { source: '/onepage-seo-marketing', destination: '/services/digital', permanent: true },
      { source: '/onepage-seo-marketing/', destination: '/services/digital', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/products', destination: 'https://www.nimbussos.com/', permanent: true },
      { source: '/products/nimbussos', destination: 'https://www.nimbussos.com/', permanent: true },
      { source: '/industries', destination: '/services/recruitment#industries-we-serve', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
