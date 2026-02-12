import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next';
import { premiumPacks } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | MoreMeets™',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'blog');
  ogUrl.searchParams.set('slug', post.slug);

  return {
    metadataBase: new URL(siteUrl),
    title: `${post.title} | MoreMeets™ Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | MoreMeets™ Blog`,
      description: post.description,
      images: [{ url: ogUrl.toString(), width: 1200, height: 630, alt: post.title }],
    },
     twitter: {
      card: 'summary_large_image',
      title: `${post.title} | MoreMeets™ Blog`,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPack = post.relatedPackId ? premiumPacks.find(p => p.id === post.relatedPackId) : null;
  const wordCount = post.content.split(' ').length;
  const readingTime = Math.ceil(wordCount / 200);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'blog');
  ogUrl.searchParams.set('slug', post.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: ogUrl.toString(),
    author: {
      '@type': 'Organization',
      name: 'MoreMeets™',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoreMeets™',
       logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.png`,
      },
    },
    datePublished: post.publishedDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />
        <main className="flex-1">
          <article>
            <header className="relative w-full py-24 md:py-32 lg:py-48 bg-secondary/50">
              <div className="absolute inset-0">
                {post.imageUrl && (
                  <>
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
                  </>
                )}
              </div>
              <div className="container px-4 md:px-6 relative z-10 text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {post.tags.map(tag => (
                       <Badge key={tag} variant="secondary" className="bg-white/10 text-white backdrop-blur-sm">
                        <Link href={`/blog?tag=${tag}`}>{tag}</Link>
                      </Badge>
                    ))}
                  </div>
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary-foreground drop-shadow-md">
                    {post.title}
                  </h1>
                  <div className="flex items-center justify-center gap-4 text-sm text-primary-foreground/80">
                     <p>By {post.author}</p>
                    <p>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                     <p>{readingTime} min read</p>
                  </div>
                </div>
              </div>
            </header>

            <div className="container px-4 md:px-6 py-12 md:py-16">
              <div className="grid lg:grid-cols-4 gap-12">
                
                <div className="lg:col-span-3 prose prose-lg dark:prose-invert max-w-full prose-headings:font-headline prose-headings:text-primary prose-p:text-muted-foreground prose-a:text-accent prose-strong:text-foreground prose-p:my-6 prose-headings:my-10">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>
                
                <aside className="lg:col-span-1 lg:sticky top-24 self-start">
                    <div className="space-y-6">
                        {relatedPack && (
                            <div className="p-6 border rounded-2xl bg-secondary/50">
                                <h3 className="font-bold mb-4">Related Toolkit</h3>
                                <div className="space-y-4">
                                  <h4 className="font-semibold">{relatedPack.title}</h4>
                                  <p className="text-sm text-muted-foreground">{relatedPack.description}</p>
                                  <Button asChild className="w-full">
                                    <Link href={`/packs/${relatedPack.id}`}>View Pack <ArrowRight className="ml-2 w-4 h-4"/></Link>
                                  </Button>
                                </div>
                            </div>
                        )}
                        <div className="p-6 border rounded-2xl bg-secondary/50">
                            <h3 className="font-bold mb-4">Explore More Topics</h3>
                             <div className="flex flex-wrap gap-2">
                                {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map(tag => (
                                <Badge key={tag} variant="outline" asChild>
                                  <Link href={`/blog?tag=${tag}`}>{tag}</Link>
                                </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
              </div>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}