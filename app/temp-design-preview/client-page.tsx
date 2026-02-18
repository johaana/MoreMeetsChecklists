
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

const CustomPillVariant = ({ 
    variantLabel,
    pillClass,
    showPill = true
}: { 
    variantLabel: string, 
    pillClass: string,
    showPill?: boolean
}) => (
    <div className="space-y-6 mb-24">
        <div className="flex items-center gap-3 px-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent">{variantLabel}</span>
            <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-5"></div>
            <Card className="overflow-hidden bg-black border border-white/10 rounded-[2rem] relative z-10 shadow-2xl">
                <div className="p-8 md:p-16 text-center space-y-10">
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[1.1]">
                            Secure Your Institutional Memory
                        </h2>
                        <p className="text-base md:text-lg text-secondary-text leading-relaxed">
                            Convert individual brilliance into permanent infrastructure. Mapped to ISO 9001 and ISO 41001 standards.
                        </p>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Shield className="w-3.5 h-3.5 text-white/40" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                Aligned: ISO 9001 • ISO 41001 • HACCP
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* THE PILL UNDER TEST */}
                        <div className={cn("flex items-center gap-2.5 text-accent font-black uppercase text-[10px] md:text-[11px] tracking-[0.25em] transition-all", pillClass)}>
                            <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                        </div>
                        
                        <Button size="lg" className="w-full md:w-96 h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none">
                            Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
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
    </div>
);

export default function DesignPreviewClient() {
    return (
        <div className="space-y-12 pb-32">
            <CustomPillVariant 
                variantLabel="Variant 1: Standard Authority (Static)"
                pillClass="bg-accent/5 px-6 py-3 rounded-full border border-accent/30"
            />

            <CustomPillVariant 
                variantLabel="Variant 2: Ghost Border (Technical)"
                pillClass="bg-transparent px-6 py-3 rounded-full border border-accent/40"
            />

            <CustomPillVariant 
                variantLabel="Variant 3: Dark Inset (Prestige)"
                pillClass="bg-white/5 px-6 py-3 rounded-full border border-white/10 ring-1 ring-accent/20"
            />

            <CustomPillVariant 
                variantLabel="Variant 4: Minimalist Meta (No Pill)"
                pillClass="bg-transparent px-0 py-0 border-none shadow-none"
            />

            <CustomPillVariant 
                variantLabel="Variant 5: Soft Glow (Static)"
                pillClass="bg-accent/10 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(var(--accent),0.1)] border-none"
            />
        </div>
    );
}
