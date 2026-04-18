'use client';

import React from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Target, FileSpreadsheet, LayoutGrid, Activity, ShieldCheck, History, AlertTriangle } from 'lucide-react';
import { painPointsContent } from '@/lib/pain-points-content';
import { IconComponent } from '@/components/icons';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[1.05]", className)}>
        {children}
    </h2>
);

const PainPointsSection = ({ packId }: { packId: string }) => {
    const content = painPointsContent[packId as keyof typeof painPointsContent];
    if (!content) return null;
    return (
        <Section className="bg-black border-y border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e11d48_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                 <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[10px] rounded-none px-6">Forensic Deconstruction</Badge>
                    <SectionHeadline>{content.title}</SectionHeadline>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.3em] italic">{content.disclaimer}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {content.points.map((point: any, index: number) => (
                        <div key={index} className="rounded-[2rem] border border-white/5 bg-white/[0.01] p-8 md:p-12 space-y-4 hover:border-red-500/20 transition-all group/card backdrop-blur-sm">
                            <div className="flex items-center gap-4 text-red-500">
                                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                                    <span className="w-5 h-5 shrink-0">{point.icon}</span>
                                </div>
                                <h4 className="font-black text-lg md:text-xl text-primary-text uppercase italic tracking-tighter font-headline">{point.title}</h4>
                            </div>
                            <p className="text-sm md:text-base text-secondary-text leading-relaxed italic font-medium border-l border-white/10 pl-6">{point.description}</p>
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
            <div className="container px-4 md:px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px] rounded-none px-6">Institutional Compliance</Badge>
                    <SectionHeadline>AUDIT-READY</SectionHeadline>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto items-start">
                    {pack.globalStandards.standards.map((standard, index) => (
                        <div key={index} className="flex flex-col text-center p-8 rounded-2xl bg-black border border-white/5 hover:border-primary/20 transition-all group">
                            <div className="text-primary/40 group-hover:text-primary mx-auto mb-4 transition-colors">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h4 className="text-[11px] font-black font-headline text-primary-text uppercase tracking-widest mb-2 leading-tight">{standard.name}</h4>
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
        <section className="relative w-full pt-24 pb-16 md:pt-32 md:pb-24 bg-black overflow-hidden min-h-[85vh] flex flex-col justify-center border-b border-white/5">
          {/* Cinematic Backdrop */}
          <div className="absolute inset-0 z-0">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
          </div>

          <div className="container px-4 md:px-6 relative z-10 mx-auto">
            <div className="grid lg:grid-cols-[1.2fr,400px] gap-16 items-center">
                <div className="space-y-12">
                    <div className="space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1.5 px-6 uppercase tracking-[0.5em] font-black text-[10px] rounded-none bg-primary/5 backdrop-blur-md mb-4">{pack.category.toUpperCase()} • V11.9</Badge>
                        <h1 className="text-5xl md:text-[6.5rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.85]">
                            {pack.title.split(' ').slice(0, -1).join(' ')} <br/>
                            <span className="text-primary">{pack.title.split(' ').pop()}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary-text font-medium leading-relaxed italic max-w-2xl border-l-2 border-primary/20 pl-8">{pack.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-10 text-[10px] md:text-[11px] font-black text-white/30 uppercase tracking-[0.4em]">
                        <span className="flex items-center gap-3"><LayoutGrid className="w-4 h-4 text-primary" /> {totalChecklists} MODULES</span>
                        <span className="flex items-center gap-3"><Target className="w-4 h-4 text-primary" /> {totalTasks}+ POINTS</span>
                        <span className="flex items-center gap-3"><FileSpreadsheet className="w-4 h-4 text-primary" /> EXCEL & SHEETS</span>
                    </div>

                    <div className="relative aspect-[16/10] max-w-4xl rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] group">
                        <img 
                            src={heroImageUrl || "https://picsum.photos/seed/sovereign/1200/800"} 
                            alt={pack.title} 
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        
                        {/* Clinical Overlay Label */}
                        <div className="absolute bottom-8 left-8 bg-black/60 backdrop-blur-md px-6 py-2 border border-white/10 rounded-full">
                            <span className="text-[8px] font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">deployment_ledger_v11.9_stable</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-12">
                    <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-3xl space-y-10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="w-32 h-32 text-primary" />
                        </div>
                        
                        <div className="space-y-4 relative z-10">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ DEPLOYMENT SECTOR</span>
                            <div className="flex flex-wrap gap-2">
                                {audience.map(person => (
                                    <Badge key={person} variant="secondary" className="bg-white/5 text-white/60 border-white/10 px-4 py-1.5 text-[9px] font-black uppercase italic rounded-none tracking-widest">{person}</Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6 pt-10 border-t border-white/5 relative z-10">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.5em] font-headline">/ SYSTEM SPECS</span>
                            <div className="grid grid-cols-1 gap-6">
                                {pack.sampleItems.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2 group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 animate-pulse" />
                                            <IconComponent name={item.icon} className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                                            <p className="text-[11px] md:text-sm font-bold text-primary-text/90 italic leading-snug tracking-tight" dangerouslySetInnerHTML={{ __html: item.text }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                             <a href="#pricing" className="block">
                                <button className="w-full h-20 rounded-2xl bg-primary text-black font-black uppercase italic text-lg shadow-[0_20px_50px_-10px_rgba(46,184,107,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 border-none">
                                    DEPLOY SYSTEM → ₹999
                                </button>
                             </a>
                             <p className="text-[8px] text-white/20 text-center uppercase tracking-[0.4em] mt-4 font-black">one-time investment • own forever</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        <PainPointsSection packId={pack.id} />

        <Section className="bg-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="max-w-6xl mx-auto space-y-16 relative z-10">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.5em] font-black text-[10px] rounded-none px-6">Operational Architecture</Badge>
                    <SectionHeadline>CORE MODULES</SectionHeadline>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pack.checklists.map((checklist, index) => (
                        <div key={index} className="p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-primary/40 transition-all group flex flex-col gap-6 relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-32 h-32" />
                            </div>
                            
                            <div className="flex items-start justify-between gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all shadow-inner">
                                    <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-7 h-7" />
                                </div>
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest pt-2 italic">{checklist.frequency}</span>
                            </div>
                            
                            <div className="space-y-2 relative z-10">
                                <h4 className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-[0.9] font-headline">{checklist.title}</h4>
                                <p className="text-xs text-secondary-text italic font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">{checklist.summary}</p>
                            </div>

                            <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                                <span className="text-[8px] font-black text-white/10 uppercase tracking-widest">{checklist.role.toUpperCase()}</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 rounded-full bg-primary" />
                                    <span className="text-[8px] font-black text-primary uppercase tracking-[0.2em]">{checklist.tasks.length} CONTROL POINTS</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
        <GlobalStandardsSection pack={pack} />
    </>
  );
}
