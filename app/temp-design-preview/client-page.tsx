
'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { 
    ArrowRight, 
    ShieldCheck, 
    TrendingUp,
    CheckCircle2,
    FileText,
    Download,
    Lock,
    Scale,
    FileSearch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

/* --- CTA VARIANT 1: THE STRUCTURAL REFERENCE (Minimalist) --- */
const CTA_Minimalist = () => (
    <div className="mt-16 p-6 rounded-lg border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-center gap-6 justify-between max-w-2xl mx-auto">
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <FileSearch className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-0.5">
                <h4 className="text-xs font-black text-white uppercase tracking-widest">Structural Reference</h4>
                <p className="text-[11px] text-zinc-500 font-medium">Restaurant Operations Toolkit • Excel Format</p>
            </div>
        </div>
        <Button size="sm" className="h-9 bg-primary text-black font-black uppercase text-[10px] px-6 rounded-sm hover:scale-105 transition-transform">
            Procure Asset <ArrowRight className="ml-2 w-3 h-3" />
        </Button>
    </div>
);

/* --- CTA VARIANT 2: THE STRATEGIC DEBRIEF (Glassmorphism) --- */
const CTA_Strategic = () => (
    <div className="mt-20 relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative p-8 rounded-2xl border border-white/10 bg-black flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="space-y-3">
                <Badge variant="outline" className="text-[9px] font-black tracking-[0.2em] uppercase border-primary/30 text-primary">Operational Fix</Badge>
                <h3 className="text-xl font-bold text-white font-headline">Preventing the "Drift" Pattern</h3>
                <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                    Deploy the verified, audit-ready framework designed to eliminate the exact failure points analyzed in this debrief.
                </p>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
                <Button className="h-12 bg-primary text-black font-black uppercase text-xs px-8 rounded-md shadow-xl hover:scale-105 transition-all">
                    Access Full Toolkit
                </Button>
                <p className="text-[9px] text-center text-zinc-600 uppercase font-black tracking-widest">Instant .XLSX Download</p>
            </div>
        </div>
    </div>
);

