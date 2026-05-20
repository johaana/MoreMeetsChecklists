'use server';
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
    X,
    ShieldCheck,
    Target,
    Cpu,
    Smartphone,
    AlertTriangle,
    Zap,
    Scale,
    CheckCircle2,
    LayoutGrid,
    ChevronRight,
    Terminal,
    Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const NARRATIVE = {
    line1: "YOUR BUSINESS",
    line2: "SHOULD NOT RUN",
    line3: "ON MEMORY.",
    subline: "Pre-built operational systems that turn SOPs into live daily execution.",
    meta: "BUILT IN EXCEL • OPERATED THROUGH GOOGLE SHEETS • READY IN 10 MINUTES.",
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
            <div className="space-y-1 border-l-2 border-emerald-500 pl-6">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-[10px] uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className="w-full relative overflow-hidden bg-black min-h-screen flex flex-col justify-center border-y border-white/5">
            {children}
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-black text-white font-sans selection:bg-emerald-500/30">
            
            <div className="container px-6 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v1.0
                </Badge>
                <h1 className="text-7xl font-black font-headline italic uppercase tracking-tighter leading-tight text-white">
                    One Glance <span className="text-emerald-500">Archetypes</span>.
                </h1>
            </div>

            {/* --- ARCHETYPE 01: THE SYMMETRIC DOCK (RECOMMENDED) --- */}
            <LabSection id="opt-1" title="01. The Symmetric Dock" description="Right-aligned 2-column technical grid for sectors. Cuts vertical height by 50% while projecting 'switchboard' authority.">
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
                </div>
                <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-[1fr,550px] gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-[64px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    {NARRATIVE.line1} <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line2}</span> <br/> <span style={{ color: BRAND_GREEN }}>{NARRATIVE.line3}</span>
                                </h1>
                                <p className="text-lg italic font-medium text-zinc-400 max-w-lg leading-tight">{NARRATIVE.subline}</p>
                                <div className="border-l-2 border-primary/40 pl-6 py-0.5">
                                    <p className="text-[11px] font-black text-zinc-600 uppercase tracking-widest italic">{NARRATIVE.meta}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-8">
                                <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-base">
                                    <Link href="#">{NARRATIVE.cta} <ArrowRight className="ml-2 w-5 h-5" /></Link>
                                </Button>
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black italic">{NARRATIVE.price}</span>
                                    <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest italic">ONE-TIME</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
                            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] italic mb-6">SELECT OPERATIONAL VERTICAL</p>
                            <div className="grid grid-cols-2 gap-3">
                                {ELITE_INDUSTRIES.map((ind) => (
                                    <Link key={ind.id} href="#" className="p-3 rounded-lg border border-white/5 bg-white/[0.01] hover:bg-primary/10 hover:border-primary/30 transition-all group">
                                        <span className="text-[10px] font-black uppercase italic text-zinc-500 group-hover:text-primary transition-colors">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 02: THE MONOLITH (CENTERED) --- */}
            <LabSection id="opt-2" title="02. The Monolith" description="Centered high-gravity mandate. Best for absolute brand authority.">
                <div className="absolute inset-0 z-0">
                    <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
                </div>
                <div className="relative z-10 container mx-auto max-w-[900px] text-center space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-[80px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                            YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                        </h1>
                        <p className="text-xl italic font-medium text-zinc-400 mx-auto max-w-2xl">{NARRATIVE.subline}</p>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                         <div className="flex items-center gap-10 text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em] italic">
                            <span>BUILT IN EXCEL</span>
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>GOOGLE SHEETS NATIVE</span>
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span>10 MINUTE DEPLOY</span>
                        </div>
                        <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-primary text-black font-black uppercase italic text-xl shadow-2xl">
                            <Link href="#">START DEPLOYMENT: {NARRATIVE.price}</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-10 w-full overflow-hidden flex items-center h-12 bg-white/[0.02] border-y border-white/5">
                     <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
                        {ELITE_INDUSTRIES.map((ind) => (
                            <span key={ind.id} className="text-[10px] font-black uppercase italic tracking-[0.4em] text-zinc-500">{ind.name}</span>
                        ))}
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 03: THE TACTICAL HUD --- */}
            <LabSection id="opt-3" title="03. The Tactical HUD" description="Using technical borders and monospaced telemetry to project 'Engine' status.">
                <div className="relative h-full flex flex-col justify-center px-24">
                     <div className="border border-white/10 rounded-[3rem] p-16 grid grid-cols-[1fr,450px] gap-20 items-center bg-black/40 backdrop-blur-md">
                        <div className="space-y-12">
                             <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest">SYSTEM_STATUS: ONLINE</span>
                                </div>
                                <h1 className="text-7xl font-black font-headline leading-[0.9] uppercase italic tracking-tighter">
                                    DEPLOY <br/> <span style={{ color: BRAND_GREEN }}>OPERATIONAL</span> <br/> INFRASTRUCTURE.
                                </h1>
                             </div>
                             <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-8">
                                {[
                                    { l: "LOG TYPE", v: "AUDIT-READY" },
                                    { l: "FORMAT", v: "EXCEL / SHEETS" },
                                    { l: "SOP COUNT", v: "120+ PRE-BUILT" },
                                    { l: "DEPLOY TAT", v: "10 MINUTES" }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-[8px] font-black text-zinc-600 uppercase tracking-widest">{item.l}</p>
                                        <p className="text-sm font-black italic uppercase text-white">{item.v}</p>
                                    </div>
                                ))}
                             </div>
                             <SovereignCTA />
                        </div>
                        <div className="space-y-6">
                            <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">SELECT COMMAND SECTOR</p>
                            <div className="flex flex-col gap-2">
                                {ELITE_INDUSTRIES.slice(0, 7).map((ind) => (
                                    <div key={ind.id} className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.02] rounded-xl group hover:border-primary/40 transition-all cursor-pointer">
                                        <span className="text-sm font-bold uppercase italic text-zinc-500 group-hover:text-white transition-colors">{ind.name}</span>
                                        <ArrowRight className="w-4 h-4 text-zinc-800 group-hover:text-primary transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                     </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 04: THE TENSION SPLIT --- */}
            <LabSection id="opt-4" title="04. The Tension Split" description="Hard contrast between Problem (Left) and Solution (Right).">
                <div className="flex h-full">
                    <div className="w-1/2 bg-zinc-950 flex flex-col justify-center px-24 space-y-10 border-r border-white/5">
                        <div className="space-y-4">
                            <Badge className="bg-red-500/10 text-red-500 border-red-500/20 uppercase font-black tracking-widest text-[10px]">THE ANXIETY</Badge>
                            <h2 className="text-5xl font-black font-headline text-white leading-tight uppercase italic tracking-tighter">
                                ALWAYS CHASING <br/> YOUR TEAM?
                            </h2>
                            <p className="text-lg text-zinc-500 italic font-medium leading-relaxed">
                                Most businesses run on memory and luck. When the hero resigns, the system breaks.
                            </p>
                        </div>
                        <ul className="space-y-4">
                            {["Work gets missed.", "Confusion on the floor.", "Audit anxiety."].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-zinc-600 font-bold italic uppercase text-sm">
                                    <X className="w-5 h-5 text-red-500" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/2 bg-black flex flex-col justify-center px-24 space-y-10 relative">
                         <div className="absolute inset-0 z-0 opacity-20">
                            <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                         </div>
                         <div className="relative z-10 space-y-10">
                            <div className="space-y-4">
                                <Badge className="bg-primary/10 text-primary border-primary/20 uppercase font-black tracking-widest text-[10px]">THE ANTIDOTE</Badge>
                                <h2 className="text-5xl font-black font-headline text-white leading-tight uppercase italic tracking-tighter">
                                    DEPLOY THE <br/> <span style={{ color: BRAND_GREEN }}>SOVEREIGN ENGINE.</span>
                                </h2>
                                <p className="text-lg text-zinc-400 italic font-medium leading-relaxed">
                                    Turn SOPs into live daily execution using the tools your team already understands.
                                </p>
                            </div>
                            <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-2xl">
                                <Link href="#">START DEPLOYMENT: {NARRATIVE.price}</Link>
                            </Button>
                         </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 05: THE ARCHITECTURAL MINIMALIST --- */}
            <LabSection id="opt-5" title="05. The Architectural Minimalist" description="Prestigious line-art style. Focus on technical clarity and whitespace.">
                <div className="relative h-full container mx-auto max-w-[1200px] px-6 grid grid-cols-[1fr,400px] gap-20 items-center">
                    <div className="space-y-16">
                        <div className="space-y-8">
                             <h1 className="text-[100px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                                CAPTURE <br/> <span style={{ color: BRAND_GREEN }}>MEMORY.</span>
                             </h1>
                             <p className="text-2xl text-zinc-500 italic font-medium max-sm border-l border-zinc-800 pl-10 leading-relaxed">
                                Institutional memory is an asset. <br/> Anything else is just luck.
                             </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {[
                                { t: "120+ PRE-BUILT SOPs", i: LayoutGrid },
                                { t: "AUDIT-READY COMPLIANCE", i: ShieldCheck },
                                { t: "LIVE DASHBOARD PULSE", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6">
                                    <item.i className="w-5 h-5 text-zinc-700" />
                                    <span className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">{item.t}</span>
                                </div>
                            ))}
                        </div>
                        <Button asChild size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic">
                            <Link href="#">DEPLOY NOW: {NARRATIVE.price}</Link>
                        </Button>
                    </div>
                    <div className="border-l border-white/5 p-1 space-y-12 pl-20">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                        <div className="space-y-6">
                             {ELITE_INDUSTRIES.slice(0, 6).map((ind) => (
                                <Link key={ind.id} href="#" className="block text-2xl font-bold uppercase italic text-zinc-800 hover:text-primary transition-all hover:translate-x-3">
                                    {ind.name}
                                </Link>
                             ))}
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 06: THE ACTION-FIRST HUD --- */}
            <LabSection id="opt-6" title="06. The Action-First HUD" description="Consolidates price, speed, and platform into one decision block.">
                <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
                    <div className="max-w-4xl space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-7xl md:text-[94px] font-black font-headline leading-none uppercase italic tracking-tighter">
                                STOP THE <span className="text-red-600">CHAOS.</span> <br/>
                                <span style={{ color: BRAND_GREEN }}>START THE ENGINE.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 italic font-medium max-w-2xl mx-auto">{NARRATIVE.subline}</p>
                        </div>

                        <div className="inline-flex flex-col md:flex-row items-center gap-2 p-3 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl">
                             <div className="flex items-center gap-3 px-8 py-4 border-r border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Smartphone className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">WORKS ON</p>
                                    <p className="text-[10px] font-black uppercase text-white italic">IPHONE & ANDROID</p>
                                </div>
                             </div>
                             <div className="flex items-center gap-3 px-8 py-4 border-r border-white/5">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">DEPLOYMENT</p>
                                    <p className="text-[10px] font-black uppercase text-white italic">10 MINUTES</p>
                                </div>
                             </div>
                             <div className="px-4 pr-1">
                                 <Button asChild size="lg" className="h-16 px-12 rounded-full bg-primary text-black font-black uppercase italic text-base shadow-xl">
                                    <Link href="#">DEPLOY FOR {NARRATIVE.price}</Link>
                                 </Button>
                             </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto opacity-40">
                             {ELITE_INDUSTRIES.slice(0, 4).map((ind) => (
                                <div key={ind.id} className="text-[9px] font-black uppercase tracking-widest border border-white/10 py-2 rounded-full italic">{ind.name}</div>
                             ))}
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 07: THE CATEGORY CHAMBERS --- */}
            <LabSection id="opt-7" title="07. The Category Chambers" description="Grouping sectors into technical modules to project massive organizational breadth in one glance.">
                 <div className="relative h-full container mx-auto max-w-[1200px] px-6 py-12 flex flex-col justify-center gap-12">
                    <div className="grid lg:grid-cols-[1fr,350px] gap-12 items-end">
                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                OPERATIONAL <br/> <span style={{ color: BRAND_GREEN }}>SYSTEMS</span> <br/> <span style={{ color: BRAND_GREEN }}>HUB.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 italic font-medium max-w-xl">{NARRATIVE.subline}</p>
                        </div>
                        <SovereignCTA className="text-right" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {[
                            { c: "Hospitality", i: ["Hotels", "Restaurants"] },
                            { c: "Retail", i: ["Jewellery", "Grocery", "Fashion", "Electronics"] },
                            { c: "Healthcare", i: ["Hospitals", "Clinics"] },
                            { c: "Education", i: ["Schools", "Universities"] },
                            { c: "Infrastructure", i: ["Facilities", "Logistics"] }
                        ].map((chamber, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-4 hover:border-primary transition-all group">
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] italic">{chamber.c}</p>
                                <ul className="space-y-1">
                                    {chamber.i.map((item, j) => (
                                        <li key={j} className="text-xs font-bold uppercase italic text-zinc-600 group-hover:text-white transition-colors">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                 </div>
            </LabSection>

        </div>
    );
}

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-5", className)}>
        <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white transition-all border-none group">
            <Link href="/library">
                DEPLOY THE SYSTEM <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
        <div className="space-y-1 pl-1">
             <p className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                {NARRATIVE.meta}
            </p>
        </div>
    </div>
);
