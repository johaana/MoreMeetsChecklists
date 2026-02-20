import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "i.postimg.cc", pathname: "/**" },
      { protocol: "https", hostname: "postimg.cc", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/checklists',
        destination: '/library',
        permanent: true,
      },
      {
        source: '/sales-consultancy',
        destination: '/',
        permanent: true,
      },
      {
        source: '/checklists/surgical-safety',
        destination: '/packs/healthcare_and_hospital_operations',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;