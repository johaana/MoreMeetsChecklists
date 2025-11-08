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
    buttonText: 'Eliminate Errors'
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    buttonText: 'Build Resilience'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    buttonText: 'Accelerate Onboarding'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const SharedHeroContent = ({activePainPoint}: {activePainPoint: PainPointKey}) => {
    const content = painPoints[activePainPoint];
    return (
        <div className="space-y-4 min-h-[14rem] flex flex-col justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activePainPoint}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-white drop-shadow-md">
                        {content.title}
                    </h1>
                    <p className="text-lg text-white/90 max-w-xl mt-4 drop-shadow-md">
                        {content.description}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const SharedCTA = () => (
     <div className="pt-2">
        <h2 className="text-lg font-semibold text-accent drop-shadow-sm">The Solution: Expert-Crafted Operational Checklists in Instantly Downloadable Excel Packs.</h2>
        <div className="pt-4">
            <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                <Link href="/packs">
                Explore All Packages
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
    </div>
)

const BaseHeroSection = ({ children }: { children: React.ReactNode }) => (
    <section className="relative w-full min-h-[80vh] py-12 flex items-center text-white overflow-hidden">
        <video
            src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30 z-10" />
        <div className="container px-4 md:px-6 relative z-20">
            {children}
        </div>
    </section>
);


// --- Option J: The Fix-Up ---
const OptionJ = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    return (
        <div className="max-w-2xl space-y-6">
            <SharedHeroContent activePainPoint={activePainPoint} />
             <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5">
                <div className="flex w-full">
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
                            "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                            "whitespace-normal leading-tight flex items-center",
                            activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                        )}
                        onClick={() => setActivePainPoint(key)}
                    >
                        <span>{painPoints[key].buttonText}</span>
                    </Button>
                    ))}
                </div>
            </div>
            <SharedCTA />
        </div>
    )
}

// --- New Idea K: Improved Contrast ---
const OptionK = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    return (
        <div className="max-w-2xl space-y-6">
            <SharedHeroContent activePainPoint={activePainPoint} />
             <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5">
                <div className="flex w-full">
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
                            "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                            "whitespace-normal leading-tight flex items-center",
                            activePainPoint === key ? 'text-primary font-semibold' : 'text-white/90 hover:text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.1)]'
                        )}
                        onClick={() => setActivePainPoint(key)}
                    >
                        <span>{painPoints[key].buttonText}</span>
                    </Button>
                    ))}
                </div>
            </div>
            <SharedCTA />
        </div>
    )
}

// --- New Idea L: Pill Glow ---
const OptionL = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    return (
        <div className="max-w-2xl space-y-6">
            <SharedHeroContent activePainPoint={activePainPoint} />
             <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5">
                <div className="flex w-full">
                     <motion.div
                        className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-white rounded-lg [box-shadow:0_0_15px_rgba(255,255,255,0.5)]"
                        initial={false}
                        animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    {painPointKeys.map((key) => (
                    <Button
                        key={key}
                        variant="ghost"
                        className={cn(
                            "relative z-10 flex-1 justify-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                            "whitespace-normal leading-tight flex items-center",
                            activePainPoint === key ? 'text-primary font-bold' : 'text-white font-medium hover:text-white'
                        )}
                        onClick={() => setActivePainPoint(key)}
                    >
                        <span>{painPoints[key].buttonText}</span>
                    </Button>
                    ))}
                </div>
            </div>
            <SharedCTA />
        </div>
    )
}

// --- New Idea M: Contained & Centered ---
const OptionM = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    return (
        <div className="max-w-2xl space-y-6">
            <SharedHeroContent activePainPoint={activePainPoint} />
             <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 max-w-sm mx-auto">
                <div className="flex w-full">
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
                            "relative z-10 flex-1 justify-center text-center text-xs md:text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                            "whitespace-normal leading-tight flex items-center",
                            activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                        )}
                        onClick={() => setActivePainPoint(key)}
                    >
                        <span>{painPoints[key].buttonText}</span>
                    </Button>
                    ))}
                </div>
            </div>
            <div className="text-center"><SharedCTA /></div>
        </div>
    )
}



export default function TempDesignPreviewPage() {
    const options = [
        { title: "Option J: The Fix-Up", component: <OptionJ />},
        { title: "New Idea K: Improved Contrast", component: <OptionK />},
        { title: "New Idea L: Pill Glow", component: <OptionL />},
        { title: "New Idea M: Contained & Centered", component: <OptionM />},
    ];

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. ⚠️</p>
                </div>
                
                <div className="md:hidden">
                    {options.map((option, index) => (
                        <React.Fragment key={index}>
                            <div className="p-4 bg-muted mt-8">
                                <h2 className="text-center font-bold text-lg font-headline text-foreground">{option.title}</h2>
                            </div>
                            <BaseHeroSection>{option.component}</BaseHeroSection>
                        </React.Fragment>
                    ))}
                </div>

                {/* --- Desktop View (Unchanged) --- */}
                <div className="hidden md:block">
                     <BaseHeroSection>
                         <OptionJ />
                     </BaseHeroSection>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
