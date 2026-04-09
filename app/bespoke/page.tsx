'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Sparkles, 
    ArrowRight, 
    ShieldCheck, 
    Maximize2, 
    Cpu, 
    Microscope,
    History,
    Zap,
    Lock
} from 'lucide-react';
import Link from 'next/link';

export default function BespokePage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            
            <main className="flex-1">
                {/* HERO */}
                <section className="relative w-full pt-20 pb-12 md:pt-32 md:pb-24 border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2eb86b_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="container px-4 md:px-6 mx-auto relative z-10">
                        <div className="max-w-4xl space-y-8">
                            <Badge variant="outline" className="text-accent border-accent/30 py-1 px-4 uppercase tracking-[0.4em] font-black text-[10px] rounded-none">Forensic Engineering</Badge>
                            <h1 className="text-4xl md:text-7xl font-black font-headline !leading-[1.1] text-primary-text tracking-tighter uppercase italic">
                                Bespoke <br />
                                <span className="text-primary">Institutional Systems.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary-text max-w-2xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-8">
                                Can't find your specific sector in our elite collection? We build specialized, audit-ready operating systems for unique, high-stakes environments.
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE PROCESS */}
                <section className="w-full py-20 bg-alternate-background">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {[
                                { t: "Discovery", d: "1-on-1 audit of your unique operational risks and workflow bottlenecks.", i: Microscope },
                                { t: "Engineering", d: "Surgical mapping of technical protocols to ISO, HACCP, or industry specific standards.", i: Cpu },
                                { t: "Deployment", d: "Delivery of a hardened Sovereign Master Engine built purely for your organization.", i: Zap }
                            ].map((step, i) => (
                                <div key={i} className="space-y-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <step.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black text-primary-text uppercase italic tracking-tighter font-headline">{step.t}</h3>
                                        <p className="text-sm text-secondary-text font-medium italic leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE OFFER */}
                <section className="w-full py-24 border-y border-white/5">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 md:p-16 text-center space-y-12">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Investment Scale</Badge>
                                <h2 className="text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter leading-tight">PRECISION PRICING</h2>
                                <p className="text-lg text-secondary-text italic font-medium">Bespoke system builds require professional analysis and custom data architecture.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                                <div className="p-10 rounded-2xl bg-black border border-white/10 space-y-6 flex flex-col justify-center">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">STARTING FROM</span>
                                    <p className="text-5xl font-black text-primary italic font-headline">₹14,999</p>
                                    <p className="text-xs text-secondary-text italic">/ $199 USD</p>
                                </div>
                                <div className="p-10 rounded-2xl bg-white/[0.01] border border-white/5 space-y-6 text-left">
                                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">WHAT'S INCLUDED:</span>
                                    <ul className="space-y-3 text-[11px] font-bold text-white/40 uppercase tracking-widest">
                                        <li className="flex items-center gap-3"><ShieldCheck className="w-4 h-4 text-primary" /> Sector-Specific Logic</li>
                                        <li className="flex items-center gap-3"><Maximize2 className="w-4 h-4 text-primary" /> Multi-Branch Architecture</li>
                                        <li className="flex items-center gap-3"><History className="w-4 h-4 text-primary" /> Custom Trainer's Notes</li>
                                        <li className="flex items-center gap-3"><Lock className="w-4 h-4 text-primary" /> Sovereign IP Ownership</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Button asChild size="lg" className="h-20 px-12 rounded-xl bg-primary text-black font-black uppercase italic text-lg shadow-2xl hover:scalebs-105 active:scale-95 transition-all border-none">
                                    <Link href="https://calendly.com/more-moremeets/30min" target="_blank">Book Discovery Session <ArrowRight className="ml-3 w-6 h-6"/></Link>
                                </Button>
                                <p className="mt-6 text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">NO OBLIGATION CONSULTATION REQUIRED</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
}
