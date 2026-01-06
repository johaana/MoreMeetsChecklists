
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, Check } from 'lucide-react';

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
    agreed,
    className
}: {
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    chasingColor: string,
    agreed: boolean,
    className?: string
}) => {
    const enabledBgColor = `hsl(var(--${enabledBg}))`;
    const enabledTextColor = `hsl(var(--${enabledText}))`;
    const disabledBorderColor = `hsl(var(--${disabledBorder}))`;
    const chasingColorValue = `hsl(var(--${chasingColor}))`;

    return (
        <button
            disabled={!agreed}
            className={cn(
                "w-full h-12 rounded-md transition-all duration-300 font-semibold text-base",
                 agreed ? "chasing-border-button-active" : "chasing-border-button",
                 agreed && "font-bold",
                className
            )}
            style={{
                '--chasing-color': chasingColorValue,
                '--border-color': disabledBorderColor,
                '--text-color': disabledBorderColor,
                backgroundColor: agreed ? enabledBgColor : 'transparent',
                color: agreed ? enabledTextColor : `hsl(var(--${disabledBorder}))`,
            } as React.CSSProperties}
        >
            Buy Now
        </button>
    )
};

export default function TempDesignClientPage() {
    const [agreed, setAgreed] = useState(false);

    return (
        <main className="flex-1" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="after" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                         <SectionHeadline>The "Chasing Border" Effect</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           A disabled button shouldn't be a dead end. This animated border draws the user's eye, signaling that an action is required to proceed. It transforms a frustrating roadblock into an engaging invitation.
                        </p>
                    </div>

                    <Card className="max-w-4xl mx-auto" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                        <CardHeader className="text-center">
                            <CardTitle className="flex items-center gap-2 justify-center" style={{color: 'hsl(var(--text-primary))'}}><Check className="text-authority-green"/> The Interactive Experience</CardTitle>
                             <CardDescription className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>Click the checkbox to see how the buttons transition from an attention-grabbing disabled state to a clear, actionable enabled state.</CardDescription>
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
                                    chasingColor="high-contrast-green"
                                    agreed={agreed}
                                />
                                <AnimatedButton
                                    enabledBg="accent"
                                    enabledText="bg-primary"
                                    disabledBorder="accent"
                                    chasingColor="high-contrast-green"
                                    agreed={agreed}
                                />
                                 <AnimatedButton
                                    enabledBg="text-primary"
                                    enabledText="bg-primary"
                                    disabledBorder="text-primary"
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
