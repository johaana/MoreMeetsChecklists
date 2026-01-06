
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Check } from 'lucide-react';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const AnimatedButton = ({
    enabledBg,
    enabledText,
    disabledBorder,
    chasingColor,
    agreed
}: {
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    chasingColor: string,
    agreed: boolean
}) => {
    const enabledBgColor = `hsl(var(--${enabledBg}))`;
    const enabledTextColor = `hsl(var(--${enabledText}))`;
    const disabledBorderColor = `hsl(var(--${disabledBorder}))`;
    const chasingColorValue = `hsl(var(--${chasingColor}))`;

    const buttonStyles: React.CSSProperties = {
        '--chasing-color': chasingColorValue,
        '--border-color': disabledBorderColor,
        '--text-color': `hsl(var(--${disabledBorder}))`,
        backgroundColor: agreed ? enabledBgColor : 'transparent',
        color: agreed ? enabledTextColor : `hsl(var(--${disabledBorder}))`,
        borderColor: agreed ? enabledBgColor : disabledBorderColor,
        borderWidth: '2px',
        borderStyle: 'solid',
        position: 'relative'
    };

    return (
        <button
            disabled={!agreed}
            className={cn(
                "w-full h-12 rounded-md transition-all duration-300 font-bold text-base",
                !agreed && "chasing-border-button"
            )}
            style={buttonStyles}
        >
            Buy Now
        </button>
    );
};

export default function TempDesignClientPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <main className="flex-1" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="buttons">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                         <SectionHeadline>The Guided Journey</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           A button isn't just a button. It's the final step in a conversation with your user. This design guides them from consideration to confident action.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Before */}
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                          <CardHeader>
                            <CardTitle style={{color: 'hsl(var(--text-primary))'}}>The Old Way: A Visual Dead End</CardTitle>
                            <CardDescription style={{color: 'hsl(var(--text-on-light))'}}>A standard disabled button feels like a wall. It's unclear what the user should do next, creating hesitation.</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-8 p-6 pt-0">
                               <button
                                disabled
                                className="w-full h-12 rounded-md transition-all duration-300 font-bold text-base bg-gray-500/20 text-gray-500/70 border-2 border-gray-500/30 cursor-not-allowed"
                            >
                                Buy Now
                            </button>
                            <div className="flex items-center space-x-2 justify-center">
                                <Checkbox id="terms-old" />
                                <Label htmlFor="terms-old" className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms</Label>
                            </div>
                          </CardContent>
                        </Card>

                        {/* After */}
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}} className="border-2 border-accent/50 shadow-lg shadow-accent/10">
                          <CardHeader>
                            <CardTitle style={{color: 'hsl(var(--text-primary))'}}>The MoreMeets Way: A Clear Path</CardTitle>
                            <CardDescription style={{color: 'hsl(var(--text-on-light))'}}>An engaging border invites action. Checking the box gives a satisfying green 'Go' signal, creating a confident path to purchase.</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-8 p-6 pt-0">
                            <AnimatedButton
                                enabledBg="authority-green"
                                enabledText="bg-primary"
                                disabledBorder="accent"
                                chasingColor="high-contrast-green"
                                agreed={agreed}
                            />
                            <div className="flex items-center space-x-2 justify-center">
                                <Checkbox id="terms-new" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                                <Label htmlFor="terms-new" className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms</Label>
                            </div>
                          </CardContent>
                        </Card>
                    </div>
                </div>
            </Section>
        </main>
    );
}
