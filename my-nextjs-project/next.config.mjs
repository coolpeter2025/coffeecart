/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['nextjs.org'], // Allow images from nextjs.org (for initial template)
  },
  // Enable ISR for quick rebuilds
  experimental: {
    // Enable app directory features
    appDir: true,
  },
};

export default nextConfig;
