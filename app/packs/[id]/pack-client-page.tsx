
'use client';

import React from 'react';
import { painPointsContent } from '@/lib/pain-points-content';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent, ComplianceIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Check, ShieldAlert, ArrowRight } from 'lucide-react';

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-2 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline uppercase italic">
                        {content.title}
                    </h2>
                     <p className="mt-4 text-xs text-muted-foreground italic">{content.disclaimer}</p>
                     <p className="mt-6 text-lg font-medium text-primary-text italic">
                        These aren’t theoretical risks. These are real failures that shut down businesses and destroy reputations.
                     </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point, index) => (
                        <Card key={index} className="flex flex-col h-full bg-background border-border shadow-sm">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                                    {typeof point.icon === 'string' ? (
                                        <IconComponent name={point.icon as string} className="h-6 w-6 text-accent"/>
                                    ) : (
                                        <span className="h-6 w-6 text-accent flex items-center justify-center">
                                            {point.icon}
                                        </span>
                                    )}
                                </div>
                                <CardTitle className="text-lg font-bold">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{point.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ComparisonSection = () => (
    <section className="w-full py-16 md:py-24 bg-alternate-background">
        <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.3em] font-black text-[10px]">Infrastructure Audit</Badge>
                <h2 className="text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">System vs. Chaos</h2>
                <p className="text-secondary-text text-lg italic">The difference between a growing group and a struggling one is the system they run on.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden max-w-5xl mx-auto">
                <div className="bg-black/40 p-8 md:p-12 space-y-8">
                    <h3 className="text-red-500 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                        <X className="w-5 h-5" /> Manual Management (WhatsApp & Verbal)
                    </h3>
                    <ul className="space-y-6">
                        {[
                            { t: "Staff forget critical tasks", d: "Standard procedures are only suggestions until they are written and signed." },
                            { t: "Zero operational visibility", d: "You only find out about failures when a guest complains or an auditor arrives." },
                            { t: "Manager-Dependent", d: "The operation collapses if the senior manager is sick or resigns." },
                            { t: "Unquantified Revenue Leakage", d: "Small daily losses in prep and waste go untracked and accumulate." }
                        ].map(item => (
                            <li key={item.t} className="space-y-1">
                                <p className="text-primary-text font-bold text-sm">{item.t}</p>
                                <p className="text-xs text-white/40 italic">{item.d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-primary/5 p-8 md:p-12 space-y-8 relative">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Check className="w-32 h-32 text-primary" /></div>
                    <h3 className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2">
                        <Check className="w-5 h-5" /> MoreMeets™ Sovereign Engine
                    </h3>
                    <ul className="space-y-6">
                        {[
                            { t: "Binary Accountability", d: "Tasks are signed off daily. Compliance becomes a non-negotiable rhythm." },
                            { t: "Live Executive Intelligence", d: "Know exactly which branch is 'Sizzling' or 'Cold' in 5 seconds." },
                            { t: "Institutional Memory", d: "The system owns the knowledge. New hires execute like veterans from day one." },
                            { t: "Loss Recovery Tracking", d: "Quantify every incident and fix the root cause to protect your P&L." }
                        ].map(item => (
                            <li key={item.t} className="space-y-1">
                                <p className="text-primary-text font-bold text-sm">{item.t}</p>
                                <p className="text-xs text-primary/40 italic font-medium">{item.d}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const GlobalStandardsSection = ({ pack }: { pack: PremiumPack }) => {
    if (!pack.globalStandards || !pack.globalStandards.standards) {
        return null;
    }

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container px-2 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline uppercase italic">
                        AUDIT-READY. GLOBALLY COMPLIANT.
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

export default function PackClientPage({ pack, heroImageUrl, imageHint }: { pack: PremiumPack, heroImageUrl: string | null, imageHint: string }) {
  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;
  const isEmptyPack = totalChecklists === 0 || (totalChecklists === 1 && pack.checklists[0].title.includes("Placeholder"));
  
  const hasValidHeroImage = heroImageUrl && heroImageUrl !== '' && !heroImageUrl.includes('picsum.photos');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1">
        <section className="w-full pt-12 pb-6 md:pt-20 md:pb-10 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className={cn("grid gap-6 lg:gap-12 xl:gap-16 items-center", hasValidHeroImage ? "lg:grid-cols-[1fr,400px]" : "grid-cols-1 max-w-4xl mx-auto")}>
              <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.2em] font-black text-[10px]">{pack.category} • Standalone Engine</Badge>
                <h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-primary-text uppercase italic leading-[1.1]">
                  {pack.heroHeadline || pack.title}
                </h1>
                <p className="max-w-[600px] text-secondary-text text-base md:text-lg lg:text-xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                  {pack.heroSubheadline || pack.description}
                </p>
                {!isEmptyPack && (
                  <div className="text-xs md:text-sm font-black uppercase tracking-[0.1em] text-white/40 flex items-center gap-2">
                    <span className="text-primary">{totalChecklists} MODULES</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-primary">{totalTasks}+ TECHNICAL CONTROL POINTS</span>
                  </div>
                )}
                <div className="mt-4 bg-background/50 border border-white/5 p-4 rounded-xl">
                  <h2 className="text-[10px] font-black text-primary mb-2 uppercase tracking-widest">DEPLOYMENT SECTOR:</h2>
                  <p className="text-sm text-secondary-text font-medium">{audience.join(' • ')}</p>
                </div>
              </div>
              {hasValidHeroImage && (
                  <div className="flex justify-center">
                  <img
                      src={heroImageUrl!}
                      alt={pack.title}
                      data-ai-hint={imageHint}
                      className="rounded-2xl shadow-2xl object-cover aspect-[3/2] w-full h-auto grayscale-[0.2] border border-white/10"
                  />
                  </div>
              )}
            </div>
          </div>
        </section>

        <PainPointsSection packId={pack.id} />

        {!isEmptyPack && (
          <section id="checklists" className="w-full py-12 md:py-16">
              <div className="container px-2 md:px-6">
                  <div className="max-w-4xl mx-auto text-center mb-12">
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter font-headline uppercase italic">
                          ZERO-AMBIGUITY GOVERNANCE
                      </h2>
                      <p className="max-w-[700px] text-secondary-text text-base md:text-lg/relaxed mx-auto mt-4 font-medium">
                          Deploy an 11-sheet operational data engine designed to eliminate the gaps where disasters are born. Run multiple branches from one standalone file.
                      </p>
                  </div>

                  <div className="max-w-4xl mx-auto space-y-2">
                      {pack.sampleItems.map((item, index) => (
                          <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] shadow-sm transition-all hover:border-primary/20 group">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 shrink-0 transition-colors">
                                  <IconComponent name={item.icon} className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                  <p className="font-bold text-primary-text leading-snug" dangerouslySetInnerHTML={{ __html: item.text }} />
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
        )}

        <ComparisonSection />

        <GlobalStandardsSection pack={pack} />

      </main>
    </div>
  );
}
