
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
        {/* Responsive Gradient: Horizontal on desktop, Vertical/Bottom-heavy on mobile */}
        <div 
            className="absolute inset-0 z-10 md:bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.8)_40%,rgba(10,15,25,0.3)_70%,rgba(10,15,25,0.05)_100%)] bg-[linear-gradient(180deg,rgba(10,15,25,0.4)_0%,rgba(10,15,25,0.8)_60%,rgba(10,15,25,1.0)_100%)]" 
        />
        <div className="container px-4 md:px-6 relative z-20">
            <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter !leading-[1.05] text-primary-text drop-shadow-lg">
                    People forget.
                    <br/>
                    Your business
                    <br/>
                    shouldn’t pay for it.
                </h1>
                <p className="text-base md:text-lg max-w-[520px] text-secondary-text" style={{lineHeight: 1.5}}>
                    When work depends on memory or judgment, execution changes with people. Audits, shift changes, growth, and emergencies expose the gaps.
                </p>
                <p className="text-base md:text-lg font-bold text-red-500" style={{ letterSpacing: '0.01em'}}>
                   Consistency can’t depend on memory.
                </p>
                
                <div className="flex flex-col items-start gap-2 pt-6">
                    <Button size="lg" asChild className="group w-full sm:w-auto" style={{ backgroundColor: 'hsl(var(--authority-green))', color: 'hsl(var(--bg-primary))' }}>
                        <Link href="/library">
                           View Operational Standards <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground pl-1">Includes 1 free customization per pack</p>
                </div>
            </div>
        </div>
    </section>
);
