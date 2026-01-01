
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from 'react';

export const HeroSection = () => (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full z-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,w_1920/v1762590213/3253079-uhd_3840_2160_25fps_ezflkd.mp4"
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
            <div className="max-w-2xl space-y-4 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tighter">
                    People forget.
                    <br/>
                    Your business
                    <br/>
                    shouldn’t pay for it.
                </h1>
                <p className="text-lg max-w-xl text-white/90">
                    When work lives in people’s heads, execution breaks
                    during audits, shift changes, growth, and emergencies.
                </p>
                <p className="text-lg font-medium text-accent">
                   Consistency can’t depend on memory.
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-6">
                    <Button size="lg" asChild className="group text-lg py-7 px-8 shadow-lg hover:shadow-xl transition-shadow" variant="accent">
                        <Link href="/library">
                           View SOP Library <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="link" className="text-white/80 hover:text-white">
                         <Link href="#how-it-works">See how it works &rarr;</Link>
                    </Button>
                </div>
            </div>
        </div>
    </section>
);
