
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    Lock, 
    GraduationCap,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Popcorn,
    AlertTriangle,
    ClipboardCheck,
    Building2,
    ChevronRight,
    SearchCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * SOVEREIGN VALUE STRIP - THE "TEXT BELOW STRIP"
 * High-density zinc bar locking in the core payload.
 */
const ValueStrip = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-12 py-4 px-4 bg-zinc-900 rounded-b-[2.5rem] md:rounded-b-[4rem] shadow-2xl">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: GraduationCap },
            { t: "CONSEQUENCES DEFINED", i: AlertTriangle }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-3 shrink-0">
                <item.i className="w-3 md:w-4 h-3 md:h-4 text-zinc-500" />
                <span className="text-[7.5px] md:text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 italic whitespace-nowrap">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

/**
 * UNIVERSAL SECTOR NAVIGATOR - DAYLIGHT GRID
 */
const SectorNavigator = ({ accentColor }: { accentColor: string }) => {
    const sectorPoints = [
        { label: "HOSPITALITY", val: "RESTAURANTS", icon: Utensils, href: "/packs/restaurants" },
        { label: "HOSPITALITY", val: "HOTELS & RESORTS", icon: Building, href: "/packs/hotels_and_resorts" },
        { label: "HEALTHCARE", val: "HOSPITALS", icon: Hospital, href: "/packs/healthcare_and_hospital_operations" },
        { label: "EDUCATION", val: "SCHOOLS", icon: School, href: "/packs/school_operations_pack" },
        { label: "FRANCHISE", val: "NETWORKS", icon: Store, href: "/packs/franchise_operations_pack" },
        { label: "FACILITIES", val: "MGMT", icon: Building2, href: "/packs/facility_management_blueprint" },
        { label: "ENTERTAINMENT", val: "CINEMAS", icon: Popcorn, href: "/packs/cinema_operations_pack" }
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-0 relative">
            <div className="bg-white/95 backdrop-blur-md border border-zinc-200 p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-2xl relative z-10">
                <div className="flex-1 grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-3 w-full px-4 md:px-6 h-full py-2">
                    {sectorPoints.map((item, i) => (
                        <Link key={i} href={item.href} className="group/item">
                            <div className="flex flex-col gap-1 md:gap-1.5 pl-3 md:pl-4 first:border-0 h-full justify-center border-l border-zinc-100 transition-all overflow-hidden">
                                <span className="text-[6px] md:text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap leading-none">{item.label}</span>
                                <div className="flex items-center gap-2 overflow-hidden mt-0.5">
                                    <item.icon className="w-3 md:w-4 h-3 md:h-4 shrink-0 transition-transform group-hover/item:scale-110" style={{ color: accentColor }} />
                                    <span className="text-[8px] md:text-[10px] font-black uppercase italic whitespace-nowrap leading-none text-zinc-900 group-hover/item:text-primary transition-colors">{item.val}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Button asChild className="h-12 md:h-16 px-8 md:px-12 rounded-full font-black uppercase italic text-[10px] md:text-xs tracking-widest transition-all hover:scale-105 border-none shrink-0 group/btn bg-zinc-950 text-white shadow-xl">
                    <Link href="/library">
                        DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </div>
            <ValueStrip />
        </div>
    );
};

const DaylightHero = ({ 
    titleWhite,
    titleColor,
    subtitle,
    accentColor, 
    badge,
    layout = "left"
}: { 
    titleWhite: string,
    titleColor: string,
    subtitle: string,
    accentColor: string, 
    badge: string,
    layout?: "centered" | "left"
}) => (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-zinc-100 border-b border-zinc-200">
        {/* Cinematic Backdrop - Optimized Clarity (40% Opacity) */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.3] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-100/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className={cn(
            "relative z-20 flex-1 flex flex-col px-6 md:px-24 pt-20",
            layout === "centered" ? "justify-center items-center text-center" : "justify-center"
        )}>
            <div className={cn("max-w-6xl space-y-8 md:space-y-12", layout === "centered" && "flex flex-col items-center")}>
                <Badge variant="outline" className="backdrop-blur-md bg-white/90 border-zinc-300 text-zinc-500 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full mb-2 shadow-sm">
                    {badge}
                </Badge>
                
                <div className="relative group">
                    {/* Subtle Rim Lighting */}
                    <div className="absolute -inset-20 blur-[120px] opacity-20 pointer-events-none transition-opacity duration-1000 group-hover:opacity-30" style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }} />
                    
                    <h1 className="text-5xl md:text-[8.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950 relative z-10 drop-shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
                        {titleWhite} <br/> <span style={{ color: accentColor }}>{titleColor}</span>
                    </h1>
                </div>
                
                <div className={cn("flex gap-8 pt-4", layout === "centered" ? "justify-center" : "")}>
                    <div className="w-2.5 rounded-full h-auto self-stretch shadow-sm" style={{ backgroundColor: accentColor }} />
                    <p className="text-xl md:text-4xl font-bold italic max-w-2xl leading-[1.1] text-zinc-800 relative z-10">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* Floating Sector Command Dock */}
        <div className="relative z-30 w-full px-6 md:px-24 pb-10 md:pb-16 space-y-5">
            <div className={cn(
                "max-w-7xl mx-auto flex justify-between items-end px-12",
                layout === "centered" ? "flex-col items-center gap-4" : ""
            )}>
                <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-zinc-200 shadow-sm">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                    <span className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic font-headline">
                        LOOK WHAT'S IN FOR YOUR BUSINESS
                    </span>
                </div>
                <span className="hidden md:block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">SOVEREIGN_SYSTEM_V60.0_STABLE</span>
            </div>
            <SectorNavigator accentColor={accentColor} />
        </div>
    </section>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-100 selection:bg-primary/20">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. AZURE: THE ANALYST */}
                <DaylightHero 
                    badge="INTELLECTUAL ASSET"
                    titleWhite="CAPTURE"
                    titleColor="MEMORY."
                    subtitle="Don't let your best secrets leave when staff resign."
                    accentColor="#38bdf8"
                    layout="left"
                />

                {/* 02. GOLDEN: THE SOVEREIGN */}
                <DaylightHero 
                    badge="OPERATIONAL ORDER"
                    titleWhite="SYSTEMS"
                    titleColor="OVER LUCK."
                    subtitle="Make sure every task is done right, even when you aren't there."
                    accentColor="#fbbf24"
                    layout="centered"
                />

                {/* 03. EMERALD: THE COMMANDER */}
                <DaylightHero 
                    badge="FINANCIAL COMMAND"
                    titleWhite="CHAOS IS"
                    titleColor="EXPENSIVE."
                    subtitle="Stop the daily stress. Make your business run itself. No more management gaps."
                    accentColor="#107c10"
                    layout="left"
                />

                {/* 04. SUNSET: THE INDEPENDENT */}
                <DaylightHero 
                    badge="SOVEREIGN ENGINE"
                    titleWhite="OWN THE"
                    titleColor="INFRASTRUCTURE."
                    subtitle="No monthly fees. No SaaS lock-in. Buy it once, own your system forever."
                    accentColor="#f97316"
                    layout="centered"
                />

                {/* 05. INDIGO: THE SCALER */}
                <DaylightHero 
                    badge="COMPLIANCE STANDARD"
                    titleWhite="AUDIT"
                    titleColor="READY."
                    subtitle="Deploy ISO, HACCP, and OSHA-aligned protocols built for execution."
                    accentColor="#6366f1"
                    layout="left"
                />

            </main>

            <Footer />
        </div>
    );
}
