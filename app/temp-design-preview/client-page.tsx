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
    Lock,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const PROOFS = [
    { label: 'Audit-Ready', icon: ShieldCheck },
    { label: 'Editable .xlsx', icon: FileSpreadsheet },
    { label: 'Lifetime Updates', icon: Infinity },
    { label: 'No SaaS lock-in', icon: Lock }
];

const ForensicButtonVariant = ({ 
    variantLabel,
    buttonClass,
    showBrackets = false,
    showScanner = false,
    showCrosshairs = false,
    showFlicker = false,
    description
}: { 
    variantLabel: string, 
    buttonClass?: string,
    showBrackets?: boolean,
    showScanner?: boolean,
    showCrosshairs?: boolean,
    showFlicker?: boolean,
    description: string
}) => (
    <div className="space-y-6 mb-24">
        <div className="flex flex-col items-center gap-2 px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">{variantLabel}</span>
            <p className="text-xs text-secondary-text max-w-md text-center">{description}</p>
            <div className="h-px w-32 bg-white/10 mt-2" />
        </div>

        <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden bg-black border border-white/10 rounded-[2rem] relative z-10 shadow-2xl">
                <div className="p-8 md:p-16 text-center space-y-10">
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <Badge variant="outline" className="text-[10px] font-black border-primary/30 text-primary uppercase tracking-[0.2em] rounded-none px-4 py-1">Resolution Protocol</Badge>
                        <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter text-primary-text uppercase italic leading-[1.1]">
                            Secure Your Institutional Memory
                        </h2>
                        <div className="flex items-center justify-center gap-3 pt-2">
                            <Shield className="w-3.5 h-3.5 text-white/40" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">
                                Aligned: ISO 9001 • ISO 41001 • HACCP
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 transition-none">
                            <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                        </div>
                        
                        <div className="relative group/btn w-full md:w-96 p-4">
                            {/* BRACKETS (SNAP EFFECT) */}
                            {showBrackets && (
                                <>
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-2 group-hover/btn:left-2 transition-all duration-300" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-2 group-hover/btn:right-2 transition-all duration-300" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-2 group-hover/btn:left-2 transition-all duration-300" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-2 group-hover/btn:right-2 transition-all duration-300" />
                                </>
                            )}

                            {/* CROSSHAIRS (EXTENDING LINES) */}
                            {showCrosshairs && (
                                <>
                                    <div className="absolute top-1/2 left-0 w-0 h-[1px] bg-primary/0 group-hover/btn:w-full group-hover/btn:bg-primary/20 transition-all duration-500 -translate-y-1/2" />
                                    <div className="absolute left-1/2 top-0 w-[1px] h-0 bg-primary/0 group-hover/btn:h-full group-hover/btn:bg-primary/20 transition-all duration-500 -translate-x-1/2" />
                                </>
                            )}

                            {/* SCANNER LINE */}
                            {showScanner && (
                                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden rounded-sm">
                                    <div className="w-full h-[2px] bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.8)] absolute top-0 left-0 -translate-y-full group-hover/btn:animate-[scan_2s_linear_infinite]" />
                                </div>
                            )}

                            <Button size="lg" className={cn(
                                "w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none relative z-10 transition-all duration-300 active:scale-95",
                                showFlicker ? "group-hover/btn:animate-[pulse_0.1s_ease-in-out_infinite]" : "",
                                buttonClass
                            )}>
                                <span className="flex items-center justify-center gap-2">
                                    Protect Your Operations <ArrowRight className="w-5 h-5"/>
                                </span>
                            </Button>
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
            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>

            <ForensicButtonVariant 
                variantLabel="Variant 1: Target Lock (Classic)"
                description="Reticles tighten from the card edges to the button corners. High precision metaphor."
                showBrackets={true}
            />

            <ForensicButtonVariant 
                variantLabel="Variant 9: Diagnostic Scan"
                description="Target brackets lock in, while a horizontal light beam verifies the interaction zone."
                showBrackets={true}
                showScanner={true}
            />

            <ForensicButtonVariant 
                variantLabel="Variant 10: The Crosshair Grid"
                description="Axis lines extend across the button, centering the decision point in a tactical grid."
                showCrosshairs={true}
                showBrackets={true}
            />

            <ForensicButtonVariant 
                variantLabel="Variant 11: Kinetic Lock"
                description="A high-frequency vibration occurs on hover, mimicking the feedback of a heavy mechanical switch."
                showBrackets={true}
                showFlicker={true}
            />

            <div className="text-center py-12">
                <p className="text-sm text-white/20 italic uppercase tracking-[0.3em]">End of Forensic Audit</p>
            </div>
        </div>
    );
}
