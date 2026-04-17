
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check,
    ArrowRight, 
    ShieldCheck, 
    Activity, 
    Lock,
    Zap,
    LayoutGrid,
    Smartphone,
    Globe,
    AlertTriangle,
    ClipboardCheck,
    CheckCircle2,
    Clock,
    FileSpreadsheet,
    HelpCircle,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    GraduationCap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";
const ACCENT_VIOLET = "#8B5CF6";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-tight", className)}>
        {children}
    </h2>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-body selection:bg-violet-100">
            {/* Header forced to light theme for this preview */}
            <SiteHeader forceTheme="light" />

            <main className="flex-1">
                
                {/* 🔴 HERO (ABOVE THE FOLD — ONE SCREEN ONLY) */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center bg-zinc-50 overflow-hidden border-b border-zinc-200">
                    <div className="container px-6 lg:px-12 mx-auto pt-16 h-full flex items-center">
                        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                            
                            {/* Left: Text Narrative */}
                            <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-violet-600 animate-pulse" />
                                        <span className="text-xs font-black uppercase tracking-[0.4em] text-violet-600 font-headline">MoreMeets™ Sovereign</span>
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black font-headline text-[#0F172A] leading-[0.95] tracking-tighter uppercase italic">
                                        Stop chasing <br /> your team.
                                    </h1>
                                    <p className="text-xl md:text-3xl font-bold italic text-zinc-500 leading-tight">
                                        See daily work getting done—even when you’re not there.
                                    </p>
                                </div>

                                <div className="space-y-3 border-l-4 border-violet-600 pl-8">
                                    <p className="text-lg font-bold text-[#0F172A]/80 italic">
                                        Without follow-ups. <br />
                                        Without confusion. <br />
                                        Without depending on memory.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.3em]">ONE-TIME INVESTMENT</p>
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-3xl font-black text-violet-600 italic font-headline">₹2,999</span>
                                            <span className="text-sm font-bold text-zinc-300 line-through">₹4,999</span>
                                            <Badge className="bg-violet-600 text-white border-none text-[8px] font-black uppercase py-0.5 px-2">Launch Price</Badge>
                                        </div>
                                        <p className="text-[10px] font-bold text-zinc-400 italic">⏳ Limited early-user pricing • Own Forever</p>
                                    </div>
                                    <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-zinc-950 text-white font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-2xl border-none w-fit group">
                                        <button>START USING YOUR SYSTEM TODAY <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" /></button>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Dashboard Preview */}
                            <div className="relative group hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                <div className="absolute -inset-10 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
                                <div className="relative bg-white border border-zinc-200 rounded-[2rem] shadow-2xl overflow-hidden p-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="bg-zinc-100 rounded-t-[1.5rem] py-2 px-4 flex items-center gap-2 border-b border-zinc-200">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="text-[7px] font-black uppercase text-zinc-400 tracking-widest">sovereign_master_v4.3.xlsx</div>
                                        </div>
                                    </div>
                                    <img src={DASHBOARD_IMAGE} alt="MoreMeets Dashboard" className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white border border-zinc-200 p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">LIVE STATUS</span>
                                        <span className="text-xs font-bold text-[#0F172A]">OPERATIONS SECURED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Status bar for hero */}
                    <div className="absolute bottom-0 w-full py-4 bg-white/60 backdrop-blur-md border-t border-zinc-100">
                        <div className="container px-12 mx-auto flex justify-center md:justify-between items-center text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                             <span className="hidden md:block">RUNS ON EXCEL / GOOGLE SHEETS</span>
                             <span className="flex items-center gap-2 text-violet-600"><Smartphone className="w-3 h-3" /> YOUR TEAM KNOWS WHAT TO DO. YOU KNOW WHAT GOT DONE.</span>
                             <span className="hidden md:block">NO SUBSCRIPTION • NO SaaS</span>
                        </div>
                    </div>
                </section>

                {/* 🔥 SECTION 2 — PROBLEM + FEAR */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.3em] font-black text-[10px]">The Operational Reality</Badge>
                            <SectionHeadline>Teams don’t complete daily tasks unless someone keeps following up.</SectionHeadline>
                            <p className="text-zinc-400 italic font-medium">This is where businesses silently lose control.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-4">
                                <h3 className="font-black text-red-500 uppercase italic tracking-tighter text-lg">What actually happens:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Small tasks get skipped daily",
                                        "Checks are assumed, not verified",
                                        "Compliance issues noticed too late",
                                        "Managers chase work instead of leading"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-600 italic">
                                            <AlertTriangle className="w-4 h-4 text-red-400" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-6">
                                <p className="text-xl font-bold italic text-[#0F172A] leading-snug">
                                    "Most operational failures don’t come from big mistakes. They come from small tasks being missed every day."
                                </p>
                                <div className="w-12 h-1 bg-red-500" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 3 — SOLUTION */}
                <Section className="bg-violet-600">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">The Resolution</Badge>
                            <h2 className="text-3xl md:text-6xl font-black font-headline text-white uppercase italic tracking-tighter">This solves that.</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { t: "ALREADY DEFINED", d: "120+ pre-built, editable SOPs ready to deploy.", i: ClipboardCheck },
                                { t: "UPDATED DAILY", d: "Your team logs work live in one shared engine.", i: Clock },
                                { t: "INSTANT VISIBILITY", d: "See what’s done vs missed in one glance.", i: Activity }
                            ].map((card, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 space-y-4 text-left">
                                    <card.i className="w-8 h-8 text-white/40" />
                                    <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight">{card.t}</h4>
                                    <p className="text-xs text-white/70 italic font-medium leading-relaxed">{card.d}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-white/60 font-black uppercase tracking-[0.4em] text-xs">👉 NO FOLLOW-UPS REQUIRED.</p>
                    </div>
                </Section>

                {/* 🔥 SECTION 4 — HOW IT WORKS */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Zero Learning Curve</Badge>
                             <SectionHeadline>HOW TO USE THIS</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { s: "01", t: "OPEN ENGINE", d: "Open the system in Excel or Google Sheets." },
                                { s: "02", t: "TEAM ALIGNS", d: "Staff see exactly what needs to be done." },
                                { s: "03", t: "LIVE UPDATE", d: "Tasks are updated as work happens." },
                                { s: "04", t: "COMMAND", d: "Dashboard shows real-time site status." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="text-4xl font-black text-violet-100 font-headline">{step.s}</div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight">{step.t}</h4>
                                    <p className="text-xs text-zinc-400 italic font-medium">{step.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center gap-8 text-[10px] font-black text-zinc-400 uppercase tracking-widest pt-8 border-t border-zinc-200">
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-violet-600" /> NO NEW SOFTWARE</span>
                            <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-violet-600" /> NO TOOL TRAINING</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 6 — WHAT YOU GET */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Sovereign Payload</Badge>
                                    <SectionHeadline>A Ready-to-Run <br /> Operating System.</SectionHeadline>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                                    {[
                                        { t: "120+ PRE-BUILT SOPs", i: ClipboardCheck },
                                        { t: "DAILY EXECUTION LOGS", i: Clock },
                                        { t: "TRAINER NOTES", i: GraduationCap },
                                        { t: "CONSEQUENCES DEFINED", i: AlertTriangle },
                                        { t: "LIVE DASHBOARD", i: Activity },
                                        { t: "MULTI-BRANCH VIEWS", i: LayoutGrid },
                                        { t: "FULLY EDITABLE", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <item.i className="w-5 h-5 text-violet-600 shrink-0" />
                                            <span className="text-[11px] font-black text-[#0F172A] uppercase italic tracking-widest">{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 space-y-8">
                                <div className="space-y-2">
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter text-xl">Why teams follow this:</h4>
                                    <p className="text-sm text-zinc-500 italic">Execution happens when tasks are clear and consequences are understood.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-zinc-200">
                                        <div className="w-1 h-12 bg-violet-600 rounded-full" />
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-violet-600 uppercase tracking-widest">TRAINER NOTES</span>
                                            <p className="text-xs font-bold text-[#0F172A] italic leading-tight">Explains exactly HOW to do the task.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-zinc-200">
                                        <div className="w-1 h-12 bg-red-500 rounded-full" />
                                        <div className="space-y-1">
                                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">CONSEQUENCES</span>
                                            <p className="text-xs font-bold text-[#0F172A] italic leading-tight">Explains WHY the task matters to the business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 8 — USE CASES */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.3em] font-black text-[10px]">Universal Infrastructure</Badge>
                             <SectionHeadline>WORKS ANYWHERE DAILY EXECUTION MATTERS</SectionHeadline>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels", i: Building },
                                { n: "Hospitals", i: Hospital },
                                { n: "Retail Stores", i: Store },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise Networks", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="px-8 py-6 rounded-2xl bg-white border border-zinc-200 flex items-center gap-4 hover:border-violet-600 transition-all group">
                                    <ind.i className="w-6 h-6 text-zinc-300 group-hover:text-violet-600 transition-colors" />
                                    <span className="text-base font-black text-[#0F172A] uppercase italic tracking-tighter">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 9 — IMPORTANT CLARITY */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[3rem] bg-violet-600 text-white space-y-10 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <FileSpreadsheet className="w-64 h-64" />
                        </div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase italic tracking-tighter">This is not “just Excel”</h2>
                            <p className="text-xl md:text-2xl font-bold italic text-white/80 leading-relaxed max-w-2xl mx-auto">
                                It’s a ready operational system built for daily execution.
                            </p>
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center border-t border-white/20 pt-10">
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">NO SETUP COMPLEXITY</h4>
                                <p className="text-xs text-white/60 italic font-medium">Start today, not next month.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">NO SaaS DEPENDENCY</h4>
                                <p className="text-xs text-white/60 italic font-medium">You own the code forever.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">NO RECURRING COST</h4>
                                <p className="text-xs text-white/60 italic font-medium">Buy once, scale infinitely.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 FINAL CTA */}
                <Section className="bg-zinc-50 border-t border-zinc-200 py-24 md:py-32 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="space-y-4">
                            <Badge className="bg-violet-600 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">Secure Your Operations</Badge>
                            <h2 className="text-4xl md:text-7xl font-black font-headline text-[#0F172A] uppercase italic tracking-tighter leading-none">START RUNNING <br /> YOUR SYSTEM TODAY</h2>
                            <p className="text-lg text-zinc-400 italic font-medium">Setup takes less than 10 minutes. Customization support available.</p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-6xl md:text-8xl font-black text-violet-600 italic font-headline">₹2,999</span>
                                    <span className="text-xl font-bold text-zinc-300 line-through italic">₹4,999</span>
                                </div>
                                <div className="flex items-center gap-6 text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                                    <span>OWN FOREVER</span>
                                    <div className="w-1 h-1 rounded-full bg-zinc-300" />
                                    <span>NO SUBSCRIPTION</span>
                                </div>
                            </div>
                            
                            <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-zinc-950 text-white font-black uppercase italic tracking-widest text-xl shadow-[0_0_50px_-10px_rgba(139,92,246,0.4)] hover:scale-105 transition-all border-none">
                                <Link href="/library">GET ACCESS NOW <ArrowRight className="ml-3 h-6 w-6" /></Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}

