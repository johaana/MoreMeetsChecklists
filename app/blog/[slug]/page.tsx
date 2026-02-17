
import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';
import { premiumPacks } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props
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
    title: `${post.title} | Black Box Debrief by MoreMeets™`,
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

export async function generateStaticParams() {
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
  const wordCount = post.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="pb-24">
          <header className="relative w-full py-24 md:py-32 lg:py-48 bg-black overflow-hidden">
            {post.imageUrl && (
              <div className="absolute inset-0 z-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-40 brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
            )}
            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white leading-[1.1]">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white/60 uppercase tracking-widest">
                   <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {post.author}</span>
                   <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {readingTime} min read</span>
                   <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 -mt-12 relative z-20">
            <div className="grid lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
              
              <div className="lg:col-span-8 bg-card border border-white/5 rounded-[2rem] p-8 md:p-12 shadow-2xl">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter
                    prose-p:text-secondary-text prose-p:leading-relaxed prose-p:mb-8
                    prose-strong:text-primary-text prose-strong:font-black
                    prose-img:rounded-3xl prose-img:shadow-2xl prose-img:my-16 prose-img:border prose-img:border-white/10
                    prose-blockquote:border-l-8 prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:p-10 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-medium prose-blockquote:text-primary-text
                    "
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>
              
              <aside className="lg:col-span-4 space-y-8">
                  <div className="sticky top-24 space-y-8">
                      {relatedPack && (
                          <Card className="overflow-hidden bg-primary text-primary-foreground border-none shadow-2xl rounded-3xl">
                              <CardHeader className="pb-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="outline" className="text-[10px] font-black border-primary-foreground/30 text-primary-foreground">STRATEGIC ASSET</Badge>
                                </div>
                                <CardTitle className="text-2xl font-black font-headline tracking-tight">{relatedPack.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="space-y-4">
                                <p className="text-sm font-medium opacity-90">{relatedPack.description}</p>
                                <div className="space-y-2">
                                    {relatedPack.sampleItems.slice(0, 3).map((item, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs font-bold">
                                            <ArrowRight className="w-3 h-3 mt-0.5 shrink-0" />
                                            <span>{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                              </CardContent>
                              <CardFooter>
                                <Button asChild className="w-full bg-white text-primary font-black uppercase hover:bg-white/90">
                                  <Link href={`/packs/${relatedPack.id}`}>Procure toolkit <ArrowRight className="ml-2 w-4 h-4"/></Link>
                                </Button>
                              </CardFooter>
                          </Card>
                      )}

                      <div className="p-8 border border-white/5 rounded-3xl bg-secondary/30 space-y-6">
                          <h3 className="font-black font-headline text-xl text-primary-text uppercase tracking-tighter">Series Navigation</h3>
                           <div className="flex flex-wrap gap-2">
                              {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map(tag => (
                                <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                                  <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-colors">
                                    {tag}
                                  </Badge>
                                </Link>
                              ))}
                          </div>
                      </div>

                      <div className="p-8 border border-white/5 rounded-3xl bg-card space-y-4">
                          <h4 className="font-bold text-lg">About Black Box Debrief</h4>
                          <p className="text-sm text-secondary-text leading-relaxed">
                              An investigative series by MoreMeets™ deconstructing systemic operational failures to build more resilient organizations.
                          </p>
                      </div>
                  </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
