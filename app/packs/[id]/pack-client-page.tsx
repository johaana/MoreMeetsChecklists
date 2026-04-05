
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent } from '@/components/icons';
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
    Crown,
    AlertTriangle,
    GraduationCap,
    Repeat,
    LayoutGrid,
    Users2,
    BarChart3,
    ClipboardCheck,
    Utensils,
    History,
    Zap,
    Scale,
    ShieldAlert,
    ChevronRight,
    Eye,
    TrendingUp,
    Check,
    ChefHat,
    FlameKindling,
    Banknote,
    Shield
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
    <h2 className={cn("text-3xl md:text-6xl font-black font-headline text-primary-text uppercase italic tracking-tighter text-center leading-[0.95]", className)}>
        {children}
    </h2>
);

const CtaBlock = ({ price = "₹999", sub = "INSTITUTIONAL ACCESS • OWN FOREVER" }: { price?: string, sub?: string }) => (
    <div className="flex flex-col items-center gap-4 py-8">
        <Button asChild size="lg" className="h-16 md:h-20 px-10 md:px-16 rounded-xl bg-primary text-black font-black uppercase italic text-lg md:text-xl shadow-[0_0_50px_-5px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all border-none">
            <Link href="#pricing">
                DEPLOY YOUR SYSTEM <ArrowRight className="ml-3 h-6 w-6 md:h-7 md:w-7" />
            </Link>
        </Button>
        <div className="space-y-1">
            <p className="text-[11px] md:text-xs font-black text-primary uppercase tracking-[0.3em] text-center">{price} — ONE-TIME DEPLOYMENT</p>
            <p className="text-[9px] md:text-[10px] font-black text-white/20 uppercase tracking-[0.3em] text-center">{sub}</p>
        </div>
    </div>
);

