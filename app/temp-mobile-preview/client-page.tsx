
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { 
    ArrowRight, 
    ShieldCheck, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    Lock,
    CheckCircle2
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

const Explainer = () => (
    <div className="space-y-2 border-l-2 border-primary/30 pl-4 py-1">
        <p className="text-[11px] text-white/90 font-bold uppercase italic tracking-tight leading-tight">
            Institutional Infrastructure for teams that can't afford failure.
        </p>
        <p className="text-[10px] text-white/50 italic font-medium leading-relaxed">
            We turn tribal knowledge into permanent systems. No Apps. No SaaS. Just professional SOPs running on tools your team already knows.
        </p>
    </div>
);

const ModuleGrid = () => (
    <div className="grid grid-cols-2 gap-2">
        {ELITE_7.map((ind, i) => (
            <div 
                key={ind.id}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
            >
                <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                    <ind.icon className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-[9px] font-black uppercase italic tracking-tighter leading-none text-white/60">{ind.name}</span>
            </div>
        ))}
    </div>
);

const PricingBlock = () => (
    <div className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest leading-none">ONE-TIME FEE</p>
                <p className="text-3xl font-black text-white italic tracking-tighter">₹999</p>
            </div>
            <div className="text-right">
                <Badge variant="outline" className="text-primary border-primary/30 text-[8px] font-black uppercase">Institutional Rate</Badge>
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
    </div>
);

const PreviewFrame = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="flex flex-col items-center space-y-4">
        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest text-white/40">{title}</Badge>
        <div className="w-[375px] h-[750px] border-[8px] border-zinc-900 rounded-[3rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-12 px-4 space-y-24">
                
                {/* OPTION 1: THE COMMAND DECK (Clean Split) */}
                <PreviewFrame title="Architecture A: The Command Deck">
                    {/* NORTH (1/4): Fixed Video */}
                    <div className="h-[25%] w-full relative overflow-hidden bg-zinc-900">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                    {/* SOUTH (3/4): Content */}
                    <div className="flex-1 bg-black p-6 space-y-6 overflow-y-auto no-scrollbar">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                            <Explainer />
                        </div>
                        <div className="space-y-3">
                            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT DEPLOYMENT MODULE:</span>
                            <ModuleGrid />
                        </div>
                        <PricingBlock />
                    </div>
                </PreviewFrame>

                {/* OPTION 2: THE SOVEREIGN OVERLAP (Glass Pull-up) */}
                <PreviewFrame title="Architecture B: The Sovereign Overlap">
                    {/* NORTH (Integrated Header) */}
                    <div className="absolute top-0 left-0 right-0 h-[40%] z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
                    </div>
                    {/* CONTENT LAYER */}
                    <div className="relative z-10 h-full flex flex-col pt-12">
                        <div className="px-6 mb-6">
                            <h1 className="text-4xl font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                        {/* SOUTH (3/4): The Glass Card */}
                        <div className="flex-1 bg-white/[0.03] backdrop-blur-2xl border-t border-white/10 rounded-t-[2.5rem] p-6 flex flex-col space-y-6 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.5)]">
                            <Explainer />
                            <div className="space-y-3">
                                <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT DEPLOYMENT MODULE:</span>
                                <ModuleGrid />
                            </div>
                            <div className="mt-auto">
                                <PricingBlock />
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
