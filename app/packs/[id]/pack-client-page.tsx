'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Target, 
    Smartphone, 
    Activity, 
    XCircle, 
    CheckCircle2, 
    ShieldCheck, 
    Lock, 
    Clock,
    Settings2,
    Users2,
    Utensils,
    Zap,
    Scale,
    GraduationCap,
    AlertTriangle,
    FlameKindling,
    Banknote,
    TrendingUp,
    Repeat,
    Check,
    LayoutGrid,
    Gem
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]", className)}>
        {children}
    </h2>
);

const OperationalWindow = ({ src, alt }: { src: string, alt: string }) => (
    <div className="relative mx-auto max-w-5xl group">
        {/* Browser Frame Header */}
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner">
                    sovereign_v11.9_master_engine.xlsx
                </div>
            </div>
        </div>
        <div className="relative rounded-b-2xl border border-white/10 bg-zinc-900 overflow-hidden shadow-[0_0_100px_-20px_rgba(46,184,107,0.15)] group-hover:shadow-[0_0_100px_-10px_rgba(46,184,107,0.25)] transition-all duration-1000">
            <img 
                src={src} 
                alt={alt} 
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
        </div>
    </div>
);

export default function PackClientPage({ pack }: { pack: PremiumPack }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* SECTION 1: ONE-GLANCE COMMAND HERO */}
        <section className="relative w-full pt-16 pb-12 md:pt-24 md:pb-20 border-b border-white/5 overflow-hidden bg-black flex flex-col justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,184,107,0.05)_0%,transparent_60%)]" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-[1fr,480px] gap-12 md:gap-16 items-start">
                
                {/* Left: The Hook & Proof Layer */}
                <div className="space-y-5 md:space-y-6">
                    <div className="space-y-4 md:space-y-5">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.3em] font-black text-[10px] rounded-none bg-primary/5">
                            {pack.category.toUpperCase()} OPERATING SYSTEM • SOVEREIGN V11.9
                        </Badge>
                        <h1 className="text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[5rem] font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.82]">
                            STOP CHASING STAFF.<br />
                            <span className="text-primary">START SEEING EXECUTION.</span>
                        </h1>
                        <div className="space-y-5 md:space-y-6">
                            <p className="text-lg md:text-xl text-secondary-text font-medium leading-relaxed italic max-w-xl">
                                Know what’s done, missed, or at risk—across every shift, station, and location. 
                                <span className="text-primary-text/80 block not-italic font-bold">No follow-ups. No guesswork. No dependency.</span>
                            </p>
                            
                            <div className="space-y-4">
                                <p className="text-sm md:text-base font-bold text-primary-text/60 border-l-2 border-primary/30 pl-6 italic">
                                    Pre-built SOPs. Fully editable. One-time deploy. <br /> Runs on Excel & Google Sheets.
                                </p>
                                
                                {/* PROOF STRIP */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-black text-primary uppercase tracking-widest pl-6">
                                    <span className="flex items-center gap-1.5"><Gem className="w-3.5 h-3.5" /> 12 OPERATIONAL MODULES</span>
                                    <span className="text-white/20">•</span>
                                    <span className="flex items-center gap-1.5"><Target className="w-3.5 h-3.5" /> 120+ CONTROL POINTS</span>
                                    <span className="text-white/20">•</span>
                                    <span className="flex items-center gap-1.5"><Users2 className="w-3.5 h-3.5" /> 12 DEFINED ROLES</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: The Decision Block */}
                <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl space-y-8 relative">
                    <div className="space-y-2 text-center">
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] block">DEPLOYMENT CLEARANCE:</span>
                        <p className="text-base font-black text-primary-text uppercase italic tracking-tighter leading-tight">
                            ENGINEERED FOR SINGLE UNITS & MULTI-BRANCH GROUPS
                        </p>
                    </div>

                    <div className="space-y-6 text-center pt-6 border-t border-white/5">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">Institutional Rate (One-Time)</p>
                            <p className="text-4xl md:text-5xl font-black text-primary-text italic leading-none">₹999 <span className="text-[10px] text-white/20 not-italic ml-1">/ $12</span></p>
                        </div>
                        
                        <div className="space-y-4">
                            <Button asChild size="lg" className="w-full h-16 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-[0_0_30px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none">
                                <Link href="#pricing" className="flex items-center justify-center gap-2">
                                    DEPLOY YOUR SYSTEM → ₹999 <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                            <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Works for 1 location. Scales to 100.</p>

                            <div className="flex items-center justify-center gap-4 text-[9px] font-black text-white/30 uppercase tracking-[0.2em]">
                                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> NO SAAS</span>
                                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> OWN FOREVER</span>
                                <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-primary" /> 10-MIN SETUP</span>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <p className="text-[10px] font-black text-accent/60 uppercase tracking-[0.15em] italic leading-tight">
                                FOR TEAMS WHO CAN'T AFFORD FAILURE
                            </p>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        </section>

        {/* SECTION 2: THE REALITY CHECK */}
        <Section className="bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.4em] font-black text-[11px]">Forensic Exposure</Badge>
                    <SectionHeadline className="text-center">WHY OPERATIONS BREAK</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5">
                        <h3 className="text-white/40 font-black uppercase tracking-[0.3em] text-xs italic">THE PROBLEM</h3>
                        <div className="space-y-6">
                            {[
                                "Tasks depend on memory",
                                "SOPs sit in folders / PDFs",
                                "Managers waste 40% time chasing staff",
                                "Execution varies by shift and person",
                                "Zero real-time visibility"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium leading-tight">
                                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5">
                        <h3 className="text-white/40 font-black uppercase tracking-[0.3em] text-xs italic">THE OUTCOME</h3>
                        <div className="space-y-6">
                            {[
                                "Critical compliance & safety risks",
                                "Silent profit leakage and theft",
                                "Negative reviews and brand damage",
                                "Total dependency on individuals",
                                "Operational chaos across branches"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base md:text-lg text-primary-text font-bold uppercase italic tracking-tight leading-tight">
                                    <ArrowRight className="w-5 h-5 text-primary/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <p className="text-2xl md:text-4xl font-black text-zinc-100 uppercase italic tracking-tighter leading-none">THIS IS NOT A PEOPLE PROBLEM.</p>
                    <p className="text-3xl md:text-6xl font-black text-red-500 uppercase italic tracking-tighter leading-none">THIS IS A SYSTEM PROBLEM.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 3: THE SHIFT (Comparison Matrix) */}
        <Section className="bg-alternate-background border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">The Sovereign Standard</Badge>
                    <SectionHeadline className="text-center">OPERATIONAL CATEGORY SHIFT</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
                    <div className="bg-black p-12 md:p-20 space-y-10">
                        <h4 className="text-white/20 font-black uppercase tracking-[0.5em] text-[10px]">HERO-BASED MANAGEMENT</h4>
                        <div className="space-y-8">
                            {[
                                { f: "MEMORY", fDesc: "SOPs exist only in documentation" },
                                { f: "GUESSWORK", fDesc: "Managers ask 'Is it done?'" },
                                { f: "HEROES", fDesc: "Standards leave when staff resigns" },
                                { f: "DEAD DATA", fDesc: "Records are for audits only" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-red-500/60 font-black text-2xl italic uppercase leading-none">{item.f}</span>
                                    <p className="text-sm text-zinc-500 italic font-medium">{item.fDesc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary/5 p-12 md:p-20 space-y-10 relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <ShieldCheck className="w-32 h-32 text-primary" />
                        </div>
                        <h4 className="text-primary/60 font-black uppercase tracking-[0.5em] text-[10px]">SOVEREIGN INFRASTRUCTURE</h4>
                        <div className="space-y-8">
                            {[
                                { t: "INFRASTRUCTURE", tDesc: "Execution is built into the workflow" },
                                { t: "TELEMETRY", tDesc: "Dashboard shows reality live" },
                                { t: "PERMANENCE", tDesc: "Standards are owned by the business" },
                                { t: "EXECUTION", tDesc: "Work happens correctly every time" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-primary font-black text-2xl italic uppercase leading-none">{item.t}</span>
                                    <p className="text-sm text-primary-text italic font-medium">{item.tDesc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        {/* SECTION 4: THE OPERATING LOOP */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Daily Sequence</Badge>
                    <SectionHeadline className="text-center">DAILY OPERATION LOOP</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        { t: "SETUP", d: "Add branches and assign team to roles. Done once.", i: Settings2 },
                        { t: "VIEW TASKS", d: "Team sees what to do, how, and why it matters.", i: Smartphone },
                        { t: "EXECUTE", d: "Type name → task turns GREEN instantly.", i: Target },
                        { t: "AUTO SCHEDULE", d: "Daily, Weekly, Monthly cycles run themselves.", i: Clock },
                        { t: "DASHBOARD", d: "You see everything without asking anyone.", i: Activity }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all shadow-xl text-xl">
                                {i + 1}
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight">{step.t}</h4>
                                <p className="text-[11px] text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* SECTION 5: VISUAL COMMAND PROOF */}
        <Section className="bg-alternate-background overflow-hidden border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">The Control Center</Badge>
                    <SectionHeadline className="text-center">OPERATIONAL COMMAND DASHBOARD</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium">Works for one location or across multiple branches.</p>
                </div>

                <OperationalWindow 
                    src="https://i.postimg.cc/tTW6pWwx/Screenshot-2026-04-08-015852.png"
                    alt="Sovereign Dashboard Interface"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                    {[
                        "Live Completion (Green/Pending)",
                        "Unit & Group Performance Grid",
                        "High-Risk Alert Signals",
                        "Audit-Ready Execution Logs"
                    ].map(item => (
                        <div key={item} className="flex items-center justify-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight italic">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* SECTION 6: THE ANATOMY OF A TASK (SOVEREIGN LOGIC) */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">The Clarity Engine</Badge>
                    <SectionHeadline className="text-center">ANATOMY OF A SOVEREIGN TASK</SectionHeadline>
                    <p className="text-lg text-secondary-text italic font-medium">How we translate technical standards into floor execution.</p>
                </div>

                <div className="relative p-1 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 space-y-12">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-primary">
                                <Scale className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Audit Language</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-black border border-white/5 italic text-sm text-zinc-400 leading-relaxed">
                                "Verify cold-chain integrity (CCP-1): Log walk-in chiller temperature (Target 1°C to 4°C)."
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-accent">
                                <GraduationCap className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Trainer Notes</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-accent/5 border border-accent/20 italic text-sm text-accent/80 font-bold leading-relaxed">
                                "Check the fridge display and write the number in the log. If it's above 5°C, call the Chef immediately."
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Consequence</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 italic text-sm text-red-500/80 font-bold leading-relaxed">
                                "Bacterial growth leading to mass spoilage, guest poisoning, and total brand collapse."
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center pt-8 border-t border-white/5">
                        <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter">NO AMBIGUITY. NO TRAINING CURVE. ZERO EXCUSES.</p>
                    </div>
                </div>
            </div>
        </Section>

        {/* SECTION 7: REAL EXCEL EXAMPLES */}
        <Section className="bg-alternate-background">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Industrial Proof</Badge>
                    <SectionHeadline className="text-center">REAL OPERATIONS. REAL CONTROL.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { 
                            cat: "🍽 KITCHEN", 
                            title: "HACCP Thermal Check", 
                            d: "1°C–4°C verified → prevents mass foodborne illness and total stock loss." ,
                            i: Utensils
                        },
                        { 
                            cat: "🏥 SAFETY", 
                            title: "Gas Bank Closure", 
                            d: "Mandatory valves OFF verified at midnight → prevents catastrophic fire risk.",
                            i: FlameKindling
                        },
                        { 
                            cat: "🔄 AGGREGATORS", 
                            title: "Cancellation Guard", 
                            d: "Organized floor → 40% fewer Zomato/Swiggy cancellations due to rush chaos.",
                            i: Smartphone
                        },
                        { 
                            cat: "💰 REVENUE", 
                            title: "Revenue Reconcile", 
                            d: "Sales vs Bank deposit verified → stops internal cashier theft and silent leakage.",
                            i: Banknote
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-black border border-white/5 space-y-6 hover:border-primary/30 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{item.cat}</span>
                                <item.i className="w-5 h-5 text-white/10 group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter leading-tight">{item.title}</h4>
                            <p className="text-sm text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* SECTION 8: CATEGORY DIFFERENTIATORS */}
        <Section className="bg-black border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">The Sovereignty</Badge>
                    <SectionHeadline className="text-center">NOT SOFTWARE. INFRASTRUCTURE.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                        { t: "NO SAAS", d: "No logins. No monthly fees. No subscription lock-in.", i: Lock },
                        { t: "ROLE-BASED", d: "Staff leaves → the system and knowledge stay.", i: ShieldCheck },
                        { t: "SHIFT PARITY", d: "Identical execution for Morning & Night teams.", i: Repeat },
                        { t: "BINARY LOGS", d: "Done / Pending. Zero room for reporting fraud.", i: Target },
                        { t: "AGGREGATOR SHIELD", d: "Organized floor → Higher ratings → Higher revenue.", i: TrendingUp }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-6 group hover:border-primary/20 transition-all">
                            <item.i className="w-10 h-10 text-primary/60 group-hover:scale-110 transition-transform" />
                            <div className="space-y-2">
                                <h4 className="font-black text-primary-text uppercase italic text-xs tracking-widest">{item.t}</h4>
                                <p className="text-[11px] text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-12 space-y-10">
                    <p className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-none">YOU ARE INSTALLING DISCIPLINE.</p>
                    <Button asChild size="lg" className="h-20 px-16 rounded-2xl bg-primary text-black font-black uppercase italic text-lg tracking-widest hover:scale-105 transition-all border-none">
                        <Link href="#pricing">DEPLOY SYSTEM: ₹999</Link>
                    </Button>
                </div>
            </div>
        </Section>

        {/* SECTION 9: PAYLOAD */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Institutional Payload</Badge>
                    <SectionHeadline className="text-center">WHAT YOU ARE DEPLOYING</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Pre-built Industry SOP Execution Engine",
                        "Daily, Weekly, Monthly Auto-Schedules",
                        "Trainer Notes for 100% of Tasks",
                        "Consequences of failure defined for all technical points",
                        "Unit & Group Command Dashboard",
                        "Fully Editable .xlsx / Sheets standalone system",
                        "Zero Learning Curve for floor staff"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-5 p-8 rounded-[2rem] bg-black border border-white/5 shadow-inner group hover:border-primary/20 transition-all">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                            <p className="text-sm md:text-base font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-12">
                    <p className="text-3xl md:text-5xl font-black text-primary-text uppercase italic tracking-tighter leading-none opacity-40">INSTANT DEPLOYMENT.</p>
                    <p className="text-4xl md:text-8xl font-black text-primary uppercase italic tracking-tighter leading-none">READY IN 10 MINUTES.</p>
                </div>
            </div>
        </Section>

      </main>
    </div>
  );
}
