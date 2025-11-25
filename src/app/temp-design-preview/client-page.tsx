
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Frown, Smile } from 'lucide-react';
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
      className={cn("group relative h-[28rem] w-full cursor-pointer", containerClassName)}
      onClick={onFlip}
      style={{ perspective: '1000px' }}
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

const DesignOption = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <div className="py-12 border-t first:border-t-0">
        <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold font-headline">{title}</h3>
            <p className="text-muted-foreground mt-2">{description}</p>
        </div>
        <div className="max-w-sm mx-auto">
            {children}
        </div>
    </div>
);

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

export default function TempDesignClientPage() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="container py-12">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold mb-8">
                <p>⚠️ This is a temporary design preview page. ⚠️</p>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Interactive Card Design</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">Click the card to see the 3D flip animation.</p>
            </div>
            
            <DesignOption 
                title="Premium Animated Card"
                description="A sophisticated, dark-themed card with gradient borders, glow effects, and a glassmorphism panel for a modern, premium feel."
            >
                <FlipCard 
                    isFlipped={isFlipped} 
                    onFlip={() => setIsFlipped(!isFlipped)}
                    containerClassName="rounded-2xl shadow-2xl"
                    frontContent={
                        <div className="relative w-full h-full rounded-2xl p-0.5 bg-gradient-to-br from-red-500/50 via-gray-800 to-gray-900 group-hover:from-red-500/70 transition-all duration-500">
                             <div className="relative w-full h-full bg-gray-900 rounded-[14px] p-6 flex flex-col text-white backdrop-blur-xl bg-opacity-80">
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
                                <div className="p-2 text-center text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity">Click Card to Flip</div>
                            </div>
                        </div>
                    }
                    backContent={
                         <div className="relative w-full h-full rounded-2xl p-0.5 bg-gradient-to-br from-green-500/50 via-gray-800 to-gray-900 group-hover:from-green-500/70 transition-all duration-500">
                             <div className="relative w-full h-full bg-gray-900 rounded-[14px] p-6 flex flex-col text-white backdrop-blur-xl bg-opacity-80">
                                <CardHeader className="text-center items-center p-0">
                                    <div className="text-green-400 group-hover:text-green-300 transition-colors">{cardContent.control.icon}</div>
                                    <CardTitle className="text-green-400 font-headline text-2xl group-hover:text-green-300 transition-colors">{cardContent.control.title}</CardTitle>
                                    <CardDescription className="text-gray-400 text-sm">{cardContent.control.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4 text-sm text-gray-200 flex-1 mt-6 p-0">
                                    {cardContent.control.points.map((point, i) => (
                                        <p key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green-500/80 shrink-0 mt-1"/><span>{point}</span></p>
                                    ))}
                                </CardContent>
                                <div className="p-2 text-center text-xs text-gray-500 opacity-70 group-hover:opacity-100 transition-opacity">Click Card to Flip</div>
                            </div>
                        </div>
                    }
                />
            </DesignOption>
        </div>
    );
}
