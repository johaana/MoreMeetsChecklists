
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Check, Shield, ShieldCheck, FileSpreadsheet, Infinity, Lock } from "lucide-react";
import React from 'react';
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const REASSURANCES = [
    "No SaaS lock-in",
    "Editable formats",
    "Immediate deployment",
    "Expert customization included"
];

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

const ProposedBlogCTA = () => (
    <div className="max-w-4xl mx-auto mt-12 md:mt-16 pt-8 md:pt-12 relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl md:rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
        <Card className="overflow-hidden bg-black border border-white/10 rounded-2xl md:rounded-[2rem] relative z-10 shadow-2xl">
            <div className="p-8 md:p-16 text-center space-y-10 md:space-y-12">
                <div className="space-y-4 md:space-y-6 max-w-2xl mx-auto">
                    <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                    <h2 className="text-[1.4rem] sm:text-3xl md:text-5xl font-black font-headline tracking-tight text-primary-text uppercase italic leading-[1.15]">
                        OPERATIONAL DISCIPLINE REQUIRES STRUCTURE
                    </h2>
                    <p className="text-sm md:text-lg text-secondary-text leading-relaxed">
                        Deploy ISO, HACCP, and OSHA-aligned protocols built for real-world execution — not just documentation.
                    </p>
                    
                    {/* NEW: Bridge Line for Urgency */}
                    <p className="text-sm md:text-base font-bold text-accent italic opacity-90 pt-2 border-t border-white/5 max-w-lg mx-auto">
                        "If your operations cannot withstand a disruption, audit, or supply shock — they are not structured enough."
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6 md:gap-8">
                    <div className="space-y-8 w-full flex flex-col items-center">
                        {/* Improved Action Link with stronger verb */}
                        <Link 
                            href="#" 
                            className="group/link inline-flex items-center gap-3 text-[15px] sm:text-lg md:text-2xl font-bold text-accent hover:brightness-110 transition-all tracking-tight text-center leading-tight whitespace-nowrap"
                        >
                            <span>Access the Logistics & Warehouse Operations Pack</span>
                            <ArrowRight className="shrink-0 w-4 h-4 md:w-6 md:h-6 transition-transform group-hover/link:translate-x-2" />
                        </Link>
                        
                        {/* Benefits moved closer to Action */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md mx-auto text-[10px] font-black uppercase text-white/30 tracking-widest text-left">
                            {REASSURANCES.map(item => (
                                <div key={item} className="flex items-center gap-2">
                                    <Check className="w-3.5 h-3.5 text-primary/50" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white/[0.03] border-t border-white/5 py-5 px-4 md:px-12 flex flex-nowrap items-center justify-center overflow-x-auto gap-8 no-scrollbar">
                {PROOFS.map(item => (
                    <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                        <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
                    </div>
                ))}
            </div>
        </Card>
    </div>
);

export default function ClientPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main className="flex-1 pb-24">
                <section className="py-12 bg-secondary/10 border-b border-white/5">
                    <div className="container px-4 md:px-6 text-center">
                        <Badge variant="outline" className="mb-4">Design Lab</Badge>
                        <h1 className="text-3xl md:text-4xl font-black font-headline uppercase italic">Conversion Optimization Preview</h1>
                        <p className="text-secondary-text mt-2">Testing the high-converting "Authority Bridge" CTA for the Intelligence Hub.</p>
                    </div>
                </section>

                <div className="container py-12 px-4 md:px-6">
                    <ProposedBlogCTA />
                    
                    <div className="mt-16 p-8 rounded-2xl bg-secondary/20 border-2 border-dashed border-primary/20 space-y-4 max-w-2xl mx-auto">
                        <h3 className="font-bold text-primary">Strategic Improvisations:</h3>
                        <ul className="space-y-2 text-sm text-secondary-text list-disc pl-5">
                            <li><strong>Verb Strength:</strong> "Access" creates a sense of immediate availability vs "Explore" (browsing).</li>
                            <li><strong>The Bridge:</strong> The italicized quote adds a layer of expert commentary that justifies the product as infrastructure.</li>
                            <li><strong>Proximity:</strong> Reassurances are now tied directly to the action link to minimize last-second hesitation.</li>
                            <li><strong>Mobile Lock:</strong> The link remains on a single line with `whitespace-nowrap` while the card container handles the padding.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
