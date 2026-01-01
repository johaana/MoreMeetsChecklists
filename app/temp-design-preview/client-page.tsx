
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, style, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string, style?: React.CSSProperties }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} style={style} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl !leading-tight", className)} style={{ color: 'var(--text-primary)'}}>
        {children}
    </h2>
);

const HeroSection = () => (
    <section className="relative w-full flex items-center justify-center text-white overflow-hidden min-h-screen">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div 
            className="absolute inset-0 z-10" 
            style={{background: 'linear-gradient(90deg, rgba(15, 19, 17, 0.8) 0%, rgba(15, 19, 17, 0.7) 40%, rgba(15, 19, 17, 0.2) 100%)'}}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[520px] space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline text-white" style={{ lineHeight: 1.1 }}>
                    People forget.
                    <br/>
                    Your business shouldn’t suffer for it.
                </h1>
                <div className="space-y-2 text-lg" style={{color: 'var(--text-secondary)'}}>
                    <p>When work depends on memory, experience, or “who’s on shift,” processes break under pressure — during growth, audits, turnover, or emergencies.</p>
                    <p>MoreMeets gives teams a clear, structured way to do work right — every time.</p>
                </div>
                <div className="text-sm space-y-1" style={{ color: 'var(--text-secondary)'}}>
                    <p>During audits</p>
                    <p>During shift changes</p>
                    <p>During emergencies</p>
                    <p>During rapid growth</p>
                    <p style={{color: 'var(--accent-risk)'}}>That’s when memory fails first.</p>
                </div>
                <div className="flex flex-col items-start gap-3 pt-4">
                    <Button size="lg" asChild className="group" style={{ backgroundColor: 'var(--accent-cta)', color: 'var(--bg-primary)', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                        <Link href="/library">
                            See the Operational Framework <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button variant="link" asChild className="text-xs" style={{ color: 'var(--text-secondary)'}}>
                        <Link href="#">How teams standardize work without new tools</Link>
                    </Button>
                </div>
                <div className="pt-4 text-xs" style={{ color: 'var(--muted-text)'}}>
                    Offline • Excel-based • One-time setup • Lifetime use
                </div>
            </div>
        </div>
    </section>
);

const CoreProblemSection = () => (
    <Section id="core-problem" style={{ backgroundColor: 'var(--bg-secondary)'}}>
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-8">
            <SectionHeadline className="text-primary-text">Memory is not a control system</SectionHeadline>
            <div className="space-y-4 text-lg" style={{color: 'var(--text-secondary)'}}>
                <p>People don’t fail because they don’t care. They fail because work lives in their heads.</p>
                <p>When that happens:</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-medium" style={{color: 'var(--text-secondary)'}}>
                <div className="p-3 rounded-md" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>steps are skipped</div>
                <div className="p-3 rounded-md" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>standards drift</div>
                <div className="p-3 rounded-md" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>training fades</div>
                <div className="p-3 rounded-md" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>audits become stressful</div>
                <div className="p-3 rounded-md md:col-span-1 col-span-2" style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>managers chase</div>
            </div>
             <p className="text-lg" style={{color: 'var(--text-secondary)'}}>This isn’t human error. It’s operational fragility.</p>
             <hr className="border-t-2 border-dashed w-24 mx-auto" style={{borderColor: 'var(--accent-stable)'}} />
             <p className="text-xl font-bold" style={{color: 'var(--text-primary)'}}>If your process isn’t written clearly, it will be rewritten differently by every person.</p>
        </div>
    </Section>
);

const WhatItIsSection = () => (
    <Section id="what-it-is" style={{backgroundColor: 'var(--bg-light-contrast)', color: 'var(--text-dark)'}}>
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl !leading-tight" style={{ color: 'var(--text-dark)'}}>MoreMeets is not software people need to “remember to use.”</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold" style={{color: 'var(--text-dark)'}}>What it is</h3>
                    <ul className="space-y-2" style={{color: 'var(--muted-text)'}}>
                        <li>A structured SOP framework</li>
                        <li>A library of best-practice operational standards</li>
                        <li>A way to turn experience into clear, repeatable processes</li>
                        <li>Designed to live offline, in Excel, or print</li>
                        <li>Easy to update as operations change</li>
                    </ul>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-bold" style={{color: 'var(--text-dark)'}}>What it’s not</h3>
                    <ul className="space-y-2" style={{color: 'var(--muted-text)'}}>
                        <li className="flex items-center gap-2"><X className="w-4 h-4" style={{color: 'var(--accent-risk)'}}/>Not task enforcement</li>
                        <li className="flex items-center gap-2"><X className="w-4 h-4" style={{color: 'var(--accent-risk)'}}/>Not monitoring employees</li>
                        <li className="flex items-center gap-2"><X className="w-4 h-4" style={{color: 'var(--accent-risk)'}}/>Not reminders or notifications</li>
                        <li className="flex items-center gap-2"><X className="w-4 h-4" style={{color: 'var(--accent-risk)'}}/>Not another dashboard</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg font-medium mt-12" style={{color: 'var(--text-dark)'}}>MoreMeets doesn’t control people. It removes ambiguity from work.</p>
        </div>
    </Section>
);

const HowTeamsUseItSection = () => {
    const cards = [
        { title: "SOP Creation", content: ["clear steps", "clear ownership", "clear frequency"], closing: "No long documents. Just what matters." },
        { title: "Training & Onboarding", content: ["faster", "consistent", "role-based"], closing: "New hires don’t guess. They follow the same standards as experienced staff. Training becomes:" },
        { title: "Daily Operations", content: ["what needs to be done", "how it should be done", "what “right” looks like"], closing: "Teams know:" },
        { title: "Continuous Improvement", content: ["SOPs are updated", "mistakes are removed", "best practices are locked in"], closing: "As operations evolve:" }
    ];
    return(
    <Section id="how-it-works" style={{backgroundColor: 'var(--bg-primary)'}}>
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <SectionHeadline className="text-primary-text">How MoreMeets fits into real operations</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cards.map(card => (
                    <Card key={card.title} style={{backgroundColor: 'var(--bg-secondary)', borderColor: '#262c2a'}}>
                        <CardHeader>
                            <CardTitle style={{color: 'var(--accent-stable)'}}>🟩 {card.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm" style={{color: 'var(--text-secondary)'}}>
                            <p className="mb-2">{card.closing}</p>
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
    <Section id="compliance" style={{backgroundColor: 'var(--bg-secondary)'}}>
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-8">
            <SectionHeadline className="text-primary-text">Compliance works only when it’s part of daily work</SectionHeadline>
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>Compliance fails when it lives in binders, policies, or one-time training. MoreMeets embeds compliance into how work is designed — not how it’s inspected later.</p>
            <div className="grid grid-cols-2 gap-4 text-left text-sm pt-4" style={{color: 'var(--text-primary)'}}>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>ISO & internal standards</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>Multi-location consistency</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>Role-based SOPs</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>Audit-ready documentation</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>Clear ownership & frequency</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4" style={{color: 'var(--accent-stable)'}}/>Global teams, local execution</p>
            </div>
            <p className="text-xl font-bold pt-4" style={{color: 'var(--text-primary)'}}>You don’t “prepare” for audits. You operate in a way that naturally passes them.</p>
        </div>
    </Section>
);

const WhyItWorksSection = () => (
     <Section id="why-it-works" style={{backgroundColor: 'var(--bg-light-contrast)', color: 'var(--text-dark)'}}>
        <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl mb-12" style={{ color: 'var(--text-dark)'}}>Why teams actually follow this</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">1️⃣ Simple</h3>
                    <p style={{color: 'var(--muted-text)'}}>No apps to learn. No logins. No friction.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">2️⃣ Clear</h3>
                    <p style={{color: 'var(--muted-text)'}}>No interpretation. No “I thought.” No assumptions.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">3️⃣ Repeatable</h3>
                    <p style={{color: 'var(--muted-text)'}}>Same work. Same standard. Every location.</p>
                </div>
            </div>
            <p className="text-xl font-bold mt-12" style={{ color: 'var(--text-dark)'}}>When expectations are clear, performance becomes predictable.</p>
        </div>
     </Section>
);

const WhoIsItForSection = () => (
    <Section id="who-is-it-for" style={{backgroundColor: 'var(--bg-primary)'}}>
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline className="text-primary-text">Built for operations that can’t afford misses</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold" style={{color: 'var(--accent-stable)'}}>Ideal For</h3>
                    <ul className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                        <li>Founders scaling beyond themselves</li>
                        <li>COOs tired of firefighting</li>
                        <li>Multi-location teams</li>
                        <li>Regulated or audit-heavy industries</li>
                        <li>Operations where mistakes are costly</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-bold" style={{color: 'var(--accent-risk)'}}>Not For</h3>
                    <ul className="space-y-2" style={{color: 'var(--text-secondary)'}}>
                        <li>Teams looking to monitor people</li>
                        <li>Companies that want reminders instead of structure</li>
                        <li>Businesses without defined processes</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
    <Section id="final-cta" style={{backgroundColor: '#000'}}>
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-6">
            <SectionHeadline className="text-primary-text">Standardize how work gets done — before growth breaks it</SectionHeadline>
            <p className="text-lg" style={{color: 'var(--text-secondary)'}}>MoreMeets helps you design operations that don’t depend on memory, luck, or specific people.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
                <Button size="lg" asChild className="group" style={{ backgroundColor: 'var(--accent-cta)', color: 'var(--bg-primary)', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                    <Link href="/library">
                        View the SOP Framework <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button variant="link" asChild className="text-xs" style={{ color: 'var(--text-secondary)'}}>
                    <Link href="/library">Explore industry examples</Link>
                </Button>
                 <div className="pt-4 text-xs" style={{ color: 'var(--muted-text)'}}>
                    Offline • Excel-based • One-time setup • Lifetime updates
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
      <WhyItWorksSection />
      <WhoIsItForSection />
      <FinalCTASection />
    </main>
  );
}
