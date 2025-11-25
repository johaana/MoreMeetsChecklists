
'use client';

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Frown, Smile, RefreshCw, MoveHorizontal } from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const cardContent = {
    chaos: {
        icon: <Frown className="h-10 w-10 mb-2"/>,
        title: "The Old Way: Chaos",
        description: "Relying on human memory, verbal instructions, and hope.",
        points: [
            "\"Did anyone check the fire exits?\"",
            "A new hire makes a costly mistake on their first day.",
            "Your best manager quits, taking critical knowledge with them."
        ]
    },
    control: {
        icon: <Smile className="h-10 w-10 mb-2"/>,
        title: "The New Way: Control",
        description: "A system of record that ensures excellence every time.",
        points: [
            "\"Fire exit check completed daily at 9:05 AM. See log.\"",
            "New hires are productive and compliant from day one.",
            "Knowledge is retained in the system, making your operation resilient."
        ]
    }
};


const DesignOption = ({ title, description, children, className }: { title: string, description: string, children: React.ReactNode, className?: string }) => (
    <div className="py-16 border-t first:border-t-0">
        <div className="text-center max-w-2xl mx-auto mb-10 px-4">
            <h3 className="text-2xl font-bold font-headline">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <div className={cn("mx-auto", className)}>
            {children}
        </div>
    </div>
);


const FlipCard = ({
  isFlipped,
  onFlip,
  frontContent,
  backContent,
  containerClassName,
}: {
  isFlipped: boolean;
  onFlip: () => void;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn("group relative h-[30rem] w-full max-w-sm cursor-pointer", containerClassName)}
      onClick={onFlip}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden' }}>
          {frontContent}
        </div>
        <div className="absolute h-full w-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};


const PremiumFlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <FlipCard 
            isFlipped={isFlipped} 
            onFlip={() => setIsFlipped(!isFlipped)}
            frontContent={
                <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-br from-red-500/50 via-gray-800 to-gray-900 group-hover:from-red-500/70 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_25px_theme(colors.red.500)]">
                     <div className="relative w-full h-full bg-slate-900/80 rounded-[15px] p-6 flex flex-col text-white backdrop-blur-lg">
                        <CardHeader className="text-center items-center p-0">
                            <div className="text-red-400 group-hover:text-red-300 transition-colors">{cardContent.chaos.icon}</div>
                            <CardTitle className="text-red-400 font-headline text-2xl group-hover:text-red-300 transition-colors">{cardContent.chaos.title}</CardTitle>
                            <CardDescription className="text-gray-400 text-sm">{cardContent.chaos.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm text-gray-300 flex-1 mt-6 p-0">
                            {cardContent.chaos.points.map((point, i) => (
                                <p key={i} className="flex items-start gap-3"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>{point}</span></p>
                            ))}
                        </CardContent>
                        <div className="p-2 text-center text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                          Click Card to Flip
                        </div>
                    </div>
                </div>
            }
            backContent={
                 <div className="relative w-full h-full rounded-2xl p-1 bg-gradient-to-br from-green-500/50 via-blue-900 to-slate-900 group-hover:from-green-500/70 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_25px_theme(colors.green.500)]">
                     <div className="relative w-full h-full bg-slate-900/80 rounded-[15px] p-6 flex flex-col text-white backdrop-blur-lg">
                        <CardHeader className="text-center items-center p-0">
                            <div className="text-green-400 group-hover:text-green-300 transition-colors">{cardContent.control.icon}</div>
                            <CardTitle className="text-green-400 font-headline text-2xl group-hover:text-green-300 transition-colors">{cardContent.control.title}</CardTitle>
                            <CardDescription className="text-gray-300 text-sm">{cardContent.control.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm text-gray-200 flex-1 mt-6 p-0">
                            {cardContent.control.points.map((point, i) => (
                                <p key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>{point}</span></p>
                            ))}
                        </CardContent>
                         <div className="p-2 text-center text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                           <RefreshCw className="w-3 h-3 group-hover:-rotate-180 transition-transform duration-500" />
                          Click Card to Flip
                        </div>
                    </div>
                </div>
            }
        />
    )
}

