
'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Info, Globe, CreditCard, Wallet, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const ConceptCard = ({ title, description, children, badge }: { title: string, description: string, children: React.ReactNode, badge?: string }) => (
    <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}} className="w-full border-2 shadow-lg flex flex-col">
        <CardHeader>
            <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-xl" style={{color: 'hsl(var(--text-primary))'}}>{title}</CardTitle>
                {badge && <Badge variant="accent" className="bg-primary/20 text-primary border-primary/30">{badge}</Badge>}
            </div>
            <CardDescription style={{color: 'hsl(var(--text-on-light))'}}>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 space-y-6">
            {children}
        </CardContent>
    </Card>
);

export default function TempDesignClientPage() {
    const [currency, setCurrency] = useState('INR');
    const [agreed, setAgreed] = useState(false);

    return (
        <main className="flex-1 pb-20" style={{ backgroundColor: 'hsl(var(--bg-primary))' }}>
            <Section id="intro">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <Badge variant="outline" className="border-primary text-primary">UX EXPERT REVIEW</Badge>
                        <SectionHeadline>Conversion Optimization Lab</SectionHeadline>
                        <p className="text-lg" style={{color: 'hsl(var(--text-secondary))'}}>
                           Friction at checkout is the #1 killer of digital sales. Here are three high-fidelity concepts designed to simplify the INR/USD choice and increase purchase confidence.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="pt-0">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                        
                        {/* Concept 1: Behavioral Choice */}
                        <ConceptCard 
                            title="1. Behavioral Logic" 
                            description="Users don't think in 'Currencies'; they think in 'How am I paying?'. These tabs focus on the behavior."
                            badge="Recommended"
                        >
                            <div className="space-y-4">
                                <Label className="text-xs uppercase tracking-widest text-muted-foreground">Select Payment Region</Label>
                                <Tabs defaultValue="INR" onValueChange={setCurrency} className="w-full">
                                    <TabsList className="grid w-full grid-cols-2 bg-background/50 border">
                                        <TabsTrigger value="INR" className="data-[state=active]:bg-primary data-[state=active]:text-bg-primary">
                                            <div className="flex flex-col items-center py-1">
                                                <span className="text-xs font-bold">INDIA</span>
                                                <span className="text-[10px] opacity-70">UPI / QR / Local Card</span>
                                            </div>
                                        </TabsTrigger>
                                        <TabsTrigger value="USD" className="data-[state=active]:bg-primary data-[state=active]:text-bg-primary">
                                            <div className="flex flex-col items-center py-1">
                                                <span className="text-xs font-bold">INTERNATIONAL</span>
                                                <span className="text-[10px] opacity-70">Credit Card / PayPal</span>
                                            </div>
                                        </TabsTrigger>
                                    </TabsList>
                                </Tabs>
                                <div className="p-4 rounded-lg bg-background/30 border border-dashed border-border flex items-center justify-center">
                                    <p className="text-2xl font-bold">{currency === 'INR' ? '₹5,999' : '$79'}</p>
                                </div>
                            </div>
                        </ConceptCard>

                        {/* Concept 2: Visual Trust Anchors */}
                        <ConceptCard 
                            title="2. Visual Trust Anchors" 
                            description="Icons are processed 60,000x faster than text. Showing local logos reduces 'Is this for me?' anxiety."
                        >
                            <div className="space-y-6">
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <p className="text-4xl font-extrabold text-primary-text">₹5,999</p>
                                    <div className="flex items-center gap-2 text-xs text-secondary-text">
                                        <ShieldCheck className="w-3 h-3 text-authority-green" />
                                        Verified Indian Merchant
                                    </div>
                                </div>
                                
                                <div className="space-y-3">
                                    <Label className="text-xs text-muted-foreground">Accepted Methods:</Label>
                                    <div className="grid grid-cols-4 gap-2">
                                        {[1,2,3,4].map(i => (
                                            <div key={i} className="aspect-video bg-background/50 rounded border border-border flex items-center justify-center">
                                                <span className="text-[10px] font-mono text-muted-foreground">LOGO</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-[10px] text-center text-muted-foreground italic">UPI • Google Pay • PhonePe • RuPay • Cards</p>
                                </div>

                                <button className="w-full py-3 bg-authority-green text-bg-primary font-bold rounded-md flex items-center justify-center gap-2">
                                    Pay via UPI / Local Card <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </ConceptCard>

                        {/* Concept 3: The Last-Mile Switcher */}
                        <ConceptCard 
                            title="3. The 'Last-Mile' Switch" 
                            description="Captures the user right at the point of action. If they see the wrong price, the fix is exactly where they are looking."
                        >
                            <div className="space-y-8 h-full flex flex-col justify-between">
                                <div className="text-center">
                                    <Badge className="bg-authority-green/10 text-authority-green border-authority-green/20 mb-4">
                                        <Globe className="w-3 h-3 mr-1" /> Detected: Mumbai, India
                                    </Badge>
                                    <p className="text-5xl font-black">₹5,999</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="p-3 bg-alternate-background rounded border border-authority-green/30 flex items-start gap-3">
                                        <Info className="w-4 h-4 text-authority-green shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="text-[11px] font-bold">Outside India?</p>
                                            <button className="text-[10px] text-primary underline font-medium hover:text-primary/80">
                                                Switch to USD ($) for International Cards
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full py-4 bg-primary text-bg-primary font-bold rounded-lg shadow-xl shadow-primary/10">
                                        Get Instant Access
                                    </button>
                                </div>
                            </div>
                        </ConceptCard>

                    </div>

                    <div className="mt-16 p-8 rounded-2xl border-2 border-dashed border-primary/20 bg-background/20 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Zap className="text-accent" /> Why these work:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm text-secondary-text">
                            <div className="space-y-2">
                                <p><strong className="text-primary-text">Context over Choice:</strong> By detecting location or naming payment methods (UPI vs PayPal), we do the thinking for the user.</p>
                                <p><strong className="text-primary-text">Immediate Recognition:</strong> Seeing a UPI logo provides instant psychological safety to an Indian user.</p>
                            </div>
                            <div className="space-y-2">
                                <p><strong className="text-primary-text">Proximity:</strong> Putting the "International card? Switch here" link near the button prevents them from scrolling back up to find the toggle.</p>
                                <p><strong className="text-primary-text">Transparency:</strong> Showing both options (or making the switch effortless) creates a sense of a global, professional brand.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
