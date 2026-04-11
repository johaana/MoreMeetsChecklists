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
    Target,
    Zap,
    Utensils,
    Building,
    Hospital,
    School,
    Building2,
    Popcorn,
    ChevronRight,
    SearchCheck,
    Activity,
    Store
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

/**
 * TECHNICAL DOCK v51.0 - ZERO CLIPPING MANDATE
 * Modes: 'intelligence' (Product Specs) | 'sectors' (Direct Navigation)
 */
const TechnicalDock = ({ accentColor, type = "intelligence", variant = "default" }: { accentColor: string, type?: "intelligence" | "sectors", variant?: "default" | "glass" }) => {
    
    const intelligencePoints = [
        { label: "PRODUCT CLASS", val: "INSTITUTIONAL MEMORY", icon: Target },
        { label: "SAFETY READY", val: "ISO/HACCP/OSHA", icon: ShieldCheck },
        { label: "CORE ENGINE", val: "EXCEL & SHEETS", icon: FileSpreadsheet },
        { label: "OWNERSHIP", val: "100% SOVEREIGN", icon: Lock },
        { label: "TRAINING", val: "ACTION NOTES", icon: GraduationCap },
        { label: "SETUP SPEED", val: "< 10 MIN START", icon: Zap }
    ];

    const sectorPoints = [
        { label: "HOSPITALITY", val: "RESTAURANTS", icon: Utensils, href: "/packs/restaurants" },
        { label: "HOSPITALITY", val: "HOTELS & RESORTS", icon: Building, href: "/packs/hotels_and_resorts" },
        { label: "HEALTHCARE", val: "HOSPITALS", icon: Hospital, href: "/packs/healthcare_and_hospital_operations" },
        { label: "EDUCATION", val: "SCHOOLS", icon: School, href: "/packs/school_operations_pack" },
        { label: "FRANCHISE", val: "NETWORKS", icon: Store, href: "/packs/franchise_operations_pack" },
        { label: "ENTERTAINMENT", val: "CINEMAS", icon: Popcorn, href: "/packs/cinema_operations_pack" }
    ];

    const points = type === "intelligence" ? intelligencePoints : sectorPoints;

    return (
        <div className={cn(
            "max-w-7xl mx-auto border p-2 md:p-4 flex flex-col md:flex-row items-center gap-6 rounded-[2rem] md:rounded-full shadow-2xl transition-all duration-500",
            variant === "glass" ? "backdrop-blur-3xl bg-white/10 border-white/20" : "bg-white border-zinc-200"
        )}>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 w-full px-4 md:px-6">
                {points.map((item, i) => {
                    const DynamicIcon = item.icon;
                    const Content = (
                        <div key={i} className={cn(
                            "flex flex-col gap-1 pl-3 md:pl-4 first:border-0 h-full justify-center transition-all",
                            variant === "glass" ? "border-l border-white/10" : "border-l border-zinc-100",
                            'href' in item && "hover:opacity-70 cursor-pointer"
                        )}>
                            <span className={cn(
                                "text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] whitespace-nowrap",
                                variant === "glass" ? "text-white/40" : "text-zinc-400"
                            )}>{item.label}</span>
                            <div className="flex items-center gap-2">
                                <DynamicIcon className="w-3 md:w-3.5 h-3 md:h-3.5 shrink-0" style={{ color: accentColor }} />
                                <span className={cn(
                                    "text-[8px] md:text-[9px] font-black uppercase italic whitespace-nowrap leading-none",
                                    variant === "glass" ? "text-white" : "text-zinc-900"
                                )}>{item.val}</span>
                            </div>
                        </div>
                    );

                    return 'href' in item ? (
                        <Link key={i} href={item.href as string}>{Content}</Link>
                    ) : Content;
                })}
            </div>
            <Button asChild className={cn(
                "h-12 md:h-16 px-8 md:px-10 rounded-full font-black uppercase italic text-[10px] md:text-xs tracking-widest transition-all hover:scale-105 border-none shrink-0 group/btn shadow-xl",
                variant === "glass" ? "bg-white text-black" : "bg-zinc-950 text-white"
            )}>
                <Link href="/library">
                    DEPLOY SYSTEM <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
            </Button>
        </div>
    );
};

