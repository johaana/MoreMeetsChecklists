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
    Target,
    Activity,
    Cpu,
    Workflow
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
    showTargetBrackets = false,
    showScanline = false,
    showGrid = false,
    showTerminalFlicker = false,
    showSlotAnimation = false
}: { 
    variantLabel: string, 
    buttonClass?: string,
    innerWrapperClass?: string,
    showTargetBrackets?: boolean,
    showScanline?: boolean,
    showGrid?: boolean,
    showTerminalFlicker?: boolean,
    showSlotAnimation?: boolean
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
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-2.5 text-accent font-black uppercase text-[10px] tracking-[0.25em] bg-accent/5 px-6 py-3 rounded-full border border-accent/20 transition-none">
                                <Gift className="w-4 h-4" /> 1 EXPERT CUSTOMIZATION INCLUDED
                            </div>
                        </div>
                        
                        <div className="relative group/btn w-full md:w-96">
                            {/* TARGET BRACKETS */}
                            {showTargetBrackets && (
                                <>
                                    <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-[-12px] group-hover/btn:left-[-12px] transition-all duration-300" />
                                    <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-[-12px] group-hover/btn:right-[-12px] transition-all duration-300" />
                                    <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-[-12px] group-hover/btn:left-[-12px] transition-all duration-300" />
                                    <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-[-12px] group-hover/btn:right-[-12px] transition-all duration-300" />
                                </>
                            )}

                            <div className={cn(
                                "relative overflow-hidden rounded-sm",
                                showTerminalFlicker ? "group-hover/btn:animate-[pulse_0.1s_ease-in-out_infinite]" : ""
                            )}>
                                <Button size="lg" className={cn(
                                    "w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none relative overflow-hidden",
                                    buttonClass
                                )}>
                                    <span className={cn("flex items-center justify-center gap-2 relative z-10", innerWrapperClass)}>
                                        Protect Your Operations 
                                        <div className={cn(
                                            "transition-all duration-300",
                                            showSlotAnimation ? "group-hover/btn:translate-x-1 group-hover/btn:scale-110" : ""
                                        )}>
                                            <ArrowRight className="w-5 h-5"/>
                                        </div>
                                    </span>

                                    {/* SCANLINE EFFECT */}
                                    {showScanline && (
                                        <div className="absolute inset-0 pointer-events-none z-20">
                                            <div className="w-full h-[2px] bg-white/40 absolute top-0 animate-[scanline_2s_linear_infinite]" />
                                        </div>
                                    )}

                                    {/* GRID OVERLAY */}
                                    {showGrid && (
                                        <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300 pointer-events-none" 
                                             style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
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
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scanline {
                    0% { top: -10%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 110%; opacity: 0; }
                }
            `}} />

            <CustomButtonVariant 
                variantLabel="Variant 1: Target Lock (Precision RETICLE)"
                showTargetBrackets={true}
                buttonClass="hover:bg-primary transition-colors"
            />

            <CustomButtonVariant 
                variantLabel="Variant 2: Live Scanning Feed (Verification)"
                showScanline={true}
                buttonClass="bg-primary/90 hover:bg-primary"
            />

            <CustomButtonVariant 
                variantLabel="Variant 3: Terminal Handshake (Purposeful Jitter)"
                showTerminalFlicker={true}
                buttonClass="hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all"
            />

            <CustomButtonVariant 
                variantLabel="Variant 4: Logic Slot (Mechanical Lock)"
                showSlotAnimation={true}
                innerWrapperClass="group-hover/btn:gap-4 transition-all duration-300"
            />

            <CustomButtonVariant 
                variantLabel="Variant 5: Identity Grid (Architectural Blueprint)"
                showGrid={true}
                buttonClass="transition-all duration-500"
            />
        </div>
    );
}
