
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    X,
    ArrowRight, 
    Download,
    LayoutGrid,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Lock,
    Target,
    History,
    ClipboardCheck,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    ShieldAlert,
    Zap,
    Scale,
    Cpu,
    SearchCheck,
    Monitor
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { cinema_operations_pack } from '@/lib/packs/cinema_operations_pack';

// --- PRODUCTION CONSTANTS ---
const BRAND_GREEN = "#22C55E";
const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";
const TASKS_IMAGE = "https://i.postimg.cc/G278vKh8/Screenshot-2026-04-18-004329.png";

// --- HELPER COMPONENTS ---

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const BrowserFrame = ({ src, label }: { src: string, label: string }) => (
    <div className="group space-y-4">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white">
            <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="bg-white border border-zinc-200 rounded px-4 py-0.5 text-[8px] font-black text-zinc-400 uppercase tracking-widest italic">
                        {label}
                    </div>
                </div>
            </div>
            <img src={src} alt={label} className="w-full h-auto grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" />
        </div>
    </div>
);

const DiagnosticScan = () => (
    <div className="space-y-6 md:space-y-10 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-px bg-red-500/20" />
        <div className="space-y-2">
            <p className="text-[9px] font-black text-red-500/60 uppercase tracking-[0.5em] italic">DIAGNOSTIC_ALERT_SCAN</p>
            <div className="h-px w-full bg-gradient-to-r from-red-500/40 to-transparent relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500 animate-[shimmer_2s_infinite] w-20" />
            </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 relative">
            {/* The Scanning Line */}
            <div className="absolute left-[-16px] right-0 h-10 bg-red-500/5 border-y border-red-500/10 animate-[scan_4s_linear_infinite] z-0 pointer-events-none" />
            
            {[
                { t: "EXPIRED KDM KEYS", code: "ERR_MEDIA_LOCK" },
                { t: "CONCESSION YIELD LEAKAGE", code: "ERR_PROFIT_BLEED" },
                { t: "INTERVAL SURGE CONGESTION", code: "ERR_FLOW_HALT" },
                { t: "EMERGENCY COMMS FAILURE", code: "ERR_SAFETY_GAP" }
            ].map((risk, i) => (
                <div key={i} className="space-y-1 relative z-10 group">
                    <div className="flex items-center gap-3 justify-end">
                        <span className="text-[8px] font-mono text-red-900 group-hover:text-red-500 transition-colors">[{risk.code}]</span>
                        <span className="text-sm md:text-xl font-black text-red-600/60 group-hover:text-red-600 transition-colors uppercase tracking-tighter italic">
                            {risk.t}
                        </span>
                    </div>
                </div>
            ))}
        </div>
        <div className="pt-4 text-right">
             <p className="text-[8px] font-mono text-zinc-700 uppercase tracking-widest">STATUS: SYSTEM_VULNERABLE_WITHOUT_SOP</p>
        </div>
    </div>
);

