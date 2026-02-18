
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
import { 
    ArrowRight, 
    Clock, 
    User, 
    ChevronLeft, 
    FileText, 
    Shield, 
    FileSpreadsheet, 
    Infinity, 
    Zap, 
    Lock,
    ShieldCheck,
    Users,
    TrendingUp,
    HeartPulse
} from 'lucide-react';

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

  const getCTAConfig = () => {
    if (slug === 'the-day-the-process-left-with-him') {
        return {
            title: "Secure Your Institutional Memory",
            description: "Convert individual brilliance into permanent infrastructure. Mapped to ISO 9001 and ISO 41001 standards for instant organizational audit-readiness and continuity.",
            icon: Users,
            compliance: "ISO 9001 • ISO 41001"
        };
    }
    if (slug === 'the-25-million-burrito') {
        return {
            title: "Eliminate Operational Drift",
            description: "Deploy the verified, HACCP and FSSAI-aligned institutional backbone designed to eliminate the exact failure points analyzed in this debrief.",
            icon: Shield,
            compliance: "HACCP • FSSAI • ISO 22000"
        };
    }
    if (slug === 'patient-safety-process-discipline') {
        return {
            title: "Build Systems That Protect Lives",
            description: "Deploy an institutional-grade JCI and NABH aligned control protocol designed for zero-ambiguity execution in high-risk environments.",
            icon: HeartPulse,
            compliance: "JCI • NABH • WHO"
        };
    }
    if (slug === 'hidden-roi-of-sops') {
        return {
            title: "Turn Structure Into Profit",
            description: "ISO 27001 and SOC2 mapped protocols for organizational scalability. Reduce onboarding time by 40% and lower error rates instantly.",
            icon: TrendingUp,
            compliance: "ISO 27001 • SOC2 • Statutory"
        };
    }
    return {
        title: "Deploy Professional Standards",
        description: "ISO, HACCP, and OSHA mapped protocols for instant organizational audit-readiness and brand protection. Ready for immediate organizational deployment.",
        icon: ShieldCheck,
        compliance: "ISO • HACCP • OSHA"
    };
  };

  const cta = getCTAConfig();

  const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="pb-24 md:pb-32">
          <header className="w-full pt-12 pb-12 md:pt-16 md:pb-16 border-b border-white/5 bg-alternate-background/30">
            <div className="container px-4 md:px-6">
              <div className="max-w-6xl mx-auto">
                <Link href="/blog" className="inline-flex items-center text-primary/60 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-8 md:mb-12 hover:text-primary transition-colors">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Intelligence Hub
                </Link>
                
                <div className="grid lg:grid-cols-[1fr,550px] gap-8 md:gap-16 items-center">
                  <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 md:px-4 uppercase tracking-[0.2em] text-[8px] md:text-[9px] font-black rounded-full">
                        {post.tags[0]}
                      </Badge>
                      <span className="text-[8px] md:text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] flex items-center gap-2">
                        <FileText className="w-3 h-3" /> Technical Analysis
                      </span>
                    </div>
                    
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-black font-headline text-primary-text leading-[1.1] md:leading-[1.05] tracking-tighter uppercase italic">
                      {post.title}
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-secondary-text leading-relaxed font-medium max-w-2xl border-l-2 border-primary/20 pl-6 md:pl-8 italic">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em] pt-4 md:pt-6">
                       <span className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  {post.imageUrl && (
                    <div className="relative group">
                      <div className="relative aspect-video overflow-hidden rounded-xl md:rounded-2xl border border-white/10 shadow-2xl bg-black">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-16 h-16 md:w-24 md:h-24 border-r-2 border-b-2 border-primary/20 pointer-events-none" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-12 md:mt-24 relative z-20">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl dark:prose-invert max-w-none 
                  prose-headings:font-headline prose-headings:text-primary-text prose-headings:font-black prose-headings:tracking-tighter prose-headings:uppercase prose-headings:mt-16 md:prose-headings:mt-24 prose-headings:mb-8 md:prose-headings:mb-12 prose-headings:italic
                  prose-p:text-secondary-text prose-p:leading-[1.6] md:prose-p:leading-[1.8] prose-p:mb-12 md:prose-p:mb-16
                  prose-strong:text-primary-text prose-strong:font-black
                  prose-img:max-w-full md:prose-img:max-w-3xl md:prose-img:mx-auto prose-img:rounded-lg md:prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-16 md:prose-img:my-32 prose-img:border prose-img:border-white/10
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-white/[0.02] prose-blockquote:px-6 md:prose-blockquote:px-12 prose-blockquote:py-6 md:prose-blockquote:py-10 prose-blockquote:rounded-r-xl md:prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-xl md:prose-blockquote:text-2xl prose-blockquote:text-primary-text prose-blockquote:my-12 md:prose-blockquote:my-24 prose-blockquote:font-medium
                  prose-ul:space-y-4 md:prose-ul:space-y-6 prose-li:text-secondary-text
                  "
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              <div className="mt-12 md:mt-16 pt-8 md:pt-12 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] relative z-10 shadow-2xl">
                      <div className="p-6 md:p-12">
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-between">
                            <div className="space-y-4 flex-1">
                                <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none">Resolution Protocol</Badge>
                                <h2 className="text-2xl md:text-4xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-tight">
                                    {cta.title}
                                </h2>
                                <p className="text-sm md:text-base text-secondary-text leading-relaxed max-w-lg">
                                    {cta.description}
                                </p>
                                <div className="flex items-center gap-3 pt-2">
                                    <Shield className="w-3 h-3 text-accent" />
                                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-accent">Aligned: {cta.compliance}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-72">
                                <Button asChild size="lg" className="w-full h-16 bg-primary text-black font-black uppercase text-[10px] md:text-xs tracking-[0.2em] shadow-2xl rounded-sm border-none">
                                    <Link href={relatedPack ? `/packs/${relatedPack.id}` : '/library'} className="flex items-center justify-center text-center">
                                        Protect Your Operations <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5"/>
                                    </Link>
                                </Button>
                                <div className="text-center space-y-1">
                                    <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Built to prevent the failures analyzed in this debrief.</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.1em] text-primary">1 Expert Customization Included</p>
                                </div>
                            </div>
                        </div>
                      </div>
                      
                      {/* THE DELIVERABLE BAR */}
                      <div className="bg-white/[0.03] border-t border-white/5 py-4 px-6 md:px-12 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
                        {PROOFS.map(item => (
                            <div key={item.label} className="flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em]">
                                <item.icon className="w-3 h-3 text-primary/50" /> {item.label}
                            </div>
                        ))}
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
