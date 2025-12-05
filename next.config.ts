

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_MASTER_ACCESS_PASSWORD: process.env.MASTER_ACCESS_PASSWORD,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
      // --- Start of New Redirects ---
      {
        source: '/packs/automotive_workshop_pack/:path*',
        destination: '/packs',
        permanent: true,
      },
      {
        source: '/packs/bakery_confectionery_pack/:path*',
        destination: '/packs/bakery_confectionery_pack',
        permanent: true,
      },
       {
        source: '/packs/fitness_centers_gyms_pack/:path*',
        destination: '/packs/sports_clubs_stadium_operations_pack',
        permanent: true,
      },
      // Redirect old checklist URLs to the main checklists page or their new pack page
      {
        source: '/checklists/lock-out-tag-out-loto-sop/:path*',
        destination: '/packs/manufacturing_operations_ehs_pack',
        permanent: true,
      },
      {
        source: '/checklists/preventive-maintenance-pm-sop/:path*',
        destination: '/packs/manufacturing_operations_ehs_pack',
        permanent: true,
      },
      {
        source: '/packs/master-access',
        destination: '/master-access',
        permanent: true,
      },
      // --- End of New Redirects ---
    ]
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
