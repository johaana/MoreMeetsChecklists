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
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIMEO_URL = "https://player.vimeo.com/video/1194885765?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&background=1&muted=1&loop=1";

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-20 md:py-40 relative overflow-hidden", className)}>
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
    <div className="relative group max-w-[1100px] mx-auto">
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
                            <Check className="w-3 h-3" strokeWidth={5} />
                        </div>
                        <span className="text-[9px] md:text-[11px] font-black tracking-tight uppercase">DAILY_EXECUTION_LEDGER_V18.1</span>
                    </div>
                    <div className="flex items-center gap-5 opacity-80">
                        <Search className="w-3.5 h-3.5" />
                        <Share2 className="w-3.5 h-3.5" />
                        <MoreVertical className="w-3.5 h-3.5" />
                    </div>
                </div>

                {/* High Density Grid */}
                <div className="flex-1 overflow-x-auto no-scrollbar bg-[#F8F9FA] p-2">
                    <table className="w-full text-left border-collapse min-w-[1000px] table-fixed rounded-lg overflow-hidden border border-zinc-200">
                        <thead>
                            <tr className="bg-[#0F172A] text-white">
                                {[
                                    { h: "BRANCH", w: "90px" },
                                    { h: "ROLE", w: "110px" },
                                    { h: "TECHNICAL TASK", w: "160px" },
                                    { h: "DONE", w: "50px" },
                                    { h: "VERIFIED", w: "60px" },
                                    { h: "STATUS", w: "100px" },
                                    { h: "PROOF", w: "60px" },
                                    { h: "CONSEQUENCE / RISK", w: "180px" },
                                    { h: "STAMP", w: "140px" }
                                ].map((col, i) => (
                                    <th key={i} style={{ width: col.w }} className="px-3 py-3 text-[8px] md:text-[10px] font-black uppercase tracking-tight border-r border-white/5 last:border-0">{col.h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { 
                                    b: "Site 01", r: "Gen. Manager", t: "LOBBY AMBIANCE AUDIT", db: "AK", vb: "AK", s: "COMPLETE", 
                                    c: "Poor first-touch brand perception.", st: "2026-05-23 08:12", isDone: true, hasProof: true 
                                },
                                { 
                                    b: "Site 02", r: "Supervisor", t: "FACILITY_SAFETY_SWEEP", db: "VS", vb: "", s: "COMPLETE", 
                                    c: "Delayed check-in / safety risk.", st: "2026-05-23 10:05", isDone: true, hasProof: true 
                                },
                                { 
                                    b: "Site 03", r: "Security", t: "FIRE_PANEL_HEALTH", db: "RK", vb: "", s: "IN PROGRESS", 
                                    c: "Fatal delay in response.", st: "—", isPending: true 
                                },
                                { 
                                    b: "Site 01", r: "Engineer", t: "HVAC_THERMAL_LOG", db: "", vb: "", s: "OPEN", 
                                    c: "Discomfort & energy waste.", st: "—", isOpen: true 
                                },
                                { 
                                    b: "Site 02", r: "Admin", t: "COMPLIANCE_KYC_SYNC", db: "PD", vb: "AK", s: "COMPLETE", 
                                    c: "Legal violation / closure risk.", st: "2026-05-23 09:45", isDone: true, hasProof: true 
                                }
                            ].map((row, idx) => (
                                <tr key={idx} className={cn("border-b border-zinc-100", idx % 2 === 0 ? "bg-white" : "bg-[#f9fafb]")}>
                                    <td className="px-3 py-3 border-r border-zinc-100 text-zinc-500 font-medium text-[9px] md:text-[11px] truncate">{row.b}</td>
                                    <td className="px-3 py-3 border-r border-zinc-100 font-bold text-zinc-800 text-[9px] md:text-[11px] truncate">{row.r}</td>
                                    <td className="px-3 py-3 border-r border-zinc-100 font-black text-zinc-950 uppercase text-[9px] md:text-[11px] leading-none">{row.t}</td>
                                    <td className={cn("px-2 py-3 border-r border-zinc-100 font-black text-center text-[10px] md:text-[12px]", !row.db ? "bg-[#FEFCE8]" : "bg-white text-zinc-900")}>{row.db}</td>
                                    <td className={cn("px-2 py-3 border-r border-zinc-100 font-black text-center text-[10px] md:text-[12px]", !row.vb && row.isDone ? "bg-[#EFF6FF]" : "bg-white")}>{row.vb}</td>
                                    <td className={cn(
                                        "px-2 py-3 border-r border-zinc-100 font-black text-center text-[8px] md:text-[10px]", 
                                        row.isDone ? "text-emerald-600" : (row.isPending ? "text-amber-500" : "text-zinc-400")
                                    )}>
                                        <span className={cn("px-2 py-1 rounded whitespace-nowrap", row.isDone ? "bg-emerald-50" : (row.isPending ? "bg-amber-50" : ""))}>{row.s}</span>
                                    </td>
                                    <td className="px-3 py-3 border-r border-zinc-100 text-center">
                                        {row.hasProof && <Camera className="w-3.5 h-3.5 mx-auto text-emerald-500 opacity-60" />}
                                    </td>
                                    <td className="px-3 py-3 border-r border-zinc-100 italic text-red-700 font-medium leading-tight text-[9px] md:text-[11px]">{row.c}</td>
                                    <td className="px-3 py-3 text-zinc-950 font-mono text-[9px] md:text-[11px] font-black text-center bg-zinc-50 border-l border-zinc-200">{row.st}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Status Bar */}
                <div className="bg-white border-t border-zinc-100 h-8 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">LIVE_ENGINE_STABLE</span>
                    </div>
                    <span className="text-[8px] font-black text-primary uppercase tracking-widest italic">AUTOMATIC_AUDIT_ACTIVE</span>
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
                <section className="hidden md:flex relative w-full h-[100svh] min-h-[700px] flex flex-col justify-start overflow-hidden bg-[#F8F6F2]">
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
                                        OPERATIONAL SYSTEMS FOR REAL TEAMS
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
                                    MoreMeets turns SOPs into live operational systems with daily tasks, built-in instructions, and timestamped + photo-backed proof of execution — so work gets done properly even when managers are absent.
                                </p>
                                
                                <div className="flex flex-col gap-2.5 pt-1">
                                    {[
                                        "Works directly on Google Sheets.",
                                        "No new apps to learn.",
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

                            <div className="flex items-center gap-10">
                                <button className="h-16 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] group">
                                    <Link href="/library" className="flex items-center justify-center gap-3">
                                        Get My Operational System <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 w-full bg-white/40 backdrop-blur-sm border-t border-black/5 py-4">
                        <div className="container mx-auto px-6">
                            <p className="text-[9px] font-black text-[#8B6B3F] uppercase tracking-[0.4em] text-center italic">
                                NO SaaS LOCK-IN • BUILT IN EXCEL • DEPLOY IN 10 MINUTES • WORKS ON PHONES
                            </p>
                        </div>
                    </div>
                </section>

                {/* --- MOBILE HERO --- */}
                <section className="md:hidden relative w-full flex flex-col bg-[#F8F6F2]">
                    <div className="w-full aspect-[4/5] relative overflow-hidden bg-zinc-200">
                        <iframe 
                            src={VIMEO_URL} 
                            className="absolute inset-0 w-full h-full scale-[1.8]" 
                            frameBorder="0" 
                            allow="autoplay; fullscreen" 
                        />
                        <div className="absolute inset-0 bg-black/5" />
                    </div>
                    <div className="p-8 space-y-8 flex flex-col justify-start">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
                            <span className="text-[7.5px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
                                OPERATIONAL SYSTEMS FOR REAL TEAMS
                              </span>
                        </div>
                        
                        <div className="space-y-3">
                            <h1 className="text-[32px] font-bold font-headline leading-[0.95] uppercase italic tracking-tighter text-[#121212]">
                                YOUR BUSINESS SHOULD NOT <br />
                                <span className="relative inline-block mt-1">
                                    DEPEND ON MEMORY.
                                    <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#D6A85F]/30 rounded-full" />
                                </span>
                            </h1>
                            <p className="text-[14px] font-normal leading-[1.6] text-[#4B5563]">
                                MoreMeets turns SOPs into live operational systems. Teams get daily tasks and built-in instructions to ensure standards survive busy shifts.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            {[
                                "Works directly on Google Sheets.",
                                "No new apps to learn.",
                                "Works during internet disruptions."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Check className="w-2.5 h-2 text-[#2E7D5A]" />
                                    </div>
                                    <span className="text-[11px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2">
                             <button className="h-14 px-10 rounded-[16px] bg-[#111111] text-white font-bold uppercase text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] w-full text-center">
                                <Link href="/library">Get Operational System</Link>
                            </button>
                        </div>
                    </div>
                </section>

                {/* --- SECTION: HOW IT WORKS --- */}
                <Section id="how-it-works" className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-24">
                        <div className="text-center space-y-6">
                            <SectionEyebrow text="THE PROTOCOL" />
                            <h2 className="text-[42px] md:text-[72px] font-black font-headline text-zinc-950 tracking-tighter uppercase italic leading-[0.85]">
                                DEPLOY IN <br/> 10 MINUTES.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
                            {[
                                { t: "Download", d: "Get your industry master system instantly." },
                                { t: "Upload", d: "Open in Google Drive for live team access." },
                                { t: "Assign", d: "Map staff names to specific roles once." },
                                { t: "Execute", d: "Staff log daily work on their phones." },
                                { t: "See", d: "Managers see live progress from anywhere." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 text-center md:text-left group">
                                    <div className="text-7xl md:text-9xl font-black text-zinc-100 group-hover:text-primary/20 transition-colors leading-none select-none">
                                        0{i + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black uppercase italic text-zinc-950">{step.t}</h4>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest leading-tight">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: THE CORE TRUTH --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <SectionEyebrow text="THE PROBLEM" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    SOPs don’t fail <br/> because they are missing.
                                </h2>
                                <p className="text-xl md:text-2xl font-black text-primary italic leading-none uppercase">
                                    They fail because they are not followed.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-600 font-bold italic leading-relaxed">
                                    Instructions are repeated daily, but teams still forget under pressure. Static binders don't drive action. MoreMeets turns instructions into tracked daily execution.
                                </p>
                                <div className="grid gap-4">
                                    {[
                                        "Managers stop chasing teams for basic status updates",
                                        "Processes survive staff resignations and turnover",
                                        "Every critical task has timestamped proof of completion",
                                        "Designed for single units and multi-branch operations"
                                    ].map((point, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            <span className="text-sm md:text-base font-black uppercase italic tracking-tighter text-zinc-900">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-100">
                             <img 
                                src="https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg" 
                                alt="Operational Execution Audit" 
                                className="w-full h-full object-cover grayscale-[0.2]" 
                             />
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: INSIDE A LIVE OPERATION --- */}
                <Section id="inside" className="bg-white" noSpine>
                    <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <SectionEyebrow text="INSIDE THE SYSTEM" />
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                FOR REAL TEAMS.
                            </h2>
                            <p className="text-zinc-600 text-lg md:text-xl font-medium italic mx-auto">
                                No fake dashboards. No software fantasy. We use real operational ledgers because that is what busy frontline teams actually follow.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-[1fr,0.4fr] gap-12 lg:gap-20 items-center">
                            <div className="w-full relative">
                                <div className="absolute -inset-10 bg-emerald-500/5 rounded-[5rem] blur-3xl opacity-50"></div>
                                <LedgerSimulation />
                            </div>
                            
                            <div className="grid gap-8">
                                {[
                                    { t: "NO NEW APPS", d: "Staff use existing phones and Google accounts. No app-adoption battle.", i: Smartphone },
                                    { t: "AUTOMATIC AUDIT", d: "Timestamps and optional photo evidence create verifiable operational records.", i: Activity },
                                    { t: "VISUAL VERIFICATION", d: "Managers attach reference standards and request photo proof for critical tasks.", i: Eye },
                                    { t: "BUILT-IN COACHING", d: "Step-by-step instructions ensure work is done right every time.", i: GraduationCap }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-6 group text-left">
                                        <div className="w-12 h-12 rounded-xl bg-[#F8F6F2] border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
                                            <feat.i className="w-6 h-6 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-base md:text-lg font-black uppercase text-zinc-950 italic">{feat.t}</p>
                                            <p className="text-[10px] md:text-[12px] text-zinc-500 font-bold uppercase tracking-widest leading-tight">{feat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION: CONTINUITY & OWNERSHIP --- */}
                <Section className="bg-zinc-950 text-white" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 md:space-y-32">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-8">
                                <SectionEyebrow text="OPERATIONAL CONTINUITY" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white font-headline">Operations shouldn't stop for software.</h3>
                                <p className="text-zinc-400 text-lg italic leading-relaxed font-medium">
                                    Our systems are built for real-world environments, including unstable connectivity in basements, kitchens, and warehouses. Sync resumes automatically when connection stabilizes.
                                </p>
                                <div className="flex items-center gap-4 text-emerald-500 font-black italic uppercase">
                                    <Wifi className="w-6 h-6 opacity-40" />
                                    <span>Sync happens later. Execution happens now.</span>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <SectionEyebrow text="DATA OWNERSHIP" />
                                <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-white font-headline">You own your data. <br/> Not us.</h3>
                                <p className="text-zinc-400 text-lg italic leading-relaxed font-medium">
                                    Your operational history stays in your own Google or Excel environment. No dependency on proprietary platforms. You own the system and the audit trail forever.
                                </p>
                                <div className="flex items-center gap-4 text-primary font-black italic uppercase">
                                    <Database className="w-6 h-6 opacity-40" />
                                    <span>Permanent access. Zero SaaS dependency.</span>
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
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group">
                                <Link href="/library" className="flex items-center gap-6">
                                    Get My Operational System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
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