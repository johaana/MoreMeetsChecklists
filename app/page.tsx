
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, CheckCircle, Globe, Download, ShieldAlert, Trophy, Target, Timer, Lock, Infinity, Users, Eye, LifeBuoy } from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { HeroSection } from "@/components/layout/hero-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const ClarityBlock = () => (
    <div className="w-full bg-primary/5 border-y border-white/5 py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.3em] font-black text-[10px]">Strategic Alignment</Badge>
            <h2 className="text-2xl md:text-4xl font-black font-headline text-primary-text uppercase italic leading-tight">
                MoreMeets™ gives you a ready-to-use system <br className="hidden md:block" /> to run your business daily.
            </h2>
            <p className="text-xl md:text-2xl font-bold text-accent italic">
                Your team sees tasks → Updates in 2 minutes → Managers verify → You see everything live.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                {[
                    { t: "Runs on Excel or Google Sheets", i: CheckCircle },
                    { t: "Deploy in 10 Minutes", i: Zap },
                    { t: "No monthly subscriptions", i: Lock },
                    { t: "Lifetime Expert Support", i: LifeBuoy }
                ].map(item => (
                    <div key={item.t} className="flex items-center justify-center gap-2 p-4 rounded-xl bg-black/40 border border-white/10">
                        <item.i className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-[11px] font-black uppercase tracking-widest text-secondary-text">{item.t}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const CoreProblemSection = () => (
    <Section id="core-problem">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-10">
            <SectionHeadline>Memory fails. Systems don’t.</SectionHeadline>
            <div className="space-y-4 text-lg text-secondary-text">
                <p className="font-bold">Most businesses run on WhatsApp, Memory, and Verbal Instructions.</p>
                <p>That’s why things get missed, managers have to constantly "chase" staff, and mistakes cost you money every single day.</p>
            </div>
            <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 max-w-md mx-auto">
                <p className="text-lg font-black text-red-500 uppercase tracking-tighter italic">
                    "This is where businesses lose 2–5% of their revenue every month."
                </p>
            </div>
             <p className="text-xl font-medium pt-4 text-primary-text italic">If your team forgets things, your business pays for it.</p>
        </div>
    </Section>
);

const HowItWorksSection = () => (
    <Section id="how-it-works" className="bg-alternate-background">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto space-y-4">
                <SectionHeadline>4 Steps to Total Control</SectionHeadline>
                <p className="text-secondary-text italic font-medium">Built for rapid adoption. No training required.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
                {[
                    { n: "1", t: "Team sees daily tasks", d: "Staff open the file and filter for their specific role instantly.", i: Users },
                    { n: "2", t: "Update in 2 minutes", d: "Status is updated with initials before the shift ends. No long reports.", i: Timer },
                    { n: "3", t: "Managers verify", d: "High-risk tasks are flagged for mandatory leadership sign-off.", i: Target },
                    { n: "4", t: "You see everything", d: "A live dashboard shows performance across branches, teams, and staff.", i: Eye }
                ].map(step => (
                    <div key={step.n} className="flex flex-col items-center group">
                        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-black mb-6 border border-white/10 shadow-xl group-hover:border-primary/40 transition-all">
                            <span className="text-4xl font-black text-accent block">{step.n}</span>
                        </div>
                        <h3 className="text-lg font-bold font-headline text-primary-text uppercase tracking-tighter mb-2">
                            {step.t}
                        </h3>
                        <p className="text-secondary-text text-sm leading-relaxed italic">{step.d}</p>
                    </div>
                ))}
            </div>
        </div>
    </Section>
);

const USPPowerSection = () => {
    const cards = [
        { 
            title: "2-Minute Reporting", 
            icon: Timer,
            content: ["Staff update tasks in seconds", "Only see what's assigned to them", "No long forms or paperwork", "100% team adoption"], 
            closing: "Stop chasing staff.", 
            subClosing: "Execution without follow-ups." 
        },
        { 
            title: "Manager Control", 
            icon: ShieldAlert,
            content: ["Highlighted 'Yellow Targets'", "Mandatory sign-off for risk", "Consequences of failure defined", "Audit-ready evidence trail"], 
            closing: "Stop mistakes early.", 
            subClosing: "Focused oversight on what matters." 
        },
        { 
            title: "Built-in Training", 
            icon: Target,
            content: ["Instructions built into tasks", "New staff learn on the job", "Tribal knowledge is secured", "Consistent standards 24/7"], 
            closing: "Systems, not heroes.", 
            subClosing: "Knowledge stays when staff leave." 
        },
        { 
            title: "Live Visibility", 
            icon: Eye,
            content: ["Track multiple branches", "See team performance live", "Identify profit leaks instantly", "Incident tracking & logging"], 
            closing: "Know without asking.", 
            subClosing: "Full clarity even when you are away." 
        }
    ];
    return(
    <Section id="superpowers">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                <SectionHeadline>Your Operational Superpowers</SectionHeadline>
                <p className="text-secondary-text italic font-medium">You are not buying Excel. You are buying the ability to run your business like a machine.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {cards.map(card => (
                    <div key={card.title} className="p-8 rounded-[2rem] border border-white/5 bg-black/40 text-secondary-text shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <card.icon className="w-24 h-24 text-primary" />
                        </div>
                        <h3 className="text-xl font-black uppercase italic text-primary mb-6 flex items-center gap-2">
                            {card.title}
                        </h3>
                        <ul className="space-y-3 text-sm min-h-[140px]">
                            {card.content.map(item => <li key={item} className="flex items-start"><span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" /><span>{item}</span></li>)}
                        </ul>
                        <div className="pt-6 border-t border-white/5 mt-4">
                            <p className="font-black text-primary-text leading-tight uppercase italic text-sm">{card.closing}</p>
                            <p className="text-[10px] mt-1.5 opacity-60 uppercase tracking-widest font-bold">{card.subClosing}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
)};

const WhoIsItForSection = () => (
    <Section id="who-is-it-for" className="bg-alternate-background">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline>Built for owners tired of firefighting</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-12 text-center text-primary-text">
                <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary">Founders & COOs</h3>
                    <p className="text-sm text-secondary-text leading-relaxed italic">"I want to scale without chaos and reduce my dependency on a few key individuals."</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary">Operations Heads</h3>
                    <p className="text-sm text-secondary-text leading-relaxed italic">"I need to know exactly what's happening at every branch without asking for reports."</p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary">Multi-location Teams</h3>
                    <p className="text-sm text-secondary-text leading-relaxed italic">"We need one standard across every unit so that onboarding is fast and audits are stress-free."</p>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
    <Section id="final-cta" className="bg-black border-t border-white/5">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
            <SectionHeadline>Stop firefighting. <br/> Start building.</SectionHeadline>
            <p className="text-lg text-secondary-text italic font-bold">Your team already does the work. This system makes sure it gets done properly.</p>
            <div className="flex flex-col items-center gap-4 pt-4">
                <Button size="lg" asChild className="group h-16 px-10 rounded-xl bg-primary text-black font-black uppercase text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    <Link href="/library" className="flex items-center">
                        Eliminate Operational Risk <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <div className="flex items-center gap-6 pt-2">
                    <div className="text-center space-y-0.5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5"><Lock className="w-3 h-3" /> No SaaS Lock-in.</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Own your engine forever.</p>
                    </div>
                    <div className="text-center space-y-0.5">
                        <p className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1.5"><Infinity className="w-3 h-3" /> One-Time Payment.</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/40">No monthly subscriptions.</p>
                    </div>
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
        <ClarityBlock />
        <CoreProblemSection />
        <HowItWorksSection />
        <USPPowerSection />
        <WhoIsItForSection />
        <TestimonialsSection />
        <FaqSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
