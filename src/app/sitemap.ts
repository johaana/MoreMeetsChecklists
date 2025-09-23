
import { MetadataRoute } from 'next'
import { premiumPacks } from '@/lib/premium-packs'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com'; // Replace with your actual domain

  // Static pages
  const staticRoutes = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/packs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    }
  ];

  // Dynamic pages for premium packs
  const packRoutes = premiumPacks.map((pack) => ({
    url: `${siteUrl}/packs/${pack.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...packRoutes];
}
