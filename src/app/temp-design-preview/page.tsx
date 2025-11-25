
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
    optionA: {
        resilience: {
            title: `"Stop losing knowledge every time someone quits."`,
            description: 'Turn people-dependent processes into a permanent, scalable system.',
            buttonText: 'Build Resilience',
            mobileButtonText: 'Resilience'
        },
        error: {
            title: `"World-class compliance used to cost a fortune. We fixed that."`,
            description: 'Achieve world-class compliance without the enterprise price tag. Our audit-ready, globally-compliant SOPs are available for instant download—no subscriptions, no hidden fees.',
            buttonText: 'Global Compliance',
            mobileButtonText: 'Compliance'
        },
        onboarding: {
            title: `"Training shouldn’t depend on who’s available that day."`,
            description: 'Our digital playbooks onboard new hires faster — no babysitting required.',
            buttonText: 'Onboard Faster',
            mobileButtonText: 'Train'
        }
    }
};


type PainPointKey = keyof typeof contentOptions.optionA;
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

            <div className={cn("container px-4 md:px-6 relative z-20 w-full h-full flex flex-col justify-end pb-12 md:justify-center md:pb-0", containerClass)}>
                 {children}
            </div>
        </section>
    );
};

const InteractivePill = ({ activePainPoint, setActivePainPoint, painPoints }: { activePainPoint: PainPointKey, setActivePainPoint: (key: PainPointKey) => void, painPoints: typeof contentOptions.optionA }) => (
    <div className={cn("relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 w-full")}>
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
                    "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-12",
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

const AnimatedText = ({ content, className, useTextShadow = true }: { content: typeof contentOptions.optionA[PainPointKey], className?: string, useTextShadow?: boolean }) => (
    <AnimatePresence mode="wait">
        <motion.div
        key={content.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={className}
        >
            <h1 className={cn("text-3xl md:text-5xl font-extrabold font-headline tracking-tighter text-white", useTextShadow && "[text-shadow:0_1px_4px_rgba(0,0,0,0.7)]")}>
                {content.title}
            </h1>
            <p className={cn("text-base text-white/90 max-w-xl mt-3", useTextShadow && "[text-shadow:0_1px_4px_rgba(0,0,0,0.5)]")}>
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

const HeroVariant = ({ children, contentSet }: { children: (content: any, activePainPoint: PainPointKey, setActivePainPoint: (k: PainPointKey) => void) => React.ReactNode, contentSet: any }) => {
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    return <>{children(contentSet, activePainPoint, setActivePainPoint)}</>;
};


export default function TempDesignPreviewPage() {
    const { optionA } = contentOptions;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page with 5 mobile options. ⚠️</p>
                </div>
                
                <TempPageOption title="Option 1: Floating Content Block" description="Text and controls are grouped in a semi-transparent block for maximum readability. This is the current live version.">
                     <HeroVariant contentSet={optionA}>
                        {(content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection containerClass="justify-center items-center md:items-start md:justify-center md:text-left">
                             <div className="w-full bg-black/40 backdrop-blur-sm rounded-xl p-4 border-t border-white/20 space-y-5 text-center items-center flex flex-col md:hidden">
                                <div className='max-w-md space-y-5'>
                                    <AnimatedText content={content[activePainPoint]} />
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} />
                                    <div className="pt-2">
                                        <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg w-full" variant="accent">
                                            <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 <TempPageOption title="Option 2: Ultra-Minimalist Bottom Center (Gradient)" description="Content is low and centered. A gradient improves text readability.">
                    <HeroVariant contentSet={optionA}>
                        {(content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection overlayClass="bg-black/30" containerClass="text-center items-center justify-end md:items-start md:justify-center md:text-left">
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 md:hidden" />
                             <div className="max-w-md space-y-6 md:hidden relative z-20">
                                <AnimatedText content={content[activePainPoint]} />
                                <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} />
                                <div className="pt-2">
                                    <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg" variant="accent">
                                        <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 <TempPageOption title="Option 3: Wide Bottom-Left (Gradient)" description="Cinematic feel with text aligned left. A gradient improves text readability.">
                     <HeroVariant contentSet={optionA}>
                        {(content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection overlayClass="bg-black/30" containerClass="text-left items-end md:items-start md:justify-center md:text-left">
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 md:hidden" />
                             <div className="w-full max-w-xl space-y-6 md:hidden relative z-20">
                                <AnimatedText content={content[activePainPoint]} />
                                <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} />
                                <div className="pt-2">
                                    <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg" variant="accent">
                                        <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 <TempPageOption title="Option 4: Floating Pill (Gradient)" description="Layered look with separated controls. A gradient improves text readability.">
                     <HeroVariant contentSet={optionA}>
                        {(content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection overlayClass="bg-black/30" containerClass="text-center items-center justify-end md:items-start md:justify-center md:text-left">
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 md:hidden" />
                             <div className="max-w-md w-full flex flex-col space-y-4 md:hidden relative z-20">
                                <AnimatedText content={content[activePainPoint]} />
                                <div className='pt-4 space-y-4'>
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} />
                                    <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg w-full" variant="accent">
                                        <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>
                
                 <TempPageOption title="Option 5: Extreme Lower-Left (Gradient)" description="Dramatic, minimalist aesthetic. A gradient improves text readability.">
                     <HeroVariant contentSet={optionA}>
                        {(content, activePainPoint, setActivePainPoint) => (
                           <BaseHeroSection overlayClass="bg-black/30" containerClass="text-left items-end md:items-start md:justify-center">
                            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 md:hidden" />
                             <div className="w-full max-w-xl space-y-5 md:hidden relative z-20">
                                <AnimatedText content={content[activePainPoint]} />
                                <div className='max-w-sm'>
                                    <InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} />
                                </div>
                                <div className="pt-2">
                                    <Button size="lg" asChild className="group text-lg py-6 px-8 shadow-lg" variant="accent">
                                        <Link href="/library">Explore The SOP Library<ArrowRight className="ml-2 h-5 w-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                           </BaseHeroSection>
                        )}
                    </HeroVariant>
                </TempPageOption>

                 {/* --- DESKTOP PREVIEWS --- */}
                 <div className="hidden md:block">
                     <TempPageOption title="Desktop: Current (with text shadow)" description="This is the current live version for desktop. Note the subtle text shadow on the headline.">
                        <HeroVariant contentSet={optionA}>
                            {(content, activePainPoint, setActivePainPoint) => (
                            <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" containerClass="text-left md:justify-center">
                                <div className="max-w-2xl">
                                    <div className="space-y-4 min-h-[20rem] flex flex-col justify-center">
                                        <AnimatedText content={content[activePainPoint]} useTextShadow={true} />
                                    </div>
                                    <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 mt-6 max-w-lg">
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
                                                    "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                                                    "whitespace-normal leading-tight flex items-center text-center",
                                                    activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                                                )}
                                                onClick={() => setActivePainPoint(key)}
                                            >
                                                <span>{content[key].buttonText}</span>
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
                            </BaseHeroSection>
                            )}
                        </HeroVariant>
                    </TempPageOption>

                     <TempPageOption title="Desktop: Proposed (NO text shadow)" description="This version removes the text shadow, making the text look crisper and sharper against the gradient.">
                        <HeroVariant contentSet={optionA}>
                            {(content, activePainPoint, setActivePainPoint) => (
                            <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent" containerClass="text-left md:justify-center">
                                <div className="max-w-2xl">
                                    <div className="space-y-4 min-h-[20rem] flex flex-col justify-center">
                                        <AnimatedText content={content[activePainPoint]} useTextShadow={false} />
                                    </div>
                                    <div className="relative flex flex-col rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden p-1.5 mt-6 max-w-lg">
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
                                                    "relative z-10 flex-1 justify-center text-sm py-3 transition-colors duration-300 hover:bg-transparent px-2 h-14",
                                                    "whitespace-normal leading-tight flex items-center text-center",
                                                    activePainPoint === key ? 'text-primary font-semibold' : 'text-white/80 hover:text-white'
                                                )}
                                                onClick={() => setActivePainPoint(key)}
                                            >
                                                <span>{content[key].buttonText}</span>
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
                            </BaseHeroSection>
                            )}
                        </HeroVariant>
                    </TempPageOption>
                </div>


            </main>
            <Footer />
        </div>
    );
}
