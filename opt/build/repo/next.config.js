
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
       {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
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
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
