'use client';

import React from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Target, FileSpreadsheet, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { painPointsContent } from '@/lib/pain-points-content';
import { IconComponent } from '@/components/icons';

const DASHBOARD_PREVIEW_URL = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-8 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src = DASHBOARD_PREVIEW_URL, alt, packTitle }: { src?: string, alt: string, packTitle: string }) => {
    const displayTitle = `${packTitle.toUpperCase().replace(/\s/g, '_')}_V11.9`;
    return (
        <div className="relative mx-auto max-w-4xl group">
            <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-xl py-1 px-3 md:py-3 md:px-5 flex items-center gap-2 relative z-10">
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/5 rounded-md px-4 py-0.5 text-[6px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic font-headline text-center truncate">SOVEREIGN_MASTER_ENGINE</div>
                </div>
            </div>
            <div className="relative rounded-b-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-2xl z-10">
                <div className="absolute top-0 left-0 w-full h-[10%] z-20 bg-black/90 backdrop-blur-3xl border-b border-white/10 flex items-center justify-center px-4 md:px-10">
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        <span className="text-[7px] md:text-[11px] font-black text-primary uppercase tracking-[0.4em] italic font-headline truncate">SYSTEM_ID: {displayTitle}</span>
                    </div>
                </div>
                <img src={src} alt={alt} className="w-full h-auto grayscale-[0.05] mt-[-0.8%]" />
            </div>
        </div>
    );
};

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;
    return (
        <Section className="bg-black border-b border-white/5">
            <div className="container px-2 md:px-6 mx-auto">
                 <div className="max-w-4xl mx-auto text-center mb-8 space-y-2">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[8px] md:text-[11px]">Forensic Analysis</Badge>
                    <SectionHeadline>{content.title}</SectionHeadline>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <div key={index} className="rounded-xl border border-white/5 bg-black/40 p-5 md:p-8 space-y-3 hover:border-red-500/20 transition-all group/card">
                            <div className="flex items-center gap-3 text-red-500">
                                <span className="w-5 h-5 shrink-0">{point.icon}</span>
                                <h4 className="font-bold text-sm md:text-lg text-primary-text leading-tight">{point.title}</h4>
                            </div>
                            <p className="text-[10px] md:text-sm text-secondary-text leading-relaxed italic font-medium">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

const GlobalStandardsSection = ({ pack }: { pack: PremiumPack }) => {
    if (!pack.globalStandards || !pack.globalStandards.standards) return null;
    return (
        <Section className="bg-alternate-background">
            <div className="container px-2 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-8 space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[8px]">Institutional Compliance</Badge>
                    <SectionHeadline>AUDIT-READY</SectionHeadline>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-7xl mx-auto items-start">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <div key={index} className="flex flex-col text-center p-4 rounded-xl bg-black border border-white/5 hover:border-primary/20 transition-all group">
                            <div className="text-primary/40 group-hover:text-primary mx-auto mb-2 transition-colors">
                                <IconComponent name="ShieldCheck" className="w-5 h-5 md:w-8 md:h-8" />
                            </div>
                            <h4 className="text-[8px] md:text-sm font-black font-headline text-primary-text uppercase tracking-widest mb-1 leading-tight">{standard.name}</h4>
                            <p className="text-[7px] md:text-[10px] text-secondary-text italic font-medium leading-tight">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default function PackClientPage({ pack }: { pack: PremiumPack, heroImageUrl: string }) {
  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;

  return (
    <>
        <section className="relative w-full pt-20 pb-10 md:pb-24 border-b border-white/5 bg-black flex flex-col justify-center min-h-[60vh] md:min-h-[85vh]">
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-[1fr,420px] gap-10 items-center">
                <div className="space-y-6">
                    <div className="space-y-3 md:space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.4em] font-black text-[8px] md:text-[10px] rounded-none bg-primary/5">{pack.category.toUpperCase()} • SOVEREIGN V11.9</Badge>
                        <h1 className="text-3xl sm:text-5xl md:text-[4.5rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.9]">{pack.title.toUpperCase()}</h1>
                        <p className="text-sm md:text-xl text-secondary-text font-medium leading-relaxed italic max-w-xl border-l-2 border-primary/20 pl-6">{pack.description}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-[8px] md:text-[11px] font-black text-primary uppercase tracking-[0.3em]">
                        <span className="flex items-center gap-1.5"><LayoutGrid className="w-3 h-3" /> {totalChecklists} MODULES</span>
                        <span className="flex items-center gap-1.5"><Target className="w-3 h-3" /> {totalTasks}+ TASKS</span>
                        <span className="flex items-center gap-1.5"><FileSpreadsheet className="w-3 h-3" /> EXCEL & SHEETS</span>
                    </div>
                    <div className="pt-4">
                        <OperationalWindow packTitle={pack.title} alt={pack.title} />
                    </div>
                </div>
                <div className="p-6 md:p-12 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl space-y-6">
                    <div className="space-y-2">
                        <span className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ BUILT FOR</span>
                        <div className="flex flex-wrap gap-1.5">
                            {audience.map(person => (
                                <Badge key={person} variant="secondary" className="bg-white/5 text-white/60 border-white/10 px-2 py-0.5 text-[7px] md:text-[10px] font-bold uppercase italic">{person}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 pt-6 border-t border-white/5">
                        <span className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ SYSTEM COMPONENTS</span>
                        <div className="grid grid-cols-2 gap-3">
                            {pack.sampleItems.slice(0, 4).map((item, i) => (
                                <div key={i} className="flex flex-col gap-1.5 group">
                                    <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                                    <p className="text-[8px] md:text-sm font-bold text-primary-text/80 italic leading-snug" dangerouslySetInnerHTML={{ __html: item.text }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button asChild size="lg" className="w-full h-14 md:h-16 rounded-xl bg-primary text-black font-black uppercase italic text-xs shadow-xl border-none">
                        <Link href="#pricing">DEPLOY SYSTEM → ₹999</Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>
        <PainPointsSection packId={pack.id} />
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-24">
                <div className="text-center space-y-2">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.5em] font-black text-[8px]">System Standards</Badge>
                    <SectionHeadline>OPERATIONAL STANDARDS</SectionHeadline>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
                    {pack.checklists.slice(0, 6).map((checklist, index) => (
                        <div key={index} className="p-5 md:p-12 rounded-xl bg-white/[0.01] border border-white/5 space-y-4 md:space-y-8 hover:border-primary/20 transition-all group">
                            <div className="flex justify-between items-center">
                                <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-5 h-5 md:w-8 md:h-8 text-primary/40 group-hover:text-primary transition-colors" />
                                <span className="text-[7px] md:text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{checklist.frequency}</span>
                            </div>
                            <h4 className="text-xs md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-tight font-headline">{checklist.title}</h4>
                            <p className="text-[8px] md:text-xs text-secondary-text italic font-medium leading-tight">{checklist.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        <GlobalStandardsSection pack={pack} />
    </>
  );
}
