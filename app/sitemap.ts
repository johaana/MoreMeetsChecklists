import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com';
  
  const routes = [
    '',
    '/library',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
    '/refund',
    '/shipping',
    '/sales-consultancy',
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
