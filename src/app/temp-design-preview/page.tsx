
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const painPoints = {
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const RefinedHeroSection = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const content = painPoints[activePainPoint];

    return (
        <section className="relative w-full h-[70vh] min-h-[600px] md:min-h-[700px] flex items-center text-white overflow-hidden">
            {/* Video Background */}
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent z-10" />

            {/* Content */}
            <div className="container px-4 md:px-6 relative z-20">
                <div className="max-w-2xl space-y-6">
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
                            <p className="text-lg text-white/90 max-w-xl mt-4">
                                {content.description}
                            </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                     <div className="relative flex flex-col rounded-xl p-1.5 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
                        <motion.div
                            className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(33.33%-10px)] bg-white/90 rounded-lg shadow-sm"
                            initial={false}
                            animate={{ x: `${painPointKeys.indexOf(activePainPoint) * 100}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        <div className="flex">
                            {painPointKeys.map((key) => (
                            <Button
                                key={key}
                                variant="ghost"
                                className="relative z-10 flex-1 justify-center text-sm md:text-base py-2.5 md:py-3 transition-colors duration-300 hover:bg-transparent"
                                onClick={() => setActivePainPoint(key)}
                            >
                                <span className={cn(activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white')}>
                                {key === 'resilience' && 'Build Resilience'}
                                {key === 'error' && 'Eliminate Errors'}
                                {key === 'onboarding' && 'Accelerate Onboarding'}
                                </span>
                            </Button>
                            ))}
                        </div>
                    </div>
                    <div className="pt-2">
                        <h2 className="text-lg font-semibold text-accent drop-shadow-sm">The Solution: Expert-Crafted Operational Checklists in Instantly Downloadable Excel Packs.</h2>
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
                
                <RefinedHeroSection />

            </main>
            <Footer />
        </div>
    );
}
