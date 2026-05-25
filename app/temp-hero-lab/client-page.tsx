'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    CheckSquare,
    Shield,
    Infinity,
    Grid3X3,
    Command,
    Smartphone,
    ChevronRight,
    Target,
    Activity,
    GraduationCap,
    FileSignature,
    ShieldAlert,
    LayoutGrid,
    Clock,
    UserCheck,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BRAND_GREEN = "#22C55E";
const CALENDLY_URL = "https://calendly.com/more-moremeets/30min";
const PRICING_STRIP = "ONE-TIME PURCHASE • OWN FOREVER • NO MONTHLY FEES";

const ELITE_INDUSTRIES = [
    { name: "Hotel Operations", id: "hotels_and_resorts" },
    { name: "Restaurant Operations", id: "restaurants" },
    { name: "Jewellery Store Operations", id: "retail_jewellery_operations_pack" },
    { name: "Grocery Store Operations", id: "supermarket_grocery_retail_pack" },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations" },
    { name: "School Operations", id: "school_operations_pack" },
    { name: "Franchise Operations", id: "franchise_operations_pack" },
    { name: "Facilities Operations", id: "facility_management_blueprint" },
    { name: "Multiplex Operations", id: "cinema_operations_pack" }
];

const ActionBlock = ({ centered = false }: { centered?: boolean }) => (
    <div className={cn("flex flex-col gap-4 md:gap-6", centered ? "items-center" : "items-start")}>
        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl bg-primary text-black font-black uppercase italic text-[10px] md:text-[11px] tracking-widest shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:scale-[1.02] transition-all border-none group">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </button>
            <button className="w-full sm:w-auto h-12 md:h-14 px-8 md:px-10 rounded-xl border border-white/30 text-white/90 font-black uppercase italic text-[10px] md:text-[11px] tracking-widest hover:bg-zinc-800 hover:text-white transition-all bg-transparent">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </button>
        </div>
        <div className={cn("space-y-1.5 md:space-y-2", centered ? "text-center" : "text-left")}>
            <Link href={CALENDLY_URL} target="_blank" className="group flex items-center gap-2 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] text-white/20 hover:text-primary transition-colors">
                <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
                <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </div>
);

const MovingStrip = () => (
    <div className="absolute bottom-0 w-full overflow-hidden flex flex-col items-center bg-black/80 backdrop-blur-md border-t border-white/5 z-40">
         <div className="w-full py-2 bg-white/[0.02] border-b border-white/5 text-center">
            <p className="text-[8px] md:text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] italic">{PRICING_STRIP}</p>
         </div>
         <div className="w-full h-10 md:h-12 flex items-center">
            <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
                {ELITE_INDUSTRIES.map((ind) => (
                    <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                    </Link>
                ))}
                {/* Loop Replication */}
                {ELITE_INDUSTRIES.map((ind) => (
                    <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                        <span className="text-[9px] font-black uppercase italic tracking-[0.4em] text-zinc-700 group-hover/link:text-primary transition-colors">{ind.name}</span>
                        <ChevronRight className="w-3 h-3 text-zinc-900 group-hover/link:text-primary" />
                    </Link>
                ))}
            </div>
         </div>
    </div>
);

const AtmosphericHero = ({ children, id, label }: { children: React.ReactNode, id: string, label: string }) => (
    <div className="w-full py-6 md:py-12 border-b border-white/5 bg-[#050505]">
        <div className="container px-6 mx-auto mb-6 md:mb-12 flex justify-between items-center relative z-50">
            <h2 className="text-[10px] md:text-sm font-black uppercase italic tracking-tighter font-headline text-emerald-500">Variation {id}: {label}</h2>
             <div className="flex items-center gap-2 md:gap-3">
                <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                <div className="flex flex-col">
                    <span className="font-headline text-[10px] md:text-xs font-bold leading-none tracking-tight text-white uppercase">MoreMeets™</span>
                    <span className="text-[6px] md:text-[7px] font-black uppercase tracking-[0.2em] text-white/40 leading-none mt-1">WHERE SOPs MEET EXECUTION</span>
                </div>
            </div>
        </div>
        <div className="w-full relative overflow-hidden min-h-[100svh] md:h-auto md:min-h-[90svh] flex flex-col justify-center border-y border-white/5 bg-black pb-24 md:pb-32 pt-4 md:pt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
            <div className="relative z-10 container mx-auto max-w-[1200px] px-6 h-full flex flex-col justify-center">
                {children}
            </div>
            <MovingStrip />
        </div>
    </div>
);

const MobileFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="relative mx-auto w-full max-w-[280px] h-[580px] md:max-w-[320px] md:h-[650px] bg-[#0F172A] rounded-[3rem] border-[8px] border-[#1E293B] shadow-[0_0_100px_-20px_rgba(34,197,94,0.2)] overflow-hidden flex flex-col">
        {/* Device Top Bar */}
        <div className="h-6 flex items-center justify-between px-8 pt-2">
            <span className="text-[8px] font-bold text-white/30">9:41</span>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
        </div>
        {/* Screen Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar bg-[#f8f9fa]">
            {children}
        </div>
        {/* Device Home Indicator */}
        <div className="h-6 flex justify-center items-center pb-2">
            <div className="w-20 h-1 rounded-full bg-white/10" />
        </div>
    </div>
);

const MobileLedgerPreview = () => (
    <div className="flex flex-col">
        <div className="bg-[#22C55E] text-white p-3 flex items-center justify-center gap-2">
            <CheckSquare className="w-3 h-3" />
            <span className="text-[9px] font-bold uppercase tracking-tight">DAILY_TASKS_LEDGER</span>
        </div>
        
        <div className="p-4 space-y-3">
            {[
                { r: "General Manager", t: "Revenue Reconcile", s: "COMPLETE", st: "19:53:25" },
                { r: "Front Office", t: "C-Form Compliance", s: "COMPLETE", st: "09:12:04" },
                { r: "Chef", t: "HACCP Thermal Pulse", s: "OPEN", st: "" },
                { r: "Security", t: "Egress Safety Sweep", s: "COMPLETE", st: "08:15:30" },
                { r: "Housekeeping", t: "Room Release Audit", s: "OPEN", st: "" }
            ].map((task, i) => (
                <div key={i} className="bg-white border border-zinc-200 rounded-xl p-3 shadow-sm flex flex-col gap-2 relative overflow-hidden">
                    {task.s === "COMPLETE" && <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />}
                    <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                            <p className="text-[7px] font-black text-zinc-400 uppercase tracking-widest leading-none">{task.r}</p>
                            <p className="text-[11px] font-black text-zinc-950 uppercase italic leading-tight">{task.t}</p>
                        </div>
                        <Badge className={cn(
                            "text-[7px] font-black uppercase px-1.5 py-0.5 rounded-none",
                            task.s === "COMPLETE" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-zinc-100 text-zinc-400 border-zinc-200"
                        )}>
                            {task.s}
                        </Badge>
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-zinc-100">
                         <span className="text-[8px] font-mono text-zinc-300 italic">{task.st ? `STAMP: ${task.st}` : "AWAITING_INITIALS"}</span>
                         <div className="w-6 h-6 rounded bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-300 text-[8px] font-black">
                            {task.s === "COMPLETE" ? "✓" : ""}
                         </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    const proofPoints = [
        "Daily tasks assigned automatically",
        "Staff know exactly what to do",
        "Managers can track completion live",
        "Works on phones via Google Sheets",
        "Ready in 10 minutes",
        "No app installation required"
    ];

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500/30 pb-40">
            
            <div className="container px-6 pt-24 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN DESIGN LAB v24.0
                </Badge>
                <h1 className="text-4xl md:text-5xl font-black font-headline italic uppercase tracking-tighter text-white">
                    Institutional <span className="text-emerald-500">Choice Engine</span>
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-xl mx-auto">Select the identity and mobile architecture that matches your operational gravity.</p>
            </div>

            {/* --- LOGO DESIGN LAB --- */}
            <div className="container px-6 py-20 mx-auto space-y-12 border-b border-white/5">
                <div className="text-center space-y-3">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">BRAND IDENTITY OPTIONS</Badge>
                    <h2 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-white">Choose Your Vision</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[
                        { label: "Standard", desc: "Reliable Baseline", icon: CheckSquare },
                        { label: "Pivot", desc: "Geometric Command", icon: Command },
                        { label: "Shield", desc: "Risk Governance", icon: Shield },
                        { label: "Continuity", desc: "Sovereign Memory", icon: Infinity },
                        { label: "The Mandate", desc: "WHERE SOPs MEET EXECUTION", icon: CheckCircle2, accent: true }
                    ].map((opt, i) => (
                        <div key={i} className={cn(
                            "p-8 rounded-3xl border flex flex-col items-center text-center gap-4 transition-all duration-500 group relative",
                            opt.accent ? "bg-emerald-500/5 border-emerald-500/30 shadow-[0_0_50px_-10px_rgba(34,197,94,0.2)]" : "bg-white/[0.02] border-white/5 hover:border-primary/30"
                        )}>
                            <opt.icon className={cn(
                                "w-10 h-10 transition-all duration-700",
                                opt.accent ? "text-emerald-500" : "text-primary/40 group-hover:text-primary group-hover:scale-110"
                            )} />
                            <div className="space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-[12px] font-black font-headline uppercase leading-none tracking-tight text-white">{opt.label}</span>
                                    <span className="text-[7px] font-black uppercase tracking-[0.2em] text-zinc-500 mt-1">MoreMeets™</span>
                                </div>
                                <p className={cn(
                                    "text-[9px] font-bold uppercase tracking-widest leading-relaxed",
                                    opt.accent ? "text-emerald-400" : "text-zinc-600"
                                )}>{opt.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- MOBILE ARCHITECTURE LAB --- */}
            <div className="container px-6 py-20 mx-auto space-y-16 border-b border-white/5">
                <div className="text-center space-y-3">
                    <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.4em] font-black text-[10px]">MOBILE SYMMETRIC GRID</Badge>
                    <h2 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-white">Device Interaction Frames</h2>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-20">
                    {[
                        { t: "The Ledger", d: "High-density task focus for staff logging." },
                        { t: "The Dashboard", d: "Executive vitals view for owners." },
                        { t: "The Instructions", d: "Hidden-layer SOP guidance view." }
                    ].map((opt, i) => (
                        <div key={i} className="space-y-8 flex flex-col items-center">
                            <MobileFrame>
                                {i === 0 && <MobileLedgerPreview />}
                                {i === 1 && (
                                    <div className="p-6 space-y-8 bg-zinc-50 h-full">
                                        <div className="flex items-center gap-3 mb-4">
                                             <Activity className="w-5 h-5 text-emerald-600" />
                                             <span className="text-xs font-black uppercase tracking-widest text-zinc-900">SYSTEM_VITALS</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[
                                                { l: "COMPLETION", v: "87%", c: "text-emerald-600" },
                                                { l: "PENDING", v: "04", c: "text-amber-500" },
                                                { l: "ESCALATIONS", v: "02", c: "text-red-500" },
                                                { l: "STAFF_SYNC", v: "LIVE", c: "text-blue-500" }
                                            ].map((s, j) => (
                                                <div key={j} className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100 flex flex-col gap-1">
                                                    <span className="text-[7px] font-black text-zinc-400 uppercase tracking-widest">{s.l}</span>
                                                    <span className={cn("text-xl font-black italic", s.c)}>{s.v}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-white p-5 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
                                            <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">REGIONAL DRIFT</p>
                                            <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500 w-[87%]" />
                                            </div>
                                            <p className="text-[10px] font-bold text-zinc-600 italic">"Ghatkopar West lagging in evening sweep compliance."</p>
                                        </div>
                                    </div>
                                )}
                                {i === 2 && (
                                    <div className="p-8 bg-zinc-950 h-full text-white space-y-8">
                                         <div className="space-y-2 pt-4">
                                            <Badge variant="outline" className="text-primary border-primary/20 uppercase text-[8px] font-black">J-VLT-01 • INSTRUCTIONS</Badge>
                                            <h3 className="text-xl font-black italic uppercase tracking-tighter">Vault Opening (Dual Auth)</h3>
                                         </div>
                                         <div className="space-y-6">
                                            <div className="space-y-1.5">
                                                <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">STEP-BY-STEP ACTION</p>
                                                <p className="text-xs font-medium italic text-zinc-400 leading-relaxed">Execute 2-key entry sequence with Secondary Custodian. Physically inspect safe handle for any tamper-signs from previous night. Log exact entry timestamp.</p>
                                            </div>
                                            <div className="p-5 bg-red-500/10 border-l-2 border-red-500 rounded-r-xl space-y-1.5">
                                                <p className="text-[8px] font-black text-red-500 uppercase tracking-widest">RISK IF MISSED</p>
                                                <p className="text-[10px] font-black italic uppercase leading-tight text-white/90">Unauthorized lone-person access leads to untraceable inventory exfiltration.</p>
                                            </div>
                                         </div>
                                         <button className="h-10 border border-white/10 rounded-xl w-full text-[9px] font-black uppercase tracking-widest text-zinc-500">
                                            Return to Ledger
                                         </button>
                                    </div>
                                )}
                            </MobileFrame>
                            <div className="text-center space-y-1">
                                <p className="text-sm font-black uppercase italic tracking-tighter text-white">{opt.t}</p>
                                <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-none">{opt.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- HERO VAR: THE REPORTING CHASE --- */}
            <AtmosphericHero id="07" label="The Reporting Chase (Target Segment)">
                <div className="relative">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] gap-6 lg:gap-16 items-start lg:items-center h-full">
                        
                        <div className="order-1 space-y-3 md:space-y-6">
                            <h1 className="text-[26px] md:text-[60px] font-black font-headline leading-[1] md:leading-[0.9] uppercase italic tracking-tighter">
                                <span className="md:hidden block whitespace-nowrap">STOP THE REPORTING <span className="text-red-500">CHASE.</span></span>
                                <span className="hidden md:inline">STOP THE <br/> REPORTING <br/> <span className="text-red-500">CHASE.</span></span>
                            </h1>
                            <p className="text-zinc-400 text-[14px] md:text-xl font-medium italic border-l-2 border-primary/20 pl-6 max-w-xl leading-relaxed">
                                Stop chasing staff on calls or WhatsApp and start seeing real-time reporting from your phone. Even when you aren't there.
                            </p>
                        </div>
                        
                        <div className="order-2 lg:order-none relative w-full lg:col-start-2 lg:row-start-1 lg:row-span-2">
                             <div className="absolute inset-0 bg-primary/5 rounded-2xl md:rounded-3xl lg:-rotate-1" />
                             <div className="relative p-6 md:p-10 rounded-2xl md:rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl space-y-4 md:space-y-8 overflow-hidden shadow-2xl">
                                <div className="space-y-1.5 md:space-y-2">
                                    <p className="text-[8px] md:text-[9px] font-black text-primary uppercase tracking-[0.4em] italic font-headline leading-none">THE MANDATE</p>
                                    <p className="text-[12px] md:text-sm font-black italic uppercase text-white/90 leading-tight">YOUR BUSINESS SHOULD NOT RUN ON MEMORY.</p>
                                </div>
                                
                                <div className="flex flex-col gap-2 pt-2">
                                    {proofPoints.map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/[0.03] px-4 py-3 rounded-xl border border-white/5 shadow-inner">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-primary" />
                                            </div>
                                            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest italic text-zinc-300 leading-none">{item}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>

                        <div className="order-3 lg:order-none w-full lg:col-start-1 lg:row-start-2 pt-2 lg:pt-0">
                            <ActionBlock />
                        </div>
                    </div>
                </div>
            </AtmosphericHero>

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
