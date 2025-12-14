/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔧 REQUIRED for Firebase Studio + Turbopack
  turbopack: {
    root: process.cwd()
  },
};

export default nextConfig;
