
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    ShieldCheck, 
    TrendingUp,
    CheckCircle2,
    Search,
    FileText,
    BarChart3
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
const mockTextLong = `Operational drift is the silent killer of enterprise value. It begins when a busy manager skips a single refrigeration log on a Friday night. It continues when a sick employee is pressured to "power through" a short shift. It normalizes when shortcuts become the standard. Individually, these lapses are minor. Collectively, they become a multi-million dollar exposure.

The CDC estimates that 48 million Americans suffer foodborne illness annually. For a multi-location chain, even a 2% compliance gap across 2,000 stores represents 40 potential failure points every single day. This is the math of risk at scale. When work depends on memory or judgment, execution changes with people. Audits, shift changes, growth, and emergencies expose the gaps. consistency can’t depend on memory. True leadership is building a machine that thrives even when the operators change.`;

const RelatedPackCompact = () => (
    <div className="mt-16 p-5 rounded-lg border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center gap-6 justify-between max-w-2xl mx-auto">
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-sm font-bold text-white uppercase tracking-tight">Restaurant Operations Pack</h4>
                <p className="text-[11px] text-zinc-500 font-medium">Full Audit-Ready Toolkit • Excel Format</p>
            </div>
        </div>
        <Button size="sm" className="h-9 bg-primary text-black font-black uppercase text-[10px] px-6 rounded-sm hover:scale-105 transition-transform">
            PROCURE ASSET <ArrowRight className="ml-2 w-3 h-3" />
        </Button>
    </div>
);

/* 1. Journalistic Wrap (Retained) */
const LayoutOptionWrap = () => (
    <div className="max-w-3xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-lg">
        <p className="text-xl font-medium text-white italic border-l-2 border-primary pl-6 py-1 mb-10">
            "If your standards drift the moment your best employee steps out of the room, you don't have a business—you have a group of people working hard to keep a house of cards from collapsing."
        </p>
        
        <div className="block">
            <img 
                src="https://i.postimg.cc/NjLYGpvy/chipotle1.jpg" 
                alt="Evidence 1" 
                className="float-left w-72 h-auto rounded border border-white/10 mr-8 mb-4 shadow-xl"
            />
            <p>{mockTextLong}</p>
        </div>

        <h3 className="text-2xl font-bold text-white pt-8">The Anatomy of Scale</h3>
        
        <div className="block">
            <img 
                src="https://i.postimg.cc/MpXxZdJf/chipotle2.png" 
                alt="Evidence 2" 
                className="float-right w-72 h-auto rounded border border-white/10 ml-8 mb-4 shadow-xl"
            />
            <p>Rapid expansion can strain oversight. When companies scale aggressively, training cycles compress, regional audits dilute, and middle management bandwidth stretches. Governance must scale with growth; otherwise, drift accelerates. 
            
            By 2020, the penalty for this acceleration was a $25 million federal fine—the largest in U.S. history for a food safety case. The real cost lived in billions of lost market capitalization and the erosion of customer trust.</p>
        </div>
        
        <RelatedPackCompact />
    </div>
);

/* 2. The "Outset Bleed" (Cinematic Narrative) */
const LayoutOptionOutset = () => (
    <div className="max-w-2xl mx-auto space-y-12 text-zinc-300 leading-relaxed text-lg">
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">The Inefficiency Tax</h3>
            <p>{mockTextLong}</p>
        </div>

        {/* Outset Image: Breaks the column width slightly for visual interest */}
        <div className="-mx-4 md:-mx-24 my-12">
            <figure className="space-y-3">
                <img 
                    src="https://i.postimg.cc/L8hR4NFV/cost-of-no-sops-comparison.png" 
                    alt="Outset Evidence" 
                    className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                />
                <figcaption className="text-center text-[11px] text-zinc-500 uppercase tracking-widest font-bold">Exhibit A: Comparative Operational Performance</figcaption>
            </figure>
        </div>

        <div className="space-y-6">
            <p>Well-documented operations increase valuation multiples and improve investor confidence. They shorten acquisition due diligence and reduce founder dependency. Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine.</p>
            <p>Stop paying the Memory Tax and start building a legacy. By systemizing your operations, you're not just achieving compliance; you're building a fortress around your profitability.</p>
        </div>

        <div className="-mx-4 md:-mx-24 my-12">
            <figure className="space-y-3">
                <img 
                    src="https://i.postimg.cc/dVXFhrJN/sop-benefits-illustrated.png" 
                    alt="Outset Evidence 2" 
                    className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                />
                <figcaption className="text-center text-[11px] text-zinc-500 uppercase tracking-widest font-bold">Exhibit B: Structural Advantage vs Personality Drift</figcaption>
            </figure>
        </div>

        <RelatedPackCompact />
    </div>
);

