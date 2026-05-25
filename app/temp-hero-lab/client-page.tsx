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
    CheckCircle2,
    Menu,
    Search,
    Share2,
    MoreVertical
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
    { name: "Multiplex Operations", id: "cinema_operations_pack" }
];

const ActionBlock = () => (
    <div className="flex flex-col gap-4 items-start">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto h-14 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-xs tracking-widest shadow-2xl hover:scale-[1.02] transition-all border-none">
                <Link href="/library">SEE THE SYSTEMS</Link>
            </button>
            <button className="w-full sm:w-auto h-14 px-10 rounded-xl border border-white/20 text-white/80 font-black uppercase italic text-xs tracking-widest hover:bg-white/5 transition-all">
                <Link href="#sheets-simulation">WATCH THE DEMO</Link>
            </button>
        </div>
    </div>
);

const SheetsMobileSimulation = () => (
    <div className="relative mx-auto w-full max-w-[320px] h-[680px] bg-white rounded-[3rem] border-[12px] border-zinc-900 shadow-2xl overflow-hidden flex flex-col font-sans">
        {/* Google Sheets Header */}
        <div className="bg-[#22C55E] text-white pt-6 pb-2 px-6 flex items-center gap-4 shrink-0">
             <div className="flex items-center gap-3">
                <Check className="w-5 h-5" strokeWidth={3} />
                <span className="text-sm font-bold truncate max-w-[120px]">DAILY_TASKS</span>
             </div>
             <div className="ml-auto flex items-center gap-5">
                <Share2 className="w-4 h-4 opacity-90" />
                <MoreVertical className="w-4 h-4 opacity-90" />
             </div>
        </div>

        {/* Sheets Tab Bar (Secondary Top) */}
        <div className="bg-white border-b border-zinc-200 h-10 flex items-center px-4 overflow-x-auto no-scrollbar shrink-0">
             <span className="text-[11px] font-bold text-[#22C55E] border-b-2 border-[#22C55E] h-full flex items-center px-3 whitespace-nowrap">MISSION_LEDGER</span>
             <span className="text-[11px] font-bold text-zinc-400 h-full flex items-center px-3 whitespace-nowrap">SOP_LIBRARY</span>
             <span className="text-[11px] font-bold text-zinc-400 h-full flex items-center px-3 whitespace-nowrap">DASHBOARD</span>
        </div>

        {/* The Grid */}
        <div className="flex-1 overflow-auto bg-[#F8F9FA] no-scrollbar">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-zinc-100 border-b border-zinc-300">
                        {["A", "B", "C", "D", "E"].map(col => (
                            <th key={col} className="px-2 py-1 text-[8px] font-bold text-zinc-400 border-r border-zinc-300 text-center">{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {[
                         { a: "BRANCH", b: "ROLE", c: "TECHNICAL TASK", d: "DONE BY", e: "STAMP", isHeader: true },
                         { a: "Bandra", b: "Manager", c: "Revenue Reconcile", d: "AK", e: "19:53:25", active: true },
                         { a: "Bandra", b: "Chef", c: "Thaw-temp Audit", d: "", e: "", input: true },
                         { a: "Bandra", b: "Security", c: "Egress Sweep", d: "SM", e: "08:15:30", active: true },
                         { a: "Bandra", b: "HK", c: "Bathroom 60-min", d: "", e: "", input: true },
                         { a: "Bandra", b: "Manager", c: "Shift Handover", d: "", e: "", input: true },
                         { a: "Bandra", b: "Chef", c: "Fridge Vitals", d: "VK", e: "06:12:04", active: true },
                         { a: "Bandra", b: "Admin", c: "Compliance Log", d: "", e: "", input: true },
                    ].map((row, i) => (
                        <tr key={i} className="border-b border-zinc-200">
                             <td className={cn("px-2 py-3 border-r border-zinc-200 text-[9px]", row.isHeader ? "bg-[#0F172A] text-white font-black uppercase" : "text-zinc-500")}>{row.a}</td>
                             <td className={cn("px-2 py-3 border-r border-zinc-200 text-[9px]", row.isHeader ? "bg-[#0F172A] text-white font-black uppercase" : "font-bold text-zinc-900")}>{row.b}</td>
                             <td className={cn("px-2 py-3 border-r border-zinc-200 text-[9px]", row.isHeader ? "bg-[#0F172A] text-white font-black uppercase" : "font-black text-zinc-950 uppercase truncate max-w-[80px]")}>{row.c}</td>
                             <td className={cn(
                                "px-2 py-3 border-r border-zinc-200 text-[10px] text-center font-black",
                                row.isHeader ? "bg-[#0F172A] text-white font-black uppercase" : (row.input ? "bg-[#FEFCE8]" : "bg-white text-zinc-900")
                             )}>{row.d}</td>
                             <td className={cn(
                                "px-2 py-3 text-[8px] font-mono text-center",
                                row.isHeader ? "bg-[#0F172A] text-white font-black uppercase" : (row.active ? "text-emerald-600 font-bold bg-emerald-50" : "text-zinc-300")
                             )}>{row.e || (row.input ? "---" : "")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* Sheets Bottom Control Bar */}
        <div className="h-12 bg-white border-t border-zinc-200 flex items-center px-6 justify-between shrink-0">
             <div className="flex items-center gap-1 opacity-40">
                <div className="w-5 h-5 rounded hover:bg-zinc-100 flex items-center justify-center text-zinc-950">＋</div>
                <div className="w-5 h-5 rounded hover:bg-zinc-100 flex items-center justify-center text-zinc-950 text-xs">≡</div>
             </div>
             <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="w-2 h-2 rounded-full bg-zinc-200" />
                <div className="w-2 h-2 rounded-full bg-zinc-200" />
             </div>
             <div className="w-5 h-5" /> {/* Spacer */}
        </div>

        {/* Device Home Indicator */}
        <div className="h-4 bg-white flex justify-center items-center pb-2 shrink-0">
            <div className="w-24 h-1 rounded-full bg-zinc-200" />
        </div>
    </div>
);

const LogoOption = ({ title, tagline, icon: Icon, color, isElite = false }: any) => (
    <div className={cn(
        "p-8 rounded-[2rem] border transition-all duration-500 flex flex-col items-center text-center gap-6 group",
        isElite ? "bg-zinc-900 border-white/10 shadow-2xl" : "bg-white/[0.02] border-white/5"
    )}>
        <div className="relative">
            <div className="absolute -inset-4 blur-xl opacity-20 rounded-full group-hover:opacity-40 transition-opacity" style={{ backgroundColor: color }} />
            <Icon className="w-12 h-12 relative z-10" style={{ color: color }} />
        </div>
        <div className="space-y-2">
            <div className="flex flex-col">
                <span className="text-2xl font-black font-headline tracking-tighter uppercase italic leading-none text-white">{title}™</span>
                {tagline && (
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] mt-2 block" style={{ color: isElite ? color : '#666' }}>
                        {tagline}
                    </span>
                )}
            </div>
            {isElite && (
                <div className="pt-4 flex flex-wrap justify-center gap-1.5">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#111827" }} />
                    <div className="w-3 h-3 rounded-sm bg-white" />
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: color }} />
                </div>
            )}
        </div>
    </div>
);

export default function HeroLabClient() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-primary/30 pb-40">
            
            {/* --- TOP HUD --- */}
            <div className="container px-6 pt-24 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN DESIGN LAB v26.0
                </Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-white">
                    Identity & <span className="text-emerald-500">Infrastructure</span>
                </h1>
                <p className="text-zinc-500 italic font-medium max-w-xl mx-auto">Reconciling the visual mandate with spreadsheet-native operational realism.</p>
            </div>

            {/* --- BRAND IDENTITY LAB --- */}
            <div className="container px-6 py-20 mx-auto space-y-16 border-b border-white/5">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">THE IDENTITY PROTOCOL</Badge>
                    <h2 className="text-3xl font-black font-headline italic uppercase tracking-tighter text-white">Select Your Mark</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <LogoOption 
                        title="MoreMeets" 
                        tagline="LESS MISSES. MORE STANDARDS." 
                        icon={CheckSquare} 
                        color="#2EB86B" 
                    />
                    <LogoOption 
                        title="MoreMeets" 
                        tagline="THE OPERATIONAL STANDARD." 
                        icon={Shield} 
                        color="#38BDF8" 
                    />
                    <LogoOption 
                        title="MoreMeets" 
                        tagline="WHERE SOPs MEET EXECUTION" 
                        icon={CheckCircle2} 
                        color="#FACC15"
                        isElite={true}
                    />
                    <LogoOption 
                        title="MoreMeets" 
                        tagline="SYSTEMS OVER LUCK." 
                        icon={Infinity} 
                        color="#F97316" 
                    />
                    <LogoOption 
                        title="MoreMeets" 
                        tagline="INSTITUTIONAL MEMORY" 
                        icon={Target} 
                        color="#E11D48" 
                    />
                </div>
            </div>

            {/* --- MOBILE FIDELITY LAB --- */}
            <div className="container px-6 py-20 mx-auto space-y-20 border-b border-white/5" id="sheets-simulation">
                <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-emerald-500 opacity-40 shrink-0" />
                                <span className="text-[11px] font-black uppercase tracking-[0.12em] text-emerald-500 font-headline whitespace-nowrap">
                                    THE SOVEREIGN INTERFACE
                                </span>
                            </div>

                            <h1 className="text-[32px] md:text-[58px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter">
                                ADOPTABILITY IS <br/>
                                <span className="text-emerald-500 underline underline-offset-8 decoration-emerald-500/20">THE REAL MOAT.</span>
                            </h1>
                            
                            <p className="text-xl font-medium leading-[1.4] italic text-zinc-400 border-l-2 border-primary/20 pl-8 max-w-lg">
                                SaaS fails when teams refuse to log in. MoreMeets succeeds because it runs on infrastructure your team already uses every day.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {[
                                { t: "NO NEW LOGINS", d: "Staff use existing Google accounts. Zero onboarding friction.", i: UserCheck },
                                { t: "NO APP INSTALLS", d: "Runs directly inside the Google Sheets app on iOS and Android.", i: Smartphone },
                                { t: "FORENSIC PROOF", d: "Automated timestamps ensure accountability is non-retractable.", i: Activity }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-zinc-600 group-hover:text-primary transition-all shadow-inner">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-sm font-black uppercase text-white italic tracking-tighter leading-none">{item.t}</p>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-snug">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <ActionBlock />
                    </div>

                    <div className="relative">
                         {/* Visual Callouts */}
                         <div className="absolute -left-12 top-1/4 z-20 hidden xl:block animate-in fade-in slide-in-from-right-10 duration-1000">
                             <div className="bg-emerald-500 text-black p-4 rounded-xl shadow-2xl font-black italic uppercase text-[10px] tracking-widest flex flex-col gap-1">
                                 <span>[✓] RECO_AUTO_STAMP</span>
                                 <span className="opacity-60">STABLE HEARTBEAT_ACTIVE</span>
                             </div>
                         </div>
                         <div className="absolute -right-8 bottom-1/4 z-20 hidden xl:block animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
                             <div className="bg-zinc-900 border border-white/10 text-white p-4 rounded-xl shadow-2xl font-black italic uppercase text-[10px] tracking-widest flex flex-col gap-1">
                                 <span>[!] UNAUTHORIZED_ACCESS_PREVENTED</span>
                                 <span className="text-emerald-500">LOCK_LAYER_ENGAGED</span>
                             </div>
                         </div>
                         <SheetsMobileSimulation />
                         <p className="mt-8 text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] text-center italic">
                            PIXEL-PERFECT SOVEREIGN LEDGER SIMULATION (MOBILE VIEW)
                         </p>
                    </div>
                </div>
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

