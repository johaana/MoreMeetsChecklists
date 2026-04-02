
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    Timer, 
    ShieldCheck,
    History,
    GraduationCap,
    Globe,
    FileSpreadsheet,
    Database,
    Eye,
    PackageCheck,
    AlertTriangle,
    LayoutGrid,
    Maximize2,
    Lock,
    Users,
    ClipboardCheck,
    Target
} from "lucide-react";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Section = ({ className, id, children, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-32", className)} {...props}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-black font-headline sm:text-5xl md:text-6xl tracking-tighter !leading-[1.05] text-primary-text uppercase italic", className)}>
        {children}
    </h2>
);

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative w-full flex flex-col items-center h-[calc(100dvh-64px)] md:h-[calc(100vh-64px)] md:min-h-[700px] overflow-hidden bg-background">
            {/* Visual Brand Layer */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover contrast-[1.1] opacity-60"
                />
                <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.98)_25%,rgba(10,15,25,0.85)_50%,rgba(10,15,25,0.2)_85%,rgba(10,15,25,0.05)_100%)]" />
            </div>

            {/* Content Layer */}
            <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-center">
                <div className="max-w-4xl space-y-6 md:space-y-8">
                    <div className="space-y-2">
                        <p className="text-primary font-black uppercase tracking-[0.4em] text-xs md:text-sm italic">MoreMeets™ Sovereign Operating System</p>
                        <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black font-headline tracking-tighter !leading-[0.9] text-primary-text drop-shadow-2xl uppercase italic">
                            STOP CHASING. <br />
                            <span className="text-primary">START SEEING.</span>
                        </h1>
                    </div>
                    
                    <div className="space-y-4">
                        <p className="text-xl md:text-3xl font-black text-primary-text uppercase italic tracking-tighter leading-tight max-w-2xl">
                            KNOW WHAT’S DONE. WHAT’S MISSED. WHAT’S DELAYED. <br />
                            <span className="text-white/40">ACROSS YOUR ENTIRE OPERATION.</span>
                        </p>
                        
                        <p className="text-sm md:text-xl font-bold text-primary uppercase tracking-widest italic border-l-4 border-primary pl-6">
                            THIS RUNS YOUR DAILY OPERATIONS.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-4">
                            <p className="text-secondary-text text-sm md:text-lg font-medium leading-relaxed italic">
                                WITHOUT FOLLOW-UPS. WITHOUT REPORTING CHAOS. WITHOUT SOFTWARE DEPENDENCE.
                            </p>
                            <div className="pt-2">
                                <Button size="lg" asChild className="group h-16 px-10 rounded-xl shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] transition-all active:scale-95 bg-primary text-black hover:brightness-95 font-black uppercase text-base tracking-widest border-none">
                                    <Link href="/library">
                                        DEPLOY YOUR SYSTEM: $9
                                        <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <p className="text-[10px] font-black uppercase text-white/30 mt-4 tracking-[0.2em] italic">
                                    LIVE IN MINUTES. OWN IT FOREVER.
                                </p>
                            </div>
                        </div>

                        <div className="hidden md:flex flex-col gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                            <p className="text-[10px] font-black text-primary uppercase tracking-widest">BUILT FOR REAL OPERATIONS:</p>
                            <p className="text-xs font-bold text-primary-text leading-relaxed tracking-tight uppercase italic">
                                RESTAURANTS. HOTELS. HOSPITALS. <br />
                                FACILITIES. CINEMAS. FRANCHISE NETWORKS.
                            </p>
                            <div className="pt-2 border-t border-white/5 space-y-2">
                                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest flex items-center gap-2">
                                    <FileSpreadsheet className="w-3 h-3" /> RUNS ON EXCEL / GOOGLE SHEETS
                                </p>
                                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> OWN YOUR SYSTEM. NO LOGINS. NO SUBSCRIPTIONS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const WhatIsThisSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Control Layer</Badge>
                <SectionHeadline>THIS IS NOT SOFTWARE.</SectionHeadline>
                <SectionHeadline className="text-primary -mt-4">THIS IS YOUR CONTROL LAYER.</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic leading-tight">
                        Your team works <br /> on the floor.
                    </p>
                    <p className="text-secondary-text italic font-medium">The Sovereign Engine converts daily floor activity into structured metadata. You see reality as it happens.</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Eye className="w-20 h-20 text-primary" /></div>
                    <p className="text-xl md:text-2xl font-black text-primary uppercase italic leading-tight">
                        This system shows <br /> you reality.
                    </p>
                    <ul className="space-y-2 text-sm text-primary-text font-bold uppercase italic">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Live Visibility</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Without Calls</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Without Reports</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Without People dependency</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const DeploymentSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Rapid Integration</Badge>
                <SectionHeadline>DEPLOY IN MINUTES</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4">
                {[
                    { s: "01", t: "DOWNLOAD", d: "Instant access to the master build." },
                    { s: "02", t: "OPEN", d: "Use Google Sheets or Excel. No setup." },
                    { s: "03", t: "ASSIGN", d: "Add your branches and team. Define roles." },
                    { s: "04", t: "START", d: "Operations begin. Tasks are already built." },
                    { s: "05", t: "SEE", d: "Everything updates live. Command established." }
                ].map((step, i) => (
                    <div key={step.s} className="p-8 rounded-3xl bg-black/40 border border-white/5 flex flex-col gap-4 group hover:border-primary/20 transition-all">
                        <span className="text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">{step.s}</span>
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-widest">{step.t}</h4>
                        <p className="text-xs text-secondary-text font-medium italic leading-relaxed">{step.d}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
                <p className="text-sm font-black text-white/20 uppercase tracking-[0.3em] italic">NO TRAINING REQUIRED.</p>
                <div className="w-2 h-2 rounded-full bg-white/10 hidden md:block" />
                <p className="text-sm font-black text-white/20 uppercase tracking-[0.3em] italic">NO IMPLEMENTATION DELAY.</p>
            </div>
        </div>
    </Section>
);

const LiveControlSection = () => (
    <Section className="bg-black">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Real-Time Telemetry</Badge>
                    <SectionHeadline>SEE YOUR BUSINESS LIVE</SectionHeadline>
                    <p className="text-xl text-secondary-text font-medium italic border-l-2 border-primary/20 pl-8 leading-relaxed">
                        The dashboard is the pulse of your empire. You know the score before the shift ends.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { t: "Tasks Logged", i: ClipboardCheck },
                        { t: "Progress Tracked", i: Timer },
                        { t: "Branches Compared", i: LayoutGrid },
                        { t: "Risks Visible", i: ShieldAlert }
                    ].map(item => (
                        <div key={item.t} className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <item.i className="w-6 h-6 text-primary" />
                            <span className="font-black text-primary-text uppercase italic text-xs tracking-tighter">{item.t}</span>
                        </div>
                    ))}
                </div>
                <div className="space-y-2 pt-4">
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> NO REPORTS.</p>
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> NO CALLS.</p>
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> NO FOLLOW-UPS.</p>
                </div>
            </div>
            
            <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
                <Card className="relative rounded-[3rem] border border-white/10 bg-black p-2 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        <span className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-4 italic">Sovereign_OS_v9.7.xlsx</span>
                    </div>
                    <img 
                        src="https://i.postimg.cc/YSQcfhnQ/Screenshot-2026-04-02-165428.png" 
                        alt="MoreMeets Sovereign Engine Interface"
                        className="rounded-[2.5rem] mt-10 border border-white/5 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                </Card>
            </div>
        </div>
    </Section>
);

