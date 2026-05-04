'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    X,
    ArrowRight, 
    Download,
    LayoutGrid,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Building2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Popcorn,
    Lock,
    Target,
    ShoppingBag,
    History,
    ClipboardCheck,
    Smartphone
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { Button } from '@/components/ui/button';

// --- PRODUCTION CONSTANTS ---
const VIMEO_URL = "https://player.vimeo.com/video/1187795401?background=1&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0";
const BRAND_GREEN = "#22C55E";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "See daily work getting done. Even when you aren't there.",
    cta: "Deploy the system",
    meta: "SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE"
};

const TECH_SPECS = [
    { t: "120+ Industry Specific SOPs", i: ClipboardCheck },
    { t: "Live Dashboard Visibility", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for staff", i: Smartphone }
];

const ANXIETY_ITEMS = [
    "Always chasing staff?",
    "Work gets missed?",
    "The team is confused?",
    "Memories fade?"
];

// --- HELPER COMPONENTS ---

const BackgroundVideo = ({ opacity = 0.3, grayscale = false }) => (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <iframe
            src={VIMEO_URL}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full min-h-[56.25vw] scale-[1.05]",
                grayscale && "saturate-0 brightness-75 contrast-110"
            )}
            style={{ opacity, border: 'none' }}
            title="Sovereign Background"
        />
    </div>
);

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-12 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[14px] md:text-[20px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.4)] whitespace-nowrap">
            {text}
        </span>
    </div>
);

const CommandGrid = ({ className, textColor = "text-white/50" }: { className?: string, textColor?: string }) => (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-5", className)}>
        {TECH_SPECS.map((item, i) => (
            <div key={i} className="flex items-center gap-3 group">
                <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                </div>
                <span className={cn("text-[12px] md:text-[14px] font-bold uppercase tracking-[0.05em] italic leading-tight group-hover:text-[#22C55E] transition-colors", textColor)}>
                    {item.t}
                </span>
            </div>
        ))}
    </div>
);

