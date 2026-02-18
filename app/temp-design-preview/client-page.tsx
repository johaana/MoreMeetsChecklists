
'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Shield, 
    Gift, 
    ShieldCheck, 
    FileSpreadsheet, 
    Infinity, 
    Lock 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

const CTAVariant = ({ 
    title, 
    description, 
    alignedColor, 
    variantLabel 
}: { 
    title: string, 
    description: string, 
    alignedColor: string, 
    variantLabel: string 
}) => (
    <div className="space-y-6 mb-24">
        <div className="flex items-center gap-3 px-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">{variantLabel}</span>
            <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative group max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            <Card className="overflow-hidden bg-black border border-white/10 rounded-[2rem] relative z-10 shadow-2xl">
                <div className="p-8 md:p-16 text-center space-y-10">
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[1.1]">
                            {title}
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                            {description}
                        </p>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Shield className={cn("w-3.5 h-3.5", alignedColor)} />
                            <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", alignedColor)}>
                                Aligned: ISO 9001 • ISO 41001 • HACCP
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* THE GIFT PILL - GOLD CONTRAST */}
                        <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] md:text-[11px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 shadow-[0_0_20px_rgba(var(--accent),0.05)] transition-transform hover:scale-105">
                            <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                        </div>
                        
                        <Button size="lg" className="w-full md:w-96 h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none transition-all hover:scale-105 active:scale-95">
                            Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
                    </div>
                </div>
                
                {/* THE DELIVERABLE BAR - FORCED SINGLE LINE */}
                <div className="bg-white/[0.03] border-t border-white/5 py-5 px-4 md:px-12 flex flex-nowrap items-center justify-between overflow-x-auto gap-4 no-scrollbar">
                    {PROOFS.map(item => (
                        <div key={item.label} className="flex items-center gap-1.5 text-[8px] md:text-[9px] font-black uppercase text-white/30 tracking-[0.1em] shrink-0 whitespace-nowrap">
                            <item.icon className="w-3.5 h-3.5 text-primary/40" /> {item.label}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

export default function DesignPreviewClient() {
    return (
        <div className="space-y-12">
            <CTAVariant 
                variantLabel="Variant 1: Muted White"
                title="Secure Your Institutional Memory"
                description="Convert individual brilliance into permanent infrastructure. Mapped to ISO 9001 and ISO 41001 standards for instant organizational audit-readiness and continuity."
                alignedColor="text-white/40"
            />

            <CTAVariant 
                variantLabel="Variant 2: Bright White"
                title="Eliminate Operational Drift"
                description="Deploy the verified, HACCP and FSSAI-aligned institutional backbone designed to eliminate the exact failure points analyzed in this debrief."
                alignedColor="text-white/90"
            />

            <CTAVariant 
                variantLabel="Variant 3: Muted Orange"
                title="Industrial Safety Standard"
                description="Deploy an institutional-grade protocol designed for zero-ambiguity execution in high-risk environments."
                alignedColor="text-orange-500/50"
            />

            <CTAVariant 
                variantLabel="Variant 4: Muted Grey"
                title="The Governance Protocol"
                description="Standardize compliance across all departments with a verified framework built for large-scale operations."
                alignedColor="text-zinc-500"
            />

            <CTAVariant 
                variantLabel="Variant 5: Forensic Blue"
                title="High-Integrity Systems"
                description="Harden your operational defenses with a standards-mapped framework that prevents human error at the source."
                alignedColor="text-sky-400/50"
            />
        </div>
    );
}
