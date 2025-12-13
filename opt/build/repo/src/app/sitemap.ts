
import { MetadataRoute } from 'next'
import { premiumPacks } from '@/lib/premium-packs'
import { blogPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com';

  const staticRoutes = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/library`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${siteUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/refund`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/shipping`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${siteUrl}/master-access`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.1 },
    { url: `${siteUrl}/thank-you`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.2 }
  ];

  const packRoutes = premiumPacks.map((pack) => ({
    url: `${siteUrl}/packs/${pack.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // The individual checklists page is being removed, so we don't need to add it to the sitemap.

  return [...staticRoutes, ...packRoutes, ...blogRoutes];
}
