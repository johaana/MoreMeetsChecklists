
'use client';

import React from 'react';
import { painPointsContent } from '@/lib/pain-points-content';
import { SiteHeader } from '@/components/layout/header';
import type { PremiumPack } from "@/lib/premium-packs";
import { IconComponent, ComplianceIcon } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Check, ArrowRight, Target, Zap, Laptop, Layers, Users, Database, Clock, Smartphone, Activity, XCircle, CheckCircle2, ShieldCheck, Lock, History } from 'lucide-react';
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
    <h2 className={cn("text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter text-center leading-tight", className)}>
        {children}
    </h2>
);

const CtaBlock = ({ price = "₹999", showUSD = false }: { price?: string, showUSD?: boolean }) => (
    <div className="flex flex-col items-center gap-4 py-8">
        <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_30px_-5px_rgba(46,184,107,0.5)] hover:scale-105 transition-all border-none">
            <Link href="#pricing">
                DEPLOY YOUR SYSTEM: {price} {showUSD && "/ $12"} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
        <p className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">GO LIVE IN 10 MINUTES • OWN FOREVER</p>
    </div>
);

export default function PackClientPage({ pack, heroImageUrl, imageHint }: { pack: PremiumPack, heroImageUrl: string | null, imageHint: string }) {
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, checklist) => sum + (checklist.tasks?.length || 0), 0) || 0;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="w-full pt-12 pb-12 md:pt-20 md:pb-20 bg-secondary/30 border-b border-white/5">
          <div className="container px-4 md:px-6 text-center max-w-5xl mx-auto space-y-10">
            <div className="space-y-6">
                <Badge variant="outline" className="text-primary border-primary/30 py-1.5 px-4 uppercase tracking-[0.3em] font-black text-[10px] bg-primary/5">
                    {pack.category} • MOREMEETS™ {pack.id.includes('restaurant') ? 'RESTAURANT OPERATING SYSTEM' : pack.title.toUpperCase()}
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black tracking-tighter font-headline text-primary-text uppercase italic leading-[0.95]">
                    RUN EVERY SHIFT <br />
                    <span className="text-primary">WITHOUT CHASING STAFF</span>
                </h1>
                <p className="max-w-[750px] mx-auto text-secondary-text text-lg md:text-xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                    Your team marks tasks. You see everything live. <br />
                    No chasing. No guesswork. No dependency on managers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Layers className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">{totalChecklists} MODULES</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Full Spectrum</span>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Database className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">{totalTasks}+ TASKS</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Control Points</span>
                </div>
                <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-primary-text font-black text-xl">8-ROLE MATRIX</span>
                    <span className="text-[10px] font-black uppercase text-white/20 tracking-widest">Execution System</span>
                </div>
            </div>

            <CtaBlock />
          </div>
        </section>

        {/* 2. WHY THIS EXISTS (PAIN) */}
        <Section className="bg-black border-b border-white/5">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-red-500 border-red-500/30 uppercase tracking-[0.3em] font-black text-[10px]">The Reality Check</Badge>
                    <SectionHeadline>WHY {pack.category.toUpperCase()}S BREAK <br /><span className="text-white/30">(EVEN WITH SOPs)</span></SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6 p-8 rounded-[2rem] bg-red-500/[0.02] border border-red-500/10">
                        <h3 className="text-red-500/60 font-black uppercase tracking-widest text-xs italic">THE PROBLEM</h3>
                        <div className="space-y-4">
                            {[
                                "Tasks depend on human memory",
                                "SOPs sit in unused folders",
                                "Managers waste time following up",
                                "Zero visibility across branches",
                                "Standards collapse when staff change"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm text-zinc-400 italic">
                                    <XCircle className="w-4 h-4 text-red-500/40" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/10">
                        <h3 className="text-white/40 font-black uppercase tracking-widest text-xs italic">THE CONSEQUENCE</h3>
                        <div className="space-y-4">
                            {[
                                "Critical safety & hygiene risks",
                                "Unmonitored profit leakage",
                                "Negative reviews & brand damage",
                                "Catastrophic audit failures"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-sm text-zinc-400 italic">
                                    <ArrowRight className="w-4 h-4 text-red-500/40" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-8 space-y-4">
                    <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter">THE REAL PROBLEM IS NOT LACK OF SOPs.</p>
                    <p className="text-4xl font-black text-red-500 uppercase italic tracking-tighter">EXECUTION IS NOT VISIBLE.</p>
                </div>
            </div>
        </Section>

        {/* 3. WHAT THIS IS (SOLUTION) */}
        <Section className="bg-alternate-background overflow-hidden relative">
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Infrastructure</Badge>
                    <SectionHeadline>THIS IS YOUR DAILY OPERATING SYSTEM</SectionHeadline>
                    <p className="text-secondary-text text-xl italic font-medium">Not a checklist. Not a report.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-left">
                    {[
                        { t: "TASKS DEFINED", d: "120+ technical control points are already built." },
                        { t: "ROLES MAPPED", d: "Responsibility is assigned by role, not person." },
                        { t: "LIVE LOGGING", d: "Staff marks work as they do it. Reality is captured." },
                        { t: "AUTO DASHBOARD", d: "Executive views update instantly without asking." }
                    ].map(item => (
                        <div key={item.t} className="p-6 rounded-2xl border border-white/5 bg-black/40 space-y-2">
                            <h4 className="font-black text-primary uppercase italic text-sm tracking-widest">{item.t}</h4>
                            <p className="text-sm text-secondary-text italic font-medium">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-4">
                    <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">YOU DON'T ASK WHAT HAPPENED.</p>
                    <p className="text-5xl font-black text-primary uppercase italic tracking-tighter">YOU SEE IT.</p>
                </div>

                <CtaBlock />
            </div>
        </Section>

        {/* 4. HOW IT RUNS DAILY (CORE UX) */}
        <Section className="bg-black">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Daily Flow</Badge>
                    <SectionHeadline>HOW YOUR BUSINESS RUNS DAILY</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-5 gap-8">
                    {[
                        { t: "SETUP (ONE TIME)", d: "Add branches and assign team to roles.", i: Settings2 },
                        { t: "TEAM OPENS TASKS", d: "They see what to do, how, and why.", i: Smartphone },
                        { t: "THEY EXECUTE", d: "Names entered → task turns GREEN instantly.", i: Target },
                        { t: "AUTO SCHEDULING", d: "Daily, Weekly, Monthly cycles trigger alone.", i: Clock },
                        { t: "LIVE DASHBOARD", d: "You know what's done, missed, or at risk.", i: Activity }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left gap-4 group">
                            <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary font-black font-mono group-hover:bg-primary group-hover:text-black transition-all">
                                {i + 1}
                            </div>
                            <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tight leading-tight">{step.t}</h4>
                            <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{step.d}</p>
                        </div>
                    ))}
                </div>

                <div className="relative group p-4 rounded-[2rem] border border-white/5 bg-white/[0.02]">
                    <img 
                        src="https://i.postimg.cc/YSQcfhnQ/Screenshot-2026-04-02-165428.png" 
                        alt="Sovereign Dashboard" 
                        className="rounded-[1.5rem] grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-10 right-10 bg-primary text-black px-6 py-3 rounded-full font-black uppercase italic text-xs animate-pulse shadow-2xl">
                        Type name → task turns green
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-2xl font-black text-primary-text uppercase italic tracking-tighter">NO CALLS. NO FOLLOW-UPS.</p>
                    <CtaBlock />
                </div>
            </div>
        </Section>

        {/* 5. WHY STAFF FOLLOW IT (DIFFERENTIATOR) */}
        <Section className="bg-alternate-background">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Staff Adoption</Badge>
                    <SectionHeadline>NO CONFUSION. NO MISINTERPRETATION.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { t: "WHAT TO DO", d: "Clear, unambiguous instruction. No guessing.", i: ClipboardCheck },
                        { t: "HOW TO DO IT", d: "Trainer Notes in simple language. No training curve.", i: GraduationCap },
                        { t: "WHY IT MATTERS", d: "Consequence of failure defined. Drives seriousness.", i: AlertTriangle }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4 hover:border-primary/20 transition-all">
                            <h4 className="font-black text-primary-text uppercase italic text-lg tracking-tighter">{item.t}</h4>
                            <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
                    {[
                        "Same execution across outlets",
                        "Faster onboarding",
                        "No dependency on experts",
                        "No shortcuts during rush"
                    ].map(item => (
                        <div key={item} className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest text-center justify-center border-l border-white/10 px-4">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* 6. REAL TASK EXAMPLE */}
        <Section className="bg-black">
            <div className="max-w-2xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">System Logic</Badge>
                    <SectionHeadline>ONE TASK. FULL CLARITY.</SectionHeadline>
                </div>

                <div className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShieldCheck className="w-32 h-32 text-primary" />
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">KITCHEN MODULE</span>
                        <h4 className="text-3xl font-black text-primary-text uppercase italic tracking-tighter leading-tight">COLD-CHAIN INTEGRITY</h4>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">WHAT TO DO:</p>
                            <p className="text-lg text-primary-text font-medium italic">Fridge must be 1°C to 4°C</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">HOW TO DO IT:</p>
                            <p className="text-lg text-primary-text font-medium italic">Check display and log reading</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black text-red-500/60 uppercase tracking-widest">WHY IT MATTERS:</p>
                            <p className="text-lg text-red-500 font-bold italic">Prevents spoilage and safety violations</p>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-lg text-secondary-text italic font-medium">THIS LEVEL OF CLARITY EXISTS FOR 120+ TASKS.</p>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">ACROSS YOUR ENTIRE OPERATION.</p>
                </div>
            </div>
        </Section>

        {/* 7. COMPLETE COVERAGE */}
        <Section className="bg-alternate-background">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Payload Density</Badge>
                    <SectionHeadline>12 MODULES. COMPLETE CONTROL.</SectionHeadline>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pack.checklists.map((module, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-white/5 bg-black/40 flex items-center gap-4 group hover:border-primary/30 transition-all">
                            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <IconComponent name={module.icon} className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-sm font-black text-primary-text uppercase italic tracking-tight">{module.title}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">NOTHING IS LEFT TO MEMORY.</p>
                    <CtaBlock />
                </div>
            </div>
        </Section>

        {/* 8. TRANSFORMATION */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">The Shift</Badge>
                    <SectionHeadline>FROM CHAOS → CONTROL</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-12 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-red-500/[0.02] border border-red-500/10">
                        <h3 className="text-red-500/60 font-black uppercase tracking-widest text-xs italic">BEFORE</h3>
                        <div className="space-y-6">
                            {[
                                "You follow up constantly",
                                "You guess what's happening",
                                "Staff works differently every shift",
                                "Problems are discovered late"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-4 text-sm text-zinc-400 italic">
                                    <XCircle className="w-5 h-5 text-red-500/40 shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 p-10 rounded-[2.5rem] bg-primary/[0.02] border border-primary/10">
                        <h3 className="text-primary font-black uppercase tracking-widest text-xs italic">AFTER</h3>
                        <div className="space-y-6">
                            {[
                                "You see everything live",
                                "You act early on risk signals",
                                "Every branch runs the same standard",
                                "Discipline becomes automatic"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-4 text-sm text-primary-text font-bold uppercase italic tracking-tight">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        {/* 9. NOT SOFTWARE */}
        <Section className="bg-alternate-background">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Category Differentiator</Badge>
                    <SectionHeadline>NOT SOFTWARE. NOT SOPs.</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-6">
                        <h3 className="font-black uppercase tracking-widest text-xs text-white/30 italic">TYPICAL TOOLS</h3>
                        <div className="space-y-4">
                            {[
                                "Complex login required",
                                "Monthly subscription fees",
                                "Steep team training curve",
                                "Data locked in their platform"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-xs text-zinc-500 italic">
                                    <X className="w-4 h-4" /> {item}
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20 p-8 space-y-6">
                        <h3 className="font-black uppercase tracking-widest text-xs text-primary italic">MOREMEETS™</h3>
                        <div className="space-y-4">
                            {[
                                "Zero logins. No apps.",
                                "One-time payment forever",
                                "Zero training required",
                                "You own 100% of your data"
                            ].map(item => (
                                <div key={item} className="flex items-center gap-3 text-xs text-primary-text font-bold uppercase italic tracking-tight">
                                    <Check className="w-4 h-4 text-primary" /> {item}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="text-center space-y-4">
                    <p className="text-[10px] text-white/30 font-black uppercase tracking-[0.4em]">EXCEL. RE-ENGINEERED FOR OPERATIONS.</p>
                    <p className="text-lg text-secondary-text italic font-medium">Software tracks work. <strong className="text-primary-text">This ensures work happens.</strong></p>
                </div>
            </div>
        </Section>

        {/* 10. WHAT YOU GET */}
        <Section className="bg-black">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technical Payload</Badge>
                    <SectionHeadline>FULL OPERATIONAL PAYLOAD</SectionHeadline>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Pre-built SOP execution system",
                        "Daily / Weekly / Monthly engine",
                        "Trainer Notes for every task",
                        "Consequences of failure built-in",
                        "Multi-branch live dashboard",
                        "Fully editableStandalone system"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                            <p className="text-sm font-bold text-primary-text uppercase italic tracking-tight leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center space-y-4">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter leading-none">WORKS ON EXCEL / GOOGLE SHEETS.</p>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-widest">NO APPS • NO LEARNING CURVE</p>
                    <CtaBlock />
                </div>
            </div>
        </Section>

      </main>
    </div>
  );
}

const Settings2 = (props: any) => <IconComponent name="settings-2" {...props} />;
const Smartphone = (props: any) => <IconComponent name="smartphone" {...props} />;
const Target = (props: any) => <IconComponent name="target" {...props} />;
const Clock = (props: any) => <IconComponent name="clock" {...props} />;
const Activity = (props: any) => <IconComponent name="activity" {...props} />;
const ClipboardCheck = (props: any) => <IconComponent name="clipboard-check" {...props} />;
const GraduationCap = (props: any) => <IconComponent name="graduation-cap" {...props} />;
const AlertTriangle = (props: any) => <IconComponent name="alert-triangle" {...props} />;
