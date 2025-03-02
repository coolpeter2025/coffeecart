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
  // Completely disable static export
  output: 'standalone',
  // Disable static optimization
  experimental: {
    disableOptimizedLoading: true,
    optimizeCss: false
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static generation for specific paths
  distDir: process.env.NODE_ENV === 'production' ? '.next-production' : '.next',
};

module.exports = nextConfig;
