
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
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
    ClipboardCheck,
    GraduationCap,
    AlertTriangle,
    Repeat,
    Crown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>Section);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter text-center leading-tight", className)}>
        {children}
    </h2>
);

const StickyCta = ({ price = "₹999" }: { price?: string }) => {
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
            "fixed bottom-6 right-6 z-50 transition-all duration-500",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        )}>
            <Button asChild size="lg" className="rounded-full shadow-2xl bg-primary text-black font-black uppercase italic text-[10px] tracking-widest px-8 h-14 border-none hover:scale-105 active:scale-95">
                <Link href="#pricing">Deploy System: {price}</Link>
            </Button>
        </div>
    );
};

const CtaBlock = ({ price = "₹999", sub = "ONE-TIME DEPLOYMENT • OWN FOREVER" }: { price?: string, sub?: string }) => (
    <div className="flex flex-col items-center gap-4 py-8">
        <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_30px_-5px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all border-none">
            <Link href="#pricing">
                DEPLOY YOUR SYSTEM: {price} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">{sub}</p>
    </div>
);

export default function PackClientPage({ pack }: { pack: PremiumPack }) {
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <StickyCta price="₹999" />

      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <section className="w-full pt-12 pb-12 md:pt-20 md:pb-20 bg-secondary/30 border-b border-white/5">
          <div className="container px-4 md:px-6 text-center max-w-5xl mx-auto space-y-10">
            <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 py-1.5 px-4 uppercase tracking-[0.3em] font-black text-[10px] bg-primary/5">
                    Hospitality • MoreMeets™ RESTAURANT OPERATING SYSTEM
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.95]">
                    RUN EVERY SHIFT <br />
                    <span className="text-primary">WITHOUT CHASING STAFF</span>
                </h1>
                <p className="max-w-[750px] mx-auto text-secondary-text text-lg md:text-xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                    Standardize your kitchen. Protect your margins. <br />
                    Your team runs daily operations. You see everything live.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Crown className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">{totalChecklists} MODULES</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Full Spectrum</span>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">{totalTasks}+ TASKS</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Control Points</span>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Repeat className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">8-ROLE MATRIX</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Execution System</span>
                </div>
            </div>

            <CtaBlock />
          </div>
        </section>

        {/* SECTION 2: THE PROBLEM */}
        <Section className="bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.3em] font-black text-[10px]">The Reality Check</Badge>
                    <SectionHeadline>WHY RESTAURANTS BREAK</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 p-8 rounded-[2rem] bg-red-500/[0.02] border border-red-500/10">
                        <h3 className="text-red-500/60 font-black uppercase tracking-widest text-xs italic">THE PROBLEM</h3>
                        <div className="space-y-4">
                            {[
                                "Tasks depend on memory",
                                "SOPs sit in folders",
                                "Managers keep following up",
                                "Staff executes differently every shift",
                                "No real-time visibility"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm text-zinc-400 italic">
                                    <XCircle className="w-4 h-4 text-red-500/40" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
                        <h3 className="text-white/40 font-black uppercase tracking-widest text-xs italic">WHAT THIS LEADS TO</h3>
                        <div className="space-y-4">
                            {[
                                "Food safety risks",
                                "Profit leakage",
                                "Bad reviews",
                                "Staff dependency",
                                "Operational chaos"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm text-zinc-400 italic">
                                    <ArrowRight className="w-4 h-4 text-red-500/40" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8">
                    <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter">THIS IS NOT A PEOPLE PROBLEM.</p>
                    <p className="text-4xl font-black text-red-500 uppercase italic tracking-tighter">THIS IS A SYSTEM PROBLEM.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 3: THE SHIFT */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto text-center space-y-16">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Operational Shift</Badge>
                
                <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-16 gap-y-8">
                    {[
                        { from: "MEMORY", to: "INFRASTRUCTURE" },
                        { from: "GUESSWORK", to: "TELEMETRY" },
                        { from: "HEROES", to: "SYSTEMS" },
                        { from: "DOCUMENTS", to: "EXECUTION" }
                    ].map((shift, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4">
                            <span className="text-sm md:text-lg font-black text-white/20 uppercase tracking-widest italic">{shift.from}</span>
                            <ArrowRight className="w-4 h-4 text-primary/40" />
                            <span className="text-sm md:text-lg font-black text-primary uppercase tracking-widest italic">{shift.to}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter">THIS IS NOT A TOOL.</p>
                    <p className="text-4xl md:text-6xl font-black text-primary uppercase italic tracking-tighter">THIS IS YOUR CONTROL SYSTEM.</p>
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
                        { t: "ONE-TIME SETUP", d: "Add branches and assign team to roles.", i: Settings2 },
                        { t: "TEAM OPENS TASKS", d: "They see what to do, how, and why.", i: Smartphone },
                        { t: "THEY EXECUTE", d: "Names entered → task turns green instantly.", i: Target },
                        { t: "AUTO SCHEDULING", d: "Daily, Weekly, Monthly cycles run alone.", i: Clock },
                        { t: "LIVE DASHBOARD", d: "You see everything without asking.", i: Activity }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all">
                                {i + 1}
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight">{step.t}</h4>
                            <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                        </div>
                    ))}
                </div>

                <CtaBlock />
            </div>
        </Section>

        {/* SECTION 5: INTERFACE */}
        <Section className="bg-alternate-background overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">Interface Preview</Badge>
                    <SectionHeadline>LIVE OPERATIONAL DASHBOARD</SectionHeadline>
                </div>

                <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-2 shadow-2xl">
                    <img 
                        src="https://images.openai.com/static-rsc-4/Lpvq3RIAlOQAunBgykesfPY-Chj4NHzQ7g3wz0tJabwHjJ9wSePwx0e1tca8qhTUkrfy9Hrdo2bciFsZiLV4R7Buye2UGtk7VEex8T8ByBtDJv-ZSzdQ4i68VvaosK_bfeG2SrPPODE8kI9NzYLytayHGqe1ZBt1x6hdiYpD21r6NSyfLmERcuWvyFj-geXR?purpose=fullsize" 
                        alt="Sovereign Dashboard" 
                        className="rounded-[2.2rem] grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {[
                        "Live task completion",
                        "Multi-branch comparison",
                        "Risk visibility",
                        "Execution logs"
                    ].map(item => (
                        <div key={item} className="flex items-center justify-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <p className="text-2xl md:text-4xl font-black text-primary-text uppercase italic tracking-tighter">YOU DON'T ASK. <br /><span className="text-primary">YOU ALREADY KNOW.</span></p>
                </div>
            </div>
        </Section>

        {/* SECTION 6: DIFFERENTIATOR */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">System Logic</Badge>
                    <SectionHeadline>EVERY TASK IS BUILT FOR EXECUTION</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "WHAT TO DO", d: "Clear instruction. No ambiguity.", i: ClipboardCheck },
                        { t: "HOW TO DO IT", d: "Trainer Notes in simple language. No training curve.", i: GraduationCap },
                        { t: "WHY IT MATTERS", d: "Defined consequence of failure drives seriousness.", i: AlertTriangle }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 hover:border-primary/20 transition-all">
                            <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter">{item.t}</h4>
                            <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <p className="text-xl md:text-2xl font-black text-primary uppercase italic tracking-tighter">THIS IS WHY SYSTEMS WORK.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 7: EXAMPLES */}
        <Section className="bg-alternate-background">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[11px]">Field Reality</Badge>
                    <SectionHeadline>REAL OPERATIONS. REAL CONTROL.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { cat: "🍽 RESTAURANT", title: "Cold-Chain Check", d: "1°C–4°C verified → prevents spoilage & food poisoning" },
                        { cat: "🏥 SAFETY LOGIC", title: "Gas Bank Closure", d: "All valves OFF → prevents fire hazard" },
                        { cat: "🚗 SERVICE CONTROL", title: "Valet Sobriety Audit", d: "Random check → prevents legal disaster" },
                        { cat: "⭐ GUEST EXPERIENCE", title: "VIP Greeting Protocol", d: "Identified guests greeted → protects high-value revenue" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-black border border-white/5 space-y-4">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{item.cat}</span>
                            <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter leading-tight">{item.title}</h4>
                            <p className="text-sm text-secondary-text italic font-medium">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8 space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter">THIS IS NOT A CHECKLIST.</p>
                    <p className="text-3xl md:text-5xl font-black text-primary uppercase italic tracking-tighter leading-none">THIS IS DAILY CONTROL.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 8: HARD DIFFERENTIATORS */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[11px]">Hardened Design</Badge>
                    <SectionHeadline>WHY THIS SYSTEM IS DIFFERENT</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {[
                        { t: "NO SAAS", d: "No logins. No subscriptions. No lock-in.", i: Lock },
                        { t: "ROLE-BASED", d: "Runs on roles, not people. System stays when staff leave.", i: ShieldCheck },
                        { t: "SHIFT PARITY", d: "Morning = Night = Same standard. No variation.", i: Repeat },
                        { t: "BINARY", d: "Done / Not Done. No grey area. Total clarity.", i: Target },
                        { t: "AGGREGATOR", d: "Fewer delays → better ratings → higher revenue.", i: Smartphone }
                    ].map((item, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-3">
                            <item.i className="w-6 h-6 text-primary" />
                            <h4 className="font-black text-primary-text uppercase italic text-xs tracking-tight">{item.t}</h4>
                            <p className="text-[10px] text-secondary-text italic font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <p className="text-3xl font-black text-primary uppercase italic tracking-widest">YOU ARE INSTALLING DISCIPLINE.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 9: BEFORE AFTER */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="grid md:grid-cols-2 gap-12 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-red-500/[0.02] border border-red-500/10">
                        <h3 className="text-red-500/60 font-black uppercase tracking-widest text-xs italic">BEFORE</h3>
                        <div className="space-y-6">
                            {["You follow up", "You guess", "You depend on people", "You react late"].map(item => (
                                <div key={item} className="flex items-center gap-4 text-sm text-zinc-400 italic">
                                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-primary/[0.02] border border-primary/10">
                        <h3 className="text-primary font-black uppercase tracking-widest text-xs italic">AFTER</h3>
                        <div className="space-y-6">
                            {["You see everything live", "You act early", "You control remotely", "System runs daily"].map(item => (
                                <div key={item} className="flex items-center gap-4 text-sm text-primary-text font-bold uppercase italic tracking-tight">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-3xl md:text-5xl font-black text-primary-text uppercase italic tracking-tighter">FROM FIRE-FIGHTING → COMMAND</p>
                </div>
            </div>
        </Section>

        {/* SECTION 10: PAYLOAD */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technical Payload</Badge>
                    <SectionHeadline>FULL OPERATIONAL PAYLOAD</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Pre-built restaurant SOP system",
                        "Daily, weekly, monthly execution engine",
                        "Trainer Notes for every task",
                        "Consequences of failure built-in",
                        "Multi-branch dashboard",
                        "Fully editableStandalone system"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            <p className="text-sm font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">WORKS ON EXCEL / GOOGLE SHEETS.</p>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">READY IN 10 MINUTES • NO LEARNING CURVE</p>
                </div>
            </div>
        </Section>

      </main>
    </div>
  );
}
