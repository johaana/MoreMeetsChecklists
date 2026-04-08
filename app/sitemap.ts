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
  ];

  const eliteIds = [
    'restaurants', 
    'hotels_and_resorts', 
    'healthcare_and_hospital_operations', 
    'school_operations_pack', 
    'franchise_operations_pack', 
    'facility_management_blueprint', 
    'cinema_operations_pack'
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : (route === '/library' ? 1 : 0.8),
  }));

  const packsSitemap = premiumPacks
    .filter(p => p.id !== 'master_access')
    .map(p => {
      const isElite = eliteIds.includes(p.id);
      return {
        url: `${siteUrl}/packs/${p.id}`,
        lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: isElite ? 0.9 : 0.7,
      };
    });

  const blogsSitemap = blogPosts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticSitemap, ...packsSitemap, ...blogsSitemap];
}
