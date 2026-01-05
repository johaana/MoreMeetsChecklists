
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
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
                borderColor: agreed ? 'transparent' : disabledBorderColor,
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
                    <div className="text-center mb-12 max-w-2xl mx-auto">
                        <SectionHeadline>The Problem With Disabled Buttons</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           Most "disabled" buttons are visual dead ends. They look dull, uninviting, and give the user no clue what to do next. They stop the user's journey cold.
                        </p>
                    </div>

                     <Card className="max-w-sm mx-auto" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--text-primary))'}}><X className="text-risk-accent"/> The Old Way</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button className="w-full" disabled={true}>Buy Now</Button>
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
                         <SectionHeadline>The Solution: Guide the Eye, Reward the Action</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                            A better button doesn't just appear—it invites interaction. The animated border draws the user's eye, signaling that an action is required. When the checkbox is clicked, the button transforms, providing satisfying feedback and a clear path forward.
                        </p>
                    </div>

                    <Card className="max-w-2xl mx-auto" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2" style={{color: 'hsl(var(--text-primary))'}}><Check className="text-authority-green"/> The MoreMeets Way</CardTitle>
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
                                    disabledText="text-primary"
                                    chasingColor="text-primary"
                                    agreed={agreed}
                                    className="border-2"
                                />
                                <AnimatedButton
                                    enabledBg="accent"
                                    enabledText="bg-primary"
                                    disabledBorder="accent"
                                    disabledText="text-primary"
                                    chasingColor="authority-green"
                                    agreed={agreed}
                                    className="border-2"
                                />
                                <AnimatedButton
                                    enabledBg="text-primary"
                                    enabledText="bg-primary"
                                    disabledBorder="text-primary"
                                    disabledText="text-primary"
                                    chasingColor="accent-authority"
                                    agreed={agreed}
                                    className="border-2"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </main>
    );
}

    