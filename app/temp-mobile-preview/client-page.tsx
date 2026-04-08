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
    ChevronRight,
    Activity,
    ClipboardCheck,
    ShieldCheck,
    Lock
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

const SYSTEM_SPECS = [
    "120+ PRE-BUILT SOPs",
    "AUDIT-READY COMPLIANCE",
    "LIVE DASHBOARD",
    "NO SaaS. OWN YOUR DATA."
];

const PROOF_STRIP = "WORKS ON EXCEL & SHEETS • OWN FOREVER • NO SaaS";

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-6 w-full mb-32 px-4">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.3em] text-primary border-primary/30 py-1.5 px-6 rounded-none bg-primary/5">
                {title}
            </Badge>
            {subtitle && <p className="text-[9px] text-zinc-500 italic font-black uppercase tracking-[0.4em] pt-2">{subtitle}</p>}
        </div>
        <div className="w-full max-w-[375px] h-[812px] border-[12px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.2)] relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

const MobileHeroBase = ({ variant = 1 }: { variant?: number }) => {
    return (
        <div className="flex flex-col h-full bg-black relative">
            {/* Cinematic Background */}
            <div className="absolute inset-0 z-0">
                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="relative z-10 flex-1 flex flex-col pt-16 pb-6 overflow-hidden">
                <div className="flex-1 grid grid-cols-[40px,1fr] gap-0 h-full">
                    
                    {/* Left: The Structural Divider (Plain as requested) */}
                    <div className="relative h-full flex flex-col items-center">
                        <div className="absolute inset-y-0 w-px bg-primary/20" />
                    </div>

                    {/* Right: The Content Stack */}
                    <div className="flex flex-col space-y-8 pr-6 overflow-y-auto no-scrollbar">
                        
                        {/* 1. Narrative Block */}
                        <div className="space-y-3">
                            <h1 className="text-[2.2rem] font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">
                                CAPTURE <br/><span className="text-primary">MEMORY.</span>
                            </h1>
                            <p className="text-[11px] text-white/40 italic font-medium leading-relaxed max-w-[220px]">
                                Institutional memory is an asset. <br/> Anything else is just luck.
                            </p>
                        </div>

                        {/* 2. System Specifications (Grey + Green Dots) */}
                        <div className="space-y-4">
                            <span className="text-[9px] font-black text-primary uppercase tracking-[0.4em] font-headline">SYSTEM SPECIFICATIONS</span>
                            <div className="space-y-2.5">
                                {SYSTEM_SPECS.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_rgba(46,184,107,0.4)]" />
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] italic text-white/40 leading-none">
                                            {spec}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Industry Vertical Stack (Elite 7) */}
                        <div className="space-y-5 pt-4">
                            <div className="space-y-2">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em] font-headline">SELECT VERTICAL</span>
                                <div className="w-12 h-px bg-primary/20" />
                            </div>
                            
                            <div className="flex flex-col space-y-3.5">
                                {ELITE_INDUSTRIES.map((ind, i) => (
                                    <div key={ind.id} className="group flex items-center gap-2">
                                        <span className={cn(
                                            "text-lg font-black font-headline uppercase italic tracking-tighter transition-all duration-300",
                                            variant === 5 ? "text-primary" : "text-white/20 group-hover:text-primary"
                                        )}>
                                            {ind.name}
                                        </span>
                                        {variant === 2 && <ChevronRight className="w-3 h-3 text-white/5 group-hover:text-primary transition-colors" />}
                                        {variant === 3 && <span className="text-[7px] text-white/10 font-mono tracking-tighter">SEC_0{i+1}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Conversion Footer with Sovereign Proof-Strip */}
                <div className="px-6 mt-4 space-y-4">
                    {/* The Strip */}
                    <div className="bg-white/[0.03] border-y border-white/5 py-3 px-2">
                        <p className="text-[7px] text-white/30 font-black text-center uppercase tracking-[0.25em] italic">
                            {PROOF_STRIP}
                        </p>
                    </div>

                    <Button className="w-full h-14 font-black uppercase italic text-[10px] tracking-[0.2em] rounded-none bg-primary text-black transition-all active:scale-95 border-none shadow-[0_0_30px_-5px_rgba(46,184,107,0.3)]">
                        GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    {/* Native Sovereign Home-Bar */}
                    <div className="flex justify-center pt-2">
                        <div className="w-24 h-1.5 rounded-full bg-primary/40" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function MobilePreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#050505] text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 bg-zinc-950 flex flex-col items-center">
                
                <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 px-4">
                    <div className="space-y-3">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px] px-6 py-1.5 rounded-none bg-primary/5">
                            Sovereign Mobile Lab v10.0
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight text-white font-headline">The Technical Standard</h1>
                    </div>
                    <p className="text-zinc-500 italic font-medium max-w-sm mx-auto leading-relaxed">Refining the Vertical Narrative with grey specifications, green indicators, and the Institutional Proof-Strip.</p>
                </div>

                <PreviewFrame title="Archetype 1: Sovereign Standard" subtitle="Grey specs + Green Dots + Proof Strip">
                    <MobileHeroBase variant={1} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 2: Directed Navigation" subtitle="Added chevron indicators for selection flow">
                    <MobileHeroBase variant={2} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 3: Infrastructure Metadata" subtitle="Sector ID tags [SEC_0X] for technical density">
                    <MobileHeroBase variant={3} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 4: High-Gravity Contrast" subtitle="Maximum focus on the Proof-Strip positioning">
                    <MobileHeroBase variant={4} />
                </PreviewFrame>

                <PreviewFrame title="Archetype 5: Green Mandate" subtitle="Exploring all-active vertical typography">
                    <MobileHeroBase variant={5} />
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
