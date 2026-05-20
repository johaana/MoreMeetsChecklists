'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock,
    ClipboardCheck,
    Activity,
    Check,
    ShieldCheck,
    Target,
    Smartphone,
    AlertTriangle,
    Zap,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    FileSignature,
    Users,
    Globe,
    SearchCheck,
    ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const NARRATIVE = {
    line1: "YOUR BUSINESS",
    line2: "SHOULD NOT RUN",
    line3: "ON MEMORY.",
    subline: "Pre-built operational systems that turn SOPs into live daily execution.",
    meta: "AUDIT READY • POWERED BY GOOGLE SHEETS • NO SAAS",
    cta: "Deploy System",
    price: "₹3,499"
};

const ELITE_INDUSTRIES = [
    { name: "Hotel Operations", id: "hotels_and_resorts" },
    { name: "Restaurant Operations", id: "restaurants" },
    { name: "Jewellery Store Operations", id: "retail_jewellery_operations_pack" },
    { name: "Grocery Store Operations", id: "supermarket_grocery_retail_pack" },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations" },
    { name: "School Operations", id: "school_operations_pack" },
    { name: "Franchise Operations", id: "franchise_operations_pack" },
    { name: "Facilities Operations", id: "facility_management_blueprint" },
    { name: "Multiplex Operations", id: "cinema_operations_pack" },
    { name: "Fashion Store Operations", id: "fashion_and_apparel_retail" },
    { name: "Electronics Store Operations", id: "electronics_showroom_pack" }
];

const BRAND_GREEN = "#22C55E";