const SliderCard = () => {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const rightSideOpacity = useTransform(x, [-100, 0], [0, 1]);
    const leftSideOpacity = useTransform(x, [0, 100], [1, 0]);

    return (
        <div className="relative w-full max-w-sm h-[30rem] rounded-xl shadow-2xl bg-slate-50 border-2 border-primary/20 overflow-hidden">
            {/* Control Side (Back) */}
            <motion.div style={{ opacity: rightSideOpacity }} className="absolute inset-0 p-6 flex flex-col">
                 <CardHeader className="text-center items-center p-0">
                    <div className="text-primary">{cardContent.control.icon}</div>
                    <CardTitle className="text-primary">{cardContent.control.title}</CardTitle>
                    <CardDescription>{cardContent.control.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground flex-1 mt-6 p-0">
                    {cardContent.control.points.map((point, i) => (
                    <p key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>{point}</span></p>
                    ))}
                </CardContent>
            </motion.div>

            {/* Chaos Side (Front) */}
            <motion.div 
                ref={containerRef}
                style={{ x, opacity: leftSideOpacity }} 
                className="absolute inset-0 w-full h-full bg-slate-800 text-white p-6 cursor-grab active:cursor-grabbing"
            >
                <CardHeader className="text-center items-center p-0">
                    <div className="text-red-400">{cardContent.chaos.icon}</div>
                    <CardTitle className="text-red-400">{cardContent.chaos.title}</CardTitle>
                    <CardDescription className="text-slate-400">{cardContent.chaos.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-300 flex-1 mt-6 p-0">
                    {cardContent.chaos.points.map((point, i) => (
                    <p key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500/80 shrink-0 mt-1"/><span>{point}</span></p>
                    ))}
                </CardContent>
            </motion.div>

            {/* Handle */}
            <motion.div
                style={{ x }}
                drag="x"
                dragConstraints={containerRef}
                className="absolute top-1/2 left-0 w-4 h-full bg-transparent -translate-y-1/2 z-10 cursor-ew-resize flex items-center justify-center"
                dragElastic={0.1}
            >
                <div className="w-1.5 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <MoveHorizontal className="w-4 h-4 text-primary" />
                </div>
            </motion.div>
        </div>
    );
};


const AccordionCard = () => {
    return(
        <Card className="w-full max-w-sm shadow-xl">
             <CardHeader className="text-center items-center">
                <CardTitle className="text-primary font-headline text-2xl">From Chaos to Control</CardTitle>
                <CardDescription>Click each problem to reveal the solution.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full">
                    {cardContent.chaos.points.map((point, index) => (
                         <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left">
                               <div className="flex items-start gap-2">
                                <Frown className="h-5 w-5 text-destructive shrink-0 mt-0.5"/>
                                <span className="flex-1 text-sm font-semibold">{point}</span>
                               </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex items-start gap-2 text-green-700 dark:text-green-300 pl-2">
                                     <Smile className="h-5 w-5 shrink-0 mt-0.5"/>
                                     <span className="flex-1 text-sm font-semibold">{cardContent.control.points[index]}</span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}

export default function TempDesignClientPage() {
    return (
        <div className="container py-12">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold mb-8">
                <p>⚠️ This is a temporary design preview page with multiple design options. ⚠️</p>
            </div>
            
            <DesignOption 
                title="Option 1: Premium 3D Flip Card"
                description="A sophisticated, dark-themed card with glowing gradient borders and a glassmorphism panel for a modern, premium feel. The whole card is clickable."
            >
                <PremiumFlipCard />
            </DesignOption>

             <DesignOption
                title="Option 2: 'Before & After' Slider"
                description="A highly interactive card where you drag the handle to slide away the 'Chaos' panel and reveal the 'Control' solution underneath."
            >
               <SliderCard />
            </DesignOption>

             <DesignOption
                title="Option 3: Accordion Reveal"
                description="A clean, structured approach. Click on each problem statement to expand it and reveal the corresponding solution directly below."
            >
              <AccordionCard />
            </DesignOption>
        </div>
    );
}
