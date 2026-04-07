
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
    ChevronRight,
    CheckCircle2,
    Activity,
    ClipboardCheck,
    Smartphone,
    LayoutGrid,
    Target,
    Settings2,
    Check,
    Maximize2,
    Globe
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

const TECHNICAL_PAYLOAD = [
    { t: "120+ Pre-built SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for staff", i: Smartphone }
];

const PreviewFrame = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => (
    <div className="flex flex-col space-y-6 w-full max-w-7xl mx-auto">
        <div className="space-y-1 pl-4 border-l-4 border-primary">
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary-text">{title}</h3>
            {description && <p className="text-sm text-secondary-text italic font-medium">{description}</p>}
        </div>
        <div className="w-full aspect-[16/8] min-h-[650px] border border-white/10 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative">
            {children}
        </div>
    </div>
);

const VideoBg = () => (
    <div className="absolute inset-0 z-0">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </div>
);

const DesktopCTA = ({ price = "₹999", className }: { price?: string, className?: string }) => (
    <Button asChild size="lg" className={cn("h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none", className)}>
        <Link href="/library">GO LIVE IN 10 MINUTES: {price} <ArrowRight className="ml-2 h-5 w-5" /></Link>
    </Button>
);

const PayloadGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
        {TECHNICAL_PAYLOAD.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

const IndustrySelector = ({ className }: { className?: string }) => (
    <div className={cn("bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6", className)}>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SELECT YOUR OPERATING SECTOR</span>
        <div className="grid grid-cols-1 gap-2">
            {ELITE_7.map((ind) => (
                <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-primary/5 transition-all group">
                    <div className="flex items-center gap-4">
                        <ind.icon className="w-5 h-5 text-primary/60 group-hover:text-primary" />
                        <span className="text-sm font-bold uppercase italic text-white/70">{ind.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary" />
                </Link>
            ))}
        </div>
    </div>
);

export default function WebHeroPreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-6 space-y-40 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Web Architecture Lab</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">The Sovereign Refinement</h1>
                    <p className="text-secondary-text italic font-medium">Exploring variations of the 'Integrated Command' and 'Floating Deck' archetypes.</p>
                </div>

                {/* OPTION 1: THE INTEGRATED COMMAND (ORIGINAL) */}
                <PreviewFrame title="1. The Integrated Command" description="The baseline Side-by-Side. High information density.">
                    <VideoBg />
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6">
                                    Know what's done. What's missed. What's delayed. <br />
                                    Across your entire operation.
                                </p>
                            </div>
                            <PayloadGrid />
                            <DesktopCTA />
                        </div>
                        <IndustrySelector />
                    </div>
                </PreviewFrame>

                {/* OPTION 2: THE COMMAND MIRROR (VARIATION OF 1) */}
                <PreviewFrame title="2. The Command Mirror" description="Reversed orientation to test eye-flow from Selector to Narrative.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
                        <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <IndustrySelector />
                        <div className="space-y-8 text-right flex flex-col items-end">
                            <div className="space-y-4">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    START <span className="text-primary">SEEING.</span><br />
                                    STOP CHASING.
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-r-2 border-primary/20 pr-6">
                                    Run one unit perfectly. Scale without chaos. <br />
                                    Data-driven operational control.
                                </p>
                            </div>
                            <PayloadGrid className="justify-items-end" />
                            <DesktopCTA />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 3: THE INDUSTRIAL SPLIT (VARIATION OF 1 - MINIMALIST) */}
                <PreviewFrame title="3. The Industrial Split" description="A minimal version of the Command Grid. Sharp borders, high contrast.">
                    <div className="absolute inset-0 bg-zinc-950" />
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr] gap-px bg-white/10">
                        <div className="h-full bg-black flex flex-col justify-center px-20 space-y-10">
                            <div className="space-y-4">
                                <Badge className="bg-primary text-black font-black text-[9px] uppercase tracking-widest rounded-none w-fit">V11.9 SOVEREIGN</Badge>
                                <h1 className="text-6xl font-black font-headline text-white leading-[0.9] uppercase italic tracking-tighter">
                                    LESS MISSES.<br />
                                    <span className="text-primary">MORE STANDARDS.</span>
                                </h1>
                            </div>
                            <PayloadGrid />
                            <DesktopCTA className="w-fit" />
                        </div>
                        <div className="h-full bg-black/40 flex flex-col justify-center px-12 space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">DEPLOYMENT SECTOR</span>
                            <div className="grid grid-cols-1 gap-1">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center justify-between p-4 hover:bg-white/[0.03] transition-colors border-b border-white/5">
                                        <div className="flex items-center gap-4">
                                            <ind.icon className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
                                            <span className="text-sm font-bold uppercase italic text-white/60 group-hover:text-white transition-all">{ind.name}</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 4: THE FLOATING COMMAND DECK (ORIGINAL) */}
                <PreviewFrame title="4. The Floating Command Deck" description="Immersive video with centralized glass interaction hub.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center px-20">
                        <div className="w-full max-w-5xl bg-black/60 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] grid grid-cols-[1.5fr,1fr] gap-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge className="bg-primary text-black font-black text-[9px] uppercase tracking-widest rounded-sm">V11.9 SOVEREIGN</Badge>
                                    <h1 className="text-6xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
                                        SYSTEMS DON'T FORGET. <span className="text-primary">PEOPLE DO.</span>
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                    {TECHNICAL_PAYLOAD.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0"><item.i className="w-4 h-4" /></div>
                                            <div className="space-y-0.5">
                                                <p className="text-[10px] font-black text-white/80 uppercase italic tracking-tight">{item.t}</p>
                                                <p className="text-[8px] text-white/20 uppercase font-black tracking-widest">Built-in</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <DesktopCTA />
                            </div>
                            <div className="border-l border-white/5 pl-12 space-y-6">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">DEPLOYMENT READY:</span>
                                <div className="grid grid-cols-1 gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-all">
                                            <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/40 transition-all">
                                                <ind.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase italic text-white/40 group-hover:text-white transition-all">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 5: THE PANORAMIC DECK (VARIATION OF 4) */}
                <PreviewFrame title="5. The Panoramic Deck" description="Wide-format command board. System Specs -> Selector -> Action.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
                        <div className="w-full max-w-7xl bg-white/[0.03] border border-white/10 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl space-y-12">
                            <div className="text-center space-y-4 max-w-3xl mx-auto">
                                <h1 className="text-5xl font-black text-white leading-tight uppercase italic tracking-tighter">
                                    INSTITUTIONAL OPERATING INFRASTRUCTURE.
                                </h1>
                                <p className="text-secondary-text italic font-medium">Capture memory. Standardize execution. Eliminate risk.</p>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-12 items-start">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM SPECIFICATION</span>
                                    <div className="space-y-4">
                                        {TECHNICAL_PAYLOAD.map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                                <item.i className="w-5 h-5 text-primary" />
                                                <span className="text-xs font-black text-white/70 uppercase italic tracking-tight">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-6 border-x border-white/5 px-12">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT VERTICAL</span>
                                    <div className="grid grid-cols-1 gap-1">
                                        {ELITE_7.map((ind) => (
                                            <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center gap-3 py-2 text-white/40 hover:text-primary transition-all">
                                                <ind.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                                <span className="text-[11px] font-black uppercase italic tracking-tighter">{ind.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center h-full space-y-8">
                                    <div className="text-center space-y-1">
                                        <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ONE-TIME DEPLOYMENT</span>
                                        <p className="text-6xl font-black text-primary italic leading-none">₹999</p>
                                    </div>
                                    <DesktopCTA className="w-full h-20" />
                                    <div className="flex gap-4 opacity-30">
                                        <ShieldCheck className="w-5 h-5" />
                                        <Lock className="w-5 h-5" />
                                        <Activity className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
