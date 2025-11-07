
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const painPoints = {
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    image: 'https://i.postimg.cc/zfYc0r5h/business-people-looking-camera-with-arms-crossed-13339-169896.jpg'
  },
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
    image: 'https://i.postimg.cc/YqqkzQ8H/colleagues-safety-equipment-work.jpg'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    image: 'https://i.postimg.cc/K812dFdJ/people-creating-new-project.jpg'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys = Object.keys(painPoints) as PainPointKey[];

// --- Idea 1: Sliding Pill ---
const SlidingPillHero = () => {
  const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('resilience');
  const activeIndex = painPointKeys.indexOf(activePainPoint);
  const content = painPoints[activePainPoint];

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight h-24">
              {content.title}
            </h2>
            <div className="relative flex flex-col gap-1 rounded-lg p-1 bg-muted">
              <motion.div
                className="absolute top-1 left-1 bottom-1 w-[calc(100%-8px)] bg-background rounded-md shadow-sm"
                animate={{ y: `${activeIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              {painPointKeys.map((key) => (
                <Button
                  key={key}
                  variant="ghost"
                  className="relative z-10 justify-center text-base py-6 transition-colors duration-300"
                  onClick={() => setActivePainPoint(key)}
                >
                  <span className={cn(activePainPoint === key ? 'text-primary' : 'text-muted-foreground')}>
                    {key === 'resilience' && 'Build Resilience'}
                    {key === 'error' && 'Eliminate Errors'}
                    {key === 'onboarding' && 'Accelerate Onboarding'}
                  </span>
                </Button>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <AnimatePresence>
                <motion.div
                    key={content.image}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={content.image}
                        alt={content.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Idea 2: Card Flip ---
const CardFlipHero = () => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('resilience');
    const content = painPoints[activePainPoint];
    const [isFlipping, setIsFlipping] = useState(false);

    const handleClick = (key: PainPointKey) => {
        if (key === activePainPoint || isFlipping) return;
        setIsFlipping(true);
        setTimeout(() => {
            setActivePainPoint(key);
            setIsFlipping(false);
        }, 300);
    };

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                 <div className="h-24" style={{ perspective: '1000px' }}>
                    <AnimatePresence>
                         <motion.div
                            key={activePainPoint}
                            initial={{ rotateX: 90, opacity: 0 }}
                            animate={{ rotateX: 0, opacity: 1 }}
                            exit={{ rotateX: -90, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                         >
                            <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">
                                {content.title}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                {painPointKeys.map((key) => (
                    <Button
                    key={key}
                    size="lg"
                    variant={activePainPoint === key ? 'default' : 'outline'}
                    className="justify-center"
                    onClick={() => handleClick(key)}
                    >
                    {key === 'resilience' && 'Build Resilience'}
                    {key === 'error' && 'Eliminate Errors'}
                    {key === 'onboarding' && 'Accelerate Onboarding'}
                    </Button>
                ))}
                </div>
            </div>
            <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
                 <AnimatePresence>
                    <motion.div
                        key={content.image}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={content.image}
                            alt={content.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Idea 3: Rotating Text Headline ---
const RotatingTextHero = () => {
    const rotatingWords = [
        "Operational Resilience.",
        "Error-Free Compliance.",
        "Accelerated Onboarding.",
    ];
    const [currentWord, setCurrentWord] = useState(rotatingWords[0]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const intervalId = setInterval(() => {
            setCurrentWord(prev => {
                const currentIndex = rotatingWords.indexOf(prev);
                const nextIndex = (currentIndex + 1) % rotatingWords.length;
                return rotatingWords[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);


  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight h-24">
                    The Professional Standard for
                    <br />
                    <AnimatePresence mode="wait">
                         <motion.span
                            key={currentWord}
                            className="text-accent inline-block"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                           {isClient ? currentWord : rotatingWords[0]}
                        </motion.span>
                    </AnimatePresence>
                </h2>
                <p className="text-lg text-muted-foreground">
                    Our expert-built SOP checklists transform your operations from fragile processes into reliable, auditable systems.
                </p>
          </div>
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
                src={painPoints.resilience.image}
                alt="Professional team"
                fill
                className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default function TempDesignClientPage() {
    return (
        <main className="flex-1 divide-y-2 divide-dashed">
             <div className="py-8">
                <h2 className="text-center text-xl font-headline mb-2">Idea 1: Sliding Pill</h2>
                <SlidingPillHero />
            </div>
            <div className="py-8">
                <h2 className="text-center text-xl font-headline mb-2">Idea 2: Card Flip</h2>
                <CardFlipHero />
            </div>
            <div className="py-8">
                <h2 className="text-center text-xl font-headline mb-2">Idea 3: Rotating Headline</h2>
                <RotatingTextHero />
            </div>
        </main>
    );
}
