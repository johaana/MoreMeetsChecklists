
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    Check,
    Sparkles,
    Shield,
    FileCheck,
    Lock,
    Users,
    TrendingUp,
    ShieldAlert,
    Zap,
    HeartPulse,
    FileSpreadsheet,
    Globe,
    Infinity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CORE_METADATA = [
    { label: 'Audit-Ready Standards', icon: Shield },
    { label: 'Fully Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Unlimited Usage Rights', icon: Infinity },
    { label: 'Offline Resilience', icon: Zap }
];

/* --- CONCEPT 1: THE RESILIENCE FRAMEWORK (Resignation Risk) --- */
const CTA_Resignation = () => (
    <div className="relative group w-full">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative p-10 md:p-16 rounded-[2rem] border border-white/10 bg-black flex flex-col md:flex-row items-center gap-12 justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <Users className="w-48 h-48" />
            </div>
            <div className="space-y-6 relative z-10 flex-1">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-[10px] font-black tracking-[0.3em] uppercase border-primary/30 text-primary px-4 py-1.5 rounded-none">Strategic Solution</Badge>
                    <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] italic">Includes 1 Free Tailored Customization</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-white font-headline tracking-tighter uppercase italic leading-none">Secure Your Institutional <br /> Memory Before It Walks Out</h3>
                <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
                    Convert individual brilliance into permanent infrastructure. ISO, HACCP, and OSHA mapped protocols for instant organizational audit-readiness and brand protection.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4">
                    {CORE_METADATA.map(item => (
                        <div key={item.label} className="flex items-center gap-2 text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                            <item.icon className="w-3 h-3 text-primary" /> {item.label}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto relative z-10 shrink-0">
                <Button className="h-16 bg-primary text-black font-black uppercase text-xs px-12 rounded-sm shadow-2xl hover:scale-105 transition-all tracking-[0.2em]">
                    Deploy Resilience Framework <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-[9px] text-center text-zinc-600 uppercase font-black tracking-[0.4em] italic">Ready for Instant Deployment • No SaaS lock-in</p>
            </div>
        </div>
    </div>
);

/* --- CONCEPT 2: THE FORENSIC BLUEPRINT (Operational Drift) --- */
const CTA_Drift = () => (
    <div className="w-full p-1 border-2 border-white/5 rounded-sm bg-zinc-900/50">
        <div className="border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1 space-y-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                        <ShieldAlert className="w-5 h-5" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Audit Verification Standard</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black font-headline text-white uppercase tracking-tighter leading-none italic">Eliminate Operational Drift <br /> Before It Becomes A Headline</h3>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8 border-t border-white/10 pt-10">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Regulatory Alignment</p>
                        <p className="text-sm text-zinc-300 font-medium leading-relaxed">ISO, HACCP, and OSHA mapped protocols for instant organizational audit-readiness and brand protection.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {CORE_METADATA.map(item => (
                            <div key={item.label} className="flex items-center gap-2 text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                                <Check className="w-3 h-3 text-accent" /> {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full md:w-72 space-y-6 pt-2 shrink-0">
                <div className="p-8 border border-white/10 bg-black/40 space-y-6 text-center md:text-left">
                    <div className="space-y-1">
                        <p className="text-[11px] font-black text-accent uppercase tracking-[0.3em]">Institutional Procurement</p>
                        <p className="text-xs text-zinc-500 font-medium">Verified for Multi-Location Chains</p>
                    </div>
                    <Button className="w-full h-14 bg-accent text-black font-black uppercase text-[10px] tracking-[0.2em] rounded-none hover:bg-white transition-all shadow-xl">
                        Secure Forensic Blueprint
                    </Button>
                    <div className="flex items-center justify-center gap-2 opacity-40">
                        <Lock className="w-3 h-3" />
                        <span className="text-[8px] font-black uppercase tracking-[0.2em]">Ready for Deployment • No SaaS lock-in</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

/* --- CONCEPT 3: THE INSTITUTIONAL BACKBONE (Safety/Healthcare) --- */
const CTA_Safety = () => (
    <div className="border-t-2 border-primary pt-16 flex flex-col md:flex-row gap-16 items-center justify-between w-full bg-white/[0.01] p-12 rounded-3xl border border-white/5 shadow-2xl">
        <div className="space-y-8 flex-1">
            <div className="flex items-center gap-4 text-primary">
                <Shield className="w-8 h-8" />
                <span className="text-sm font-black uppercase tracking-[0.4em]">Institutional Control Protocol</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter uppercase leading-none italic">Build Systems That Protect <br /> Lives — Not Just Brands</h3>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-xl">
                Deploy an institutional-grade operational control system. ISO, HACCP, and OSHA mapped protocols for instant organizational audit-readiness and brand protection.
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {CORE_METADATA.map(item => (
                    <div key={item.label} className="flex items-center gap-3 text-[10px] font-black uppercase text-white/40 tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item.label}
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white/5 p-12 rounded-none border-l-4 border-primary w-full md:w-80 space-y-8 shrink-0 text-center md:text-left">
            <div className="space-y-2">
                <p className="text-[11px] text-zinc-500 uppercase font-black tracking-[0.3em]">Procurement Access</p>
                <div className="flex items-center gap-2 text-primary">
                    <HeartPulse className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Clinical Grade Standard</span>
                </div>
            </div>
            <Button className="w-full h-14 bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] hover:bg-primary transition-colors rounded-none shadow-xl">
                Implement Control Protocol
            </Button>
            <p className="text-[9px] text-zinc-600 text-center uppercase font-bold tracking-[0.2em]">Ready for Deployment • No SaaS lock-in</p>
        </div>
    </div>
);

/* --- CONCEPT 4: THE PROFIT MULTIPLIER (ROI/Founder) --- */
const CTA_ROI = () => (
    <div className="w-full bg-zinc-900 border border-white/10 rounded-3xl p-10 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-accent opacity-50" />
        <div className="grid lg:grid-cols-[1fr,350px] gap-16 items-center relative z-10">
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-accent">Operations Control Backbone</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black font-headline text-white uppercase tracking-tighter italic leading-[0.9]">Turn Operational Structure <br /> Into a Profit Multiplier</h3>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
                    ISO, HACCP, and OSHA mapped protocols for instant organizational audit-readiness and brand protection. Reduce onboarding time by 40% and lower error rates instantly.
                </p>
            </div>
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-10 rounded-2xl space-y-8">
                <div className="space-y-4">
                    {CORE_METADATA.map(item => (
                        <div key={item.label} className="flex items-center gap-3">
                            <item.icon className="w-4 h-4 text-accent" />
                            <span className="text-[10px] font-black uppercase text-white/60 tracking-widest">{item.label}</span>
                        </div>
                    ))}
                </div>
                <Button className="w-full h-16 bg-accent text-black font-black uppercase text-xs tracking-[0.2em] rounded-sm hover:scale-[1.02] transition-transform">
                    Activate Profit Multiplier
                </Button>
                <p className="text-[9px] text-zinc-500 text-center uppercase font-bold tracking-widest leading-relaxed">
                    Ready for Instant Deployment • No SaaS lock-in
                </p>
            </div>
        </div>
    </div>
);

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cn("w-full py-20 md:py-32", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-48 bg-zinc-950">
            {/* LAB HEADER */}
            <Section className="text-center pt-24 pb-16 border-b border-white/5">
                <Badge variant="outline" className="text-primary border-primary/30 mb-6 px-6 py-2 rounded-full text-[11px] font-black tracking-[0.3em] uppercase">Editorial Strategy V11</Badge>
                <h1 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase mb-6 italic leading-none">The Executive Flow</h1>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                    Comparing four Psychologically-Driven CTAs. Featuring ISO/HACCP/OSHA mapping and core technical metadata.
                </p>
            </Section>

            {/* PREVIEW CONTAINER */}
            <Section className="pt-16">
                <Tabs defaultValue="ctas" className="w-full">
                    <div className="flex justify-center mb-16">
                        <TabsList className="bg-white/5 border border-white/10 p-2 h-16 rounded-full">
                            <TabsTrigger value="ctas" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold uppercase text-[11px] tracking-[0.2em]">1. Resolution CTAs</TabsTrigger>
                            <TabsTrigger value="layout" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-accent font-bold uppercase text-[11px] tracking-[0.2em]">2. News Layout</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-[4rem] p-10 md:p-24 shadow-2xl min-h-[1000px]">
                        
                        {/* TAB 1: STRATEGIC RESOLUTIONS */}
                        <TabsContent value="ctas" className="mt-0 outline-none space-y-40">
                            
                            {/* CASE 1 */}
                            <div className="space-y-12">
                                <div className="text-center">
                                    <Badge variant="secondary" className="mb-4 px-4 py-1">Case: Resignation Risk</Badge>
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">Target: Founders & SME Owners</h4>
                                </div>
                                <CTA_Resignation />
                            </div>

                            {/* CASE 2 */}
                            <div className="space-y-12">
                                <div className="text-center">
                                    <Badge variant="secondary" className="mb-4 px-4 py-1">Case: Operational Drift</Badge>
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">Target: Compliance & Quality Heads</h4>
                                </div>
                                <CTA_Drift />
                            </div>

                            {/* CASE 3 */}
                            <div className="space-y-12">
                                <div className="text-center">
                                    <Badge variant="secondary" className="mb-4 px-4 py-1">Case: Patient Safety</Badge>
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">Target: Healthcare & High-Risk Institutional</h4>
                                </div>
                                <CTA_Safety />
                            </div>

                            {/* CASE 4 */}
                            <div className="space-y-12">
                                <div className="text-center">
                                    <Badge variant="secondary" className="mb-4 px-4 py-1">Case: Operational ROI</Badge>
                                    <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">Target: CFOs & Investors</h4>
                                </div>
                                <CTA_ROI />
                            </div>

                        </TabsContent>

                        {/* TAB 2: NEWS LAYOUT PREVIEW */}
                        <TabsContent value="layout" className="mt-0 outline-none max-w-4xl mx-auto space-y-16">
                            <div className="space-y-8">
                                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                                    <FileCheck className="w-4 h-4" /> Technical Analysis
                                </div>
                                <h3 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase italic leading-none">The $25 Million Burrito</h3>
                                <p className="text-2xl text-zinc-300 leading-[1.8] font-medium border-l-2 border-primary/20 pl-8">
                                    Operational drift is the silent killer of enterprise value. It begins when a busy manager skips a single refrigeration log on a Friday night. 
                                </p>
                            </div>

                            {/* EXHIBIT IMAGE: Rectangular "News Report" format (16:9) */}
                            <div className="py-40 text-center space-y-6">
                                <figure className="inline-block max-w-3xl">
                                    <img 
                                        src="https://i.postimg.cc/NjLYGpvy/chipotle1.jpg" 
                                        alt="Forensic Evidence" 
                                        className="w-full aspect-video object-cover rounded-2xl border border-white/10 shadow-2xl"
                                    />
                                    <figcaption className="mt-8 text-[11px] text-zinc-500 uppercase tracking-[0.3em] font-black italic">Exhibit A: Visualized Operational Decay (16:9 Aspect Ratio)</figcaption>
                                </figure>
                            </div>

                            <div className="space-y-8">
                                <p className="text-2xl text-zinc-300 leading-[1.8]">Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine. Complexity without documentation is exposure.</p>
                            </div>
                            
                            <div className="pt-24">
                                <CTA_Drift />
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </Section>
        </main>
    );
}
