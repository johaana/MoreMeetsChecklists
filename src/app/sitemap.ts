import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com';

  const staticRoutes = [
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

  return staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}