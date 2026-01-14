/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  optimizeFonts: false,
  // Add the following redirect configuration
  async redirects() {
    if (!process.env.CHECKIN_REDIRECT) return [];
    return [
      {
        source: '/check-in',
        destination: process.env.CHECKIN_REDIRECT,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
