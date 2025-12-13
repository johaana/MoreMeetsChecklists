/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '**',
      },
       {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**',
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
