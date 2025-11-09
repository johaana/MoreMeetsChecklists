
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
    buttonText: 'Errors'
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    buttonText: 'Resilience'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    buttonText: 'Onboarding'
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
    mobileButtons = false,
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
    mobileButtons?: boolean;
    children?: React.ReactNode;
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
                 {children || (
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
                                        <span className={cn('leading-tight whitespace-nowrap', activePainPoint === key ? activeButtonClass : buttonClass)}>
                                            {painPoints[key].buttonText}
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
                )}
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
                    <p>⚠️ This is a temporary design preview page for mobile variations. ⚠️</p>
                </div>
                
                {/* --- Mobile Only Preview Section --- */}
                <div className="md:hidden">
                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 1: Frosted Glass</h2>
                         <p className="text-center text-sm text-muted-foreground">A blurred overlay separates text from the video, ensuring readability.</p>
                    </div>
                    <BaseHeroSection 
                        overlayClass="bg-black/30 backdrop-blur-sm"
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 2: Subtle Text Shadow</h2>
                        <p className="text-center text-sm text-muted-foreground">A classic, clean look with a soft shadow to lift text from the background.</p>
                    </div>
                    <BaseHeroSection 
                        overlayClass="bg-black/40"
                        textClass="[text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
                        mobileButtons
                    />
                    
                     <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 3: Text Box Container</h2>
                        <p className="text-center text-sm text-muted-foreground">Guarantees readability by placing text in a semi-transparent container.</p>
                    </div>
                     <BaseHeroSection 
                        overlayClass="bg-black/50" 
                    >
                         <div className="max-w-2xl space-y-6 bg-black/40 p-4 rounded-xl">
                            <div className="space-y-4 min-h-[14rem] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                    key={'textbox'}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    >
                                    <h1 className="text-4xl font-extrabold font-headline tracking-tighter text-white">
                                        {painPoints['error'].title}
                                    </h1>
                                    <p className="text-lg text-white/90 max-w-xl mt-4">
                                        {painPoints['error'].description}
                                    </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                         </div>
                    </BaseHeroSection>

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 4: Subtle Glow Effect</h2>
                        <p className="text-center text-sm text-muted-foreground">A soft glow makes text pop against a darker background.</p>
                    </div>
                     <BaseHeroSection 
                        overlayClass="bg-black/60" 
                        textClass="[text-shadow:0_0_15px_rgba(255,255,255,0.25)]"
                        mobileButtons
                    />

                    <div className="p-4 bg-muted mt-8">
                        <h2 className="text-center font-bold text-lg font-headline">Option 5: Bright Video + Hard Shadow</h2>
                         <p className="text-center text-sm text-muted-foreground">A high-contrast style using a brighter video and a sharper shadow.</p>
                    </div>
                    <BaseHeroSection
                        videoClass="[filter:brightness(1.1)]"
                        overlayClass="bg-black/20"
                        textClass="[text-shadow:0_2px_4px_rgba(0,0,0,0.6)]"
                        mobileButtons
                    />
                </div>

                {/* --- Desktop View (for context) --- */}
                <div className="hidden md:block">
                     <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" />
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
