'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Target, 
    Smartphone, 
    Activity, 
    XCircle, 
    CheckCircle2, 
    ShieldCheck, 
    Lock, 
    Clock,
    Settings2,
    Users2,
    Utensils,
    Zap,
    Scale,
    GraduationCap,
    AlertTriangle,
    FlameKindling,
    Banknote,
    TrendingUp,
    Repeat,
    Check,
    LayoutGrid,
    Gem,
    History
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { painPointsContent } from '@/lib/pain-points-content';
import { PainPoint } from '@/components/ui/pain-point';
import { IconComponent, ComplianceIcon } from '@/components/icons';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src, alt }: { src: string, alt: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        {/* Browser Frame Header */}
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                    sovereign_v11.9_master_engine.xlsx
                </div>
            </div>
        </div>
        <div className="relative rounded-b-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;

    return (
        <Section className="bg-black border-b border-white/5">
            <div className="container px-2 md:px-6">
                 <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[11px]">Forensic Analysis</Badge>
                    <SectionHeadline>
                        {content.title}
                    </SectionHeadline>
                     <p className="mt-4 text-[10px] text-white/20 italic uppercase tracking-[0.2em]">{content.disclaimer}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <PainPoint key={index} icon={point.icon} title={point.title} description={point.description} />
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
            <div className="container px-2 md:px-6">
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
                        <div key={index} className="flex flex-col text-center p-8 rounded-2xl bg-black border border-white/5 hover:border-primary/20 transition-all group">
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
  const isEmptyPack = totalChecklists === 0;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full pt-16 pb-12 md:pt-24 md:pb-20 border-b border-white/5 overflow-hidden bg-black flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,184,107,0.05)_0%,transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr,480px] gap-12 md:gap-16 items-center">
                
                {/* Left: Narrative */}
                <div className="space-y-6">
                    <div className="space-y-5">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.3em] font-black text-[10px] rounded-none bg-primary/5">
                            {pack.category.toUpperCase()} • SOVEREIGN V11.9
                        </Badge>
                        <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.85] font-headline">
                            {pack.title.toUpperCase()}
                        </h1>
                        <p className="text-xl text-secondary-text font-medium leading-relaxed italic max-w-xl border-l-2 border-primary/20 pl-8">
                            {pack.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-black text-primary uppercase tracking-widest">
                            <span className="flex items-center gap-2"><LayoutGrid className="w-4 h-4" /> {totalChecklists} MODULES</span>
                            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> {totalTasks}+ TASKS</span>
                            <span className="flex items-center gap-2"><History className="w-4 h-4" /> LIFETIME UPDATES</span>
                        </div>
                        
                        <div className="pt-6">
                            <OperationalWindow 
                                src={heroImageUrl}
                                alt={pack.title}
                            />
                        </div>
                    </div>
                </div>

                {/* Right: Built For & Selection */}
                <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl space-y-10">
                    <div className="space-y-4">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">BUILT FOR</span>
                        <div className="flex flex-wrap gap-2">
                            {audience.map(person => (
                                <Badge key={person} variant="secondary" className="bg-white/5 text-white/60 border-white/10 px-3 py-1 text-[10px] font-bold uppercase italic">
                                    {person}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6 pt-10 border-t border-white/5">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM COMPONENTS</span>
                        <div className="space-y-4">
                            {pack.sampleItems.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                    <p className="text-sm font-bold text-primary-text/80 italic leading-tight group-hover:text-primary transition-colors" dangerouslySetInnerHTML={{ __html: item.text }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <Button asChild size="lg" className="w-full h-16 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-[0_0_30px_-10px_rgba(46,184,107,0.5)] border-none hover:scale-[1.02] transition-all">
                        <Link href="#pricing">DEPLOY SYSTEM → ₹999</Link>
                    </Button>
                </div>

            </div>
          </div>
        </section>

        <PainPointsSection packId={pack.id} />

        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">System Standards</Badge>
                    <SectionHeadline className="text-center">OPERATIONAL STANDARDS</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium">Forensically engineered task architecture.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pack.checklists.slice(0, 6).map((checklist, index) => (
                        <div key={index} className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 space-y-6 hover:border-primary/20 transition-all">
                            <div className="flex justify-between items-start">
                                <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-8 h-8 text-primary/40" />
                                <Badge variant="outline" className="text-[9px] font-black text-white/20 uppercase tracking-widest">{checklist.frequency}</Badge>
                            </div>
                            <h4 className="text-xl font-black text-primary-text uppercase italic tracking-tighter leading-tight">{checklist.title}</h4>
                            <p className="text-xs text-secondary-text italic font-medium leading-relaxed">{checklist.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        <GlobalStandardsSection pack={pack} />

      </main>
    </div>
  );
}
