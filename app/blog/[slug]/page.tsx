
import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';
import { premiumPacks } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight, Clock, User, ChevronLeft } from 'lucide-react';

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
      title: 'Analysis Not Found | MoreMeets™',
      description: 'The requested investigative report could not be located.',
    };
  }

  return {
    title: `${post.title} | Black Box Debrief`,
    description: post.description,
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
  const readingTime = Math.max(12, Math.ceil(wordCount / 200));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="pb-24">
          {/* Magazine Hero Header */}
          <header className="relative w-full py-24 md:py-32 lg:py-40 bg-black overflow-hidden border-b border-white/5">
            {post.imageUrl && (
              <div className="absolute inset-0 z-0">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="object-cover w-full h-full opacity-30 brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
            )}
            <div className="container px-4 md:px-6 relative z-10">
              <div className="max-w-4xl mx-auto space-y-8">
                <Link href="/blog" className="inline-flex items-center text-primary text-xs font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back to Debriefs
                </Link>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md px-3 py-1 font-black uppercase text-[10px] tracking-widest">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white leading-[1.05] drop-shadow-2xl">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-white/50 uppercase tracking-[0.3em] border-t border-white/10 pt-8">
                   <span className="flex items-center gap-2"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                   <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN ANALYSIS</span>
                   <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-16 relative z-20">
            <div className="max-w-4xl mx-auto">
              {/* Main Editorial Content */}
              <div className="bg-transparent rounded-[2rem] p-0 md:p-4">
                <div 
                  className="prose prose-xl dark:prose-invert max-w-none 
                    prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter
                    prose-p:text-secondary-text prose-p:leading-[1.8] prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
                    prose-strong:text-primary-text prose-strong:font-black
                    prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-20 prose-img:border prose-img:border-white/5
                    prose-blockquote:border-l-[12px] prose-blockquote:border-primary prose-blockquote:bg-white/[0.02] prose-blockquote:p-12 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-2xl md:prose-blockquote:text-3xl prose-blockquote:font-bold prose-blockquote:text-primary-text prose-blockquote:leading-relaxed prose-blockquote:my-20
                    "
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>

              {/* Related Pack - Strategic Call-to-Action at the BOTTOM */}
              {relatedPack && (
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <Card className="overflow-hidden bg-primary text-primary-foreground border-none shadow-[0_0_100px_rgba(34,197,94,0.1)] rounded-[3rem] p-8 md:p-16">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="text-[10px] font-black border-primary-foreground/30 text-primary-foreground uppercase tracking-widest px-4 py-1">The Structural Solution</Badge>
                                    <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter leading-none">{relatedPack.title}</h2>
                                    <p className="text-lg font-bold opacity-90 leading-tight">{relatedPack.description}</p>
                                    <div className="space-y-3">
                                        {relatedPack.sampleItems.slice(0, 4).map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-sm font-black uppercase tracking-tight">
                                                <ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />
                                                <span>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Procurement Type</p>
                                        <p className="text-2xl font-black uppercase">Lifetime Org License</p>
                                        <div className="pt-4">
                                            <Button asChild size="lg" className="w-full h-16 bg-white text-primary font-black uppercase text-base hover:bg-white/90 shadow-2xl">
                                                <Link href={`/packs/${relatedPack.id}`}>Procure Toolkit <ArrowRight className="ml-2 w-5 h-5"/></Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] font-black uppercase tracking-widest opacity-50">Audit-Ready • Excel Native • Instant Delivery</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
              )}

              {/* Series Footer Navigation */}
              <div className="mt-32 p-12 rounded-[3rem] bg-secondary/30 border border-white/5 space-y-8">
                  <h3 className="font-black font-headline text-2xl text-primary-text uppercase tracking-tighter">Continue the Investigation</h3>
                   <div className="flex flex-wrap gap-3">
                      {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map(tag => (
                        <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`}>
                          <Badge variant="outline" className="cursor-pointer hover:bg-primary/10 hover:border-primary/30 transition-all px-4 py-2 font-bold uppercase text-[10px] tracking-widest">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                  </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
