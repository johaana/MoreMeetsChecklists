
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Check, X } from 'lucide-react';

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
    disabledText,
    chasingColor,
    agreed,
    className
}: {
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    disabledText: string,
    chasingColor: string,
    agreed: boolean,
    className?: string
}) => {
    const enabledBgColor = `hsl(var(--${enabledBg}))`;
    const enabledTextColor = `hsl(var(--${enabledText}))`;
    const disabledBorderColor = `hsl(var(--${disabledBorder}))`;
    const disabledTextColor = `hsl(var(--${disabledText}))`;
    const chasingColorValue = `hsl(var(--${chasingColor}))`;

    return (
        <button
            disabled={!agreed}
            className={cn(
                "w-full h-12 rounded-md transition-all duration-300 font-semibold text-base chasing-border-button",
                className
            )}
            style={{
                '--chasing-color': chasingColorValue,
                '--border-color': disabledBorderColor,
                '--text-color': disabledTextColor,
                backgroundColor: agreed ? enabledBgColor : 'transparent',
                color: agreed ? enabledTextColor : disabledTextColor,
            } as React.CSSProperties}
        >
            Buy Now
        </button>
    )
};

export default function TempDesignClientPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <main className="flex-1" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
             <Section id="before">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                        <SectionHeadline>The User Journey: From Consideration to Action</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           A button isn't just a button; it's the final step in a user's decision. A disabled button shouldn't be a dead end. It should be an invitation—a visual guide that shows the user exactly what to do next to complete their journey.
                        </p>
                    </div>

                     <Card className="max-w-sm mx-auto" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--text-primary))'}}><X className="text-risk-accent"/> The Old Way: A Visual Dead End</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <button className="w-full h-12 rounded-md bg-muted text-muted-foreground" disabled={true}>Buy Now</button>
                             <div className="flex items-center space-x-2">
                                <Checkbox id="terms-before" />
                                <Label htmlFor="terms-before" className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms and conditions</Label>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>

            <Section id="after" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                         <SectionHeadline>The MoreMeets Way: An Interactive Invitation</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           Our buttons use a dynamic, animated border to draw the eye and signal interactivity. They feel premium and alive, encouraging the user to complete the action. When the condition is met, the button transforms, providing clear, satisfying feedback that the final step is unlocked.
                        </p>
                    </div>

                    <Card className="max-w-2xl mx-auto" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--text-primary))'}}><Check className="text-authority-green"/> The Interactive Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-8">
                             <div className="flex items-center space-x-2 justify-center">
                                <Checkbox id="terms-after" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                                <Label htmlFor="terms-after" className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms and conditions</Label>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6">
                                <AnimatedButton
                                    enabledBg="authority-green"
                                    enabledText="bg-primary"
                                    disabledBorder="authority-green"
                                    disabledText="authority-green"
                                    chasingColor="high-contrast-green"
                                    agreed={agreed}
                                />
                                <AnimatedButton
                                    enabledBg="accent"
                                    enabledText="bg-primary"
                                    disabledBorder="accent"
                                    disabledText="accent"
                                    chasingColor="high-contrast-green"
                                    agreed={agreed}
                                />
                                <AnimatedButton
                                    enabledBg="text-primary"
                                    enabledText="bg-primary"
                                    disabledBorder="text-primary"
                                    disabledText="text-primary"
                                    chasingColor="accent"
                                    agreed={agreed}
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </main>
    );
}