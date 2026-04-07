
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
    ShieldCheck,
    Target
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
        <div className="w-full aspect-[16/8] min-h-[750px] border border-white/10 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative">
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

const PayloadGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-8 gap-y-4", className)}>
        {TECHNICAL_PAYLOAD.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

const IndustrySelector = ({ className, variant = "list" }: { className?: string, variant?: "list" | "grid" }) => (
    <div className={cn("bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6 shadow-2xl", className)}>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
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
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Sovereign Web Improv Lab v3.0</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Command Archetype Variations</h1>
                    <p className="text-secondary-text italic font-medium">Fine-tuning the side-by-side 'Integrated Command' strategy.</p>
                </div>

                {/* VARIANT 1: THE BASELINE (Option 1 Original) */}
                <PreviewFrame title="1. The Baseline Command" description="The current winning formula: Desaturated video, high-blur glass, vertical sector list.">
                    <VideoBg grayscale />
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6 max-w-lg leading-relaxed">
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

                {/* VARIANT 2: THE VIVID AUTHORITY (Color Video + Depth) */}
                <PreviewFrame title="2. The Vivid Authority" description="Full color video background with deeper blurs and enhanced typographic hierarchy.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">SOVEREIGN V11.9 ACCESS</Badge>
                                <h1 className="text-7xl lg:text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-2xl text-white/60 italic font-medium max-w-lg leading-snug">
                                    Stop managing by effort. <br />
                                    Start seeing by system.
                                </p>
                            </div>
                            <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-md inline-block">
                                <PayloadGrid />
                            </div>
                            <DesktopCTA className="h-20 text-lg" />
                        </div>
                        <IndustrySelector className="bg-black/40 border-primary/20" />
                    </div>
                </PreviewFrame>

                {/* VARIANT 3: THE SOFTWARE GRID (Dashboard Logic) */}
                <PreviewFrame title="3. The Software Grid" description="Re-imagines the industry selector as a high-density dashboard grid. Best for multi-sector groups.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,#000_40%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0)_100%)]" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,600px] items-center px-20 gap-16">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    LESS MISSES.<br />
                                    <span className="text-primary">MORE STANDARDS.</span>
                                </h1>
                                <div className="space-y-3 border-l-2 border-primary/40 pl-8">
                                    <p className="text-xl text-white/80 font-bold uppercase italic tracking-tight">Pre-built SOPs with Live Dashboard.</p>
                                    <p className="text-lg text-white/40 font-medium italic leading-tight">No SaaS for your business. Own the engine forever.</p>
                                </div>
                            </div>
                            <PayloadGrid />
                            <DesktopCTA />
                        </div>
                        <IndustrySelector variant="grid" className="bg-black/60 border-white/5 p-8" />
                    </div>
                </PreviewFrame>

                {/* VARIANT 4: THE CORPORATE MONOLITH (Sharp 50/50 Split) */}
                <PreviewFrame title="4. The Corporate Monolith" description="Hard 50/50 split with sharp industrial borders. Maximum focus on 'Stop Chasing' narrative.">
                    <div className="relative z-10 h-full grid grid-cols-2">
                        <div className="h-full bg-black flex flex-col justify-center px-24 space-y-10 border-r border-white/5">
                            <div className="space-y-6">
                                <span className="text-primary font-black uppercase tracking-[0.5em] text-[10px]">SOVEREIGN INFRASTRUCTURE</span>
                                <h1 className="text-6xl lg:text-7xl font-black font-headline text-white leading-[0.9] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-lg text-zinc-500 italic font-medium leading-relaxed">
                                    Capture the institutional memory of your best performers. Deployforensically engineered data engines to run your daily operations.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all"><item.i className="w-4 h-4" /></div>
                                        <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="w-fit" />
                        </div>
                        <div className="h-full relative overflow-hidden flex flex-col justify-center px-16">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50" />
                            <div className="absolute inset-0 bg-black/40" />
                            <div className="relative z-10 space-y-6">
                                <div className="p-10 rounded-[2rem] bg-black/80 border border-white/10 backdrop-blur-xl space-y-8">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                        <span className="text-xs font-black text-primary uppercase tracking-[0.4em]">DEPLOYMENT SECTORS</span>
                                        <ShieldCheck className="w-5 h-5 text-primary/40" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-1">
                                        {ELITE_7.map((ind) => (
                                            <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-4 rounded-xl hover:bg-primary/10 transition-all group">
                                                <div className="flex items-center gap-5">
                                                    <ind.icon className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                                                    <span className="text-sm font-bold uppercase italic text-white/50 group-hover:text-white transition-all">{ind.name}</span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 5: THE MINIMALIST ELITE (Clean / Linear) */}
                <PreviewFrame title="5. The Minimalist Elite" description="Ultra-clean variant of Option 1. Focused strictly on line-art and high-end typography.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,500px] items-center px-32 gap-32">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span className="text-primary">SYSTEMS.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-8 leading-relaxed">
                                    Memory is not a system. Serious operations deserve more than improvisation.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-3.5 h-3.5 text-primary" />
                                        <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none" />
                        </div>
                        <div className="p-1 border-l border-white/10 space-y-10 pl-16">
                            <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">SELECT VERTICAL</span>
                            <div className="space-y-4">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-xl font-bold uppercase italic text-white/30 hover:text-primary transition-all hover:translate-x-2">
                                        {ind.name}
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

    