
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
    },
    twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.description,
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
            <p className="text-muted-foreground mb-4">The concepts in this article are operationalized in the following toolkit:</p>
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
              <div className="flex justify-center gap-2 mb-4">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-primary">
                {post.title}
              </h1>
              <p className="text-muted-foreground text-sm">
                Published on {publishDate} by {post.author}
              </p>
            </header>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mx-auto [&_p]:text-foreground/80 [&_h3]:text-primary"
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
