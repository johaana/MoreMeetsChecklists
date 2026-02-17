
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
import { ArrowRight, Clock, User, ChevronLeft, FileText, Check, Sparkles } from 'lucide-react';

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
        <article className="pb-32">
          {/* Executive Hero Header */}
          <header className="w-full pt-16 pb-16 border-b border-white/5 bg-alternate-background/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-primary/60 text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:text-primary transition-colors">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Intelligence Hub
                </Link>
                
                <div className="grid lg:grid-cols-[1fr,450px] gap-16 items-center">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.2em] text-[9px] font-black rounded-full">
                        {post.tags[0]}
                      </Badge>
                      <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] flex items-center gap-2">
                        <FileText className="w-3 h-3" /> Technical Analysis
                      </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-primary-text leading-[1.05] tracking-tighter uppercase italic">
                      {post.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-secondary-text leading-relaxed font-medium max-w-2xl border-l-2 border-primary/20 pl-8 italic">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-8 text-[10px] font-black text-white/30 uppercase tracking-[0.3em] pt-6">
                       <span className="flex items-center gap-2 border-r border-white/10 pr-8"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2 border-r border-white/10 pr-8"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {post.imageUrl && (
                    <div className="relative group hidden lg:block">
                      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-primary/20 pointer-events-none" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-24 relative z-20">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:mt-24 prose-headings:mb-12 prose-headings:italic
                  prose-p:text-secondary-text prose-p:leading-[1.8] prose-p:mb-12 prose-p:text-xl
                  prose-strong:text-primary-text prose-strong:font-black
                  prose-img:max-w-xl prose-img:mx-auto prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-32 prose-img:border prose-img:border-white/10
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/[0.02] prose-blockquote:px-12 prose-blockquote:py-10 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-primary-text prose-blockquote:my-24 prose-blockquote:font-medium
                  prose-ul:space-y-6 prose-li:text-secondary-text prose-li:text-lg
                  "
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              {/* Refined Institutional Access CTA */}
              <div className="mt-48 pt-24 border-t border-white/5 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <Card className="overflow-hidden bg-black border border-white/10 rounded-3xl p-10 md:p-16 relative z-10">
                      <div className="absolute top-0 right-0 p-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                          <Sparkles className="w-64 h-64" />
                      </div>
                      <div className="flex flex-col md:flex-row gap-16 items-center justify-between">
                          <div className="space-y-6 flex-1">
                              <div className="flex items-center gap-4">
                                  <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.3em] px-4 py-1.5 rounded-none">Structural Solution</Badge>
                                  <span className="text-[10px] text-white/30 font-black uppercase tracking-widest italic">Includes 1 Tailored Customization</span>
                              </div>
                              <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-none">{relatedPack ? relatedPack.title : 'Standard library'}</h2>
                              <p className="text-base text-secondary-text leading-relaxed max-w-lg">
                                  Deploy the verified, audit-ready institutional backbone designed to eliminate the exact failure points analyzed in this debrief. Procure the technical infrastructure below.
                              </p>
                              <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pt-4">
                                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> EXCEL FORMAT</span>
                                  <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary"/> LIFETIME LICENSE</span>
                              </div>
                          </div>
                          <div className="flex flex-col gap-6 shrink-0 w-full md:w-72">
                              <Button asChild size="lg" className="w-full h-16 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:scale-[1.02] transition-transform rounded-sm">
                                  <Link href={relatedPack ? `/packs/${relatedPack.id}` : '/library'}>Procure Full Asset <ArrowRight className="ml-2 h-5 w-5"/></Link>
                              </Button>
                              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center opacity-30 italic">Ready for Deployment</p>
                          </div>
                      </div>
                  </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
