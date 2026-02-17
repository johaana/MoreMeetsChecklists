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
    FileText
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

/* --- RESOLUTION CTA 1: STRATEGIC SOLUTION --- */
const Resolution_Strategic = () => (
    <div className="relative group w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
        <Card className="relative p-6 md:p-16 rounded-2xl md:rounded-[2rem] border border-white/10 bg-black flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <Users className="w-32 h-32 md:w-48 md:h-48" />
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10 flex-1 w-full">
                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <Badge variant="outline" className="text-[8px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase border-primary/30 text-primary px-3 md:px-4 py-1.5 rounded-none">Strategic Solution</Badge>
                    <span className="text-[8px] md:text-[10px] text-white/40 font-black uppercase tracking-[0.2em] italic">Includes 1 Free Tailored Customization</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-black text-white font-headline tracking-tighter uppercase italic leading-tight md:leading-none">Secure Your Institutional <br className="hidden md:block" /> Memory Before It Walks Out</h3>
                <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
                    Convert individual brilliance into permanent infrastructure. ISO 9001 and 41001 mapped protocols for organizational audit-readiness and continuity.
                </p>
                <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 pt-4 border-t border-white/5 mt-4 md:mt-6">
                    {CORE_METADATA.map(item => (
                        <div key={item.label} className="flex items-center gap-2 text-[7px] md:text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                            <item.icon className="w-2.5 h-2.5 md:w-3 h-3 text-primary" /> {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto relative z-10 shrink-0">
                <Button className="h-14 md:h-16 bg-primary text-black font-black uppercase text-[10px] md:text-xs px-8 md:px-12 rounded-sm shadow-2xl hover:scale-105 transition-all tracking-[0.2em]">
                    Deploy Resilience Framework <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <div className="flex items-center justify-center gap-2 opacity-40">
                    <Lock className="w-3 h-3" />
                    <p className="text-[8px] md:text-[9px] text-center text-zinc-600 uppercase font-black tracking-[0.3em] md:tracking-[0.4em] italic">No SaaS lock-in</p>
                </div>
            </div>
        </Card>
    </div>
);

/* --- RESOLUTION CTA 2: INSTITUTIONAL PROTOCOL --- */
const Resolution_Protocol = () => (
    <div className="relative group w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
        <Card className="relative p-6 md:p-16 rounded-2xl md:rounded-[2rem] border border-white/10 bg-zinc-950 flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <ShieldAlert className="w-32 h-32 md:w-48 md:h-48" />
            </div>
            <div className="space-y-4 md:space-y-6 relative z-10 flex-1 w-full">
                <div className="flex items-center gap-3 md:gap-4 text-accent">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Institutional Control Protocol</span>
                </div>
                <h3 className="text-2xl md:text-5xl font-black text-white font-headline tracking-tighter uppercase italic leading-tight md:leading-none">Eliminate Operational Drift <br className="hidden md:block" /> Before It Becomes A Headline</h3>
                <p className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed">
                    Deploy the verified, HACCP and FSSAI-aligned institutional backbone designed to eliminate the exact failure points analyzed in this debrief.
                </p>
                <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-3 pt-4 border-t border-white/5 mt-4 md:mt-6">
                    {CORE_METADATA.map(item => (
                        <div key={item.label} className="flex items-center gap-2 text-[7px] md:text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                            <item.icon className="w-2.5 h-2.5 md:w-3 h-3 text-accent" /> {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 w-full md:w-auto relative z-10 shrink-0">
                <Button className="h-14 md:h-16 bg-accent text-black font-black uppercase text-[10px] md:text-xs px-8 md:px-12 rounded-sm shadow-2xl hover:scale-105 transition-all tracking-[0.2em]">
                    Secure Forensic Blueprint <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
                <div className="flex items-center justify-center gap-2 opacity-40">
                    <Lock className="w-3 h-3" />
                    <p className="text-[8px] md:text-[9px] text-center text-zinc-600 uppercase font-black tracking-[0.3em] md:tracking-[0.4em] italic">No SaaS lock-in</p>
                </div>
            </div>
        </Card>
    </div>
);

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cn("w-full py-12 md:py-32", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-24 md:pb-48 bg-zinc-950">
            {/* LAB HEADER */}
            <header className="w-full py-16 md:py-24 text-center border-b border-white/5">
                <Badge variant="outline" className="text-primary border-primary/30 mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase">Resolution Protocol V15</Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase mb-4 md:mb-6 italic leading-tight md:leading-none">The Resolution Path</h1>
                <p className="text-base md:text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed px-4">
                    Comparison of the final two B2B psychological resolutions. Optimized for authoritative procurement and organizational tailoring.
                </p>
            </header>

            {/* RESOLUTIONS TRACK */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                    {/* OPTION 1 */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="text-center p-4 md:p-6 border border-white/5 rounded-xl md:rounded-2xl bg-white/[0.02]">
                            <Badge variant="secondary" className="mb-2 md:mb-4">Option 1: The Strategic Solution</Badge>
                            <p className="text-[10px] md:text-xs text-zinc-500 uppercase font-black tracking-widest">Focus: Resilience & Tailoring</p>
                        </div>
                        <Resolution_Strategic />
                    </div>

                    {/* OPTION 2 */}
                    <div className="space-y-6 md:space-y-8">
                        <div className="text-center p-4 md:p-6 border border-white/5 rounded-xl md:rounded-2xl bg-white/[0.02]">
                            <Badge variant="secondary" className="mb-2 md:mb-4">Option 2: The Institutional Protocol</Badge>
                            <p className="text-[10px] md:text-xs text-zinc-500 uppercase font-black tracking-widest">Focus: Backbone & Authority</p>
                        </div>
                        <Resolution_Protocol />
                    </div>
                </div>
            </Section>

            {/* NEWS LAYOUT PREVIEW */}
            <Section className="bg-black/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto space-y-12 md:space-y-16">
                    <div className="space-y-6 md:space-y-8">
                        <div className="flex items-center gap-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary">
                            <FileText className="w-4 h-4" /> Technical Analysis
                        </div>
                        <h3 className="text-3xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase italic leading-tight md:leading-none">The $25 Million Burrito</h3>
                        <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed md:leading-[1.8] font-medium border-l-2 border-primary/20 pl-6 md:pl-8 italic">
                            Operational drift is the silent killer of enterprise value. It begins when a busy manager skips a single refrigeration log on a Friday night. 
                        </p>
                    </div>

                    {/* EXHIBIT IMAGE: Financial Mapping */}
                    <div className="py-16 md:py-40 text-center space-y-6">
                        <figure className="inline-block w-full max-w-3xl">
                            <img 
                                src="https://i.postimg.cc/15vsZb2f/chipotle4.jpg" 
                                alt="Forensic Evidence" 
                                className="w-full aspect-video object-cover rounded-lg md:rounded-2xl border border-white/10 shadow-2xl"
                            />
                            <figcaption className="mt-4 md:mt-8 text-[9px] md:text-[11px] text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] font-black italic">Exhibit C: Financial Consequence Mapping (16:9 Aspect Ratio • Expansive Spacing)</figcaption>
                        </figure>
                    </div>

                    <div className="space-y-6 md:space-y-8">
                        <p className="text-lg md:text-2xl text-zinc-300 leading-relaxed md:leading-[1.8]">Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine. Complexity without documentation is exposure.</p>
                    </div>
                    
                    <div className="pt-16 md:pt-24">
                        <Resolution_Protocol />
                    </div>
                </div>
            </Section>
        </main>
    );
}
