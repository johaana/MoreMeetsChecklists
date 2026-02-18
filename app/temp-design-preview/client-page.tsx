
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

const CustomButtonVariant = ({ 
    variantLabel,
    buttonClass,
    innerWrapperClass,
    showShimmer = false,
    showGlow = false,
    showBorderFlow = false
}: { 
    variantLabel: string, 
    buttonClass?: string,
    innerWrapperClass?: string,
    showShimmer?: boolean,
    showGlow?: boolean,
    showBorderFlow?: boolean
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
                        
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Shield className="w-3.5 h-3.5 text-white/40" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                                Aligned: ISO 9001 • ISO 41001 • HACCP
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        {/* ELITE TRACKED PILL (PRESERVED) */}
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 transition-none">
                                <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                            </div>
                        </div>
                        
                        <div className="relative group/btn w-full md:w-96">
                            {/* GLOW EFFECT */}
                            {showGlow && (
                                <div className="absolute -inset-1 bg-primary/40 rounded-sm blur-lg group-hover/btn:blur-xl transition-all duration-500 opacity-0 group-hover/btn:opacity-100 animate-pulse-soft" />
                            )}

                            {/* BORDER FLOW WRAPPER */}
                            <div className={cn(
                                "relative overflow-hidden rounded-sm p-[1px]",
                                showBorderFlow ? "bg-white/10" : ""
                            )}>
                                {showBorderFlow && (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(transparent,transparent,transparent,hsl(var(--primary)))] animate-border-rotate" />
                                )}

                                <Button size="lg" className={cn(
                                    "w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none relative overflow-hidden group/shimmer",
                                    buttonClass
                                )}>
                                    <span className={cn("flex items-center justify-center gap-2 relative z-10", innerWrapperClass)}>
                                        Protect Your Operations <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"/>
                                    </span>

                                    {/* SHIMMER EFFECT */}
                                    {showShimmer && (
                                        <div className="absolute inset-0 z-0">
                                            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-shimmer" />
                                        </div>
                                    )}
                                </Button>
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
    </div>
);

export default function DesignPreviewClient() {
    return (
        <div className="space-y-12 pb-32">
            <CustomButtonVariant 
                variantLabel="Variant 1: Shimmering Command (The Catch)"
                showShimmer={true}
            />

            <CustomButtonVariant 
                variantLabel="Variant 2: Shadow Pulse (The Magnet)"
                showGlow={true}
                buttonClass="hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.5)] transition-shadow duration-500"
            />

            <CustomButtonVariant 
                variantLabel="Variant 3: Satisfying Depth (3D Press)"
                buttonClass="border-b-4 border-black/20 hover:border-b-0 hover:translate-y-[2px] transition-all active:scale-95"
            />

            <CustomButtonVariant 
                variantLabel="Variant 4: Magnetic Scale (Responsive)"
                buttonClass="transition-transform duration-300 hover:scale-105 active:scale-95"
                innerWrapperClass="group-hover/btn:gap-4 transition-all duration-300"
            />

            <CustomButtonVariant 
                variantLabel="Variant 5: The Edge Chase (High Tech)"
                showBorderFlow={true}
                buttonClass="bg-primary/95 group-hover/btn:bg-primary transition-colors"
            />
        </div>
    );
}
