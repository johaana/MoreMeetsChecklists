
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[36px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[720px] flex items-center overflow-hidden">
        <div className="absolute top-0 right-0 h-full w-1/2 z-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
        <div 
            className="absolute inset-0 z-10" 
            style={{background: 'linear-gradient(90deg, hsl(var(--bg-primary)) 40%, hsla(var(--bg-primary), 0.8) 60%, hsla(var(--bg-primary), 0.0) 100%)'}}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[550px] space-y-6">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter !leading-tight" style={{fontFamily: 'Inter Tight, sans-serif'}}>
                    People forget.
                    <br/>
                    Your business shouldn’t pay for it.
                </h1>
                <p className="text-lg" style={{color: 'hsl(var(--text-secondary))', lineHeight: 1.6}}>
                    When work lives in people’s heads, it breaks under pressure — during audits, shift changes, growth, or emergencies.
                </p>
                <p className="text-lg font-medium" style={{color: 'hsl(var(--text-primary))'}}>Memory is not a control system.</p>
                
                <div className="space-y-3 pt-4 border-l-2 pl-4" style={{borderColor: 'hsl(var(--border-color))'}}>
                    <p className="text-sm" style={{color: 'hsl(var(--text-secondary))'}}>Steps are skipped when no one is watching</p>
                    <p className="text-sm" style={{color: 'hsl(var(--text-secondary))'}}>Training fades the moment shifts change</p>
                    <p className="text-sm" style={{color: 'hsl(var(--text-secondary))'}}>New hires guess instead of follow</p>
                    <p className="text-sm" style={{color: 'hsl(var(--text-secondary))'}}>Managers chase work instead of running the business</p>
                    <p className="text-sm" style={{color: 'hsl(var(--text-secondary))'}}>Compliance exists in files — not in behavior</p>
                    <p className="text-sm font-medium" style={{color: 'hsl(var(--text-primary))'}}>This isn’t human error. It’s operational fragility.</p>
                </div>

                <div className="flex flex-col items-start gap-3 pt-4">
                    <Button size="lg" asChild className="group" style={{ backgroundColor: 'hsl(var(--accent-urgency))', color: 'hsl(var(--bg-primary))', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                        <Link href="/library">
                            See the Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="text-xs" style={{ color: 'hsl(var(--text-secondary))' }}>
                        Built for regulated, multi-location operations
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CoreProblemSection = () => (
    <Section id="core-problem" style={{ backgroundColor: 'hsl(var(--bg-primary))'}}>
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-10">
            <SectionHeadline>Memory fails. Systems don’t.</SectionHeadline>
            <div className="space-y-4 text-lg" style={{color: 'hsl(var(--text-secondary))'}}>
                <p>People don’t fail because they don’t care.<br/>They fail because the business expects them to remember too much.</p>
                <p>When processes are undocumented, inconsistently trained, explained verbally, or just “understood” but not written...</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium">
                {['Steps are skipped', 'Standards drift', 'Training fades', 'Audits are stressful', 'Managers chase'].map(item => (
                    <div key={item} className="p-2 px-4 rounded-full border" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))', color: 'hsl(var(--text-secondary))'}}>
                        {item}
                    </div>
                ))}
            </div>
             <p className="text-xl font-medium pt-4" style={{color: 'hsl(var(--accent-urgency))'}}>If your process isn’t written clearly, it will be rewritten differently by every person.</p>
        </div>
    </Section>
);

const WhatItIsSection = () => (
    <Section id="what-it-is" style={{backgroundColor: 'hsl(var(--text-primary))'}}>
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[36px] !leading-tight" style={{ color: 'hsl(var(--bg-primary))'}}>MoreMeets is not software people need to “remember to use.”</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12" style={{color: 'hsl(var(--bg-primary))'}}>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2" style={{color: 'hsl(var(--accent-authority))'}}><Check className="w-5 h-5"/>What it IS</h3>
                    <ul className="space-y-3 pl-2 text-base" style={{color: 'hsl(var(--bg-primary), 0.8)'}}>
                        <li>A structured SOP framework</li>
                        <li>A library of best-practice operational standards</li>
                        <li>A way to turn experience into clear, repeatable steps</li>
                        <li>Designed to work offline, in Excel, or on paper</li>
                        <li>Easy to update as operations change</li>
                        <li>Built for real work, not dashboards</li>
                    </ul>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2" style={{color: 'hsl(var(--accent-risk))'}}><X className="w-5 h-5"/>What it’s NOT</h3>
                     <ul className="space-y-3 pl-2 text-base" style={{color: 'hsl(var(--bg-primary), 0.8)'}}>
                        <li>Not task enforcement</li>
                        <li>Not monitoring employees</li>
                        <li>Not reminders or notifications</li>
                        <li>Not another tool to “manage people”</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg font-medium mt-12" style={{color: 'hsl(var(--bg-primary))'}}>MoreMeets doesn’t control people. It removes ambiguity from work.</p>
        </div>
    </Section>
);

const HowTeamsUseItSection = () => {
    const cards = [
        { title: "SOP Creation", content: ["Clear steps", "Clear ownership", "Clear frequency", "Clear outcomes"], closing: "No long documents. Only what matters.", subClosing: "Everyone knows what to do, how to do it, and when." },
        { title: "Training & Onboarding", content: ["Faster", "Consistent", "Less dependent on people"], closing: "Training that doesn’t fade.", subClosing: "New hires don’t guess. They follow the same standards as experienced staff." },
        { title: "Daily Operations", content: ["What needs to be done", "How it should be done", "What “right” looks like"], closing: "Execution without follow-ups.", subClosing: "Managers stop chasing. Work runs the same on every shift." },
        { title: "Continuous Improvement", content: ["SOPs are updated", "Mistakes are removed once — permanently", "Best practices are locked in"], closing: "Your system gets smarter over time.", subClosing: "Experience becomes process. Not tribal knowledge." }
    ];
    return(
    <Section id="how-it-works" style={{backgroundColor: 'hsl(var(--bg-primary))'}}>
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <SectionHeadline>How MoreMeets fits into real operations</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cards.map(card => (
                    <Card key={card.title} className="flex flex-col" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--accent-authority))'}}>
                                <span className="text-2xl">🟩</span>
                                <span>{card.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm flex-1 space-y-4" style={{color: 'hsl(var(--text-secondary))'}}>
                            <p className="font-semibold" style={{color: 'hsl(var(--text-primary))'}}>{card.closing}</p>
                            <p>{card.subClosing}</p>
                             <ul className="list-disc list-inside">
                                {card.content.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </Section>
)};

const ComplianceSection = () => (
    <Section id="compliance" style={{backgroundColor: 'hsl(var(--surface-card))'}}>
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-8">
            <SectionHeadline>Built for global compliance — without complexity</SectionHeadline>
            <p className="text-lg" style={{color: 'hsl(var(--text-secondary))'}}>MoreMeets is designed to support regulated environments where consistency matters more than intent.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left text-sm pt-4" style={{color: 'hsl(var(--text-primary))'}}>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>ISO standards</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>OSHA & safety frameworks</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>HACCP</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>SOC & internal audits</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>Multi-location consistency</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'hsl(var(--accent-authority))'}}/>Role-based SOPs</p>
            </div>
             <p className="text-xl font-medium pt-4" style={{color: 'hsl(var(--text-primary))'}}>Compliance lives in daily behavior, not binders.</p>
        </div>
    </Section>
);

const WhoIsItForSection = () => (
    <Section id="who-is-it-for" style={{backgroundColor: 'hsl(var(--text-primary))'}}>
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline style={{color: 'hsl(var(--bg-primary))'}}>Built for operators who are tired of firefighting</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center" style={{color: 'hsl(var(--bg-primary))'}}>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Founders & COOs</h3>
                    <p className="text-sm" style={{color: 'hsl(var(--bg-primary), 0.7)'}}>Scaling without chaos. Less dependency on individuals. Predictable execution.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Operations & Quality Heads</h3>
                    <p className="text-sm" style={{color: 'hsl(var(--bg-primary), 0.7)'}}>Clear standards. Easier audits. Less follow-up.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Multi-location Teams</h3>
                    <p className="text-sm" style={{color: 'hsl(var(--bg-primary), 0.7)'}}>Same standards everywhere. Faster onboarding. Fewer surprises.</p>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
    <Section id="final-cta" style={{backgroundColor: 'hsl(var(--bg-primary))'}}>
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-6">
            <SectionHeadline>If work lives in people’s heads, it will fail under pressure.</SectionHeadline>
            <p className="text-lg" style={{color: 'hsl(var(--text-secondary))'}}>MoreMeets gives your business a system, not another tool.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
                <Button size="lg" asChild className="group" style={{ backgroundColor: 'hsl(var(--accent-urgency))', color: 'hsl(var(--bg-primary))', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                    <Link href="/library">
                        View the Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button variant="link" asChild className="text-xs" style={{ color: 'hsl(var(--text-secondary))'}}>
                    <Link href="/library">Explore industry examples</Link>
                </Button>
                 <div className="pt-4 text-xs" style={{ color: 'hsl(var(--text-secondary))', opacity: 0.7 }}>
                    One-time purchase • Offline-ready • Built to last
                </div>
            </div>
        </div>
    </Section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <CoreProblemSection />
      <WhatItIsSection />
      <HowTeamsUseItSection />
      <ComplianceSection />
      <WhoIsItForSection />
      <FinalCTASection />
    </main>
  );
}
