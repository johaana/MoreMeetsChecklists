'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';

export const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
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
                background: 'linear-gradient(90deg, rgba(10, 15, 25, 0.95) 0%, rgba(10, 15, 25, 0.8) 40%, rgba(10, 15, 25, 0.3) 70%, rgba(10, 15, 25, 0.05) 100%)'
            }}
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-[48%] min-w-[550px] space-y-4">
                <h1 className="text-5xl sm:text-6xl font-bold tracking-tighter !leading-[1.05] text-primary-text" style={{ fontFamily: 'Inter Tight, sans-serif', letterSpacing: '-0.02em' }}>
                    People forget.
                    <br/>
                    Your business
                    <br/>
                    shouldn’t pay for it.
                </h1>
                <p className="text-lg max-w-[520px] text-secondary-text" style={{lineHeight: 1.5}}>
                    When work lives in people’s heads, execution breaks
                    during audits, shift changes, growth, and emergencies.
                </p>
                <p className="text-lg font-bold text-red-500" style={{ letterSpacing: '0.01em'}}>
                   Consistency can’t depend on memory.
                </p>
                
                <div className="flex flex-col items-start gap-4 pt-6">
                    <Button size="lg" asChild className="group" variant="accent" style={{ color: 'hsl(var(--accent-foreground))', fontWeight: 600, padding: '16px 24px', borderRadius: '6px' }}>
                        <Link href="/library">
                           View Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="link" className="p-0 h-auto text-sm text-muted-foreground">
                         <Link href="#how-it-works">See how it works &rarr;</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);
