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
    Settings2
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
                            <h1 className="font-black uppercase italic tracking-tighter text-sm">Deployment Lab: Mobile</h1>
                        </div>
                        <div className="flex gap-2 bg-black/20 p-1 rounded-full border border-white/5">
                            {(['A', 'B', 'C'] as PreviewOption[]).map((opt) => (
                                <Button 
                                    key={opt}
                                    variant={option === opt ? 'default' : 'ghost'}
                                    onClick={() => setOption(opt)}
                                    className={`h-9 px-6 rounded-full font-black text-[10px] tracking-widest ${option === opt ? 'bg-primary text-black' : 'text-white/40'}`}
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
                        
                        {/* --- DESIGN A: CINEMATIC + CHIP SLIDER --- */}
                        {option === 'A' && (
                            <div className="bg-background min-h-full pb-20">
                                <div className="relative aspect-video overflow-hidden">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                                </div>
                                
                                <section className="pt-2 px-6 space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[8px] font-black text-primary tracking-[0.3em] uppercase">Select Sector:</span>
                                            <span className="text-[8px] font-bold text-white/20 uppercase italic">Swipe &rarr;</span>
                                        </div>
                                        <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6">
                                            {ELITE_INDUSTRIES.map(ind => (
                                                <button 
                                                    key={ind.id}
                                                    onClick={() => setSelectedModule(ind.id)}
                                                    className={`whitespace-nowrap px-4 py-2 rounded-full border text-[10px] font-black uppercase italic transition-all ${selectedModule === ind.id ? 'bg-primary border-primary text-black' : 'border-white/10 text-white/40'}`}
                                                >
                                                    {ind.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black tracking-widest uppercase">V11.9 SOVEREIGN</Badge>
                                        <h1 className="text-4xl font-black font-headline text-primary-text leading-[0.85] uppercase italic tracking-tighter">
                                            STOP CHASING STAFF.<br />
                                            <span className="text-primary">START SEEING.</span>
                                        </h1>
                                    </div>
                                    
                                    <Card className="p-6 bg-white/[0.03] border-white/10 space-y-6 rounded-[1.5rem] shadow-2xl">
                                        <div className="space-y-1 text-center">
                                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Deployment Price</p>
                                            <p className="text-3xl font-black text-primary-text italic">₹999 <span className="text-[10px] not-italic text-white/20 font-bold">ONE-TIME</span></p>
                                        </div>
                                        <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-lg border-none">
                                            DEPLOY SYSTEM <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                        <p className="text-[10px] text-white/40 italic font-bold text-center">Scalable from 1 to 100 locations.</p>
                                    </Card>

                                    <div className="space-y-4 pt-4">
                                        <p className="text-[9px] font-black text-primary uppercase tracking-[0.2em] text-center italic">12 MODULES · 120+ POINTS · 12 ROLES</p>
                                        <p className="text-[10px] text-secondary-text/60 italic border-l-2 border-primary/20 pl-4 leading-relaxed">
                                            Pre-built SOPs. Fully editable. One-time deploy. <br/> Runs on Excel & Google Sheets.
                                        </p>
                                    </div>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN B: THE SYSTEM SWITCHBOARD --- */}
                        {option === 'B' && (
                            <div className="relative min-h-full flex flex-col justify-end bg-black">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                                
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

                                    <Card className="p-6 bg-black/60 backdrop-blur-xl border-white/10 space-y-6 rounded-[2rem] shadow-2xl">
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                                                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Select Deployment:</span>
                                                <Settings2 className="w-3 h-3 text-primary" />
                                            </div>
                                            <div className="grid grid-cols-4 gap-2">
                                                {ELITE_INDUSTRIES.slice(0, 4).map(ind => (
                                                    <button 
                                                        key={ind.id}
                                                        onClick={() => setSelectedModule(ind.id)}
                                                        className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${selectedModule === ind.id ? 'bg-primary/10 border-primary text-primary' : 'bg-white/5 border-transparent text-white/20'}`}
                                                    >
                                                        <ind.icon className="w-4 h-4" />
                                                        <span className="text-[7px] font-black uppercase tracking-tighter truncate w-full text-center">{ind.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4 border-t border-white/5">
                                            <div className="flex justify-between items-end">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-white/40 uppercase">Total Access</p>
                                                    <p className="text-2xl font-black text-primary italic">₹999</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">OWN FOREVER</p>
                                                    <p className="text-[8px] font-black text-white/20 uppercase tracking-widest">NO SAAS</p>
                                                </div>
                                            </div>
                                            <Button className="w-full h-16 bg-primary text-black font-black uppercase italic text-sm shadow-xl border-none rounded-2xl">
                                                DEPLOY NOW <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </div>
                                    </Card>
                                </section>
                            </div>
                        )}

                        {/* --- DESIGN C: COMMAND GRID + STICKY FOOTER --- */}
                        {option === 'C' && (
                            <div className="bg-background min-h-full relative pb-32">
                                <div className="relative w-full aspect-video">
                                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                </div>
                                
                                <section className="pt-6 px-6 space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black text-primary tracking-[0.3em] uppercase">Sovereign V11.9</span>
                                        <h1 className="text-[2.6rem] font-black font-headline text-primary-text leading-[0.8] uppercase italic tracking-tighter">
                                            COMMAND <br/> YOUR <br/> FLOOR.
                                        </h1>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">CHOOSE MODULE:</span>
                                            <Badge variant="outline" className="text-[8px] border-primary/20 text-primary">SCALE READY</Badge>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {ELITE_INDUSTRIES.slice(0, 4).map(ind => (
                                                <button 
                                                    key={ind.id}
                                                    onClick={() => setSelectedModule(ind.id)}
                                                    className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left group ${selectedModule === ind.id ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(46,184,107,0.1)]' : 'bg-white/[0.02] border-white/5 opacity-40'}`}
                                                >
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${selectedModule === ind.id ? 'bg-primary text-black' : 'bg-white/5 text-white'}`}>
                                                        <ind.icon className="w-4 h-4" />
                                                    </div>
                                                    <span className={`text-[10px] font-black uppercase italic tracking-tighter leading-none ${selectedModule === ind.id ? 'text-white' : 'text-white/40'}`}>{ind.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-4 pt-4">
                                        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 backdrop-blur-sm space-y-4">
                                            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">TECHNICAL PAYLOAD:</p>
                                            <div className="space-y-3">
                                                {[
                                                    "12 Modules · 120+ Control Points",
                                                    "100% Editable .XLSX System",
                                                    "Zero Training Curve for Staff"
                                                ].map(text => (
                                                    <div key={text} className="flex items-center gap-3">
                                                        <Check className="w-3 h-3 text-primary" />
                                                        <p className="text-[10px] text-secondary-text italic font-bold leading-none">{text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* STICKY FOOTER CTA */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background/90 backdrop-blur-2xl border-t border-white/10 z-20">
                                    <div className="flex items-center justify-between mb-3 px-2">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-black text-white/40 uppercase">ONE-TIME DEPLOY</span>
                                            <span className="text-[10px] font-bold text-accent italic uppercase">INSTANT ACCESS</span>
                                        </div>
                                        <span className="text-xl font-black text-primary italic">₹999</span>
                                    </div>
                                    <Button className="w-full h-14 bg-primary text-black font-black uppercase italic text-xs tracking-widest rounded-xl shadow-[0_0_20px_rgba(46,184,107,0.3)] border-none">
                                        DEPLOY {selectedModule.toUpperCase()} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* MOCK PAGE CONTINUATION FOR SCROLL FEEL */}
                        <div className="px-6 py-12 space-y-8 border-t border-white/5 bg-zinc-950">
                            <h2 className="text-xl font-black uppercase italic text-primary-text">Operational Logic</h2>
                            <div className="space-y-4 opacity-20">
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
                        <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h3 className="font-black text-primary uppercase text-sm">A: Sector Slider</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">Uses horizontal scrolling "Chips" to keep the UI clean. This is best for a wide library where you want to emphasize the specific sector without pushing the price card down.</p>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h3 className="font-black text-primary uppercase text-sm">B: System Grid</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">Puts the selection icons directly inside the Decision Card. It makes the act of buying feel like "Building your OS." Very high perceived value for technical users.</p>
                        </div>
                        <div className="space-y-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h3 className="font-black text-primary uppercase text-sm">C: The Hub Choice</h3>
                            <p className="text-xs text-secondary-text italic leading-relaxed">Uses a high-density 2-column grid. This is the most explicit choice. It forces the user to choose their "Command Center" before committing via the sticky footer.</p>
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
}
