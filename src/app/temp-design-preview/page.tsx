
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const painPoints = {
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Your operation runs on the knowledge of a few key people. Our system codifies that expertise, ensuring continuity and consistent quality, no matter who is on shift.',
    image: 'https://i.postimg.cc/DmmdFvSV/The-Oberoi-Udaivilas-Hotel-Udaipur.jpg'
  },
  error: {
    title: 'Human Memory is Your Biggest Liability. Install a Firewall Against Error.',
    description: 'Under pressure, people forget. Our system is their external brain, guiding them through critical tasks with automated checks to eliminate costly mistakes and ensure compliance.',
    image: 'https://i.postimg.cc/FRWPx2PW/hillsborough-disaster2.webp'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months. Scale Your Expertise Instantly.',
    description: 'Turn every new hire into a seasoned pro from day one. Our playbooks act as a live training manual, accelerating their path to productivity and excellence.',
    image: 'https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4'
  }
};

type PainPointKey = keyof typeof painPoints;

// --- Desktop Hero Section ---
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
              src={painPoints.resilience.image} // Using a known good image
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
                
                <InteractiveHeroSection />

            </main>
            <Footer />
        </div>
    );
}
