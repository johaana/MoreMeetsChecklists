
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Frown, Smile, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipCard = ({ isFlipped, onFlip }: { isFlipped: boolean, onFlip: () => void }) => {
  return (
    <div 
      className="relative w-full h-96 cursor-pointer group" 
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
        {/* Front of Card */}
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden' }}>
          <Card className="border-destructive/70 border-2 flex flex-col h-full bg-slate-900 text-white shadow-lg shadow-destructive/20 bg-[url('/noise.png')] bg-repeat">
            <CardHeader className="text-center items-center">
              <Frown className="w-12 h-12 text-destructive mb-2"/>
              <CardTitle className="text-destructive font-headline text-2xl">The Old Way: Chaos</CardTitle>
              <CardDescription className="text-slate-400">Relying on human memory, verbal instructions, and hope.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-slate-300 flex-1">
              <p className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?"</span></p>
              <p className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-destructive shrink-0 mt-1"/><span>A new hire makes a costly mistake on their first day.</span></p>
              <p className="flex items-start gap-3"><ArrowRight className="w-5 h-5 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            </CardContent>
             <div className="p-4 text-center">
                <div className="flex items-center justify-center text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <RefreshCw className="w-3 h-3 mr-2 transition-transform group-hover:rotate-180 duration-500"/> Click to Flip
                </div>
            </div>
          </Card>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
           <Card className="border-primary/70 border-2 bg-slate-50 shadow-lg shadow-primary/20 flex flex-col h-full">
            <CardHeader className="text-center items-center">
                <Smile className="w-12 h-12 text-primary mb-2"/>
              <CardTitle className="text-primary font-headline text-2xl">The New Way: Control</CardTitle>
              <CardDescription className="text-slate-600">A system of record that ensures excellence every time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-base text-slate-800 flex-1">
               <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log."</span></p>
              <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span>New hires are productive and compliant from day one.</span></p>
              <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
            </CardContent>
             <div className="p-4 text-center">
                 <div className="flex items-center justify-center text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <RefreshCw className="w-3 h-3 mr-2 transition-transform group-hover:rotate-180 duration-500"/> Click to Flip Back
                </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

const VerticalUnfoldCard = ({ isFlipped, onFlip }: { isFlipped: boolean, onFlip: () => void }) => {
    return (
        <div className="relative w-full h-80 cursor-pointer group" onClick={onFlip} style={{ perspective: '1200px' }}>
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front"
                        initial={{ opacity: 1, rotateX: 0 }}
                        exit={{ opacity: 0, rotateX: -90, y: -40 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute w-full h-full"
                    >
                        <Card className="border-destructive/50 border-2 flex flex-col h-full">
                           <CardHeader>
                                <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Old Way: Chaos</CardTitle>
                                <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
                                <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?"</span></p>
                                <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire makes a costly mistake on their first day.</span></p>
                            </CardContent>
                            <div className="p-4 text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click to Reveal</div>
                        </Card>
                    </motion.div>
                ) : (
                     <motion.div
                        key="back"
                        initial={{ opacity: 0, rotateX: 90, y: 40 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute w-full h-full"
                    >
                        <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col h-full">
                            <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The New Way: Control</CardTitle>
                            <CardDescription>A system of record that ensures excellence every time.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-foreground flex-1">
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily. See log."</span></p>
                            <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires are productive from day one.</span></p>
                            </CardContent>
                             <div className="p-4 text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click to Reset</div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PeelCard = ({ isFlipped, onFlip }: { isFlipped: boolean, onFlip: () => void }) => {
    return (
        <div className="relative w-full h-80 cursor-pointer group" onClick={onFlip}>
            <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col h-full">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The New Way: Control</CardTitle>
                    <CardDescription>A system of record that ensures excellence every time.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-foreground flex-1">
                    <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Verifiable audit trail for every task.</span></p>
                    <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system.</span></p>
                </CardContent>
            </Card>

            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={false}
                animate={{
                    clipPath: isFlipped
                        ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
                        : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                <Card className="border-destructive/50 border-2 flex flex-col h-full">
                    <CardHeader>
                        <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Old Way: Chaos</CardTitle>
                        <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?"</span></p>
                        <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire makes a costly mistake.</span></p>
                    </CardContent>
                    <div className="p-4 text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click to Peel</div>
                </Card>
            </motion.div>
        </div>
    );
};

const ZoomFadeCard = ({ isFlipped, onFlip }: { isFlipped: boolean, onFlip: () => void }) => {
    return (
        <div className="relative w-full h-80 cursor-pointer group" onClick={onFlip}>
            <AnimatePresence>
                {!isFlipped ? (
                    <motion.div
                        key="front-zoom"
                        initial={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full h-full"
                    >
                         <Card className="border-destructive/50 border-2 flex flex-col h-full">
                           <CardHeader>
                                <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Old Way: Chaos</CardTitle>
                                <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
                                <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Best manager quits, takes knowledge with them.</span></p>
                                 <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>No audit trail during an inspection.</span></p>
                            </CardContent>
                              <div className="p-4 text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click to Transform</div>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.div
                        key="back-zoom"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute w-full h-full"
                    >
                        <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col h-full">
                            <CardHeader>
                            <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The New Way: Control</CardTitle>
                            <CardDescription>A system of record that ensures excellence every time.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-foreground flex-1">
                                <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge retained in the system.</span></p>
                                <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Timestamped audit trail for every task.</span></p>
                            </CardContent>
                            <div className="p-4 text-center text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Click to Reset</div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


const DesignOption = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <div className="py-12 border-t">
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
    const [flipped1, setFlipped1] = useState(false);
    const [flipped2, setFlipped2] = useState(false);
    const [flipped3, setFlipped3] = useState(false);
    const [flipped4, setFlipped4] = useState(false);

    return (
        <div className="container py-12">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold mb-8">
                <p>⚠️ This is a temporary design preview page. ⚠️</p>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Interactive Card Animations</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">Click on the cards below to see the different animation styles for the "Chaos to Control" section.</p>
            </div>
            
            <DesignOption 
                title="Option 1: 3D Flip (Redesigned)"
                description="A dynamic 3D flip with improved colors and icons to represent chaos and control."
            >
                <FlipCard isFlipped={flipped1} onFlip={() => setFlipped1(!flipped1)} />
            </DesignOption>

            <DesignOption 
                title="Option 2: Vertical Unfold"
                description="The 'Chaos' card folds away while the 'Control' card unfolds from below, like turning a page."
            >
                <VerticalUnfoldCard isFlipped={flipped2} onFlip={() => setFlipped2(!flipped2)} />
            </DesignOption>

            <DesignOption 
                title="Option 3: Corner Peel"
                description="The 'Chaos' card peels away from the corner to reveal the solution underneath. Click to peel and reset."
            >
                <PeelCard isFlipped={flipped3} onFlip={() => setFlipped3(!flipped3)} />
            </DesignOption>

             <DesignOption 
                title="Option 4: Zoom & Fade"
                description="A smooth and modern transition where the old state fades out while the new one fades in."
            >
                <ZoomFadeCard isFlipped={flipped4} onFlip={() => setFlipped4(!flipped4)} />
            </DesignOption>
        </div>
    );
}