const SovereignCTA = ({ className }: { className?: string }) => (
    <div className={cn("space-y-4 md:space-y-5 flex flex-col items-center sm:items-start", className)}>
        <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
            <Link href="/library">
                {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-950 transition-transform group-hover:translate-x-1" />
            </Link>
        </Button>
        <div className="w-full text-center">
             <p className="text-[8px] md:text-[10px] text-zinc-600 font-black uppercase tracking-[0.4em] italic">
                {NARRATIVE.meta}
            </p>
        </div>
    </div>
);

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[90svh] md:h-screen flex flex-col justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
                <BackgroundVideo opacity={0.3} grayscale />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/70 to-transparent pointer-events-none" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 lg:px-32 py-12 md:py-0 md:pt-48">
                <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:gap-20 items-center">
                    
                    {/* Phase 01: The Hook */}
                    <div className="order-1 space-y-3 md:space-y-6 w-full">
                        <div className="space-y-1 md:space-y-2">
                             <h1 className="text-[34px] md:text-[100px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1} <br />
                                <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                             </h1>
                        </div>
                        <p className="text-base md:text-[30px] italic font-medium text-zinc-400 max-w-none lg:whitespace-nowrap leading-tight">
                            {NARRATIVE.subline}
                        </p>
                    </div>
                    
                    {/* Phase 02: The Operational Pain */}
                    <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-3 space-y-4 md:space-y-8 text-left border-l-2 lg:text-right lg:border-l-0 lg:border-r-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:border-l border-white/5 mt-8 lg:mt-0">
                         <p className="text-[9px] md:text-[10px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">WHY TEAMS STRUGGLE</p>
                         <div className="flex flex-col gap-2 md:gap-6">
                             {ANXIETY_ITEMS.map((text, i) => (
                                <PulsatingStressText key={i} text={text} delay={`${i * 0.2}s`} />
                             ))}
                         </div>
                    </div>

                    {/* Phase 03: The New Standard Bridge */}
                    <div className="order-3 w-full lg:col-start-1 lg:row-start-2 space-y-6 md:space-y-8 mt-10 lg:mt-2">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">THE NEW STANDARD</p>
                            </div>
                            <CommandGrid className="max-w-xl" textColor="text-white/80" />
                        </div>
                    </div>

                    {/* Phase 04: The Command */}
                    <div className="order-4 w-full lg:col-start-1 lg:row-start-3 mt-8 md:mt-4">
                        <SovereignCTA />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PageHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-[32px] md:text-[64px] font-black font-headline text-[#0E1420] leading-[0.95] tracking-tight uppercase italic", className)}>
        {children}
    </h2>
);

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F7F8FA] text-[#0B0F14] font-sans antialiased selection:bg-[#F4A261]/30">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                <HeroSection />

                {/* THE INSTEAD OF MANDATE */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 md:gap-0 border border-[#E8E7E2] rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="p-10 md:p-20 bg-[#F7F8FA] space-y-8">
                            <h3 className="text-[14px] font-black text-red-500 uppercase tracking-[0.5em]">THE FRICTION</h3>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">Instead of...</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Hiring consultants at ₹50,000+ per unit.",
                                        "Spending 100+ hours building SOPs from scratch.",
                                        "Managing through unsearchable chat groups.",
                                        "Chasing staff manually for basic daily tasks."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[#5B6670] text-lg font-bold italic leading-snug">
                                            <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="p-10 md:p-20 bg-primary/5 space-y-8">
                            <h3 className="text-[14px] font-black text-primary uppercase tracking-[0.5em]">THE SOVEREIGN SOLUTION</h3>
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black font-headline italic uppercase tracking-tighter leading-tight">You deploy...</h2>
                                <p className="text-xl md:text-2xl text-primary font-bold italic leading-snug">
                                    A complete institutional data engine. What usually takes weeks to build—now runs in 10 minutes.
                                </p>
                                <ul className="space-y-6 pt-4">
                                    {[
                                        "120+ Pre-built technical protocols.",
                                        "Live dashboard for one-glance visibility.",
                                        "Built-in Trainer's Notes for staff.",
                                        "Binary 'Done/Missed' verification."
                                    ].map((text, i) => (
                                        <li key={i} className="flex items-start gap-4 text-[#0B0F14] text-lg font-bold italic leading-snug">
                                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                            <span>{text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* PITFALLS & CONSEQUENCES */}
                <Section className="bg-[#F7F8FA] border-y border-[#E8E7E2]">
                    <div className="max-w-[1000px] mx-auto text-center space-y-16">
                        <div className="space-y-6">
                            <PageHeadline>Why operations break</PageHeadline>
                            <p className="text-xl md:text-2xl text-[#5F6672] italic font-medium">Systems fail slowly before they fail catastrophically.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 text-left">
                            <div className="space-y-8">
                                <h4 className="text-[12px] font-black text-[#5F6672] uppercase tracking-[0.5em]">COMMON PITFALLS</h4>
                                <ul className="space-y-8">
                                    {[
                                        "Work depends on the memory of key individuals.",
                                        "Standard steps become 'suggestions' during busy shifts.",
                                        "New staff require weeks of learning tribal knowledge.",
                                        "Minor near-misses go unrecorded, creating hidden liability.",
                                        "Managers spend 40% of their day following up basic work."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-5 group">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 group-hover:scale-125 transition-transform" />
                                            <span className="text-[#5F6672] text-lg md:text-[20px] font-bold italic leading-tight">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8 p-10 md:p-14 rounded-[3rem] bg-white border border-[#E8E7E2] shadow-2xl">
                                <h4 className="text-[12px] font-black text-red-600 uppercase tracking-[0.5em]">THE CONSEQUENCE</h4>
                                <ul className="space-y-8">
                                    {[
                                        "Managers trapped in a loop of constant manual checking.",
                                        "SOPs sit in dusty folders while chaos runs the floor.",
                                        "Zero auditable trail for insurance or legal defense.",
                                        "Standards leave the building when a key person resigns.",
                                        "Inconsistency destroys brand trust and guest loyalty."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <X className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-red-950 font-black text-lg md:text-[20px] leading-tight italic uppercase">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="pt-12">
                            <p className="text-[28px] md:text-[44px] font-black text-[#0B0F14] uppercase italic tracking-tighter leading-none font-headline">
                                Small misses. Every day. <br/>
                                <span className="text-red-500">That’s where control is lost.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* HOW IT WORKS & VISUAL PAYOFF */}
                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <PageHeadline>Start in minutes</PageHeadline>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { t: "Download system", d: "Get your industry-specific file with 120+ pre-built protocols.", i: Download },
                                { t: "Open in Sheets", d: "Upload once. Access from phone or desktop instantly.", i: FileSpreadsheet },
                                { t: "Share with team", d: "Assign roles. Lock formulas so nothing breaks.", i: Lock },
                                { t: "See everything live", d: "Track tasks as they get done. Know what’s missed instantly.", i: Activity }
                            ].map((step, i) => (
                                <div className="bg-[#F7F8FA] border border-[#E8E7E2] p-10 md:p-12 rounded-[2.5rem] space-y-8 hover:shadow-2xl hover:bg-white hover:border-primary/30 transition-all group" key={i}>
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#E8E7E2] flex items-center justify-center text-[#0B0F14] font-black group-hover:bg-primary group-hover:text-white transition-all text-2xl italic shadow-sm">
                                        {i+1}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-xl md:text-2xl uppercase italic leading-tight font-headline">{step.t}</h4>
                                        <p className="text-base text-[#5F6672] font-bold italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* TECHNICAL PROOF: FULL DASHBOARD VISIBILITY */}
                        <div className="space-y-16">
                            <div className="relative group w-full max-w-6xl mx-auto">
                                <div className="bg-[#111] h-6 md:h-10 w-full rounded-t-lg md:rounded-t-[20px] flex items-center px-4 md:px-6 gap-1.5 border border-white/10">
                                    <div className="flex gap-1 md:gap-1.5">
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-red-500/30" />
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-amber-500/30" />
                                        <div className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-green-500/30" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-black/40 border border-white/5 rounded-md px-4 md:px-12 py-1 text-[6px] md:text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                                            MASTER_CONSOLE
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-b-lg md:rounded-b-[20px] overflow-hidden shadow-[0_40px_100px_-15px_rgba(0,0,0,0.25)] bg-white border border-[#E6E8EC] border-t-0 relative">
                                    <img 
                                        src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" 
                                        alt="Sovereign Dashboard" 
                                        className="w-full h-auto object-contain grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" 
                                    />
                                </div>
                                
                                <div className="mt-8 text-center space-y-2">
                                    <p className="text-[8px] md:text-[11px] font-black text-[#5B6670] uppercase tracking-[0.5em] italic opacity-60">
                                        Sample of restaurant operations system dashboard
                                    </p>
                                    <p className="text-[10px] md:text-[14px] font-bold text-primary uppercase tracking-[0.3em] italic">
                                        One glance shows what's done across your entire group.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="text-center pt-8">
                                <p className="text-2xl md:text-[40px] font-black text-[#0B0F14] uppercase italic tracking-tighter font-headline">
                                    👉 That’s it. Your operations are now structured.
                                </p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#0E1420] border-y border-white/5">
                    <div className="space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-[36px] md:text-[64px] font-black text-white uppercase italic tracking-tight font-headline">Select Your Vertical</h2>
                            <p className="text-white/40 text-xl md:text-2xl font-bold italic">Engineered for single units and multi-unit groups.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels", id: "hotels_and_resorts", icon: Building },
                                { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
                                { name: "Schools", id: "school_operations_pack", icon: School },
                                { name: "Franchise", id: "franchise_operations_pack", icon: Store },
                                { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
                                { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
                            ].map((sector) => (
                                <Link key={sector.id} href={`/packs/${sector.id}`} className="group flex flex-col items-center gap-6 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/50 transition-all text-center">
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:scale-110 transition-all shadow-inner">
                                        <sector.icon className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>
                                    <span className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] text-white/40 group-hover:text-white leading-tight italic">{sector.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* COMPARISON TABLE */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-[#0B0F14] uppercase italic tracking-tight font-headline">System Sovereignty</h2>
                            <p className="text-[#5F6672] text-xl font-bold italic">Why elite groups choose MoreMeets over standard SaaS.</p>
                        </div>
                        <div className="overflow-x-auto no-scrollbar rounded-[3rem] border border-[#E8E7E2] shadow-2xl">
                            <table className="w-full text-left min-w-[600px]">
                                <thead className="bg-[#0B0F14] text-white">
                                    <tr>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">ENGINE PARAMETER</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em] bg-primary/20">MOREMEETS™ OS</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">TYPICAL SaaS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#E8E7E2] text-base md:text-lg font-bold italic">
                                    {[
                                        { f: "Data Ownership", mm: "One-time buy. Own it forever.", app: "Monthly lease. Pay forever." },
                                        { f: "Customization", mm: "100% Unlocked Excel logic.", app: "Locked features. Requests needed." },
                                        { f: "Onboarding", mm: "Zero training. Uses existing skills.", app: "Weeks of learning a new app." },
                                        { f: "Infrastructure", mm: "Sovereign. Stays in your local Drive.", app: "Stored on third-party servers." },
                                        { f: "Deployment", mm: "Instant. Live in 10 minutes.", app: "Weeks of setup & integration." }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-zinc-50 transition-colors">
                                            <td className="p-8 md:p-10 font-black uppercase text-zinc-400 text-[12px] tracking-[0.3em]">{row.f}</td>
                                            <td className="p-8 md:p-10 text-primary bg-primary/5">{row.mm}</td>
                                            <td className="p-8 md:p-10 text-[#5F6672]">{row.app}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Section>

                <TestimonialsSection />
                <FaqSection />

                <Section className="bg-primary text-white text-center py-32 md:py-64 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="max-w-[1000px] mx-auto space-y-16 md:space-y-24 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-[48px] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-[#0E1420]">Start running properly today</h2>
                            <p className="text-xl md:text-[36px] text-[#0E1420]/70 font-bold italic">Deployment takes less than 10 minutes.</p>
                        </div>
                        <div className="flex flex-col items-center gap-10 md:gap-14">
                            <button className="h-[90px] md:h-[120px] px-16 md:px-24 rounded-[30px] bg-[#C88A4A] text-white font-black uppercase italic text-2xl md:text-5xl shadow-[0_30px_60px_-15px_rgba(200,138,74,0.6)] hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-2xl mx-auto flex items-center justify-center">
                                <Link href="/library" className="flex items-center gap-8 justify-center">Get Your System <ArrowRight className="w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-4" /></Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[56px] md:text-[84px] font-black italic text-[#0E1420]">₹2,999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-[#0E1420]/40 italic">/ $29</span>
                                </div>
                                <p className="text-[14px] font-black uppercase tracking-[0.5em] text-[#0E1420]/60">One-time payment • Own forever</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