export default function TempDesignLab() {
    const pack = cinema_operations_pack;

    return (
        <div className="flex flex-col min-h-screen bg-white text-[#0B0F14] font-sans antialiased selection:bg-emerald-500/20">
            <SiteHeader forceTheme="dark" />
            
            <main className="flex-1">
                
                {/* --- 1. THE HARDENED HERO --- */}
                <section className="relative w-full min-h-[90svh] flex flex-col justify-center overflow-hidden bg-black text-white">
                    {/* Subtle Blueprint Grid */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
                         style={{ backgroundImage: `radial-gradient(${BRAND_GREEN} 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                    
                    <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
                        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-16 items-center">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 rounded-none font-black tracking-[0.4em] text-[10px] uppercase py-1.5 px-6 italic">
                                        SYS_REF: V11.9_STABLE
                                    </Badge>
                                    <h1 className="text-4xl md:text-7xl font-black font-headline tracking-tighter uppercase italic leading-[0.9]">
                                        CINEMA <br/> <span className="text-emerald-500">OPERATING SYSTEM.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl text-zinc-400 font-medium italic max-w-2xl leading-tight">
                                        Stop chasing your team. See technical show-readiness and concession yields getting done daily.
                                    </p>
                                </div>

                                <div className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl space-y-6 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <Cpu className="w-24 h-24 text-emerald-500" />
                                    </div>
                                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">SYSTEM SPECIFICATIONS</p>
                                    <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                                        {[
                                            { t: "140+ PRE-BUILT CINEMA SOPs", i: Target },
                                            { t: "LIVE REVENUE DASHBOARD", i: Activity },
                                            { t: "BUILT-IN TRAINER NOTES", i: GraduationCap },
                                            { t: "EDITABLE .XLSX INFRASTRUCTURE", i: FileSpreadsheet }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                                <span className="text-[11px] font-black uppercase tracking-widest text-white/60 italic">{item.t}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-emerald-500 text-black font-black uppercase italic text-lg shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4">
                                        <Link href="#">
                                            LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </Button>
                                    <div className="space-y-1 text-center sm:text-left">
                                        <p className="text-[11px] text-emerald-500 font-black uppercase tracking-[0.2em] italic">
                                            BUILT IN EXCEL. SHARED THROUGH GOOGLE SHEETS. NO APP ROLLOUT.
                                        </p>
                                        <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                                            ONE-TIME PURCHASE • OWN FOREVER • NO SUBSCRIPTIONS
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block">
                                <DiagnosticScan />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. THE EVIDENCE (INSIDE THE SYSTEM) --- */}
                <Section className="bg-zinc-50/50">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">PROOF OF ASSET</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight">Inside the system</h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">
                                The Sovereign Engine converts abstract "Standard Operating Procedures" into a physical, data-driven command console.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="space-y-12">
                                {[
                                    { t: "Live Visibility", d: "One screen showing what's done, missed, or delayed across every screen and station.", i: Activity },
                                    { t: "Role Accountability", d: "Tasks are assigned to specific roles with mandatory verification sign-offs.", i: Users },
                                    { t: "Audit-Ready Logs", d: "Generate institutional proof for insurance, legal, and distributor audits automatically.", i: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group text-left">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.i className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{item.t}</h4>
                                            <p className="text-zinc-500 font-bold italic leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-30" />
                                <BrowserFrame src={DASHBOARD_IMAGE} label="EXECUTIVE_CONCESSION_DASHBOARD" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 3. THE OPERATIONAL LOOP --- */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[44px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none">The Execution Loop</h2>
                            <p className="text-zinc-500 text-base md:text-lg font-medium italic">How the system runs your floor daily.</p>
                        </div>

                        <div className="relative py-12 md:py-0">
                            {/* Desktop Diagram */}
                            <div className="hidden md:flex items-center justify-between relative">
                                <div className="absolute top-1/2 left-0 right-0 h-px bg-zinc-100 -translate-y-1/2 z-0" />
                                {[
                                    { t: "Floor Staff", d: "Execute Task", i: Smartphone },
                                    { t: "Verification", d: "Manager Sign-off", i: SearchCheck },
                                    { t: "Dashboard", d: "Owner Visibility", i: Monitor },
                                    { t: "Closure", d: "Shift Handover", i: History }
                                ].map((step, i) => (
                                    <div key={i} className="relative z-10 flex flex-col items-center gap-4 bg-white px-6 group">
                                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-primary group-hover:border-primary/30 transition-all shadow-sm">
                                            <step.i className="w-8 h-8" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs font-black uppercase tracking-widest text-zinc-950">{step.t}</p>
                                            <p className="text-[10px] font-bold text-zinc-400 italic uppercase">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile Diagram */}
                            <div className="md:hidden flex flex-col gap-10">
                                {[
                                    { t: "Floor Staff", d: "Execute Task", i: Smartphone },
                                    { t: "Verification", d: "Manager Sign-off", i: SearchCheck },
                                    { t: "Dashboard", d: "Owner Visibility", i: Monitor },
                                    { t: "Closure", d: "Shift Handover", i: History }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400">
                                            <step.i className="w-6 h-6" />
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-950">{step.t}</p>
                                            <p className="text-[9px] font-bold text-zinc-400 italic uppercase">{step.d}</p>
                                        </div>
                                        {i < 3 && <div className="w-px h-8 bg-zinc-100 mt-2" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. HARDENED TECHNICAL SPECS --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center max-w-6xl mx-auto">
                        <div className="space-y-12">
                            <div className="space-y-4 text-left">
                                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] italic">TECHNICAL DENSITY</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-white leading-[0.95] tracking-tight uppercase italic text-left">Built for elite <br className="hidden md:block"/> multiplexes</h2>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-8 md:gap-12 text-left">
                                {[
                                    { val: "140+", label: "Technical SOPs", d: "Zero-fail show-readiness protocols." },
                                    { val: "11", label: "Divisions", d: "From Projection to Concession yields." },
                                    { val: "24h", label: "ORM Pulse", d: "Built-in review response tracking." },
                                    { val: "0", label: "App Rollout", d: "Works immediately on Excel/Sheets." }
                                ].map((stat, i) => (
                                    <div key={i} className="space-y-2 border-l border-white/10 pl-6 group">
                                        <p className="text-4xl md:text-5xl font-black font-headline italic text-emerald-500 group-hover:scale-110 transition-transform origin-left">{stat.val}</p>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white">{stat.label}</p>
                                            <p className="text-[9px] font-bold italic text-zinc-500 uppercase leading-tight">{stat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative p-2 bg-white/5 border border-white/10 rounded-[2.5rem] shadow-2xl">
                             <img src={TASKS_IMAGE} alt="Technical Tasks" className="w-full h-auto rounded-[2rem]" />
                             <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl">
                                 <p className="text-[9px] font-mono text-emerald-500/80 uppercase tracking-widest leading-none">VIEW_ID: AUDITORIUM_READINESS_LEDGER</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. SYSTEM SOVEREIGNTY (COMPARISON) --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 uppercase italic tracking-tight font-headline">The Sovereign Choice</h2>
                            <p className="text-zinc-500 text-lg font-bold italic">Why groups choose MoreMeets over complex SaaS.</p>
                        </div>
                        <div className="overflow-hidden rounded-[2.5rem] border border-zinc-200 shadow-xl">
                            <table className="w-full text-left">
                                <thead className="bg-zinc-950 text-white">
                                    <tr>
                                        <th className="p-8 md:p-10 text-[10px] font-black uppercase tracking-[0.4em]">PARAMETER</th>
                                        <th className="p-8 md:p-10 text-[10px] font-black uppercase tracking-[0.4em] bg-emerald-500/10 text-emerald-500">MOREMEETS™</th>
                                        <th className="p-8 md:p-10 text-[10px] font-black uppercase tracking-[0.4em]">TYPICAL SaaS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-100 text-sm md:text-base font-bold italic text-zinc-600">
                                    {[
                                        { f: "Ownership", mm: "One-time buy. Own your data forever.", saas: "Monthly lease. No payment, no access." },
                                        { f: "Onboarding", mm: "Zero training. Uses existing team skills.", saas: "Weeks of learning a new interface." },
                                        { f: "Customization", mm: "100% Unlocked. Edit any row or formula.", saas: "Locked features. Support requests needed." },
                                        { f: "Sovereignty", mm: "Stays in your Drive. Not on ours.", saas: "Stored on third-party cloud servers." }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-8 md:p-10 font-black uppercase text-zinc-400 text-[9px] tracking-widest">{row.f}</td>
                                            <td className="p-8 md:p-10 text-zinc-950 bg-emerald-500/5">{row.mm}</td>
                                            <td className="p-8 md:p-10">{row.saas}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                {/* --- 6. FINAL CTA --- */}
                <section className="bg-[#0F3D2E] text-white py-32 text-center relative overflow-hidden">
                    <div className="absolute inset-0 z-0 opacity-5">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                        <div className="space-y-6">
                            <h2 className="text-[40px] md:text-[84px] font-black leading-[0.9] tracking-tighter uppercase italic">Ready to run <br/> your system?</h2>
                            <p className="text-xl md:text-2xl text-emerald-500/60 font-bold italic">Setup takes less than 10 minutes.</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[30px] bg-[#F4A261] text-black font-black uppercase italic text-xl md:text-4xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-8">
                                <Link href="#" className="flex items-center gap-6">
                                    START NOW <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                            <div className="flex flex-col items-center">
                                <div className="flex items-baseline gap-3">
                                    <p className="text-3xl md:text-5xl font-black italic">₹999</p>
                                    <span className="text-lg md:text-xl font-bold text-white/30 italic">/ $12</span>
                                </div>
                                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-white/40 pt-2">
                                    ONE-TIME PAYMENT • OWN FOREVER
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />

            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(-50px); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(400px); opacity: 0; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}

