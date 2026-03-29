
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    Timer, 
    Lock, 
    Infinity, 
    Users, 
    History,
    Globe,
    ShieldCheck,
    LayoutGrid,
    AlertTriangle,
    Search,
    Stethoscope,
    Utensils,
    HardHat,
    ChevronRight,
    ClipboardCheck,
    GraduationCap,
    FileSpreadsheet,
    Database,
    Eye,
    PackageCheck,
    Crown
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
    <section id={id} className={cn("w-full py-16 md:py-24", className)} {...props}>
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

const HeroSection = () => (
    <section className="relative w-full flex flex-col items-center h-[calc(100dvh-64px)] md:h-[calc(100vh-64px)] md:min-h-[600px] overflow-hidden bg-background">
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
            {/* Hardened Gradient Mask for One-Glance Contrast */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.98)_25%,rgba(10,15,25,0.85)_50%,rgba(10,15,25,0.2)_85%,rgba(10,15,25,0.05)_100%)]" />
        </div>

        {/* Content Layer - v13.0 Ultimate Fold-Safe Compression */}
        <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-center">
            <div className="max-w-3xl space-y-3 md:space-y-4">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-white/50 border-white/10 py-0.5 px-2.5 uppercase tracking-[0.15em] font-black text-[8px] bg-white/5 rounded-none">
                        PRE-BUILT SOPs • READY IN 10 MINUTES • ZERO REPORTING
                    </Badge>
                    <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-black font-headline tracking-tighter !leading-[0.9] text-primary-text drop-shadow-2xl uppercase italic">
                        STOP MANAGING. <br />
                        <span className="text-primary">START SEEING.</span>
                    </h1>
                </div>
                
                <div className="space-y-2.5">
                    <p className="text-sm md:text-xl font-black text-primary uppercase tracking-tight italic leading-tight">
                        Your business runs itself — every single day.
                    </p>
                    
                    {/* Insight Block - Compressed Vertical Footprint */}
                    <div className="space-y-1.5 border-l-2 border-primary/30 pl-5 py-0.5">
                        <p className="text-xs md:text-lg font-black text-primary-text leading-tight uppercase tracking-tight">
                            SOPs, daily tasks, and reporting — in one system.
                        </p>
                        <p className="text-[10px] md:text-base text-secondary-text font-bold italic opacity-80 leading-snug">
                            Know exactly what’s happening — across every shift.
                        </p>
                    </div>
                </div>

                <div className="pt-1.5 md:pt-2 space-y-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                        <Button size="lg" asChild className="group h-10 md:h-12 px-8 md:px-10 rounded-xl shadow-lg transition-all active:scale-95 bg-primary text-black hover:brightness-95 font-black uppercase text-[10px] md:text-xs tracking-[0.15em] w-full sm:w-auto border-none">
                            <Link href="/library" className="flex items-center justify-center">
                                Get Your System <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="h-10 md:h-12 px-8 md:px-10 rounded-xl border-white/20 text-white font-black uppercase text-[10px] md:text-xs tracking-[0.15em] hover:bg-white/10 w-full sm:w-auto">
                            <Link href="#how-it-works">See Action</Link>
                        </Button>
                    </div>

                    <div className="space-y-3">
                        {/* Compact Trust Capsules */}
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                            {["No SaaS", "Own forever", "Fully editable", "Start instantly"].map(text => (
                                <div key={text} className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5">
                                    <Check className="w-2.5 h-2.5 text-primary" />
                                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/70">{text}</span>
                                </div>
                            ))}
                        </div>
                        
                        <div className="space-y-1">
                            <p className="text-[9px] md:text-xs font-bold text-white/60 uppercase tracking-wide italic flex items-center gap-2 drop-shadow-md">
                                <Zap className="w-3 h-3 text-accent" />
                                Runs on Excel / Google Sheets — so adoption is instant.
                            </p>
                            {/* Final Decision Anchor - Fold Safety v13.0 */}
                            <p className="text-[10px] md:text-sm font-black text-primary uppercase italic tracking-tighter drop-shadow-[0_0_10px_rgba(46,184,107,0.3)]">
                                Stop asking for updates. Start seeing everything.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ClaritySection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Strategic Command</Badge>
            <SectionHeadline>What happens when you use MoreMeets?</SectionHeadline>
            <p className="text-secondary-text text-lg italic font-medium">Clarity replaces confusion. Action replaces asking.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
                { t: "Team Knows Exactly What to Do", d: "Roles are assigned. Steps are clear. Memory is removed from the equation.", i: ClipboardCheck },
                { t: "Tasks Completed in Seconds", d: "Reporting is built into the workflow. Two minutes at end of shift, and you're done.", i: Timer },
                { t: "Dashboards Update Automatically", d: "No manual collation. No data entry. Open one file and see your entire empire.", i: Zap }
            ].map(item => (
                <div key={item.t} className="p-10 rounded-[2.5rem] bg-black/40 border border-white/5 space-y-6 shadow-2xl group hover:border-primary/20 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.i className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-black uppercase italic text-primary-text">{item.t}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                </div>
            ))}
        </div>
    </Section>
);

