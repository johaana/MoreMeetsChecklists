
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const contentOptions = {
    optionB: {
        error: {
            title: `"Are we sure we didn't miss a step?"`,
            description: 'Even your best people make mistakes under pressure. A checklist is the only way to ensure critical tasks are done right, every single time.',
            buttonText: 'Control for Error',
            mobileButtonText: 'Control'
        },
        resilience: {
            title: `"What happens if our best person quits?"`,
            description: 'Your process isn\'t a process if it only exists in one person\'s head. We help you codify that expertise into a permanent corporate asset.',
            buttonText: 'Build Resilience',
            mobileButtonText: 'System'
        },
        onboarding: {
            title: `"How long until I can trust the new hire?"`,
            description: 'Don\'t wait months. Our playbooks provide a clear, step-by-step roadmap, empowering new hires to be competent and effective from their very first shift.',
            buttonText: 'Onboard Faster',
            mobileButtonText: 'Train'
        }
    }
};


type PainPointKey = keyof typeof contentOptions.optionB;
const painPointKeys: PainPointKey[] = ['error', 'resilience', 'onboarding'];

const BaseHeroSection = ({ 
    overlayClass = 'bg-black/50', 
    containerClass = '',
    children
}: {
    overlayClass?: string;
    containerClass?: string;
    children: React.ReactNode;
}) => {

    return (
        <section className="relative w-full h-screen min-h-[700px] flex text-white overflow-hidden">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            />
            <div className={cn("absolute inset-0 z-10", overlayClass)} />

            <div className={cn("container px-4 md:px-6 relative z-20 w-full h-full flex flex-col", containerClass)}>
                 {children}
            </div>
        </section>
    );
};

const InteractivePill = ({ activePainPoint, setActivePainPoint, isMobile, className, painPoints }: { activePainPoint: PainPointKey, setActivePainPoint: (key: PainPointKey) => void, isMobile: boolean, className?: string, painPoints: typeof contentOptions.optionB }) => (
    <div className={cn("relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 w-full", className)}>
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
                    "whitespace-normal leading-tight flex items-center text-center",
                    activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                )}
                onClick={() => setActivePainPoint(key)}
            >
                <span>
                     {isMobile ? painPoints[key].mobileButtonText : painPoints[key].buttonText}
                </span>
            </Button>
            ))}
        </div>
    </div>
);

const AnimatedText = ({ content, className }: { content: typeof contentOptions.optionB[PainPointKey], className?: string }) => (
    <AnimatePresence mode="wait">
        <motion.div
        key={content.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={className}
        >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                {content.title}
            </h1>
            <p className="text-lg text-white/90 max-w-xl mt-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
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

const HeroVariant = ({ children, contentSet }: { children: (isMobile: boolean, content: any, activePainPoint: PainPointKey, setActivePainPoint: (k: PainPointKey) => void) => React.ReactNode, contentSet: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {children(isMobile, contentSet, activePainPoint, setActivePainPoint)}
        </>
    );
};


export default function TempDesignPreviewPage() {
    const { optionB } = contentOptions;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. Please review the 7 options below. ⚠️</p>
                </div>
                
                {/* --- Option 1 --- */}
                <TempPageOption title="Option 1: Classic Centered" description="Content is vertically and horizontally centered. Clean and balanced.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="items-center justify-center text-center">
                             <div className="max-w-2xl space-y-6">
                                <AnimatedText content={content[activePainPoint]} />
                                <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                <div className="pt-2">
                                    <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                </div>
                                <div className="pt-2">
                                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                        <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 {/* --- Option 2 --- */}
                <TempPageOption title="Option 2: Cinematic Bottom-Third (Left Aligned)" description="Content is anchored to the bottom third and aligned left for a modern, editorial feel.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="justify-end pb-12 md:justify-center md:pb-0">
                                <div className="max-w-2xl space-y-6">
                                    <AnimatedText content={content[activePainPoint]} />
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                    <div className="pt-2">
                                        <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                    </div>
                                    <div className="pt-2">
                                        <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                            <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                        </Button>
                                    </div>
                                </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 {/* --- Option 3 --- */}
                <TempPageOption title="Option 3: Cinematic Bottom-Third (Centered)" description="Same as above, but with text centered for a more powerful, focused look.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="justify-end pb-12 items-center text-center md:justify-center md:pb-0">
                                <div className="max-w-2xl space-y-6">
                                    <AnimatedText content={content[activePainPoint]} />
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                    <div className="pt-2">
                                        <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                    </div>
                                    <div className="pt-2">
                                        <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                            <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                        </Button>
                                    </div>
                                </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 {/* --- Option 4 --- */}
                <TempPageOption title="Option 4: Classic Top-Aligned" description="Content is aligned to the top of the screen, creating a more traditional, article-style layout.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="justify-start pt-32 md:justify-center md:pt-0">
                                <div className="max-w-2xl space-y-6">
                                    <AnimatedText content={content[activePainPoint]} />
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                    <div className="pt-2">
                                        <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                    </div>
                                    <div className="pt-2">
                                        <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                            <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                        </Button>
                                    </div>
                                </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 {/* --- Option 5 --- */}
                <TempPageOption title="Option 5: Split View" description="A clean, two-part layout with the video in the top half and the text/controls in a solid block at the bottom. Prioritizes readability.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <section className="h-screen min-h-[700px] flex flex-col">
                                <div className="relative h-1/2 w-full">
                                    <video src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0" />
                                </div>
                                <div className="h-1/2 bg-background text-foreground flex items-center justify-center">
                                    <div className="max-w-2xl space-y-6 p-4 text-center">
                                         <AnimatedText content={content[activePainPoint]} className="!text-foreground [text-shadow:none]" />
                                         <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} className="bg-secondary/50 !text-white" />
                                         <div className="pt-2">
                                            <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg" variant="accent">
                                                <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                            </Button>
                                         </div>
                                    </div>
                                </div>
                           </section>
                        )}
                    </HeroVariant>
                </TempPageOption>

                {/* --- Option 6 --- */}
                <TempPageOption title="Option 6: Dramatic Overlay" description="Content is centered with a stronger, darker gradient overlay to make the text pop dramatically.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="items-center justify-center text-center" overlayClass="bg-gradient-to-t from-black/90 via-black/70 to-black/40">
                             <div className="max-w-2xl space-y-6">
                                <AnimatedText content={content[activePainPoint]} />
                                <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                <div className="pt-2">
                                    <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                </div>
                                <div className="pt-2">
                                    <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                        <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                {/* --- Option 7 --- */}
                <TempPageOption title="Option 7: Minimalist Bottom-Left" description="Content is anchored to the bottom-left with extra padding, creating a very clean, sophisticated look.">
                     <HeroVariant contentSet={optionB}>
                        {(isMobile, content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="justify-end pb-20 md:justify-center md:pb-0">
                                <div className="max-w-2xl space-y-6">
                                    <AnimatedText content={content[activePainPoint]} />
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                                    <div className="pt-2">
                                        <h2 className="text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                                    </div>
                                    <div className="pt-2">
                                        <Button size="lg" asChild className="group text-lg py-7 px-8 md:px-10 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                                            <Link href="/packs">Explore Packages<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
                                        </Button>
                                    </div>
                                </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>
                
            </main>
            <Footer />
        </div>
    );
}

