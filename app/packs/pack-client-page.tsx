'use client';

import Link from 'next/link';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { painPointsContent } from '@/lib/pain-points-content';
import { SiteHeader } from '@/components/layout/header';
import { useIsMobile } from '@/hooks/use-mobile';
import { PainPoint } from '@/components/ui/pain-point';
import type { PremiumPack } from "@/lib/premium-packs";
import { Button } from '@/components/ui/button';
import { IconComponent, ComplianceIcon } from '@/components/icons';


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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
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
  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;
  const isEmptyPack = totalChecklists === 0 || (totalChecklists === 1 && pack.checklists[0].title.includes("Placeholder"));

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <SiteHeader />

        <main className="flex-1">
          <section className="w-full pt-12 pb-6 md:pt-20 md:pb-10 bg-secondary/30">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:gap-16 items-center">
                <div className="space-y-4">
                  <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-primary uppercase italic leading-[1.1]">
                    {pack.title}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground text-base md:text-lg lg:text-xl italic border-l-2 border-primary/20 pl-6">
                    {pack.description}
                  </p>
                  {!isEmptyPack && (
                    <div className="text-sm text-muted-foreground font-semibold flex items-center gap-2">
                      <span className="text-primary">{totalChecklists} MODULES</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-primary">{totalTasks}+ TECHNICAL TASKS</span>
                    </div>
                  )}
                  <div className="mt-4 bg-background/50 border p-4 rounded-xl">
                    <h2 className="text-xs font-black text-primary mb-2 uppercase tracking-widest">DEPLOYMENT SECTOR:</h2>
                    <p className="text-sm text-muted-foreground">{audience.join(' • ')}</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={heroImageUrl}
                    alt={pack.title}
                    className="rounded-2xl shadow-2xl object-cover aspect-[3/2] w-full h-auto border border-white/10"
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
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-headline uppercase italic">
                            ZERO-AMBIGUITY EXECUTION FRAMEWORK
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4 font-medium">
                            This pack contains {totalChecklists}+ checklists and over {totalTasks}+ individual tasks, giving you a comprehensive framework to:
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-2">
                        {pack.sampleItems.map((item, index) => {
                           return (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-white/5 bg-white/[0.02] shadow-sm transition-all hover:border-primary/20 group">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 shrink-0 transition-colors">
                                    <IconComponent name={item.icon} className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-semibold text-primary-text leading-snug" dangerouslySetInnerHTML={{ __html: item.text.replace(/NEW: /g, '<strong class="text-accent">NEW:</strong> ') }} />
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </section>
          )}

          <GlobalStandardsSection pack={pack} />

        </main>
      </div>
    </>
  );
}
