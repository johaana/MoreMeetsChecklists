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
    Layout
} from 'lucide-react';
import type { PremiumPack } from "@/lib/premium-packs";

type PreviewOption = 'A' | 'B' | 'C';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

export default function MobilePreviewClient({ pack }: { pack: PremiumPack }) {
    const [option, setOption] = useState<PreviewOption>('A');

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1">
                {/* LAB CONTROL PANEL */}
                <div className="bg-primary/10 border-b border-primary/20 p-4 sticky top-16 z-50 backdrop-blur-md">
                    <div className="container flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-3">
                            <Layout className="w-5 h-5 text-primary" />
                            <h1 className="font-black uppercase italic tracking-tighter text-sm">Mobile Video Lab</h1>
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
                    <div className="w-[375px] h-[700px] border-[12px] border-black rounded-[3rem] bg-black overflow-y-auto overflow-x-hidden shadow-2xl relative scroll-smooth no-scrollbar">
                        
                        {/* --- DESIGN A: CINEMATIC HEADER --- */}
                        {option === 'A' && (
                            <div className="bg-background min-h-full pb-20">
                                <div className="relative aspect-video overflow-hidden">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                </div>
                                
                                <section className="pt-4 pb-12 px-6 space-y-6">
                                    <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-widest uppercase">V11.9 SOVEREIGN</Badge>
                                    <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.85] uppercase italic tracking-tighter">
                                        STOP CHASING STAFF.<br />
                                        <span className="text-primary">START SEEING.</span>
                                    </h1>
                                    
                                    <Card className="p-6 bg-white/[0.03] border-white/10 space-y-6 rounded-[1.5rem] shadow-2xl">
                                        <div className="space-y-1 text-center">
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Deployment Price</p>
                                            <p className="text-3xl font-black text-primary-text italic">₹999 <span className="text-[10px] not-italic text-white/20 font-bold">ONE-TIME</span></p>
                                        </div>
                                        <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-lg border-none">
                                            DEPLOY SYSTEM <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                        <p className="text-[10px] text-white/40 italic font-bold text-center">Works for 1 location. Scales to 100.</p>
                                    </Card>

                                    <div className="space-y-4">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] text-center italic">12 MODULES · 120+ POINTS · 12 ROLES</p>
                                        <p className="text-[10px] text-secondary-text/60 italic border-l-2 border-primary/20 pl-4 leading-relaxed">
                                            Pre-built SOPs. Fully editable. One-time deploy. <br/> Runs on Excel & Google Sheets.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN B: FULL SOVEREIGN UNDERLAY --- */}
                        {option === 'B' && (
                            <div className="relative min-h-full flex flex-col justify-end bg-black">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                                
                                <section className="relative z-10 p-6 space-y-8 pb-12">
                                    <div className="space-y-4">
                                        <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.85] uppercase italic tracking-tighter">
                                            STOP CHASING STAFF.<br />
                                            <span className="text-primary">START SEEING.</span>
                                        </h1>
                                        <p className="text-sm text-secondary-text font-medium italic border-l border-primary/30 pl-4">
                                            Know what’s done, missed, or at risk—across every shift, station, and location.
                                        </p>
                                    </div>

                                    <Card className="p-6 bg-black/40 backdrop-blur-xl border-white/10 space-y-6 rounded-[2rem]">
                                        <div className="grid grid-cols-2 gap-2 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Gem className="w-3 h-3 text-primary" />
                                                <span className="text-[8px] font-black text-white/60 uppercase">12 MODULES</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Target className="w-3 h-3 text-primary" />
                                                <span className="text-[8px] font-black text-white/60 uppercase">120+ POINTS</span>
                                            </div>
                                        </div>
                                        <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-sm shadow-xl border-none rounded-2xl">
                                            DEPLOY NOW: ₹999 <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                        <div className="flex justify-center gap-4 text-[8px] font-black text-white/20 uppercase tracking-widest">
                                            <span>NO SAAS</span>
                                            <span>•</span>
                                            <span>OWN FOREVER</span>
                                        </div>
                                    </Card>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN C: FLOATING COMMAND --- */}
                        {option === 'C' && (
                            <div className="bg-background min-h-full relative">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
                                <div className="absolute top-[180px] left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent" />
                                
                                <section className="pt-10 pb-32 px-6 space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Sovereign V11.9</span>
                                        <h1 className="text-[2.6rem] font-black font-headline text-primary-text leading-[0.8] uppercase italic tracking-tighter">
                                            COMMAND <br/> YOUR <br/> FLOOR.
                                        </h1>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            "Full visibility into daily tasks",
                                            "Trainer notes for 100% of tasks",
                                            "Auto-scheduled daily cycles"
                                        ].map(text => (
                                            <div key={text} className="flex items-center gap-4">
                                                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0"><Check className="w-3 h-3" /></div>
                                                <p className="text-xs text-secondary-text italic font-bold">{text}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm">
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">TECHNICAL PAYLOAD:</p>
                                        <p className="text-[10px] text-primary font-black italic">12 MODULES · 120+ POINTS · 12 ROLES</p>
                                    </div>
                                </section>

                                {/* STICKY FOOTER CTA */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-2xl border-t border-white/10 z-20">
                                    <div className="flex items-center justify-between mb-2 px-2">
                                        <span className="text-[10px] font-black text-white/40">ONE-TIME DEPLOY</span>
                                        <span className="text-sm font-black text-primary italic">₹999</span>
                                    </div>
                                    <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-[0_0_20px_rgba(46,184,107,0.3)] border-none">
                                        DEPLOY SYSTEM <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* MOCK PAGE CONTINUATION FOR SCROLL FEEL */}
                        <div className="px-6 py-12 space-y-8 border-t border-white/5 bg-zinc-950">
                            <h2 className="text-xl font-black uppercase italic text-primary-text">Operational Logic</h2>
                            <div className="space-y-4">
                                <div className="h-4 w-3/4 bg-white/5 rounded" />
                                <div className="h-4 w-full bg-white/5 rounded" />
                                <div className="h-4 w-5/6 bg-white/5 rounded" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* STRATEGIC ANALYSIS PANEL */}
                <div className="container py-12 px-4 md:px-6">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">A: Cinematic Header</h3>
                            <p className="text-sm text-secondary-text italic leading-relaxed">Uses video as an "Attraction Layer." It separates the brand vibe from the technical conversion card. Safest choice for general traffic.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">B: Sovereign Underlay</h3>
                            <p className="text-sm text-secondary-text italic leading-relaxed">Most premium look. Implies that the software/system is "In Motion" behind the interface. Harder to read if masking isn't perfect.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-black text-primary uppercase text-sm">C: Floating Command</h3>
                            <p className="text-sm text-secondary-text italic leading-relaxed">Highly functional. The Sticky Footer ensures the price and button are ALWAYS 1cm away from the user's thumb. Very high conversion.</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
