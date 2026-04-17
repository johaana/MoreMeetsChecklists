
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
    GraduationCap,
    Plus,
    CircleCheck,
    UserCheck,
    SearchCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

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
                
                {/* 🔴 SECTION 1: HERO (ABOVE THE FOLD — ONE SCREEN ONLY) */}
                <section className="relative w-full h-[100svh] flex flex-col justify-center bg-zinc-50 overflow-hidden border-b border-zinc-200">
                    <div className="container px-6 lg:px-12 mx-auto pt-16 h-full flex items-center">
                        <div className="grid lg:grid-cols-[1.1fr,1fr] gap-12 items-center w-full">
                            
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

                                <div className="space-y-6">
                                    <ul className="grid grid-cols-1 gap-2 text-[11px] font-black text-zinc-400 uppercase tracking-widest italic">
                                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-600" /> Pre-built, editable SOPs</li>
                                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-600" /> Daily task tracking</li>
                                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-600" /> Trainer notes for staff</li>
                                        <li className="flex items-center gap-2"><Check className="w-4 h-4 text-violet-600" /> Live dashboard visibility</li>
                                    </ul>

                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.3em]">ONE-TIME INVESTMENT</p>
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-3xl font-black text-violet-600 italic font-headline">₹2,999</span>
                                            <span className="text-sm font-bold text-zinc-300 line-through">₹4,999</span>
                                            <Badge className="bg-violet-600 text-white border-none text-[8px] font-black uppercase py-0.5 px-2">Launch Price</Badge>
                                        </div>
                                        <p className="text-[10px] font-bold text-zinc-400 italic">⏳ Limited early-user pricing • Own Forever</p>
                                    </div>
                                    
                                    <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-zinc-950 text-white font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-2xl border-none w-full md:w-fit group">
                                        <Link href="/library">START USING YOUR SYSTEM TODAY <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                    </Button>
                                    
                                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] italic">
                                        💡 Your team knows what to do. You know what actually got done.
                                    </p>
                                </div>
                            </div>

                            {/* Right: Dashboard Preview (Instant Trust) */}
                            <div className="relative group hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                <div className="absolute -inset-10 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
                                <div className="relative bg-white border border-zinc-200 rounded-[2.5rem] shadow-2xl overflow-hidden p-2 transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
                                    <div className="bg-zinc-100 rounded-t-[2rem] py-3 px-6 flex items-center gap-2 border-b border-zinc-200">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                            <div className="w-2 h-2 rounded-full bg-zinc-300" />
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-white border border-zinc-200 rounded-md px-10 py-1 text-[8px] font-black uppercase text-zinc-400 tracking-widest shadow-inner">sovereign_master_v11.9.xlsx</div>
                                        </div>
                                    </div>
                                    <img src={DASHBOARD_IMAGE} alt="MoreMeets Dashboard" className="w-full h-auto grayscale-[0.1] group-hover:grayscale-0 transition-all duration-700" />
                                </div>
                                <div className="absolute -bottom-8 -left-8 bg-white border border-zinc-200 p-6 rounded-2xl shadow-2xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">LIVE SYSTEM STATUS</span>
                                        <span className="text-sm font-bold text-[#0F172A]">OPERATIONS SECURED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Status bar for hero */}
                    <div className="absolute bottom-0 w-full py-5 bg-white/60 backdrop-blur-md border-t border-zinc-100">
                        <div className="container px-12 mx-auto flex justify-center md:justify-between items-center text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] italic font-headline">
                             <span className="hidden md:block">BUILT ON EXCEL. RUNS ON GOOGLE SHEETS.</span>
                             <span className="flex items-center gap-2 text-violet-600"><Smartphone className="w-4 h-4" /> NO NEW SOFTWARE. NO SUBSCRIPTION.</span>
                             <span className="hidden md:block">YOUR TEAM ALREADY KNOWS HOW TO USE IT.</span>
                        </div>
                    </div>
                </section>

                {/* 🔥 SECTION 2 — THE REAL PROBLEM (FEAR + RELATABILITY) */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="space-y-4 text-center">
                            <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.3em] font-black text-[10px]">The Operational Reality</Badge>
                            <SectionHeadline>Teams don’t complete daily tasks unless someone keeps following up.</SectionHeadline>
                            <p className="text-zinc-400 italic font-medium">This is where businesses silently lose control.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-10 rounded-3xl bg-zinc-50 border border-zinc-100 space-y-6">
                                <h3 className="font-black text-red-500 uppercase italic tracking-tighter text-xl">What actually happens:</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Tasks get skipped assuming someone else did them",
                                        "Checks are done “mentally,” not verified",
                                        "Small issues go noticed too late to fix",
                                        "Managers chase work instead of leading"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-base font-bold text-zinc-600 italic leading-tight">
                                            <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-black text-[#0F172A] uppercase italic tracking-tighter">The reality</h4>
                                    <p className="text-xl font-bold italic text-zinc-500 leading-snug">
                                        "Most operational problems don’t come from big failures. They come from small tasks being missed every day."
                                    </p>
                                </div>
                                <div className="p-6 border-l-4 border-red-500 bg-red-50 rounded-r-2xl">
                                    <p className="text-sm font-black text-red-600 uppercase tracking-widest">👉 That’s where control is lost.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 3 — THE SOLUTION */}
                <Section className="bg-violet-600 text-white">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">The Resolution</Badge>
                            <h2 className="text-3xl md:text-6xl font-black font-headline text-white uppercase italic tracking-tighter">This solves that.</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { t: "TASKS DEFINED", d: "120+ pre-built, editable SOPs ready to deploy.", i: ClipboardCheck },
                                { t: "UPDATED DAILY", d: "Your team logs work live in one shared engine.", i: Clock },
                                { t: "INSTANT VISIBILITY", d: "See what’s done vs missed in one glance.", i: Activity }
                            ].map((card, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 space-y-4 text-left">
                                    <card.i className="w-10 h-10 text-white/40" />
                                    <h4 className="font-black text-white uppercase italic tracking-tighter leading-tight text-lg">{card.t}</h4>
                                    <p className="text-sm text-white/70 italic font-medium leading-relaxed">{card.d}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
                            <span className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest italic"><CheckCircle2 className="w-5 h-5 text-white/40" /> NO FOLLOW-UPS REQUIRED</span>
                            <span className="flex items-center justify-center gap-3 text-sm font-black uppercase tracking-widest italic"><CheckCircle2 className="w-5 h-5 text-white/40" /> NO DEPENDENCY ON MEMORY</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 4 — HOW TO USE (ZERO LEARNING CURVE) */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Simple Deployment</Badge>
                             <SectionHeadline>HOW TO USE THIS SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-4 gap-12">
                            {[
                                { s: "01", t: "DOWNLOAD", d: "Get the master system in Excel format." },
                                { s: "02", t: "CLOUD SYNC", d: "Upload to Google Sheets & share with team." },
                                { s: "03", t: "EXECUTE", d: "Team updates tasks as work happens." },
                                { s: "04", t: "COMMAND", d: "Dashboard shows real-time site status." }
                            ].map((step, i) => (
                                <div key={i} className="space-y-4 relative">
                                    <div className="text-5xl font-black text-violet-100 font-headline">{step.s}</div>
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight text-xl">{step.t}</h4>
                                    <p className="text-sm text-zinc-400 italic font-medium">{step.d}</p>
                                    {i < 3 && <div className="hidden md:block absolute top-6 -right-6 text-zinc-100"><ArrowRight className="w-8 h-8" /></div>}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black text-zinc-400 uppercase tracking-widest pt-12 border-t border-zinc-200">
                            <span className="flex items-center gap-3"><Smartphone className="w-4 h-4 text-violet-600" /> WORKS ON PHONE OR DESKTOP</span>
                            <span className="flex items-center gap-3"><Zap className="w-4 h-4 text-violet-600" /> NO TRAINING REQUIRED FOR TOOLS</span>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 5 — DAILY VIEW */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Manager Intel</Badge>
                                <SectionHeadline>YOUR DAILY VIEW</SectionHeadline>
                                <p className="text-xl text-zinc-500 italic font-medium border-l-4 border-violet-600 pl-8">You don’t ask. You already know.</p>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { t: "PENDING TASKS", d: "What was missed or delayed today.", i: AlertTriangle, c: "text-red-500" },
                                    { t: "COMPLETED TASKS", d: "Verifiable proof of work getting done.", i: CheckCircle2, c: "text-green-600" },
                                    { t: "PERFORMANCE %", d: "Track efficiency by staff or location.", i: Activity, c: "text-violet-600" }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-6 group">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-100 group-hover:bg-white group-hover:shadow-xl transition-all">
                                            <item.i className={cn("w-7 h-7", item.c)} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-black text-[#0F172A] uppercase italic text-lg tracking-tight font-headline">{item.t}</h4>
                                            <p className="text-sm text-zinc-400 italic font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-violet-600/5 rounded-[3rem] blur-2xl group-hover:bg-violet-600/10 transition-all" />
                            <img src={DASHBOARD_IMAGE} alt="Dashboard Detail" className="relative rounded-[2.5rem] border border-zinc-200 shadow-2xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" />
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 6 — WHAT YOU GET */}
                <Section className="bg-zinc-50">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Sovereign Payload</Badge>
                             <SectionHeadline>A READY-TO-RUN OPERATING SYSTEM</SectionHeadline>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { t: "120+ PRE-BUILT SOPs", d: "Audit-ready templates for your vertical.", i: ClipboardCheck },
                                { t: "DAILY EXECUTION LOGS", d: "Verifiable records for every single shift.", i: Clock },
                                { t: "TRAINER NOTES", d: "Step-by-step guidance for every task.", i: GraduationCap },
                                { t: "CONSEQUENCES DEFINED", d: "Build a culture of intentional compliance.", i: AlertTriangle },
                                { t: "LIVE DASHBOARD", d: "High-gravity oversight across all units.", i: Activity },
                                { t: "ADMIN CONTROLS", d: "Lock formulas & structure for team safety.", i: Lock, elite: true }
                            ].map((item, i) => (
                                <div key={i} className={cn("p-8 rounded-3xl bg-white border border-zinc-100 space-y-4 hover:shadow-xl transition-all group", item.elite && "border-violet-200 bg-violet-50/30")}>
                                    <item.i className="w-8 h-8 text-violet-600" />
                                    <h4 className="font-black text-[#0F172A] uppercase italic tracking-tighter leading-tight">{item.t}</h4>
                                    <p className="text-xs text-zinc-400 italic font-medium leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 7 — WHY IT WORKS */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Systemic Discipline</Badge>
                            <SectionHeadline>WHY TEAMS ACTUALLY FOLLOW THIS</SectionHeadline>
                            <p className="text-zinc-400 italic font-medium">Most SOPs fail because they sit in files. This system stays on the floor.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex gap-6 items-start">
                                <div className="w-1.5 h-16 bg-violet-600 rounded-full shrink-0" />
                                <div className="space-y-2">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-sm">TRAINER NOTES</h4>
                                    <p className="text-sm text-zinc-500 italic font-bold">They explain exactly HOW to do it. Faster onboarding, lower dependency on managers.</p>
                                </div>
                            </div>
                            <div className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex gap-6 items-start">
                                <div className="w-1.5 h-16 bg-red-500 rounded-full shrink-0" />
                                <div className="space-y-2">
                                    <h4 className="font-black text-[#0F172A] uppercase tracking-widest text-sm">CONSEQUENCES</h4>
                                    <p className="text-sm text-zinc-500 italic font-bold">They explain WHY it matters. Turns mechanical ticking into intentional execution.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-zinc-400 font-black uppercase tracking-widest text-[11px] pt-8 border-t border-zinc-100">
                             THIS IS NOT DOCUMENTATION. THIS IS EXECUTION.
                        </p>
                    </div>
                </Section>

                {/* 🔥 SECTION 8 — USE CASES */}
                <Section className="bg-zinc-50 border-y border-zinc-200">
                    <div className="max-w-6xl mx-auto space-y-12">
                        <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.3em] font-black text-[10px]">Sector Mapping</Badge>
                             <SectionHeadline>WHO IS THIS FOR?</SectionHeadline>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                { n: "Restaurants", i: Utensils },
                                { n: "Hotels & Resorts", i: Building },
                                { n: "Hospitals & Clinics", i: Hospital },
                                { n: "Retail Stores", i: Store },
                                { n: "Cinemas", i: Popcorn },
                                { n: "Facilities", i: Building2 },
                                { n: "Franchise Networks", i: LayoutGrid }
                            ].map((ind, i) => (
                                <div key={i} className="px-10 py-8 rounded-2xl bg-white border border-zinc-200 flex flex-col items-center gap-4 hover:border-violet-600 hover:shadow-xl transition-all group">
                                    <ind.i className="w-8 h-8 text-zinc-300 group-hover:text-violet-600 transition-colors" />
                                    <span className="text-base font-black text-[#0F172A] uppercase italic tracking-tighter">{ind.n}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-zinc-400 italic font-medium">Especially useful if you are not always on-site or manage multiple locations.</p>
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
                            <Badge className="bg-white/20 text-white border-none uppercase tracking-[0.4em] font-black text-[10px]">Infrastructure Mandate</Badge>
                            <h2 className="text-3xl md:text-5xl font-black font-headline uppercase italic tracking-tighter">This is not “just Excel”</h2>
                            <p className="text-xl md:text-2xl font-bold italic text-white/80 leading-relaxed max-w-2xl mx-auto">
                                It’s a ready-to-run operational system designed for daily scale.
                            </p>
                        </div>
                        <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center border-t border-white/20 pt-10">
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">ZERO SOFTWARE DEBT</h4>
                                <p className="text-xs text-white/60 italic font-medium">Start today, not next month.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">ZERO SUBSCRIPTION</h4>
                                <p className="text-xs text-white/60 italic font-medium">Buy once, own the system forever.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest">ZERO COMPLEXITY</h4>
                                <p className="text-xs text-white/60 italic font-medium">Simple for teams. Powerful for you.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* 🔥 SECTION 10 — FAQ (HANDLING OBJECTIONS) */}
                <Section id="faq">
                    <div className="max-w-3xl mx-auto space-y-12">
                         <div className="text-center space-y-2">
                             <Badge variant="outline" className="text-violet-600 border-violet-200 uppercase tracking-[0.3em] font-black text-[10px]">Objection Handling</Badge>
                             <SectionHeadline>COMMON QUESTIONS</SectionHeadline>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="lock" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline">Can my team accidentally change or break the system?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-base italic leading-relaxed font-medium pb-6">
                                    No. You can lock formulas and critical sections so your team can only update assigned task fields. This ensures your structure remains intact, calculations are not altered, and data stays consistent across all reports.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="break" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline">What if something breaks or I need changes?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-base italic leading-relaxed font-medium pb-6">
                                    The system is fully editable. You can add or modify tasks easily yourself. We also offer customization and setup support if your business has unique multi-location needs.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="software" className="border-zinc-100">
                                <AccordionTrigger className="text-xl font-black uppercase italic tracking-tighter text-[#0F172A] hover:no-underline">Why not just use a dedicated mobile app?</AccordionTrigger>
                                <AccordionContent className="text-zinc-500 text-base italic leading-relaxed font-medium pb-6">
                                    Software requires training, subscriptions, and buy-in. Your team already knows how to use Excel and Sheets. MoreMeets gives you SaaS-level visibility without the SaaS-level friction or cost.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
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
                                <div className="flex items-center gap-6 text-[11px] font-black text-zinc-400 uppercase tracking-widest">
                                    <span>OWN FOREVER</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
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

