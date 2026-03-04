
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gem, Zap, CheckCircle, Globe, Download, FileSpreadsheet } from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { HeroSection } from "@/components/layout/hero-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const CoreProblemSection = () => (
    <Section id="core-problem">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-10">
            <SectionHeadline>Memory fails. Systems don’t.</SectionHeadline>
            <div className="space-y-4 text-lg text-secondary-text">
                <p>People don’t fail because they don’t care.<br/>They fail because the business expects them to remember too much.</p>
                <p>When processes are undocumented, inconsistently trained, explained verbally, or just “understood” but not written:</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium">
                {['Steps are skipped', 'Standards drift', 'Training fades', 'Audits are stressful', 'Managers chase'].map(item => (
                    <div key={item} className="p-2 px-4 rounded-full border border-white/10 bg-white/[0.02] text-secondary-text">
                        {item}
                    </div>
                ))}
            </div>
             <p className="text-xl font-medium pt-4 text-accent">If your process isn’t written clearly, it will be rewritten differently by every person.</p>
        </div>
    </Section>
);

const HowItWorksSection = () => (
    <Section id="how-it-works" className="bg-alternate-background">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <SectionHeadline>How it works</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center">
                    <Link href="/library" className="group/step w-full flex flex-col items-center">
                        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-4 border border-white/10 shadow-xl group-hover/step:border-primary/40 transition-all duration-300 group-hover/step:scale-105">
                            <span className="text-5xl font-black text-accent block translate-x-0.5">1</span>
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary-text uppercase tracking-tighter group-hover/step:text-primary transition-colors flex items-center justify-center gap-2">
                            Select Your Industry <ArrowRight className="w-4 h-4" />
                        </h3>
                    </Link>
                    <p className="text-secondary-text mt-2 text-sm leading-relaxed">Choose a ready-to-implement operational system designed for your business type.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-4 border border-white/10 shadow-xl">
                        <span className="text-5xl font-black text-accent block">2</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-primary-text uppercase tracking-tighter">
                        Implement Immediately
                    </h3>
                    <p className="text-secondary-text mt-2 text-sm leading-relaxed">Download fully editable checklists and SOPs instantly: no waiting, no delays.</p>
                </div>
                 <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-black mb-4 border border-white/10 shadow-xl">
                        <span className="text-5xl font-black text-accent block">3</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-primary-text uppercase tracking-tighter">Tailored To Your Workflow</h3>
                    <p className="text-secondary-text mt-2 text-sm leading-relaxed">1 expert customization included to match your brand, process, and compliance needs.</p>
                </div>
            </div>
            <div className="mt-16 text-center">
                <p className="text-lg md:text-xl font-bold text-primary italic border-t border-white/5 pt-8 max-w-3xl mx-auto">
                    Move from inconsistent execution to standardized, audit-ready operations in days: not months.
                </p>
            </div>
        </div>
    </Section>
);

const FeatureStripSection = () => (
    <Section id="feature-strip" className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
                <div className="flex flex-col items-center gap-2">
                    <Download className="w-8 h-8 text-accent"/>
                    <p className="font-black uppercase tracking-widest text-[10px] text-primary-text">Instant download</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Gem className="w-8 h-8 text-accent"/>
                    <p className="font-black uppercase tracking-widest text-[10px] text-primary-text">Expert Customization</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="w-8 h-8 text-accent"/>
                    <p className="font-black uppercase tracking-widest text-[10px] text-primary-text">Lifetime updates</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Globe className="w-8 h-8 text-accent"/>
                    <p className="font-black uppercase tracking-widest text-[10px] text-primary-text">Globally Aligned</p>
                </div>
            </div>
        </div>
    </Section>
);

const WhatItIsSection = () => (
    <Section id="what-it-is" className="bg-alternate-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline>MoreMeets™ is not software people need to “remember to use.”</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-primary-text">
                <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase italic flex items-center gap-2 text-authority-green"><Check className="w-5 h-5"/>What It IS</h3>
                    <ul className="space-y-3 pl-2 text-base text-secondary-text">
                        <li>A structured SOP framework</li>
                        <li>A library of best-practice operational standards</li>
                        <li>A way to turn experience into clear, repeatable steps</li>
                        <li>Designed to work offline, in Excel, or on paper</li>
                        <li>Easy to update as operations change</li>
                        <li>Built for real work, not dashboards</li>
                    </ul>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase italic flex items-center gap-2 text-risk-accent"><ArrowRight className="w-5 h-5 rotate-45"/>What it’s NOT</h3>
                     <ul className="space-y-3 pl-2 text-base text-secondary-text">
                        <li>Not task enforcement</li>
                        <li>Not monitoring employees</li>
                        <li>Not reminders or notifications</li>
                        <li>Not another tool to “manage people”</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg font-medium mt-12 text-primary-text italic">MoreMeets™ doesn’t control people. It removes ambiguity from work.</p>
        </div>
    </Section>
);

