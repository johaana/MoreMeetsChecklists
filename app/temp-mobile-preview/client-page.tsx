
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
    Layout,
    ChevronRight,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Settings2,
    Clock,
    Activity
} from 'lucide-react';
import type { PremiumPack } from "@/lib/premium-packs";

type PreviewOption = 'A' | 'B' | 'C';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare", icon: Hospital },
    { name: "Schools", id: "school", icon: School },
    { name: "Franchise", id: "franchise", icon: Store },
    { name: "Facilities", id: "facility", icon: Building2 },
    { name: "Cinemas", id: "cinema", icon: Popcorn }
];

export default function MobilePreviewClient({ pack }: { pack: PremiumPack }) {
    const [option, setOption] = useState<PreviewOption>('A');
    const [selectedModule, setSelectedModule] = useState('restaurants');

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1">
                {/* LAB CONTROL PANEL */}
                <div className="bg-primary/10 border-b border-primary/20 p-4 sticky top-16 z-50 backdrop-blur-md">
                    <div className="container flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-3 text-primary">
                            <Settings2 className="w-5 h-5" />
                            <h1 className="font-black uppercase italic tracking-tighter text-sm">Deployment Lab: Sovereign Mobile</h1>
                        </div>
                        <div className="flex gap-2 bg-black/20 p-1 rounded-full border border-white/5">
                            {(['A', 'B', 'C'] as PreviewOption[]).map((opt) => (
                                <button 
                                    key={opt}
                                    onClick={() => setOption(opt)}
                                    className={`h-9 px-6 rounded-full font-black text-[10px] tracking-widest uppercase transition-all ${option === opt ? 'bg-primary text-black' : 'text-white/40'}`}
                                >
                                    DESIGN {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PREVIEW CONTAINER (Force Mobile Width) */}
                <div className="flex justify-center py-12 bg-zinc-900/50 min-h-[1000px]">
                    <div className="w-[375px] h-[750px] border-[12px] border-black rounded-[3rem] bg-black overflow-y-auto overflow-x-hidden shadow-2xl relative scroll-smooth no-scrollbar ring-4 ring-white/5">
                        
                        {/* --- DESIGN A: THE SOVEREIGN STACK --- */}
                        {option === 'A' && (
                            <div className="bg-black min-h-full pb-24">
                                <div className="relative aspect-video overflow-hidden">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                                </div>
                                
                                <section className="px-6 space-y-8 pt-4">
                                    {/* Sector Selection (Chips) */}
                                    <div className="space-y-3">
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">SELECT MODULE:</p>
                                        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6">
                                            {ELITE_INDUSTRIES.map(ind => (
                                                <button 
                                                    key={ind.id}
                                                    onClick={() => setSelectedModule(ind.id)}
                                                    className={`whitespace-nowrap px-4 py-2 rounded-lg border text-[9px] font-black uppercase italic transition-all ${selectedModule === ind.id ? 'bg-primary border-primary text-black' : 'bg-white/5 border-white/10 text-white/40'}`}
                                                >
                                                    {ind.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Headline Block */}
                                    <div className="space-y-4">
                                        <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-widest uppercase rounded-none px-3 py-1 bg-primary/5">SOVEREIGN V11.9</Badge>
                                        <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.82] uppercase italic tracking-tighter">
                                            STOP CHASING STAFF.<br />
                                            <span className="text-primary">START SEEING.</span>
                                        </h1>
                                        <p className="text-[11px] text-secondary-text font-medium italic border-l-2 border-primary/20 pl-4 leading-relaxed">
                                            Know what’s done, missed, or at risk—across every shift, station, and location.
                                        </p>
                                    </div>
                                    
                                    {/* Decision Card */}
                                    <Card className="p-6 bg-white/[0.03] border-white/10 space-y-6 rounded-[2rem] shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            <ShieldCheck className="w-12 h-12 text-primary" />
                                        </div>
                                        <div className="space-y-1 text-center">
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">INSTITUTIONAL RATE</p>
                                            <p className="text-4xl font-black text-primary-text italic">₹999 <span className="text-[10px] not-italic text-white/20 font-bold tracking-widest">ONE-TIME</span></p>
                                        </div>
                                        <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all">
                                            DEPLOY SYSTEM <ArrowRight className="ml-2 w-5 h-5" />
                                        </Button>
                                        <div className="flex flex-col items-center gap-2">
                                            <div className="flex items-center gap-2 text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">
                                                <Check className="w-3 h-3 text-primary" /> NO SAAS
                                                <Check className="w-3 h-3 text-primary ml-2" /> OWN FOREVER
                                            </div>
                                            <p className="text-[9px] text-accent/60 font-black uppercase tracking-widest italic">Built for single & multi-unit groups</p>
                                        </div>
                                    </Card>

                                    {/* Proof Strip */}
                                    <div className="flex flex-col gap-3 py-4 border-t border-white/5">
                                        {[
                                            { t: "12 Operational Modules", i: Gem },
                                            { t: "120+ Control Points", i: Target },
                                            { t: "12 Defined Roles", i: Users2 }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <item.i className="w-4 h-4 text-primary" />
                                                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN B: IMMERSIVE COMMAND --- */}
                        {option === 'B' && (
                            <div className="relative min-h-full flex flex-col justify-end bg-black">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                
                                <section className="relative z-10 p-6 space-y-8 pb-12">
                                    <div className="space-y-4 text-center">
                                        <h1 className="text-5xl font-black font-headline text-primary-text leading-[0.82] uppercase italic tracking-tighter drop-shadow-2xl">
                                            COMMAND <br/> YOUR <br/> <span className="text-primary">FLOOR.</span>
                                        </h1>
                                        <p className="text-[11px] text-white/40 font-black uppercase tracking-[0.3em]">Institutional Infrastructure</p>
                                    </div>

                                    {/* Config Card with Integrated Switchboard */}
                                    <Card className="p-6 bg-black/60 backdrop-blur-2xl border-white/10 space-y-8 rounded-[2.5rem] shadow-2xl">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-center gap-2 border-b border-white/5 pb-3">
                                                <Settings2 className="w-3.5 h-3.5 text-primary" />
                                                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">DEPLOYMENT MODULE:</span>
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                {ELITE_INDUSTRIES.slice(0, 4).map(ind => (
                                                    <button 
                                                        key={ind.id}
                                                        onClick={() => setSelectedModule(ind.id)}
                                                        className={`flex flex-col items-center gap-2 p-2 rounded-xl border transition-all ${selectedModule === ind.id ? 'bg-primary border-primary text-black shadow-[0_0_15px_rgba(46,184,107,0.3)]' : 'bg-white/5 border-transparent text-white/20'}`}
                                                    >
                                                        <ind.icon className="w-4 h-4" />
                                                        <span className="text-[7px] font-black uppercase tracking-tighter truncate w-full text-center leading-none">{ind.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-2">
                                            <div className="flex flex-col items-center gap-1">
                                                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none">ONE-TIME DEPLOYMENT</p>
                                                <p className="text-4xl font-black text-primary-text italic">₹999</p>
                                            </div>
                                            <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-widest shadow-2xl border-none rounded-2xl active:scale-95 transition-all">
                                                START DEPLOYMENT <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                            <div className="text-center space-y-1">
                                                <p className="text-[8px] font-bold text-white/20 uppercase tracking-[0.2em]">WORKS FOR 1 LOCATION · SCALES TO 100</p>
                                                <p className="text-[8px] font-black text-accent/60 uppercase tracking-[0.2em] italic">ZERO LEARNING CURVE</p>
                                            </div>
                                        </div>
                                    </Card>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN C: THE UTILITY HUB + STICKY FOOTER --- */}
                        {option === 'C' && (
                            <div className="bg-black min-h-full relative pb-32">
                                <div className="relative w-full aspect-video">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale brightness-[0.3]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                </div>
                                
                                <section className="pt-6 px-6 space-y-8">
                                    <div className="space-y-2">
                                        <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-widest uppercase rounded-none px-3 py-1 bg-primary/5">V11.9 SYSTEM</Badge>
                                        <h1 className="text-[2.8rem] font-black font-headline text-primary-text leading-[0.8] uppercase italic tracking-tighter">
                                            SOVEREIGN <br/> DATA <br/> <span className="text-primary">ENGINE.</span>
                                        </h1>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">SELECT UNIT TYPE:</span>
                                            <span className="text-[8px] font-bold text-primary italic uppercase">SCALE READY</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {ELITE_INDUSTRIES.slice(0, 4).map(ind => (
                                                <button 
                                                    key={ind.id}
                                                    onClick={() => setSelectedModule(ind.id)}
                                                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left group ${selectedModule === ind.id ? 'bg-primary/5 border-primary shadow-[0_0_20px_rgba(46,184,107,0.1)]' : 'bg-white/[0.02] border-white/5 opacity-40'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${selectedModule === ind.id ? 'bg-primary text-black' : 'bg-white/10 text-white'}`}>
                                                        <ind.icon className="w-4 h-4" />
                                                    </div>
                                                    <span className={`text-[10px] font-black uppercase italic tracking-tighter leading-none ${selectedModule === ind.id ? 'text-white' : 'text-white/40'}`}>{ind.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Grid */}
                                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                                        {[
                                            { t: "SETUP", i: Settings2 },
                                            { t: "EXECUTE", i: Target },
                                            { t: "ANALYZE", i: Activity }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                                <item.i className="w-4 h-4 text-white/20" />
                                                <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* STICKY FOOTER ACTION */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-3xl border-t border-white/10 z-20">
                                    <div className="flex items-center justify-between mb-3 px-2">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest">ONE-TIME ACCESS</span>
                                            <span className="text-[10px] font-bold text-primary italic uppercase tracking-tight">DEPLOY {selectedModule.toUpperCase()}</span>
                                        </div>
                                        <span className="text-2xl font-black text-primary-text italic">₹999</span>
                                    </div>
                                    <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-[0_0_30px_rgba(46,184,107,0.4)] border-none active:scale-95 transition-all">
                                        SECURE SYSTEM NOW <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* MOCK CONTINUATION */}
                        <div className="px-6 py-12 space-y-10 border-t border-white/5 bg-zinc-950">
                            <div className="space-y-2">
                                <Badge variant="outline" className="text-red-500 border-red-500/20 text-[8px] uppercase tracking-widest">Forensic Logic</Badge>
                                <h2 className="text-3xl font-black uppercase italic font-headline text-primary-text leading-[0.85] tracking-tighter">Why <br/> Operations <br/> Break.</h2>
                            </div>
                            <div className="space-y-4 opacity-20">
                                <div className="h-4 w-3/4 bg-white/5 rounded" />
                                <div className="h-4 w-full bg-white/5 rounded" />
                                <div className="h-4 w-5/6 bg-white/5 rounded" />
                            </div>
                        </div>

                    </div>
                </div>

                {/* STRATEGIC ANALYSIS PANEL */}
                <div className="container py-12 px-4 md:px-6 border-t border-white/5 bg-alternate-background">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 p-8 rounded-[2rem] bg-black border border-white/5">
                            <h3 className="font-black text-primary uppercase text-xs tracking-widest">A: The Sovereign Stack</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">Direct vertical translation. Best for SEO and users who prefer a linear narrative flow. Keeps the industrial support line prominent.</p>
                        </div>
                        <div className="space-y-4 p-8 rounded-[2rem] bg-black border border-white/5">
                            <h3 className="font-black text-primary uppercase text-xs tracking-widest">B: Immersive Command</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">High perceived value. The switchboard integrated into the card makes the '₹999 one-time' feel like a bargain for a complex system.</p>
                        </div>
                        <div className="space-y-4 p-8 rounded-[2rem] bg-black border border-white/5">
                            <h3 className="font-black text-primary uppercase text-xs tracking-widest">C: Operational Hub</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">Conversion focused. The Sticky Footer removes all friction, while the Hub Grid explicitly showcases your technical breadth.</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
