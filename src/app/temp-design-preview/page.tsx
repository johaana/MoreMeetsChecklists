
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
    title: 'Human Memory is Your Biggest Liability.',
    description: 'Our system guides your team through critical tasks with automated checks to eliminate costly mistakes.',
    buttonText: 'Eliminate Errors',
    mobileButtonText: 'Errors'
  },
  resilience: {
    title: 'Stop Relying on Heroes. Build a Resilient Operation.',
    description: 'Codify expertise to ensure continuity and consistent quality, no matter who is on shift.',
    buttonText: 'Build Resilience',
    mobileButtonText: 'Resilience'
  },
  onboarding: {
    title: 'Onboard New Hires in Days, Not Months.',
    description: 'Turn every new hire into a seasoned pro from day one with interactive operational playbooks.',
    buttonText: 'Accelerate Onboarding',
    mobileButtonText: 'Onboarding'
  }
};

type PainPointKey = keyof typeof painPoints;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const BaseHeroSection = ({ 
    overlayClass = '', 
    containerClass = '',
    videoClass = '',
    children
}: {
    overlayClass?: string;
    containerClass?: string;
    videoClass?: string;
    children: React.ReactNode;
}) => {

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

            <div className={cn("container px-4 md:px-6 relative z-20 w-full h-full", containerClass)}>
                 {children}
            </div>
        </section>
    );
};

const InteractivePill = ({ activePainPoint, setActivePainPoint, isMobile, className }: { activePainPoint: PainPointKey, setActivePainPoint: (key: PainPointKey) => void, isMobile: boolean, className?: string }) => (
    <div className={cn("relative flex flex-col rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1 w-full max-w-sm", className)}>
        <div className="flex w-full">
            <motion.div
                className="absolute top-1 left-1 bottom-1 w-1/3 bg-white/90 rounded-md shadow-sm"
                initial={false}
                animate={{ x: `calc(${painPointKeys.indexOf(activePainPoint) * 100}% + ${painPointKeys.indexOf(activePainPoint) * 1.33}px)` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            {painPointKeys.map((key) => (
            <Button
                key={key}
                variant="ghost"
                className={cn(
                    "relative z-10 flex-1 justify-center text-xs py-2 h-10 transition-colors duration-300 hover:bg-transparent px-1",
                    "whitespace-normal leading-tight flex items-center text-center",
                    activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                )}
                onClick={() => setActivePainPoint(key)}
            >
                <span>
                    {painPoints[key].mobileButtonText}
                </span>
            </Button>
            ))}
        </div>
    </div>
);

const AnimatedText = ({ content }: { content: typeof painPoints[PainPointKey] }) => (
    <AnimatePresence mode="wait">
        <motion.div
        key={content.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        >
            <h1 className="text-xl font-extrabold font-headline tracking-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                {content.title}
            </h1>
            <p className="text-sm text-white/90 max-w-xl mt-2 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
                {content.description}
            </p>
        </motion.div>
    </AnimatePresence>
)


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
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const content = painPoints[activePainPoint];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const fullContentBlock = (
        <>
            <div className="min-h-[7rem]"><AnimatedText content={content} /></div>
            <div className="mt-4"><InteractivePill activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
            <div className="pt-3">
                <h2 className="text-sm font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
            </div>
            <div className="pt-3">
                <Button size="lg" asChild className="group text-md py-4 px-6 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                    <Link href="/packs">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>
        </>
    );

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page for mobile variations. ⚠️</p>
                </div>
                
                <div className="md:hidden">

                    <TempPageOption title="Variation B (Integrated Bar)" description="Pill buttons are integrated into a sleek bottom bar for a modern look.">
                        <BaseHeroSection 
                            containerClass="flex flex-col justify-end pb-8"
                            overlayClass="bg-gradient-to-t from-black/80 via-transparent to-transparent"
                        >
                            <div className="w-full max-w-xl space-y-3">
                                <div className="min-h-[7rem]"><AnimatedText content={content} /></div>
                                <h2 className="text-sm font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                <div className="flex items-center gap-4 pt-2">
                                    <div className="flex-1"><InteractivePill activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                                    <Button asChild className="group shadow-lg" variant="accent" size="icon"><Link href="/packs"><ArrowRight className="h-5 w-5" /></Link></Button>
                                </div>
                            </div>
                        </BaseHeroSection>
                    </TempPageOption>

                    <TempPageOption title="Variation D (Split Layout)" description="Separates the main headline and buttons from the secondary text.">
                        <BaseHeroSection 
                            containerClass="flex flex-col justify-end pb-8"
                            overlayClass="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                        >
                            <div className="w-full max-w-xl space-y-3">
                               <div className="min-h-[7rem]"><AnimatedText content={content} /></div>
                               <div className="flex gap-4">
                                <div className="flex-1"><InteractivePill activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                                <Button asChild className="group shadow-lg" variant="accent" size="icon"><Link href="/packs"><ArrowRight className="h-5 w-5" /></Link></Button>
                               </div>
                               <h2 className="text-xs font-semibold text-accent/80 pt-2">The Solution: Expert-Crafted Operational Checklists.</h2>
                            </div>
                        </BaseHeroSection>
                    </TempPageOption>

                     <TempPageOption title="Variation H (Text Focus + Glow)" description="Subtle buttons and a glowing solution text to maximize headline impact.">
                        <BaseHeroSection 
                            containerClass="flex flex-col justify-end pb-8"
                            overlayClass="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                        >
                            <div className="w-full max-w-xl space-y-4">
                               <div className="min-h-[7rem]"><AnimatedText content={content} /></div>
                               <div className="flex gap-4 items-center">
                                    <div className="flex-1">
                                        <InteractivePill className="p-0.5 bg-black/20" activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                    </div>
                                    <Button size="lg" asChild className="group text-md py-4 px-6 shadow-lg" variant="accent"><Link href="/packs">Explore</Link></Button>
                               </div>
                               <h2 className="text-xs font-semibold text-accent/80 pt-2 [text-shadow:0_0_8px_hsl(var(--accent)/0.7)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                            </div>
                        </BaseHeroSection>
                    </TempPageOption>

                     <TempPageOption title="Variation J (Centered & Balanced)" description="A symmetrical and elegant layout that center-aligns the entire content block.">
                        <BaseHeroSection 
                            containerClass="flex flex-col justify-end pb-8 text-center"
                            overlayClass="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                        >
                            <div className="w-full max-w-xl space-y-4">
                               <div className="min-h-[7rem]"><AnimatedText content={content} /></div>
                               <div className="mx-auto w-full max-w-[90%]"><InteractivePill activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                               <h2 className="text-sm font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                               <div className="pt-2"><Button size="lg" asChild className="group text-md py-4 px-6 shadow-lg" variant="accent"><Link href="/packs">Explore Packages</Link></Button></div>
                            </div>
                        </BaseHeroSection>
                    </TempPageOption>

                </div>

                {/* --- Desktop View (Unchanged) --- */}
                <div className="hidden md:block">
                     <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent">
                        <div className="max-w-2xl space-y-6">
                            {fullContentBlock}
                        </div>
                     </BaseHeroSection>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
