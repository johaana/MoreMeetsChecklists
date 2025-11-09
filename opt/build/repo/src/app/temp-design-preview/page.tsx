
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
        error: {
            title: 'Relying on Memory is a Gamble.',
            description: 'Even your best people make mistakes under pressure. Our checklists provide a verifiable framework that catches small oversights before they become major problems.',
            buttonText: 'Reduce Risk',
            mobileButtonText: 'Control'
        },
        resilience: {
            title: 'Adopt Global Best Practices as Your Own.',
            description: 'Start with our globally compliant solutions, then modify them to create a permanent corporate asset. This ensures your operations run on a documented, expert-built process.',
            buttonText: 'Build Your Asset',
            mobileButtonText: 'System'
        },
        onboarding: {
            title: 'Compliance From Day One, Not Day Ninety.',
            description: 'Our checklists provide a clear roadmap, drastically reducing training time and empowering new hires to be competent, safe, and effective from their very first shift.',
            buttonText: 'Onboard Faster',
            mobileButtonText: 'Train'
        }
    },
    optionB: {
        error: {
            title: 'Even Your Best People Will Make Mistakes.',
            description: 'It’s not about skill; it\'s human nature under pressure. Our checklists provide a simple, verifiable guide to ensure critical tasks are done right, every time.',
            buttonText: 'Ensure Accuracy',
            mobileButtonText: 'Risk'
        },
        resilience: {
            title: 'What Happens When Your "Go-To" Person Goes?',
            description: 'We help you convert your team\'s unwritten expertise into a permanent corporate asset. This creates a resilient process that anyone on your team can follow.',
            buttonText: 'Create Resilience',
            mobileButtonText: 'Resilience'
        },
        onboarding: {
            title: 'New Hires Can\'t Learn Everything on Day One.',
            description: 'But they can follow a checklist. Our playbooks provide a clear, step-by-step roadmap, empowering new hires to be competent and effective from their very first shift.',
            buttonText: 'Accelerate Onboarding',
            mobileButtonText: 'Onboarding'
        }
    }
};


type PainPointKey = keyof typeof contentOptions.optionA;
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

const InteractivePill = ({ activePainPoint, setActivePainPoint, isMobile, className, painPoints }: { activePainPoint: PainPointKey, setActivePainPoint: (key: PainPointKey) => void, isMobile: boolean, className?: string, painPoints: typeof contentOptions.optionA }) => (
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
                     {isMobile ? painPoints[key].mobileButtonText : painPoints[key].buttonText}
                </span>
            </Button>
            ))}
        </div>
    </div>
);

const AnimatedText = ({ content }: { content: typeof contentOptions.optionA[PainPointKey] }) => (
    <AnimatePresence mode="wait">
        <motion.div
        key={content.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        >
            <h1 className="text-xl md:text-4xl lg:text-5xl font-extrabold font-headline tracking-tighter text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
                {content.title}
            </h1>
            <p className="text-sm md:text-lg text-white/90 max-w-xl mt-2 md:mt-4 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
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
    const { optionA, optionB } = contentOptions;

    const HeroContent = ({ contentSet }: { contentSet: any }) => (
         <HeroVariant contentSet={contentSet}>
            {(isMobile, content, activePainPoint, setActivePainPoint) => (
                <div className="max-w-2xl space-y-6 flex flex-col justify-center h-full">
                    <div className="min-h-[10rem] md:min-h-[14rem]"><AnimatedText content={content[activePainPoint]} /></div>
                    <div className="pt-2"><InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                    <div className="pt-3">
                        <h2 className="text-sm md:text-lg font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                    </div>
                    <div className="pt-3">
                        <Button size="lg" asChild className="group text-md md:text-lg py-4 md:py-6 px-6 md:px-8 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                            <Link href="/packs">
                            Explore Packages
                            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </HeroVariant>
    )

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page. ⚠️</p>
                </div>
                
                <TempPageOption title="Option A: The 'Intelligent Control' Copy" description="Direct, strategic, and uses strong mobile button text.">
                    <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent">
                        <HeroContent contentSet={optionA} />
                     </BaseHeroSection>
                </TempPageOption>

                 <TempPageOption title="Option B: The 'Pragmatic Leader' Copy" description="Consultative, empathetic, and uses more descriptive mobile button text.">
                    <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent">
                        <HeroContent contentSet={optionB} />
                     </BaseHeroSection>
                </TempPageOption>
                
            </main>
            <Footer />
        </div>
    );
}
