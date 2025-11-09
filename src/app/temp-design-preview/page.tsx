
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
    mobileButtonText: 'Errors'
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    mobileButtonText: 'Resilience'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
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
    h1Class = 'text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-white drop-shadow-md',
    pClass = 'text-lg text-white/90 max-w-xl mt-4',
    buttonContainerClass = 'bg-white/10 backdrop-blur-sm border border-white/20',
    buttonClass = 'text-white/80 hover:text-white',
    activeButtonClass = 'text-primary font-semibold',
    mobileButtons = false
}) => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const content = painPoints[activePainPoint];

    return (
        <section className="relative w-full h-[70vh] min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
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
                <div className={cn("max-w-2xl space-y-6")}>
                     <div className={cn("space-y-4 min-h-[14rem] flex flex-col justify-center", textClass)}>
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
                     <div className={cn("relative flex flex-col rounded-xl shadow-lg overflow-hidden", buttonContainerClass)}>
                        <div className="flex overflow-x-auto no-scrollbar">
                             <div className="relative flex flex-nowrap p-1.5 w-full min-w-full">
                                <motion.div
                                    className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-white/90 rounded-lg shadow-sm"
                                    initial={false}
                                    animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                                {painPointKeys.map((key) => (
                                <Button
                                    key={key}
                                    variant="ghost"
                                    className={cn(
                                        "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-12 md:h-auto",
                                        activePainPoint === key ? activeButtonClass : buttonClass
                                    )}
                                    onClick={() => setActivePainPoint(key)}
                                >
                                    <span className={cn('leading-tight', activePainPoint === key ? activeButtonClass : buttonClass)}>
                                        {mobileButtons ? painPoints[key].mobileButtonText : painPoints[key].buttonText}
                                    </span>
                                </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pt-2">
                        <h2 className={cn("text-lg font-semibold text-accent", textClass)}>The Solution: Expert-Crafted Operational Checklists in Instantly Downloadable Excel Packs.</h2>
                    </div>
                    <div className="pt-2">
                        <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                            <Link href="/packs">
                            Explore All Packages
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
             <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default function TempDesignPreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. ⚠️</p>
                </div>
                
                {/* --- Mobile Only Preview Section --- */}
                <div className="md:hidden">
                    <div className="p-4 bg-muted">
                        <h2 className="text-center font-bold text-lg font-headline">Option 1: Frosted Glass</h2>
                    </div>
                    <BaseHeroSection overlayClass="bg-gradient-to-t from-black/70 via-black/50 to-black/30 backdrop-blur-sm" mobileButtons />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 2: Subtle Shadow</h2>
                    </div>
                    <BaseHeroSection 
                        overlayClass="bg-gradient-to-t from-black/70 via-black/50 to-black/30" 
                        textClass="[text-shadow:0_2px_8px_rgba(0,0,0,0.8)]"
                        mobileButtons
                    />
                    
                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 3: Glow Effect</h2>
                    </div>
                     <BaseHeroSection 
                        overlayClass="bg-gradient-to-t from-black/70 via-black/50 to-black/30" 
                        textClass="[text-shadow:0_0_10px_rgba(0,0,0,0.7),0_0_20px_rgba(0,0,0,0.5)]" 
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 4: Dark Video</h2>
                    </div>
                    <BaseHeroSection
                        videoClass="[filter:brightness(0.6)]"
                        overlayClass="bg-black/40"
                        textClass="[text-shadow:0_0_15px_rgba(255,255,255,0.3)]"
                        mobileButtons
                    />

                     <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 5: Desktop Gradient</h2>
                    </div>
                    <BaseHeroSection
                        overlayClass="bg-gradient-to-r from-black/80 via-black/60 to-transparent"
                        mobileButtons
                    />
                    
                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option A: Lower Third Compact</h2>
                        <p className="text-center text-sm text-muted-foreground">Places all content in a compact block at the bottom, ideal for scannability.</p>
                    </div>
                    <BaseHeroSection
                        containerClass="flex flex-col justify-end h-full pb-10"
                        overlayClass="bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                        h1Class="text-3xl font-extrabold font-headline tracking-tighter text-white"
                        pClass="text-base text-white/80 max-w-xl mt-2"
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option B: Center Stage</h2>
                        <p className="text-center text-sm text-muted-foreground">A dramatic, centered layout with a strong vignette to focus the eye.</p>
                    </div>
                    <BaseHeroSection
                        containerClass="flex flex-col justify-center h-full items-center text-center"
                        overlayClass="bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.9))]"
                        h1Class="text-4xl font-extrabold font-headline tracking-tighter text-white"
                        pClass="text-lg text-white/90 mt-4"
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option C: Clean & Simple</h2>
                         <p className="text-center text-sm text-muted-foreground">No gradients, just a slightly darkened video with strong text shadow for a modern, minimal feel.</p>
                    </div>
                    <BaseHeroSection
                        videoClass="[filter:brightness(0.8)]"
                        overlayClass="bg-black/30"
                        textClass="[text-shadow:0_2px_12px_rgba(0,0,0,1)]"
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option D: Solid Bar UI</h2>
                         <p className="text-center text-sm text-muted-foreground">A modern UI pattern with content in a solid, semi-transparent bar at the bottom.</p>
                    </div>
                    <BaseHeroSection
                         containerClass="flex flex-col justify-end h-full"
                         overlayClass="bg-gradient-to-t from-black/50 to-transparent"
                    >
                        <div className="bg-background/90 text-primary p-4 rounded-t-2xl shadow-2xl space-y-4">
                            <h1 className="text-3xl font-extrabold font-headline text-primary tracking-tight">Human Memory is Your Biggest Liability.</h1>
                            <p className="text-base text-foreground/80">Our system is your external brain, guiding teams through critical tasks to eliminate costly mistakes.</p>
                            <Button size="lg" asChild className="w-full" variant="accent">
                                <Link href="/packs">
                                    Explore All Packages
                                </Link>
                            </Button>
                        </div>
                    </BaseHeroSection>

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option E: Split Layout</h2>
                         <p className="text-center text-sm text-muted-foreground">A clear separation between the visual and the content, offering maximum readability.</p>
                    </div>
                     <section className="relative w-full h-[70vh] min-h-[600px] flex flex-col text-white overflow-hidden">
                        <div className="relative h-1/2 w-full">
                             <video
                                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            />
                        </div>
                        <div className="h-1/2 bg-background p-4 flex flex-col justify-center text-left">
                            <h1 className="text-3xl font-extrabold font-headline text-primary tracking-tight">Stop Relying on Heroes. Build a Resilient Operation.</h1>
                            <p className="text-base text-foreground/80 mt-2">Codify expertise, ensure continuity, and deliver consistent quality, no matter who is on shift.</p>
                             <Button size="lg" asChild className="w-full mt-4" variant="accent">
                                <Link href="/packs">
                                    Explore All Packages
                                </Link>
                            </Button>
                        </div>
                    </section>

                     <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option F: Card on Video</h2>
                         <p className="text-center text-sm text-muted-foreground">A floating card lifts the content off the video, creating depth and focus.</p>
                    </div>
                     <BaseHeroSection
                        containerClass="flex flex-col justify-center h-full items-center"
                        overlayClass="bg-black/30 backdrop-blur-sm"
                     >
                        <div className="bg-background/80 text-primary p-6 rounded-2xl shadow-2xl text-center max-w-sm">
                             <h1 className="text-3xl font-extrabold font-headline text-primary tracking-tight">Onboard New Hires in Days, Not Months.</h1>
                             <p className="text-base text-foreground/80 mt-2">Turn every new hire into a seasoned pro from day one with our interactive playbooks.</p>
                             <Button size="lg" asChild className="w-full mt-4" variant="accent">
                                <Link href="/packs">
                                    Explore All Packages
                                </Link>
                            </Button>
                        </div>
                     </BaseHeroSection>

                     <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">New Option G: Text-Only Focus</h2>
                         <p className="text-center text-sm text-muted-foreground">Forgoes the interactive buttons for a simpler, more direct headline and call to action.</p>
                    </div>
                     <BaseHeroSection
                        containerClass="flex flex-col justify-center h-full"
                        overlayClass="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                     >
                         <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">Human Memory is Your Biggest Liability.</h1>
                         <p className="text-lg text-white/80 mt-4 max-w-xl">Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.</p>
                         <Button size="lg" asChild className="group text-lg py-7 px-8 mt-6" variant="accent">
                            <Link href="/packs">
                                Explore All Packages
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                     </BaseHeroSection>
                </div>

                {/* --- Desktop View --- */}
                <div className="hidden md:block">
                     <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" />
                </div>
                
            </main>
            <Footer />
        </div>
    );
}

    