'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    Lock,
    Users,
    TrendingUp,
    ShieldAlert,
    Zap,
    HeartPulse,
    FileSpreadsheet,
    Infinity,
    ShieldCheck,
    Shield,
    FileText,
    History
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const CORE_METADATA = [
    { label: 'Audit-Ready Standards', icon: ShieldCheck },
    { label: 'Fully Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Unlimited Usage Rights', icon: Infinity },
    { label: 'Offline Resilience', icon: Zap }
];

const CTACard = ({ title, description, icon: Icon, compliance, variant = "primary", isBlog = false }: any) => (
    <div className="relative group w-full">
        <div className={cn(
            "absolute -inset-0.5 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-1000",
            variant === "primary" ? "bg-gradient-to-r from-primary/30 to-accent/30" : "bg-gradient-to-r from-accent/30 to-primary/30"
        )}></div>
        <Card className="relative p-6 md:p-12 rounded-2xl md:rounded-[2rem] border border-white/10 bg-black flex flex-col lg:flex-row items-center gap-8 md:gap-12 justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <Icon className="w-32 h-32 md:w-48 md:h-48" />
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10 flex-1 w-full text-left">
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <Badge variant="outline" className={cn(
                        "text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase px-3 md:px-4 py-1.5 rounded-none",
                        variant === "primary" ? "border-primary/30 text-primary" : "border-accent/30 text-accent"
                    )}>Resolution Protocol</Badge>
                    <span className="text-[8px] md:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] italic">1 Expert Customization Included</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-black text-white font-headline tracking-tighter uppercase italic leading-tight">{title}</h3>
                <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">{description}</p>
                
                <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 pt-4 border-t border-white/5 mt-4">
                    {CORE_METADATA.map(item => (
                        <div key={item.label} className="flex items-center gap-2 text-[7px] md:text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                            <item.icon className={cn("w-2.5 h-2.5 md:w-3 h-3", variant === "primary" ? "text-primary" : "text-accent")} /> {item.label}
                        </div>
                    ))}
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                    <Shield className="w-3 h-3 text-accent" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-accent">Aligned: {compliance}</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto relative z-10 shrink-0">
                <div className="flex flex-col items-center gap-3">
                    <Button className={cn(
                        "h-14 md:h-16 text-black font-black uppercase text-[10px] md:text-xs px-8 md:px-12 rounded-sm shadow-2xl hover:scale-105 transition-all tracking-[0.2em] border-none w-full",
                        variant === "primary" ? "bg-primary" : "bg-accent"
                    )}>
                        {isBlog ? "Protect Your Operations" : "Eliminate Operational Risk"} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                    <div className="text-center space-y-0.5">
                        <p className="text-[8px] font-black uppercase tracking-widest text-white/40">So nothing critical is missed.</p>
                        {!isBlog && <p className="text-[8px] font-black uppercase tracking-widest text-white/40">Built to prevent costly oversight.</p>}
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2 opacity-40">
                    <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-center italic">Aligned to your brand and workflow</p>
                    <div className="flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3" />
                        <p className="text-[8px] md:text-[9px] text-center text-zinc-600 uppercase font-black tracking-[0.3em] italic">No SaaS lock-in</p>
                    </div>
                </div>
            </div>
        </Card>
    </div>
);

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cn("w-full py-12 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-24 md:pb-48 bg-zinc-950">
            <header className="w-full py-16 md:py-24 text-center border-b border-white/5">
                <Badge variant="outline" className="text-primary border-primary/30 mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">Executive Resolution Matrix</Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase mb-4 md:mb-6 italic leading-tight">The Resolution Path</h1>
                <p className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed px-4">
                    Refined B2B conversion hooks with risk elimination framing.
                </p>
            </header>

            <Section>
                <div className="grid gap-12 max-w-6xl mx-auto">
                    {/* Concept 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Badge variant="secondary">Blog-Style CTA (Protect Your Operations)</Badge>
                            <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Resolves: Resignation Risk</span>
                        </div>
                        <CTACard 
                            title="Secure Your Institutional Memory Before It Walks Out"
                            description="Convert individual brilliance into permanent infrastructure. Mapped to ISO 9001 and ISO 41001 standards to ensure your operations survive the next key resignation."
                            icon={History}
                            compliance="ISO 9001 • ISO 41001"
                            variant="primary"
                            isBlog={true}
                        />
                    </div>

                    {/* Concept 2 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <Badge variant="secondary">Pack-Style CTA (Eliminate Operational Risk)</Badge>
                            <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Resolves: Operational Drift</span>
                        </div>
                        <CTACard 
                            title="Eliminate Operational Drift Before It Becomes A Headline"
                            description="Deploy the verified, HACCP and FSSAI-aligned institutional backbone designed to eliminate the exact failure points analyzed in this debrief."
                            icon={ShieldAlert}
                            compliance="HACCP • FSSAI • ISO 22000"
                            variant="accent"
                            isBlog={false}
                        />
                    </div>
                </div>
            </Section>

            {/* Layout Tempo Preview */}
            <Section className="bg-black/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                            <FileText className="w-4 h-4" /> Technical Analysis
                        </div>
                        <h3 className="text-3xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase italic leading-tight">Forensic Readability</h3>
                        <p className="text-lg md:text-2xl text-primary leading-relaxed italic border-l-2 border-primary/20 pl-6 md:pl-8">
                            This is a lead paragraph. It uses the brand color to guide the reader into the forensic depth of the analysis.
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                        Investors value predictable systems, not heroic individuals. <strong>Complexity without documentation is exposure.</strong> By using bold weights strategically, we allow executives to skim the core arguments while maintaining narrative flow.
                    </p>

                    <blockquote className="border-l-4 border-primary bg-white/[0.02] px-6 md:px-12 py-6 md:py-10 rounded-r-xl italic text-xl md:text-2xl text-primary-text font-medium">
                        "If your standards drift the moment your best employee steps out of the room, you don't have a business."
                    </blockquote>

                    <div className="py-16 md:py-32 text-center">
                        <figure className="inline-block w-full max-w-xl">
                            <div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 flex items-center justify-center text-zinc-700 text-xs uppercase font-black tracking-[0.3em]">
                                16:9 Forensic Exhibit Exhibit
                            </div>
                            <figcaption className="mt-4 text-[9px] text-zinc-500 uppercase tracking-[0.3em] font-black italic">Exhibit C: Financial Consequence Mapping</figcaption>
                        </figure>
                    </div>

                    <div className="pt-16">
                        <CTACard 
                            title="Establish Absolute Operational Control"
                            description="Deploy an offline-resilient system that provides a verifiable audit trail for every critical task. Mapped to OSHA and local statutory safety norms."
                            icon={ShieldCheck}
                            compliance="ISO • OSHA • Statutory"
                            variant="primary"
                            isBlog={true}
                        />
                    </div>
                </div>
            </Section>
        </main>
    );
}
