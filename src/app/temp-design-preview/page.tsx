
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const painPoints = {
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
  },
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
  }
};

type PainPointKey = keyof typeof painPoints;

// --- Desktop Hero Section (For Comparison) ---
const InteractiveHeroSection = () => {
  const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('resilience');
  const content = painPoints[activePainPoint];

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={content.image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
             <Image
                src="https://i.postimg.cc/DmmdFvSV/The-Oberoi-Udaivilas-Hotel-Udaipur.jpg"
                alt={content.title}
                fill
                className="object-cover"
                priority
              />
          </motion.div>
        </AnimatePresence>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePainPoint}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline drop-shadow-lg">
                {content.title}
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                {content.description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4">
            {(Object.keys(painPoints) as PainPointKey[]).map((key) => (
              <Button
                key={key}
                variant={activePainPoint === key ? 'accent' : 'outline'}
                className={cn(
                  "bg-transparent border-2 text-white transition-all duration-300",
                  activePainPoint === key
                    ? 'border-accent bg-accent/20'
                    : 'border-white/50 hover:bg-white/10 hover:border-white'
                )}
                onClick={() => setActivePainPoint(key)}
              >
                {key === 'resilience' && 'Build Resilience'}
                {key === 'error' && 'Eliminate Errors'}
                {key === 'onboarding' && 'Accelerate Onboarding'}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- NEW Focused Mobile Hero with Video Block ---
const MobileHeroWithVideo = () => {
  const rotatingWords = [
    "Operational Resilience.",
    "Error-Free Compliance.",
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
  }, []);

  return (
    <section className="w-full py-12 bg-background">
      <div className="container px-4 text-center">
        
        {/* Headline Section */}
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-headline tracking-tight text-primary">
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
        </div>

        {/* Video Block with overlaid text */}
        <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
             <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1024/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
        </div>
        
        {/* Text Content Block */}
        <div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For leaders who can't be everywhere, we provide the framework to standardize operational excellence. Our checklists ensure global compliance and deliver auditable results at scale.
            </p>
            <div className="pt-8 flex justify-center">
                <Button size="lg" asChild className="group text-lg py-7 px-10" variant="accent">
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
    const isMobile = useIsMobile();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <main className="flex-1 h-screen bg-background"></main>;
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. ⚠️</p>
                </div>
                
                {isMobile ? <MobileHeroWithVideo /> : <InteractiveHeroSection />}

            </main>
            <Footer />
        </div>
    );
}

