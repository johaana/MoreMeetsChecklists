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
    Target,
    Activity,
    CheckCircle2,
    Users,
    History,
    ShieldCheck,
    Smartphone,
    LayoutGrid,
    ChevronRight,
    Lock,
    GraduationCap,
    Zap,
    AlertTriangle,
    FileSpreadsheet,
    Eye,
    Wrench,
    Leaf,
    Recycle,
    SearchCheck,
    FileSignature,
    BoxSelect,
    Building,
    Utensils,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Gem,
    ShieldAlert,
    CheckSquare
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
                
                {/* MOBILE HERO: VARIATION 1.1 (EDITORIAL STACK) */}
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
                            <button className="w-full mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5F6368] flex items-center justify-center gap-2 group">
                                <Link href="#how-it-works">Watch Teams Use It</Link> <ArrowRight className="w-3.5 h-3.5" />
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
                                <button className="group text-[#5F6368] font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:text-[#111111] flex items-center gap-3">
                                    <Link href="#how-it-works">Watch Teams Use It</Link>
                                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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

                {/* --- 2. THE SYSTEM IS THE PRODUCT (ENVIRONMENT) --- */}
                <Section className="bg-white border-y border-black/5" id="how-it-works">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <SectionEyebrow text="THE INFRASTRUCTURE" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                Focus on Outcomes.
                            </h2>
                            <p className="text-[#5F6368] text-lg md:text-xl italic leading-relaxed">
                                Your team doesn't need to learn a new app. If they can use Google Sheets on a phone, they can operate MoreMeets. Every task is timestamped, assigned, and verifiable.
                            </p>
                        </div>

                        <div className="relative max-w-6xl mx-auto rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] group bg-[#F8F6F2]">
                             <div className="absolute inset-0 bg-gradient-to-t from-[#F8F6F2]/40 via-transparent to-transparent pointer-events-none z-10" />
                             <img 
                                src="https://picsum.photos/seed/operational-flow/1200/800" 
                                alt="Operational Efficiency" 
                                className="w-full h-auto grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 opacity-90 hover:opacity-100"
                                data-ai-hint="operational teamwork"
                             />
                             <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 z-20">
                                <Badge className="bg-emerald-500 text-white border-none px-6 py-2 uppercase font-black tracking-widest text-[10px] shadow-2xl">
                                    VITALS_SECURED
                                </Badge>
                             </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 md:gap-20 max-w-5xl mx-auto">
                            {[
                                { t: "SELECT YOUR PACK", d: "Choose from specialized industry systems pre-built by forensic experts." },
                                { t: "ASSIGN PERSONNEL", d: "Map staff names to roles in the master hub. No IT required." },
                                { t: "TRACK EXECUTION", d: "Watch tasks turn green across your business from any mobile device." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-4 relative group">
                                    <span className="text-[80px] font-black text-[#F8F6F2] absolute -top-12 -left-4 leading-none select-none">
                                        0{i+1}
                                    </span>
                                    <div className="relative z-10 space-y-2">
                                        <h3 className="text-xl font-bold uppercase tracking-tighter italic text-[#111111]">{step.t}</h3>
                                        <p className="text-[#5F6368] text-sm md:text-base leading-relaxed font-medium italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 3. RESIGNATION RISK (INSTITUTIONAL MEMORY) --- */}
                <Section className="bg-[#F8F6F2]">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 uppercase tracking-[0.4em] font-black text-[10px] px-6 py-2">ASSET PROTECTION</Badge>
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85] text-[#111111]">
                                    When staff leave, <br/> the standard stays.
                                </h2>
                            </div>
                            <p className="text-lg md:text-2xl text-[#4B5563] font-medium leading-[1.4] italic border-l-4 border-[#B89B5E]/20 pl-8">
                                Tribal knowledge is a liability. MoreMeets™ converts individual experience into permanent organizational infrastructure.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Institutional Memory", d: "Capture 'how things work' forever.", i: History },
                                    { t: "Zero-Friction Training", d: "Built-in notes for every task.", i: GraduationCap },
                                    { t: "Role Continuity", d: "Roles are owned by the business.", i: Users },
                                    { t: "Audit Readiness", d: "Continuous record of compliance.", i: ShieldCheck }
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
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#B89B5E]/5 rounded-[3rem] -rotate-2" />
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 aspect-[4/5] bg-zinc-200">
                                <img 
                                    src="https://i.postimg.cc/jdMQXJpq/resignation1.jpg" 
                                    alt="Resignation Risk" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- 4. THE ELITE VERTICALS (SECTOR GRID) --- */}
                <Section className="bg-white">
                    <div className="space-y-20 md:space-y-32">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <SectionEyebrow text="SECTOR SPECIFIC" />
                            <h2 className="text-[38px] md:text-[64px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.9] text-[#111111]">
                                Engineered for Gravity.
                            </h2>
                            <p className="text-[#5F6368] text-lg md:text-xl italic leading-relaxed">
                                Not generic checklists. Forensically engineered operational systems for high-stakes environments.
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
                                { name: "Luxury Retail", id: "retail_jewellery_operations_pack", icon: Gem }
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

                {/* --- 5. SUSTAINABILITY THROUGH RIGOR --- */}
                <Section className="bg-[#111111] text-white">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <Badge className="bg-emerald-500 text-white uppercase font-black tracking-widest text-[10px] px-6 py-2 rounded-none">OPERATIONAL ESG</Badge>
                                <h2 className="text-[38px] md:text-[68px] font-extrabold font-headline tracking-tighter uppercase italic leading-[0.85]">
                                    Sustainability <br/> through Rigor.
                                </h2>
                                <p className="text-zinc-400 text-lg md:text-xl italic font-medium leading-relaxed max-w-lg">
                                    Environmental sustainability is the byproduct of daily operational discipline. Our systems automate the vitals.
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
                                    src="https://picsum.photos/seed/green-infra/800/800" 
                                    alt="Sustainability Vitals" 
                                    className="w-full h-full object-cover grayscale-[0.2] brightness-75" 
                                    data-ai-hint="sustainable building"
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

                {/* --- 6. FINAL MANDATE --- */}
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
            `}</style>
        </div>
    );
}
