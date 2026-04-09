
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

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-10 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-2xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[1.05]", className)}>
        {children}
    </h2>
);

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;
    return (
        <Section className="bg-black border-b border-white/5">
            <div className="container px-2 md:px-6 mx-auto">
                 <div className="max-w-4xl mx-auto text-center mb-10 space-y-2">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[10px]">Forensic Analysis</Badge>
                    <SectionHeadline>{content.title}</SectionHeadline>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <div key={index} className="rounded-xl border border-white/5 bg-black/40 p-6 md:p-8 space-y-3 hover:border-red-500/20 transition-all group/card">
                            <div className="flex items-center gap-3 text-red-500">
                                <span className="w-5 h-5 shrink-0">{point.icon}</span>
                                <h4 className="font-bold text-base md:text-lg text-primary-text leading-tight">{point.title}</h4>
                            </div>
                            <p className="text-[11px] md:text-sm text-secondary-text leading-relaxed italic font-medium">{point.description}</p>
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
                <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Institutional Compliance</Badge>
                    <SectionHeadline>AUDIT-READY</SectionHeadline>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto items-start">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <div key={index} className="flex flex-col text-center p-5 rounded-xl bg-black border border-white/5 hover:border-primary/20 transition-all group">
                            <div className="text-primary/40 group-hover:text-primary mx-auto mb-3 transition-colors">
                                <IconComponent name="ShieldCheck" className="w-6 h-6 md:w-8 md:h-8" />
                            </div>
                            <h4 className="text-[10px] md:text-sm font-black font-headline text-primary-text uppercase tracking-widest mb-1 leading-tight">{standard.name}</h4>
                            <p className="text-[9px] md:text-[10px] text-secondary-text italic font-medium leading-tight">{standard.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
  const audience = pack.whoIsItFor || ["Industry Professionals"];
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;

  return (
    <>
        <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 border-b border-white/5 bg-black overflow-hidden min-h-[70vh] flex flex-col justify-center">
          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-[1fr,450px] gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.4em] font-black text-[10px] rounded-none bg-primary/5">{pack.category.toUpperCase()} • V11.9</Badge>
                        <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.9]">{pack.title.toUpperCase()}</h1>
                        <p className="text-base md:text-xl text-secondary-text font-medium leading-relaxed italic max-w-xl border-l-2 border-primary/20 pl-6">{pack.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-[11px] font-black text-primary uppercase tracking-[0.3em]">
                        <span className="flex items-center gap-2"><LayoutGrid className="w-4 h-4" /> {totalChecklists} MODULES</span>
                        <span className="flex items-center gap-2"><Target className="w-4 h-4" /> {totalTasks}+ TASKS</span>
                        <span className="flex items-center gap-2"><FileSpreadsheet className="w-4 h-4" /> EXCEL & SHEETS</span>
                    </div>

                    <div className="relative aspect-[16/10] max-w-3xl rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
                        <img 
                            src={heroImageUrl || "https://picsum.photos/seed/sovereign/1200/800"} 
                            alt={pack.title} 
                            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                </div>

                <div className="p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl space-y-8">
                    <div className="space-y-3">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ TARGET AUDIENCE</span>
                        <div className="flex flex-wrap gap-2">
                            {audience.map(person => (
                                <Badge key={person} variant="secondary" className="bg-white/5 text-white/60 border-white/10 px-3 py-1 text-[10px] font-bold uppercase italic">{person}</Badge>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 pt-8 border-t border-white/5">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ SYSTEM COMPONENTS</span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pack.sampleItems.map((item, i) => (
                                <div key={i} className="flex flex-col gap-2 group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        <IconComponent name={item.icon} className="w-4 h-4 text-primary/40 group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-[11px] md:text-sm font-bold text-primary-text/80 italic leading-snug" dangerouslySetInnerHTML={{ __html: item.text }} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Button asChild size="lg" className="w-full h-16 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-2xl border-none hover:scale-[1.02] transition-all">
                        <Link href="#pricing">DEPLOY SYSTEM → ₹999</Link>
                    </Button>
                </div>
            </div>
          </div>
        </section>

        <PainPointsSection packId={pack.id} />

        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
                <div className="text-center space-y-2">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.5em] font-black text-[10px]">Operational Framework</Badge>
                    <SectionHeadline>THE MODULES</SectionHeadline>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {pack.checklists.slice(0, 9).map((checklist, index) => (
                        <div key={index} className="p-6 md:p-10 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-primary/30 transition-all group flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-5 h-5 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
                                    <h4 className="text-lg md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none font-headline">{checklist.title}</h4>
                                </div>
                                <span className="text-[8px] md:text-[10px] font-black text-white/20 uppercase tracking-widest pt-1">{checklist.frequency}</span>
                            </div>
                            <p className="text-[11px] md:text-sm text-secondary-text italic font-medium leading-relaxed">{checklist.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        <GlobalStandardsSection pack={pack} />
    </>
  );
}
