
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    ShieldCheck, 
    FileText,
    TrendingUp,
    AlertTriangle,
    CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

/* Mock Content for Preview */
const mockText = `In 2015, Chipotle was an industry darling, a symbol of "Food with Integrity." Then, a series of outbreaks—E. coli, norovirus, and salmonella—spread across several states, affecting over 1,100 people. This wasn't just a crisis; it was a post-mortem on what happens when a high-growth brand loses its grip on the "boring" details of daily execution. 

Operational drift is the silent killer. It starts when a busy manager skips a single refrigeration log on a Friday night. It continues when a sick employee is pressured to "power through" a short shift. It normalizes when shortcuts become the standard. Individually, these lapses are minor. Collectively, they become a multi-million dollar exposure.

The CDC estimates that 48 million Americans suffer foodborne illness annually. For a multi-location chain, even a 2% compliance gap across 2,000 stores represents 40 potential failure points every single day. This is the math of risk at scale.`;

const RelatedPackSmall = () => (
    <div className="mt-12 p-6 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest text-primary border-primary/20 mb-2">Structural Reference</Badge>
            <h4 className="text-xl font-bold text-white">Restaurant Operations Pack</h4>
            <p className="text-sm text-zinc-400">The audit-ready framework designed to prevent operational drift.</p>
        </div>
        <Button className="h-12 bg-primary text-black font-black uppercase text-xs px-8 shrink-0">
            PROCURE ASSET <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
    </div>
);

/* 1. Alternating Wrap Option */
const LayoutOptionWrap = () => (
    <div className="max-w-3xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-lg">
        <p className="text-xl font-medium text-white italic border-l-4 border-primary pl-6 py-2 mb-10">
            "Drift occurs when small deviations from procedure gradually normalize. It is rarely dramatic. It is gradual."
        </p>
        
        <div className="block">
            <img 
                src="https://i.postimg.cc/NjLYGpvy/chipotle1.jpg" 
                alt="Evidence 1" 
                className="float-left w-64 h-auto rounded-lg border border-white/10 mr-8 mb-4 shadow-xl"
            />
            <p>{mockText}</p>
        </div>

        <h3 className="text-2xl font-bold text-white pt-8">The Anatomy of Scale</h3>
        
        <div className="block">
            <img 
                src="https://i.postimg.cc/MpXxZdJf/chipotle2.png" 
                alt="Evidence 2" 
                className="float-right w-64 h-auto rounded-lg border border-white/10 ml-8 mb-4 shadow-xl"
            />
            <p>Rapid expansion can strain oversight. When companies scale aggressively, training cycles compress, regional audits dilute, and middle management bandwidth stretches. Governance must scale with growth; otherwise, drift accelerates. 
            
            By 2020, the penalty for this acceleration was a $25 million federal fine—the largest in U.S. history for a food safety case. But the fine was symbolic. The real cost lived in billions of lost market capitalization and the erosion of a decade of customer trust.</p>
        </div>
        
        <RelatedPackSmall />
    </div>
);

/* 2. Asymmetric Evidence Column */
const LayoutOptionSidebar = () => (
    <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,280px] gap-12">
        <div className="space-y-8 text-zinc-300 leading-relaxed text-lg">
            <p className="text-2xl font-bold text-white">The Inefficiency Tax</p>
            <p>{mockText}</p>
            <p>Well-documented operations increase valuation multiples and improve investor confidence. They shorten acquisition due diligence and reduce founder dependency. Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine.</p>
            <p>Stop paying the Memory Tax and start building a legacy. By systemizing your operations, you're not just achieving compliance; you're building a fortress around your profitability. The ROI of an SOP is simple: it ensures that the work is done right the first time, every time, regardless of who is doing it.</p>
            <RelatedPackSmall />
        </div>
        <div className="space-y-10">
            <div className="space-y-3">
                <span className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Exhibit A: Comparison</span>
                <img src="https://i.postimg.cc/L8hR4NFV/cost-of-no-sops-comparison.png" className="rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="text-[11px] text-zinc-500 italic">Visualizing the Inefficiency Tax across standard workflows.</p>
            </div>
            <div className="space-y-3">
                <span className="text-[10px] font-black uppercase text-primary/60 tracking-widest">Exhibit B: System Advantage</span>
                <img src="https://i.postimg.cc/dVXFhrJN/sop-benefits-illustrated.png" className="rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" />
                <p className="text-[11px] text-zinc-500 italic">Structural scaling vs. personality-driven expansion.</p>
            </div>
        </div>
    </div>
);

