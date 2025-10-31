
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-posts';
import { premiumPacks } from '@/lib/premium-packs';
import { individualChecklists } from '@/lib/individual-checklists';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap } from 'lucide-react';
import type { Metadata } from 'next';

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
  
  return {
    title: `${post.title} | MoreMeets Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedDate,
      authors: [post.author],
       ...(post.imageUrl && {
        images: [
          {
            url: post.imageUrl,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      }),
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
         ...(post.imageUrl && {
          images: [post.imageUrl],
        }),
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

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <article>
            <header className="mb-8 text-center">
               <div className="flex justify-center flex-wrap gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
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
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                        priority
                    />
                </div>
            )}
            
            <div 
              className="prose md:prose-lg dark:prose-invert max-w-none mx-auto prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-p:text-foreground/80 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <RelatedProductCard post={post} />
          </article>
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
