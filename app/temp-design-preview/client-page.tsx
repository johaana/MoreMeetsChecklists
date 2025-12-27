
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

const SectionBody = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <div className={cn("max-w-3xl mx-auto text-secondary-text md:text-lg lg:text-xl", className)}>
        {children}
    </div>
);


const HeroSection = () => (
    <section className="relative w-full flex items-center text-white overflow-hidden min-h-[100svh] pt-[clamp(96px,10vh,140px)] pb-[clamp(64px,8vh,120px)]">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'top' }}
        />
        
        <div 
            className="absolute inset-0 z-10" 
            style={{background: 'linear-gradient(to right, rgba(14, 20, 18, 0.85) 60%, rgba(14, 20, 18, 0.4))'}}
        />
        
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[640px] space-y-6">
                <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tighter font-headline text-white" style={{ lineHeight: 1.05 }}>
                    People forget.
                    <br/>
                    Your business pays.
                 </h1>
                 <div className="space-y-6">
                    <p className="font-normal text-lg text-[#D1D5DB]" style={{ lineHeight: 1.6 }}>
                      Memory is not a control system. When operations live in people’s heads, tasks get missed, audits fail, and standards collapse — especially during growth, turnover, or inspections.
                    </p>
                    <p className="font-medium text-[17px] text-[#E5E7EB]">
                      MoreMeets turns tribal knowledge into enforceable operational standards — so execution does not depend on memory, luck, or “who’s on shift.”
                    </p>
                    
                    <div className="space-y-2 pt-2">
                        <ul className="space-y-1.5">
                            <li className="flex items-center gap-2 text-base font-normal text-[#E5E7EB]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span><span>Staff forget steps</span></li>
                            <li className="flex items-center gap-2 text-base font-normal text-[#E5E7EB]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span><span>Training doesn’t stick</span></li>
                            <li className="flex items-center gap-2 text-base font-normal text-[#E5E7EB]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span><span>New hires improvise</span></li>
                            <li className="flex items-center gap-2 text-base font-normal text-[#E5E7EB]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span><span>Managers chase follow-ups</span></li>
                            <li className="flex items-center gap-2 text-base font-normal text-[#E5E7EB]"><span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0"></span><span>Compliance lives in files, not behavior</span></li>
                        </ul>
                        <p className="font-semibold text-base text-[#FACC15] pt-2">All of this is operational debt.</p>
                    </div>
                     <p className="font-bold text-xl text-white pt-2">One system. One source of truth. Every task, every time.</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">
                    <div>
                        <Button size="lg" asChild className="group h-auto" style={{ backgroundColor: '#FACC15', color: '#0E1412', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                            <Link href="/library">View the Operational Standards</Link>
                        </Button>
                         <p className="text-xs text-[#9CA3AF] mt-2">Built for regulated, audited, multi-location operations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const ComplianceSignalSection = () => (
    <div className="bg-alternate-background py-3 border-y border-border">
        <div className="container px-4 md:px-6">
            <p className="text-center text-xs text-muted-text">
                Designed for global compliance — adaptable to ISO, OSHA, HACCP, SOC, and internal audit standards.
            </p>
        </div>
    </div>
);


const HowOperationsFailSection = () => {
    const failurePoints = [
        { icon: <X className="w-6 h-6 text-risk-accent" />, title: "A task no one knew was due", description: "A critical compliance check is missed for weeks because the one person who remembered it is on leave." },
        { icon: <X className="w-6 h-6 text-risk-accent" />, title: "A new hire doing it “their way”", description: "A new team member, lacking clear guidance, improvises a safety procedure, creating a massive liability." },
        { icon: <X className="w-6 h-6 text-risk-accent" />, title: "A critical step skipped during a rush", description: "Under pressure, a veteran employee skips a key quality control step they've done a thousand times. The result is a defective batch." },
        { icon: <X className="w-6 h-6 text-risk-accent" />, title: "“We’ve always done it this way”", description: "An outdated process remains in use because it's 'tribal knowledge', exposing the company to modern risks." }
    ];

    return (
        <Section id="how-it-fails" className="bg-background">
            <div className="container px-4 md:px-6 space-y-12">
                <div className="text-center">
                    <p className="font-semibold text-lg md:text-xl text-primary-text/90 mb-6">MoreMeets Standards™ hard-code operations into a single written framework — so execution does not depend on memory, luck, or “who’s on shift.”</p>
                    <SectionHeadline>This is how operations actually fail</SectionHeadline>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
                    {failurePoints.map((point, index) => (
                        <Card key={index} className="bg-alternate-background border-border">
                            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                                {point.icon}
                                <CardTitle className="text-lg text-primary-text">{point.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-secondary-text mb-3">{point.description}</p>
                                <p className="font-semibold text-authority-green text-sm">This is a systems problem. Not a people problem.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
};

const ChaosToControlSection = () => (
  <Section className="w-full py-16 md:py-24 bg-alternate-background">
    <div className="container px-4 md:px-6">
      <div className="text-center max-w-3xl mx-auto mb-12 px-0 sm:px-4">
        <SectionHeadline>From High Risk to High Confidence</SectionHeadline>
        <SectionBody className="mt-6">We transform your operations from a fragile, person-dependent process into a reliable, verifiable system.</SectionBody>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
        {/* Before */}
        <Card className="border-risk-accent/50 border-2 flex flex-col bg-background/5">
          <CardHeader>
            <CardTitle className="text-risk-accent flex items-center gap-2"><Frown className="w-5 h-5"/> The Old Way: Chaos</CardTitle>
            <CardDescription className="text-muted-text">Relying on human memory, verbal instructions, and hope.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-secondary-text flex-1">
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>"Did anyone check the fire exits?" is a question of memory, not a provable fact.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>A new hire is trained by a B-player, creating another B-player.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-risk-accent shrink-0 mt-1"/><span>An auditor asks for proof, and you spend days digging through emails.</span></p>
          </CardContent>
        </Card>
        {/* After */}
        <Card className="border-authority-green/50 border-2 bg-background/10 shadow-lg flex flex-col">
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


const FinalCTASection = () => (
     <Section className="bg-alternate-background">
        <div className="container px-4 md:px-6 text-center space-y-6">
            <SectionHeadline>Make audit-readiness the default.</SectionHeadline>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                 <Button size="lg" asChild className="group text-base h-12 px-8 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90">
                    <Link href="/library">Get Control of Operations <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                </Button>
            </div>
        </div>
    </Section>
);


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ComplianceSignalSection />
      <HowOperationsFailSection />
      <ChaosToControlSection />
      <FinalCTASection />
    </main>
  );
}
