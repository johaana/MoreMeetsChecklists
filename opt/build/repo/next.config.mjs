/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      root: process.cwd(),
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
