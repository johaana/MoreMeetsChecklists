'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FaqSection } from '@/components/layout/faq-section';
import { 
    Check, 
    ArrowRight, 
    Activity, 
    CheckCircle2, 
    Users, 
    History, 
    ShieldCheck, 
    Smartphone, 
    LayoutGrid, 
    Lock, 
    GraduationCap, 
    Zap, 
    AlertTriangle, 
    Building, 
    Utensils, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn, 
    Gem,
    Target,
    Database,
    X,
    Wifi,
    Clock,
    Search,
    MoreVertical,
    Share2,
    ShieldAlert,
    Camera,
    Eye,
    ChevronRight,
    MousePointer2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-20 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/[0.03] z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const SectionEyebrow = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
        <div className="w-8 md:w-12 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#8B6B3F] font-headline whitespace-nowrap">
            {text}
        </span>
    </div>
);

const LedgerSimulation = () => (
    <div className="relative group max-w-[1250px] mx-auto">
        <div className="absolute -top-12 left-0 z-20">
            <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-zinc-400 italic">
                Verifiable operational records.
            </p>
        </div>
        
        <div className="relative z-10 w-full aspect-[2.3/1] bg-zinc-950 rounded-[2.5rem] md:rounded-[4rem] border-[10px] md:border-[16px] border-zinc-900 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden ring-1 ring-white/10">
            
            <div className="w-full h-full bg-white flex flex-col font-sans overflow-hidden">
                {/* Google Sheets Mobile Header */}
                <div className="bg-[#22C55E] text-white py-2 md:py-3 px-8 flex items-center justify-between gap-4 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" strokeWidth={5} />
                        </div>
                        <span className="text-[9px] md:text-[11px] font-black tracking-tight uppercase">DAILY_EXECUTION_LEDGER_V18.5</span>
                    </div>
                    <div className="flex items-center gap-5 opacity-80">
                        <Search className="w-3.5 h-3.5" />
                        <Share2 className="w-3.5 h-3.5" />
                        <MoreVertical className="w-3.5 h-3.5" />
                    </div>
                </div>

                {/* High Density Grid - Symmetric Build with All 12 Columns */}
                <div className="flex-1 overflow-x-auto no-scrollbar bg-[#F8F9FA] p-2">
                    <table className="w-full text-left border-collapse min-w-[1800px] table-fixed rounded-lg overflow-hidden border border-zinc-200">
                        <thead>
                            <tr className="bg-[#0F172A] text-white">
                                {[
                                    { h: "BRANCH", w: "100px" },
                                    { h: "ROLE", w: "150px" },
                                    { h: "TECHNICAL TASK", w: "280px" },
                                    { h: "ASSIGNED TO", w: "120px" },
                                    { h: "DONE BY", w: "100px" },
                                    { h: "VERIFIED BY", w: "100px" },
                                    { h: "STATUS", w: "120px" },
                                    { h: "CONSEQUENCE / RISK", w: "240px" },
                                    { h: "FLOOR INSTRUCTIONS", w: "300px" },
                                    { h: "STAMP", w: "160px" },
                                    { h: "PROOF", w: "110px" },
                                    { h: "REFERENCE", w: "110px" }
                                ].map((col, i) => (
                                    <th key={i} style={{ width: col.w }} className="px-3 py-4 text-[8px] md:text-[10px] font-black uppercase tracking-tight border-r border-white/5 last:border-0">{col.h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { 
                                    b: "Bandra", r: "Store Manager", t: "REVENUE RECONCILE", a: "Aditi", db: "A", vb: "A", s: "COMPLETE", 
                                    c: "Untraceable internal revenue theft.", i: "Match total group cash-on-hand against bank deposit slips.", st: "2026-05-23 08:12", isDone: true, hasProof: true 
                                },
                                { 
                                    b: "Bandra", r: "Vault Custodian", t: "DUAL-KEY VAULT ENTRY", a: "Imraan", db: "I", vb: "A", s: "COMPLETE", 
                                    c: "Single-point vault theft window.", i: "Execute 2-key entry sequence with secondary custodian witness.", st: "2026-05-23 09:05", isDone: true, hasProof: true 
                                },
                                { 
                                    b: "Bandra", r: "Sales Assoc.", t: "DISPLAY INTEGRITY SWEEP", a: "Karan", db: "K", vb: "", s: "IN PROGRESS", 
                                    c: "Undetected item-swap theft.", i: "Walk showcases every 60m to verify piece-to-holder match.", st: "—", isPending: true 
                                },
                                { 
                                    b: "Bandra", r: "Floor Super.", t: "OPENING READINESS SEAL", a: "Sarah", db: "S", vb: "A", s: "COMPLETE", 
                                    c: "Delayed opening & lost sales.", i: "Verify 100% of station readiness protocols are signed.", st: "2026-05-23 08:00", isDone: true, hasProof: true 
                                },
                                { 
                                    b: "Bandra", r: "CCTV Officer", t: "PERIMETER SCAN", a: "Imraan", db: "", vb: "", s: "OPEN", 
                                    c: "Unmonitored intrusion points.", i: "Verify 30-day recording backup and focal point sync.", st: "—", isOpen: true 
                                }
                            ].map((row, idx) => (
                                <tr key={idx} className={cn("border-b border-zinc-100", idx % 2 === 0 ? "bg-white" : "bg-[#f9fafb]")}>
                                    <td className="px-3 py-4 border-r border-zinc-100 text-zinc-500 font-medium text-[9px] md:text-[11px] truncate">{row.b}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 font-bold text-zinc-800 text-[9px] md:text-[11px] truncate">{row.r}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 font-black text-zinc-950 uppercase text-[9px] md:text-[11px] leading-tight">{row.t}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 text-zinc-400 font-bold text-[10px] md:text-[12px]">{row.a}</td>
                                    <td className={cn("px-2 py-4 border-r border-zinc-100 font-black text-center text-[10px] md:text-[12px] bg-[#FEFCE8]")}>{row.db}</td>
                                    <td className={cn("px-2 py-4 border-r border-zinc-100 font-black text-center text-[10px] md:text-[12px]", row.isDone ? "bg-[#EFF6FF]" : "")}>{row.vb}</td>
                                    <td className={cn(
                                        "px-2 py-4 border-r border-zinc-100 font-black text-center text-[8px] md:text-[10px]", 
                                        row.isDone ? "text-emerald-600" : (row.isPending ? "text-amber-500" : "text-zinc-400")
                                    )}>
                                        <span className={cn("px-2 py-1 rounded whitespace-nowrap", row.isDone ? "bg-emerald-50" : (row.isPending ? "bg-amber-50" : ""))}>{row.s}</span>
                                    </td>
                                    <td className="px-3 py-4 border-r border-zinc-100 italic text-red-700 font-medium leading-tight text-[9px] md:text-[11px]">{row.c}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 text-emerald-700 font-medium leading-tight text-[9px] md:text-[11px]">{row.i}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 text-zinc-950 font-mono text-[9px] md:text-[11px] font-black text-center bg-zinc-50">{row.st}</td>
                                    <td className="px-3 py-4 border-r border-zinc-100 text-center">
                                        {row.hasProof && (
                                            <div className="flex items-center justify-center gap-1.5">
                                                <Camera className="w-3.5 h-3.5 text-emerald-500" />
                                                <span className="text-[7px] font-black text-emerald-600 uppercase">VERIFIED</span>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-3 py-4 text-center">
                                        {row.isDone && <div className="flex items-center justify-center"><Eye className="w-4 h-4 text-blue-500 opacity-30" /></div>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Status Bar */}
                <div className="bg-white border-t border-zinc-100 h-10 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">LIVE_ENGINE_STABLE</span>
                    </div>
                    <span className="text-[9px] font-black text-primary uppercase tracking-widest italic">AUTOMATIC_AUDIT_ACTIVE</span>
                </div>
            </div>
        </div>
    </div>
);

export default function HomePage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-[#B89B5E]/10">
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* --- 1. THE CINEMATIC HERO --- */}
                <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-start overflow-hidden bg-[#F8F6F2]">
                    <div className="absolute inset-0 z-0">
                        <div className="w-full h-full animate-[zoom_20s_ease-in-out_infinite_alternate]">
                            <iframe 
                                src={VIMEO_URL} 
                                className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 scale-[1.4] pointer-events-none"
                                frameBorder="0" 
                                allow="autoplay; fullscreen" 
                                style={{ filter: 'brightness(0.88) saturate(0.92) contrast(1.02)' }}
                            />
                        </div>
                        <div 
                            className="absolute inset-0 z-20" 
                            style={{ 
                                background: 'linear-gradient(90deg, rgba(248,246,242,0.92) 0%, rgba(248,246,242,0.85) 38%, rgba(248,246,242,0.4) 58%, rgba(0,0,0,0.05) 100%)' 
                            }} 
                        />
                    </div>

                    <div className="relative z-30 container mx-auto max-w-[1200px] px-6 h-full flex items-center pt-24">
                        <div className="max-w-[650px] space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
                                        WHERE SOPs MEET EXECUTION
                                    </span>
                                </div>

                                <h1 className="text-[34px] md:text-[58px] font-bold font-headline leading-[0.95] uppercase text-[#121212] tracking-[-0.04em]">
                                    YOUR BUSINESS SHOULD NOT <br />
                                    <span className="relative inline-block mt-1">
                                        DEPEND ON MEMORY.
                                        <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#D6A85F]/30 rounded-full" />
                                    </span>
                                </h1>
                                
                                <p className="text-[18px] font-normal leading-[1.6] text-[#4B5563] max-w-xl">
                                    Think of it as a live operational control sheet for your entire business. MoreMeets turns SOPs into live operational systems with daily tasks, built-in instructions, and timestamped + photo-backed proof of execution.
                                </p>
                                
                                <div className="flex flex-col gap-2.5 pt-1">
                                    {[
                                        "Works directly on Google Sheets.",
                                        "No app-adoption battle.",
                                        "Works during internet disruptions."
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                            </div>
                                            <span className="text-[13px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <button className="h-16 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                                    <Link href="/library" className="flex items-center justify-center gap-3">
                                        DEPLOY SYSTEM: ₹2,499 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                                <p className="text-[10px] font-black text-[#8B6B3F] uppercase tracking-[0.3em] pl-2 italic">
                                    ONE-TIME PURCHASE • OWN FOREVER • FULLY EDITABLE
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. THE OPERATIONAL PROBLEM --- */}
                <Section className="bg-white border-b border-zinc-100" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl text-zinc-900 font-bold leading-tight italic">
                                Most businesses already have SOPs. <br/>
                                <span className="text-zinc-400">The real problem is that daily operations still depend on memory, verbal follow-ups, WhatsApp messages, and whether the manager is physically present.</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {[
                                    "Tasks get missed regularly.",
                                    "Instructions change between shifts.",
                                    "Managers keep calling teams for updates.",
                                    "New staff take weeks to train.",
                                    "Nobody knows what was actually completed."
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <X className="w-4 h-4 text-red-500" />
                                        <span className="text-sm md:text-base font-black uppercase italic tracking-tighter text-zinc-900">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12 pt-12 border-t border-zinc-100">
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-4xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                    MoreMeets fixes this using a system your team already understands.
                                </h3>
                                <p className="text-lg text-zinc-600 font-medium italic leading-relaxed">
                                    We provide pre-built operational systems with ready SOPs, daily task ledgers, built-in instructions, consequences, photo verification, timestamps, and live tracking — all running directly through Google Sheets.
                                </p>
                            </div>

                            <div className="space-y-16">
                                <div className="p-8 bg-zinc-950 text-white rounded-[2rem] space-y-8 shadow-2xl w-full">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic">FOR FRONT-LINE TEAMS</p>
                                        <h4 className="text-2xl font-black italic uppercase text-white">NO APP-ADOPTION BATTLE.</h4>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <p className="text-sm font-medium text-zinc-400 italic">
                                                Staff simply open the sheet on their phone and complete tasks step-by-step. No new software habits to learn.
                                            </p>
                                            <div className="space-y-3">
                                                {[
                                                    "No new software habits.",
                                                    "No app downloads required.",
                                                    "No retraining your workforce."
                                                ].map((item, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <Check className="w-4 h-4 text-emerald-500" />
                                                        <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-300">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Smartphone className="w-24 h-24 text-emerald-500 opacity-20" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] italic">FOR MANAGEMENT</p>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                         {[
                                            "see live progress instantly",
                                            "request photo proof",
                                            "attach reference images",
                                            "verify execution timestamps",
                                            "monitor multiple departments",
                                            "standardize operations across branches"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                                <span className="text-sm font-black uppercase italic tracking-tighter text-zinc-900">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-12 border-t border-zinc-100 text-center">
                            <p className="text-lg text-zinc-500 font-bold italic leading-relaxed max-w-2xl mx-auto">
                                Everything is 100% editable for your business. The formulas, tracking logic, and audit structure are already built and ready.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* --- 3. THE MORNING REALITY (STORY) --- */}
                <Section className="bg-[#F8F6F2]" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <SectionEyebrow text="FROM CHAOS TO CLARITY" />
                            <h2 className="text-2xl md:text-4xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter">THE MORNING REALITY</h2>
                        </div>
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-zinc-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                <Activity className="w-64 h-64" />
                            </div>
                            <div className="space-y-8 italic relative z-10">
                                <p className="text-lg md:text-xl text-zinc-700 leading-tight">
                                    "A restaurant owner with 3 branches used to spend every morning calling managers for updates. 
                                    'Was stock checked?' 'Did housekeeping finish?' 'Did the freezer temperature get logged?'"
                                </p>
                                <div className="h-px w-20 bg-zinc-200 mx-auto" />
                                <p className="text-lg md:text-xl text-zinc-900 font-bold leading-tight">
                                    Now the team updates one live operational ledger from their phones. <br/><br/>
                                    <span className="text-emerald-600 uppercase">Managers stop chasing. Teams stop guessing. The owner sees live execution instantly.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. INSIDE THE SYSTEM --- */}
                <Section id="inside" className="bg-white" noSpine>
                    <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <SectionEyebrow text="INSIDE THE SYSTEM" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                FOR REAL TEAMS.
                            </h2>
                            <p className="text-zinc-600 text-lg md:text-xl font-medium italic mx-auto">
                                No software fantasy. We use real operational ledgers because that is what busy frontline teams actually follow.
                            </p>
                        </div>

                        <div className="flex flex-col gap-20">
                            <div className="w-full relative">
                                <div className="absolute -inset-10 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-50"></div>
                                <LedgerSimulation />
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8">
                                {[
                                    { t: "NO APP ADOPTION BATTLE", d: "Staff use existing phones and tools they understand. Zero friction for the front-line.", i: Smartphone },
                                    { t: "AUTOMATIC AUDIT", d: "Timestamps and optional photo evidence create verifiable operational records.", i: Activity },
                                    { t: "VISUAL VERIFICATION", d: "Managers attach reference images and request photo proof for critical tasks.", i: Eye },
                                    { t: "BUILT-IN COACHING", d: "Step-by-step instructions ensure work is done right every time.", i: GraduationCap }
                                ].map((feat, i) => (
                                    <div key={i} className="flex flex-col gap-5 text-left group">
                                        <div className="w-14 h-14 rounded-2xl bg-[#F8F6F2] border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm transition-all duration-500 group-hover:bg-[#111111] group-hover:border-emerald-500/30">
                                            <feat.i className="w-7 h-7 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-lg font-black uppercase text-zinc-950 italic">{feat.t}</p>
                                            <p className="text-[12px] text-zinc-500 font-bold uppercase tracking-widest leading-tight">{feat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. OPERATIONAL CONTINUITY (OFFLINE STRIP) --- */}
                <div className="w-full bg-[#111111] py-20 md:py-32 text-white relative overflow-hidden border-y border-white/5">
                    <div className="absolute inset-0 opacity-10">
                        <Wifi className="w-full h-full text-white rotate-12 scale-150" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10 text-center space-y-10">
                        <div className="space-y-4">
                            <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 px-8 py-2 uppercase font-black tracking-[0.5em] text-[10px] rounded-none italic">OPERATIONAL CONTINUITY</Badge>
                            <h2 className="text-3xl md:text-7xl font-black font-headline uppercase italic tracking-tighter leading-none">
                                WORKS EVEN WITHOUT <span className="text-emerald-500">INTERNET.</span>
                            </h2>
                        </div>
                        <div className="max-w-2xl mx-auto space-y-8">
                            <p className="text-xl md:text-3xl font-bold italic leading-tight text-white/40">
                                Basements. Kitchens. Warehouses. Remote sites.
                            </p>
                            <div className="space-y-2">
                                <p className="text-lg md:text-2xl font-black text-white uppercase italic">
                                    Execution happens first. Sync happens later.
                                </p>
                                <p className="text-sm md:text-lg text-zinc-500 font-medium italic max-w-lg mx-auto">
                                    Your team can continue logging tasks even during unstable connectivity. Sync resumes automatically when the connection stabilizes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 6. OWNERSHIP & EDITABILITY --- */}
                <Section className="bg-white" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-32">
                        <div className="grid md:grid-cols-2 gap-16 md:gap-32">
                            <div className="space-y-8">
                                <SectionEyebrow text="DATA OWNERSHIP" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">You own your data. <br/> Not us.</h3>
                                <p className="text-zinc-500 text-lg italic leading-relaxed font-medium">
                                    Your operational history stays in your own Google or Excel environment. No dependency on proprietary platforms. You own the system and the audit trail forever.
                                </p>
                                <div className="flex items-center gap-4 text-emerald-600 font-black italic uppercase">
                                    <Database className="w-6 h-6 opacity-40" />
                                    <span>Permanent access. Zero SaaS dependency.</span>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <SectionEyebrow text="CUSTOMIZATION" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">Fully editable for <br/> your business.</h3>
                                <p className="text-zinc-500 text-lg italic leading-relaxed font-medium">
                                    Owners fear rigid software. We provide the globally benchmarked structure, and you can easily add, remove, or modify tasks to fit your unique local protocols.
                                </p>
                                <div className="flex items-center gap-4 text-primary font-black italic uppercase">
                                    <MousePointer2 className="w-6 h-6 opacity-40" />
                                    <span>No code required. Just Excel proficiency.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- FINAL CTA --- */}
                <Section className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                RUN ON SYSTEMS — <br/> <span className="text-emerald-600">NOT MEMORY.</span>
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Deploy your operational execution system in the next 10 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-10">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group">
                                <Link href="/library" className="flex items-center gap-6">
                                    Get System: ₹2,499 <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                            <p className="text-[11px] md:text-[13px] font-black uppercase tracking-[0.5em] text-zinc-400 italic">
                                ONE-TIME PURCHASE • OWN FOREVER • FULLY EDITABLE
                            </p>
                        </div>
                    </div>
                </Section>

            </main>
            
            <Footer />

            <style jsx global>{`
                @keyframes zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.06); }
                }
            `}</style>
        </div>
    );
}
