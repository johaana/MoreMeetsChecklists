'use client';

import React from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    Target, 
    FileSpreadsheet,
    LayoutGrid
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { painPointsContent } from '@/lib/pain-points-content';
import { IconComponent } from '@/components/icons';

const DASHBOARD_PREVIEW_URL = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src = DASHBOARD_PREVIEW_URL, alt, packTitle }: { src?: string, alt: string, packTitle: string }) => {
    const displayTitle = `${packTitle.toUpperCase().replace(/\s/g, '_')}_V11.9`;
    
    return (
        <div className="relative mx-auto max-w-4xl group">
            {/* The Tactical Glow Effect */}
            <div className="absolute -inset-4 bg-primary/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-xl py-3 px-5 flex items-center gap-4 relative z-10">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-black/40 border border-white/5 rounded-md px-8 md:px-12 py-1 text-[8px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner font-headline text-center truncate max-w-full">
                        SOVEREIGN_MASTER_INTERFACE
                    </div>
                </div>
            </div>
            <div className="relative rounded-b-xl border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000 z-10">
                {/* Identity Mask: Surgical tight fit */}
                <div className="absolute top-0 left-0 w-full h-[12%] z-20 bg-black/90 backdrop-blur-3xl border-b border-white/10 flex items-center justify-center px-10">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_12px_rgba(46,184,107,0.8)]" />
                        <span className="text-[9px] md:text-[11px] font-black text-primary uppercase tracking-[0.4em] italic font-headline text-center">
                            SYSTEM_ID: {displayTitle}
                        </span>
                    </div>
                </div>

                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-700 mt-[-0.8%]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-4 text-center relative z-10">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em] italic">
                    TECHNICAL BRIEFING: LIVE OPS ENGINE FORENSICALLY MAPPED TO YOUR SECTOR.
                </span>
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
                 <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[11px]">Forensic Analysis</Badge>
                    <SectionHeadline>
                        {content.title}
                    </SectionHeadline>
                     <p className="mt-4 text-[10px] text-white/20 italic uppercase tracking-[0.2em]">{content.disclaimer}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <div key={index} className="rounded-2xl border border-white/5 bg-black/40 p-8 space-y-4 hover:border-red-500/20 transition-all group/card">
                            <div className="flex items-center gap-4 text-red-500">
                                <span className="group-hover/card:scale-110 transition-transform duration-500">{point.icon}</span>
                                <h4 className="font-bold text-lg text-primary-text leading-tight">{point.title}</h4>
                            </div>
                            <p className="text-sm text-secondary-text leading-relaxed italic font-medium">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

const GlobalStandardsSection = ({ pack }: { pack: PremiumPack }) => {
    if (!pack.globalStandards || !pack.globalStandards.standards) {
        return null;
    }

    return (
        <Section className="bg-alternate-background">
            <div className="container px-2 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Institutional Compliance</Badge>
                    <SectionHeadline>
                        AUDIT-READY STANDARDS
                    </SectionHeadline>
                     <p className="max-w-[700px] text-secondary-text text-lg italic font-medium mx-auto">
                        Engineered to meet and exceed global operational benchmarks.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto items-start justify-center">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <div key={index} className="flex flex-col text-center p-8 rounded-xl bg-black border border-white/5 hover:border-primary/20 transition-all group">
                            <div className="text-primary/40 group-hover:text-primary mx-auto mb-4 transition-colors">
                                <IconComponent name="ShieldCheck" className="w-8 h-8" />
                            </div>
                            <h4 className="text-sm font-black font-headline text-primary-text uppercase tracking-widest mb-2">{standard.name}</h4>
                            <p className="text-[10px] text-secondary-text italic font-medium leading-relaxed">{standard.description}</p>
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
        {/* HERO SECTION WITH ATMOSPHERIC BACKGROUND */}
        <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 border-b border-white/5 overflow-hidden bg-black flex flex-col justify-center min-h-[85vh]">
          
          {/* Industry Context Layer (Blurred) */}
          <div className="absolute inset-0 z-0">
            <img 
                src={heroImageUrl} 
                alt="Context" 
                className="w-full h-full object-cover opacity-20 blur-xl scale-110 grayscale" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
          </div>

          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-[1fr,480px] gap-12 md:gap-20 items-center">
                
                {/* Left: Narrative */}
                <div className="space-y-8">
                    <div className="space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.4em] font-black text-[10px] rounded-none bg-primary/5">
                            {pack.category.toUpperCase()} • SOVEREIGN V11.9
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.85]">
                            {pack.title.toUpperCase()}
                        </h1>
                        <p className="text-xl text-secondary-text font-medium leading-relaxed italic max-w-xl border-l-2 border-primary/20 pl-8">
                            {pack.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-black text-primary uppercase tracking-[0.3em]">
                            <span className="flex items-center gap-2.5"><LayoutGrid className="w-4 h-4" /> {totalChecklists} MODULES</span>
                            <span className="flex items-center gap-2.5"><Target className="w-4 h-4" /> {totalTasks}+ TASKS</span>
                            <span className="flex items-center gap-2.5"><FileSpreadsheet className="w-4 h-4" /> WORKS ON EXCEL & SHEETS</span>
                        </div>
                        
                        <div className="pt-8">
                            <OperationalWindow 
                                packTitle={pack.title}
                                alt={pack.title}
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Built For & Selection */}
                <div className="p-12 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl space-y-12">
                    <div className="space-y-5">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ BUILT FOR</span>
                        <div className="flex flex-wrap gap-2.5">
                            {audience.map(person => (
                                <Badge key={person} variant="secondary" className="bg-white/5 text-white/60 border-white/10 px-4 py-1.5 text-[10px] font-bold uppercase italic">
                                    {person}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 pt-12 border-t border-white/5">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ SYSTEM COMPONENTS</span>
                        <div className="space-y-5">
                            {pack.sampleItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <p className="text-sm font-bold text-primary-text/80 italic leading-snug group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: item.text }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button asChild size="lg" className="w-full h-16 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-[0_0_40px_-10px_rgba(46,184,107,0.4)] border-none hover:scale-[1.02] transition-all">
                        <Link href="#pricing">DEPLOY SYSTEM → ₹999</Link>
                    </Button>
                </div>

            </div>
          </div>
        </section>

        <PainPointsSection packId={pack.id} />

        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.5em] font-black text-[11px]">System Standards</Badge>
                    <SectionHeadline className="text-center">OPERATIONAL STANDARDS</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium">Forensically engineered task architecture.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pack.checklists.slice(0, 6).map((checklist, index) => (
                        <div key={index} className="p-12 rounded-xl bg-white/[0.01] border border-white/5 space-y-8 hover:border-primary/20 transition-all group">
                            <div className="flex justify-between items-start">
                                <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                                <Badge variant="outline" className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{checklist.frequency}</Badge>
                            </div>
                            <h4 className="text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-tight font-headline">{checklist.title}</h4>
                            <p className="text-xs text-secondary-text italic font-medium leading-relaxed">{checklist.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        <GlobalStandardsSection pack={pack} />
    </>
  );
}