const CommandHero = ({ 
    title,
    subtitle,
    accentColor, 
    badge,
    layout = "centered",
    dockVariant = "default",
    dockType = "intelligence"
}: { 
    title: string,
    subtitle: string,
    accentColor: string, 
    badge: string,
    layout?: "centered" | "left" | "split",
    dockVariant?: "default" | "glass",
    dockType?: "intelligence" | "sectors"
}) => (
    <section className="relative w-full h-[100dvh] flex flex-col overflow-hidden bg-black border-b border-white/5">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20 z-10" />
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
                    
                    <h1 className="text-5xl md:text-[9rem] font-black font-headline tracking-tighter leading-[0.8] uppercase italic text-white relative z-10 drop-shadow-[0_15px_35px_rgba(0,0,0,1)]">
                        {title}
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
            <div className="max-w-7xl mx-auto flex justify-between items-end px-6">
                <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.4em] italic drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
                    {dockType === 'sectors' ? "LOOK WHAT'S IN FOR YOUR BUSINESS" : "SYSTEM_AUTHENTICATION_ACTIVE"}
                </span>
                <span className="text-[8px] font-mono text-white/40 uppercase">MM_SOVEREIGN_V11.9_MASTER</span>
            </div>
            <TechnicalDock accentColor={accentColor} variant={dockVariant} type={dockType} />
        </div>
    </section>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-50">
            <SiteHeader />

            <main className="flex-1">
                
                {/* 01. AZURE: THE ANALYST */}
                <CommandHero 
                    badge="ARCHETYPE 01: THE ANALYST"
                    title="CAPTURE MEMORY."
                    subtitle="Institutional memory is an asset. Anything else is just luck."
                    accentColor="#38bdf8"
                    layout="centered"
                    dockType="intelligence"
                />

                {/* 02. GOLDEN: THE SOVEREIGN */}
                <CommandHero 
                    badge="ARCHETYPE 02: THE SOVEREIGN"
                    title="REMOTE COMMAND."
                    subtitle="Make sure every task is done right, even when you aren't there."
                    accentColor="#fbbf24"
                    layout="left"
                    dockType="sectors"
                    dockVariant="glass"
                />

                {/* 03. EMERALD: THE COMMANDER */}
                <CommandHero 
                    badge="ARCHETYPE 03: THE COMMANDER"
                    title="TOTAL CONTROL."
                    subtitle="Stop the daily stress. Make your business run itself. No more management gaps."
                    accentColor="#107c10"
                    layout="centered"
                    dockType="intelligence"
                />

                {/* 04. SUNSET: THE INDEPENDENT */}
                <CommandHero 
                    badge="ARCHETYPE 04: THE INDEPENDENT"
                    title="OWN IT FOREVER."
                    subtitle="No monthly fees. No SaaS lock-in. Buy it once, own your system forever."
                    accentColor="#f97316"
                    layout="left"
                    dockType="sectors"
                    dockVariant="glass"
                />

                {/* 05. INDIGO: THE STANDARD */}
                <CommandHero 
                    badge="ARCHETYPE 05: THE STANDARD"
                    title="RETAIN SECRETS."
                    subtitle="Don't let your best secrets leave when staff resign."
                    accentColor="#6366f1"
                    layout="centered"
                    dockType="sectors"
                />

                {/* 06. SLATE: THE SCALER */}
                <CommandHero 
                    badge="ARCHETYPE 06: THE SCALER"
                    title="AUDIT READY."
                    subtitle="Deploy ISO, HACCP, and OSHA-aligned protocols built for execution."
                    accentColor="#64748b"
                    layout="centered"
                    dockType="intelligence"
                />

            </main>

            <Footer />
        </div>
    );
}
