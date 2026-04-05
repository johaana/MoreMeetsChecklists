
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    Timer, 
    ShieldCheck,
    ShieldAlert,
    History,
    GraduationCap,
    Globe,
    FileSpreadsheet,
    Database,
    Eye,
    PackageCheck,
    AlertTriangle,
    LayoutGrid,
    Lock,
    Users,
    ClipboardCheck,
    Target,
    MousePointer2,
    BarChart3
} from "lucide-react";
import React from 'react';
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
    return (
        <section className="relative w-full flex flex-col items-center h-[calc(100dvh-64px)] md:h-[calc(100vh-64px)] md:min-h-[750px] overflow-hidden bg-background">
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
                            YOUR TEAM UPDATES TASKS. <br />
                            <span className="text-primary">YOU SEE EVERYTHING LIVE.</span>
                        </p>
                        
                        <p className="text-sm md:text-lg font-bold text-white/40 uppercase tracking-widest italic border-l-4 border-white/10 pl-6">
                            ACROSS YOUR ENTIRE OPERATION.
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
                                        DEPLOY YOUR SYSTEM: ₹999
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
                                    <FileSpreadsheet className="w-3 h-3" /> WORKS ON EXCEL / GOOGLE SHEETS
                                </p>
                                <p className="text-[9px] font-black text-white/20 uppercase tracking-widest flex items-center gap-2">
                                    <Lock className="w-3 h-3" /> NO NEW APPS. NO SUBSCRIPTIONS.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const RealLifeSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Real-World Deployment</Badge>
                <SectionHeadline>HOW IT WORKS IN REAL LIFE</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
                {[
                    { s: "01", t: "TEAM OPENS SHEET", d: "Your staff opens the shared link on their mobile or desktop.", i: MousePointer2 },
                    { s: "02", t: "THEY MARK AS DONE", d: "As tasks are finished, they type their name. Status turns GREEN.", i: Check },
                    { s: "03", t: "LOGBOOK UPDATES", d: "The operational ledger syncs instantly across all branches.", i: FileSpreadsheet },
                    { s: "04", t: "YOU SEE REALITY", d: "Open the dashboard to see what's done, missed, or weak.", i: BarChart3 }
                ].map((step) => (
                    <div key={step.s} className="space-y-4 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 relative group hover:border-primary/20 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                            <step.i className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-widest">{step.t}</h4>
                        <p className="text-xs text-secondary-text font-medium italic leading-relaxed">{step.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const WhatIsThisSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Operational Engine</Badge>
                <SectionHeadline>THIS IS NOT AN APP.</SectionHeadline>
                <SectionHeadline className="text-primary -mt-4">THIS IS HOW YOUR BUSINESS RUNS.</SectionHeadline>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 text-left">
                <div className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
                    <p className="text-xl md:text-2xl font-black text-primary-text uppercase italic leading-tight">
                        No new software. <br /> No learning curve.
                    </p>
                    <p className="text-secondary-text italic font-medium">Built on the Excel/Sheets framework your team already knows. Deployment is instant because the interface is universal.</p>
                </div>
                <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10"><Eye className="w-20 h-20 text-primary" /></div>
                    <p className="text-xl md:text-2xl font-black text-primary uppercase italic leading-tight">
                        See your empire <br /> from anywhere.
                    </p>
                    <ul className="space-y-2 text-sm text-primary-text font-bold uppercase italic">
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Live Unit Progress</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Weak Branch Alerts</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Critical Risk Detection</li>
                        <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Zero People Dependency</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const LiveControlSection = () => (
    <Section className="bg-black">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Real-Time Intelligence</Badge>
                    <SectionHeadline>USED DAILY BY <br /> OPERATIONS TEAMS</SectionHeadline>
                    <p className="text-xl text-secondary-text font-medium italic border-l-2 border-primary/20 pl-8 leading-relaxed">
                        Not a template. Not a report. <br /> A working system.
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
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> 100% AUDIT-READY EVIDENCE.</p>
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> ZERO SAAS LOCK-IN.</p>
                    <p className="text-xs font-black text-white/30 uppercase tracking-widest flex items-center gap-2"><Check className="w-4 h-4 text-primary" /> ONE-TIME ASSET PURCHASE.</p>
                </div>
            </div>
            
            <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
                <Card className="relative rounded-[3rem] border border-white/10 bg-black p-2 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        <span className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-4 italic">Sovereign_OS_v11.9.xlsx</span>
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
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Intentional Compliance</Badge>
                <SectionHeadline>WHY YOUR TEAM WILL <br /> ACTUALLY FOLLOW IT</SectionHeadline>
                <p className="text-lg text-secondary-text italic font-medium max-w-2xl mx-auto">We replace "mechanical ticking" with intentional execution. Every task includes:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative z-10 text-center">
                {[
                    { t: "WHAT TO DO", d: "Clear instruction mapped to audit standards.", i: Target },
                    { t: "HOW TO DO IT", d: "Trainer Notes for on-the-job coaching. No seniors needed.", i: GraduationCap },
                    { t: "WHY IT MATTERS", d: "Consequences of failure to ensure focus.", i: AlertTriangle }
                ].map(item => (
                    <div key={item.t} className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto"><item.i className="w-6 h-6 text-primary" /></div>
                        <h4 className="font-black uppercase text-primary-text italic text-lg">{item.t}</h4>
                        <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                    </div>
                ))}
            </div>

            <div className="pt-12 border-t border-white/5 text-center relative z-10 flex flex-col md:flex-row justify-center gap-8 md:gap-16">
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO INTERPRETATION.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO EXCUSES.</p>
                <p className="text-xs font-black text-white/30 uppercase tracking-widest italic">NO HERO DEPENDENCY.</p>
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
        <RealLifeSection />
        <WhatIsThisSection />
        <LiveControlSection />
        <SystemizedExecutionSection />
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
                            DEPLOY YOUR OPERATING SYSTEM: ₹999 <ArrowRight className="ml-4 h-8 w-8" />
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
