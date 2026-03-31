
'use client';

import React from 'react';
import { painPointsContent } from '@/lib/pain-points-content';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent, ComplianceIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Check, ShieldAlert, ArrowRight, ShieldCheck, FileSpreadsheet, Infinity, Lock, Timer, Target, Eye, Zap, Laptop, LayoutGrid, CheckSquare, Layers, Users, Database } from 'lucide-react';

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-4 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-10 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter font-headline uppercase italic text-primary-text">
                        Anatomy of an Operational Failure
                    </h2>
                     <p className="text-muted-foreground text-sm italic">{content.disclaimer}</p>
                     <p className="text-lg font-bold text-red-500 italic">
                        These aren’t theoretical risks. These are real failures that shut down businesses.
                     </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point, index) => (
                        <Card key={index} className="flex flex-col h-full bg-background border-border shadow-sm border-l-4 border-l-red-500/50">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-500 shrink-0">
                                    {point.icon}
                                </div>
                                <CardTitle className="text-lg font-black uppercase italic leading-tight">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-secondary-text text-sm leading-relaxed italic font-medium">{point.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

const ProductArchitectureSection = () => (
    <section className="w-full py-16 md:py-24 bg-alternate-background overflow-hidden">
        <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technical Evidence</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-tight">
                            A High-Gravity <br /> Data Engine.
                        </h2>
                        <p className="text-lg text-secondary-text leading-relaxed font-medium italic border-l-2 border-primary/20 pl-6">
                            This is not a static PDF. You are deploying a multi-branch, logically-aware interface built to command discipline across your entire group.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[
                            { t: "Live Status Trigger", d: "Status columns (COMPLETED/AWAITING MGR) update instantly based on staff inputs.", i: Zap },
                            { t: "The 'Yellow Target' Rule", d: "Managers only focus on highlighted high-risk points. No time wasted on routine ticks.", i: Target },
                            { t: "Institutional Memory", d: "Trainer notes and consequences are embedded into every control point to coach staff automatically.", i: Laptop }
                        ].map(item => (
                            <div key={item.t} className="flex gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                                    <item.i className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-primary-text uppercase text-sm tracking-tight">{item.t}</h4>
                                    <p className="text-xs text-secondary-text font-medium leading-relaxed italic">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                    <div className="relative rounded-2xl border border-white/10 bg-black p-2 shadow-2xl">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 rounded-t-xl flex items-center px-4 gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-500/40" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                            <div className="w-2 h-2 rounded-full bg-green-500/40" />
                        </div>
                        <img 
                            src="https://i.postimg.cc/9MNGzZ46/Screenshot-2026-03-31-025452.png" 
                            alt="MoreMeets Engine Interface"
                            className="rounded-lg mt-6 border border-white/5"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const DepartmentalCommandSection = ({ pack }: { pack: PremiumPack }) => {
    if (!pack.checklists || pack.checklists.length === 0) return null;

    return (
        <section className="w-full py-16 md:py-24 bg-black">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Total Spectrum Coverage</Badge>
                    <h2 className="text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">
                        Departmental Command Layers
                    </h2>
                    <p className="text-secondary-text text-lg italic font-medium">Standardizing 100% of your operation, from Owner vision to night-shift security.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
                    {pack.checklists.map((module, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-4 group hover:border-primary/20 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <IconComponent name={module.icon || "layout-grid"} className="w-5 h-5 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-black text-primary-text uppercase italic text-sm">{module.title}</h3>
                                <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">{module.department} Module</p>
                            </div>
                            <p className="text-xs text-secondary-text leading-relaxed italic font-medium line-clamp-2">
                                {module.summary}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cn("w-full py-16 md:py-24", className)}>
        {children}
    </section>
);

const SectionHeadline = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-black font-headline text-primary-text uppercase italic tracking-tighter text-center">
        {children}
    </h2>
);

const WhatChangesSection = () => (
    <Section className="bg-black">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <SectionHeadline>What changes after deployment?</SectionHeadline>
                <p className="text-secondary-text italic font-medium">From firefighting to focused growth.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                    <h3 className="text-white/40 font-black uppercase tracking-widest text-xs">The Past: Firefighting</h3>
                    <div className="space-y-4">
                        {[
                            "You follow up constantly",
                            "You guess if tasks are done",
                            "You depend on key people",
                            "Staff works without accountability"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-3 text-sm text-secondary-text italic">
                                <X className="w-4 h-4 text-red-500/50" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-6 p-8 rounded-3xl bg-primary/5 border border-primary/20">
                    <h3 className="text-primary font-black uppercase tracking-widest text-xs">The Future: Command</h3>
                    <div className="space-y-4">
                        {[
                            "You see everything live",
                            "You act faster on issues",
                            "You stay in control remotely",
                            "Discipline is automated"
                        ].map(item => (
                            <div key={item} className="flex items-center gap-3 text-sm text-primary-text font-bold">
                                <Check className="w-4 h-4 text-primary" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

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
        {/* HERO SECTION */}
        <section className="w-full pt-12 pb-6 md:pt-20 md:pb-10 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className={cn("grid gap-6 lg:gap-12 xl:gap-16 items-center", hasValidHeroImage ? "lg:grid-cols-[1fr,400px]" : "grid-cols-1 max-w-4xl mx-auto")}>
              <div className="space-y-6">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.2em] font-black text-[10px]">{pack.category} • Institutional Grade</Badge>
                    <h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-headline text-primary-text uppercase italic leading-[1.1]">
                    {pack.heroHeadline || pack.title}
                    </h1>
                </div>
                
                <p className="max-w-[600px] text-secondary-text text-base md:text-lg lg:text-xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                  {pack.heroSubheadline || pack.description}
                </p>

                <div className="flex flex-wrap gap-4">
                    <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
                        <Layers className="w-4 h-4 text-primary" />
                        <div className="flex flex-col">
                            <span className="text-primary-text font-black text-xs">{totalChecklists}</span>
                            <span className="text-[8px] font-black uppercase text-white/20 tracking-widest">Modules</span>
                        </div>
                    </div>
                    <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
                        <Database className="w-4 h-4 text-primary" />
                        <div className="flex flex-col">
                            <span className="text-primary-text font-black text-xs">{totalTasks}+</span>
                            <span className="text-[8px] font-black uppercase text-white/20 tracking-widest">Control Points</span>
                        </div>
                    </div>
                    <div className="bg-black/40 border border-white/5 rounded-xl px-4 py-3 flex items-center gap-3">
                        <Users className="w-4 h-4 text-primary" />
                        <div className="flex flex-col">
                            <span className="text-primary-text font-black text-xs">8-Role</span>
                            <span className="text-[8px] font-black uppercase text-white/20 tracking-widest">Admin Matrix</span>
                        </div>
                    </div>
                </div>

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

        <DepartmentalCommandSection pack={pack} />

        <ProductArchitectureSection />

        {/* CLARITY: WHAT YOU GET */}
        {!isEmptyPack && (
          <section id="checklists" className="w-full py-12 md:py-16">
              <div className="container px-2 md:px-6">
                  <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
                      <h2 className="text-xl sm:text-3xl md:text-4xl font-black tracking-tighter font-headline uppercase italic text-primary">
                          THE SYSTEM SUPERPOWERS
                      </h2>
                      <p className="max-w-[700px] text-secondary-text text-base md:text-lg/relaxed mx-auto font-medium italic">
                          You are deploying a standalone data engine designed to run your business without chaos. This is what changes on Day 1:
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

        <WhatChangesSection />

        {pack.globalStandards && (
            <section className="w-full py-12 md:py-16 bg-secondary/10">
                <div className="container px-2 md:px-6">
                    <div className="max-w-3xl mx-auto text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline uppercase italic text-primary-text">
                            AUDIT-READY. GLOBALLY COMPLIANT.
                        </h2>
                        <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto mt-4 font-medium italic">
                            Our systems are built upon globally recognized standards to ensure you're operating at a world-class level.
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
                                    <p className="text-xs text-muted-foreground font-medium">{standard.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        )}

      </main>
    </div>
  );
}
