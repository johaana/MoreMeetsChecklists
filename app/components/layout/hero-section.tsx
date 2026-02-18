
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';

export const HeroSection = () => (
    <section className="relative w-full flex flex-col md:flex-row md:items-center md:h-screen md:min-h-[700px] overflow-hidden bg-background">
        {/* Visual Brand Layer - Top half on mobile, Full-screen overlay on desktop */}
        <div className="relative h-[40vh] md:absolute md:top-0 md:left-0 md:h-full md:w-full z-0 overflow-hidden shrink-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover contrast-[1.15] brightness-[1.15] md:contrast-100 md:brightness-100"
            />
            {/* Desktop Gradient Overlay (Left to Right) */}
            <div className="hidden md:block absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.8)_40%,rgba(10,15,25,0.3)_70%,rgba(10,15,25,0.05)_100%)]" />
            
            {/* Mobile Gradient Overlay (Gradual Top-to-Bottom transition to solid background) */}
            <div className="md:hidden absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />
            
            {/* Expert Atmospheric Bleed: Softens the transition between video and content on mobile */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-15" />
        </div>

        {/* Content Layer: Normal flow on mobile, Absolute container on desktop */}
        <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-start md:justify-center py-6 md:py-0">
            <div className="max-w-2xl space-y-4 md:space-y-6">
                {/* Headline: Optimized for mobile/desktop line breaks. Normal case on mobile for a premium feel. */}
                {/* Point 1: Increased leading to 1.3 on mobile for a distinct "beat" between lines */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter !leading-[1.3] md:!leading-[1.05] text-primary-text drop-shadow-lg normal-case">
                    People forget. <br />
                    Your business <span className="md:hidden"> </span><br className="hidden md:block"/>shouldn’t pay for it.
                </h1>
                
                {/* Red Urgency Line: High Impact V7/V9 Style */}
                {/* Point 2: Ensuring uppercase remains for the technical alert look on mobile */}
                <div className="py-2 border-y border-red-500/40 w-fit inline-block md:border-none md:p-0">
                    <p className="text-xs md:text-base lg:text-lg font-black text-red-500 uppercase tracking-[0.15em] md:normal-case md:tracking-normal">
                        Consistency can’t depend on memory.
                    </p>
                </div>

                {/* Subtext: Optimized V4/V7 text size */}
                <p className="text-sm md:text-lg max-w-[520px] text-secondary-text leading-relaxed md:leading-[1.5] font-medium md:font-normal">
                    When work depends on memory or judgment, execution changes with people. Audits, shift changes, growth, and emergencies expose the gaps.
                </p>
                
                {/* Action Area: Catchy B2B Label for Mobile */}
                <div className="flex flex-col items-start gap-3 pt-2 md:pt-6">
                    <Button size="lg" asChild className="group w-full sm:w-auto h-14 md:h-14 rounded-xl md:rounded-lg shadow-xl md:shadow-2xl transition-all active:scale-95" style={{ backgroundColor: 'hsl(var(--authority-green))', color: 'hsl(var(--bg-primary))' }}>
                        <Link href="/library" className="flex items-center justify-center font-black uppercase tracking-widest md:font-bold md:normal-case md:tracking-tight md:text-base px-8">
                           <span className="md:hidden">SECURE COMPLIANCE</span>
                           <span className="hidden md:inline">View Operational Standards</span>
                           <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="text-[10px] md:text-xs text-muted-foreground pl-1 opacity-70">1 Expert Customization Included</p>
                </div>
            </div>
        </div>
    </section>
);