export default function PackClientPage({ pack }: { pack: PremiumPack }) {
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;
  const roles = Array.from(new Set(pack.checklists?.map(c => c.role) || [])).length;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* SECTION 1: COMMAND HERO */}
        <section className="relative w-full pt-16 pb-12 md:pt-24 md:pb-24 border-b border-white/5 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,184,107,0.08)_0%,transparent_70%)]" />
          <div className="container px-4 md:px-6 text-center max-w-6xl mx-auto space-y-12 relative z-10">
            
            <div className="space-y-6">
                <div className="flex justify-center">
                    <div className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary font-black uppercase italic text-[9px] md:text-[10px] tracking-[0.3em] backdrop-blur-sm">
                        {pack.title.toUpperCase()} • SOVEREIGN V11.9
                    </div>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.85]">
                    RUN DAILY OPERATIONS <br />
                    <span className="text-primary">WITHOUT CHASING STAFF</span>
                </h1>
                <div className="max-w-2xl mx-auto border-l-2 border-primary/20 pl-8">
                    <p className="text-lg md:text-2xl text-secondary-text font-medium leading-relaxed italic text-left">
                        Standardize your {pack.category.includes('Hospitality') ? 'kitchen' : 'operations'}. Protect your margins. <br />
                        Your team runs daily operations. You see everything live.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {[
                    { l: "Modules", v: totalChecklists, i: ShieldCheck },
                    { l: "Control Points", v: `${totalTasks}+`, i: Target },
                    { l: "Role Matrix", v: `${roles}-Role`, i: Users2 }
                ].map((stat, i) => (
                    <div key={i} className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 group hover:border-primary/20 transition-all">
                        <stat.i className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                        <span className="text-3xl md:text-4xl font-black text-primary-text italic leading-none">{stat.v}</span>
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{stat.l}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-10">
                <CtaBlock />
                <div className="flex flex-col items-center gap-4">
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SPECIFICALLY BUILT FOR:</span>
                    <div className="flex flex-wrap justify-center gap-3">
                        {pack.whoIsItFor?.map(role => (
                            <div key={role} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-black uppercase text-primary-text/70 tracking-widest italic shadow-inner">
                                {role}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE REALITY CHECK */}
        <Section className="bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.3em] font-black text-[10px]">The Execution Gap</Badge>
                    <SectionHeadline>WHY {pack.category.toUpperCase()} OPERATIONS BREAK</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-red-500/[0.02] border border-red-500/10">
                        <div className="space-y-2">
                            <h3 className="text-red-500 font-black uppercase tracking-widest text-xs italic">THE PROBLEM</h3>
                            <p className="text-xs text-red-500/40 font-bold uppercase tracking-wider">Predictable Failure Points</p>
                        </div>
                        <div className="space-y-6">
                            {[
                                "Tasks depend on human memory",
                                "SOPs sit in dead folders / PDFs",
                                "Managers waste 40% time chasing staff",
                                "Execution varies by shift and person",
                                "Zero real-time data visibility"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium leading-tight">
                                    <XCircle className="w-6 h-6 text-red-500/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-primary/[0.02] border border-primary/10">
                        <div className="space-y-2">
                            <h3 className="text-primary font-black uppercase tracking-widest text-xs italic">THE OUTCOME</h3>
                            <p className="text-xs text-primary/40 font-bold uppercase tracking-wider">Institutional Exposure</p>
                        </div>
                        <div className="space-y-6">
                            {[
                                "Critical safety & FSSAI risks",
                                "Silent profit leakage and theft",
                                "Negative reviews and brand damage",
                                "Total dependency on key individuals",
                                "Operational chaos across branches"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium leading-tight">
                                    <ArrowRight className="w-6 h-6 text-primary/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-xl md:text-3xl font-black text-primary-text uppercase italic tracking-tighter leading-none opacity-20">THIS IS NOT A PEOPLE PROBLEM.</p>
                    <p className="text-4xl md:text-7xl font-black text-red-500 uppercase italic tracking-tighter leading-none">THIS IS A SYSTEM PROBLEM.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 3: THE SHIFT */}
        <Section className="bg-alternate-background border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Institutional Transformation</Badge>
                    <SectionHeadline>OPERATIONAL CATEGORY SHIFT</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl">
                    <div className="bg-black p-12 md:p-20 space-y-10">
                        <h4 className="text-white/20 font-black uppercase tracking-[0.4em] text-[10px]">TRADITIONAL MANAGEMENT</h4>
                        <div className="space-y-8">
                            {[
                                { f: "MEMORY", t: "SOPs exist only in documentation" },
                                { f: "GUESSWORK", t: "Managers ask 'Is it done?'" },
                                { f: "HEROES", t: "Standards leave when staff resigns" },
                                { f: "DEAD DATA", t: "Records are for audits only" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-red-500/60 font-black text-2xl italic tracking-tighter uppercase">{item.f}</span>
                                    <p className="text-sm text-zinc-500 italic font-medium">{item.t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary/5 p-12 md:p-20 space-y-10 relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <ShieldCheck className="w-40 h-40 text-primary" />
                        </div>
                        <h4 className="text-primary/60 font-black uppercase tracking-[0.4em] text-[10px]">SOVEREIGN INFRASTRUCTURE</h4>
                        <div className="space-y-8">
                            {[
                                { f: "INFRASTRUCTURE", t: "Execution is built into the workflow" },
                                { f: "TELEMETRY", t: "Dashboard shows reality live" },
                                { f: "PERMANENCE", t: "Standards are owned by the business" },
                                { f: "EXECUTION", t: "Work happens correctly every time" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-primary font-black text-2xl italic tracking-tighter uppercase">{item.f}</span>
                                    <p className="text-sm text-primary-text italic font-medium">{item.t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl md:text-4xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                        THIS IS NOT A TOOL. <br />
                        <span className="text-primary">THIS IS YOUR CONTROL SYSTEM.</span>
                    </p>
                </div>
            </div>
        </Section>

        {/* SECTION 4: THE OPERATING LOOP */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Daily Sequence</Badge>
                    <SectionHeadline>THE DAILY OPERATING LOOP</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-5 gap-12">
                    {[
                        { t: "ONE-TIME SETUP", d: "Add branches. Assign team to roles. Done once.", i: Settings2 },
                        { t: "TEAM OPENS TASKS", d: "They see what to do, how to do it, and why it matters.", i: Smartphone },
                        { t: "THEY EXECUTE", d: "Type name → task turns green. No fake reporting.", i: Target },
                        { t: "AUTO SCHEDULE", d: "Daily, Weekly, Monthly cycles run automatically.", i: Clock },
                        { t: "SEE EVERYTHING", d: "Dashboard shows what's done or missed instantly.", i: Activity }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-6 group">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all shadow-lg text-xl">
                                {i + 1}
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight leading-tight">{step.t}</h4>
                                <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-12 border-t border-white/5 space-y-8">
                    <p className="text-2xl md:text-4xl font-black text-primary uppercase italic tracking-tighter leading-none">NO CALLS. NO FOLLOW-UPS. NO MEMORY.</p>
                    <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary/10 text-primary border border-primary/30 font-black uppercase italic text-sm tracking-widest hover:bg-primary hover:text-black transition-all">
                        <Link href="#pricing">DEPLOY YOUR SYSTEM: ₹999</Link>
                    </Button>
                </div>
            </div>
        </Section>

        {/* SECTION 5: VISUAL PROOF */}
        <Section className="bg-alternate-background overflow-hidden border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">The Control Center</Badge>
                    <SectionHeadline>LIVE OPERATIONAL TELEMETRY</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium">The "Command View" across single or multiple sites.</p>
                </div>

                <div className="relative rounded-[3rem] border border-white/10 bg-zinc-900/50 p-3 shadow-2xl group max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.8rem]" />
                    <img 
                        src="https://i.postimg.cc/YSQcfhnQ/Screenshot-2026-04-02-165428.png" 
                        alt="Sovereign Dashboard Interface" 
                        className="rounded-[2.8rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 w-full h-auto"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                    {[
                        "Live task completion (Green/Pending)",
                        "Multi-branch comparison grid",
                        "High-risk alert signals",
                        "Timestamped execution logs"
                    ].map(item => (
                        <div key={item} className="flex items-center justify-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="text-[11px] font-black text-white/40 uppercase tracking-widest leading-tight">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-8">
                    <p className="text-3xl md:text-6xl font-black text-primary-text uppercase italic tracking-tighter leading-[1.1]">YOU DON'T ASK. <br /><span className="text-primary">YOU ALREADY KNOW.</span></p>
                </div>
            </div>
        </Section>

        {/* SECTION 6: THE CLARITY FRAMEWORK */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">System Integrity</Badge>
                    <SectionHeadline>ZERO-AMBIGUITY TASK LOGIC</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {[
                        { t: "WHAT TO DO", d: "Clear technical instructions. Zero interpretation required.", i: ClipboardCheck },
                        { t: "HOW TO DO IT", d: "Embedded Trainer Notes. Any staff can execute correctly from Day 1.", i: GraduationCap },
                        { t: "WHY IT MATTERS", d: "Defined consequences of failure. Drives institutional seriousness.", i: AlertTriangle }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-8 hover:border-primary/20 transition-all group shadow-inner">
                            <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shadow-lg">
                                <item.i className="w-7 h-7" />
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-black text-primary-text uppercase italic text-2xl tracking-tighter leading-none">{item.t}</h4>
                                <p className="text-base text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-xl md:text-2xl font-black text-primary uppercase italic tracking-tighter">THIS IS WHY SYSTEMS WORK WHERE PEOPLE FAIL.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 7: REAL EXAMPLES */}
        <Section className="bg-alternate-background">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Technical Proof</Badge>
                    <SectionHeadline>REAL OPERATIONS. REAL CONTROL.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { 
                            cat: "🍽 RESTAURANT", 
                            title: "HACCP Thermal Check", 
                            d: "Fridge must be 1°C to 4°C → prevents foodborne illness and mass spoilage." ,
                            i: Utensils
                        },
                        { 
                            cat: "🏥 SAFETY LOGIC", 
                            title: "Gas Bank Closure", 
                            d: "All valves OFF verified at midnight → prevents catastrophic fire risk.",
                            i: FlameKindling
                        },
                        { 
                            cat: "🚗 SERVICE CONTROL", 
                            title: "Shift Handover Audit", 
                            d: "Verified logs → prevents communication gaps and accountability loss.",
                            i: Repeat
                        },
                        { 
                            cat: "💰 PROFIT SHIELD", 
                            title: "Aggregator Match", 
                            d: "Sales reconcile vs Bank → stops internal theft and silent revenue leakage.",
                            i: Banknote
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-black border border-white/5 space-y-6 hover:border-primary/30 transition-colors group">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{item.cat}</span>
                                <item.i className="w-4 h-4 text-white/10 group-hover:text-primary transition-colors" />
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-xl tracking-tighter leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-sm text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <p className="text-xl md:text-3xl font-black text-primary uppercase italic tracking-tighter">THIS IS NOT A CHECKLIST. THIS IS DISCIPLINE.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 8: CATEGORY DIFFERENTIATORS */}
        <Section className="bg-black border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-24">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">Institutional Standard</Badge>
                    <SectionHeadline>BEYOND SOFTWARE TOOLS</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {[
                        { t: "NO SAAS", d: "No logins. No monthly fees. No lock-in.", i: Lock },
                        { t: "ROLE-BASED", d: "System runs on roles. Staff leaves → standard stays.", i: ShieldCheck },
                        { t: "SHIFT PARITY", d: "Same execution for Morning & Night teams.", i: Repeat },
                        { t: "BINARY LOGS", d: "Done / Not Done. Zero room for reporting fraud.", i: Target },
                        { t: "AUDIT READY", d: "ISO & HACCP aligned. Built for inspectors.", i: Scale }
                    ].map((item, i) => (
                        <div key={i} className="p-10 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-6 group hover:border-primary/20 transition-all">
                            <item.i className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                            <div className="space-y-2">
                                <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight leading-tight">{item.t}</h4>
                                <p className="text-[11px] text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-12 border-t border-white/5 space-y-10">
                    <p className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-widest leading-none">YOU ARE INSTALLING INFRASTRUCTURE.</p>
                    <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-sm tracking-widest hover:scale-105 transition-all border-none">
                        <Link href="#pricing">DEPLOY YOUR SYSTEM: ₹999</Link>
                    </Button>
                </div>
            </div>
        </Section>

        {/* SECTION 9: PAYLOAD */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Institutional Payload</Badge>
                    <SectionHeadline>WHAT YOU ARE DEPLOYING</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        `Pre-built ${pack.title} Engine`,
                        "Daily, Weekly, Monthly Auto-Cycles",
                        "Trainer Notes for 100% of tasks",
                        "Consequences of Failure Database",
                        "Multi-Branch Command Dashboard",
                        "Fully Editable .xlsx / Sheets format",
                        "No Learning Curve for floor staff"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-5 p-8 rounded-2xl bg-black border border-white/5 shadow-inner group hover:border-primary/20 transition-all">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                            <p className="text-sm md:text-base font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-12">
                    <p className="text-2xl md:text-4xl font-black text-primary-text uppercase italic tracking-tighter leading-none opacity-40">INSTANT DEPLOYMENT.</p>
                    <p className="text-3xl md:text-6xl font-black text-primary uppercase italic tracking-tighter leading-none">READY IN 10 MINUTES.</p>
                </div>
            </div>
        </Section>

      </main>
    </div>
  );
}
