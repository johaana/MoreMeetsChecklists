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
    FileSpreadsheet, 
    Infinity, 
    Lock,
    ShieldCheck,
    Check,
    ShieldAlert
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
  const fallbackImage = 'https://i.postimg.cc/rsHq85yn/Screenshot-2026-04-09-091611.png';
  const ogImage = post.imageUrl || fallbackImage;

  return {
    title: `${post.title} | Operational Intelligence Debrief`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteUrl}/blog/${post.slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
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
  const readingTime = Math.ceil(wordCount / 225);

  const ctaMapping: Record<string, { bridge: string, button: string }> = {
    'logistics_warehouse_pack': {
        bridge: "Disruptions expose weak systems. Structure prevents them.",
        button: "Strengthen Logistics Controls"
    },
    'corporate_legal_compliance_starter_kit': {
        bridge: "Consistency is an asset. Chaos is a liability.",
        button: "Secure Corporate Governance"
    },
    'healthcare_and_hospital_operations': {
        bridge: "In healthcare, systems are the only constant.",
        button: "Strengthen Clinical Controls"
    },
    'restaurants': {
        bridge: "Brand trust is built on verifiable safety.",
        button: "Strengthen Restaurant Controls"
    },
    'hotels_and_resorts': {
        bridge: "Institutional standards require physical anchors.",
        button: "Strengthen Hotel Controls"
    },
    'facility_management_blueprint': {
        bridge: "People move on. The system must stay.",
        button: "Secure Facility Infrastructure"
    },
    'franchise_operations_pack': {
        bridge: "Scale requires a standard that doesn't drift.",
        button: "Secure Your Franchise Growth"
    },
    'school_operations_pack': {
        bridge: "Safety in education is binary: either it's engineered, or it's not.",
        button: "Strengthen School Safety"
    },
    'cinema_operations_pack': {
        bridge: "Technical excellence requires technical discipline.",
        button: "Secure Cinema Operations"
    },
    'bakery_confectionery_pack': {
        bridge: "Artisanal quality requires industrial discipline.",
        button: "Strengthen Bakery Controls"
    }
  };

  const fallbackCta = {
      bridge: "Operational risk isn't an option. It's a variable you control.",
      button: "Strengthen Your Operations"
  };

  const currentCta = (relatedPack && ctaMapping[relatedPack.id]) ? ctaMapping[relatedPack.id] : fallbackCta;

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
                <Link href="/blog" className="inline-flex items-center text-primary/60 text-[10px] font-black uppercase tracking-[0.3em] mb-12 hover:text-primary transition-colors">
                    <ChevronLeft className="w-3 h-3 mr-1" /> Back to Intelligence Hub
                </Link>
                
                <div className="grid lg:grid-cols-[1fr,550px] gap-16 items-center">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                        Sector: {post.tags[0]}
                      </p>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline" className="text-white/50 border-white/10 py-1 px-4 uppercase tracking-[0.2em] text-[9px] font-black rounded-full bg-white/5">
                          Protocol: {post.protocol || "Operational Standard"}
                        </Badge>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] flex items-center gap-2">
                          <ShieldAlert className="w-3 h-3 text-primary" /> Technical Analysis
                        </span>
                      </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline text-primary-text leading-[1.05] tracking-tighter uppercase italic">
                      {post.title}
                    </h1>
                    
                    <div className="flex items-center gap-8 text-[10px] font-black text-white/30 uppercase tracking-[0.3em] pt-6">
                       <span className="flex items-center gap-2 border-r border-white/10 pr-8"><User className="w-3 h-3 text-primary" /> {post.author}</span>
                       <span className="flex items-center gap-2 border-r border-white/10 pr-8"><Clock className="w-3 h-3 text-primary" /> {readingTime} MIN READ</span>
                       <span>{formatDate(post.publishedDate)}</span>
                    </div>
                  </div>

                  {post.imageUrl && (
                    <div className="relative group">
                      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-black">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          <div className="container px-4 md:px-6 mt-24 relative z-20">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose-custom max-w-none 
                  [&_h2]:font-headline [&_h2]:text-primary-text [&_h2]:font-black [&_h2]:tracking-tighter [&_h2]:uppercase [&_h2]:mt-24 [&_h2]:mb-12 [&_h2]:italic [&_h2]:text-4xl
                  [&_h3]:font-headline [&_h3]:text-primary [&_h3]:font-black [&_h3]:uppercase [&_h3]:text-xl [&_h3]:tracking-widest [&_h3]:mt-16 [&_h3]:mb-6
                  [&_p]:text-secondary-text [&_p]:leading-[1.8] [&_p]:mb-12 [&_p]:text-lg
                  [&_strong]:text-primary-text [&_strong]:font-black
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-white/[0.02] [&_blockquote]:px-12 [&_blockquote]:py-10 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:text-2xl [&_blockquote]:text-primary-text [&_blockquote]:my-24 [&_blockquote]:font-medium
                  "
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              <div className="mt-24 pt-12 relative group" id="resolution-protocol">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                  <Card className="overflow-hidden bg-black border border-white/10 rounded-[2.5rem] relative z-10 shadow-2xl">
                      <div className="p-8 md:p-16 text-center space-y-12">
                        <div className="space-y-6 max-w-2xl mx-auto">
                            <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tight text-primary-text uppercase italic leading-[1.15]">
                                OPERATIONAL DISCIPLINE REQUIRES STRUCTURE
                            </h2>
                            <p className="text-base font-bold text-accent/70 italic pt-2 border-t border-white/5 max-w-lg mx-auto">
                                "{currentCta.bridge}"
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <div className="space-y-6 w-full flex flex-col items-center">
                                <Button 
                                    asChild 
                                    variant="secondary" 
                                    className="h-auto py-5 px-10 bg-white/[0.03] border border-white/20 hover:bg-white/[0.08] hover:border-accent/30 text-accent transition-all rounded-2xl shadow-inner group/btn hover:shadow-[0_0_30px_-5px_rgba(245,166,35,0.3)]"
                                >
                                    <Link 
                                        href={relatedPack ? `/packs/${relatedPack.id}` : '/library'} 
                                        className="inline-flex items-center gap-3 text-lg md:text-2xl font-black tracking-tight leading-tight whitespace-nowrap"
                                    >
                                        <span>{currentCta.button}</span>
                                        <ArrowRight className="shrink-0 w-6 h-6 transition-transform group-hover/btn:translate-x-1.5" />
                                    </Link>
                                </Button>
                                
                                <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-lg mx-auto text-[10px] font-black uppercase text-white/20 tracking-widest text-left">
                                    {["No SaaS lock-in", "Editable formats", "Immediate deployment", "Expert customization"].map(item => (
                                        <div key={item} className="flex items-center gap-2">
                                            <Check className="w-3.5 h-3.5 text-primary/40" /> {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/[0.03] border-t border-white/5 py-6 px-12 flex flex-nowrap items-center justify-center overflow-x-auto gap-12 no-scrollbar">
                        {PROOFS.map(item => (
                            <div key={item.label} className="flex items-center gap-2 text-[9px] font-black uppercase text-white/30 tracking-[0.15em] shrink-0 whitespace-nowrap">
                                <item.icon className="w-4 h-4 text-primary/40" /> {item.label}
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
