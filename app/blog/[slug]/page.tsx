
import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';
import { premiumPacks } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Clock, User, ChevronLeft, ShieldCheck, AlertCircle } from 'lucide-react';

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
  const readingTime = Math.max(25, Math.ceil(wordCount / 200));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="pb-24">
          {/* Magazine Journalistic Header */}
          <header className="w-full pt-16 pb-12 border-b border-white/5 bg-alternate-background">
            <div className="container px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:opacity-70 transition-opacity">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Return to Intelligence Hub
                </Link>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-widest text-[9px] font-black">
                        {post.tags[0]}
                      </Badge>
                      <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">Case Study No. {Math.floor(Math.random() * 900) + 100}</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text leading-[1.05] tracking-tighter">
                      {post.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-secondary-text leading-relaxed font-medium">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/50 uppercase tracking-[0.2em] pt-4">
                       <span className="flex items-center gap-2"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {post.imageUrl && (
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-16 relative z-20">
            <div className="max-w-4xl mx-auto">
              {/* Main Editorial Content */}
              <div className="bg-transparent rounded-[2rem]">
                <div 
                  className="prose prose-xl dark:prose-invert max-w-none 
                    prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:border-b-4 prose-headings:border-primary prose-headings:pb-4 prose-headings:mt-24 prose-headings:mb-12
                    prose-p:text-secondary-text prose-p:leading-[1.8] prose-p:mb-10 prose-p:text-lg md:prose-p:text-xl
                    prose-strong:text-primary-text prose-strong:font-black
                    prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:my-20 prose-img:border prose-img:border-white/5
                    prose-blockquote:border-l-[12px] prose-blockquote:border-primary prose-blockquote:bg-white/[0.02] prose-blockquote:p-12 prose-blockquote:rounded-r-3xl prose-blockquote:italic prose-blockquote:text-2xl md:prose-blockquote:text-3xl prose-blockquote:font-bold prose-blockquote:text-primary-text prose-blockquote:leading-relaxed prose-blockquote:my-20
                    prose-ul:space-y-4 prose-li:text-secondary-text
                    "
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>

              {/* Strategic CTA - THE FINAL SOLUTION */}
              {relatedPack && (
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <Card className="overflow-hidden bg-primary text-primary-foreground border-none shadow-[0_0_100px_rgba(34,197,94,0.1)] rounded-[3rem] p-8 md:p-16 relative">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck className="w-48 h-48" />
                            </div>
                            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                <div className="space-y-6">
                                    <Badge variant="outline" className="text-[10px] font-black border-primary-foreground/30 text-primary-foreground uppercase tracking-widest px-4 py-1">Structural Solution</Badge>
                                    <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter leading-none">{relatedPack.title}</h2>
                                    <p className="text-lg font-bold opacity-90 leading-tight">The expert-built framework designed to prevent the exact failure points analyzed in this debrief.</p>
                                    <div className="space-y-3">
                                        {relatedPack.sampleItems.slice(0, 4).map((item, i) => (
                                            <div key={i} className="flex items-start gap-3 text-xs font-black uppercase tracking-tight">
                                                <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
                                                <span>{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-4">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Licensing Type</p>
                                        <p className="text-2xl font-black uppercase">Lifetime Org Access</p>
                                        <div className="pt-4">
                                            <Button asChild size="lg" className="w-full h-16 bg-white text-primary font-black uppercase text-base hover:bg-white/90 shadow-2xl">
                                                <Link href={`/packs/${relatedPack.id}`}>Procure Toolkit <ArrowRight className="ml-2 w-5 h-5"/></Link>
                                            </Button>
                                        </div>
                                    </div>
                                    <p className="text-center text-[9px] font-black uppercase tracking-widest opacity-50">Audit-Ready • Excel Based • Immediate Delivery</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
              )}

              {/* Related Intelligence */}
              <div className="mt-32 p-12 rounded-[3rem] bg-secondary/30 border border-white/5 space-y-8">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-primary" />
                    <h3 className="font-black font-headline text-2xl text-primary-text uppercase tracking-tighter">Continuing Investigations</h3>
                  </div>
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
