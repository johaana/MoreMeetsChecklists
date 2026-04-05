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
    Users,
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
    Check
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
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter text-center leading-[1.05]", className)}>
        {children}
    </h2>
);

const StickyCta = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className={cn(
            "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-3rem)] max-w-md",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
            <Button asChild size="lg" className="w-full rounded-xl shadow-2xl bg-primary text-black font-black uppercase italic text-[11px] tracking-[0.2em] px-8 h-14 border-none hover:scale-105 active:scale-95">
                <Link href="#pricing">Deploy System: ₹999</Link>
            </Button>
        </div>
    );
};

const CtaBlock = ({ price = "₹999", sub = "INSTITUTIONAL ACCESS • OWN FOREVER" }: { price?: string, sub?: string }) => (
    <div className="flex flex-col items-center gap-4 py-8">
        <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_30px_-5px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all border-none">
            <Link href="#pricing">
                DEPLOY YOUR SYSTEM <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
        <div className="space-y-1">
            <p className="text-[11px] font-black text-primary uppercase tracking-[0.3em] text-center">{price} — ONE-TIME DEPLOYMENT</p>
            <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] text-center">{sub}</p>
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
      <StickyCta />

      <main className="flex-1">
        {/* SECTION 1: HERO (TIGHTENED) */}
        <section className="relative w-full pt-12 pb-12 md:pt-20 md:pb-20 border-b border-white/5 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,184,107,0.05)_0%,transparent_50%)]" />
          <div className="container px-4 md:px-6 text-center max-w-5xl mx-auto space-y-8 relative z-10">
            <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.3em] font-black text-[10px] bg-primary/5 rounded-none">
                    {pack.title.toUpperCase()} • SOVEREIGN V11.9
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.95]">
                    RUN DAILY OPERATIONS <br />
                    <span className="text-primary">WITHOUT CHASING STAFF</span>
                </h1>
                <p className="max-w-[700px] mx-auto text-secondary-text text-lg md:text-xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                    Standardize your {pack.category.includes('Hospitality') ? 'kitchen' : 'operations'}. Protect your margins. <br />
                    Your team runs daily operations. You see everything live.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                {[
                    { l: "Modules", v: totalChecklists, i: LayoutGrid },
                    { l: "Control Points", v: `${totalTasks}+`, i: Target },
                    { l: "Role Matrix", v: `${roles}-Role`, i: Users }
                ].map((stat, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center gap-1">
                        <stat.i className="w-4 h-4 text-primary/40 mb-1" />
                        <span className="text-2xl font-black text-primary-text italic">{stat.v}</span>
                        <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em]">{stat.l}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-6">
                <CtaBlock />
                <div className="flex flex-wrap justify-center gap-2">
                    {pack.whoIsItFor?.map(role => (
                        <div key={role} className="px-3 py-1.5 rounded bg-white/[0.03] border border-white/5 text-[9px] font-black uppercase text-secondary-text tracking-widest italic">
                            {role}
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE REALITY CHECK (PAIN) */}
        <Section className="bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.3em] font-black text-[10px]">The Execution Gap</Badge>
                    <SectionHeadline>WHY {pack.category.toUpperCase()} OPERATIONS BREAK</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 p-8 md:p-10 rounded-[2rem] bg-red-500/[0.02] border border-red-500/10">
                        <h3 className="text-red-500 font-black uppercase tracking-widest text-xs italic underline underline-offset-8 decoration-red-500/30">THE PROBLEM</h3>
                        <div className="space-y-5">
                            {[
                                "Tasks depend on memory",
                                "SOPs sit in folders / PDFs",
                                "Managers keep following up",
                                "Staff executes differently every shift",
                                "Zero real-time visibility"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base text-zinc-400 italic font-medium leading-tight">
                                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/10">
                        <h3 className="text-primary font-black uppercase tracking-widest text-xs italic underline underline-offset-8 decoration-primary/30">THE EXPOSURE</h3>
                        <div className="space-y-5">
                            {[
                                "Critical safety & compliance risks",
                                "Silent profit leakage and theft",
                                "Negative reviews and brand damage",
                                "Total dependency on key individuals",
                                "Operational chaos across branches"
                            ].map(item => (
                                <div key={item} className="flex items-start gap-4 text-base text-zinc-400 italic font-medium leading-tight">
                                    <ArrowRight className="w-5 h-5 text-primary/40 shrink-0 mt-0.5" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none opacity-40">THIS IS NOT A PEOPLE PROBLEM.</p>
                    <p className="text-3xl md:text-5xl font-black text-red-500 uppercase italic tracking-tighter">THIS IS A SYSTEM PROBLEM.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 3: THE SHIFT (CATEGORY CREATION) */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Category Shift</Badge>
                    <SectionHeadline>OPERATIONAL SHIFT</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
                    <div className="bg-black p-10 md:p-16 space-y-8">
                        <h4 className="text-white/20 font-black uppercase tracking-[0.3em] text-xs">TRADITIONAL MANAGEMENT</h4>
                        <div className="space-y-6">
                            {[
                                { f: "MEMORY", t: "SOPs sit in dead folders" },
                                { f: "GUESSWORK", t: "Managers ask 'Is it done?'" },
                                { f: "HEROES", t: "Standards leave when staff resigns" },
                                { f: "DOCUMENTS", t: "Documentation is for audits only" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-red-500/60 font-black text-xl italic tracking-tighter uppercase">{item.f}</span>
                                    <p className="text-sm text-zinc-500 italic font-medium">{item.t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-primary/5 p-10 md:p-16 space-y-8 relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck className="w-32 h-32 text-primary" />
                        </div>
                        <h4 className="text-primary/60 font-black uppercase tracking-[0.3em] text-xs">SOVEREIGN INFRASTRUCTURE</h4>
                        <div className="space-y-6">
                            {[
                                { f: "INFRASTRUCTURE", t: "Execution is built into the workflow" },
                                { f: "TELEMETRY", t: "Dashboard shows reality instantly" },
                                { f: "SYSTEMS", t: "Standards are owned by the business" },
                                { f: "EXECUTION", t: "Work happens correctly every time" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-primary font-black text-xl italic tracking-tighter uppercase">{item.f}</span>
                                    <p className="text-sm text-primary-text italic font-medium">{item.t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-xl md:text-3xl font-black text-primary-text uppercase italic tracking-tighter leading-none">
                        THIS IS NOT A TOOL. <br />
                        <span className="text-primary">THIS IS YOUR CONTROL SYSTEM.</span>
                    </p>
                </div>
            </div>
        </Section>

        {/* SECTION 4: THE LOOP */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Daily Sequence</Badge>
                    <SectionHeadline>DAILY OPERATION LOOP</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        { t: "ONE-TIME SETUP", d: "Add branches. Assign team to roles. Done once.", i: Settings2 },
                        { t: "TEAM OPENS TASKS", d: "They see what to do, how to do it, and why it matters.", i: Smartphone },
                        { t: "THEY EXECUTE", d: "Type name → task turns green. No fake reporting.", i: Target },
                        { t: "AUTO SCHEDULE", d: "Daily, Weekly, Monthly cycles run automatically.", i: Clock },
                        { t: "SEE EVERYTHING", d: "Dashboard shows what's done or missed instantly.", i: Activity }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all shadow-lg text-lg">
                                {i + 1}
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight leading-tight">{step.t}</h4>
                            <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-xl md:text-2xl font-black text-primary uppercase italic tracking-tighter leading-none">NO CALLS. NO FOLLOW-UPS.</p>
                </div>

                <div className="flex justify-center">
                    <Button asChild size="lg" className="h-14 px-10 rounded-xl bg-primary/10 text-primary border border-primary/20 font-black uppercase italic text-sm tracking-widest hover:bg-primary hover:text-black transition-all">
                        <Link href="#pricing">DEPLOY YOUR SYSTEM: ₹999</Link>
                    </Button>
                </div>
            </div>
        </Section>

        {/* SECTION 5: INTERFACE PROOF (DASHBOARD) */}
        <Section className="bg-alternate-background overflow-hidden border-y border-white/5">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">System Interface</Badge>
                    <SectionHeadline>LIVE OPERATIONAL DASHBOARD</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium">The Command View: Global Visibility across all sites.</p>
                </div>

                <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl group max-w-5xl mx-auto">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2.2rem]" />
                    <img 
                        src="https://i.postimg.cc/YSQcfhnQ/Screenshot-2026-04-02-165428.png" 
                        alt="Sovereign Dashboard Interface" 
                        className="rounded-[2.2rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 w-full h-auto"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
                    {[
                        "Live task completion (Green/Pending)",
                        "Multi-branch comparison",
                        "Risk visibility heatmap",
                        "Execution logs"
                    ].map(item => (
                        <div key={item} className="flex items-center justify-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-8">
                    <p className="text-2xl md:text-5xl font-black text-primary-text uppercase italic tracking-tighter leading-[1.1]">YOU DON'T ASK. <br /><span className="text-primary">YOU ALREADY KNOW.</span></p>
                </div>
            </div>
        </Section>

        {/* SECTION 6: THE DIFFERENTIATOR */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">System Logic</Badge>
                    <SectionHeadline>EVERY TASK IS BUILT FOR EXECUTION</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "WHAT TO DO", d: "Clear instruction. No ambiguity. No room for staff guessing.", i: ClipboardCheck },
                        { t: "HOW TO DO IT", d: "Trainer Notes in simple language. Any staff can execute correctly.", i: GraduationCap },
                        { t: "WHY IT MATTERS", d: "Defined consequence of failure. Drives institutional seriousness.", i: AlertTriangle }
                    ].map((item, i) => (
                        <div key={i} className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-6 hover:border-primary/20 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shadow-inner">
                                <item.i className="w-6 h-6" />
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-2xl tracking-tighter leading-none">{item.t}</h4>
                            <p className="text-base text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 space-y-4">
                    <p className="text-xl md:text-3xl font-black text-primary uppercase italic tracking-tighter">THIS IS WHY SYSTEMS WORK.</p>
                    <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">No misinterpretation • Same execution everywhere • No hero dependency</p>
                </div>
            </div>
        </Section>

        {/* SECTION 7: EXAMPLES */}
        <Section className="bg-alternate-background">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Field Evidence</Badge>
                    <SectionHeadline>REAL OPERATIONS. REAL CONTROL.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { cat: "🍽 RESTAURANT", title: "Cold Chain Check", d: "1°C–4°C verified → prevents food poisoning" },
                        { cat: "🏥 SAFETY LOGIC", title: "Gas Bank Closure", d: "All valves OFF → prevents fire hazard" },
                        { cat: "🚗 SERVICE CONTROL", title: "Shift Handover Audit", d: "Verified logs → prevents communication gaps" },
                        { cat: "⭐ GUEST EXPERIENCE", title: "VIP Greeting Protocol", d: "Identified guests greeted → protects revenue" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-black border border-white/5 space-y-4 hover:border-primary/20 transition-colors group">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{item.cat}</span>
                            <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                            <p className="text-sm text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter opacity-40">THIS IS NOT A CHECKLIST.</p>
                    <p className="text-3xl md:text-6xl font-black text-primary uppercase italic tracking-tighter leading-none">THIS IS DAILY CONTROL.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 8: HARD DIFFERENTIATORS */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">Infrastructure Standard</Badge>
                    <SectionHeadline>WHY THIS SYSTEM IS DIFFERENT</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        { t: "NO SAAS", d: "No logins. No subscriptions. No lock-in.", i: Lock },
                        { t: "ROLE-BASED", d: "Runs on roles, not people. Staff changes → system stays.", i: ShieldCheck },
                        { t: "SHIFT PARITY", d: "Same standard. Every day. Every team.", i: Repeat },
                        { t: "BINARY EXECUTION", d: "Done / Not Done. No grey area.", i: Target },
                        { t: "AGGREGATOR STABILITY", d: "Better execution → fewer delays → better ratings.", i: BarChart3 }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-4 hover:border-primary/30 transition-all">
                            <item.i className="w-8 h-8 text-primary" />
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight leading-tight">{item.t}</h4>
                            <p className="text-[10px] text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-12 border-t border-white/5">
                    <p className="text-3xl font-black text-primary uppercase italic tracking-widest">YOU ARE INSTALLING DISCIPLINE.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 9: BEFORE AFTER */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="grid md:grid-cols-2 gap-12 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                    <div className="space-y-8 p-12 rounded-[3rem] bg-red-500/[0.02] border border-red-500/10 shadow-2xl">
                        <h3 className="text-red-500/60 font-black uppercase tracking-widest text-sm italic">BEFORE</h3>
                        <div className="space-y-6">
                            {["You follow up", "You guess", "You depend on people", "You react late"].map(item => (
                                <div key={item} className="flex items-center gap-4 text-base text-zinc-400 italic font-medium">
                                    <XCircle className="w-6 h-6 text-red-500/40 shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 p-12 rounded-[3rem] bg-primary/[0.02] border border-primary/10 shadow-2xl">
                        <h3 className="text-primary font-black uppercase tracking-widest text-sm italic">AFTER</h3>
                        <div className="space-y-6">
                            {["You see everything live", "You act early", "You control remotely", "System runs daily"].map(item => (
                                <div key={item} className="flex items-center gap-4 text-base text-primary-text font-black uppercase italic tracking-tight">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-4xl md:text-6xl font-black text-primary-text uppercase italic tracking-tighter leading-none">FROM FIRE-FIGHTING → COMMAND</p>
                </div>
            </div>
        </Section>

        {/* SECTION 10: PAYLOAD */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Institutional Payload</Badge>
                    <SectionHeadline>FULL OPERATIONAL PAYLOAD</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        `Pre-built ${pack.title} SOP system`,
                        "Daily, weekly, monthly execution engine",
                        "Trainer Notes for every task",
                        "Consequences of failure built-in",
                        "Multi-branch dashboard",
                        "Fully editable system",
                        "Runs on Excel / Google Sheets"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner group hover:border-primary/20 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                            <p className="text-sm font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4 pt-12">
                    <p className="text-xl md:text-3xl font-black text-primary-text uppercase italic tracking-tighter leading-none">READY IN 10 MINUTES.</p>
                </div>
            </div>
        </Section>

      </main>
    </div>
  );
}
