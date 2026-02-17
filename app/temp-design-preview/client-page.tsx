
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    ShieldCheck, 
    Check,
    FileText,
    Download,
    Lock,
    Scale,
    FileSearch,
    Zap,
    Globe,
    Cpu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

/* --- IMPROVISED CTA A: THE STRATEGIC SOLUTION (High-End Glass) --- */
const CTA_Strategic_Refined = () => (
    <div className="mt-20 relative group max-w-4xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative p-10 rounded-2xl border border-white/10 bg-black flex flex-col md:flex-row items-center gap-12 justify-between">
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-[9px] font-black tracking-[0.2em] uppercase border-primary/30 text-primary px-3 py-1 rounded-none">Structural Fix</Badge>
                    <span className="text-[9px] text-white/30 font-black uppercase tracking-widest">ASSET ID: MM-REST-V4</span>
                </div>
                <h3 className="text-2xl font-black text-white font-headline tracking-tighter uppercase italic">Operational Resilience Framework</h3>
                <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                    Deploy the verified, audit-ready toolkit designed to eliminate the exact failure points analyzed in this debrief. 
                </p>
                <div className="flex items-center gap-6 text-[8px] font-black uppercase tracking-widest text-white/40">
                    <span className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-primary"/> 120+ TASKS</span>
                    <span className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-primary"/> HACCP ALIGNED</span>
                    <span className="flex items-center gap-1.5"><Check className="w-2.5 h-2.5 text-primary"/> EXCEL FORMAT</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
                <Button className="h-14 bg-primary text-black font-black uppercase text-xs px-10 rounded-sm shadow-2xl hover:scale-105 transition-all">
                    Procure Full Asset <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-[9px] text-center text-zinc-600 uppercase font-black tracking-[0.3em] italic">Instant Secure Delivery</p>
            </div>
        </div>
    </div>
);

/* --- IMPROVISED CTA B: THE INDUSTRIAL BLUEPRINT (Technical/Bold) --- */
const CTA_Industrial_Spec = () => (
    <div className="mt-20 border-t-2 border-primary pt-10 flex flex-col md:flex-row gap-16 items-start justify-between max-w-4xl mx-auto">
        <div className="space-y-6 flex-1">
            <div className="flex items-center gap-3 text-primary">
                <Cpu className="w-6 h-6" />
                <span className="text-xs font-black uppercase tracking-[0.3em]">System Specification: MMA-2025</span>
            </div>
            <h3 className="text-4xl font-black font-headline text-white tracking-tighter uppercase">Operations <br />Control Pack</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-sm">
                A non-SaaS, offline-first infrastructure for businesses where consistency is a non-negotiable legal requirement.
            </p>
        </div>
        <div className="bg-white/5 p-8 rounded-none border-l-4 border-primary w-full md:w-72 space-y-6">
            <div className="space-y-1">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Standard Issue Price</p>
                <p className="text-4xl font-black text-white tracking-tighter">₹5,999</p>
            </div>
            <ul className="space-y-2">
                {['Audit-Ready', 'Fully Editable', 'Lifetime Access'].map(item => (
                    <li key={item} className="text-[9px] font-black uppercase text-white/40 flex items-center gap-2 tracking-tighter">
                        <div className="w-1 h-1 bg-primary" /> {item}
                    </li>
                ))}
            </ul>
            <Button className="w-full h-12 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-primary transition-colors rounded-none">
                Procure Asset
            </Button>
        </div>
    </div>
);

/* --- IMPROVISED CTA C: THE EXECUTIVE ACCESS (Minimalist/Prestige) --- */
const CTA_Minimalist_Prestige = () => (
    <div className="mt-20 py-16 px-10 bg-zinc-900 border border-white/5 flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto rounded-[2rem]">
        <Globe className="w-10 h-10 text-primary opacity-20" />
        <div className="space-y-3">
            <h3 className="text-3xl font-black font-headline text-white tracking-tighter uppercase">The Professional Standard</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                Join 500+ organizations running on MoreMeets™ verified standards. One-time purchase. Unlimited internal deployment.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button variant="outline" className="h-12 border-white/10 text-white font-black uppercase text-[10px] px-8 rounded-full">
                View Pack Library
            </Button>
            <Button className="h-12 bg-primary text-black font-black uppercase text-[10px] px-8 rounded-full shadow-xl">
                Download Restaurant Pack
            </Button>
        </div>
        <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.2em]">Validated for ISO & HACCP Compliance</p>
    </div>
);

