
import { MetadataRoute } from 'next';
import { premiumPacks } from '@/lib/premium-packs';
import { blogPosts } from '@/lib/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.moremeets.com';
  
  const staticRoutes = [
    '',
    '/library',
    '/blog',
    '/contact',
    '/about',
    '/terms',
    '/privacy',
    '/refund',
    '/shipping',
    '/sales-consultancy',
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const packsSitemap = premiumPacks
    .filter(p => p.id !== 'master_access')
    .map(p => ({
      url: `${siteUrl}/packs/${p.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

  const blogsSitemap = blogPosts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticSitemap, ...packsSitemap, ...blogsSitemap];
}
