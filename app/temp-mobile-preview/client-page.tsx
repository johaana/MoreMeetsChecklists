
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
    Activity,
    ClipboardCheck,
    FileSpreadsheet
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_INDUSTRIES = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border-primary/20">{title}</Badge>
            {subtitle && <p className="text-[10px] text-zinc-500 italic font-medium uppercase tracking-widest">{subtitle}</p>}
        </div>
        <div className="w-[375px] h-[812px] border-[10px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-4 flex flex-col items-center justify-center bg-black">
                
                {/* SOVEREIGN MOBILE HERO - V11.9 STANDARD */}
                <PreviewFrame title="Sovereign Mobile Standard" subtitle="Minimalist Elite Transition">
                    {/* 1. Cinematic Visual Layer (35%) */}
                    <div className="relative h-[32vh] w-full overflow-hidden bg-zinc-900 shrink-0">
                        <video
                            src={VIDEO_URL}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-6 right-6">
                            <h1 className="text-[2.2rem] font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                STOP CHASING.<br />
                                <span className="text-primary">START SEEING.</span>
                            </h1>
                        </div>
                    </div>

                    {/* 2. Command Deck (65%) */}
                    <div className="flex-1 px-6 pt-6 pb-8 flex flex-col justify-between overflow-y-auto no-scrollbar bg-black">
                        <div className="space-y-8">
                            {/* Narrative Block */}
                            <div className="space-y-4">
                                <p className="text-sm text-white/40 italic font-medium border-l-2 border-primary/20 pl-4 leading-relaxed">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] italic">120+ PRE-BUILT SOPs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] italic">WORKS ON EXCEL AND GOOGLE SHEETS</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                        <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.3em] italic">LIVE DASHBOARD TELEMETRY</span>
                                    </div>
                                </div>
                            </div>

                            {/* Sector Selector Grid */}
                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.4em]">SELECT VERTICAL</span>
                                <div className="grid grid-cols-2 gap-2">
                                    {ELITE_INDUSTRIES.map((ind, i) => (
                                        <Link 
                                            key={ind.id} 
                                            href={`/packs/${ind.id}`} 
                                            className={cn(
                                                "flex items-center gap-2 p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5 transition-colors",
                                                i === ELITE_INDUSTRIES.length - 1 && "col-span-2"
                                            )}
                                        >
                                            <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                            <span className="text-[9px] font-bold uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Conversion Point */}
                        <div className="space-y-4 pt-6 mt-4 border-t border-white/5">
                            <Button asChild className="w-full h-14 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all">
                                <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                            
                            <div className="flex justify-between items-center px-1">
                                {[
                                    { t: "EXCEL READY", i: FileSpreadsheet },
                                    { t: "OWN FOREVER", i: Zap },
                                    { t: "AUDIT READY", i: ShieldCheck }
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <point.i className="w-2.5 h-2.5 text-primary/60" />
                                        <span className="text-[7px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
                                    </div>
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
