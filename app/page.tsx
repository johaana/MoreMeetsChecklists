'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    X,
    ArrowRight, 
    Activity,
    Lock,
    ShoppingBag,
    ClipboardCheck,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    CheckCircle2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    Leaf,
    Recycle,
    Wrench,
    FileSpreadsheet,
    History,
    ShieldAlert,
    Target,
    LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { Button } from '@/components/ui/button';

const BRAND_GREEN = "#22C55E";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "Capture operational memory. See daily work getting done. Even when you aren't there.",
    cta: "Deploy the system",
    meta: "WORKS ON PHONES • NO INSTALLATION • NO TRAINING DEPENDENCY • BUILT IN EXCEL • OPERATED VIA SHEETS"
};

const TECH_SPECS = [
    { t: "120+ Pre-built technical SOPs", i: ClipboardCheck },
    { t: "Live Operational Dashboard", i: Activity },
    { t: "Excel Master • Operated via Sheets", i: FileSpreadsheet },
    { t: "Built-in Trainer Notes for staff", i: Smartphone }
];

const SIGNALS = [
    "WORK GETTING MISSED",
    "MANAGERS CHASING TEAMS",
    "IMPORTANT TASKS FORGOTTEN",
    "NO LIVE WORK STATUS"
];

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 bg-black pointer-events-none">
          <img
            src="https://i.postimg.cc/kXX5G5yS/top-view-businessman-using-tablet-pc-analyzing-financial-charts-documents-sitting-desk-corporate-off.jpg"
            alt="Executive Operational Oversight"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 md:via-black/90 to-black/20" />
        </div>
    );
};

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const PulsatingStressText = ({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) => (
    <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
        <span className="text-[14px] md:text-[22px] font-black text-red-600 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.4)] whitespace-nowrap">
            {text}
        </span>
    </div>
);

const CommandGrid = ({ className, textColor = "text-white/50" }: { className?: string, textColor?: string }) => (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 md:gap-y-4", className)}>
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
    <div className={cn("space-y-4 md:space-y-5", className)}>
        <div className="space-y-3">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
                <Link href="/library">
                    {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-950 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
            <p className="text-[10px] md:xs text-zinc-400 font-bold italic">
                Operated via Google Sheets for live team access. No software rollout required.
            </p>
        </div>
        <div className="w-full">
             <p className="text-[7px] min-[360px]:text-[8px] min-[400px]:text-[9px] md:text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] italic leading-none whitespace-nowrap">
                {NARRATIVE.meta}
            </p>
        </div>
    </div>
);

const HeroSectionComp = () => {
    return (
        <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black">
            <HeroBackground />
            
            <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-24 lg:px-32 pt-24 pb-12 md:py-0 md:pt-16">
                <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr,0.8fr] lg:gap-16 items-center">
                    <div className="order-1 space-y-8 md:space-y-12 w-full">
                        <div className="space-y-1 md:space-y-2">
                            <h1 className="text-[34px] md:text-[84px] lg:text-[100px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                                {NARRATIVE.line1} <br />
                                <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                            </h1>
                            <p className="text-base md:text-[22px] lg:text-[26px] italic font-medium text-zinc-400 max-w-none lg:whitespace-nowrap leading-tight">
                                {NARRATIVE.subline}
                            </p>
                        </div>

                        <div className="space-y-8 md:space-y-10">
                            <div className="space-y-2 md:space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-5 md:h-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">THE NEW STANDARD</p>
                                </div>
                                <CommandGrid className="max-w-xl" textColor="text-white/80" />
                            </div>
                            
                            <SovereignCTA />
                        </div>
                    </div>

                    <div className="order-2 w-full lg:text-right lg:border-r-2 border-red-500/20 lg:pr-10 mt-12 lg:mt-16 border-l-2 pl-6 lg:border-l-0">
                         <p className="text-[9px] md:text-[10px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">INSTITUTIONAL SIGNALS</p>
                         <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 mt-4 md:mt-6">
                             {SIGNALS.map((text, i) => (
                                <PulsatingStressText key={i} text={text} delay={`${i * 0.2}s`} />
                             ))}
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-white text-[#0B0F14] font-sans antialiased selection:bg-primary/20">
            <SiteHeader />
            <main className="flex-1">
                <HeroSectionComp />

                {/* --- FRICTION STRIP: THE INVISIBLE COST --- */}
                <Section className="bg-zinc-950 text-white py-12 md:py-24" noSpine>
                    <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                        <div className="space-y-4 text-center lg:text-left">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-800 uppercase tracking-[0.4em] font-black text-[10px]">OPERATIONAL FRICTION</Badge>
                            <h2 className="text-[28px] md:text-[44px] font-black font-headline uppercase italic tracking-tighter leading-none text-center lg:text-left">
                                When execution depends on memory.
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { t: "Managers chasing confirmations", d: "Time wasted in unsearchable chat follow-ups.", img: "https://i.postimg.cc/X77vqvg6/confused-business-woman-using-laptop-computer-phone.jpg" },
                                { t: "Shift handovers missed", d: "Critical instructions vanishing during team rotations.", img: "https://i.postimg.cc/280FwBsB/businessman-having-headache.jpg" },
                                { t: "Assumed, not verified", d: "Technical safety checks being skipped during the rush.", img: "https://i.postimg.cc/Gt3b4Mvc/portrait-young-office-worker-woman-sitting-office-desk-with-documents-talking-mobile-phone-nervous-s.jpg" },
                                { t: "Knowledge in folders", d: "SOPs existing as static PDFs, not daily live actions.", img: "https://i.postimg.cc/zXxSjRsW/businesspeople-having-problems-office.jpg" }
                            ].map((item, i) => (
                                <div key={i} className="group space-y-4">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 border border-white/5 relative">
                                        <img src={item.img} alt="" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black uppercase italic tracking-tight text-white/90">{item.t}</h4>
                                        <p className="text-[11px] font-bold text-zinc-500 italic leading-snug">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- WITHOUT VS WITH SECTION --- */}
                <Section className="bg-white border-y border-zinc-100">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">OPERATIONAL UPGRADE</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">NOT SOFTWARE. INFRASTRUCTURE.</h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="p-10 md:p-20 bg-zinc-50 border-r border-zinc-200 relative text-left">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl md:text-4xl font-black font-headline text-red-600 uppercase italic tracking-tighter">Without MoreMeets</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "SOPs ignored in static folders",
                                            "Managers chase updates via WhatsApp",
                                            "Training depends on manager memory",
                                            "Audit panic during inspections",
                                            "Operational memory loss when staff leave"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-zinc-500 text-lg md:text-xl font-bold italic leading-snug">
                                                <X className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-10 md:p-20 bg-emerald-50/30 relative text-left">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl md:text-4xl font-black font-headline text-primary uppercase italic tracking-tighter">With MoreMeets</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Live execution tracking on mobile",
                                            "Accountability visibility for leadership",
                                            "Structured, instructional handovers",
                                            "Permanent audit-readiness",
                                            "Institutional continuity secured"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-zinc-950 text-lg md:text-xl font-black italic leading-snug uppercase">
                                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- BUILT FOR LEADERSHIP SECTION --- */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-24 items-center">
                        <div className="space-y-8 text-left">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">EXECUTIVE OVERSIGHT</Badge>
                                <h2 className="text-[34px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                                    One master console. <br/> Total multi-unit grip.
                                </h2>
                                <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-relaxed border-l-2 border-primary/20 pl-8">
                                    Stop the daily stress. Make your business run itself. MoreMeets™ provides the high-gravity visibility required for Founders and COOs to scale without losing operational discipline.
                                </p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { t: "Institutional Memory", d: "Knowledge stays with the business when key staff resign.", i: History },
                                    { t: "Live Visibility", d: "See what's done across all branches without being there.", i: Activity },
                                    { t: "Zero Training Lag", d: "New staff follow built-in instructions from day one.", i: GraduationCap },
                                    { t: "Audit-Ready Records", d: "Verifiable logs for insurers, inspectors, and regulators.", i: ShieldCheck }
                                ].map((feat, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center shrink-0 border border-zinc-100 shadow-sm group-hover:bg-primary group-hover:text-black transition-all">
                                            <feat.i className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="font-black text-xs uppercase italic text-zinc-950 leading-none">{feat.t}</p>
                                            <p className="text-[11px] font-bold text-zinc-400 italic leading-snug">{feat.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-primary/20 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-950">
                                <img 
                                    src="https://i.postimg.cc/R0T17F2p/ceo-engages-phone-call-briefing-with-investor-sharing-insight.jpg" 
                                    alt="Executive Leadership Control" 
                                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                                />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- DEPLOYMENT HUB --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">Rapid Deployment</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">DEPLOY IN 10 MINUTES</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { t: "Download", d: "Get your pre-built, industry-specific Excel Master instantly after payment." },
                                { t: "Upload Master", d: "Upload your Excel Master to Google Drive for live team access via Google Sheets." },
                                { t: "Assign", d: "Add your business details, map staff names to roles, and set your controls once." },
                                { t: "Run", d: "Daily tasks begin populating automatically by role, date, and frequency — live across your team." }
                            ].map((step, i) => (
                                <div className="space-y-8 group text-left" key={i}>
                                    <div className="text-6xl md:text-8xl font-black italic text-zinc-950 group-hover:text-primary transition-colors leading-none">
                                        {i+1}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-xl md:text-2xl uppercase italic leading-tight font-headline text-zinc-950 text-left">{step.t}</h4>
                                        <p className="text-base text-zinc-500 font-bold italic leading-relaxed text-left">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTOR NAVIGATOR --- */}
                <Section className="bg-[#0E1420] border-y border-white/5">
                    <div className="space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-[36px] md:text-[64px] font-black text-white uppercase italic tracking-tight font-headline">Select Your Vertical</h2>
                            <p className="text-white/40 text-xl md:text-2xl font-bold italic">Operational Infrastructure engineered for single units and multi-unit groups.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                            {[
                                { name: "Restaurants", id: "restaurants", icon: Utensils },
                                { name: "Hotels", id: "hotels_and_resorts", icon: Building },
                                { name: "Retail", id: "retail_operations_system", icon: ShoppingBag },
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

                <TestimonialsSection />
                <FaqSection />
                
                <Section className="bg-primary text-white text-center py-32 md:py-64 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="max-[1000px] mx-auto space-y-16 md:space-y-24 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-[48px] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-black text-center">Professional Access Pricing</h2>
                            <h3 className="text-xl md:text-[36px] text-black/60 font-bold italic text-center">Institutional systems. Intentionally priced for everyday operators.</h3>
                        </div>
                        <div className="flex flex-col items-center gap-10 md:gap-14">
                            <button className="h-14 min-[400px]:h-[90px] md:h-[120px] px-8 min-[400px]:px-16 md:px-24 rounded-[20px] min-[400px]:rounded-[30px] bg-black text-white font-black uppercase italic text-lg min-[400px]:text-2xl md:text-5xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-2xl mx-auto flex items-center justify-center">
                                <Link href="/library" className="flex items-center gap-4 min-[400px]:gap-8 justify-center">Live in 10 minutes <ArrowRight className="w-6 h-6 min-[400px]:w-10 min-[400px]:h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-4" /></Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[56px] md:text-[84px] font-black italic text-black">₹999</p>
                                    <span className="text-2xl md:text-4xl font-bold text-black/40 italic">/ $12</span>
                                </div>
                                <p className="text-sm font-black uppercase tracking-[0.5em] text-black/60">One-time payment • Own forever</p>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
