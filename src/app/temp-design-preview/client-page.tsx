
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Frown, Smile } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const FlipCard = ({ isFlipped, onFlip }: { isFlipped: boolean, onFlip: () => void }) => {
  return (
    <div 
      className="relative w-full h-80 cursor-pointer" 
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
          <Card className="border-destructive/50 border-2 flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-6 h-6"/> The Old Way: Chaos</CardTitle>
              <CardDescription>Relying on human memory, verbal instructions, and hope.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground flex-1">
              <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>"Did anyone check the fire exits?"</span></p>
              <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>A new hire makes a costly mistake on their first day.</span></p>
              <p className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-destructive shrink-0 mt-1"/><span>Your best manager quits, taking critical knowledge with them.</span></p>
            </CardContent>
             <div className="p-4 text-center">
                <Button variant="destructive" size="sm">Click to Flip</Button>
            </div>
          </Card>
        </div>

        {/* Back of Card */}
        <div className="absolute w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
           <Card className="border-primary/50 border-2 bg-background shadow-lg flex flex-col h-full">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-6 h-6"/> The New Way: Control</CardTitle>
              <CardDescription>A system of record that ensures excellence every time.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-foreground flex-1">
               <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>"Fire exit check completed daily at 9:05 AM. See log."</span></p>
              <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>New hires are productive and compliant from day one.</span></p>
              <p className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1"/><span>Knowledge is retained in the system, making your operation resilient.</span></p>
            </CardContent>
             <div className="p-4 text-center">
                 <Button variant="default" size="sm">Click to Flip Back</Button>
            </div>
          </Card>
        </div>
      </motion.div>
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
)


export default function TempDesignClientPage() {
    const [flipped1, setFlipped1] = useState(false);

    return (
        <div className="container py-12">
            <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold mb-8">
                <p>⚠️ This is a temporary design preview page. ⚠️</p>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Flipping Card Animation Options</h2>
                <p className="text-muted-foreground mt-2 text-base md:text-lg">Click on the cards below to see the different animation styles for the "Chaos to Control" section.</p>
            </div>
            
            <DesignOption 
                title="Option 1: Standard Flip"
                description="A clean, simple 2D flip effect. The card rotates on its vertical axis to reveal the 'Control' state."
            >
                <FlipCard isFlipped={flipped1} onFlip={() => setFlipped1(!flipped1)} />
            </DesignOption>
        </div>
    );
}
