
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown, Smile, CheckCircle } from "lucide-react";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tighter font-headline sm:text-4xl md:text-5xl !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const SectionBody = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("max-w-3xl mx-auto text-secondary-text md:text-lg lg:text-xl", className)}>
        {children}
    </div>
);

const HeroSection = () => (
    <section className="relative w-full flex items-center text-white overflow-hidden min-h-[100svh] max-h-[100svh] pt-[clamp(96px,10vh,140px)] pb-[clamp(64px,8vh,120px)]">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'top' }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/80 to-transparent z-10" />
        
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[680px] space-y-4">
                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter font-headline" style={{ lineHeight: 1.1 }}>
                    When people forget,
                    <br/>
                    <span className="text-authority-green">operations fail.</span>
                 </h1>
                 <div className="max-w-2xl text-secondary-text text-lg md:text-xl !leading-relaxed space-y-4">
                    <p>When work lives in people’s heads, things get missed.</p>
                     <div className="space-y-1">
                        <p className="font-semibold text-primary-text">MoreMeets Standards™</p>
                        <p>turn critical work into written, repeatable execution.</p>
                    </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start sm:items-center">
                    <div>
                        <Button size="lg" asChild className="text-base h-12 px-8 rounded-lg bg-high-contrast-green text-accent-foreground hover:bg-high-contrast-green/90 font-semibold">
                            <Link href="/library">View the Standards</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </section>
);


const WhatItIsSection = () => (
    <Section id="what-it-is" className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-12">
            <div className="max-w-3xl mx-auto">
                <SectionHeadline>This is not a checklist pack. It’s an operational system.</SectionHeadline>
                <SectionBody className="mt-6 space-y-6">
                    <div>Most teams fail not because they don’t work hard — but because critical work lives in people’s heads.</div>
                    <div>MoreMeets Standards™ converts expert knowledge into a clear, repeatable system so nothing important is missed, forgotten, or improvised.</div>
                </SectionBody>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto text-left items-center">
                <div className="space-y-4 rounded-xl border border-border bg-background/50 p-6">
                    <h3 className="font-bold text-xl text-primary-text">What You Receive</h3>
                    <ul className="space-y-3">
                        {[
                            "Industry-specific SOP packs",
                            "Role-based operational checklists",
                            "Daily, weekly, monthly task structures",
                            "Clearly defined responsibilities",
                            "Built-in frequencies and escalation logic",
                            "Trainer notes explaining why each step matters"
                        ].map(item => (
                             <li key={item} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-authority-green shrink-0 mt-1" />
                                <span className="text-secondary-text">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="rounded-xl border-4 border-border/10 bg-background/5 p-1.5 shadow-2xl backdrop-blur-sm">
                     <img
                        src='https://i.postimg.cc/7LLnXzpt/Screenshot-2025-12-26-221106.png'
                        alt="MoreMeets Excel Checklist System"
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </Section>
);

const GuidanceSection = () => (
    <Section>
        <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                    <SectionHeadline className="text-left">With built-in guidance, so anyone can execute like an expert.</SectionHeadline>
                    <div className="space-y-4 text-secondary-text text-lg max-w-xl">
                        <p>Our standards include "Trainer Notes" that explain the *why* behind critical tasks. This turns a simple checklist into a powerful, on-the-job training tool.</p>
                        <p className="font-semibold text-authority-green">Your team doesn't just follow instructions; they understand the consequences, building a culture of ownership and safety.</p>
                    </div>
                </div>
                <div className="rounded-xl border-4 border-border/10 bg-background/5 p-1.5 shadow-2xl backdrop-blur-sm">
                     <img
                        src='https://i.postimg.cc/43VBF0sT/Screenshot-2025-12-27-023236.png'
                        alt="MoreMeets Trainer Notes for team guidance"
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </Section>
);

const ChaosToControlSection = () => (
  <Section className="w-full py-16 md:py-24 bg-alternate-background">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 px-0 sm:px-4">
        <SectionHeadline>From High Risk to High Confidence</SectionHeadline>
        <SectionBody className="mt-6">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</SectionBody>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* Before */}
        <Card className="border-destructive/50 border-2 flex flex-col bg-background/50">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription className="text-muted-text">Relying on human memory, verbal instructions, and hope.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-secondary-text flex-1">
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?" is a question of memory, not a provable fact.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire is trained by a B-player, creating another B-player.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>An auditor asks for proof, and you spend days digging through emails.</span></p>
          </CardContent>
        </Card>
        {/* After */}
        <Card className="border-authority-green/50 border-2 bg-background/80 shadow-lg flex flex-col">
          <CardHeader>
            <CardTitle className="text-authority-green flex items-center gap-2"><Smile className="w-5 h-5"/> The New Way: Control</CardTitle>
            <CardDescription className="text-muted-text">A system of record that ensures excellence every time.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-primary-text flex-1">
             <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log #4A."</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Your best performer's process is now the standard training for everyone.</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-authority-green shrink-0 mt-1"/><span>Produce a complete, verifiable audit trail for any task in seconds.</span></p>
          </CardContent>
        </Card>
      </div>
    </div>
  </Section>
);


const PrivacySection = () => (
    <Section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
                <Card className="p-6 md:p-8 bg-alternate-background border-border shadow-lg">
                     <h3 className="font-bold text-lg text-authority-green mb-4">Your Data Is Your Property. Period.</h3>
                    <div className="space-y-4 text-secondary-text text-base md:text-lg">
                        <p>MoreMeets does not track or monitor execution digitally.</p>
                        <p className="font-semibold text-primary-text">We never have access to your operational information.</p>
                        <p>Our framework is offline by design, providing a standardised structure that makes evidence possible, consistent, and audit-acceptable—without compromising your privacy.</p>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
);

const FinalCTASection = () => (
     <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Make audit-readiness the default.</SectionHeadline>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" asChild className="text-base h-12 px-8 rounded-lg bg-high-contrast-green text-accent-foreground font-semibold hover:bg-high-contrast-green/90">
                    <Link href="/library">Get the Standards</Link>
                </Button>
                <Button size="lg" asChild variant="link" className="text-base text-secondary-text hover:text-primary-text">
                    <Link href="#what-it-is">See what’s included →</Link>
                </Button>
            </div>
        </div>
    </Section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <WhatItIsSection />
      <GuidanceSection />
      <ChaosToControlSection />
      <PrivacySection />
      <FinalCTASection />
    </main>
  );
}
