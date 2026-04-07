'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Zap, 
    ShieldCheck,
    GraduationCap,
    AlertTriangle,
    Users,
    ClipboardCheck,
    BarChart3,
    Settings2,
    Target,
    Activity,
    XCircle,
    CheckCircle2,
    Clock,
    LayoutGrid,
    Repeat,
    Smartphone,
    Globe,
    History,
    Search,
    Fingerprint,
    FileSpreadsheet
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { HeroSection } from "@/components/layout/hero-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const OperationalWindow = ({ src, alt, title = "MASTER_OPERATIONAL_ENGINE_V11.9" }: { src: string, alt: string, title?: string }) => (
    <div className="relative mx-auto max-w-4xl group">
        <div className="bg-[#111] border border-white/10 border-b-0 rounded-t-2xl py-3 px-5 flex items-center gap-4">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
            </div>
            <div className="flex-1 flex justify-center">
                <div className="bg-black/40 border border-white/5 rounded-md px-12 py-1 text-[9px] font-black text-white/30 uppercase tracking-[0.4em] italic shadow-inner font-headline">
                    {title}
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

const TheShiftSection = () => (
    <Section className="bg-black border-b border-white/5">
        <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Category Shift</Badge>
                <SectionHeadline>STOP LEAVING YOUR BRAND TO LUCK</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium max-w-2xl mx-auto">
                    A good manager is a gift. A good system is an asset.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="space-y-8 p-10 md:p-16 bg-black">
                    <h3 className="text-red-500/60 font-black uppercase tracking-[0.4em] text-[10px] italic">THE LUCK MODEL</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks depend on memory",
                            "SOPs sit in folders",
                            "Managers keep following up",
                            "No real visibility",
                            "Standards leave when people do"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-zinc-400 italic font-medium leading-tight">
                                <XCircle className="w-5 h-5 text-red-500/40 shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8 p-10 md:p-16 bg-primary/[0.02]">
                    <h3 className="text-primary font-black uppercase tracking-[0.4em] text-[10px] italic">THE ASSET MODEL</h3>
                    <div className="space-y-6">
                        {[
                            "Tasks are already defined",
                            "Responsibility is assigned by role",
                            "Execution is recorded as work happens",
                            "Dashboard shows reality live",
                            "The system stays forever"
                        ].map(item => (
                            <div key={item} className="flex items-start gap-4 text-base md:text-lg text-primary-text font-black uppercase italic tracking-tighter leading-tight">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" /> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const InstitutionalPayloadSection = () => (
    <Section className="bg-black">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Institutional Payload</Badge>
                <SectionHeadline>WHAT YOU GET</SectionHeadline>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { t: "PRE-BUILT, INDUSTRY-GRADE SOPs", i: ClipboardCheck },
                    { t: "DAILY, WEEKLY, MONTHLY EXECUTION SYSTEM", i: Clock },
                    { t: "TRAINER NOTES FOR EVERY TASK", i: GraduationCap },
                    { t: "CONSEQUENCES OF FAILURE DEFINED", i: AlertTriangle },
                    { t: "SINGLE UNIT OR MULTI-BRANCH VISIBILITY", i: LayoutGrid },
                    { t: "FULLY EDITABLE STANDALONE SYSTEM", i: FileSpreadsheet, highlighted: true }
                ].map((item, i) => (
                    <div key={i} className={cn(
                        "p-10 rounded-2xl border border-white/5 flex flex-col gap-6 hover:border-primary/20 transition-all group",
                        item.highlighted ? "bg-primary/10 border-primary/20 shadow-[0_0_40px_-10px_rgba(46,184,107,0.2)]" : "bg-white/[0.02]"
                    )}>
                        <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                            item.highlighted ? "bg-primary text-black" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black"
                        )}>
                            <item.i className="w-5 h-5" />
                        </div>
                        <h4 className="font-black text-primary-text uppercase italic text-sm tracking-tighter leading-tight">{item.t}</h4>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const LiveDashboardSection = () => (
    <Section className="bg-black overflow-hidden border-y border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Live Telemetry</Badge>
                <SectionHeadline>SEE YOUR BUSINESS LIVE</SectionHeadline>
                <p className="text-xl text-secondary-text italic font-medium">No reports. No calls. No follow-ups.</p>
            </div>

            <OperationalWindow 
                src="https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png"
                alt="Sovereign Dashboard Interface"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto pt-12">
                {[
                    "Done vs. Pending Status",
                    "Single Unit or Multi-Branch Overview",
                    "Identified Operational Gaps",
                    "Permanent Activity Record"
                ].map(item => (
                    <div key={item} className="flex items-center justify-center gap-3 text-left">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest leading-tight italic">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const ResignationRiskSection = () => (
    <Section className="bg-alternate-background">
        <div className="max-w-4xl mx-auto p-10 md:p-20 rounded-2xl border border-white/5 bg-white/[0.01] space-y-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
                <Fingerprint className="w-64 h-64 text-primary" />
            </div>
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="space-y-6 flex-1">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Institutional Memory</Badge>
                    <h3 className="text-3xl md:text-[2.75rem] font-black font-headline text-primary-text uppercase italic tracking-tighter leading-[0.9]">
                        WHEN THEY LEAVE, <br /> <span className="text-primary">THE SYSTEM STAYS.</span>
                    </h3>
                    <p className="text-lg text-secondary-text leading-relaxed font-medium italic">
                        The biggest risk in operations is "Tribal Knowledge." When your best manager resigns, your luck runs out. MoreMeets™ converts individual memory into permanent organizational infrastructure.
                    </p>
                </div>
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 shrink-0">
                    <History className="w-16 h-16 md:w-24 md:h-24 text-primary opacity-20" />
                </div>
            </div>
        </div>
    </Section>
);

const PricingSection = () => (
    <Section id="pricing" className="bg-black text-center py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
                <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.4em] font-black text-[11px]">Investment in Infrastructure</Badge>
                <h2 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-primary-text">
                    LUCK IS NOT A STRATEGY
                </h2>
                <p className="text-xl text-secondary-text italic font-medium max-w-lg mx-auto">
                    Consistency shouldn't be a lucky outcome. For ₹999, install a permanent operational asset.
                </p>
                <div className="flex flex-col items-center gap-2 pt-6">
                    <div className="flex items-baseline gap-4">
                        <span className="text-7xl md:text-9xl font-black text-primary italic drop-shadow-[0_0_30px_rgba(46,184,107,0.3)]">₹999</span>
                        <span className="text-2xl md:text-4xl font-black text-white/20 italic">/ $12</span>
                    </div>
                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.5em]">NO SUBSCRIPTIONS • NO LOCK-IN</span>
                </div>
            </div>

            <Button size="lg" asChild className="group h-24 px-16 rounded-xl bg-primary text-black font-black uppercase text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                <Link href="/library" className="flex items-center">DEPLOY OPERATIONAL CERTAINTY <ArrowRight className="ml-4 h-8 w-8 transition-transform group-hover:translate-x-2" /></Link>
            </Button>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        
        <TheShiftSection />
        <InstitutionalPayloadSection />
        <LiveDashboardSection />
        <ResignationRiskSection />
        
        <TestimonialsSection />
        <FaqSection />
        
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}
