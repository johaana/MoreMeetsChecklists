
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
    ShieldAlert, 
    Building, 
    Utensils, 
    Hospital, 
    School, 
    Store, 
    Building2, 
    Popcorn, 
    Gem, 
    Wrench, 
    Leaf, 
    Recycle, 
    SearchCheck,
    ClipboardCheck,
    Database,
    FileText,
    Trophy
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

export default function HomePage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-[#B89B5E]/10">
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* --- 1. THE SOVEREIGN HERO (HYBRID ARCHITECTURE) --- */}
                
                {/* MOBILE HERO: SOVEREIGN STANDARD */}
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
                                LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                            </span>
                        </div>
                        
                        <div className="space-y-3">
                            <h1 className="text-[32px] font-extrabold font-headline leading-[0.95] uppercase italic tracking-tighter text-[#121212]">
                                YOUR BUSINESS SHOULD NOT <br />
                                <span className="relative inline-block mt-1">
                                    DEPEND ON MEMORY.
                                    <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-[#D6A85F]/30 rounded-full" />
                                </span>
                            </h1>
                            <p className="text-[14px] font-normal leading-[1.6] text-[#4B5563]">
                                MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking — so work gets done properly, even during busy shifts, staff changes, or manager absence.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2.5">
                            {[
                                "Works directly on Google Sheets.",
                                "No new apps to learn."
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
                                <Link href="/library">See the systems</Link>
                            </button>
                        </div>
                    </div>
                </section>

                {/* DESKTOP HERO: THE DESIGN LAB MASTER */}
                <section className="hidden md:flex relative w-full h-[100svh] flex-col justify-start overflow-hidden bg-[#F8F6F2]">
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
                        <div className="max-w-[620px] space-y-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-[#8B6B3F] opacity-40 shrink-0" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#8B6B3F] font-headline whitespace-nowrap">
                                        LIVE SOP SYSTEMS FOR REAL-WORLD OPERATIONS
                                    </span>
                                </div>

                                <h1 className="text-[58px] font-extrabold font-headline leading-[0.95] uppercase text-[#121212] italic tracking-tighter">
                                    YOUR BUSINESS SHOULD NOT <br />
                                    <span className="relative inline-block mt-1">
                                        DEPEND ON MEMORY.
                                        <div className="absolute -bottom-1 left-0 w-full h-[6px] bg-[#D6A85F]/30 rounded-full" />
                                    </span>
                                </h1>
                                
                                <p className="text-[18px] font-normal leading-[1.6] text-[#4B5563] max-w-lg">
                                    MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, and clear execution tracking — so work gets done properly, even during busy shifts, staff changes, or manager absence.
                                </p>
                                
                                <div className="flex flex-col gap-2.5 pt-1">
                                    {[
                                        "Works directly on Google Sheets.",
                                        "No new apps to learn."
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
                                        See the systems <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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

                {/* --- 2. THE INFRASTRUCTURE BRIDGE: HOW IT WORKS --- */}
                <Section className="bg-white" id="the-bridge">
                    <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                        <div className="space-y-8 text-left">
                            <div className="space-y-4">
                                <SectionEyebrow text="THE INFRASTRUCTURE BRIDGE" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left">
                                    The Excel-to-Sheets <br/> Master Engine.
                                </h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-medium italic border-l-2 border-primary/20 pl-8 leading-relaxed">
                                    You don't need expensive software. You need a better engine. We provide a forensically engineered Master Excel file that controls your entire operation.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { t: "OWNER COMMAND", d: "Manage the Master Excel file from your desk. Set the standards once.", i: Lock },
                                    { t: "TEAM EXECUTION", d: "Your team operates through a live, mobile-optimized Ledger via Google Sheets.", i: Smartphone }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 shadow-sm">
                                            <item.i className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-sm font-black uppercase text-zinc-950 tracking-wide">{item.t}</h4>
                                            <p className="text-xs text-zinc-500 font-medium italic">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl group bg-[#F8F6F2]">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-10" />
                             <img 
                                src="https://i.postimg.cc/DyFXgFdj/people-stands-looks-documents.jpg" 
                                alt="Operational Synergy" 
                                className="w-full h-auto grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100"
                             />
                        </div>
                    </div>
                </Section>

                {/* --- 3. THE REALITY CHECK: PROBLEMS WE SOLVE --- */}
                <Section className="bg-zinc-950 text-white border-y border-white/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge className="bg-red-500 text-white uppercase font-black tracking-widest text-[9px] px-6 py-2 rounded-none italic">OPERATIONAL REALITY</Badge>
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline leading-[0.95] tracking-tight uppercase italic">
                                        The high cost <br/> of improvisation.
                                    </h2>
                                    <p className="text-zinc-400 text-lg md:text-xl font-medium italic">
                                        WhatsApp groups and verbal follow-ups are not systems. They are invitations for failure.
                                    </p>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { t: "Reporting Chase", d: "Spending 2 hours daily asking staff for status updates.", i: Activity },
                                        { t: "Audit Panic", d: "Scrambling to find proof of compliance during an inspection.", i: ShieldAlert },
                                        { t: "Knowledge Leakage", d: "Losing your standards when a key manager resigns.", i: History },
                                        { t: "Verbal Drift", d: "Instructions changing as they are passed shift-to-shift.", i: Zap }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-3 p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                                            <item.i className="w-5 h-5 text-red-500" />
                                            <h4 className="text-xs font-black uppercase tracking-widest text-white">{item.t}</h4>
                                            <p className="text-[10px] text-zinc-500 font-bold italic leading-relaxed">{item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 aspect-[4/5] bg-zinc-900 group">
                                <img 
                                    src="https://i.postimg.cc/X77vqvg6/confused-business-woman-using-laptop-computer-phone.jpg" 
                                    alt="Operational Stress" 
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10 p-6 bg-red-500/10 backdrop-blur-md border border-red-500/20 rounded-xl">
                                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">CURRENT_STATE</p>
                                    <p className="text-xl font-black italic uppercase leading-none">Unmonitored Chaos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. INSIDE THE ENGINE: WHAT YOU GET --- */}
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[1.5/1] bg-zinc-200">
                             <img 
                                src="https://i.postimg.cc/J0QtgD5V/colleagues-real-estate-architecture-working-together-project-design-development.jpg" 
                                alt="System Design" 
                                className="w-full h-full object-cover grayscale-[0.2]" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                        </div>
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <SectionEyebrow text="THE TECHNICAL SPEC" />
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">
                                    Inside the <br/> Master Engine.
                                </h2>
                                <p className="text-lg text-zinc-500 font-bold italic leading-relaxed">
                                    One file. Total control. Your Master Excel includes 5 forensically engineered chambers:
                                </p>
                            </div>
                            <div className="space-y-5">
                                {[
                                    { t: "Executive Dashboard", d: "Real-time completion rates and P1 incident alerts.", i: Activity },
                                    { t: "Live Execution Ledger", d: "Symmetric grid for 365-day task logging.", i: LayoutGrid },
                                    { t: "Master SOP Library", d: "Institutional instructions for every specialized role.", i: FileText },
                                    { t: "Personnel Hub", d: "Role-based personnel mapping and directory.", i: Users },
                                    { t: "Incident Registry", d: "Audit-ready evidence logs for insurers and board.", i: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.i className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <h4 className="text-sm font-black uppercase text-zinc-950 tracking-tighter">{item.t}</h4>
                                            <p className="text-[11px] text-zinc-500 font-bold italic leading-tight">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. THE ADOPTION MOAT: WHY IT WORKS --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="max-w-5xl mx-auto space-y-20 md:space-y-32">
                        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <SectionEyebrow text="THE ADOPTION MOAT" />
                                    <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tighter uppercase italic">
                                        Zero training. <br/> Total adoption.
                                    </h2>
                                    <p className="text-lg md:text-xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-emerald-500/20 pl-8">
                                        SaaS apps fail because of login friction and learning curves. Spreadsheets succeed because your team already uses them every single day.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "Opens on any smartphone via Google Sheets",
                                        "Initial and Name-based verification only",
                                        "No complex menu hierarchies for floor staff",
                                        "Instant visual feedback (Red/Green) on tasks"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                            </div>
                                            <span className="text-[12px] font-bold text-[#111111] uppercase tracking-wide">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 aspect-[1.6/1] bg-zinc-200">
                                <img 
                                    src="https://i.postimg.cc/fTZ9KZjq/three-factory-workers-safety-hats-discussing-manufacture-plan.jpg" 
                                    alt="Frontline Execution" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 6. RESIGNATION RISK (INSTITUTIONAL MEMORY) --- */}
                <Section className="bg-[#F8F6F2]">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10 order-2 lg:order-1">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2">ASSET PROTECTION</Badge>
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85] text-[#111111]">
                                    People resign. <br/> The system stays.
                                </h2>
                            </div>
                            <p className="text-lg md:text-2xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-[#B89B5E]/20 pl-8">
                                Tribal knowledge is a liability. MoreMeets™ converts individual experience into permanent organizational infrastructure.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Standardization", d: "Every site runs on your best manager's logic.", i: Target },
                                    { t: "Fast Onboarding", d: "New hires are productive in hours, not weeks.", i: GraduationCap },
                                    { t: "Role Continuity", d: "Responsibilities remain, even when faces change.", i: Users },
                                    { t: "Legal Defense", d: "Continuous evidence of due-diligence.", i: ShieldCheck }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <item.i className="w-5 h-5 text-[#B89B5E] shrink-0" />
                                        <div className="space-y-1">
                                            <p className="text-sm font-bold uppercase text-[#121212]">{item.t}</p>
                                            <p className="text-xs text-[#5F6368] italic">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                            <div className="absolute -inset-4 bg-[#B89B5E]/5 rounded-[3rem] -rotate-2" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-200">
                                <img 
                                    src="https://i.postimg.cc/Gt3b4Mvc/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg" 
                                    alt="Personnel Resilience" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 7. THE ELITE VERTICALS (SECTOR GRID) --- */}
                <Section className="bg-white">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <SectionEyebrow text="SECTOR SPECIFIC" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                High-Gravity Verticals.
                            </h2>
                            <p className="text-[#5F6368] text-lg md:text-xl italic leading-relaxed">
                                Not generic templates. Forensically engineered operational systems for environments where mistakes are not an option.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            {[
                                { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hospitals", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn },
                                { name: "Jewellery Retail", id: "retail_jewellery_operations_pack", icon: Gem }
                            ].map((ind, i) => (
                                <Link key={i} href={`/packs/${ind.id}`} className="group p-8 rounded-[2rem] bg-[#F8F6F2]/50 border border-black/5 hover:bg-white hover:shadow-2xl hover:border-emerald-500/20 transition-all duration-700 text-center flex flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#B89B5E] group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 shadow-inner">
                                        <ind.icon className="w-7 h-7" />
                                    </div>
                                    <span className="text-sm md:text-base font-bold uppercase tracking-tighter italic text-[#111111] group-hover:text-[#2E7D5A] transition-colors">{ind.name}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center pt-8">
                            <button className="h-14 px-12 rounded-full border-2 border-black/5 text-[#111111] font-bold uppercase text-[11px] tracking-widest hover:bg-[#111111] hover:text-white transition-all">
                                <Link href="/library">Explore All 25+ Systems</Link>
                            </button>
                        </div>
                    </div>
                </Section>

                {/* --- 8. SUSTAINABILITY THROUGH RIGOR --- */}
                <Section className="bg-[#111111] text-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <Badge className="bg-emerald-500 text-white uppercase font-black tracking-widest text-[10px] px-6 py-2 rounded-none">OPERATIONAL ESG</Badge>
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85]">
                                    Sustainability <br/> through Rigor.
                                </h2>
                                <p className="text-zinc-400 text-lg md:text-xl italic font-medium leading-relaxed max-w-lg">
                                    Environmental sustainability isn't a separate report. It's the byproduct of daily operational discipline.
                                </p>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
                                {[
                                    { t: "Energy Discipline", d: "Verified shutdown logs for lighting and HVAC.", i: Zap },
                                    { t: "Resource Pulse", d: "Daily water meter parity to stop unmonitored leaks.", i: Leaf },
                                    { t: "Waste Mitigation", d: "Yield monitoring to stop overproduction at source.", i: Recycle },
                                    { t: "Asset Longevity", d: "Maintenance rigor that extends equipment lifespan.", i: Wrench }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B89B5E] group-hover:text-emerald-400 transition-colors">
                                            <item.i className="w-5 h-5" />
                                        </div>
                                        <h4 className="text-base font-bold uppercase italic text-white">{item.t}</h4>
                                        <p className="text-xs text-zinc-500 italic leading-relaxed">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] rounded-full" />
                            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 aspect-square shadow-2xl">
                                 <img 
                                    src="https://i.postimg.cc/J0QtgD5V/colleagues-real-estate-architecture-working-together-project-design-development.jpg" 
                                    alt="Sustainability Vitals" 
                                    className="w-full h-full object-cover grayscale-[0.2] brightness-75" 
                                 />
                                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                 <div className="absolute bottom-10 left-10 space-y-2">
                                     <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">VITALS_SECURED</p>
                                     <p className="text-2xl font-black italic uppercase">Infrastructure_Online</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- 9. FINAL MANDATE --- */}
                <Section className="bg-[#F8F6F2] py-32 md:py-60 border-t border-black/5" noSpine>
                    <div className="max-w-5xl mx-auto space-y-16 text-center">
                        <div className="space-y-6">
                            <h2 className="text-[38px] md:text-[88px] font-extrabold leading-[0.85] tracking-tighter uppercase italic font-headline text-[#111111]">
                                STOP CHASING. <br/> START RUNNING.
                            </h2>
                            <p className="text-lg md:text-[28px] text-[#5F6368] font-medium italic leading-tight max-w-2xl mx-auto">
                                Deploy operational excellence across your business in the next 10 minutes.
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-16 md:h-24 px-12 md:px-24 rounded-[2rem] bg-[#111111] text-white font-bold uppercase text-[12px] md:text-[14px] tracking-widest shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)] transition-all hover:translate-y-[-4px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.4)] border-none group">
                                <Link href="/library" className="flex items-center gap-6">
                                    Get Your System <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                                </Link>
                            </button>
                            <div className="flex items-center gap-4 text-[9px] md:text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] italic">
                                <span>ONE-TIME PURCHASE</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-300" />
                                <span>NO SaaS TAX</span>
                                <div className="w-1 h-1 rounded-full bg-zinc-300" />
                                <span>OWN YOUR DATA</span>
                            </div>
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
                    animation: marquee 60s linear infinite;
                }
            `}</style>
        </div>
    );
}
