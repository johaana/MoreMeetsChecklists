
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- Start of New Redirects ---
      // Redirect old pack URLs to the main packs page or their new equivalent
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
