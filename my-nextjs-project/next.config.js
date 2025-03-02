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
  // Disable static error pages generation
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Filter out error pages from static export
    const filteredMap = { ...defaultPathMap };
    delete filteredMap['/404'];
    delete filteredMap['/500'];
    delete filteredMap['/_error'];
    return filteredMap;
  },
};

module.exports = nextConfig;
