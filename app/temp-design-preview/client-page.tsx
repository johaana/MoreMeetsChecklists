
'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Shield, 
    Lock, 
    FileSpreadsheet, 
    Infinity, 
    Zap, 
    ShieldCheck, 
    Wrench,
    CheckCircle2
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

export default function TempDesignClientPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 container px-4 py-20 space-y-32">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30">Layout Lab</Badge>
                    <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter uppercase italic">Resolution CTA Options</h1>
                    <p className="text-secondary-text text-lg">Comparing ways to reduce text-clutter around the primary conversion point.</p>
                </div>

                {/* OPTION 1: THE DELIVERABLE BAR */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-black font-black">1</span>
                        <h2 className="text-2xl font-bold font-headline uppercase italic">Option 1: The Deliverable Bar (Recommended)</h2>
                    </div>
                    <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] relative z-10 shadow-2xl">
                        <div className="p-6 md:p-12">
                            <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-between">
                                <div className="space-y-4 flex-1">
                                    <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none">Resolution Protocol</Badge>
                                    <h2 className="text-2xl md:text-4xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-tight">
                                        Build Systems That Protect Lives
                                    </h2>
                                    <p className="text-sm md:text-base text-secondary-text leading-relaxed max-w-lg">
                                        Deploy an institutional-grade JCI and NABH aligned control protocol designed for zero-ambiguity execution in high-risk environments.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4 shrink-0 w-full md:w-72">
                                    <Button size="lg" className="w-full h-16 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] shadow-2xl rounded-sm">
                                        Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                                    </Button>
                                    <div className="text-center space-y-1">
                                        <p className="text-[9px] font-black uppercase tracking-widest text-white/40">Built to prevent failures analyzed in this debrief.</p>
                                        <p className="text-[10px] font-black uppercase tracking-[0.1em] text-primary">1 Expert Customization Included</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* THE BAR */}
                        <div className="bg-white/[0.03] border-t border-white/5 py-4 px-6 md:px-12 flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2">
                            {PROOFS.map(item => (
                                <div key={item.label} className="flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em]">
                                    <item.icon className="w-3 h-3 text-primary/50" /> {item.label}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* OPTION 2: THE METADATA GRID */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-black font-black">2</span>
                        <h2 className="text-2xl font-bold font-headline uppercase italic">Option 2: The Metadata Grid</h2>
                    </div>
                    <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-12 relative z-10 shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-between">
                            <div className="space-y-6 flex-1">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none">Resolution Protocol</Badge>
                                    <h2 className="text-2xl md:text-4xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-tight">
                                        Secure Your Institutional Memory
                                    </h2>
                                    <p className="text-sm md:text-base text-secondary-text leading-relaxed max-w-lg">
                                        Convert individual brilliance into permanent infrastructure. Mapped to ISO 9001 and ISO 41001 standards.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-4 border-t border-white/5 w-fit">
                                    {PROOFS.map(item => (
                                        <div key={item.label} className="flex items-center gap-2 text-[9px] font-black uppercase text-white/40 tracking-[0.1em]">
                                            <item.icon className="w-3 h-3 text-primary" /> {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 shrink-0 w-full md:w-72">
                                <Button size="lg" className="w-full h-16 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] shadow-2xl rounded-sm">
                                    Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>
                                <div className="text-center">
                                    <p className="text-[10px] font-black uppercase tracking-[0.15em] text-primary leading-tight">1 Expert Customization Included</p>
                                    <p className="text-[8px] font-medium text-white/30 uppercase tracking-widest italic">Aligned to your brand and workflow</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* OPTION 3: THE SEAL / STICKER */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-black font-black">3</span>
                        <h2 className="text-2xl font-bold font-headline uppercase italic">Option 3: The High-Value Seal</h2>
                    </div>
                    <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] p-6 md:p-12 relative z-10 shadow-2xl">
                        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-center justify-between">
                            <div className="space-y-4 flex-1">
                                <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none">Resolution Protocol</Badge>
                                <h2 className="text-2xl md:text-4xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-tight">
                                    Eliminate Operational Drift
                                </h2>
                                <p className="text-sm md:text-base text-secondary-text leading-relaxed max-w-lg">
                                    Deploy the verified, HACCP and FSSAI-aligned institutional backbone designed to eliminate the exact failure points analyzed in this debrief.
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-4 shrink-0 w-full md:w-72">
                                <div className="bg-primary/10 border border-primary/20 p-3 rounded-xl flex items-center gap-3 w-full">
                                    <Wrench className="w-5 h-5 text-primary" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-primary uppercase leading-none">Included Benefit</span>
                                        <span className="text-[11px] font-bold text-white uppercase tracking-tight">1 Expert Customization</span>
                                    </div>
                                </div>
                                <Button size="lg" className="w-full h-16 bg-primary text-black font-black uppercase text-xs tracking-[0.2em] shadow-2xl rounded-sm">
                                    Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                                </Button>
                                <p className="text-[9px] font-black uppercase tracking-widest text-white/40">So nothing critical is missed.</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
