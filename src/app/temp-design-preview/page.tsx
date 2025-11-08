
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
import { useIsMobile } from '@/hooks/use-mobile';


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

// --- Mobile Hero Component ---
const MobileHero = () => {
  const rotatingWords = [
    "Error-Free Compliance.",
    "Operational Resilience.",
    "Accelerated Onboarding.",
  ];
  const [currentWord, setCurrentWord] = useState(rotatingWords[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord(prev => {
        const currentIndex = rotatingWords.indexOf(prev);
        const nextIndex = (currentIndex + 1) % rotatingWords.length;
        return rotatingWords[nextIndex];
      });
    }, 3000);
    return () => clearInterval(intervalId);
  }, [rotatingWords]);

  return (
    <section className="w-full bg-background text-foreground py-16">
      <div className="container px-4 text-left">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight">
          The Professional Standard for
          <br />
          <span className="text-accent inline-block h-12">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {currentWord}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mt-4">
          For leaders who can't be everywhere, we provide the framework to standardize operational excellence. Our checklists ensure global compliance and deliver auditable results at scale.
        </p>
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-2xl mt-8">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
        <div className="pt-8">
          <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
            <Link href="/packs">
              Explore All Packages
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};


// --- Desktop Hero Component ---
const DesktopHero = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const content = painPoints[activePainPoint];

    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-background">
        <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
                <div className="space-y-4 min-h-[12rem] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                      key={activePainPoint}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline text-primary tracking-tighter">
                          {content.title}
                      </h1>
                      <p className="text-lg text-muted-foreground max-w-xl mt-4">
                          {content.description}
                      </p>
                    </motion.div>
                </AnimatePresence>
                </div>
                <div className="relative flex flex-col rounded-lg p-1.5 bg-secondary/50 border">
                  <motion.div
                      className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(33.33%-10px)] bg-background rounded-md shadow-sm"
                      initial={false}
                      animate={{ x: `${painPointKeys.indexOf(activePainPoint) * 100}%` }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                  <div className="flex">
                      {painPointKeys.map((key) => (
                      <Button
                          key={key}
                          variant="ghost"
                          className="relative z-10 flex-1 justify-center text-base py-4 transition-colors duration-300"
                          onClick={() => setActivePainPoint(key)}
                      >
                          <span className={cn(activePainPoint === key ? 'text-primary font-semibold' : 'text-muted-foreground')}>
                            {key === 'resilience' && 'Build Resilience'}
                            {key === 'error' && 'Eliminate Errors'}
                            {key === 'onboarding' && 'Accelerate Onboarding'}
                          </span>
                      </Button>
                      ))}
                  </div>
                </div>
                 <div className="pt-4">
                     <h2 className="text-md font-semibold text-accent">The Solution: Expert-Crafted Operational Checklists in Instantly Downloadable Excel Packs.</h2>
                </div>
                <div className="pt-4">
                <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
                    <Link href="/packs">
                    Explore All Packages
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
                </div>
            </div>
            <div className="relative h-64 md:h-96 lg:h-full w-full rounded-2xl overflow-hidden shadow-2xl">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            </div>
        </div>
        </section>
    );
};


// --- Main Unified Hero Section ---
const UnifiedHeroSection = () => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a consistent placeholder during SSR and initial client render to avoid hydration mismatch
    return <section className="w-full py-16 bg-background h-[60vh] md:h-auto"></section>;
  }

  return isMobile ? <MobileHero /> : <DesktopHero />;
};


export default function TempDesignPreviewPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. ⚠️</p>
                </div>
                
                <UnifiedHeroSection />

            </main>
            <Footer />
        </div>
    );
}
