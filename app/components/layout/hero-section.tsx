'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Lock, Zap } from "lucide-react";
import React from 'react';

export const HeroSection = () => (
    <section className="relative w-full flex flex-col md:flex-row md:items-center h-[calc(100dvh-64px)] md:h-screen md:min-h-[700px] overflow-hidden bg-background">
        {/* Visual Brand Layer - PRESERVED AS PER USER REQUEST */}
        <div className="relative h-[28vh] md:absolute md:top-0 md:left-0 md:h-full md:w-full z-0 overflow-hidden shrink-0">
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

        {/* Content Layer - LAYOUT PRESERVED, COPY REFINED */}
        <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-center md:justify-center">
            <div className="max-w-2xl space-y-4 md:space-y-6">
                <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl font-headline font-bold tracking-tighter !leading-[1.1] md:!leading-[1.05] text-primary-text drop-shadow-lg normal-case">
                    Stop managing. <br />
                    <span className="text-primary">Start seeing.</span>
                </h1>
                
                <div className="py-1 border-y border-primary/20 w-fit inline-block md:border-none md:p-0">
                    <p className="text-[11px] md:text-base lg:text-lg font-black text-primary uppercase tracking-[0.15em] md:normal-case md:tracking-normal">
                        A system that runs your business daily.
                    </p>
                </div>

                <p className="text-sm md:text-lg max-w-[520px] text-secondary-text leading-relaxed md:leading-[1.5] font-medium md:font-normal italic">
                    MoreMeets™ replaces human memory with engineered consistency. No follow-ups. No manual reports. Just real-time clarity.
                </p>
                
                <div className="flex flex-col items-start gap-5 pt-2 md:pt-8">
                    <Button size="lg" asChild className="group w-full sm:w-auto h-14 md:h-16 rounded-xl shadow-xl md:shadow-2xl transition-all active:scale-95 px-8 bg-primary text-black hover:brightness-90 border-none">
                        <Link href="/library" className="flex items-center justify-center font-black uppercase text-sm tracking-widest">
                           Get Your Operating System
                           <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <div className="space-y-3 pl-1">
                        <div className="flex items-center gap-4">
                            <Link href="#how-it-works" className="text-xs font-bold text-secondary-text/80 hover:text-primary transition-colors flex items-center gap-1 group/link w-fit underline underline-offset-4 decoration-white/10 hover:decoration-primary/40">
                                See how it works <ChevronRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                            </Link>
                            <span className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest">
                                <Lock className="w-3 h-3" /> No SaaS. Own Forever.
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-accent" />
                            <p className="text-[9px] md:text-[10px] text-muted-foreground/60 font-black leading-tight uppercase tracking-widest">
                                Ready to Deploy in 10 Minutes • Zero-Collation Engine
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
