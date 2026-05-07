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
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { Button } from '@/components/ui/button';

// --- PRODUCTION CONSTANTS ---
const BRAND_GREEN = "#22C55E";

const NARRATIVE = {
    line1: "STOP CHASING.",
    line2: "START SEEING.",
    subline: "See daily work getting done. Even when you aren't there.",
    cta: "Deploy the system",
    meta: "SINGLE / MULTI-UNIT READY • AUDIT-READY COMPLIANCE"
};

const TECH_SPECS = [
    { t: "100+ Industry-Specific SOPs", i: ClipboardCheck },
    { t: "Live Operational Dashboard", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for teams", i: Smartphone }
];

const ANXIETY_ITEMS = [
    "Always chasing teams?",
    "Work gets missed?",
    "The team is confused?",
    "Memories fade?"
];

// --- HELPER COMPONENTS ---

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 bg-black pointer-events-none">
          <img
            src="https://i.postimg.cc/BvKyg8vX/ceo-engages-phone-call-briefing-with-investor-sharing-insight.jpg"
            alt="Operational leadership under pressure"
            className="h-full w-full object-cover object-center opacity-30 md:opacity-40"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
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
    <div className={cn("space-y-4 md:space-y-5 flex flex-col items-center sm:items-start", className)}>
        <div className="space-y-3 w-full flex flex-col items-center sm:items-start">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white hover:scale-[1.02] transition-all border-none group flex items-center justify-center gap-3">
                <Link href="/library">
                    {NARRATIVE.cta} <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-zinc-950 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
            <p className="text-[10px] md:text-xs text-zinc-400 font-bold italic text-center sm:text-left">
                Built in Excel. Shared through Google Sheets. No app rollout required.
            </p>
        </div>
        <div className="w-full flex justify-center lg:justify-start">
             <p className="text-[7px] min-[360px]:text-[8px] min-[400px]:text-[9px] md:text-[11px] text-zinc-500 font-black uppercase tracking-[0.2em] md:tracking-[0.4em] italic lg:pl-1 text-center whitespace-nowrap">
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
                    <div className="order-1 space-y-1 md:space-y-2 w-full">
                        <h1 className="text-[34px] md:text-[84px] lg:text-[100px] font-black font-headline leading-[0.95] uppercase italic tracking-tighter text-white">
                            {NARRATIVE.line1} <br />
                            <span style={{ color: BRAND_GREEN }}> {NARRATIVE.line2}</span>
                        </h1>
                        <p className="text-base md:text-[22px] lg:text-[26px] italic font-medium text-zinc-400 max-w-none lg:whitespace-nowrap leading-tight">
                            {NARRATIVE.subline}
                        </p>
                    </div>
                    <div className="order-2 w-full lg:col-start-2 lg:row-start-1 lg:row-span-3 space-y-4 md:space-y-6 text-left border-l-2 lg:text-right lg:border-l-0 lg:border-r-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 mt-8 lg:mt-16">
                         <p className="text-[9px] md:text-[10px] font-black text-red-500/60 uppercase tracking-[0.6em] italic">WHY OPERATIONS BREAK</p>
                         <div className="flex flex-col gap-2 md:gap-4 lg:gap-5">
                             {ANXIETY_ITEMS.map((text, i) => (
                                <PulsatingStressText key={i} text={text} delay={`${i * 0.2}s`} />
                             ))}
                         </div>
                    </div>
                    <div className="order-3 w-full lg:col-start-1 lg:row-start-2 space-y-4 md:space-y-6 mt-8 lg:mt-2">
                        <div className="space-y-2 md:space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-5 md:h-6 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                <p className="text-[9px] md:text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">THE NEW STANDARD</p>
                            </div>
                            <CommandGrid className="max-w-xl" textColor="text-white/80" />
                        </div>
                    </div>
                    <div className="order-4 w-full lg:col-start-1 lg:row-start-3 mt-8 md:mt-4">
                        <SovereignCTA />
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
                
                <Section className="bg-white">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl">
                        <div className="p-10 md:p-20 bg-zinc-50 border-r border-zinc-200 relative text-left">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
                            <div className="space-y-8">
                                <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.4em] font-black text-[10px]">THE FRICTION</Badge>
                                <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter leading-tight text-left">Instead of...</h2>
                                <ul className="space-y-6">
                                    {[
                                        "Hiring consultants at ₹50,000+ per unit.",
                                        "Spending 100+ hours building SOPs from scratch.",
                                        "Managing through unsearchable chat groups.",
                                        "Chasing teams manually for basic daily tasks."
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
                                <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px]">THE SOLUTION</Badge>
                                <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter leading-tight text-left">You deploy...</h2>
                                <p className="text-xl md:text-2xl text-primary font-black italic leading-tight uppercase text-left">
                                    A complete institutional data engine. <br/> Live in 10 minutes.
                                </p>
                                <ul className="space-y-6 pt-4">
                                    {[
                                        "100+ Pre-built technical protocols (SOPs).",
                                        "Live Operational Dashboard for visibility.",
                                        "Built-in Trainer's Notes for teams.",
                                        "Binary 'Done/Missed' verification."
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
                </Section>

                <Section className="bg-white border-y border-zinc-100">
                    <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-24">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px]">Forensic Finding</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">Why operations break</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 text-left">
                            <div className="space-y-10">
                                <h4 className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.4em] italic border-b border-zinc-100 pb-4">Audit Pitfalls</h4>
                                <ul className="space-y-10">
                                    {[
                                        "Work depends on the memory of key individuals.",
                                        "Standard steps become 'suggestions' during busy shifts.",
                                        "New staff require weeks of learning tribal knowledge.",
                                        "Minor near-misses go unrecorded, creating hidden liability.",
                                        "Managers spend 40% of their day following up basic work."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                            </div>
                                            <span className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight text-left">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-10 p-10 md:p-14 rounded-[3rem] bg-red-50/50 border border-red-100 shadow-xl relative text-left">
                                <div className="absolute top-6 right-10 opacity-10">
                                    <AlertTriangle className="w-24 h-24 text-red-600" />
                                </div>
                                <h4 className="text-[11px] font-black text-red-600 uppercase tracking-[0.4em] italic border-b border-red-200 pb-4">The Consequence</h4>
                                <ul className="space-y-10">
                                    {[
                                        "Managers trapped in constant manual checking.",
                                        "SOPs sit in dusty folders while chaos runs the floor.",
                                        "Zero auditable trail for insurance or legal defense.",
                                        "Standards leave the building when a key person resigns.",
                                        "Inconsistency destroys brand trust and guest loyalty."
                                    ].map((p, i) => (
                                        <div key={i} className="flex items-start gap-5">
                                            <X className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                                            <span className="text-red-950 font-black text-lg md:text-xl leading-tight italic uppercase text-left">{p}</span>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-white">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.5em] font-black text-[10px]">Rapid Deployment</Badge>
                            <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic">DEPLOY IN 10 MINUTES</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { t: "Download", d: "Get your pre-built, industry-specific operations system instantly after payment." },
                                { t: "Open", d: "Open in Excel, save your master copy, then upload to Google Sheets for live team access." },
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
                        <div className="space-y-16">
                            <div className="relative group w-full max-w-6xl mx-auto">
                                <div className="bg-[#111] h-10 w-full rounded-t-[20px] flex items-center px-6 gap-2 border border-white/10">
                                    <div className="flex gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-red-500/30" />
                                        <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                                        <div className="w-2 h-2 rounded-full bg-green-500/30" />
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                                            master_v11.9_operational_console.xlsx
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-b-[20px] overflow-hidden shadow-2xl bg-white border border-zinc-200 border-t-0">
                                    <img src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png" alt="Sovereign Dashboard" className="w-full h-auto grayscale-[0.05] group-hover:grayscale-0 transition-all duration-1000" />
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-[44px] font-black text-zinc-950 uppercase italic tracking-tighter font-headline">👉 Your operations. Now structured.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* BUILT FOR REAL TEAMS SECTION */}
                <Section className="bg-zinc-50 border-y border-zinc-100">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Operational Reassurance</Badge>
                            <h2 className="text-[32px] md:text-[60px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">Built for Real Teams. <br/> <span className="text-primary">Engineered for Real Control.</span></h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto">This was designed for real teams, real shifts, and real operational pressure — not just consultants.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
                            {[
                                {
                                    t: "EASY TO FOLLOW",
                                    d: "Tasks are written in simple, direct language so teams know exactly what to do without second-guessing or policy jargon.",
                                    i: ClipboardCheck
                                },
                                {
                                    t: "HARD TO IGNORE",
                                    d: "Every task shows what failure causes — so critical work is taken seriously before it becomes a safety or profit problem.",
                                    i: AlertTriangle
                                },
                                {
                                    t: "FASTER TO TRAIN",
                                    d: "When staff changes, standards don't. New teams do not learn from memory or shortcuts; they follow the same system from day one.",
                                    i: GraduationCap
                                },
                                {
                                    t: "EASY TO AUDIT",
                                    d: "Teams see simple instructions. Management sees 100% visibility into completion, misses, and operational proof in one place.",
                                    i: ShieldCheck
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-6 p-10 bg-white rounded-[2.5rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <item.i className="w-7 h-7" />
                                    </div>
                                    <div className="space-y-3 text-left">
                                        <h4 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">{item.t}</h4>
                                        <p className="text-zinc-500 text-base md:text-lg italic font-medium leading-relaxed text-left">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <Section className="bg-[#0E1420] border-y border-white/5">
                    <div className="space-y-20">
                        <div className="text-center space-y-6">
                            <h2 className="text-[36px] md:text-[64px] font-black text-white uppercase italic tracking-tight font-headline">Select Your Vertical</h2>
                            <p className="text-white/40 text-xl md:text-2xl font-bold italic">Engineered for single units and multi-unit groups.</p>
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
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-zinc-950 uppercase italic tracking-tight font-headline leading-none">System Sovereignty</h2>
                            <p className="text-zinc-400 text-xl font-bold italic">Why elite groups choose MoreMeets over standard SaaS.</p>
                        </div>
                        <div className="overflow-x-auto no-scrollbar rounded-[3rem] border border-zinc-200 shadow-2xl">
                            <table className="w-full text-left min-w-[600px]">
                                <thead className="bg-zinc-950 text-white">
                                    <tr>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">ENGINE PARAMETER</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em] bg-primary/10">MOREMEETS™ OS</th>
                                        <th className="p-8 md:p-12 text-[12px] font-black uppercase tracking-[0.5em]">TYPICAL SaaS</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-100 text-base md:text-lg font-bold italic text-zinc-600">
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
                                            <td className="p-8 md:p-10">{row.app}</td>
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
                    <div className="max-[1000px] mx-auto space-y-16 md:space-y-24 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-[48px] md:text-[110px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-black">Professional Access Pricing</h2>
                            <h3 className="text-xl md:text-[36px] text-black/60 font-bold italic">Institutional systems. Intentionally priced for everyday operators.</h3>
                        </div>
                        <div className="flex flex-col items-center gap-10 md:gap-14">
                            <button className="h-[90px] md:h-[120px] px-16 md:px-24 rounded-[30px] bg-black text-white font-black uppercase italic text-2xl md:text-5xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group w-full max-w-2xl mx-auto flex items-center justify-center">
                                <Link href="/library" className="flex items-center gap-8 justify-center">Get Your System <ArrowRight className="w-10 h-10 md:w-16 md:h-16 transition-transform group-hover:translate-x-4" /></Link>
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
