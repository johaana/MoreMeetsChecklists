
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
    Users2,
    ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_7 = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const Explainer = ({ className }: { className?: string }) => (
    <div className={cn("space-y-1 border-l-2 border-primary/30 pl-4 py-0.5", className)}>
        <p className="text-[10px] text-white/90 font-bold uppercase italic tracking-tight leading-tight">
            Institutional Infrastructure for teams that can't afford failure.
        </p>
        <p className="text-[9px] text-white/40 italic font-medium leading-relaxed">
            No Apps. No SaaS. Professional SOPs running on Excel/Sheets.
        </p>
    </div>
);

const PricingBlock = ({ layout = 'default' }: { layout?: 'default' | 'compact' }) => (
    <div className={cn("space-y-3 pt-3 border-t border-white/5", layout === 'compact' ? 'pt-2' : 'pt-3')}>
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <p className="text-[8px] font-black text-white/20 uppercase tracking-widest leading-none">ONE-TIME FEE</p>
                <p className="text-2xl font-black text-white italic tracking-tighter">₹999</p>
            </div>
            <Badge variant="outline" className="text-primary border-primary/30 text-[7px] font-black uppercase h-5 px-2">Institutional Rate</Badge>
        </div>
        <Button asChild className="w-full h-12 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all">
            <Link href="/library">DEPLOY SYSTEM NOW <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
        </Button>
        <div className="flex justify-between items-center px-1">
            {[
                { t: "NO SAAS", i: Lock },
                { t: "OWN FOREVER", i: Zap },
                { t: "AUDIT READY", i: ShieldCheck }
            ].map((point, i) => (
                <div key={i} className="flex items-center gap-1">
                    <point.i className="w-2.5 h-2.5 text-primary/60" />
                    <span className="text-[6px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
                </div>
            ))}
        </div>
    </div>
);

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-widest text-white/40">{title}</Badge>
            {subtitle && <p className="text-[10px] text-zinc-500 italic font-medium">{subtitle}</p>}
        </div>
        <div className="w-[375px] h-[750px] border-[8px] border-zinc-900 rounded-[3rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-12 px-4 space-y-32">
                
                {/* ARCHITECTURE A: THE COMMAND DECK (20% VIDEO) */}
                <PreviewFrame title="Option 1: The Command Deck" subtitle="Focus: Content density and speed.">
                    <div className="h-[20%] w-full relative overflow-hidden bg-zinc-900">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>
                    <div className="flex-1 bg-black p-5 space-y-5 overflow-y-auto no-scrollbar">
                        <div className="space-y-3">
                            <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                            <Explainer />
                        </div>
                        <div className="space-y-2.5">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT DEPLOYMENT MODULE:</span>
                            <div className="grid grid-cols-2 gap-2">
                                {ELITE_7.map((ind, i) => (
                                    <Link 
                                        key={ind.id}
                                        href={`/packs/${ind.id}`}
                                        className={cn(
                                            "flex items-center gap-2.5 p-2.5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md active:scale-95 transition-all",
                                            i === 6 ? "col-span-2 justify-center" : ""
                                        )}
                                    >
                                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                            <ind.icon className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-[9px] font-black uppercase italic tracking-tighter leading-none text-white/70">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <PricingBlock />
                    </div>
                </PreviewFrame>

                {/* ARCHITECTURE C: THE GLASS COMMAND (FLOAT OVERLAY - 45% VIDEO) */}
                <PreviewFrame title="Option 2: The Overlaid Glass" subtitle="Focus: Immersive visual experience.">
                    <div className="absolute top-0 left-0 right-0 h-[45%] z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end">
                        <div className="px-6 mb-6">
                            <h1 className="text-3xl font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter drop-shadow-2xl">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                        <div className="bg-white/[0.03] backdrop-blur-2xl border-t border-white/10 rounded-t-[2.5rem] p-6 space-y-6 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.8)]">
                            <Explainer />
                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em]">SELECT VERTICAL:</span>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {ELITE_7.slice(0, 4).map((ind) => (
                                        <Link 
                                            key={ind.id} 
                                            href={`/packs/${ind.id}`}
                                            className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-white/5 bg-black/40 text-center"
                                        >
                                            <ind.icon className="w-4 h-4 text-primary" />
                                            <span className="text-[8px] font-black uppercase italic text-white/60">{ind.name}</span>
                                        </Link>
                                    ))}
                                    <Link href="/library" className="col-span-2 p-2.5 rounded-xl border border-dashed border-white/10 text-center">
                                        <span className="text-[8px] font-black uppercase text-white/30 tracking-widest">+ VIEW ALL SYSTEMS</span>
                                    </Link>
                                </div>
                            </div>
                            <PricingBlock layout="compact" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* ARCHITECTURE D: THE TACTICAL LIST (35% VIDEO) */}
                <PreviewFrame title="Option 3: The Tactical List" subtitle="Focus: High authority industrial feel.">
                    <div className="h-[35%] w-full relative">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale brightness-50" />
                        <div className="absolute inset-0 bg-primary/5" />
                        <div className="absolute bottom-4 left-6">
                            <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-zinc-950 p-6 space-y-6 overflow-y-auto no-scrollbar">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                                <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">SOVEREIGN V11.9 ENGAGED</span>
                            </div>
                            <div className="space-y-2">
                                {ELITE_7.slice(0, 5).map((ind) => (
                                    <Link 
                                        key={ind.id} 
                                        href={`/packs/${ind.id}`}
                                        className="flex items-center justify-between p-3 rounded-none border-b border-white/5 group hover:bg-primary/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                            <span className="text-[10px] font-bold uppercase text-white/80">{ind.name}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-primary" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <PricingBlock />
                    </div>
                </PreviewFrame>

                {/* ARCHITECTURE E: THE SYMMETRIC SPLIT (40% VIDEO) */}
                <PreviewFrame title="Option 4: The Symmetric Split" subtitle="Focus: Balanced command and action.">
                    <div className="h-[40%] w-full relative border-b border-primary/20">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-2">
                            <Badge className="bg-primary text-black font-black text-[8px] rounded-none px-3">SOVEREIGN ENGINE</Badge>
                            <h1 className="text-3xl font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-black p-6 flex flex-col">
                        <Explainer className="mb-6" />
                        <div className="grid grid-cols-3 gap-2 mb-auto">
                            {ELITE_7.slice(0, 6).map((ind) => (
                                <Link 
                                    key={ind.id} 
                                    href={`/packs/${ind.id}`}
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/10 bg-white/[0.02]"
                                >
                                    <ind.icon className="w-4 h-4 text-primary/40" />
                                    <span className="text-[7px] font-black uppercase text-white/40">{ind.name}</span>
                                </Link>
                            ))}
                        </div>
                        <PricingBlock />
                    </div>
                </PreviewFrame>

                {/* ARCHITECTURE F: THE ACTION HUB (BOTTOM-HEAVY OFFER) */}
                <PreviewFrame title="Option 5: The Action Hub" subtitle="Focus: Offer-first prioritization.">
                    <div className="h-[25%] w-full relative">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    </div>
                    <div className="flex-1 bg-black p-6 space-y-6 flex flex-col">
                        <div className="space-y-4">
                            <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                SYSTEMS THAT <br />
                                <span className="text-primary">RUN THEMSELVES.</span>
                            </h1>
                            {/* LIFTED PRICING CARD */}
                            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-[9px] font-black text-primary uppercase tracking-widest">LIMITED OFFER</span>
                                    <span className="text-xl font-black text-white italic">₹999</span>
                                </div>
                                <Button asChild className="w-full h-10 bg-primary text-black text-[9px] font-black uppercase rounded-lg border-none">
                                    <Link href="/library">DEPLOY SYSTEM NOW</Link>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="space-y-3 flex-1 overflow-y-auto no-scrollbar">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">DEPLOYMENT SECTORS:</span>
                            <div className="space-y-2">
                                {ELITE_7.map((ind) => (
                                    <Link 
                                        key={ind.id} 
                                        href={`/packs/${ind.id}`}
                                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                                    >
                                        <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                        <span className="text-[9px] font-bold uppercase text-white/70">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
