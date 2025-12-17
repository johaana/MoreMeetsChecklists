

import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { premiumPacks } from '@/lib/premium-packs';
import { individualChecklists } from '@/lib/individual-checklists';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';


type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | MoreMeets',
    };
  }
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  let imageUrl: string;

  if (post.imageUrl) {
    imageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `${siteUrl}${post.imageUrl}`;
  } else {
    const ogUrl = new URL(`${siteUrl}/api/og`);
    ogUrl.searchParams.set('type', 'blog');
    ogUrl.searchParams.set('slug', post.slug);
    imageUrl = ogUrl.toString();
  }


  return {
    metadataBase: new URL(siteUrl),
    title: `${post.title} | MoreMeets Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
        images: [imageUrl],
    }
  };
}

function RelatedProductCard({ post }: { post: BlogPost }) {
    let item: any = null;
    let link = '';
    let itemType = '';

    if (post.relatedPackId) {
        item = premiumPacks.find(p => p.id === post.relatedPackId);
        if (item) {
            link = `/packs/${item.id}`;
            itemType = 'Premium Pack';
        }
    } else if (post.relatedChecklistId) {
        item = individualChecklists.find(c => c.id === post.relatedChecklistId);
        if (item) {
            link = `/checklists/${item.id}`;
            itemType = 'Individual Checklist';
        }
    }

    if (!item) {
        return null;
    }

    return (
        <div className="mt-12 p-6 bg-secondary/50 rounded-2xl border-2 border-dashed border-primary/20 text-center">
            <h3 className="text-xl font-bold font-headline text-primary mb-2">Continue Your Journey to Excellence</h3>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">The concepts in this article are operationalized in the following toolkit:</p>
            <p className="text-lg font-bold">{item.title}</p>
            <p className="text-sm text-muted-foreground mb-6">{itemType}</p>
            <Button asChild size="lg">
                <Link href={link}>
                    Explore The Full Toolkit <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}

function YouMightAlsoLike({ currentSlug }: { currentSlug: string }) {
  const otherPosts = blogPosts
    .filter(p => p.slug !== currentSlug) // Exclude the current post
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 3); // Take the first 3

  if (otherPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t">
      <h2 className="text-2xl font-bold font-headline text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
            {post.imageUrl && (
              <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
            )}
            <CardHeader>
                <CardTitle className="text-lg font-headline leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription className="text-sm">{post.description}</CardDescription>
            </CardContent>
            <CardFooter>
                 <Button asChild variant="secondary" size="sm" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const publishDate = new Date(post.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.moremeets.com';
  const ogUrl = new URL(`${siteUrl}/api/og`);
  ogUrl.searchParams.set('type', 'blog');
  ogUrl.searchParams.set('slug', post.slug);
  const imageUrl = post.imageUrl || ogUrl.toString();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    headline: post.title,
    description: post.description,
    image: imageUrl,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MoreMeets',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/favicon.ico`,
      },
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
  };


  return (
    <div className="flex flex-col min-h-screen bg-background">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <article>
            <header className="mb-8 text-center">
               <div className="flex justify-center flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                   <Link href={`/blog?tag=${encodeURIComponent(tag)}`} key={tag}>
                    <Badge variant="secondary" className="hover:bg-primary/10 transition-colors cursor-pointer">{tag}</Badge>
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-primary">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                Published on {publishDate} by {post.author}
              </p>
            </header>

            {post.imageUrl && (
                <div className="my-8 md:my-12 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full object-cover"
                    />
                </div>
            )}
            
             <div 
              className={cn(
                  "prose dark:prose-invert max-w-none mx-auto",
                  "text-base md:text-lg", // Base font size
                  "prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg", // Specific responsive paragraph
                  "prose-headings:font-headline prose-headings:tracking-tight",
                  "prose-h2:text-primary",
                  "prose-h3:text-foreground/90",
                  "prose-a:text-accent hover:prose-a:text-accent/80",
                  "prose-blockquote:border-accent prose-blockquote:text-muted-foreground",
                  "prose-strong:text-foreground/90",
                  
                  // Styles for the failure analysis section
                  "[&_.failure-analysis-section]:mt-12 [&_.failure-analysis-section]:mb-8",
                  "[&_.failure-analysis-section_h3]:text-2xl [&_.failure-analysis-section_h3]:mb-2 [&_.failure-analysis-section_h3]:text-primary",
                  
                  // Styles for the intervention box
                   "[&_.intervention-box]:mt-6 [&_.intervention-box]:p-6 [&_.intervention-box]:rounded-xl [&_.intervention-box]:bg-muted/30 [&_.intervention-box]:border-l-4 [&_.intervention-box]:border-l-primary",
                  "[&_.intervention-box_h4]:flex [&_.intervention-box_h4]:items-center [&_.intervention-box_h4]:gap-2 [&_.intervention-box_h4]:text-lg [&_.intervention-box_h4]:font-bold [&_.intervention-box_h4]:text-primary",
                  "[&_.intervention-box_p]:text-sm [&_.intervention-box_p]:md:text-base [&_.intervention-box_p]:text-foreground/80 [&_.intervention-box_p]:mt-2",
                  "[&_.intervention-box_code]:font-bold [&_.intervention-box_code]:text-foreground",

                   // NEW styles for the embedded CTA
                  "[&_.embedded-cta]:mt-4 [&_.embedded-cta]:pt-4 [&_.embedded-cta]:border-t [&_.embedded-cta]:border-dashed [&_.embedded-cta]:border-primary/20",
                  "[&_.embedded-cta]:text-sm [&_.embedded-cta]:text-center [&_.embedded-cta]:text-muted-foreground",
                  "[&_.embedded-cta_strong]:text-foreground",
                  "[&_.embedded-cta_a]:font-bold [&_.embedded-cta_a]:text-accent [&_.embedded-cta_a]:underline-offset-4 [&_.embedded-cta_a]:hover:text-accent/80"

              )}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <RelatedProductCard post={post} />
          </article>

           <YouMightAlsoLike currentSlug={post.slug} />

        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

    