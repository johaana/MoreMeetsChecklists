
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Frown, Smile, Lightbulb, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
      className={cn("relative w-full h-[26rem] cursor-pointer group", containerClassName)}
      onClick={onFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
          {frontContent}
        </div>
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

const DesignOption = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <div className="py-12 border-t first:border-t-0">
        <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-headline">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <div className="max-w-md mx-auto">
            {children}
        </div>
    </div>
);


export default function TempDesignClientPage() {
    const [flipStates, setFlipStates] = useState([false, false, false, false]);

    const handleFlip = (index: number) => {
        const newFlipStates = [...flipStates];
        newFlipStates[index] = !newFlipStates[index];
        setFlipStates(newFlipStates);
    };

    const cardContent = {
        chaos: {
            icon: <Frown className="w-12 h-12 mb-2"/>,
            title: "The Old Way: Chaos",
            description: "Relying on human memory, verbal instructions, and hope.",
            points: [
                "\"Did anyone check the fire exits?\"",
                "A new hire makes a costly mistake on their first day.",
                "Your best manager quits, taking critical knowledge with them."
            ]
        },
        control: {
            icon: <Smile className="w-12 h-12 mb-2"/>,
            title: "The New Way: Control",
            description: "A system of record that ensures excellence every time.",
            points: [
                "\"Fire exit check completed daily at 9:05 AM. See log.\"",
                "New hires are productive and compliant from day one.",
                "Knowledge is retained in the system, making your operation resilient."
            ]
        }
    };

    return (
        <div className="container py-12">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold mb-8">
                <p>⚠️ This is a temporary design preview page. ⚠️</p>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">3D Flip Card: Design Options</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">Click on any card to see it flip. All options below use the same 3D flip animation but with different visual designs.</p>
            </div>
            
            <DesignOption 
                title="Option 1: Minimalist Corporate"
                description="Clean, professional design using the application's core color palette."
            >
                <FlipCard 
                    isFlipped={flipStates[0]} 
                    onFlip={() => handleFlip(0)}
                    frontContent={
                        <Card className="border-destructive/50 border-2 flex flex-col h-full">
                            <CardHeader className="text-center items-center">
                                <div className="text-destructive">{cardContent.chaos.icon}</div>
                                <CardTitle className="text-destructive font-headline text-2xl">{cardContent.chaos.title}</CardTitle>
                                <CardDescription>{cardContent.chaos.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
                                {cardContent.chaos.points.map((point, i) => (
                                    <p key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                             <div className="p-4 text-center text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">Click to Flip</div>
                        </Card>
                    }
                    backContent={
                         <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col h-full">
                            <CardHeader className="text-center items-center">
                                <div className="text-primary">{cardContent.control.icon}</div>
                                <CardTitle className="text-primary font-headline text-2xl">{cardContent.control.title}</CardTitle>
                                <CardDescription>{cardContent.control.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-foreground flex-1">
                                {cardContent.control.points.map((point, i) => (
                                     <p key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                            <div className="p-4 text-center text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">Click to Flip</div>
                        </Card>
                    }
                />
            </DesignOption>

            <DesignOption 
                title="Option 2: Dark Mode 'Neon'"
                description="A sleek, modern design with glowing effects suitable for a tech-focused brand."
            >
                <FlipCard 
                    isFlipped={flipStates[1]} 
                    onFlip={() => handleFlip(1)}
                    frontContent={
                        <Card className="bg-gray-900 text-white border-red-500/50 border-2 h-full flex flex-col shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                            <CardHeader className="text-center items-center">
                                <div className="text-red-500" style={{ textShadow: '0 0 8px rgba(239, 68, 68, 0.7)'}}>{cardContent.chaos.icon}</div>
                                <CardTitle className="text-red-400 font-headline text-2xl" style={{ textShadow: '0 0 5px rgba(239, 68, 68, 0.5)'}}>{cardContent.chaos.title}</CardTitle>
                                <CardDescription className="text-gray-400">{cardContent.chaos.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-gray-300 flex-1">
                               {cardContent.chaos.points.map((point, i) => (
                                    <p key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-500 shrink-0 mt-1"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                             <div className="p-4 text-center text-xs text-gray-500 group-hover:text-white transition-colors">Click to Flip</div>
                        </Card>
                    }
                    backContent={
                         <Card className="bg-gray-900 text-white border-green-500/50 border-2 h-full flex flex-col shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                            <CardHeader className="text-center items-center">
                                <div className="text-green-400" style={{ textShadow: '0 0 8px rgba(34, 197, 94, 0.7)'}}>{cardContent.control.icon}</div>
                                <CardTitle className="text-green-400 font-headline text-2xl" style={{ textShadow: '0 0 5px rgba(34, 197, 94, 0.5)'}}>{cardContent.control.title}</CardTitle>
                                <CardDescription className="text-gray-400">{cardContent.control.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-gray-300 flex-1">
                                {cardContent.control.points.map((point, i) => (
                                     <p key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                            <div className="p-4 text-center text-xs text-gray-500 group-hover:text-white transition-colors">Click to Flip</div>
                        </Card>
                    }
                />
            </DesignOption>

            <DesignOption 
                title="Option 3: Gradient & Glassmorphism"
                description="A sophisticated look using gradients and a frosted-glass effect."
            >
                <FlipCard 
                    isFlipped={flipStates[2]} 
                    onFlip={() => handleFlip(2)}
                    containerClassName="rounded-2xl"
                    frontContent={
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-1">
                            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white flex flex-col h-full">
                                <CardHeader className="text-center items-center">
                                    <div className="text-red-400">{cardContent.chaos.icon}</div>
                                    <CardTitle className="text-white/90 font-headline text-2xl">{cardContent.chaos.title}</CardTitle>
                                    <CardDescription className="text-white/70">{cardContent.chaos.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-white/80 flex-1">
                                    {cardContent.chaos.points.map((point, i) => (
                                        <p key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-red-400 shrink-0 mt-1"/><span>{point}</span></p>
                                    ))}
                                </CardContent>
                                <div className="p-4 text-center text-xs text-white/50 group-hover:text-white transition-colors">Click to Flip</div>
                            </Card>
                        </div>
                    }
                    backContent={
                         <div className="relative w-full h-full bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-1">
                            <Card className="bg-white/50 backdrop-blur-md border-white/30 flex flex-col h-full">
                                <CardHeader className="text-center items-center">
                                    <div className="text-green-600">{cardContent.control.icon}</div>
                                    <CardTitle className="text-gray-800 font-headline text-2xl">{cardContent.control.title}</CardTitle>
                                    <CardDescription className="text-gray-600">{cardContent.control.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3 text-sm text-gray-700 flex-1">
                                    {cardContent.control.points.map((point, i) => (
                                        <p key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1"/><span>{point}</span></p>
                                    ))}
                                </CardContent>
                                <div className="p-4 text-center text-xs text-gray-500 group-hover:text-gray-800 transition-colors">Click to Flip</div>
                            </Card>
                        </div>
                    }
                />
            </DesignOption>

            <DesignOption 
                title="Option 4: Blueprint Sketch"
                description="A creative theme showing the transition from a messy idea to a clean, final plan."
            >
                <FlipCard 
                    isFlipped={flipStates[3]} 
                    onFlip={() => handleFlip(3)}
                    frontContent={
                        <Card className="h-full flex flex-col" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/graphy.png'), linear-gradient(to bottom, #e0f2fe, #dbeafe)", backgroundSize: 'auto, 100%', borderColor: '#60a5fa' }}>
                            <CardHeader className="text-center items-center">
                                <div className="text-blue-800"><Lightbulb className="w-12 h-12 mb-2"/></div>
                                <CardTitle className="text-blue-900 font-['Gochi_Hand'] text-3xl">{cardContent.chaos.title}</CardTitle>
                                <CardDescription className="font-['Gochi_Hand'] text-blue-800/80">{cardContent.chaos.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-blue-900/90 flex-1 font-['Gochi_Hand'] text-lg">
                                {cardContent.chaos.points.map((point, i) => (
                                    <p key={i} className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-700 shrink-0 mt-1.5"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                            <div className="p-4 text-center text-xs text-blue-700/70 group-hover:text-blue-900 transition-colors font-sans">Click to Flip</div>
                        </Card>
                    }
                    backContent={
                        <Card className="h-full flex flex-col bg-white border-green-600 border-2">
                             <CardHeader className="text-center items-center">
                                <div className="text-green-600"><Bot className="w-12 h-12 mb-2"/></div>
                                <CardTitle className="text-gray-800 font-headline text-2xl">{cardContent.control.title}</CardTitle>
                                <CardDescription className="text-gray-600">{cardContent.control.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-gray-700 flex-1">
                                {cardContent.control.points.map((point, i) => (
                                    <p key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1"/><span>{point}</span></p>
                                ))}
                            </CardContent>
                           <div className="p-4 text-center text-xs text-gray-500 group-hover:text-gray-800 transition-colors">Click to Flip</div>
                        </Card>
                    }
                />
            </DesignOption>
        </div>
    );
}
