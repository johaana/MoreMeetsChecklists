
'use client';

import Link from 'next/link';
import { premiumPacks } from '@/lib/premium-packs';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { painPointsContent } from '@/lib/pain-points-content';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/header';
import { useIsMobile } from '@/hooks/use-mobile';
import { PainPoint } from '@/components/ui/pain-point';
import type { PremiumPack } from "@/lib/premium-packs";
import PricingClient from './pricing-client';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';

const IconComponent = ({ name, className }: { name: string, className?:string }) => {
    const iconName = name.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()).replace(/\s/g, '');
    const Icon = (LucideIcons as any)[iconName];
    if (!Icon) {
        return <LucideIcons.Package className={className} />;
    }
    return <Icon className={className} />;
};


const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-2 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">
                        {content.title}
                    </h2>
                     <p className="mt-4 text-xs text-muted-foreground italic">{content.disclaimer}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point, index) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ComplianceIcon = ({ standard }: { standard: string }) => {
    const s = standard.toUpperCase();
    if (s.includes('NABH')) return <LucideIcons.Star className="w-4 h-4 text-green-600" />;
    if (s.includes('JCI')) return <LucideIcons.Globe className="w-4 h-4 text-blue-600" />;
    if (s.includes('WHO')) return <LucideIcons.HeartPulse className="w-4 h-4 text-cyan-600" />;
    if (s.includes('ISO 9001')) return <LucideIcons.Award className="w-4 h-4 text-yellow-600" />;
    if (s.includes('ISO 45001')) return <LucideIcons.HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('ISO 27001')) return <LucideIcons.ShieldCheck className="w-4 h-4 text-purple-600" />;
    if (s.includes('ISO 22000')) return <LucideIcons.Utensils className="w-4 h-4 text-blue-500" />;
    if (s.includes('HACCP')) return <LucideIcons.ShieldCheck className="w-4 h-4 text-red-600" />;
    if (s.includes('OSHA')) return <LucideIcons.HardHat className="w-4 h-4 text-orange-600" />;
    if (s.includes('PGA')) return <LucideIcons.Film className="w-4 h-4 text-yellow-500" />;
    if (s.includes('FIA')) return <LucideIcons.Award className="w-4 h-4 text-blue-500" />;
    if (s.includes('IAAPA')) return <LucideIcons.FerrisWheel className="w-4 h-4 text-purple-500" />;
    if (s.includes('NIST')) return <LucideIcons.BriefcaseBusiness className="w-4 h-4 text-gray-600" />;
    return <LucideIcons.Landmark className="w-4 h-4 text-gray-500" />;
};


const GlobalStandardsSection = ({ pack }: { pack: (typeof premiumPacks)[0] }) => {
    if (!pack.globalStandards || !pack.globalStandards.standards) {
        return null;
    }

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline">
                        Audit-Ready. Globally Compliant.
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4">
                        Our checklists are built upon globally recognized standards to ensure you're operating at a world-class level.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto items-start justify-center">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <Card key={index} className="flex flex-col text-center p-4 md:p-6 bg-background">
                            <CardHeader className="p-0">
                                <div className="text-accent mx-auto mb-2"><ComplianceIcon standard={standard.name} /></div>
                                <CardTitle className="text-sm md:text-lg font-headline">{standard.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 mt-2 flex-1">
                                <p className="text-xs text-muted-foreground">{standard.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
  const pricingSectionRef = React.useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = React.useState(false);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
    if (!isMobile) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when the pricing section is NOT visible
        setShowStickyBar(!entry.isIntersecting);
      },
      // When the top of the pricing section is 100% off the screen
      { rootMargin: "0px 0px -100% 0px", threshold: 0 }
    );
  
    const currentRef = pricingSectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMobile]);

  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists.length;
  const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);
  const isEmptyPack = totalChecklists === 0;

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />

        <main className="flex-1">
          <section className="w-full pt-12 pb-6 md:pt-20 md:pb-10 bg-secondary/30">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:gap-16 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-primary">
                    {pack.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl">
                    {pack.description}
                  </p>
                  {!isEmptyPack && (
                    <div className="text-sm text-muted-foreground font-semibold">
                      Includes <span className="text-primary font-bold">{totalChecklists} checklists</span> with over <span className="text-primary font-bold">{totalTasks} individual tasks</span>.
                    </div>
                  )}
                  <div className="mt-4 bg-background/50 border p-4 rounded-lg">
                    <h2 className="text-sm font-semibold text-primary mb-2">PERFECT FOR:</h2>
                    <p className="text-sm text-muted-foreground">{audience.join(' • ')}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={heroImageUrl}
                    alt={pack.title}
                    className="rounded-2xl shadow-2xl object-cover aspect-[3/2] w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <PainPointsSection packId={pack.id} />

          {!isEmptyPack && (
            <section id="checklists" className="w-full py-12 md:py-16">
                <div className="container px-2 md:px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline">
                            A Complete System for Operational Excellence
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4">
                            This pack contains {totalChecklists} checklists and over {totalTasks} individual tasks, giving you a comprehensive framework to:
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-2">
                        {pack.sampleItems.map((item, index) => {
                           const Icon = item.icon as LucideIcons.LucideIcon;
                           return (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border bg-background/50 shadow-sm transition-all hover:shadow-md hover:border-primary/20">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50 shrink-0">
                                    <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground/90" dangerouslySetInnerHTML={{ __html: item.text.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </section>
          )}
          
          <div ref={pricingSectionRef}>
            <PricingClient pack={pack} />
          </div>

          <GlobalStandardsSection pack={pack} />

        </main>
         <Footer />
      </div>
      {pack.priceINR > 0 && (
         <div className={`md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className='flex items-center justify-between gap-4'>
                 <div className='flex-1'>
                    <p className='font-bold text-sm truncate'>{pack.title}</p>
                    <p className='text-lg font-extrabold'>₹{pack.priceINR}</p>
                </div>
                <div className="flex-shrink-0">
                     <Button asChild>
                        <Link href="#pricing">Buy Now</Link>
                    </Button>
                </div>
            </div>
        </div>
      )}
    </>
  );
}

    