const LabSection = ({ children, title, description, id }: { children: React.ReactNode, title: string, description: string, id: string }) => (
    <div id={id} className="w-full py-24 border-b border-white/5 space-y-12 bg-zinc-950">
        <div className="container px-6 mx-auto">
            <div className="space-y-1 border-l-2 border-emerald-500 pl-6 text-left">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-[10px] uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className="w-full relative overflow-hidden bg-black min-h-[90vh] flex flex-col justify-center border-y border-white/5">
            {children}
            
            {/* Functional Hyperlinked Marquee Strip */}
            <div className="absolute bottom-0 w-full overflow-hidden flex items-center h-14 bg-black/80 backdrop-blur-md border-t border-white/5 z-20">
                 <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
                    {ELITE_INDUSTRIES.map((ind) => (
                        <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase italic tracking-[0.4em] text-zinc-500 group-hover/link:text-primary transition-colors">{ind.name}</span>
                            <ChevronRight className="w-3 h-3 text-zinc-800 group-hover/link:text-primary" />
                        </Link>
                    ))}
                    {ELITE_INDUSTRIES.map((ind) => (
                        <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase italic tracking-[0.4em] text-zinc-500 group-hover/link:text-primary transition-colors">{ind.name}</span>
                            <ChevronRight className="w-3 h-3 text-zinc-800 group-hover/link:text-primary" />
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-5", className)}>
        <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white transition-all border-none group">
            <Link href="/library">
                DEPLOY THE SYSTEM <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-emerald-500/30">
            
            <div className="container px-6 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v4.0
                </Badge>
                <h1 className="text-5xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-tight text-white">
                    One Glance <span className="text-emerald-500">Refinement</span>.
                </h1>
            </div>

            {/* --- ARCHETYPE 01: THE CLEAN SPLIT --- */}
            <LabSection id="opt-1" title="01. The Clean Split" description="Pure focus on narrative with relocated payload below subline.">
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                    <div className="max-w-3xl space-y-10 text-left">
                        <div className="space-y-6">
                            <h1 className="text-[54px] md:text-[80px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1} <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line2}</span> <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line3}</span>
                            </h1>
                            <div className="space-y-4">
                                <p className="text-xl italic font-medium text-zinc-400 max-w-lg leading-tight">{NARRATIVE.subline}</p>
                                <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-2 rounded-full">
                                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">{NARRATIVE.meta}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-base">
                                <Link href="/library">{NARRATIVE.cta} <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                            <div className="flex flex-col">
                                <span className="text-3xl font-black italic">{NARRATIVE.price}</span>
                                <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest italic">ONE-TIME</span>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 02: THE MONOLITH (RELOCATED PAYLOAD) --- */}
            <LabSection id="opt-2" title="02. The Monolith" description="Centered mandate. Payload moved to a 'System Header' badge. No changes to Option 2 structure.">
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
                </div>
                <div className="relative z-10 container mx-auto max-w-[900px] text-center space-y-12">
                    <div className="space-y-8 flex flex-col items-center">
                        <Badge variant="outline" className="bg-white/5 border-white/10 text-zinc-400 font-black tracking-[0.4em] px-8 py-2 mb-4 italic">
                            {NARRATIVE.meta}
                        </Badge>
                        <h1 className="text-[64px] md:text-[90px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                            {NARRATIVE.line1} <br/> {NARRATIVE.line2} <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line3}</span>
                        </h1>
                        <p className="text-xl italic font-medium text-zinc-400 mx-auto max-w-2xl">{NARRATIVE.subline}</p>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-primary text-black font-black uppercase italic text-xl shadow-2xl">
                            <Link href="/library">START DEPLOYMENT: {NARRATIVE.price}</Link>
                        </Button>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 03: THE ATMOSPHERIC FLOAT --- */}
            <LabSection id="opt-3" title="03. The Atmospheric Float" description="Pill-shaped focus. Industry list removed as requested.">
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black" />
                </div>
                <div className="relative z-10 container mx-auto max-w-[1000px] text-center space-y-12">
                    <div className="space-y-6">
                        <div className="absolute -inset-20 blur-[120px] opacity-10 bg-emerald-500 rounded-full pointer-events-none" />
                        <h1 className="text-[60px] md:text-[84px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white relative z-10">
                             {NARRATIVE.line1} <br/> {NARRATIVE.line2} <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line3}</span>
                        </h1>
                    </div>
                    
                    <div className="max-w-2xl mx-auto space-y-10 relative z-10">
                        <div className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 italic">{NARRATIVE.meta}</span>
                        </div>

                        <p className="text-xl text-zinc-400 italic font-medium leading-relaxed">
                            {NARRATIVE.subline}
                        </p>
                        
                        <div className="pt-4">
                            <SovereignCTA className="flex flex-col items-center" />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 04: THE COMMAND TERMINAL --- */}
            <LabSection id="opt-4" title="04. The Command Terminal" description="Telemetry-heavy. No industry grids. Marquee is the only sector nav.">
                <div className="relative z-10 container mx-auto max-w-[1100px] text-center space-y-16">
                    <div className="space-y-12">
                        <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden max-w-2xl mx-auto">
                            {[
                                { l: "ACCESSIBILITY", v: "POWERED BY GOOGLE SHEETS" },
                                { l: "COMPLIANCE", v: "AUDIT READY" },
                                { l: "LICENSING", v: "NO SAAS" }
                            ].map((item, i) => (
                                <div key={i} className="p-5 bg-black/40 backdrop-blur-md space-y-1">
                                    <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">{item.l}</p>
                                    <p className="text-[9px] font-black uppercase text-emerald-500 italic leading-none">{item.v}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                                <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.4em]">SYSTEM_STABLE_V18.1</span>
                            </div>
                            <h1 className="text-[64px] md:text-[100px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1} <br/> <span style={{ color: BRAND_GREEN }}>MEMORY.</span>
                            </h1>
                        </div>
                    </div>
                    
                    <div className="space-y-10 max-w-xl mx-auto">
                        <p className="text-xl text-zinc-400 italic font-medium leading-relaxed">{NARRATIVE.subline}</p>
                        <SovereignCTA className="flex flex-col items-center" />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 05: PRESTIGIOUS MINIMAL (RELOCATED PAYLOAD) --- */}
            <LabSection id="opt-5" title="05. Prestigious Minimal" description="Payload moved to a subtle metadata anchor below the mandate. No vertical grids.">
                <div className="relative z-10 container mx-auto max-w-[1200px] text-center space-y-20 md:space-y-24">
                    <div className="space-y-10">
                        <h1 className="text-[80px] md:text-[130px] font-black font-headline leading-[0.75] uppercase italic tracking-tighter text-white">
                            SOVEREIGN <br/> <span className="text-zinc-800">OPERATIONS.</span>
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto" />
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl text-zinc-400 font-bold italic uppercase tracking-widest max-w-4xl mx-auto leading-tight">
                                {NARRATIVE.subline}
                            </p>
                            <p className="text-[11px] font-black text-zinc-700 uppercase tracking-[0.6em] italic">
                                {NARRATIVE.meta}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-10">
                        <Button asChild size="lg" className="h-24 px-20 rounded-none bg-white text-black font-black uppercase italic text-2xl hover:bg-primary transition-all shadow-2xl">
                            <Link href="/library">DEPLOY FOR {NARRATIVE.price}</Link>
                        </Button>
                    </div>
                </div>
            </LabSection>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 80s linear infinite;
                }
            `}</style>
        </div>
    );
}
