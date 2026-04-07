
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Lock,
    ChevronRight,
    Activity,
    ClipboardCheck,
    Smartphone,
    Check,
    Globe,
    ShieldCheck
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
        <div className="w-full aspect-[16/8] min-h-[700px] border border-white/10 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative">
            {children}
        </div>
    </div>
);

const VideoBg = ({ grayscale = false }: { grayscale?: boolean }) => (
    <div className="absolute inset-0 z-0">
        <video 
            src={VIDEO_URL} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className={cn(
                "w-full h-full object-cover opacity-40",
                grayscale && "grayscale-[0.5]"
            )} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </div>
);

const DesktopCTA = ({ price = "₹999", className }: { price?: string, className?: string }) => (
    <Button asChild size="lg" className={cn("h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none", className)}>
        <Link href="/library">GO LIVE IN 10 MINUTES: {price} <ArrowRight className="ml-2 h-5 w-5" /></Link>
    </Button>
);

const PayloadGrid = ({ className, alignment = "left" }: { className?: string, alignment?: "left" | "right" }) => (
    <div className={cn(
        "grid grid-cols-2 gap-4",
        alignment === "right" && "justify-items-end",
        className
    )}>
        {TECHNICAL_PAYLOAD.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

const IndustrySelector = ({ className, variant = "list" }: { className?: string, variant?: "list" | "grid" }) => (
    <div className={cn("bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6", className)}>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SELECT YOUR OPERATING SECTOR</span>
        <div className={cn(
            "grid gap-2",
            variant === "grid" ? "grid-cols-2" : "grid-cols-1"
        )}>
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
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Web Architecture Lab v2.0</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Side-by-Side Variations</h1>
                    <p className="text-secondary-text italic font-medium">Testing variations of Option 1 with full-color cinematic viewports.</p>
                </div>

                {/* OPTION 1: THE BASELINE (DESATURATED) */}
                <PreviewFrame title="1. The Baseline Command" description="Original side-by-side with desaturated video for maximum text pop.">
                    <VideoBg grayscale />
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

                {/* OPTION 2: THE COLOUR MIRROR */}
                <PreviewFrame title="2. The Colour Mirror" description="Mirrored layout with Full Colour video. Testing selector priority on the left.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
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
                                    Capture memory. Standardize execution. <br />
                                    Your entire standard in one unified engine.
                                </p>
                            </div>
                            <PayloadGrid alignment="right" />
                            <DesktopCTA />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 3: THE INDUSTRIAL SPLIT */}
                <PreviewFrame title="3. The Industrial Split" description="Hard 50/50 split. Solid black text zone vs. Colour video industry zone.">
                    <div className="relative z-10 h-full grid grid-cols-2">
                        <div className="h-full bg-black flex flex-col justify-center px-20 space-y-8">
                            <div className="space-y-4">
                                <Badge className="bg-primary text-black font-black text-[9px] uppercase tracking-widest rounded-none w-fit">SOVEREIGN V11.9</Badge>
                                <h1 className="text-6xl font-black font-headline text-white leading-[0.9] uppercase italic tracking-tighter">
                                    LESS MISSES.<br />
                                    <span className="text-primary">MORE STANDARDS.</span>
                                </h1>
                                <p className="text-lg text-secondary-text italic font-medium">Deploy institutional infrastructure in 10 minutes.</p>
                            </div>
                            <PayloadGrid />
                            <DesktopCTA className="w-fit" />
                        </div>
                        <div className="h-full relative overflow-hidden flex flex-col justify-center px-12">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 bg-black/20" />
                            <IndustrySelector className="relative z-10 bg-black/60" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 4: THE TACTICAL TILE COMMAND */}
                <PreviewFrame title="4. The Tactical Tile Deck" description="Side-by-side with 2-column industry grid. High density / Full Colour Video.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,550px] items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    SYSTEMS DON'T FORGET.<br />
                                    <span className="text-primary">PEOPLE DO.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6">
                                    Capture memory. Standardize execution. Eliminate risk.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-lg"><item.i className="w-5 h-5" /></div>
                                        <p className="text-[11px] font-black text-white/80 uppercase italic tracking-tight leading-tight">{item.t}</p>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA />
                        </div>
                        <IndustrySelector variant="grid" className="bg-black/40" />
                    </div>
                </PreviewFrame>

                {/* OPTION 5: THE IMMERSIVE GLASS HUB */}
                <PreviewFrame title="5. The Immersive Glass Hub" description="Maximum visual impact. Over-sized typography and wide glass command board.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-50" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,600px] items-center px-20 gap-12">
                        <div className="space-y-8">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">OPERATIONAL INFRASTRUCTURE</Badge>
                            <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                CAPTURE<br />
                                <span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-2xl text-white/60 italic font-medium max-w-lg">
                                Stop managing by effort. <br />
                                Start seeing by system.
                            </p>
                            <DesktopCTA className="h-20 px-12 text-lg shadow-primary/20" />
                        </div>
                        
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-3xl p-12 rounded-[3.5rem] space-y-8 shadow-2xl">
                            <div className="flex justify-between items-center border-b border-white/5 pb-6">
                                <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">DEPLOYMENT READY</span>
                                <div className="flex gap-3">
                                    <ShieldCheck className="w-4 h-4 text-primary/40" />
                                    <Globe className="w-4 h-4 text-primary/40" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-4 rounded-2xl hover:bg-primary/10 transition-all group">
                                        <div className="flex items-center gap-5">
                                            <ind.icon className="w-6 h-6 text-primary/40 group-hover:text-primary transition-colors" />
                                            <span className="text-base font-bold uppercase italic text-white/50 group-hover:text-white transition-all">{ind.name}</span>
                                        </div>
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
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
