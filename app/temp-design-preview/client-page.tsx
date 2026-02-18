
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
    textClass,
    showLine = false,
    useMono = false
}: { 
    variantLabel: string, 
    pillClass?: string,
    textClass?: string,
    showLine?: boolean,
    useMono?: boolean
}) => (
    <div className="space-y-6 mb-24">
        <div className="flex items-center gap-3 px-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/60">{variantLabel}</span>
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
                        
                        {/* THE MUTED WHITE STANDARDS AS REQUESTED */}
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Shield className="w-3.5 h-3.5 text-white/40" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                Aligned: ISO 9001 • ISO 41001 • HACCP
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* THE EXPERT PILL VARIANTS */}
                        <div className="flex items-center justify-center">
                            {showLine && <div className="h-8 w-0.5 bg-accent/40 mr-4" />}
                            <div className={cn(
                                "flex items-center gap-2.5 text-accent font-black uppercase leading-none",
                                useMono ? "font-mono" : "font-headline",
                                pillClass,
                                textClass
                            )}>
                                <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                            </div>
                        </div>
                        
                        <Button size="lg" className="w-full md:w-96 h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none">
                            Protect Your Operations <ArrowRight className="ml-2 h-5 w-5"/>
                        </Button>
                    </div>
                </div>
                
                {/* SINGLE LINE DELIVERABLE BAR */}
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
                variantLabel="Variant 1: Elite Tracked (Recommended)"
                pillClass="bg-accent/5 px-6 py-3 rounded-full border border-accent/20"
                textClass="text-[9px] md:text-[10px] tracking-[0.25em]"
            />

            <CustomPillVariant 
                variantLabel="Variant 2: Architectural Accent"
                pillClass="bg-transparent"
                textClass="text-[10px] md:text-[11px] tracking-[0.15em] text-left"
                showLine={true}
            />

            <CustomPillVariant 
                variantLabel="Variant 3: Technical Inset"
                pillClass="bg-white/5 px-6 py-3 rounded-full ring-1 ring-accent/30"
                textClass="text-[10px] tracking-wider"
            />

            <CustomPillVariant 
                variantLabel="Variant 4: Monospaced Spec"
                pillClass="bg-accent/5 px-6 py-3 rounded-md border border-accent/10"
                textClass="text-[10px] tracking-[0.2em]"
                useMono={true}
            />

            <CustomPillVariant 
                variantLabel="Variant 5: Minimalist Metadata"
                pillClass="bg-transparent"
                textClass="text-[10px] md:text-[11px] tracking-[0.25em]"
            />
        </div>
    );
}
