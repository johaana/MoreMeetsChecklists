
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const painPoints = {
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
    buttonText: 'Eliminate Errors',
    mobileButtonText: 'Errors'
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    buttonText: 'Build Resilience',
    mobileButtonText: 'Resilience'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    buttonText: 'Accelerate Onboarding',
    mobileButtonText: 'Onboarding'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const BaseHeroSection = ({ 
    overlayClass = '', 
    textClass = '', 
    containerClass = '',
    videoClass = '',
    h1Class = 'text-3xl md:text-5xl font-extrabold font-headline tracking-tight text-white drop-shadow-md',
    pClass = 'text-base text-white/90 max-w-xl mt-2',
    buttonContainerClass = 'bg-white/10 backdrop-blur-sm border border-white/20',
    buttonClass = 'text-white/80 hover:text-white',
    activeButtonClass = 'text-primary font-semibold',
    isMobile,
    children
}: {
    overlayClass?: string;
    textClass?: string;
    containerClass?: string;
    videoClass?: string;
    h1Class?: string;
    pClass?: string;
    buttonContainerClass?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    isMobile: boolean;
    children?: React.ReactNode;
}) => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const content = painPoints[activePainPoint];

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className={cn("absolute inset-0 w-full h-full object-cover z-0", videoClass)}
            />
            <div className={cn("absolute inset-0 z-10", overlayClass)} />

            <div className={cn("container px-4 md:px-6 relative z-20", containerClass)}>
                 {children || (
                    <div className={cn("max-w-xl space-y-4")}>
                        <div className={cn("space-y-4 min-h-[12rem] flex flex-col justify-center", textClass)}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                key={activePainPoint}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                >
                                <h1 className={cn(h1Class)}>
                                    {content.title}
                                </h1>
                                <p className={cn(pClass)}>
                                    {content.description}
                                </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div className={cn("relative flex flex-col rounded-xl shadow-lg overflow-hidden p-1.5", buttonContainerClass)}>
                            <div className="flex w-full">
                                <motion.div
                                    className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-white/90 rounded-lg shadow-sm"
                                    initial={false}
                                    animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + 2px * ${painPointKeys.indexOf(activePainPoint)})` }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                                {painPointKeys.map((key) => (
                                <Button
                                    key={key}
                                    variant="ghost"
                                    className={cn(
                                        "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-1 h-12 md:h-14",
                                        "whitespace-normal leading-tight flex items-center text-center",
                                        activePainPoint === key ? activeButtonClass : buttonClass
                                    )}
                                    onClick={() => setActivePainPoint(key)}
                                >
                                    <span>
                                        {isMobile ? painPoints[key].mobileButtonText : painPoints[key].buttonText}
                                    </span>
                                </Button>
                                ))}
                            </div>
                        </div>
                        <div className="pt-2">
                            <h2 className={cn("text-md font-semibold text-accent", textClass)}>The Solution: Expert-Crafted Operational Checklists in Instantly Downloadable Excel Packs.</h2>
                        </div>
                        <div className="pt-2">
                            <Button size="lg" asChild className="group text-md py-6 px-8 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                <Link href="/packs">
                                Explore All Packages
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

const TempPageOption = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <>
        <div className="p-4 bg-muted mt-8">
            <h2 className="text-center font-bold text-lg font-headline">{title}</h2>
            <p className="text-center text-sm text-muted-foreground">{description}</p>
        </div>
        {children}
    </>
)

export default function TempDesignPreviewPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page for mobile variations. ⚠️</p>
                </div>
                
                <div className="md:hidden">

                    <TempPageOption title="A. Cinematic Vignette" description="A radial gradient focuses light on the center, naturally drawing the eye to the text.">
                        <BaseHeroSection 
                            overlayClass="bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.7))]" 
                            textClass="[text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="B. Elegant Glow" description="A darker video with a subtle text glow for a sharp, premium feel.">
                        <BaseHeroSection 
                            videoClass="[filter:brightness(0.7)]"
                            overlayClass="bg-black/40"
                            textClass="[text-shadow:0_0_15px_rgba(255,255,255,0.4)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="C. Clean Gradient" description="A classic bottom-up linear gradient that provides a solid, dark base for text.">
                        <BaseHeroSection 
                            overlayClass="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                            textClass="[text-shadow:0_2px_4px_rgba(0,0,0,0.7)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="D. Frosted Glass (Light)" description="A light blur effect on a dark overlay, creating a modern, semi-transparent base for text.">
                        <BaseHeroSection 
                            overlayClass="bg-black/30 backdrop-blur-sm"
                            textClass="[text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="E. Contained Plaque" description="Text is placed on a semi-transparent 'plaque' for guaranteed readability with a modern look.">
                         <BaseHeroSection isMobile={isMobile}>
                            <div className="max-w-xl space-y-4 bg-black/50 p-4 rounded-xl">
                               <div className="space-y-4 min-h-[12rem] flex flex-col justify-center text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                                  <h1 className="text-3xl font-extrabold font-headline tracking-tight">Human Memory is Your Biggest Liability. Install a Firewall Against Error.</h1>
                                  <p className="text-base text-white/90 max-w-xl">Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.</p>
                                </div>
                            </div>
                         </BaseHeroSection>
                    </TempPageOption>

                    <TempPageOption title="F. Clean & Bright" description="A brighter video with a stronger, crisper text shadow for a high-energy, readable look.">
                        <BaseHeroSection 
                            videoClass="[filter:brightness(1.1)]"
                            overlayClass="bg-black/20"
                            textClass="[text-shadow:0_2px_6px_rgba(0,0,0,0.8)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="G. Minimalist Lower Third" description="Broadcast-style design with smaller text placed in the lower-left, creating an open, airy feel.">
                        <BaseHeroSection isMobile={isMobile} containerClass="flex flex-col justify-end h-full pb-16">
                           <div className="max-w-xl space-y-4">
                                <div className="space-y-2 text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                                  <h1 className="text-2xl font-extrabold font-headline tracking-tight">Human Memory is Your Biggest Liability.</h1>
                                  <p className="text-sm text-white/90 max-w-xl">Our system guides your team through critical tasks with automated checks to eliminate costly mistakes.</p>
                                </div>
                            </div>
                        </BaseHeroSection>
                    </TempPageOption>

                    <TempPageOption title="H. Solid Color Block" description="A solid color block at the bottom provides a stable, high-contrast area for text.">
                         <BaseHeroSection isMobile={isMobile} containerClass="relative">
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-background text-foreground rounded-t-2xl">
                                <div className="space-y-2">
                                  <h1 className="text-2xl font-extrabold font-headline tracking-tight text-primary">Human Memory is Your Biggest Liability.</h1>
                                  <p className="text-sm text-muted-foreground max-w-xl">Our system is their external brain, guiding them through critical tasks with automated checks.</p>
                                </div>
                            </div>
                         </BaseHeroSection>
                    </TempPageOption>

                    <TempPageOption title="I. Angled Gradient" description="A dynamic, angled gradient for a more modern and energetic feel.">
                        <BaseHeroSection 
                            overlayClass="bg-gradient-to-tr from-black/70 via-transparent to-transparent"
                            textClass="[text-shadow:0_2px_5px_rgba(0,0,0,0.7)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="J. Hard Shadow on Bright" description="A crisp, hard text shadow on a brighter video for maximum punch and clarity.">
                         <BaseHeroSection 
                            videoClass="[filter:brightness(1.2)]"
                            overlayClass="bg-black/10"
                            h1Class="text-3xl font-extrabold font-headline tracking-tight text-white [text-shadow:0_2px_3px_rgba(0,0,0,0.5)]"
                            pClass="text-base text-white/90 max-w-xl mt-2 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]"
                            isMobile={isMobile}
                        />
                    </TempPageOption>

                    <TempPageOption title="K. High Contrast" description="A simple, strong dark overlay for no-compromise readability.">
                        <BaseHeroSection 
                           overlayClass="bg-black/60"
                           isMobile={isMobile}
                        />
                    </TempPageOption>

                     <TempPageOption title="L. Centered Text Block" description="A centered, semi-transparent block for a focused, formal presentation.">
                         <BaseHeroSection isMobile={isMobile} containerClass="flex items-center justify-center">
                            <div className="max-w-xl space-y-4 bg-black/60 backdrop-blur-sm p-6 rounded-2xl text-center">
                               <div className="space-y-4 min-h-[12rem] flex flex-col justify-center text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                                  <h1 className="text-3xl font-extrabold font-headline tracking-tight">Human Memory is Your Biggest Liability.</h1>
                                  <p className="text-base text-white/90 max-w-xl">Our system guides your team through critical tasks to eliminate costly mistakes.</p>
                                </div>
                            </div>
                         </BaseHeroSection>
                    </TempPageOption>

                </div>

                <div className="hidden md:block">
                     <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" isMobile={isMobile} />
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
