
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔧 REQUIRED for Firebase Studio + Turbopack
  turbopack: {
    root: __dirname
  },

  // ✅ Updated key (was experimental.serverComponentsExternalPackages)
  serverExternalPackages: []
};

export default nextConfig;
