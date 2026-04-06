
'use client';

import React, { useState } from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
    ArrowRight, 
    Check, 
    Zap, 
    ShieldCheck, 
    Smartphone, 
    Target, 
    Gem, 
    Users2,
    Layout
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PremiumPack } from "@/lib/premium-packs";

type PreviewOption = 'A' | 'B' | 'C';

export default function MobilePreviewClient({ pack }: { pack: PremiumPack }) {
    const [option, setOption] = useState<PreviewOption>('A');

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1">
                {/* LAB CONTROL PANEL */}
                <div className="bg-primary/10 border-b border-primary/20 p-4 sticky top-16 z-50 backdrop-blur-md">
                    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <Layout className="w-5 h-5 text-primary" />
                            <h1 className="font-black uppercase italic tracking-tighter text-sm">Mobile Architecture Lab</h1>
                        </div>
                        <div className="flex gap-2">
                            {(['A', 'B', 'C'] as PreviewOption[]).map((opt) => (
                                <Button 
                                    key={opt}
                                    variant={option === opt ? 'default' : 'outline'}
                                    onClick={() => setOption(opt)}
                                    className="h-10 px-6 rounded-full font-black text-xs"
                                >
                                    DESIGN {opt}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PREVIEW CONTAINER (Force Mobile Width) */}
                <div className="flex justify-center py-12 bg-zinc-900/50 min-h-[800px]">
                    <div className="w-[375px] h-[700px] border-[8px] border-black rounded-[3rem] bg-background overflow-y-auto overflow-x-hidden shadow-2xl relative scroll-smooth no-scrollbar">
                        
                        {/* --- DESIGN A: ACTION-FIRST --- */}
                        {option === 'A' && (
                            <section className="pt-8 pb-12 px-6 space-y-6">
                                <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-widest uppercase">
                                    V11.9 SOVEREIGN
                                </Badge>
                                <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING STAFF.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-sm text-secondary-text font-medium italic border-l border-primary/30 pl-4">
                                    Know what’s done, missed, or at risk—across every shift, station, and location.
                                </p>
                                
                                <Card className="p-6 bg-white/[0.03] border-white/10 space-y-6 rounded-[1.5rem]">
                                    <div className="space-y-1 text-center">
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Deployment Price</p>
                                        <p className="text-3xl font-black text-primary-text italic">₹999 <span className="text-[10px] not-italic text-white/20 font-bold">ONE-TIME</span></p>
                                    </div>
                                    <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-lg border-none">
                                        DEPLOY SYSTEM <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                                        {["No SaaS", "Own Forever", "10-Min Setup"].map(t => (
                                            <div key={t} className="flex items-center gap-1 text-[8px] font-black text-white/30 uppercase tracking-widest">
                                                <Check className="w-2.5 h-2.5 text-primary" /> {t}
                                            </div>
                                        ))}
                                    </div>
                                </Card>

                                <div className="pt-4 flex flex-col gap-3">
                                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] text-center italic">12 MODULES · 120+ POINTS · 12 ROLES</p>
                                    <p className="text-[10px] text-secondary-text/60 italic text-center leading-relaxed">
                                        Pre-built SOPs. Fully editable. <br/> Runs on Excel & Google Sheets.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* --- DESIGN B: PROOF-HEAVY --- */}
                        {option === 'B' && (
                            <section className="pt-8 pb-12 px-6 space-y-8">
                                <div className="space-y-4">
                                    <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.85] uppercase italic tracking-tighter">
                                        STOP CHASING STAFF.<br />
                                        <span className="text-primary">START SEEING.</span>
                                    </h1>
                                    
                                    {/* VALUE STRIP PULLED UP */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 flex flex-col items-center text-center">
                                            <Gem className="w-4 h-4 text-primary mb-1" />
                                            <span className="text-[8px] font-black uppercase text-primary-text tracking-widest">12 MODULES</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 flex flex-col items-center text-center">
                                            <Target className="w-4 h-4 text-primary mb-1" />
                                            <span className="text-[8px] font-black uppercase text-primary-text tracking-widest">120+ POINTS</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-secondary-text font-medium italic">
                                    No follow-ups. No guesswork. No dependency. Run your unit perfectly.
                                </p>

                                <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-sm shadow-xl border-none rounded-2xl">
                                    DEPLOY NOW: ₹999 <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-3 text-white/40">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span className="text-[9px] font-black uppercase tracking-widest">AUDIT-READY SOP INFRASTRUCTURE</span>
                                    </div>
                                    <p className="text-[10px] text-secondary-text leading-relaxed italic border-l border-white/10 pl-4">
                                        Capture expert knowledge so your standards stay with the brand, not the person.
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* --- DESIGN C: UTILITY HERO --- */}
                        {option === 'C' && (
                            <div className="relative h-full">
                                <section className="pt-10 pb-32 px-6 space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Sovereign V11.9</span>
                                        <h1 className="text-[2.6rem] font-black font-headline text-primary-text leading-[0.8] uppercase italic tracking-tighter">
                                            COMMAND <br/> YOUR <br/> FLOOR.
                                        </h1>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check className="w-4 h-4" /></div>
                                            <p className="text-sm text-secondary-text italic font-medium">Full visibility into daily tasks across all shifts.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check className="w-4 h-4" /></div>
                                            <p className="text-sm text-secondary-text italic font-medium">Trainer notes for 100% of control points.</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check className="w-4 h-4" /></div>
                                            <p className="text-sm text-secondary-text italic font-medium">Automatic daily, weekly, monthly cycles.</p>
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5">
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-2">Payload Details:</p>
                                        <p className="text-xs text-secondary-text font-bold italic">12 Operational Modules • 120+ Daily Points • 12 Role-Based Matrix</p>
                                    </div>
                                </section>

                                {/* STICKY FOOTER CTA */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-xl border-t border-white/10 z-20">
                                    <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-[0_0_20px_rgba(46,184,107,0.3)] border-none">
                                        DEPLOY SYSTEM: ₹999 <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* MOCK PAGE CONTINUATION */}
                        <div className="px-6 py-12 space-y-8 border-t border-white/5 bg-zinc-950">
                            <h2 className="text-xl font-black uppercase italic text-primary-text">Why Operations Break</h2>
                            <div className="space-y-4">
                                <div className="h-4 w-3/4 bg-white/5 rounded" />
                                <div className="h-4 w-full bg-white/5 rounded" />
                                <div className="h-4 w-5/6 bg-white/5 rounded" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* STRATEGIC ANALYSIS PANEL */}
                <div className="container py-12 px-4">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">Design A: Action-First</h3>
                            <p className="text-sm text-secondary-text italic">Prioritizes the pricing decision. The "Runs on Excel" logic is used as a secondary reassurance below the button. Best for high-intent traffic.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">Design B: Proof-Heavy</h3>
                            <p className="text-sm text-secondary-text italic">Uses visual tiles to prove the "12 Modules" engineering immediately. Best for cold traffic that needs to see the complexity before the price.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">Design C: Utility Hero</h3>
                            <p className="text-sm text-secondary-text italic">Uses a sticky footer CTA. The headline is more abstract, and the value is explained via clear feature bullets. Very app-like experience.</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
