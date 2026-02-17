
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    Check,
    Sparkles,
    Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';

/* --- IMPROVISATION 1: THE STRATEGIC SOLUTION (Focus: Tailoring & Resilience) --- */
const CTA_Improv_1 = () => (
    <div className="mt-20 relative group max-w-5xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative p-12 md:p-16 rounded-[2rem] border border-white/10 bg-black flex flex-col md:flex-row items-center gap-16 justify-between overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                <Sparkles className="w-48 h-48" />
            </div>
            <div className="space-y-6 relative z-10 flex-1">
                <div className="flex items-center gap-4">
                    <Badge variant="outline" className="text-[10px] font-black tracking-[0.3em] uppercase border-primary/30 text-primary px-4 py-1.5 rounded-none">Strategic Solution</Badge>
                    <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] italic">Includes 1 Free Tailored Customization</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white font-headline tracking-tighter uppercase italic leading-none">Operational Resilience <br className="hidden md:block" /> Framework</h3>
                <p className="text-base text-zinc-400 max-w-lg leading-relaxed">
                    Deploy the verified, audit-ready toolkit designed to eliminate the exact failure points analyzed in this debrief. 
                </p>
                <div className="flex flex-wrap items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-white/40 pt-2">
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary"/> 120+ VERIFIED TASKS</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary"/> REGULATORY ALIGNED</span>
                    <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-primary"/> EXCEL FORMAT</span>
                </div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto relative z-10 shrink-0">
                <Button className="h-16 bg-primary text-black font-black uppercase text-xs px-12 rounded-sm shadow-2xl hover:scale-105 transition-all tracking-[0.2em]">
                    Procure Full Asset <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-[10px] text-center text-zinc-600 uppercase font-black tracking-[0.4em] italic">Ready for Instant Deployment</p>
            </div>
        </div>
    </div>
);

