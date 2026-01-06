
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

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
                "w-full h-12 rounded-md transition-all duration-300 font-bold text-base",
                 agreed ? "" : "chasing-border-button",
                className
            )}
            style={{
                '--chasing-color': chasingColorValue,
                '--border-color': disabledBorderColor,
                '--text-color': `hsl(var(--${disabledBorder}))`,
                backgroundColor: agreed ? enabledBgColor : 'transparent',
                color: agreed ? enabledTextColor : `hsl(var(--${disabledBorder}))`,
                 borderColor: agreed ? enabledBgColor : disabledBorderColor,
                 borderWidth: '2px',
                 borderStyle: 'solid',
            } as React.CSSProperties}
        >
            Buy Now
        </button>
    )
};

const ButtonShowcaseCard = ({
    title,
    description,
    enabledBg,
    enabledText,
    disabledBorder,
    chasingColor
}: {
    title: string,
    description: string,
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    chasingColor: string
}) => {
    const [agreed, setAgreed] = useState(false);

    return (
        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
            <CardHeader>
                <CardTitle style={{color: 'hsl(var(--text-primary))'}}>{title}</CardTitle>
                <CardDescription style={{color: 'hsl(var(--text-on-light))'}}>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6 pt-0">
                <AnimatedButton
                    enabledBg={enabledBg}
                    enabledText={enabledText}
                    disabledBorder={disabledBorder}
                    chasingColor={chasingColor}
                    agreed={agreed}
                />
                <div className="flex items-center space-x-2 justify-center">
                    <Checkbox id={`terms-${title.replace(/\s+/g, '-')}`} checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                    <Label htmlFor={`terms-${title.replace(/\s+/g, '-')}`} className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms</Label>
                </div>
            </CardContent>
        </Card>
    );
};


export default function TempDesignClientPage() {
    return (
        <main className="flex-1" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="buttons">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12 max-w-3xl mx-auto">
                         <SectionHeadline>Interactive Button Showcase</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           A disabled button shouldn't be a dead end. Explore how different color transitions can guide the user and create a more satisfying call to action. Click each checkbox to see the effect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ButtonShowcaseCard 
                            title="Recommended: Yellow to Green"
                            description="Draws attention with a vibrant yellow border, then confirms the action with a solid green 'Go' state. The most intuitive journey for the user."
                            enabledBg="authority-green"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                        />
                         <ButtonShowcaseCard 
                            title="Monochromatic: Yellow to Yellow"
                            description="A bold, brand-consistent option. The yellow border 'powers up' to a solid yellow fill, keeping the focus on your primary accent color."
                            enabledBg="accent"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                        />
                        <ButtonShowcaseCard 
                            title="High-Contrast: White"
                            description="A clean and modern aesthetic. The button fills with solid white, creating a crisp, high-contrast element that stands out."
                            enabledBg="text-primary"
                            enabledText="bg-primary"
                            disabledBorder="text-primary"
                            chasingColor="high-contrast-green"
                        />
                        <ButtonShowcaseCard 
                            title="Urgent: Red to Red"
                            description="Uses the 'risk' accent color to signal importance or a final warning. Best for critical actions like 'Delete Account'."
                            enabledBg="risk-accent"
                            enabledText="text-primary"
                            disabledBorder="risk-accent"
                            chasingColor="risk-accent"
                        />
                    </div>
                </div>
            </Section>
        </main>
    );
}
