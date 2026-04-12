
'use client';

import React, { useState, useEffect } from 'react';
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
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ROTATING_OPTIONS = [
    {
        badge: "INTELLECTUAL ASSET",
        titleWhite: "CAPTURE",
        titleColor: "MEMORY.",
        subtitle: "Don't let your best secrets leave when staff resign.",
        accentColor: "#38bdf8", // Azure
    },
    {
        badge: "OPERATIONAL ORDER",
        titleWhite: "SYSTEMS",
        titleColor: "OVER LUCK.",
        subtitle: "Make sure every task is done right, even when you aren't there.",
        accentColor: "#fbbf24", // Gold
    },
    {
        badge: "FINANCIAL COMMAND",
        titleWhite: "CHAOS IS",
        titleColor: "EXPENSIVE.",
        subtitle: "Stop the daily stress. Make your business run itself. No more management gaps.",
        accentColor: "#107c10", // Emerald
    },
    {
        badge: "SOVEREIGN ENGINE",
        titleWhite: "OWN THE",
        titleColor: "INFRASTRUCTURE.",
        subtitle: "No monthly fees. No SaaS lock-in. Buy it once, own your system forever.",
        accentColor: "#f97316", // Sunset
    }
];

/**
 * STATIONARY SECTOR NAVIGATOR
 * Locked in place to provide a permanent operational floor.
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
        <div className="bg-white/95 backdrop-blur-md border-y border-zinc-200 p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 shadow-2xl relative z-10">
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
    );
};

/**
 * STATIONARY VALUE STRIP
 * The constant technical payload at the absolute base.
 */
const ValueStrip = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-12 py-4 px-4 bg-zinc-900 shadow-2xl">
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

export default function RotatingSovereignPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % ROTATING_OPTIONS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const active = ROTATING_OPTIONS[currentIndex];

    return (
        <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-zinc-100">
            {/* Cinematic Backdrop - Optimized Clarity (40% Opacity) */}
            <div className="absolute inset-0 z-0">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale-[0.2] opacity-40" />
                {/* Fixed Daylight Gradient Mask - Ensures Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-100 via-zinc-100/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* DYNAMIC CONTENT LAYER (The Narratives) */}
            <div className="relative z-20 flex-1 flex flex-col px-6 md:px-24 justify-center">
                <div key={currentIndex} className="max-w-6xl space-y-8 md:space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    <Badge variant="outline" className="backdrop-blur-md bg-white/90 border-zinc-300 text-zinc-500 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2.5 rounded-full mb-2 shadow-sm">
                        {active.badge}
                    </Badge>
                    
                    <div className="relative group">
                        {/* Dynamic Rim Lighting (Updates with Accent Color) */}
                        <div className="absolute -inset-20 blur-[120px] opacity-20 pointer-events-none transition-all duration-1000" style={{ background: `radial-gradient(circle, ${active.accentColor} 0%, transparent 70%)` }} />
                        
                        <h1 className="text-5xl md:text-[8.5rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-zinc-950 relative z-10 drop-shadow-xl">
                            {active.titleWhite} <br/> <span style={{ color: active.accentColor }} className="transition-colors duration-1000">{active.titleColor}</span>
                        </h1>
                    </div>
                    
                    <div className="flex gap-8 pt-4">
                        {/* Dynamic Accent Bar */}
                        <div className="w-2.5 rounded-full h-auto self-stretch shadow-sm transition-colors duration-1000" style={{ backgroundColor: active.accentColor }} />
                        <p className="text-xl md:text-4xl font-bold italic max-w-2xl leading-[1.1] text-zinc-800 relative z-10 drop-shadow-sm">
                            {active.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* STATIONARY FOUNDATION LAYER (The Command Docks) */}
            <div className="relative z-30 w-full">
                <div className="max-w-7xl mx-auto flex justify-between items-end px-12 pb-4">
                    <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm px-5 py-2 rounded-full border border-zinc-200 shadow-sm">
                        {/* Pulse matches the current active color */}
                        <div className="w-2 h-2 rounded-full animate-pulse transition-colors duration-1000" style={{ backgroundColor: active.accentColor }} />
                        <span className="text-[10px] md:text-[11px] font-black text-zinc-600 uppercase tracking-[0.5em] italic font-headline">
                            LOOK WHAT'S IN FOR YOUR BUSINESS
                        </span>
                    </div>
                    <span className="hidden md:block text-[9px] font-mono text-zinc-400 uppercase tracking-widest">SOVEREIGN_SYSTEM_V62.0_STABLE</span>
                </div>
                
                <div className="max-w-7xl mx-auto">
                    {/* These two components are now stationary anchors */}
                    <SectorNavigator accentColor={active.accentColor} />
                    <ValueStrip />
                </div>
            </div>
        </section>
    );
}
