
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
    Lock,
    ShieldCheck,
    Check
} from 'lucide-react';

type Props = {
  params: Promise<{ slug: string }>
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
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

  const siteUrl = 'https://www.moremeets.com';
  const ogImage = post.imageUrl || `${siteUrl}/api/og?type=blog&slug=${post.slug}`;

  return {
    title: `${post.title} | Operational Intelligence`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
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
  const readingTime = Math.max(12, Math.ceil(wordCount / 225));

  const cta = {
      title: "OPERATIONAL DISCIPLINE REQUIRES STRUCTURE",
      description: "Deploy ISO, HACCP, and OSHA-aligned protocols built for real-world execution — not just documentation.",
      compliance: relatedPack ? relatedPack.category : "Global Standards",
      buttonText: relatedPack ? `Explore - ${relatedPack.title}` : "Explore - Operational Systems"
  };

  const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
  ];

  const REASSURANCES = [
    "No SaaS lock-in",
    "Editable formats",
    "Immediate deployment",
    "Expert customization included"
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

                    <div className="flex wrap items-center gap-4 md:gap-8 text-[8px] md:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] md:tracking-[0.3em] pt-4 md:pt-6">
                       <span className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2 border-r border-white/10 pr-4 md:pr-8"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{formatDate(post.publishedDate)}</span>
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
                className="prose-custom max-w-none 
                  [&_h2]:font-headline [&_h2]:text-primary-text [&_h2]:font-black [&_h2]:tracking-tighter [&_h2]:uppercase [&_h2]:mt-16 [&_h2]:md:mt-24 [&_h2]:mb-8 [&_h2]:md:mb-12 [&_h2]:italic [&_h2]:text-2xl [&_h2]:md:text-4xl
                  [&_p]:text-secondary-text [&_p]:leading-[1.6] [&_p]:md:leading-[1.8] [&_p]:mb-12 [&_p]:md:mb-16 [&_p]:text-base [&_p]:md:text-lg
                  [&_strong]:text-primary-text [&_strong]:font-black
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-white/[0.02] [&_blockquote]:px-6 [&_blockquote]:md:px-12 [&_blockquote]:py-6 [&_blockquote]:md:py-10 [&_blockquote]:rounded-r-xl [&_blockquote]:md:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:text-xl [&_blockquote]:md:text-2xl [&_blockquote]:text-primary-text [&_blockquote]:my-12 [&_blockquote]:md:my-24 [&_blockquote]:font-medium
                  "
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              <div className="mt-12 md:mt-16 pt-8 md:pt-12 relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] relative z-10 shadow-2xl">
                      <div className="p-8 md:p-16 text-center space-y-10 md:space-y-12">
                        <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
                            <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                            <h2 className="text-[1.4rem] sm:text-3xl md:text-5xl font-black font-headline tracking-tight text-primary-text uppercase italic leading-[1.15]">
                                {cta.title}
                            </h2>
                            <p className="text-sm md:text-lg text-secondary-text leading-relaxed">
                                {cta.description}
                            </p>
                            
                            <div className="flex items-center justify-center gap-3 pt-2">
                                <Shield className="w-3.5 h-3.5 text-white/40" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Sector: {cta.compliance}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-6 md:gap-8">
                            <div className="space-y-8 w-full flex flex-col items-center">
                                <Link 
                                    href={relatedPack ? `/packs/${relatedPack.id}` : '/library'} 
                                    className="group/link inline-flex items-center gap-3 text-[13px] sm:text-lg md:text-2xl font-bold text-accent hover:brightness-110 transition-all tracking-tight text-center leading-tight whitespace-nowrap"
                                >
                                    <span>{cta.buttonText}</span>
                                    <ArrowRight className="shrink-0 w-4 h-4 md:w-6 md:h-6 transition-transform group-hover/link:translate-x-2" />
                                </Link>
                                
                                <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md mx-auto text-[10px] font-black uppercase text-white/30 tracking-widest text-left">
                                    {REASSURANCES.map(item => (
                                        <div key={item} className="flex items-center gap-2">
                                            <Check className="w-3.5 h-3.5 text-primary/50" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/[0.03] border-t border-white/5 py-5 px-4 md:px-12 flex flex-nowrap items-center justify-center overflow-x-auto gap-8 no-scrollbar">
                        {PROOFS.map(item => (
                            <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                                <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
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
