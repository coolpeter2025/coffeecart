/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
    ],
  },
  // Disable static error pages generation
  output: 'standalone',
  // Disable static optimization for error pages
  experimental: {
    disableOptimizedLoading: true,
    optimizeCss: false
  }
};

module.exports = nextConfig;
