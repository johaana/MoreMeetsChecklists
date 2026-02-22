
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ShieldCheck, FileSpreadsheet, Infinity, Lock } from "lucide-react";
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
                    <p className="text-sm md:text-lg text-secondary-text leading-relaxed font-medium">
                        Deploy ISO, HACCP, and OSHA-aligned protocols built for execution — not documentation.
                    </p>
                    
                    {/* MUTED BRIDGE LINE: Reduced color weight to prioritize CTA button */}
                    <p className="text-sm md:text-base font-bold text-accent/70 italic pt-2 border-t border-white/5 max-w-lg mx-auto">
                        "Disruptions expose weak systems. Structure prevents them."
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <div className="space-y-6 w-full flex flex-col items-center">
                        {/* HIGH-CONVERSION OUTCOME-DRIVEN CTA (Shorter wording for higher action pull) */}
                        <Button 
                            asChild 
                            variant="secondary" 
                            className="h-auto py-4 px-6 md:px-10 bg-white/[0.03] border border-white/20 hover:bg-white/[0.08] hover:border-accent/30 text-accent transition-all rounded-xl shadow-inner group/btn hover:shadow-[0_0_20px_-5px_rgba(245,166,35,0.2)]"
                        >
                            <Link 
                                href="/packs/logistics_warehouse_pack" 
                                className="inline-flex items-center gap-2 md:gap-3 text-[15px] sm:text-lg md:text-2xl font-bold tracking-tight leading-tight whitespace-nowrap"
                            >
                                <span>Strengthen Your Logistics Controls</span>
                                <ArrowRight className="shrink-0 w-3.5 h-3.5 md:w-6 md:h-6 transition-transform group-hover/btn:translate-x-1.5" />
                            </Link>
                        </Button>
                        
                        {/* TIGHTER PROXIMITY FOR REASSURANCE */}
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-md mx-auto text-[10px] font-black uppercase text-white/20 tracking-widest text-left">
                            {REASSURANCES.map(item => (
                                <div key={item} className="flex items-center gap-2">
                                    <Check className="w-3.5 h-3.5 text-primary/40" /> {item}
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
                        <h1 className="text-3xl md:text-4xl font-black font-headline uppercase italic">Conversion Refinement Preview</h1>
                        <p className="text-secondary-text mt-2">Finalizing visual hierarchy and color de-confliction.</p>
                    </div>
                </section>

                <div className="container py-12 px-4 md:px-6">
                    <ProposedBlogCTA />
                    
                    <div className="mt-16 p-8 rounded-2xl bg-secondary/20 border-2 border-dashed border-primary/20 space-y-4 max-w-2xl mx-auto">
                        <h3 className="font-bold text-primary">Strategic Refinements (Phase 2):</h3>
                        <ul className="space-y-2 text-sm text-secondary-text list-disc pl-5">
                            <li><strong>Color De-confliction:</strong> Bridge line muted to 70% opacity so the primary CTA button remains the absolute visual anchor.</li>
                            <li><strong>Tactile Pull:</strong> Increased button fill and border contrast to signal decisiveness.</li>
                            <li><strong>Outcome Framing:</strong> "Strengthen Logistics Controls" - shortened for faster action pull while keeping the executive tone.</li>
                            <li><strong>Conversion Proximity:</strong> Reassurance layer pulled tighter to the action button to minimize cognitive gap at the point of click.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