/* 3. The "Marginalia Gutter" (Pure Narrative Focus) */
const LayoutOptionGutter = () => (
    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,300px] gap-16 relative">
        <div className="space-y-10 text-zinc-300 leading-relaxed text-lg">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-primary" /> The Checklist Manifesto
            </h3>
            
            <section className="space-y-6">
                <p>Healthcare doesn’t fail because doctors are careless. It fails because systems are inconsistent. The gap between policy and practice is where harm lives. Medical error has been cited in research as potentially the third leading cause of death in the United States. Not lack of intelligence. Process variability.</p>
                
                <p>Atul Gawande’s research demonstrated that surgical checklists reduced complications by over 30% in global trials. These were simple checklists, not complex AI systems. Why? Because even experts forget under pressure. Checklists reduce cognitive overload and convert individual brilliance into systemic reliability.</p>
            </section>

            <section className="space-y-6">
                <h4 className="text-xl font-bold text-white uppercase tracking-tight">Standardizing Brilliance</h4>
                <p>When you transition from a 'Hero Model'—where safety depends on one brilliant person's memory—to a 'System Model', the results are immediate. A 2016 study found that structured patient identification protocols reduced mislabeling errors by 40%. Safety systems are not cost centers; they are risk reducers.</p>
                <p>In high-stakes environments—hospitals, pharmaceutical manufacturing, or critical infrastructure—this gap isn't just a financial nuisance. It is a safety catastrophe waiting for a trigger. When the "know-how" is tethered to a badge rather than a blueprint, the organization is effectively operating without a safety net.</p>
            </section>

            <RelatedPackCompact />
        </div>

        {/* Gutter / Sidebar for Evidence */}
        <div className="hidden lg:block space-y-12">
            <div className="sticky top-24 space-y-12">
                <div className="space-y-3">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Evidence Log 01</span>
                    <img 
                        src="https://i.postimg.cc/HkKmrXTf/patient-safety1.jpg" 
                        className="rounded-lg border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <p className="text-[11px] text-zinc-500 italic leading-snug">Visual anchor: High-stakes clinical environment where memory is the primary liability.</p>
                </div>
                
                <div className="space-y-3 border-t border-white/5 pt-8">
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Forensic Data 02</span>
                    <img 
                        src="https://i.postimg.cc/7Zc450qj/patient-safety-2.webp" 
                        className="rounded-lg border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500" 
                    />
                    <p className="text-[11px] text-zinc-500 italic leading-snug">System mapping: Reducing cognitive load through structured verification steps.</p>
                </div>
            </div>
        </div>
    </div>
);

export default function TempDesignClientPage() {
    return (
        <main className="flex-1 pb-32 bg-zinc-950">
            {/* HEADER */}
            <Section id="intro" className="relative overflow-hidden border-none pt-24 pb-12 text-center">
                <div className="container px-4 md:px-6 relative z-10">
                    <Badge variant="outline" className="text-primary border-primary/30 mb-4 px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">Layout Lab V2</Badge>
                    <SectionHeadline>Editorial Architecture</SectionHeadline>
                    <p className="text-xl max-w-2xl mx-auto mt-4 text-zinc-400 font-medium">
                       Redefining narrative tempo. Ensuring images support the story without halting the reader.
                    </p>
                </div>
            </Section>

            {/* PREVIEW TABS */}
            <Section className="bg-zinc-900/20 border-none pt-0">
                <div className="container px-4 md:px-6">
                    <Tabs defaultValue="wrap" className="w-full">
                        <div className="flex justify-center mb-16">
                            <TabsList className="bg-white/5 border border-white/10 p-1.5 h-14 rounded-full">
                                <TabsTrigger value="wrap" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold transition-all">1. Journalistic Wrap</TabsTrigger>
                                <TabsTrigger value="outset" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold transition-all">2. Outset Bleed</TabsTrigger>
                                <TabsTrigger value="gutter" className="rounded-full px-10 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold transition-all">3. Marginalia Gutter</TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="bg-black/40 border border-white/5 rounded-[2.5rem] p-8 md:p-20 min-h-[800px] shadow-2xl">
                            <TabsContent value="wrap" className="mt-0 outline-none">
                                <div className="text-center mb-16 space-y-2">
                                    <h3 className="text-2xl font-bold text-white">The "Tempo" Layout</h3>
                                    <p className="text-zinc-500 text-sm">Alternating floats for high-speed reading.</p>
                                </div>
                                <LayoutOptionWrap />
                            </TabsContent>
                            
                            <TabsContent value="outset" className="mt-0 outline-none">
                                <div className="text-center mb-16 space-y-2">
                                    <h3 className="text-2xl font-bold text-white">The "Cinematic" Layout</h3>
                                    <p className="text-zinc-500 text-sm">Wider visual breaks that guide focus downward.</p>
                                </div>
                                <LayoutOptionOutset />
                            </TabsContent>

                            <TabsContent value="gutter" className="mt-0 outline-none">
                                <div className="text-center mb-16 space-y-2">
                                    <h3 className="text-2xl font-bold text-white">The "Strategic" Layout</h3>
                                    <p className="text-zinc-500 text-sm">Visuals removed from the text path for pure narrative focus.</p>
                                </div>
                                <LayoutOptionGutter />
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </Section>

            {/* DESIGN NOTES */}
            <Section className="border-none">
                <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-12 text-center">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                            <Search className="text-primary w-6 h-6" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Forensic Focus</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">Images framed as evidence assets, not ads.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="text-primary w-6 h-6" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Zero Blur</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">Crisp 1px borders replace heavy glow effects.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                            <BarChart3 className="text-primary w-6 h-6" />
                        </div>
                        <h4 className="text-white font-bold text-lg">Compact Conversion</h4>
                        <p className="text-xs text-zinc-500 leading-relaxed uppercase tracking-wider">Asset procurement reduced to professional appendix scale.</p>
                    </div>
                </div>
            </Section>
        </main>
    );
}
