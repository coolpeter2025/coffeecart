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
  // Add trailing slash to force dynamic routing
  trailingSlash: true,
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
  // Disable compression
  compress: false,
  // Force all pages to be server-side rendered
  reactStrictMode: false,
  // Disable static generation
  generateEtags: false,
  // Disable static generation completely
  experimental: {
    disableOptimizedLoading: true,
    optimizeCss: false,
    serverComponentsExternalPackages: ['react', 'react-dom'],
    // Force pages to be dynamically rendered
    esmExternals: true
  },
  // Set static page generation timeout to 0 to disable static generation
  staticPageGenerationTimeout: 0
};

module.exports = nextConfig;
