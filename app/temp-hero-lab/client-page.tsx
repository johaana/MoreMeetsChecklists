
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckCircle2,
    Smartphone,
    Lock,
    Target,
    Activity,
    GraduationCap,
    ChevronRight,
    ShieldCheck,
    AlertTriangle,
    Users,
    FileSignature,
    SearchCheck,
    Clock,
    LayoutGrid,
    CheckSquare,
    Shield,
    Infinity,
    Maximize,
    Grid3X3,
    Command,
    Home,
    MessageSquare,
    ClipboardCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BRAND_GREEN = "#22C55E";
const CALENDLY_URL = "https://calendly.com/more-moremeets/30min";

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

const PROOF_POINTS = [
    "Daily tasks assigned automatically",
    "Staff know exactly what to do",
    "Managers track completion live",
    "Works on phones via Google Sheets",
    "Ready in 10 minutes",
    "No app installation required"
];

// --- COMPONENT: LOGO DESIGN LAB ---
const LogoLab = () => {
    const options = [
        { label: "Option A", desc: "The Current Standard", icon: CheckSquare },
        { label: "Option B", desc: "Geometric Pivot", icon: Command },
        { label: "Option C", desc: "Institutional Shield", icon: Shield },
        { label: "Option D", desc: "Operational Continuity", icon: Infinity },
        { label: "Option E", desc: "Precision Grid", icon: Grid3X3 }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {options.map((opt, i) => (
                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-3 group hover:border-primary/30 transition-all">
                    <opt.icon className="w-8 h-8 text-primary/40 group-hover:text-primary group-hover:scale-110 transition-all" />
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase text-primary">{opt.label}</p>
                        <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">{opt.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- COMPONENT: ACTION BLOCK (Standardized) ---
const ActionBlock = ({ centered = false }: { centered?: boolean }) => (
    <div className={cn("flex flex-col gap-6", centered ? "items-center" : "items-start")}>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-[11px] tracking-widest shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all border-none">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-10 rounded-xl border-white/20 text-white/90 font-black uppercase italic text-[11px] tracking-widest hover:bg-zinc-800 hover:text-white transition-all bg-transparent">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </Button>
        </div>
        <Link href={CALENDLY_URL} target="_blank" className="group flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.15em] text-white/20 hover:text-primary transition-colors">
            <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
    </div>
);

// --- COMPONENT: MOVING STRIP (Standardized) ---
const MovingStrip = () => (
    <div className="absolute bottom-0 w-full overflow-hidden flex items-center h-12 bg-black/80 backdrop-blur-md border-t border-white/5 z-40">
         <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
            {ELITE_INDUSTRIES.map((ind) => (
                <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                </Link>
            ))}
            {/* Duplicate for seamless loop */}
            {ELITE_INDUSTRIES.map((ind) => (
                <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                    <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                </Link>
            ))}
         </div>
    </div>
);

// --- COMPONENT: ATMOSPHERIC WRAPPER ---
const AtmosphericHero = ({ children, id, label }: { children: React.ReactNode, id: string, label: string }) => (
    <div className="w-full py-12 border-b border-white/5 bg-[#050505]">
        <div className="container px-6 mx-auto mb-8">
            <h2 className="text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">Variation {id}: {label}</h2>
        </div>
        <div className="w-full relative overflow-hidden min-h-[85vh] flex flex-col justify-center border-y border-white/5 bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15)_0%,transparent_60%)]" />
            <div className="relative z-10 container mx-auto max-w-[1200px] px-6">
                {children}
            </div>
            <MovingStrip />
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
            
            <div className="container px-6 pt-24 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v12.0
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase tracking-tighter text-white">
                    Operational <span className="text-emerald-500">Design Selection</span>
                </h1>
            </div>

            {/* --- VAR 1: THE MONOLITH (Standard) --- */}
            <AtmosphericHero id="01" label="The Centered Monolith">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.3em] font-black text-[9px] rounded-none py-1.5 px-4 mb-2">
                             ONE-TIME PURCHASE • OWN FOREVER • NO MONTHLY FEES
                        </Badge>
                        <h1 className="text-[42px] md:text-[72px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter">
                            YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                        </h1>
                        <p className="text-lg md:text-2xl italic font-medium text-zinc-400 max-w-2xl mx-auto leading-tight">
                            Stop depending on memory and verbal follow-ups. <br/>
                            Daily operations your staff will actually follow.
                        </p>
                    </div>
                    <ActionBlock centered />
                </div>
            </AtmosphericHero>

            {/* --- VAR 2: THE COMMAND SPLIT (The Winner) --- */}
            <AtmosphericHero id="02" label="The Command Split (High Trust)">
                <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12 lg:gap-20 items-center">
                    <div className="space-y-10 text-left">
                        <div className="space-y-5">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.3em] font-black text-[9px] rounded-none py-1.5 px-4 mb-2">
                                ONE-TIME PURCHASE • OWN FOREVER • NO MONTHLY FEES
                            </Badge>
                            <h1 className="text-[42px] md:text-[64px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-2xl italic font-medium text-zinc-400 max-w-xl leading-tight">
                                Stop depending on memory and verbal follow-ups. <br/>
                                Daily operations your staff will actually follow.
                            </p>
                        </div>
                        <ActionBlock />
                    </div>
                    <div className="hidden lg:block relative">
                        <div className="absolute -inset-10 blur-[80px] opacity-10 bg-primary rounded-full" />
                        <div className="relative p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-8">
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] font-headline">BUILT FOR DAILY EXECUTION</p>
                                <h3 className="text-xl font-black italic uppercase text-white/90">Institutional Grade.</h3>
                            </div>
                            <div className="space-y-4">
                                {PROOF_POINTS.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-2.5 h-2.5 text-primary" />
                                        </div>
                                        <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- VAR 3: THE PRESTIGIOUS MINIMAL --- */}
            <AtmosphericHero id="03" label="The Prestigious Minimal">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="space-y-6">
                        <h1 className="text-[60px] md:text-[100px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white">
                            DEPLOY <br/> <span style={{ color: BRAND_GREEN }}>SYSTEMS.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-500 font-bold italic uppercase tracking-widest">
                            Memory is not a system.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <ActionBlock />
                        <div className="h-px md:h-16 w-32 md:w-px bg-white/10" />
                        <div className="space-y-2 text-left">
                            <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM SPECIFICATIONS</p>
                            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest leading-relaxed">
                                READY IN 10 MINUTES • WORKS ON PHONES • NO MONTHLY FEES
                            </p>
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- VAR 4: THE REALISTIC COMMAND (Remote Oversight) --- */}
            <AtmosphericHero id="04" label="The Realistic Command (Remote Oversight)">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-[40px] md:text-[56px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter">
                                SEE DAILY WORK <br/> GETTING DONE.
                            </h1>
                            <p className="text-xl text-zinc-400 font-medium italic">
                                Even when you aren't there. Stop chasing staff on WhatsApp and start seeing real-time reporting from your phone.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { t: "Pre-built for your industry", i: Home },
                                { t: "Remote reporting from home", i: MessageSquare },
                                { t: "Audit-ready daily logs", i: ClipboardCheck },
                                { t: "WhatsApp-style simplicity", i: Smartphone }
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                                    <feat.i className="w-5 h-5 text-primary" />
                                    <span className="text-[10px] font-black uppercase italic text-zinc-300">{feat.t}</span>
                                </div>
                            ))}
                        </div>
                        <ActionBlock />
                    </div>
                    <div className="relative group">
                         <div className="absolute -inset-1 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                         <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 aspect-video flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <Activity className="w-12 h-12 text-primary mx-auto animate-pulse" />
                                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">LIVE SYSTEM TELEMETRY ACTIVE</p>
                            </div>
                         </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- VAR 5: THE DASHBOARD IMMERSIVE --- */}
            <AtmosphericHero id="05" label="The Dashboard Immersive">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.3em] font-black text-[9px] rounded-none py-1.5 px-4 mb-2">
                             V12.0 MASTER ENGINE ENCRYPTED
                        </Badge>
                        <h1 className="text-[42px] md:text-[80px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-center">
                             CAPTURE <span style={{ color: BRAND_GREEN }}>MEMORY.</span>
                        </h1>
                    </div>
                    
                    <div className="relative mx-auto max-w-4xl rounded-[2rem] overflow-hidden border border-white/10 bg-black/60 backdrop-blur-3xl shadow-2xl p-4 md:p-8">
                        <div className="grid md:grid-cols-[1fr,250px] gap-8">
                            <div className="space-y-6">
                                <div className="h-40 md:h-64 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                                     <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:20px_20px]" />
                                     <LayoutGrid className="w-12 h-12 text-zinc-800" />
                                     <span className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] italic">OPERATIONAL INTERFACE PREVIEW</span>
                                </div>
                                <ActionBlock />
                            </div>
                            <div className="space-y-4 border-l border-white/5 pl-8 hidden md:block">
                                <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em]">UNIT METRICS</p>
                                {[
                                    { l: "Uptime", v: "99.9%" },
                                    { l: "Compliance", v: "100%" },
                                    { l: "Visibility", v: "Remote" }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-[8px] font-bold text-zinc-500 uppercase">{stat.l}</p>
                                        <p className="text-xl font-black italic text-white">{stat.v}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- VAR 6: THE EXECUTIVE MANDATE --- */}
            <AtmosphericHero id="06" label="The Executive Mandate">
                 <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-[38px] md:text-[64px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                            YOUR OPERATIONS. <br/> <span style={{ color: BRAND_GREEN }}>STRUCTURED.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-400 font-bold italic uppercase tracking-widest max-w-xl mx-auto">
                            No IT departments. No consultants. Just a ready operational system for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {[
                            { t: "Pre-built SOPs", i: Target },
                            { t: "Live Tracking", i: Activity },
                            { t: "Audit Ready", i: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center gap-4">
                                <item.i className="w-6 h-6 text-primary/40" />
                                <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-400">{item.t}</span>
                            </div>
                        ))}
                    </div>

                    <ActionBlock centered />
                 </div>
            </AtmosphericHero>

            {/* --- VAR 7: THE TACTICAL GRID --- */}
            <AtmosphericHero id="07" label="The Tactical Grid">
                <div className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 relative z-10">
                            <div className="space-y-4">
                                <h1 className="text-[42px] md:text-[60px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter">
                                    STOP THE <br/> WHATSAPP <br/> <span className="text-red-500">CHASE.</span>
                                </h1>
                                <p className="text-zinc-500 text-lg md:text-xl font-medium italic border-l-2 border-primary/20 pl-6">
                                    Capture every handover, every audit, and every task in one shared ledger. 
                                </p>
                            </div>
                            <ActionBlock />
                        </div>
                        <div className="relative">
                             <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" />
                             <div className="relative p-12 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl space-y-6">
                                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">SYSTEM CAPABILITIES</p>
                                <div className="space-y-4">
                                    {[
                                        "Shift handovers stop getting missed",
                                        "Compliance audits generated daily",
                                        "No app installation required",
                                        "Works on all smartphones",
                                        "Deployed in 10 minutes"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-xs font-bold text-zinc-300 uppercase tracking-widest italic">{item}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

            {/* --- LOGO DESIGN LAB --- */}
            <div className="container px-6 py-32 mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">BRAND IDENTITY LAB</Badge>
                    <h2 className="text-3xl font-black font-headline italic uppercase tracking-tighter">Choose Your Vision</h2>
                </div>
                <LogoLab />
            </div>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </div>
    );
}