/* --- IMPROVISATION 2: THE INSTITUTIONAL BACKBONE (Focus: Control & Authority) --- */
const CTA_Improv_2 = () => (
    <div className="mt-20 border-t-2 border-primary pt-16 flex flex-col md:flex-row gap-20 items-center justify-between max-w-5xl mx-auto bg-white/[0.01] p-12 rounded-3xl border border-white/5 shadow-2xl">
        <div className="space-y-8 flex-1">
            <div className="flex items-center gap-4 text-primary">
                <Shield className="w-8 h-8" />
                <span className="text-sm font-black uppercase tracking-[0.4em]">Institutional Control Protocol</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-black font-headline text-white tracking-tighter uppercase leading-none italic">Operations <br />Control Backbone</h3>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-md">
                A non-SaaS, offline-first infrastructure for organizations where consistency is a non-negotiable requirement. 
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                {['Audit-Ready Standard', 'Fully Editable .xlsx', 'Unlimited Usage Rights', 'Offline Resilience'].map(item => (
                    <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-white/40 tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white/5 p-12 rounded-none border-l-4 border-primary w-full md:w-80 space-y-8 shrink-0">
            <div className="space-y-2 text-center md:text-left">
                <p className="text-[11px] text-zinc-500 uppercase font-black tracking-[0.3em]">Institutional Procurement</p>
                <p className="text-5xl font-black text-white tracking-tighter">₹5,999</p>
            </div>
            <Button className="w-full h-14 bg-white text-black font-black uppercase text-[11px] tracking-[0.2em] hover:bg-primary transition-colors rounded-none shadow-xl">
                Secure Asset Access
            </Button>
            <p className="text-[9px] text-zinc-600 text-center uppercase font-bold tracking-widest">One-time Procurement • No SaaS fees</p>
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

const mockText = `Operational drift is the silent killer of enterprise value. It begins when a busy manager skips a single refrigeration log on a Friday night. It continues when a sick employee is pressured to "power through" a short shift. It normalizes when shortcuts become the standard. Individually, these lapses are minor. Collectively, they become a multi-million dollar exposure.

By 2020, the penalty for this acceleration was a $25 million federal fine—the largest in U.S. history for a food safety case. The real cost lived in billions of lost market capitalization and the erosion of customer trust. True leadership is building a machine that thrives even when the operators change. Documentation is defense—and defense must be systemic, not reactive.`;

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-48 bg-zinc-950">
            {/* LAB HEADER */}
            <Section className="text-center pt-24 pb-16">
                <Badge variant="outline" className="text-primary border-primary/30 mb-6 px-6 py-2 rounded-full text-[11px] font-black tracking-[0.3em] uppercase">Editorial Lab V8</Badge>
                <h1 className="text-5xl md:text-7xl font-black font-headline text-white tracking-tighter uppercase mb-6 italic leading-none">The Executive Flow</h1>
                <p className="text-xl text-zinc-400 max-w-3xl mx-auto font-medium leading-relaxed">
                    Refined hero imagery (rectangular) and side-by-side executive CTA comparisons.
                </p>
            </Section>

            {/* PREVIEW CONTAINER */}
            <Section className="pt-0">
                <Tabs defaultValue="layout" className="w-full">
                    <div className="flex justify-center mb-16">
                        <TabsList className="bg-white/5 border border-white/10 p-2 h-16 rounded-full">
                            <TabsTrigger value="layout" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold uppercase text-[11px] tracking-[0.2em]">1. News Layout</TabsTrigger>
                            <TabsTrigger value="ctas" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-accent font-bold uppercase text-[11px] tracking-[0.2em]">2. CTA Comparisons</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-[4rem] p-10 md:p-24 shadow-2xl min-h-[1000px]">
                        
                        {/* FINAL LAYOUT SELECTION: EXECUTIVE NARRATIVE */}
                        <TabsContent value="layout" className="mt-0 outline-none">
                            <div className="max-w-4xl mx-auto space-y-16">
                                <div className="space-y-8">
                                    <h3 className="text-4xl font-black font-headline text-white tracking-tighter uppercase italic">The Forensic Standard</h3>
                                    <p className="text-2xl text-zinc-300 leading-[1.8] font-medium">{mockText}</p>
                                </div>

                                {/* EXHIBIT IMAGE: Rectangular "News Report" format */}
                                <div className="py-40 text-center space-y-6">
                                    <figure className="inline-block max-w-2xl">
                                        <img 
                                            src="https://i.postimg.cc/NjLYGpvy/chipotle1.jpg" 
                                            alt="Forensic Evidence" 
                                            className="w-full aspect-video object-cover rounded-2xl border border-white/10 shadow-2xl"
                                        />
                                        <figcaption className="mt-8 text-[11px] text-zinc-500 uppercase tracking-[0.3em] font-black italic">Exhibit A: Visualized Operational Decay</figcaption>
                                    </figure>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-2xl text-zinc-300 leading-[1.8]">Well-documented operations increase valuation multiples and improve investor confidence. Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine. Complexity without documentation is exposure.</p>
                                </div>
                                
                                <CTA_Improv_1 />
                            </div>
                        </TabsContent>

                        {/* OPTION 2: CTA COMPARISONS */}
                        <TabsContent value="ctas" className="mt-0 outline-none space-y-48 py-16">
                            <div className="max-w-5xl mx-auto space-y-48">
                                
                                <div className="space-y-12">
                                    <div className="text-center">
                                        <Badge variant="secondary" className="mb-4 px-4 py-1">Strategy A</Badge>
                                        <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">The "Strategic Solution"</h4>
                                        <p className="text-[11px] text-zinc-500 uppercase mt-2 tracking-widest">Focus: Customization & Tailoring</p>
                                    </div>
                                    <CTA_Improv_1 />
                                </div>

                                <div className="space-y-12">
                                    <div className="text-center">
                                        <Badge variant="secondary" className="mb-4 px-4 py-1">Strategy B</Badge>
                                        <h4 className="text-white font-black uppercase tracking-[0.3em] text-sm italic font-headline">The "Control Backbone"</h4>
                                        <p className="text-[11px] text-zinc-500 uppercase mt-2 tracking-widest">Focus: Institutional Infrastructure</p>
                                    </div>
                                    <CTA_Improv_2 />
                                </div>

                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </Section>
        </main>
    );
}