const HowTeamsUseItSection = () => {
    const cards = [
        { title: "SOP Creation", content: ["Clear steps", "Clear ownership", "Clear frequency", "Clear outcomes"], closing: "No long documents. Only what matters.", subClosing: "Everyone knows what to do, how to do it, and when." },
        { title: "Training & Onboarding", content: ["Faster", "Consistent", "Less dependent on people"], closing: "Training that doesn’t fade.", subClosing: "New hires don’t guess. They follow the same standards as experienced staff." },
        { title: "Daily Operations", content: ["What needs to be done", "How it should be done", "What “right” looks like"], closing: "Execution without follow-ups.", subClosing: "Managers stop chasing. Work runs the same on every shift." },
        { title: "Continuous Improvement", content: ["SOPs are updated", "Mistakes are removed once: permanently", "Best practices are locked in"], closing: "Your system gets smarter over time.", subClosing: "Experience becomes process. Not tribal knowledge." }
    ];
    return(
    <Section id="how-it-works-old">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <SectionHeadline>How MoreMeets™ fits into real operations</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cards.map(card => (
                    <div key={card.title} className="p-6 rounded-2xl border border-white/5 bg-black/40 text-secondary-text shadow-xl">
                        <h3 className="text-lg font-black uppercase italic text-authority-green mb-3">{card.title}</h3>
                        <ul className="space-y-1 text-sm">
                            {card.content.map(item => <li key={item} className="flex items-start"><span className="mr-2 mt-1 text-primary">∙</span><span>{item}</span></li>)}
                        </ul>
                        <p className="font-bold pt-4 text-sm text-primary-text leading-tight">{card.closing}</p>
                        <p className="text-[10px] mt-1 opacity-60 uppercase tracking-widest">{card.subClosing}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
)};

const ComplianceSection = () => (
    <Section id="compliance" className="bg-alternate-background">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-8">
            <SectionHeadline>Built for global compliance: without complexity</SectionHeadline>
            <p className="text-lg text-secondary-text leading-relaxed">MoreMeets™ is designed to support regulated environments where consistency matters more than intent.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left text-[10px] font-black uppercase tracking-widest pt-4 text-primary-text">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>ISO standards</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>OSHA safety</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>HACCP protocols</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>SOC audits</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>Multi-location</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>Role-based SOPs</p>
            </div>
             <p className="text-xl font-medium pt-4 text-primary-text italic">You don’t “prepare” for audits. You operate in a way that naturally passes them.</p>
        </div>
    </Section>
);

const WhoIsItForSection = () => (
    <Section id="who-is-it-for">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline>Built for operators who are tired of firefighting</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center text-primary-text">
                <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">Founders & COOs</h3>
                    <p className="text-sm text-secondary-text leading-relaxed">Scaling without chaos. Less dependency on individuals. Predictable execution.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">Operations Heads</h3>
                    <p className="text-sm text-secondary-text leading-relaxed">Clear standards. Easier audits. Less follow-up. Permanent institutional memory.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter">Multi-location Teams</h3>
                    <p className="text-sm text-secondary-text leading-relaxed">Same standards everywhere. Faster onboarding. Fewer surprises across outlets.</p>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
    <Section id="final-cta" className="bg-black border-t border-white/5">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
            <SectionHeadline>Stop firefighting. Start building.</SectionHeadline>
            <p className="text-lg text-secondary-text">Explore the library to find the right operational standard for your business.</p>
            <div className="flex flex-col items-center gap-4 pt-4">
                <Button size="lg" asChild className="group h-16 px-10 rounded-xl bg-primary text-black font-black uppercase text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    <Link href="/library" className="flex items-center">
                        Eliminate Operational Risk <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <div className="text-center space-y-0.5 opacity-60">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">So nothing critical is missed.</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Built to prevent costly oversight.</p>
                </div>
                 <div className="pt-4 text-[9px] font-black uppercase tracking-[0.2em] text-accent">
                    1 Expert Customization Included: Aligned to your brand and workflow
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
        <CoreProblemSection />
        <HowItWorksSection />
        <FeatureStripSection />
        <WhatItIsSection />
        <HowTeamsUseItSection />
        <ComplianceSection />
        <WhoIsItForSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
