
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
    agreed,
    animationType = 'fill',
    className
}: {
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    chasingColor: string,
    agreed: boolean,
    animationType?: 'fill' | 'pulse' | 'wipe' | 'icon-pop';
    className?: string
}) => {
    const [isPulsing, setIsPulsing] = useState(false);
    const [showIcon, setShowIcon] = useState(false);
    const enabledBgColor = `hsl(var(--${enabledBg}))`;
    const enabledTextColor = `hsl(var(--${enabledText}))`;
    const disabledBorderColor = `hsl(var(--${disabledBorder}))`;
    const chasingColorValue = `hsl(var(--${chasingColor}))`;

    useEffect(() => {
        if (agreed) {
            if (animationType === 'pulse') {
                setIsPulsing(true);
                const timer = setTimeout(() => setIsPulsing(false), 1000);
                return () => clearTimeout(timer);
            }
            if (animationType === 'icon-pop') {
                setShowIcon(true);
                const timer = setTimeout(() => setShowIcon(false), 400);
                return () => clearTimeout(timer);
            }
        }
    }, [agreed, animationType]);

    const buttonStyles: React.CSSProperties = {
        '--chasing-color': chasingColorValue,
        '--border-color': disabledBorderColor,
        '--text-color': `hsl(var(--${disabledBorder}))`,
        '--enabled-bg-color': enabledBgColor,
        backgroundColor: agreed && animationType !== 'wipe' ? enabledBgColor : 'transparent',
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
                !agreed && "chasing-border-button",
                isPulsing && "pulse-once",
                animationType === 'wipe' && 'wipe-fill',
                agreed && animationType === 'wipe' && 'active',
                className
            )}
            style={buttonStyles}
        >
            <span className="relative z-10 flex items-center justify-center">
                 {agreed && animationType === 'icon-pop' && showIcon && <Check className="w-5 h-5 mr-2 icon-pop" />}
                Buy Now
            </span>
        </button>
    );
};

const ButtonShowcaseCard = ({
    title,
    description,
    enabledBg,
    enabledText,
    disabledBorder,
    chasingColor,
    animationType = 'fill'
}: {
    title: string,
    description: string,
    enabledBg: string,
    enabledText: string,
    disabledBorder: string,
    chasingColor: string,
    animationType?: 'fill' | 'pulse' | 'wipe' | 'icon-pop';
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
                    animationType={animationType}
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
                         <SectionHeadline>The Guided Journey</SectionHeadline>
                        <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                           A button isn't just a button. It's the final step in a conversation with your user. Here are different ways to make that final step feel rewarding, intuitive, and confident.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <ButtonShowcaseCard 
                            title="Recommended: The 'Go' Signal"
                            description="A yellow border grabs attention. Checking the box gives a satisfying green 'Go' light, clearly signaling it's safe to proceed. This is the most intuitive user journey."
                            enabledBg="authority-green"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                        />
                         <ButtonShowcaseCard 
                            title="The Power-Up Pulse"
                            description="When enabled, the border pulses with light before filling. This animation acts as a final, energetic nudge, telling the user 'Okay, we're ready!'"
                            enabledBg="authority-green"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                            animationType="pulse"
                        />
                        <ButtonShowcaseCard 
                            title="The Swift Wipe"
                            description="Clean, modern, and efficient. The new color wipes across the button, providing a sense of progress and completion. It feels fast and responsive."
                            enabledBg="authority-green"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                            animationType="wipe"
                        />
                        <ButtonShowcaseCard 
                            title="The Confirmation Pop"
                            description="A checkmark icon quickly appears and fades, giving explicit visual confirmation that the user's action was successful before the button becomes fully active."
                            enabledBg="authority-green"
                            enabledText="bg-primary"
                            disabledBorder="accent"
                            chasingColor="high-contrast-green"
                            animationType="icon-pop"
                        />
                    </div>
                </div>
            </Section>
        </main>
    );
}