const Section = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const mockText = `Operational drift is the silent killer of enterprise value. It begins when a busy manager skips a single refrigeration log on a Friday night. It continues when a sick employee is pressured to "power through" a short shift. It normalizes when shortcuts become the standard. Individually, these lapses are minor. Collectively, they become a multi-million dollar exposure.

By 2020, the penalty for this acceleration was a $25 million federal fine—the largest in U.S. history for a food safety case. The real cost lived in billions of lost market capitalization and the erosion of customer trust. True leadership is building a machine that thrives even when the operators change. Documentation is defense—and defense must be systemic, not reactive.`;

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-32 bg-zinc-950">
            {/* LAB HEADER */}
            <Section className="text-center pt-24 pb-12">
                <Badge variant="outline" className="text-primary border-primary/30 mb-4 px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">Editorial Lab V4</Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter uppercase mb-4 italic leading-none">The Outset Engine</h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
                    Showcase of "Outset Evidence" layout + Refined Strategic CTAs.
                </p>
            </Section>

            {/* PREVIEW CONTAINER */}
            <Section className="pt-0">
                <Tabs defaultValue="outset" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-white/5 border border-white/10 p-1.5 h-14 rounded-full">
                            <TabsTrigger value="outset" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold uppercase text-[10px] tracking-widest">1. Layout: Outset</TabsTrigger>
                            <TabsTrigger value="ctas" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-accent font-bold uppercase text-[10px] tracking-widest">2. CTA Improvisations</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-[3rem] p-8 md:p-20 shadow-2xl min-h-[800px]">
                        
                        {/* FINAL LAYOUT SELECTION: OUTSET EVIDENCE */}
                        <TabsContent value="outset" className="mt-0 outline-none">
                            <div className="max-w-2xl mx-auto space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black font-headline text-white tracking-tighter uppercase italic">Forensic Analysis: Chipotle Case</h3>
                                    <p className="text-lg text-zinc-300 leading-relaxed font-medium">{mockText}</p>
                                </div>

                                {/* OUTSET IMAGE: Bleeds into margins */}
                                <div className="-mx-4 md:-mx-32 my-12">
                                    <figure className="space-y-3">
                                        <img 
                                            src="https://i.postimg.cc/NjLYGpvy/chipotle1.jpg" 
                                            alt="Outset Data" 
                                            className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                                        />
                                        <figcaption className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-black">Exhibit A: Brand Inconsistency Visualized</figcaption>
                                    </figure>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-lg text-zinc-300 leading-relaxed">Well-documented operations increase valuation multiples and improve investor confidence. Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine.</p>
                                </div>

                                <div className="-mx-4 md:-mx-32 my-12">
                                    <figure className="space-y-3">
                                        <img 
                                            src="https://i.postimg.cc/L8hR4NFV/cost-of-no-sops-comparison.png" 
                                            alt="Benefit Logic" 
                                            className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                                        />
                                        <figcaption className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-black">Exhibit B: Financial Impact Comparison</figcaption>
                                    </figure>
                                </div>
                                
                                <CTA_Strategic_Refined />
                            </div>
                        </TabsContent>

                        {/* OPTION 2: CTA IMPROVISATIONS */}
                        <TabsContent value="ctas" className="mt-0 outline-none space-y-32 py-12">
                            <div className="max-w-4xl mx-auto space-y-32">
                                
                                <div className="space-y-8">
                                    <div className="text-center">
                                        <Badge variant="secondary" className="mb-2">Improvisation 1</Badge>
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">The "Refined Strategic Solution"</h4>
                                        <p className="text-[10px] text-zinc-500 uppercase mt-1">High-End • Narrative • Trust-based</p>
                                    </div>
                                    <CTA_Strategic_Refined />
                                </div>

                                <div className="space-y-8">
                                    <div className="text-center">
                                        <Badge variant="secondary" className="mb-2">Improvisation 2</Badge>
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">The "Technical Spec Sheet"</h4>
                                        <p className="text-[10px] text-zinc-500 uppercase mt-1">Industrial • Authoritative • Utility-based</p>
                                    </div>
                                    <CTA_Industrial_Spec />
                                </div>

                                <div className="space-y-8">
                                    <div className="text-center">
                                        <Badge variant="secondary" className="mb-2">Improvisation 3</Badge>
                                        <h4 className="text-white font-bold uppercase tracking-widest text-xs">The "Executive Minimalist"</h4>
                                        <p className="text-[10px] text-zinc-500 uppercase mt-1">Clean • Modern • Direct Access</p>
                                    </div>
                                    <CTA_Minimalist_Prestige />
                                </div>

                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </Section>
        </main>
    );
}