const SystemizedExecutionSection = () => (
    <Section className="bg-alternate-background border-y border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/[0.02] space-y-16 relative">
            <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12"><Database className="w-64 h-64 text-primary" /></div>
            
            <div className="text-center space-y-6 relative z-10">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">The Structural Moat</Badge>
                <SectionHeadline>EVERY TASK HAS CONTEXT.</SectionHeadline>
                <SectionHeadline className="text-primary -mt-6">NOT JUST CHECKBOXES.</SectionHeadline>
                <p className="text-lg text-secondary-text italic font-medium max-w-2xl mx-auto">Systems are built on pedagogy, not just reminders. Each technical mission includes:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10 text-center">
                {[
                    { t: "WHAT TO DO", d: "Clear technical requirements mapped to global standards.", i: Target },
                    { t: "HOW TO DO IT", d: "Trainer Notes for on-the-job coaching. No shadowing needed.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Consequences of failure to ensure intentional compliance.", i: AlertTriangle }
                ].map(item => (
                    <div key={item.t} className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto"><item.i className="w-6 h-6 text-primary" /></div>
                        <h4 className="font-black uppercase text-primary-text italic text-lg">{item.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-white/5 text-center relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO CONFUSION.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO INTERPRETATION.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO DEPENDENCY ON HEROES.</p>
            </div>
        </div>
    </Section>
);

const EngineSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto space-y-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Universal Architecture</Badge>
                    <SectionHeadline>ONE ENGINE. <br /> <span className="text-primary">MULTIPLE INDUSTRIES.</span></SectionHeadline>
                    <p className="text-lg text-secondary-text italic font-medium leading-relaxed">
                        The same Sovereign control system runs everything. You simply choose the technical payload for your industry.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "Restaurant", "Hotel", "Hospital", "Facility", "Cinema", "Franchise"
                    ].map(industry => (
                        <div key={industry} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-center group hover:border-primary/30 transition-all">
                            <p className="text-[10px] font-black text-primary-text uppercase tracking-widest group-hover:text-primary">{industry}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-10 md:p-16 rounded-[3rem] bg-primary/5 border border-primary/20 space-y-8">
                <h3 className="text-xl font-black text-primary uppercase italic">EACH PACK COMES PRE-LOADED WITH:</h3>
                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { t: "Daily Tasks", d: "Zero-fail hygiene & opening missions." },
                        { t: "Weekly Systems", d: "Deep-cleaning & mechanical audits." },
                        { t: "Monthly Protocols", d: "Licensing & statutory filings." },
                        { t: "Audit Structures", d: "Evidence logs for external inspectors." }
                    ].map(item => (
                        <div key={item.t} className="space-y-2">
                            <p className="font-black text-primary-text uppercase italic text-sm">{item.t}</p>
                            <p className="text-xs text-secondary-text font-medium italic leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

const FlexibleOpsSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
                <div className="relative p-10 rounded-[3rem] bg-black border border-white/10 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5"><Users className="w-40 h-40 text-primary" /></div>
                    <div className="space-y-8 relative z-10">
                        <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                            <p className="text-xs font-black text-primary uppercase tracking-widest mb-4">RE-MAPPING REALITY:</p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-[10px] font-black text-white/40 uppercase tracking-widest">
                                    <span>Staff Member: Imran</span>
                                    <span className="text-primary">Multi-Role Active</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full w-full bg-primary animate-shimmer" />
                                </div>
                                <p className="text-xs font-bold text-primary-text italic">Owner of: General Manager + Finance Head + EHS Officer</p>
                            </div>
                        </div>
                        <p className="text-sm text-secondary-text font-medium italic leading-relaxed">
                            Unlike rigid software, MoreMeets reflects real-world teams. One person can handle multiple roles. One role can be reassigned instantly.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="space-y-10 order-1 lg:order-2">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Personnel Agility</Badge>
                    <SectionHeadline>BUILT FOR REAL TEAMS</SectionHeadline>
                    <p className="text-xl text-secondary-text font-medium italic leading-relaxed border-l-2 border-primary/20 pl-8">
                        No rigidity. No dependency on specific people. The mission belongs to the role, not the individual.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-primary-text font-bold italic">
                        <div className="w-2 h-2 rounded-full bg-primary" /> Re-map responsibilities in 2 seconds.
                    </div>
                    <div className="flex items-center gap-4 text-primary-text font-bold italic">
                        <div className="w-2 h-2 rounded-full bg-primary" /> Handle personnel gaps without system collapse.
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const WhyThisWorksSection = () => (
    <Section className="bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">The Cognitive Shield</Badge>
                <SectionHeadline>SYSTEMS DON'T FORGET.</SectionHeadline>
                <SectionHeadline className="text-primary -mt-6">PEOPLE DO.</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto text-red-500 font-black">X</div>
                    <h4 className="font-black text-white/40 uppercase italic text-sm">REMOVES:</h4>
                    <ul className="text-xs text-secondary-text italic space-y-2">
                        <li>Memory failure</li>
                        <li>Follow-ups</li>
                        <li>Person dependency</li>
                    </ul>
                </div>
                <div className="md:col-span-2 flex flex-col justify-center bg-primary/5 border border-primary/20 p-10 rounded-[2.5rem] space-y-4">
                    <h4 className="font-black text-primary uppercase italic text-sm">REPLACES THEM WITH:</h4>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-1">
                            <p className="text-xl font-black text-primary-text italic">Structure</p>
                            <p className="text-[10px] text-white/20 uppercase font-black">Protocol-based</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-black text-primary-text italic">Visibility</p>
                            <p className="text-[10px] text-white/20 uppercase font-black">Live Data</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xl font-black text-primary-text italic">Audit-Ready</p>
                            <p className="text-[10px] text-white/20 uppercase font-black">Legal Defense</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const NoSaaSSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technological Freedom</Badge>
                    <SectionHeadline>NO LOGINS. <br /> NO SUBSCRIPTIONS. <br /> NO LOCK-IN.</SectionHeadline>
                </div>
                <p className="text-lg text-secondary-text font-medium italic border-l-2 border-primary/20 pl-8">
                    You own the system. Forever. It runs on the software you already have and trust.
                </p>
                <ul className="space-y-4">
                    {[
                        { t: "Excel / Google Sheets", i: FileSpreadsheet },
                        { t: "100% Private Data", i: Lock },
                        { t: "Offline Capable", i: Globe },
                        { t: "One-time Payment", i: Infinity }
                    ].map(item => (
                        <li key={item.t} className="flex items-center gap-4 text-primary-text font-black uppercase italic text-sm tracking-tight">
                            <item.i className="w-5 h-5 text-primary" /> {item.t}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-12 md:p-20 rounded-[3rem] bg-black border border-white/5 flex flex-col items-center justify-center text-center space-y-6 shadow-2xl">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center"><Lock className="w-10 h-10 text-primary" /></div>
                <p className="text-2xl font-black text-primary-text uppercase italic leading-tight">Your data belongs <br /> to you.</p>
                <p className="text-xs text-white/20 uppercase font-black tracking-widest">NO CLOUD DEPENDENCY • NO MONTHLY BILLS</p>
            </div>
        </div>
    </Section>
);

const RiskSection = () => (
    <Section className="bg-black">
        <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[4rem] bg-red-500/5 border border-red-500/20 space-y-12 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-10 opacity-10 -rotate-12"><AlertTriangle className="w-64 h-64 text-red-500" /></div>
            <div className="space-y-6 relative z-10">
                <Badge variant="destructive" className="uppercase font-black tracking-[0.3em] text-[10px] px-6 py-1">Critical Exposure Warning</Badge>
                <SectionHeadline>ONE MISSED STEP CAN COST EVERYTHING</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
                {[
                    { t: "Missed temp log", d: "Stock loss & poisoning risk" },
                    { t: "Missed safety check", d: "Facility shutdown" },
                    { t: "Missed protocol", d: "Legal exposure & lawsuits" }
                ].map(item => (
                    <div key={item.t} className="space-y-2">
                        <p className="text-lg font-black text-primary-text italic uppercase tracking-tighter leading-tight">{item.t}</p>
                        <ArrowRight className="w-4 h-4 text-red-500 mx-auto" />
                        <p className="text-xs text-white/40 font-black uppercase tracking-widest">{item.d}</p>
                    </div>
                ))}
            </div>

            <p className="text-2xl md:text-3xl font-black text-red-500 uppercase italic tracking-tighter relative z-10 pt-8 border-t border-white/5 w-fit mx-auto">
                THIS SYSTEM PREVENTS THAT.
            </p>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <WhatIsThisSection />
        <DeploymentSection />
        <LiveControlSection />
        <SystemizedExecutionSection />
        <EngineSection />
        <FlexibleOpsSection />
        <WhyThisWorksSection />
        <NoSaaSSection />
        <RiskSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        {/* FINAL CTA */}
        <Section id="final-cta" className="bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="space-y-4">
                    <SectionHeadline>STOP CHASING.</SectionHeadline>
                    <SectionHeadline className="text-primary -mt-6">START SEEING.</SectionHeadline>
                </div>
                
                <div className="flex flex-col items-center gap-10">
                    <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all border-none">
                        <Link href="/library" className="flex items-center">
                            DEPLOY YOUR OPERATING SYSTEM: $9 <ArrowRight className="ml-4 h-8 w-8" />
                        </Link>
                    </Button>
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic tracking-tighter">
                        OWN IT. RUN IT. NO DEPENDENCE.
                    </p>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