/* 3. Section Inset */
const LayoutOptionInset = () => (
    <div className="max-w-3xl mx-auto space-y-16">
        <section className="relative">
            <div className="flex gap-8 items-start">
                <div className="flex-1 space-y-4 text-zinc-300 leading-relaxed text-lg">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-primary" /> The Checklist Manifesto
                    </h2>
                    <p>{mockText}</p>
                </div>
                <img 
                    src="https://i.postimg.cc/HkKmrXTf/patient-safety1.jpg" 
                    className="w-48 aspect-square object-cover rounded-2xl border-4 border-black shadow-2xl shrink-0 -mt-2" 
                />
            </div>
        </section>

        <section className="space-y-4 text-zinc-300 leading-relaxed text-lg">
            <h2 className="text-2xl font-bold text-white">Standardizing Brilliance</h2>
            <p>Atul Gawande’s research demonstrated that surgical checklists reduced complications by over 30% in global trials. These were simple checklists, not complex AI systems. Why? Because even experts forget under pressure. Checklists reduce cognitive overload and convert individual brilliance into systemic reliability.</p>
            <RelatedPackSmall />
        </section>
    </div>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-20 bg-zinc-950">
            {/* INTRO */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <SectionHeadline>Investigative Blog Layouts</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4 text-zinc-400 font-medium">
                       Three strategies to integrate forensic imagery without breaking narrative tempo.
                    </p>
                </div>
            </Section>

            {/* PREVIEW TABS */}
            <Section className="bg-zinc-900/30 border-none pt-0">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="wrap" className="w-full">
                        <div className="flex justify-center mb-12">
                            <TabsList className="bg-white/5 border border-white/10 p-1 h-12 rounded-full">
                                <TabsTrigger value="wrap" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold">1. Journalistic Wrap</TabsTrigger>
                                <TabsTrigger value="sidebar" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold">2. Evidence Sidebar</TabsTrigger>
                                <TabsTrigger value="inset" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold">3. Section Inset</TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="bg-black/40 border border-white/5 rounded-[2rem] p-8 md:p-16 min-h-[600px] shadow-2xl">
                            <TabsContent value="wrap" className="mt-0 outline-none">
                                <div className="text-center mb-12">
                                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">OPTIMIZED FOR STORY TEMPO</Badge>
                                    <h3 className="text-2xl font-bold text-white">Classic Magazine Float</h3>
                                </div>
                                <LayoutOptionWrap />
                            </TabsContent>
                            
                            <TabsContent value="sidebar" className="mt-0 outline-none">
                                <div className="text-center mb-12">
                                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">OPTIMIZED FOR FORENSIC DATA</Badge>
                                    <h3 className="text-2xl font-bold text-white">Asymmetric Evidence View</h3>
                                </div>
                                <LayoutOptionSidebar />
                            </TabsContent>

                            <TabsContent value="inset" className="mt-0 outline-none">
                                <div className="text-center mb-12">
                                    <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">OPTIMIZED FOR MINIMALISM</Badge>
                                    <h3 className="text-2xl font-bold text-white">Header Anchored Insets</h3>
                                </div>
                                <LayoutOptionInset />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </Section>

            {/* DESIGN NOTES */}
            <Section className="border-none">
                <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg flex items-center gap-2">
                            <CheckCircle2 className="text-primary w-5 h-5" /> Narrative Flow
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            Images are sized to avoid creating "hard stops" in the reader's eye path. Floats and insets allow the text to guide the user naturally down the page.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-lg flex items-center gap-2">
                            <ShieldCheck className="text-primary w-5 h-5" /> Sharp Evidence
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            All layouts use crisp borders and standard HTML rendering to ensure your investigative assets look professional and load reliably across all devices.
                        </p>
                    </div>
                </div>
            </Section>
        </main>
    );
}

    