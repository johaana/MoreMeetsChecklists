
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
            title: 'Under Pressure, People Forget.',
            description: 'Our digital SOPs act as a firewall against human error, ensuring critical tasks are done right, every time.',
            buttonText: 'Eliminate Errors',
            mobileButtonText: 'Errors'
        },
        resilience: {
            title: 'Your Best Manager Can\'t Be Everywhere.',
            description: 'We transform your operation from person-dependent to process-driven, ensuring expert knowledge stays long after people leave.',
            buttonText: 'Build Resilience',
            mobileButtonText: 'Resilience'
        },
        onboarding: {
            title: 'Stop Wasting Months on Training.',
            description: 'Our checklists are a live training manual, empowering new hires to perform like seasoned pros from their very first shift.',
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
                    {painPoints[key].mobileButtonText}
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

const HeroVariant = ({ children }: { children: (isMobile: boolean, content: any, activePainPoint: PainPointKey, setActivePainPoint: (k: PainPointKey) => void) => React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const { optionA } = contentOptions;
    
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            {children(isMobile, optionA, activePainPoint, setActivePainPoint)}
        </>
    );
};

const ContentSection = ({ title, options, contentSet }: { title: string, options: string[], contentSet: any }) => {
    return (
        <div className="py-8">
            <div className="bg-primary text-primary-foreground p-4 text-center">
                <h2 className="text-2xl font-bold font-headline">{title}</h2>
            </div>
            {options.includes("B") && <HeroB content={contentSet} />}
            {options.includes("D") && <HeroD content={contentSet} />}
            {options.includes("H") && <HeroH content={contentSet} />}
            {options.includes("J") && <HeroJ content={contentSet} />}
        </div>
    );
}

const HeroB = ({ content }: { content: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const currentContent = content[activePainPoint];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <TempPageOption title="Variation B (Integrated Bar)" description="Pill buttons are integrated into a sleek bottom bar for a modern look.">
            <BaseHeroSection 
                containerClass="flex flex-col justify-end pb-8"
                overlayClass="bg-gradient-to-t from-black/80 via-transparent to-transparent"
            >
                <div className="w-full max-w-xl space-y-3">
                    <div className="min-h-[7rem]"><AnimatedText content={currentContent} /></div>
                    <h2 className="text-sm font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                    <div className="flex items-center gap-4 pt-2">
                        <div className="flex-1"><InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                        <Button asChild className="group shadow-lg" variant="accent" size="icon"><Link href="/packs"><ArrowRight className="h-5 w-5" /></Link></Button>
                    </div>
                </div>
            </BaseHeroSection>
        </TempPageOption>
    );
};

const HeroD = ({ content }: { content: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const currentContent = content[activePainPoint];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <TempPageOption title="Variation D (Split Layout)" description="Separates the main headline and buttons from the secondary text.">
            <BaseHeroSection 
                containerClass="flex flex-col justify-end pb-8"
                overlayClass="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
            >
                <div className="w-full max-w-xl space-y-3">
                   <div className="min-h-[7rem]"><AnimatedText content={currentContent} /></div>
                   <div className="flex gap-4">
                    <div className="flex-1"><InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                    <Button asChild className="group shadow-lg" variant="accent" size="icon"><Link href="/packs"><ArrowRight className="h-5 w-5" /></Link></Button>
                   </div>
                   <h2 className="text-xs font-semibold text-accent/80 pt-2">The Solution: Expert-Crafted Operational Checklists.</h2>
                </div>
            </BaseHeroSection>
        </TempPageOption>
    );
};

const HeroH = ({ content }: { content: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const currentContent = content[activePainPoint];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <TempPageOption title="Variation H (Text Focus + Glow)" description="Subtle buttons and a glowing solution text to maximize headline impact.">
            <BaseHeroSection 
                containerClass="flex flex-col justify-end pb-8"
                overlayClass="bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            >
                <div className="w-full max-w-xl space-y-4">
                   <div className="min-h-[7rem]"><AnimatedText content={currentContent} /></div>
                   <div className="flex gap-4 items-center">
                        <div className="flex-1">
                            <InteractivePill painPoints={content} className="p-0.5 bg-black/20" activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} />
                        </div>
                        <Button size="lg" asChild className="group text-md py-4 px-6 shadow-lg" variant="accent"><Link href="/packs">Explore</Link></Button>
                   </div>
                   <h2 className="text-xs font-semibold text-accent/80 pt-2 [text-shadow:0_0_8px_hsl(var(--accent)/0.7)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                </div>
            </BaseHeroSection>
        </TempPageOption>
    );
};

const HeroJ = ({ content }: { content: any }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activePainPoint, setActivePainPoint] = useState<PainPointKey>('error');
    const currentContent = content[activePainPoint];

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return (
        <TempPageOption title="Variation J (Centered & Balanced)" description="A symmetrical and elegant layout that center-aligns the entire content block.">
            <BaseHeroSection 
                containerClass="flex flex-col justify-end pb-8 items-center text-center"
                overlayClass="bg-gradient-to-t from-black/80 via-black/50 to-transparent"
            >
                <div className="w-full max-w-xl space-y-4">
                   <div className="min-h-[7rem]"><AnimatedText content={currentContent} /></div>
                   <div className="mx-auto w-full max-w-xs"><InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
                   <h2 className="text-sm font-semibold text-accent [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">The Solution: Expert-Crafted Operational Checklists.</h2>
                   <div className="pt-2"><Button size="lg" asChild className="group text-md py-4 px-6 shadow-lg" variant="accent"><Link href="/packs">Explore Packages</Link></Button></div>
                </div>
            </BaseHeroSection>
        </TempPageOption>
    );
};


export default function TempDesignPreviewPage() {
    const { optionA } = contentOptions;

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1">
                <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
                    <p>⚠️ This is a temporary design preview page for mobile variations. ⚠️</p>
                </div>
                
                <div className="md:hidden">
                    <ContentSection title="Refined Content" options={["B", "D", "H", "J"]} contentSet={optionA} />
                </div>

                {/* --- Desktop View (Unchanged) --- */}
                <div className="hidden md:block">
                     <BaseHeroSection overlayClass="bg-gradient-to-t from-black/80 via-black/60 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/60 md:to-transparent">
                        <HeroVariant>
                            {(isMobile, content, activePainPoint, setActivePainPoint) => (
                                <div className="max-w-2xl space-y-6">
                                     <div className="min-h-[7rem]"><AnimatedText content={content[activePainPoint]} /></div>
                                    <div className="mt-4"><InteractivePill painPoints={content} activePainPoint={activePainPoint} setActivePainPoint={setActivePainPoint} isMobile={isMobile} /></div>
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
                                </div>
                            )}
                        </HeroVariant>
                     </BaseHeroSection>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}