/* --- CTA VARIANT 3: THE INDUSTRIAL SPEC (Technical) --- */
const CTA_Industrial = () => (
    <div className="mt-16 border-t-2 border-primary pt-8 flex flex-col md:flex-row gap-12 items-start justify-between">
        <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest">System Specification: MMA-2025</span>
            </div>
            <h3 className="text-2xl font-black font-headline text-white tracking-tighter uppercase">Operations Control Pack</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {['120+ Verified Tasks', 'HACCP Aligned', 'FSSAI Compliant', 'Fully Editable'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-tight">
                        <div className="w-1 h-1 bg-primary rounded-full" /> {item}
                    </div>
                ))}
            </div>
        </div>
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 w-full md:w-64 space-y-4">
            <div className="text-center">
                <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-1">Standard Issue</p>
                <p className="text-3xl font-black text-white">₹5,999</p>
            </div>
            <Button className="w-full h-11 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-primary transition-colors">
                Procure Asset
            </Button>
        </div>
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
                <Badge variant="outline" className="text-primary border-primary/30 mb-4 px-4 py-1 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">Layout Lab V3</Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline text-white tracking-tighter uppercase mb-4 italic">Editorial Engine</h1>
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
                    Comparing high-tempo "Outset Evidence" vs. zero-distraction "Marginalia Gutter."
                </p>
            </Section>

            {/* PREVIEW CONTAINER */}
            <Section className="pt-0">
                <Tabs defaultValue="outset" className="w-full">
                    <div className="flex justify-center mb-12">
                        <TabsList className="bg-white/5 border border-white/10 p-1.5 h-14 rounded-full">
                            <TabsTrigger value="outset" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold">1. Outset Evidence</TabsTrigger>
                            <TabsTrigger value="gutter" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-primary font-bold">2. Marginalia Gutter</TabsTrigger>
                            <TabsTrigger value="ctas" className="rounded-full px-8 data-[state=active]:bg-white/10 data-[state=active]:text-accent font-bold">3. CTA Selection</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className="bg-black/40 border border-white/5 rounded-[3rem] p-8 md:p-20 shadow-2xl min-h-[800px]">
                        
                        {/* OPTION 1: OUTSET EVIDENCE */}
                        <TabsContent value="outset" className="mt-0 outline-none">
                            <div className="max-w-2xl mx-auto space-y-10">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black font-headline text-white tracking-tighter uppercase italic">The Inefficiency Tax</h3>
                                    <p className="text-lg text-zinc-300 leading-relaxed">{mockText}</p>
                                </div>

                                {/* OUTSET IMAGE: Bleeds into margins */}
                                <div className="-mx-4 md:-mx-32 my-12">
                                    <figure className="space-y-3">
                                        <img 
                                            src="https://i.postimg.cc/L8hR4NFV/cost-of-no-sops-comparison.png" 
                                            alt="Outset Data" 
                                            className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                                        />
                                        <figcaption className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-black">Exhibit A: Comparative Operational Performance (Color Master)</figcaption>
                                    </figure>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-lg text-zinc-300 leading-relaxed">Well-documented operations increase valuation multiples and improve investor confidence. Investors value predictable systems, not heroic individuals. When you sell a business, you aren't selling people—you are selling a recurring profit engine.</p>
                                </div>

                                <div className="-mx-4 md:-mx-32 my-12">
                                    <figure className="space-y-3">
                                        <img 
                                            src="https://i.postimg.cc/dVXFhrJN/sop-benefits-illustrated.png" 
                                            alt="Benefit Logic" 
                                            className="w-full h-auto rounded-sm border border-white/10 shadow-2xl"
                                        />
                                        <figcaption className="text-center text-[10px] text-zinc-500 uppercase tracking-widest font-black">Exhibit B: Structural Advantage Model</figcaption>
                                    </figure>
                                </div>
                                
                                <CTA_Minimalist />
                            </div>
                        </TabsContent>

                        {/* OPTION 2: MARGINALIA GUTTER (COLOR) */}
                        <TabsContent value="gutter" className="mt-0 outline-none">
                            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr,320px] gap-20">
                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-black font-headline text-white tracking-tighter uppercase italic">Forensic Analysis</h3>
                                        <p className="text-xl text-zinc-300 leading-relaxed font-medium">Healthcare doesn’t fail because doctors are careless. It fails because systems are inconsistent. The gap between policy and practice is where harm lives.</p>
                                        <p className="text-lg text-zinc-400 leading-relaxed">{mockText}</p>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-xl font-bold text-white uppercase tracking-tight border-l-2 border-primary pl-6">Standardizing Brilliance</h4>
                                        <p className="text-lg text-zinc-400 leading-relaxed">Atul Gawande’s research demonstrated that surgical checklists reduced complications by over 30% in global trials. These were simple checklists, not complex AI systems. Why? Because even experts forget under pressure.</p>
                                        <p className="text-lg text-zinc-400 leading-relaxed">In high-stakes environments—hospitals, pharmaceutical manufacturing, or critical infrastructure—this gap isn't just a financial nuisance. It is a safety catastrophe waiting for a trigger.</p>
                                    </div>

                                    <CTA_Strategic />
                                </div>

                                {/* THE GUTTER (Color Assets) */}
                                <div className="hidden lg:block space-y-12">
                                    <div className="sticky top-32 space-y-12">
                                        <div className="space-y-3">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Evidence Asset 01</span>
                                            <img 
                                                src="https://i.postimg.cc/HkKmrXTf/patient-safety1.jpg" 
                                                className="rounded border border-white/10 shadow-lg hover:scale-105 transition-transform duration-500" 
                                            />
                                            <p className="text-[11px] text-zinc-500 italic leading-snug">Visual: High-stakes clinical environment. (Full Color Fidelity)</p>
                                        </div>
                                        
                                        <div className="space-y-3 border-t border-white/5 pt-8">
                                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Evidence Asset 02</span>
                                            <img 
                                                src="https://i.postimg.cc/7Zc450qj/patient-safety-2.webp" 
                                                className="rounded border border-white/10 shadow-lg hover:scale-105 transition-transform duration-500" 
                                            />
                                            <p className="text-[11px] text-zinc-500 italic leading-snug">Data: Mapping the cognitive load reduction in standardized verification.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>

                        {/* OPTION 3: CTA SELECTION */}
                        <TabsContent value="ctas" className="mt-0 outline-none space-y-32 py-12">
                            <div className="max-w-3xl mx-auto space-y-24">
                                <div className="space-y-8">
                                    <div className="text-center">
                                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Option 1</span>
                                        <h4 className="text-white font-bold">The Structural Reference</h4>
                                        <p className="text-xs text-zinc-500 uppercase mt-1">Industrial • Minimalist • High-End Appendix style</p>
                                    </div>
                                    <CTA_Minimalist />
                                </div>

                                <div className="space-y-8">
                                    <div className="text-center">
                                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Option 2</span>
                                        <h4 className="text-white font-bold">The Strategic Debrief</h4>
                                        <p className="text-xs text-zinc-500 uppercase mt-1">Modern • Bold • Narrative Solution style</p>
                                    </div>
                                    <CTA_Strategic />
                                </div>

                                <div className="space-y-8">
                                    <div className="text-center">
                                        <span className="text-xs font-bold text-accent uppercase tracking-widest">Option 3</span>
                                        <h4 className="text-white font-bold">The Industrial Spec</h4>
                                        <p className="text-xs text-zinc-500 uppercase mt-1">Technical • Transparent • Fact-based style</p>
                                    </div>
                                    <CTA_Industrial />
                                </div>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </Section>
        </main>
    );
}
