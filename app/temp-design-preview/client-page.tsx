
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Lock, Unlock } from "lucide-react";
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight", className)} style={{ color: 'hsl(var(--text-primary))'}}>
        {children}
    </h2>
);

const HeroSection = () => (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full z-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
        <div 
            className="absolute inset-0 z-10" 
            style={{
                background: 'linear-gradient(90deg, rgba(14,20,17,0.85) 0%, rgba(14,20,17,0.65) 40%, rgba(14,20,17,0.25) 70%, rgba(14,20,17,0.05) 100%)'
            }}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[48%] min-w-[550px] space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter !leading-[1.05]" style={{ fontFamily: 'Inter Tight, sans-serif', color: 'hsl(var(--text-primary))', letterSpacing: '-0.02em' }}>
                    People forget.
                    <br/>
                    Your business
                    <br/>
                    shouldn’t pay for it.
                </h1>
                <p className="text-lg max-w-[520px]" style={{color: 'hsl(var(--text-secondary))', lineHeight: 1.5}}>
                    When work lives in people’s heads, execution breaks
                    during audits, shift changes, growth, and emergencies.
                </p>
                <p className="text-lg font-medium" style={{color: 'hsl(var(--accent-urgency))', letterSpacing: '0.01em'}}>
                   Consistency can’t depend on memory.
                </p>
                
                <div className="flex flex-col items-start gap-4 pt-6">
                    <Button size="lg" asChild className="group" style={{ backgroundColor: 'hsl(var(--accent-authority))', color: 'hsl(var(--bg-primary))', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                        <Link href="/library">
                           View Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="link" className="p-0 h-auto text-sm" style={{color: 'hsl(var(--text-secondary))'}}>
                         <Link href="#how-it-works">See how it works &rarr;</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);


const ButtonExplorationSection = () => {
    const [agreed, setAgreed] = useState(false);

    return (
        <Section id="button-exploration" style={{ backgroundColor: 'hsl(var(--bg-secondary))' }}>
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <SectionHeadline>Button Style Exploration</SectionHeadline>
                    <p className="text-lg mt-4" style={{color: 'hsl(var(--text-secondary))'}}>
                        Interactive examples of different button styles for the primary Call-to-Action. Toggle the checkbox to see enabled/disabled states.
                    </p>
                </div>

                <div className="flex items-center space-x-2 max-w-sm mx-auto mb-12 p-4 rounded-lg border" style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                    <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                    <Label htmlFor="terms" className="text-sm" style={{color: 'hsl(var(--text-on-light))'}}>I agree to the terms and conditions</Label>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Column 1: Fill-Up Effect */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-center" style={{color: 'hsl(var(--text-primary))'}}>Fill-Up Effect</h3>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-authority))'}}>Green (Authority)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button 
                                    disabled={!agreed} 
                                    className="w-full fill-in-button" 
                                    variant={agreed ? "default" : "outline"}
                                    style={{'--fill-color': 'hsl(var(--accent-authority))'} as React.CSSProperties}>
                                    <span className={cn("text-content", agreed ? "text-primary-foreground" : "text-primary")}>Buy Now</span>
                                </Button>
                            </CardContent>
                        </Card>
                         <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-urgency))'}}>Red (Urgency)</CardTitle>
                            </CardHeader>
                            <CardContent>
                               <Button 
                                    disabled={!agreed} 
                                    className="w-full fill-in-button" 
                                    variant={agreed ? "destructive" : "outline"}
                                    style={{'--fill-color': 'hsl(var(--accent-urgency))'} as React.CSSProperties}>
                                    <span className={cn("text-content", agreed ? "text-destructive-foreground" : "text-destructive")}>Buy Now</span>
                                </Button>
                            </CardContent>
                        </Card>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                               <CardTitle style={{color: 'hsl(var(--accent))'}}>Gold (Premium)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button 
                                    disabled={!agreed} 
                                    className="w-full fill-in-button" 
                                    variant={agreed ? "accent" : "outline"}
                                    style={{'--fill-color': 'hsl(var(--accent))'} as React.CSSProperties}>
                                    <span className={cn("text-content", agreed ? "text-accent-foreground" : "text-accent")}>Buy Now</span>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Column 2: Subtle Shimmer */}
                    <div className="space-y-8">
                        <h3 className="text-xl font-bold text-center" style={{color: 'hsl(var(--text-primary))'}}>Subtle Shimmer</h3>
                         <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-authority))'}}>Green (Authority)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full shimmer-button" style={{backgroundColor: agreed ? 'hsl(var(--accent-authority))' : undefined, color: agreed ? 'hsl(var(--primary-foreground))' : undefined}}>Buy Now</Button>
                            </CardContent>
                        </Card>
                         <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-urgency))'}}>Red (Urgency)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full shimmer-button" style={{backgroundColor: agreed ? 'hsl(var(--accent-urgency))' : undefined, color: agreed ? 'hsl(var(--destructive-foreground))' : undefined}}>Buy Now</Button>
                            </CardContent>
                        </Card>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent))'}}>Gold (Premium)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full shimmer-button" style={{backgroundColor: agreed ? 'hsl(var(--accent))' : undefined, color: agreed ? 'hsl(var(--accent-foreground))' : undefined}}>Buy Now</Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Column 3: Icon-based */}
                     <div className="space-y-8">
                        <h3 className="text-xl font-bold text-center" style={{color: 'hsl(var(--text-primary))'}}>Icon-based</h3>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                             <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-authority))'}}>Green (Authority)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full" variant="default">
                                    {agreed ? <Unlock className="w-4 h-4 mr-2"/> : <Lock className="w-4 h-4 mr-2"/> }
                                    Buy Now
                                </Button>
                            </CardContent>
                        </Card>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                             <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent-urgency))'}}>Red (Urgency)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full" variant="destructive">
                                    {agreed ? <Unlock className="w-4 h-4 mr-2"/> : <Lock className="w-4 h-4 mr-2"/> }
                                    Buy Now
                                </Button>
                            </CardContent>
                        </Card>
                        <Card style={{backgroundColor: 'hsl(var(--surface-card))', borderColor: 'hsl(var(--border-color))'}}>
                            <CardHeader>
                                <CardTitle style={{color: 'hsl(var(--accent))'}}>Gold (Premium)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Button disabled={!agreed} className="w-full" variant="accent">
                                    {agreed ? <Unlock className="w-4 h-4 mr-2"/> : <Lock className="w-4 h-4 mr-2"/> }
                                    Buy Now
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default function TempDesignClientPage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <ButtonExplorationSection />
    </main>
  );
}
