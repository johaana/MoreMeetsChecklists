
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown, Smile, CheckCircle, BrainCircuit, FileText, Users, Check } from "lucide-react";
import React from 'react';
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { HeroSection } from "@/components/layout/hero-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { philosophyCards } from "@/lib/homepage-content";
import { ValueCard } from "@/components/ui/value-card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)}>
        {children}
    </h2>
);

const CoreProblemSection = () => (
    <Section id="core-problem">
        <div className="container px-4 md:px-6 text-center max-w-3xl mx-auto space-y-10">
            <SectionHeadline>Memory fails. Systems don’t.</SectionHeadline>
            <div className="space-y-4 text-lg text-muted-foreground">
                <p>People don’t fail because they don’t care.<br/>They fail because the business expects them to remember too much.</p>
                <p>When processes are undocumented, inconsistently trained, explained verbally, or just “understood” but not written...</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center text-sm font-medium">
                {['Steps are skipped', 'Standards drift', 'Training fades', 'Audits are stressful', 'Managers chase'].map(item => (
                    <div key={item} className="p-2 px-4 rounded-full border bg-card text-card-foreground">
                        {item}
                    </div>
                ))}
            </div>
             <p className="text-xl font-medium pt-4 text-accent">If your process isn’t written clearly, it will be rewritten differently by every person.</p>
        </div>
    </Section>
);

const WhatItIsSection = () => (
    <Section id="what-it-is" className="bg-secondary">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline>MoreMeets is not software people need to “remember to use.”</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-foreground">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-2 text-authority-green"><Check className="w-5 h-5"/>What it IS</h3>
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
                    <h3 className="text-xl font-bold flex items-center gap-2 text-risk-accent"><Frown className="w-5 h-5"/>What it’s NOT</h3>
                     <ul className="space-y-3 pl-2 text-base text-secondary-text">
                        <li>Not task enforcement</li>
                        <li>Not monitoring employees</li>
                        <li>Not reminders or notifications</li>
                        <li>Not another tool to “manage people”</li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg font-medium mt-12 text-primary-text">MoreMeets doesn’t control people. It removes ambiguity from work.</p>
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
    <Section id="how-it-works">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <SectionHeadline>How MoreMeets fits into real operations</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cards.map(card => (
                    <Card key={card.title} className="flex flex-col bg-card border-border">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-authority-green">
                                <span className="text-2xl">🟩</span>
                                <span>{card.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm flex-1 space-y-4 text-secondary-text">
                             <ul className="space-y-1">
                                {card.content.map(item => <li key={item} className="flex items-start"><span className="mr-2 mt-1">∙</span><span>{item}</span></li>)}
                            </ul>
                            <p className="font-semibold pt-2 text-primary-text">{card.closing}</p>
                            <p>{card.subClosing}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </Section>
)};

const ComplianceSection = () => (
    <Section id="compliance" className="bg-secondary">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-8">
            <SectionHeadline>Built for global compliance — without complexity</SectionHeadline>
            <p className="text-lg text-secondary-text">MoreMeets is designed to support regulated environments where consistency matters more than intent.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left text-sm pt-4 text-primary-text">
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>ISO standards</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>OSHA & safety frameworks</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>HACCP</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>SOC & internal audits</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>Multi-location consistency</p>
                <p className="flex items-center gap-2"><Check className="w-4 h-4 text-authority-green"/>Role-based SOPs</p>
            </div>
             <p className="text-xl font-medium pt-4 text-primary-text">You don’t “prepare” for audits. You operate in a way that naturally passes them.</p>
        </div>
    </Section>
);

const WhoIsItForSection = () => (
    <Section id="who-is-it-for">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <SectionHeadline>Built for operators who are tired of firefighting</SectionHeadline>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center text-primary-text">
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Founders & COOs</h3>
                    <p className="text-sm text-secondary-text">Scaling without chaos. Less dependency on individuals. Predictable execution.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Operations & Quality Heads</h3>
                    <p className="text-sm text-secondary-text">Clear standards. Easier audits. Less follow-up.</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-bold">Multi-location Teams</h3>
                    <p className="text-sm text-secondary-text">Same standards everywhere. Faster onboarding. Fewer surprises.</p>
                </div>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
    <Section id="final-cta" className="bg-card">
        <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-6">
            <SectionHeadline>If work lives in people’s heads, it will fail under pressure.</SectionHeadline>
            <p className="text-lg text-secondary-text">MoreMeets gives your business a system, not another tool.</p>
            <div className="flex flex-col items-center gap-3 pt-4">
                <Button size="lg" asChild className="group" style={{ backgroundColor: 'hsl(var(--authority-green))', color: 'hsl(var(--bg-primary))', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                    <Link href="/library">
                        View the SOP Framework <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                <Button variant="link" asChild className="text-xs text-secondary-text">
                    <Link href="/library">Explore industry examples</Link>
                </Button>
                 <div className="pt-4 text-xs text-secondary-text opacity-70">
                    Offline • Excel-based • One-time purchase • Lifetime updates
                </div>
            </div>
        </div>
    </Section>
);


const PhilosophySection = () => (
    <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold tracking-tighter font-headline text-primary">Our Unshakeable Philosophy</h2>
                <p className="text-muted-foreground text-lg">
                   We believe world-class safety and compliance standards shouldn't be reserved for corporations with five-figure software budgets. We exist to break that lock.
                </p>
            </div>
             <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {philosophyCards.map((card, index) => (
                    <ValueCard key={index} icon={card.icon} title={card.title}>
                        {card.children}
                    </ValueCard>
                ))}
             </div>
             <div className="md:hidden">
                 <Carousel
                    plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
                    className="w-full max-w-xs sm:max-w-sm mx-auto"
                >
                  <CarouselContent>
                    {philosophyCards.map((card, index) => (
                      <CarouselItem key={index}>
                        <div className="p-1 h-full">
                           <ValueCard icon={card.icon} title={card.title}>
                                {card.children}
                           </ValueCard>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 bg-primary/80 text-primary-foreground hover:bg-primary/90" />
                  <CarouselNext className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-10 w-10 bg-primary/80 text-primary-foreground hover:bg-primary/90" />
                </Carousel>
             </div>
        </div>
    </section>
);

const ChaosToControlSection = () => (
  <section className="w-full py-16 md:py-24 bg-secondary/30">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 px-0 sm:px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">From High Risk to High Confidence</h2>
        <p className="text-muted-foreground mt-2 text-base md:text-lg">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* Before */}
        <Card className="border-destructive/50 border-2 flex flex-col">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?" is a question of memory, not a provable fact.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire is trained by a B-player, creating another B-player.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>An auditor asks for proof, and you spend days digging through emails.</span></p>
          </CardContent>
        </Card>
        {/* After */}
        <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-5 h-5"/> The New Way: Control</CardTitle>
            <CardDescription>A system of record that ensures excellence every time.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground flex-1">
             <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log #4A."</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires are productive and compliant from day one.</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Produce a complete, verifiable audit trail for any task in seconds.</span></p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
     <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CoreProblemSection />
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