const SOPAdvantageSection = () => (
    <Section className="bg-black">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
            <div className="space-y-10">
                <div className="space-y-6">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Ready-Made Infrastructure</Badge>
                    <SectionHeadline className="text-left">No need to design SOPs. <br /> <span className="text-primary">We've already done it.</span></SectionHeadline>
                    <p className="text-xl text-secondary-text font-medium italic border-l-2 border-primary/20 pl-8 leading-relaxed">
                        Most businesses struggle because SOPs are incomplete, buried in folders, or exist only in someone's head.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                        { t: "World-class SOPs", d: "Industry-grade protocols built-in.", i: Globe },
                        { t: "Audit-Ready", d: "Mapped to ISO, HACCP, OSHA.", i: ShieldCheck },
                        { t: "Multi-Cycle Logic", d: "Daily, weekly, monthly systems.", i: Timer },
                        { t: "100% Editable", d: "Adapt to your brand instantly.", i: LayoutGrid }
                    ].map(item => (
                        <div key={item.t} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                <item.i className="w-4 h-4 text-primary" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-black text-primary-text uppercase italic text-xs tracking-wider">{item.t}</h4>
                                <p className="text-[11px] text-white/40 italic">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000" />
                <Card className="relative rounded-[3rem] border border-white/10 bg-black p-2 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-6 gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        <span className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-4 italic">Sovereign_OS_v4.4.xlsx</span>
                    </div>
                    <img 
                        src="https://i.postimg.cc/mr5tRpPV/Screenshot-2026-03-18-124944.png" 
                        alt="MoreMeets Engine Interface"
                        className="rounded-[2.5rem] mt-10 border border-white/5 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                </Card>
            </div>
        </div>
    </Section>
);

const SuperpowersSection = () => (
    <Section id="superpowers" className="bg-alternate-background border-y border-white/5">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Owner's Toolkit</Badge>
            <SectionHeadline>Operational Superpowers</SectionHeadline>
            <p className="text-secondary-text text-lg italic font-medium">Why the world's most disciplined COOs choose MoreMeets.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
                { t: "2-Minute Reporting", d: ["Staff update tasks in seconds", "No reporting effort required", "Live visibility always"], p: "Stop chasing reports.", i: Timer },
                { t: "Faster Training", d: ["New staff ready from Day 1", "No shadowing required", "Learning happens by doing"], p: "No more hand-holding.", i: GraduationCap },
                { t: "Operational Independence", d: ["No reliance on 'key managers'", "System stays if people leave", "Knowledge is institutionalized"], p: "Systems, not heroes.", i: AlertTriangle },
                { t: "Multi-Branch Command", d: ["Track all locations in one place", "Compare performance instantly", "Identify weak branches"], p: "Know without asking.", i: Eye },
                { t: "No-SaaS Freedom", d: ["No monthly subscriptions", "No logins or training struggle", "One-time payment, own forever"], p: "Zero recurring cost.", i: Lock },
                { t: "Audit-Ready Logs", d: ["Digital evidence for inspectors", "Tamper-resistant audit trail", "Permanent legal defense"], p: "Stay protected.", i: ShieldCheck }
            ].map(card => (
                <div key={card.t} className="p-10 rounded-[3rem] border border-white/5 bg-black/40 text-secondary-text shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <card.i className="w-24 h-24 text-primary" />
                    </div>
                    <h3 className="text-xl font-black uppercase italic text-primary mb-8 flex items-center gap-2">
                        {card.t}
                    </h3>
                    <ul className="space-y-4 text-sm min-h-[140px] relative z-10">
                        {card.d.map(item => <li key={item} className="flex items-start"><span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><span>{item}</span></li>)}
                    </ul>
                    <div className="pt-8 border-t border-white/5 mt-6 relative z-10">
                        <p className="font-black text-primary-text leading-tight uppercase italic text-sm tracking-tight">{card.p}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const CostOfMissSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="p-12 md:p-20 rounded-[3.5rem] bg-red-500/5 border border-red-500/20 space-y-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10"><AlertTriangle className="w-40 h-40 text-red-500" /></div>
                <div className="space-y-4">
                    <Badge variant="destructive" className="uppercase font-black tracking-widest text-[9px]">The Economic Stake</Badge>
                    <h2 className="text-4xl md:text-6xl font-black font-headline text-primary-text uppercase italic leading-[0.95] tracking-tighter">One missed <br /> step can <br /> cost <span className="text-red-500">everything.</span></h2>
                </div>
                <ul className="space-y-8">
                    {[
                        { t: "Missed clinical check → $500k lawsuit", i: "Hospital Ops", ic: Stethoscope },
                        { t: "Missed temp log → $10k stock loss", i: "Restaurant Ops", ic: Utensils },
                        { t: "Missed safety check → License suspension", i: "Industrial Ops", ic: HardHat }
                    ].map(item => (
                        <li key={item.t} className="space-y-1">
                            <p className="text-xl text-primary-text font-black flex items-center gap-3 italic leading-tight"><ArrowRight className="w-5 h-5 text-red-500" /> {item.t}</p>
                            <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 pl-8 flex items-center gap-2">
                                <item.ic className="w-3 h-3" /> {item.i}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space-y-10">
                <div className="space-y-6">
                    <SectionHeadline className="text-left leading-tight">Built for Compliance <br /> & Consistency.</SectionHeadline>
                    <p className="text-xl text-secondary-text italic font-medium leading-relaxed">
                        MoreMeets is engineered to meet real-world operational standards (ISO, HACCP, OSHA).
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { t: "Audit-Ready Logs", i: ShieldCheck },
                        { t: "Digital Evidence", i: FileSpreadsheet },
                        { t: "Institutional Guard", i: History },
                        { t: "Logic-Aware Sheets", i: Database }
                    ].map(item => (
                        <div key={item.t} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 flex flex-col gap-4 group hover:border-primary/20 transition-all">
                            <item.i className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                            <span className="text-[11px] font-black uppercase text-primary-text tracking-widest">{item.t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ClaritySection />
        <SOPAdvantageSection />
        
        <Section className="bg-alternate-background border-y border-white/5 overflow-hidden">
            <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/[0.02] space-y-12 relative text-center">
                <div className="absolute top-0 left-0 p-10 opacity-5 -rotate-12"><History className="w-64 h-64 text-primary" /></div>
                <div className="space-y-6 relative z-10">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">The Resignation Guard</Badge>
                    <SectionHeadline>Protect Your Institutional Memory</SectionHeadline>
                    <p className="text-xl md:text-2xl text-secondary-text font-medium italic max-w-3xl mx-auto leading-relaxed">
                        When your best manager leaves, their standards shouldn't leave with them. 
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-12 relative z-10">
                    {[
                        { t: "Capture Expert Know-How", d: "Trainer notes capture the 'How' so new hires are ready on Day 1.", i: GraduationCap },
                        { t: "Mandate Discipline", d: "Consequence columns explain the 'Why,' making laziness impossible.", i: AlertTriangle },
                        { t: "Permanent Structure", d: "Convert tribal knowledge into a hard asset that belongs to the brand.", i: History }
                    ].map(item => (
                        <div key={item.t} className="space-y-4">
                            <item.i className="w-10 h-10 text-primary mx-auto opacity-50" />
                            <h4 className="font-black uppercase text-primary-text italic text-sm">{item.t}</h4>
                            <p className="text-xs text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        <SuperpowersSection />
        <CostOfMissSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        {/* FINAL CTA */}
        <Section id="final-cta" className="bg-black border-t border-white/5 text-center">
            <div className="max-w-4xl mx-auto space-y-12">
                <SectionHeadline>Stop managing people. <br/> <span className="text-primary">Start managing systems.</span></SectionHeadline>
                <div className="flex flex-col items-center gap-8">
                    <Button size="lg" asChild className="group h-24 px-16 rounded-[2rem] bg-primary text-black font-black uppercase text-2xl shadow-[0_0_60px_-10px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all">
                        <Link href="/library" className="flex items-center">
                            Eliminate Operational Risk <ArrowRight className="ml-4 h-8 w-8" />
                        </Link>
                    </Button>
                    <div className="flex flex-wrap items-center justify-center gap-12">
                        <div className="text-center space-y-1">
                            <p className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-2 justify-center"><Lock className="w-4 h-4" /> No SaaS Lock-in.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Own your engine forever.</p>
                        </div>
                        <div className="text-center space-y-1">
                            <p className="text-xs font-black uppercase tracking-widest text-accent flex items-center gap-2 justify-center"><Infinity className="w-4 h-4" /> One-Time Payment.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">No monthly subscriptions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
