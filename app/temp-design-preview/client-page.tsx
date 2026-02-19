'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Shield, 
    Gift, 
    ShieldCheck, 
    FileSpreadsheet, 
    Infinity, 
    Lock,
    Download,
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

export default function DesignPreviewClient() {
    return (
        <div className="space-y-24 pb-32">
            {/* CONVERSION PSYCHOLOGY AUDIT SECTION */}
            <div className="max-w-4xl mx-auto space-y-8 px-4">
                <div className="p-8 border-l-4 border-primary bg-primary/5 rounded-r-xl space-y-4">
                    <h2 className="text-2xl font-black text-primary uppercase italic tracking-tight">The Conversion Recommendation</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-sm text-secondary-text leading-relaxed">
                        <div className="space-y-4">
                            <p><strong className="text-white">The Problem:</strong> "Eliminate Operational Risk" sounds like a feature or a promise. It doesn't signal a transaction. It creates micro-uncertainty at the point of sale.</p>
                            <p><strong className="text-white">The Solution:</strong> Shorter, unmistakable trigger text. "BUY FULL PACK — $79" scans faster and signals that the user is moving into a professional transaction.</p>
                        </div>
                        <div className="space-y-4">
                            <p><strong className="text-white">Confidence Microcopy:</strong> Adding "Instant digital delivery" reduces hesitation by confirming immediate utility.</p>
                            <p><strong className="text-white">Institutional Look:</strong> A structured, confident button that doesn't need to scream. It positions the product as infrastructure.</p>
                        </div>
                    </div>
                </div>

                <div className="relative group/card">
                    {/* THE TARGET LOCK CARD (RECOMMENDED) */}
                    <Card className="w-full max-w-[650px] mx-auto bg-surface-card border-white/10 shadow-[0_0_60px_-12px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden relative">
                        <div className="absolute top-6 right-6 z-20">
                            <div className="bg-accent/10 border border-accent/20 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-sm backdrop-blur-sm">
                                <ShieldCheck className="w-3 h-3 text-accent" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-accent">Audit Ready</span>
                            </div>
                        </div>

                        <CardHeader className="pb-6 border-b border-white/5 bg-white/[0.01] relative flex flex-col items-center pt-10">
                            <div className="w-full flex flex-col items-center gap-4">
                                <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                                <h2 className="text-3xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[1.1]">
                                    ELIMINATE OPERATIONAL RISK
                                </h2>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-white/40" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">INSTITUTIONAL COMPLIANCE GRADE</span>
                                </div>
                            </div>
                        </CardHeader>

                        <CardContent className="flex-1 p-8 md:p-12 flex flex-col space-y-10 text-center">
                            <div className="space-y-8">
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-xl md:text-2xl font-black text-primary-text tracking-tight uppercase leading-tight italic">
                                        12 Institutional Checklists • 120+ Tasks
                                    </p>
                                    <p className="text-xs text-secondary-text italic font-medium">Complete Operational Payload</p>
                                </div>
                                
                                <div className="flex items-center justify-center gap-2 opacity-100">
                                    <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">
                                        Aligned: ISO • HACCP • OSHA • Industry Standards
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 w-fit mx-auto">
                                        <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                                    </div>

                                    <div className="flex flex-col items-center gap-4">
                                        <div className="relative group/btn w-full md:w-96">
                                            {/* TARGET LOCK BRACKETS */}
                                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:-top-2 group-hover/btn:-left-2 transition-all duration-300" />
                                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:-top-2 group-hover/btn:-right-2 transition-all duration-300" />
                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:-bottom-2 group-hover/btn:-left-2 transition-all duration-300" />
                                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:-bottom-2 group-hover/btn:-right-2 transition-all duration-300" />

                                            <Button size="lg" className="w-full h-16 bg-primary text-black font-black uppercase italic text-base rounded-sm shadow-2xl transition-all active:scale-95 border-none relative z-10">
                                                BUY FULL PACK — $79 <ArrowRight className="ml-2 h-5 w-5"/>
                                            </Button>
                                        </div>
                                        
                                        <div className="space-y-1">
                                            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                                <Check className="w-3 h-3 text-primary" /> Instant digital delivery
                                            </p>
                                            <p className="text-[10px] text-white/30 uppercase tracking-widest">
                                                Lifetime organization license
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>

                        <div className="bg-white/[0.03] border-t border-white/5 py-6 px-4 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                            {PROOFS.map(item => (
                                <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                                    <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>

            <div className="text-center py-12">
                <p className="text-sm text-white/20 italic uppercase tracking-[0.3em]">Institutional Design Review</p>
            </div>
        </div>
    );
}
