
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';

export const HeroSection = () => (
    <section className="relative w-full flex flex-col md:flex-row md:items-center h-[100dvh] md:h-screen md:min-h-[700px] overflow-hidden bg-background">
        {/* Visual Brand Layer */}
        <div className="relative h-[35vh] md:absolute md:top-0 md:left-0 md:h-full md:w-full z-0 overflow-hidden shrink-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover contrast-[1.15] brightness-[1.15] md:contrast-100 md:brightness-100"
            />
            {/* Desktop Gradient Overlay */}
            <div className="hidden md:block absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.8)_40%,rgba(10,15,25,0.3)_70%,rgba(10,15,25,0.05)_100%)]" />
            
            {/* Mobile Gradient Overlay */}
            <div className="md:hidden absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />
            
            {/* Soft Bleed for Mobile Transition */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-15" />
        </div>

        {/* Content Layer: Pulling text up for mobile efficiency */}
        <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-start md:justify-center pt-6 md:pt-0">
            <div className="max-w-2xl space-y-5 md:space-y-6">
                <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter !leading-[1.1] md:!leading-[1.05] text-primary-text drop-shadow-lg normal-case">
                    People forget. <br />
                    Your business <span className="md:hidden"> </span><br className="hidden md:block"/>shouldn’t pay for it.
                </h1>
                
                <div className="py-1 border-y border-red-500/40 w-fit inline-block md:border-none md:p-0">
                    <p className="text-[11px] md:text-base lg:text-lg font-black text-red-500 uppercase tracking-[0.15em] md:normal-case md:tracking-normal">
                        Consistency can’t depend on memory.
                    </p>
                </div>

                <p className="text-sm md:text-lg max-w-[520px] text-secondary-text leading-relaxed md:leading-[1.5] font-medium md:font-normal">
                    When work depends on memory or judgment, execution changes with people. Audits, shift changes, growth, and emergencies expose the gaps.
                </p>
                
                <div className="flex flex-col items-start gap-4 pt-2 md:pt-8">
                    <Button size="lg" asChild className="group w-full sm:w-auto h-14 md:h-16 rounded-xl shadow-xl md:shadow-2xl transition-all active:scale-95 px-8 bg-authority-green text-bg-primary hover:brightness-110 border-none">
                        <Link href="/library" className="flex items-center justify-center font-black uppercase text-sm tracking-widest">
                           Standardize My Operations
                           <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <div className="space-y-2.5 pl-1">
                        <Link href="#how-it-works" className="text-xs font-bold text-secondary-text/80 hover:text-primary transition-colors flex items-center gap-1 group/link w-fit underline underline-offset-4 decoration-white/10 hover:decoration-primary/40">
                            See how it works <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground/40 font-normal leading-tight uppercase tracking-widest">
                            Includes 1 Complimentary Expert Customization (Limited Time)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
