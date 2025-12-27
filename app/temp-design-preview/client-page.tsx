
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Frown, Smile, CheckCircle, X } from "lucide-react";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from "@/lib/utils";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-5xl !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const HeroSection = () => (
    <section className="relative w-full flex items-center text-white overflow-hidden min-h-screen">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'center top' }}
        />
        
        <div 
            className="absolute inset-0 z-10" 
            style={{background: 'linear-gradient(90deg, rgba(14, 20, 18, 0.85) 0%, rgba(14, 20, 18, 0.75) 40%, rgba(14, 20, 18, 0.4) 70%, rgba(14, 20, 18, 0.1) 100%)'}}
        />
        
        <div className="container px-4 md:px-6 relative z-20 flex flex-col justify-center min-h-screen py-16">
            <div className="max-w-[640px] space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter font-headline text-white" style={{ lineHeight: 1.1 }}>
                    People forget.
                    <br/>
                    Your business pays.
                </h1>

                <p className="text-secondary-text text-lg leading-relaxed max-w-xl">
                    Memory is not a control system. When work lives in people’s heads, critical tasks get missed — especially during pressure, audits, or staff changes.
                </p>

                <div className="pt-2">
                    <p className="font-semibold text-lg text-primary-text leading-tight">Daily. Weekly. Monthly.</p>
                    <p className="font-semibold text-lg text-primary-text leading-tight">Who does what. How often.</p>
                    <p className="font-semibold text-lg text-primary-text leading-tight">What happens if they don’t.</p>
                </div>
                
                <div className="pt-4 flex flex-col items-start gap-2">
                    <Button size="lg" asChild className="group h-auto" style={{ backgroundColor: '#FACC15', color: '#0E1412', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                        <Link href="/library">
                            See the Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="text-sm text-muted-text">One-time purchase • Offline • Lifetime updates</p>
                </div>
            </div>
        </div>
    </section>
);


const ComplianceSignalSection = () => (
    <div className="bg-alternate-background py-3 border-y border-border">
        <div className="container px-4 md:px-6">
            <p className="text-center text-sm md:text-base font-medium text-authority-green">
                Designed for global compliance — adaptable to ISO, OSHA, HACCP, SOC, and internal audit standards.
            </p>
        </div>
    </div>
);


const HowItBreaksSection = () => {
    const failurePoints = [
        { icon: <X className="w-5 h-5 text-risk-accent" />, title: "A task no one knew was due", description: "A critical compliance check is missed for weeks because the one person who remembered it is on leave." },
        { icon: <X className="w-5 h-5 text-risk-accent" />, title: "A new hire doing it “their way”", description: "A new team member, lacking clear guidance, improvises a safety procedure, creating a massive liability." },
        { icon: <X className="w-5 h-5 text-risk-accent" />, title: "A critical step skipped during a rush", description: "Under pressure, a veteran employee skips a key quality control step they've done a thousand times. The result is a defective batch." },
        { icon: <X className="w-5 h-5 text-risk-accent" />, title: "“We’ve always done it this way”", description: "An outdated process remains in use because it's 'tribal knowledge', exposing the company to modern risks." }
    ];

    return (
        <Section id="how-it-fails" className="bg-background">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="text-center">
                    <SectionHeadline>This is how operations actually fail</SectionHeadline>
                     <p className="max-w-2xl mx-auto mt-4 text-secondary-text md:text-lg">
                        These small, daily misses aren't 'people problems'. They are system failures waiting to become business-critical events.
                    </p>
                </div>
                 <div className="max-w-3xl mx-auto space-y-4">
                     <p className="text-lg text-primary-text font-semibold">MoreMeets Standards™ hard-code operations into a single written framework — so execution does not depend on memory, luck, or “who’s on shift.”</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                    {failurePoints.map((point, index) => (
                        <Card key={index} className="bg-alternate-background border-border">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                                {point.icon}
                                <CardTitle className="text-base text-primary-text">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 pt-0">
                                <p className="text-secondary-text text-sm mb-3">{point.description}</p>
                                <p className="font-semibold text-authority-green text-sm">This is a systems problem. Not a people problem.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <HowItBreaksSection />
    </main>
  );
}
