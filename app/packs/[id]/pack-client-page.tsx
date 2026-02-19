
'use client';

import React from 'react';
import { painPointsContent } from '@/lib/pain-points-content';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent, ComplianceIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


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
                                    <IconComponent name={point.icon as string} className="h-6 w-6 text-accent"/>
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
                <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.2em] font-black text-[10px]">Institutional Infrastructure</Badge>
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
                    <span className="text-primary">{totalTasks}+ TECHNICAL TASKS</span>
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
                      <h2 className="text-3xl md:text-4xl font-black tracking-tighter font-headline uppercase italic">
                          ZERO-AMBIGUITY EXECUTION FRAMEWORK
                      </h2>
                      <p className="max-w-[700px] text-secondary-text text-base md:text-lg/relaxed mx-auto mt-4 font-medium">
                          This pack contains {totalChecklists}+ modular checklists and {totalTasks}+ individual control points designed to eliminate the gaps where disasters are born.
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

        <GlobalStandardsSection pack={pack} />

      </main>
    </div>
  );
}
