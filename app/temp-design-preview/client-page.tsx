
'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
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
    Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

const PricingCardVariation = ({ 
    title, 
    contentGap, 
    sectionGap, 
    buttonGap 
}: { 
    title: string, 
    contentGap: string, 
    sectionGap: string, 
    buttonGap: string 
}) => (
    <div className="space-y-6">
        <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/50">{title}</span>
            <div className="h-px flex-1 bg-white/10" />
        </div>

        <Card className="w-full max-w-[650px] mx-auto bg-surface-card border-white/10 shadow-[0_0_60px_-12px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden relative">
            {/* THE AUDIT STAMP */}
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

            <CardContent className={cn("flex-1 p-8 md:p-12 flex flex-col text-center", contentGap)}>
                <div className={cn("flex flex-col", sectionGap)}>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-xl md:text-2xl font-black text-primary-text tracking-tight uppercase leading-tight italic">
                            8 CLINICAL & SAFETY CHECKLISTS · 80+ TASKS
                        </p>
                        <p className="text-xs text-secondary-text italic font-medium">Complete Operational Payload</p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 opacity-100">
                        <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">
                            Aligned: JCI · NABH · WHO · Industry Standards
                        </span>
                    </div>
                </div>

                <div className={cn("flex flex-col items-center", sectionGap)}>
                    {/* THE VALUE PILL */}
                    <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 w-fit mx-auto transition-none">
                        <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                    </div>

                    <div className={cn("flex flex-col items-center w-full", buttonGap)}>
                        {/* PRIMARY ACTION */}
                        <div className="w-full md:w-96">
                            <Button 
                                size="lg" 
                                className="w-full h-14 bg-primary text-black font-semibold text-base rounded-[10px] shadow-md hover:shadow-xl hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0 active:brightness-90 transition-all duration-200 ease-in-out border-none relative z-10 px-8"
                            >
                                Buy Full Pack – $79 <ArrowRight className="ml-2 h-5 w-5"/>
                            </Button>
                        </div>
                        
                        {/* TRUST & SAFETY STACK */}
                        <div className="flex flex-col items-center gap-1.5">
                            <div className="flex items-center justify-center gap-2 opacity-40 grayscale hover:opacity-80 transition-all duration-500">
                                <Lock className="w-3 h-3" />
                                <span className="text-[11px] font-semibold tracking-tight">Secure International Checkout</span>
                            </div>
                            <p className="text-[13px] text-muted-foreground font-medium flex items-center justify-center gap-2 tracking-tight">
                                <Check className="w-3.5 h-3.5 text-primary opacity-80" /> 
                                <span>Instant Digital Delivery · Lifetime Organization License</span>
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>

            {/* THE DELIVERABLE BAR */}
            <div className="bg-white/[0.03] border-t border-white/5 py-6 px-4 md:px-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                {PROOFS.map(item => (
                    <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                        <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
                    </div>
                ))}
            </div>
        </Card>
    </div>
);

export default function DesignPreviewClient() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="space-y-32 pb-32">
            <div className="max-w-4xl mx-auto space-y-12 px-4">
                <div className="p-6 border-l-2 border-primary/30 bg-primary/5 rounded-r-xl">
                    <h3 className="text-primary font-black uppercase text-xs tracking-widest mb-2">Micro-Tuning Audit</h3>
                    <p className="text-sm text-secondary-text leading-relaxed italic">
                        Auditing the "Unified Decision" standard (Variation 2). We are comparing three 2px increments to find the exact vertical rhythm that maximizes the "Atomic Proximity" of the checkout action.
                    </p>
                </div>

                {/* VARIATION 2A: 8px (The Current Winner) */}
                <PricingCardVariation 
                    title="Variation 2A: 8px Standard (The Baseline)"
                    contentGap="space-y-10"
                    sectionGap="gap-8"
                    buttonGap="gap-2"
                />

                {/* VARIATION 2B: 6px (Ultra Dense) */}
                <PricingCardVariation 
                    title="Variation 2B: 6px Precision (Atomic Proximity)"
                    contentGap="space-y-8"
                    sectionGap="gap-6"
                    buttonGap="gap-1.5"
                />

                {/* VARIATION 2C: 10px (Refined Unified) */}
                <PricingCardVariation 
                    title="Variation 2C: 10px Refined (Balanced Flow)"
                    contentGap="space-y-12"
                    sectionGap="gap-8"
                    buttonGap="gap-2.5"
                />
            </div>

            <div className="text-center py-12">
                <p className="text-[10px] text-white/20 italic uppercase tracking-[0.3em]">Precision Spacing Audit · Resolution Protocol V7</p>
            </div>
        </div>
    );
}
