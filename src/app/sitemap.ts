
import { MetadataRoute } from 'next'
import { premiumPacks } from '@/lib/premium-packs'
import { individualChecklists } from '@/lib/individual-checklists'
import { blogPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com';

  const staticRoutes = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 1 },
    { url: `${siteUrl}/sales-consultancy`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${siteUrl}/packs`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${siteUrl}/checklists`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${siteUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${siteUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${siteUrl}/refund`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${siteUrl}/shipping`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.5 },
    { url: `${siteUrl}/thank-you`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.4 }
  ];

  const packRoutes = premiumPacks.map((pack) => ({
    url: `${siteUrl}/packs/${pack.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const checklistRoutes = individualChecklists.map((checklist) => ({
    url: `${siteUrl}/checklists/${checklist.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...packRoutes, ...checklistRoutes, ...blogRoutes];
}

    