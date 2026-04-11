
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    ShieldCheck, 
    FileSpreadsheet, 
    Lock, 
    GraduationCap,
    Zap,
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
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * SOVEREIGN VALUE STRIP - Persistent USPs
 * Highlights the core value payload below the industry dock.
 * Zero-truncation grid logic.
 */
const ValueStrip = () => (
    <div className="w-full flex items-center justify-center gap-4 md:gap-12 py-3 px-4 border-t border-white/5 bg-black/40 backdrop-blur-md rounded-b-[2rem] md:rounded-b-[3rem]">
        {[
            { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
            { t: "NO SaaS LOCK-IN", i: Lock },
            { t: "TRAINER NOTES INCLUDED", i: GraduationCap },
            { t: "CONSEQUENCES DEFINED", i: AlertTriangle }
        ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 md:gap-2 shrink-0">
                <item.i className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-primary/60" />
                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.2em] text-white/50 italic whitespace-nowrap">
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

/**
 * SECTOR NAVIGATOR DOCK - The "Look What's In" Interface
 * All 7 Elite Industries hyperlinked.
 * Variants for Dark and Light themes.
 */
const SectorNavigator = ({ accentColor, variant = "default" }: { accentColor: string, variant?: "default" | "glass" }) => {
    
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
        <div className="max-w-7xl mx-auto space-y-px">
            <div className={cn(
                "border p-2 md:p-4 flex flex-col md:flex-row items-center gap-4 md:gap-6 rounded-t-[2rem] md:rounded-t-[3rem] shadow-2xl transition-all duration-500",
                variant === "glass" ? "backdrop-blur-3xl bg-white/95 border-white/20" : "bg-black/60 border-white/10"
            )}>
                <div className="flex-1 grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-3 w-full px-4 md:px-6 h-full py-2">
                    {sectorPoints.map((item, i) => (
                        <Link key={i} href={item.href} className="group/item">
                            <div className={cn(
                                "flex flex-col gap-1 pl-3 md:pl-4 first:border-0 h-full justify-center transition-all min-w-0 overflow-hidden border-l",
                                variant === "glass" ? "border-zinc-200" : "border-white/10"
                            )}>
                                <span className={cn(
                                    "text-[6px] md:text-[8px] font-black uppercase tracking-[0.2em] whitespace-nowrap",
                                    variant === "glass" ? "text-zinc-400" : "text-white/40"
                                )}>{item.label}</span>
                                <div className="flex items-center gap-1.5 md:gap-2 overflow-hidden">
                                    <item.icon className="w-3 md:w-4 h-3 md:h-4 shrink-0 transition-transform group-hover/item:scale-110" style={{ color: accentColor }} />
                                    <span className={cn(
                                        "text-[8px] md:text-[10px] font-black uppercase italic whitespace-nowrap leading-none group-hover/item:text-primary transition-colors",
                                        variant === "glass" ? "text-zinc-900" : "text-white"
                                    )}>{item.val}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <Button asChild className={cn(
                    "h-12 md:h-16 px-8 md:px-12 rounded-full font-black uppercase italic text-[10px] md:text-xs tracking-widest transition-all hover:scale-105 border-none shrink-0 group/btn shadow-xl",
                    variant === "glass" ? "bg-zinc-950 text-white" : "bg-white text-black"
                )}>
                    <Link href="/library">
                        DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </div>
            <ValueStrip />
        </div>
    );
};

const CommandHero = ({ 
    titlePart1,
    titlePart2,
    subtitle,
    accentColor, 
    badge,
    layout = "centered",
    dockVariant = "default",
    videoOpacity = "opacity-40"
}: { 
    titlePart1: string,
    titlePart2: string,
    subtitle: string,
    accentColor: string, 
    badge: string,
    layout?: "centered" | "left",
    dockVariant?: "default" | "glass",
    videoOpacity?: string
}) => (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-black border-b border-white/5">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className={cn("w-full h-full object-cover grayscale", videoOpacity)} />
            <div className={cn(
                "absolute inset-0 z-10",
                dockVariant === "glass" ? "bg-white/5" : "bg-black/30"
            )} />
        </div>

        {/* Hero Content */}
        <div className={cn(
            "relative z-20 flex-1 flex flex-col px-6 md:px-24 pt-20",
            layout === "centered" ? "justify-center items-center text-center" : "justify-center"
        )}>
            <div className={cn("max-w-6xl space-y-8", layout === "centered" && "flex flex-col items-center")}>
                <Badge variant="outline" className="backdrop-blur-md bg-white/10 border-white/50 text-white/80 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2 rounded-full mb-2 shadow-2xl">
                    {badge}
                </Badge>
                
                <div className="relative group">
                    <div className="absolute -inset-10 bg-radial-gradient blur-[100px] opacity-30 pointer-events-none transition-opacity duration-1000 group-hover:opacity-50" style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }} />
                    
                    <h1 className="text-5xl md:text-[8rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,1)]">
                        {titlePart1} <br/> <span style={{ color: accentColor }}>{titlePart2}</span>
                    </h1>
                </div>
                
                <div className={cn("flex gap-6 pt-4", layout === "centered" ? "justify-center" : "")}>
                    <div className="w-2 rounded-full h-auto self-stretch shadow-2xl" style={{ backgroundColor: accentColor }} />
                    <p className="text-xl md:text-4xl font-medium italic max-w-2xl leading-[1.1] text-white relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,1)]">
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* Lower Command Dock */}
        <div className="relative z-30 w-full px-6 md:px-24 pb-10 md:pb-16 space-y-4">
            <div className={cn(
                "max-w-7xl mx-auto flex justify-between items-end px-10",
                layout === "centered" ? "flex-col items-center gap-4" : ""
            )}>
                <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[11px] font-black text-white/80 uppercase tracking-[0.5em] italic drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                        LOOK WHAT'S IN FOR YOUR BUSINESS
                    </span>
                </div>
                <span className="hidden md:block text-[8px] font-mono text-white/40 uppercase tracking-widest">SOVEREIGN_SYSTEM_V11.9</span>
            </div>
            <SectorNavigator accentColor={accentColor} variant={dockVariant} />
        </div>
    </section>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. GOLDEN: THE SOVEREIGN (Dark Theme) */}
                <CommandHero 
                    badge="SOVEREIGN STANDARD"
                    titlePart1="STOP MANAGING"
                    titlePart2="BY HOPE."
                    subtitle="Make sure every task is done right, even when you aren't there."
                    accentColor="#fbbf24"
                    layout="left"
                />

                {/* 02. EMERALD: THE COMMANDER (Lighter Theme) */}
                <CommandHero 
                    badge="COMMANDER PROTOCOL"
                    titlePart1="CHAOS IS"
                    titlePart2="EXPENSIVE."
                    subtitle="Stop the daily stress. Make your business run itself. No more management gaps."
                    accentColor="#107c10"
                    layout="centered"
                    dockVariant="glass"
                    videoOpacity="opacity-20"
                />

                {/* 03. SUNSET: THE INDEPENDENT (Lighter Theme) */}
                <CommandHero 
                    badge="INDEPENDENT ENGINE"
                    titlePart1="OWN THE"
                    titlePart2="INFRASTRUCTURE."
                    subtitle="No monthly fees. No SaaS lock-in. Buy it once, own your system forever."
                    accentColor="#f97316"
                    layout="left"
                    dockVariant="glass"
                    videoOpacity="opacity-25"
                />

                {/* 04. AZURE: THE ANALYST (Bonus Precision) */}
                <CommandHero 
                    badge="ANALYST STANDARD"
                    titlePart1="LUCK IS NOT"
                    titlePart2="A SYSTEM."
                    subtitle="Institutional memory is an asset. Anything else is just luck."
                    accentColor="#38bdf8"
                    layout="centered"
                />

            </main>

            <Footer />
        </div>
    );
}
