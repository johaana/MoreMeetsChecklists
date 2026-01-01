
'use client';

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';
import { cn } from '@/app/lib/utils';
import { motion, AnimatePresence } from "framer-motion";

const painPoints = {
  error: {
      title: `"World-class compliance used to cost a fortune. We fixed that."`,
      description: "Achieve world-class compliance without the enterprise price tag. Our audit-ready, globally-compliant SOPs are available for instant download—no subscriptions, no hidden fees. We believe operational excellence is a right, not a luxury.",
      buttonText: 'Global Compliance',
      mobileButtonText: 'Compliance'
  },
  resilience: {
      title: `"Stop losing knowledge every time someone quits."`,
      description: 'Turn people-dependent processes into a permanent, scalable system.',
      buttonText: 'Build Resilience',
      mobileButtonText: 'Resilience'
  },
  onboarding: {
      title: `"Training shouldn’t depend on who’s available that day."`,
      description: 'Our digital playbooks onboard new hires faster — no babysitting required.',
      buttonText: 'Onboard Faster',
      mobileButtonText: 'Train'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

export const HeroSection = () => {
    const [activePainPoint, setActivePainPoint] = React.useState<PainPointKey>('error');
    
    React.useEffect(() => {
        const interval = setInterval(() => {
            setActivePainPoint(prev => {
                const currentIndex = painPointKeys.indexOf(prev);
                const nextIndex = (currentIndex + 1) % painPointKeys.length;
                return painPointKeys[nextIndex];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    
    const content = painPoints[activePainPoint];

    return (
        <section className="relative w-full h-screen min-h-[700px] flex text-white overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 slow-zoom-video"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/60 to-background/30 md:bg-gradient-to-r md:from-background/80 md:via-background/60 md:to-transparent z-10" />
            
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/70 via-background/40 to-transparent z-10 md:hidden" />

            <div className={cn("container px-4 md:px-6 relative z-20 w-full h-full flex flex-col justify-end pb-12 md:justify-center md:pb-0")}>
              
              {/* Desktop View */}
              <div className="hidden md:block max-w-2xl">
                <div className="space-y-4 min-h-[20rem] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={activePainPoint}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-primary-foreground">
                            {content.title}
                        </h1>
                        <p className="text-lg text-primary-foreground/90 max-w-xl mt-4">
                            {content.description}
                        </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
                  <div className="relative flex flex-col rounded-xl bg-background/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 mt-6 max-w-lg">
                    <div className="flex w-full">
                          <motion.div
                            className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-background/90 rounded-lg shadow-sm"
                            initial={false}
                            animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                        {painPointKeys.map((key) => (
                        <Button
                            key={key}
                            variant="ghost"
                            className={cn(
                                "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                                "whitespace-normal leading-tight flex items-center text-center",
                                activePainPoint === key ? 'text-primary font-semibold' : 'text-primary-foreground/80 hover:text-primary-foreground'
                            )}
                            onClick={() => setActivePainPoint(key as PainPointKey)}
                        >
                            <span>{painPoints[key as PainPointKey].buttonText}</span>
                        </Button>
                        ))}
                    </div>
                </div>
                <div className="pt-6">
                    <h2 className="text-lg font-semibold text-accent">MoreMeets: Your Playbook for Operational Excellence.</h2>
                </div>
                <div className="pt-4">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/library">
                        Explore The SOP Library
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
              </div>

              {/* Mobile View */}
              <div className="md:hidden text-left items-start flex flex-col relative z-10">
                 <div className="w-full max-w-xl space-y-6 relative z-10">
                    <div className="min-h-[14rem] flex items-end">
                       <AnimatePresence mode="wait">
                            <motion.div
                            key={activePainPoint}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                            >
                                <h1 className="text-3xl font-extrabold font-headline tracking-tighter text-primary-foreground">
                                    {content.title}
                                </h1>
                                <p className="text-base text-primary-foreground/90 max-w-xl mt-3">
                                    {content.description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={cn("relative flex flex-col rounded-xl bg-background/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 w-full")}>
                        <div className="flex w-full">
                            <motion.div
                                className="absolute top-1.5 left-1.5 bottom-1.5 w-1/3 bg-background/90 rounded-lg shadow-sm"
                                initial={false}
                                animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 2}px)` }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                            {painPointKeys.map((key) => (
                            <Button
                                key={key}
                                variant="ghost"
                                className={cn(
                                    "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-12",
                                    "whitespace-normal leading-tight flex items-center text-center",
                                    activePainPoint === key ? 'text-primary font-semibold' : 'text-primary-foreground/80 hover:text-primary-foreground'
                                )}
                                onClick={() => setActivePainPoint(key as PainPointKey)}
                            >
                                <span>{painPoints[key as PainPointKey].mobileButtonText}</span>
                            </Button>
                            ))}
                        </div>
                    </div>
                    <div className="pt-2">
                        <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg w-full" variant="accent">
                            <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
              </div>
            </div>
        </section>
    );
};
