import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/master-access/',
    },
    sitemap: 'https://www.moremeets.com/sitemap.xml',
  };
}
