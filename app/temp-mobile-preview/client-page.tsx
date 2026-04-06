
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
    ArrowRight, 
    Check, 
    ShieldCheck, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    Lock
} from 'lucide-react';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_7 = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare", icon: Hospital },
    { name: "Schools", id: "school", icon: School },
    { name: "Franchise Networks", id: "franchise", icon: Store },
    { name: "Facilities", id: "facility", icon: Building2 },
    { name: "Cinemas", id: "cinema", icon: Popcorn }
];

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1">
                {/* PREVIEW CONTAINER (Simulated Mobile centered) */}
                <div className="flex justify-center py-8 md:py-12 bg-zinc-950 min-h-screen">
                    <div className="w-full max-w-[375px] min-h-[750px] border-[8px] border-black rounded-[3rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-4 ring-white/5">
                        
                        {/* 1. CINEMATIC VIDEO BACKGROUND (COLOR) */}
                        <div className="absolute inset-0 z-0">
                            <video 
                                src={VIDEO_URL} 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-full object-cover brightness-[0.3]" 
                            />
                            {/* Surgical Gradient Mask */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                        </div>

                        {/* 2. THE GLASS COMMAND INTERFACE */}
                        <div className="relative z-10 flex-1 flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar">
                            
                            {/* Hook Block */}
                            <div className="space-y-3 pt-4">
                                <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-[0.3em] uppercase rounded-none px-3 py-1 bg-primary/5">SOVEREIGN V11.9</Badge>
                                <h1 className="text-4xl font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <div className="space-y-2 border-l border-primary/30 pl-4">
                                    <p className="text-[11px] text-zinc-300 font-bold uppercase italic tracking-tight leading-tight">
                                        Operational Infrastructure for teams that can't afford failure.
                                    </p>
                                    <p className="text-[10px] text-white/40 italic font-medium leading-relaxed">
                                        We turn tribal knowledge into permanent systems. No Apps. No SaaS. Just professional SOPs running on tools your team already knows.
                                    </p>
                                </div>
                            </div>

                            {/* GLASS SECTOR SWITCHBOARD (ELITE 7) */}
                            <div className="space-y-3">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT DEPLOYMENT MODULE:</span>
                                <div className="grid grid-cols-2 gap-2">
                                    {ELITE_7.map((ind, i) => (
                                        <div 
                                            key={ind.id}
                                            className={`flex items-center gap-2.5 p-3 rounded-xl border backdrop-blur-md transition-all ${i === 0 ? 'bg-primary/10 border-primary/40' : 'bg-white/[0.02] border-white/10'}`}
                                        >
                                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${i === 0 ? 'bg-primary text-black' : 'bg-white/10 text-white/60'}`}>
                                                <ind.icon className="w-3.5 h-3.5" />
                                            </div>
                                            <span className={`text-[9px] font-black uppercase italic tracking-tighter leading-none ${i === 0 ? 'text-white' : 'text-white/30'}`}>{ind.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* COMPACT DECISION CARD */}
                            <Card className="mt-auto p-6 bg-white/[0.03] border-white/10 space-y-6 rounded-[2rem] shadow-2xl backdrop-blur-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <ShieldCheck className="w-16 h-16 text-primary" />
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <p className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none">ONE-TIME FEE</p>
                                        <p className="text-3xl font-black text-white italic tracking-tighter">₹999</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[8px] font-bold text-primary italic uppercase tracking-widest">Works for 1 unit</p>
                                        <p className="text-[8px] font-bold text-white/20 italic uppercase tracking-widest">Scales to 100</p>
                                    </div>
                                </div>

                                <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all">
                                    DEPLOY SYSTEM NOW <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                <div className="flex justify-between items-center px-2">
                                    {[
                                        { t: "NO SAAS", i: Lock },
                                        { t: "OWN FOREVER", i: Zap },
                                        { t: "AUDIT READY", i: ShieldCheck }
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-1">
                                            <point.i className="w-3 h-3 text-primary/60" />
                                            <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
