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
    Terminal,
    Radio,
    Cpu,
    ArrowRightCircle
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
    showSlotAnimation = false,
    showCommandLine = false,
    showRadarPulse = false,
    showDataStream = false,
    description
}: { 
    variantLabel: string, 
    buttonClass?: string,
    innerWrapperClass?: string,
    showTargetBrackets?: boolean,
    showSlotAnimation?: boolean,
    showCommandLine?: boolean,
    showRadarPulse?: boolean,
    showDataStream?: boolean,
    description: string
}) => (
    <div className="space-y-6 mb-24">
        <div className="flex flex-col items-center gap-2 px-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent/80">{variantLabel}</span>
            <p className="text-xs text-secondary-text max-w-md text-center">{description}</p>
            <div className="h-px w-32 bg-white/10 mt-2" />
        </div>

        <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-[2rem] blur opacity-5"></div>
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
                                    <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-[-8px] group-hover/btn:left-[-8px] transition-all duration-300" />
                                    <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:top-[-8px] group-hover/btn:right-[-8px] transition-all duration-300" />
                                    <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-[-8px] group-hover/btn:left-[-8px] transition-all duration-300" />
                                    <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-primary/0 group-hover/btn:border-primary group-hover/btn:bottom-[-8px] group-hover/btn:right-[-8px] transition-all duration-300" />
                                </>
                            )}

                            {/* RADAR PULSE EFFECT */}
                            {showRadarPulse && (
                                <div className="absolute inset-0 z-0">
                                    <div className="absolute inset-0 bg-primary/20 rounded-sm animate-[ping_2s_linear_infinite]" />
                                </div>
                            )}

                            <div className={cn(
                                "relative overflow-hidden rounded-sm z-10",
                                showDataStream ? "border-2 border-dashed border-primary/30 group-hover/btn:border-primary transition-colors" : ""
                            )}>
                                <Button size="lg" className={cn(
                                    "w-full h-16 bg-primary text-black font-black uppercase italic text-sm tracking-[0.1em] shadow-2xl rounded-sm border-none relative overflow-hidden group",
                                    buttonClass
                                )}>
                                    <span className={cn("flex items-center justify-center gap-2 relative z-10", innerWrapperClass)}>
                                        Protect Your Operations 
                                        {showCommandLine && <span className="animate-[pulse_1s_infinite] ml-[-4px]">_</span>}
                                        <div className={cn(
                                            "transition-all duration-300",
                                            showSlotAnimation ? "group-hover/btn:translate-x-1 group-hover/btn:scale-110" : ""
                                        )}>
                                            <ArrowRight className="w-5 h-5"/>
                                        </div>
                                    </span>
                                    
                                    {/* DATA STREAM EFFECT */}
                                    {showDataStream && (
                                        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] w-1/2 -skew-x-12 -translate-x-full group-hover/btn:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
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
            {/* HEAD-TO-HEAD COMPARISON */}
            <div className="grid lg:grid-cols-2 gap-8 mb-32">
                <CustomButtonVariant 
                    variantLabel="Variant 1: Target Lock"
                    description="Reticles tighten on hover. Metaphor: Precision, Focus, Tactical selection."
                    showTargetBrackets={true}
                    buttonClass="hover:bg-primary transition-colors"
                />
                <CustomButtonVariant 
                    variantLabel="Variant 4: Logic Slot"
                    description="Mechanical gap closers. Metaphor: Connection, System Integration, Lock-in."
                    showSlotAnimation={true}
                    innerWrapperClass="group-hover/btn:gap-4 transition-all duration-300"
                />
            </div>

            <div className="flex items-center gap-4 py-12">
                <div className="h-px flex-1 bg-primary/20" />
                <h3 className="text-xl font-bold font-headline text-primary uppercase italic">New Forensic Directions</h3>
                <div className="h-px flex-1 bg-primary/20" />
            </div>

            <CustomButtonVariant 
                variantLabel="Variant 6: The Command Line"
                description="Blinking terminal cursor. Metaphor: Operational Input, Executing a command."
                showCommandLine={true}
                buttonClass="bg-primary/95 hover:bg-primary"
            />

            <CustomButtonVariant 
                variantLabel="Variant 7: The Radar Pulse"
                description="Concentric expansion ping. Metaphor: Awareness, Scanning, System Presence."
                showRadarPulse={true}
                buttonClass="hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] transition-all"
            />

            <CustomButtonVariant 
                variantLabel="Variant 8: The Data Stream"
                description="Animated light sweep + Dashed border. Metaphor: Information flow, Instant delivery, Pipeline."
                showDataStream={true}
                buttonClass="transition-all duration-500"
            />
        </div>
    );
}
