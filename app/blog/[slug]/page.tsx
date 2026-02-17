
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
import { ArrowRight, Clock, User, ChevronLeft, ShieldCheck, FileText, Check } from 'lucide-react';

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
      title: 'Debrief Not Found | MoreMeets™',
      description: 'The requested operational analysis could not be located.',
    };
  }

  return {
    title: `${post.title} | Operational Intelligence`,
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
  const readingTime = Math.max(12, Math.ceil(wordCount / 225));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="pb-24">
          {/* Journalistic Hero Header */}
          <header className="w-full pt-12 pb-12 border-b border-white/5 bg-alternate-background/50">
            <div className="container px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-primary/60 text-[10px] font-black uppercase tracking-[0.3em] mb-10 hover:text-primary transition-colors">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Intelligence Hub
                </Link>
                
                <div className="grid lg:grid-cols-[1fr,450px] gap-12 items-start">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-primary border-primary/30 py-0.5 px-3 uppercase tracking-widest text-[9px] font-black rounded-sm">
                        {post.tags[0]}
                      </Badge>
                      <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] flex items-center gap-2">
                        <FileText className="w-3 h-3" /> Operational Intelligence
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text leading-[1.05] tracking-tighter uppercase italic">
                      {post.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-secondary-text leading-relaxed font-medium max-w-2xl border-l-2 border-primary/20 pl-6 italic">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.2em] pt-4">
                       <span className="flex items-center gap-2 border-r border-white/10 pr-6"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2 border-r border-white/10 pr-6"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {post.imageUrl && (
                    <div className="relative group">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-2xl bg-black">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-primary/20 pointer-events-none" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-16 relative z-20">
            <div className="max-w-2xl mx-auto">
              <div className="bg-transparent">
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none 
                    prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:mt-24 prose-headings:mb-10 prose-headings:italic
                    prose-p:text-secondary-text prose-p:leading-[1.8] prose-p:mb-10 prose-p:text-lg
                    prose-strong:text-primary-text prose-strong:font-black
                    prose-img:w-screen prose-img:max-w-[calc(100%+2rem)] md:prose-img:max-w-[calc(100%+16rem)] prose-img:-mx-4 md:prose-img:-mx-32 prose-img:rounded-sm prose-img:shadow-2xl prose-img:my-20 md:prose-img:my-32 prose-img:border prose-img:border-white/10
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/[0.02] prose-blockquote:px-10 prose-blockquote:py-8 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-primary-text prose-blockquote:my-20 prose-blockquote:font-medium
                    prose-ul:space-y-4 prose-li:text-secondary-text
                    "
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>

              {/* The Refined Strategic Solution CTA */}
              {relatedPack && (
                <div className="mt-32 pt-16 border-t border-white/5 relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl p-8 md:p-12 relative z-10">
                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                            <ShieldCheck className="w-48 h-48" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                            <div className="space-y-4 flex-1">
                                <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="text-[9px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] px-3 py-1 rounded-none">Structural Reference</Badge>
                                    <span className="text-[9px] text-white/30 font-black uppercase tracking-widest italic">Includes 1 Tailored Customization</span>
                                </div>
                                <h2 className="text-3xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-none">{relatedPack.title}</h2>
                                <p className="text-sm text-secondary-text leading-relaxed max-w-md">
                                    Deploy the verified, audit-ready framework designed to eliminate the exact failure points analyzed in this debrief. Procure the full technical asset below.
                                </p>
                                <div className="flex items-center gap-6 text-[9px] font-black uppercase tracking-widest text-white/40 pt-2">
                                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-primary"/> EXCEL FORMAT</span>
                                    <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-primary"/> LIFETIME LICENSE</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-64">
                                <Button asChild size="lg" className="w-full h-14 bg-primary text-black font-black uppercase text-xs tracking-widest shadow-xl hover:scale-[1.02] transition-transform rounded-sm">
                                    <Link href={`/packs/${relatedPack.id}`}>Procure Asset <ArrowRight className="ml-2 h-4 w-4"/></Link>
                                </Button>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-center opacity-40 italic">MMA-2025 Standard</p>
                            </div>
                        </div>
                    </Card>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
