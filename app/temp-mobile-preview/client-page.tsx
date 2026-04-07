
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
    LayoutGrid,
    ListFilter
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

const PROOF_LINE = () => (
    <div className="flex justify-between items-center px-1 pt-2 border-t border-white/5">
        {[
            { t: "NO APPS", i: Lock },
            { t: "OWN FOREVER", i: Zap },
            { t: "AUDIT READY", i: ShieldCheck }
        ].map((point, i) => (
            <div key={i} className="flex items-center gap-1">
                <point.i className="w-2 h-2 text-primary/60" />
                <span className="text-[6px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
            </div>
        ))}
    </div>
);

const DeployButton = ({ className }: { className?: string }) => (
    <Button asChild className={cn("w-full h-14 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all", className)}>
        <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
    </Button>
);

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border-primary/20">{title}</Badge>
            {subtitle && <p className="text-[10px] text-zinc-500 italic font-medium uppercase tracking-widest">{subtitle}</p>}
        </div>
        <div className="w-[375px] h-[750px] border-[10px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-4 space-y-40">
                
                {/* OPTION 1: THE TACTICAL SPLIT (40/60) */}
                <PreviewFrame title="Option 1: The Tactical Split" subtitle="Dominant Video + Clean List">
                    <div className="h-[40%] w-full relative overflow-hidden bg-zinc-900">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-6">
                             <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-black p-6 space-y-6 flex flex-col justify-between">
                        <div className="space-y-4">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">DEPLOYMENT MODULES:</span>
                            <div className="grid grid-cols-2 gap-2">
                                {ELITE_7.slice(0, 6).map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center gap-2.5 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                                        <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                        <span className="text-[8px] font-black uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-3">
                            <DeployButton />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 2: THE GLASS OVERLAY (50% VIDEO) */}
                <PreviewFrame title="Option 2: The Glass Overlay" subtitle="Premium Immersive Layer">
                    <div className="absolute top-0 left-0 right-0 h-[50%] z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end">
                        <div className="px-8 mb-8">
                            <h1 className="text-3xl font-black font-headline text-white leading-[0.82] uppercase italic tracking-tighter drop-shadow-2xl">
                                SYSTEMS THAT<br />
                                <span className="text-primary">RUN THEMSELVES.</span>
                            </h1>
                        </div>
                        <div className="bg-white/[0.03] backdrop-blur-2xl border-t border-white/10 rounded-t-[2.5rem] p-8 space-y-8 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.8)]">
                            <div className="grid grid-cols-2 gap-3">
                                {ELITE_7.slice(0, 4).map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-white/5 bg-black/40 text-center">
                                        <ind.icon className="w-5 h-5 text-primary" />
                                        <span className="text-[8px] font-black uppercase italic text-white/60">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                            <div className="space-y-3">
                                <DeployButton className="h-16" />
                                <PROOF_LINE />
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 3: THE INDUSTRIAL LIST (CLEAN LIST) */}
                <PreviewFrame title="Option 3: The Industrial List" subtitle="Authority & Precision">
                    <div className="h-[30%] w-full relative">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale brightness-50" />
                        <div className="absolute inset-0 bg-primary/5" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                DEPLOY OPERATIONAL<br />
                                <span className="text-primary">INFRASTRUCTURE.</span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-zinc-950 p-6 flex flex-col">
                        <div className="space-y-1 mb-6">
                            <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT VERTICAL:</span>
                            <div className="space-y-1">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-3.5 border-b border-white/5 group active:bg-primary/5">
                                        <div className="flex items-center gap-3">
                                            <ind.icon className="w-4 h-4 text-primary/60" />
                                            <span className="text-[10px] font-bold uppercase italic text-white/80">{ind.name}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-primary" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-white/5 space-y-3">
                            <DeployButton />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 4: THE MODULE HUB (3-COL GRID) */}
                <PreviewFrame title="Option 4: The Module Hub" subtitle="Maximum Density Design">
                    <div className="h-[25%] w-full relative overflow-hidden">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover brightness-[0.3]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                            <Badge className="bg-primary text-black font-black text-[7px] rounded-none mb-2 tracking-[0.3em]">SOVEREIGN V11.9</Badge>
                            <h1 className="text-xl font-black font-headline text-white leading-tight uppercase italic tracking-tighter">
                                STOP CHASING. START SEEING.
                            </h1>
                        </div>
                    </div>
                    <div className="flex-1 bg-black p-5 flex flex-col">
                        <div className="space-y-4 mb-auto">
                            <div className="flex items-center justify-between">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">ACTIVE ENGINES:</span>
                                <LayoutGrid className="w-3 h-3 text-white/10" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                                        <ind.icon className="w-4 h-4 text-primary/40" />
                                        <span className="text-[6px] font-black uppercase text-white/40 leading-tight">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="pt-6 space-y-3">
                            <DeployButton className="h-16 rounded-2xl" />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 5: THE DIRECT ACTION (CONVERSION FIRST) */}
                <PreviewFrame title="Option 5: The Direct Action" subtitle="High Tension Conversion">
                    <div className="flex-1 bg-black p-8 flex flex-col space-y-10">
                        <div className="space-y-6">
                            <h1 className="text-4xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                LESS MISSES.<br />
                                <span className="text-primary">MORE STANDARDS.</span>
                            </h1>
                            <div className="border-l-2 border-primary/30 pl-6 py-1">
                                <p className="text-[11px] text-white/60 font-medium italic leading-relaxed">
                                    Capture institutional memory. <br />
                                    Own your data. No SaaS.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <DeployButton className="h-20 text-xs shadow-[0_0_40px_-10px_rgba(46,184,107,0.4)]" />
                            <PROOF_LINE />
                        </div>

                        <div className="space-y-4 pt-10">
                            <div className="flex items-center gap-2">
                                <ListFilter className="w-3 h-3 text-primary" />
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT SYSTEM:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[8px] font-black uppercase italic text-white/40 active:bg-primary active:text-black">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="mt-auto h-[15%] w-full rounded-2xl overflow-hidden opacity-40 grayscale">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
