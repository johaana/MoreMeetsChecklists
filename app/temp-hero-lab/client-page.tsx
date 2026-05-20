'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Lock,
    ClipboardCheck,
    Activity,
    Check,
    ShieldCheck,
    Target,
    Smartphone,
    AlertTriangle,
    Zap,
    CheckCircle2,
    ChevronRight,
    GraduationCap,
    FileSignature,
    Users,
    Globe,
    SearchCheck,
    ShieldAlert,
    Download,
    Upload,
    UserPlus,
    Play
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const ELITE_INDUSTRIES = [
    { name: "Hotel Operations", id: "hotels_and_resorts" },
    { name: "Restaurant Operations", id: "restaurants" },
    { name: "Jewellery Store Operations", id: "retail_jewellery_operations_pack" },
    { name: "Grocery Store Operations", id: "supermarket_grocery_retail_pack" },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations" },
    { name: "School Operations", id: "school_operations_pack" },
    { name: "Franchise Operations", id: "franchise_operations_pack" },
    { name: "Facilities Operations", id: "facility_management_blueprint" },
    { name: "Multiplex Operations", id: "cinema_operations_pack" },
    { name: "Fashion Store Operations", id: "fashion_and_apparel_retail" },
    { name: "Electronics Store Operations", id: "electronics_showroom_pack" }
];

const BRAND_GREEN = "#22C55E";

const LabHeader = () => (
    <div className="flex flex-col items-center gap-1 mb-8">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Check className="text-black w-4 h-4" />
            </div>
            <span className="font-headline text-xl font-bold text-white tracking-tight">MoreMeets™</span>
        </div>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Where SOPs Meet Execution</span>
    </div>
);

const TechnicalPayload = () => (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/40 italic">
        <span className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-primary/60" /> Ready in 10 Minutes</span>
        <span className="flex items-center gap-2"><Smartphone className="w-3 h-3 text-primary/60" /> Works on Phones</span>
        <span className="flex items-center gap-2"><Lock className="w-3 h-3 text-primary/60" /> No SaaS Fees</span>
    </div>
);

const ActionUnit = ({ className, centered = true }: { className?: string, centered?: boolean }) => (
    <div className={cn("flex flex-col gap-6", centered ? "items-center" : "items-start", className)}>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl bg-primary text-black font-black uppercase italic text-xs shadow-[0_20px_50px_-10px_rgba(34,197,94,0.3)] hover:bg-white transition-all border-none">
                <Link href="/library">SEE YOUR INDUSTRY SYSTEM</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl border-white/10 text-white font-black uppercase italic text-xs hover:bg-white/5 transition-all">
                <Link href="#sovereign-ledger">SEE HOW IT WORKS</Link>
            </Button>
        </div>
        <Link href="https://calendly.com" target="_blank" className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-primary transition-colors">
            <span>Need help setting up multiple branches? Book Operational Walkthrough</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
    </div>
);

const AtmosphericBg = () => (
    <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
);

const LabSection = ({ children, title, description, id }: { children: React.ReactNode, title: string, description: string, id: string }) => (
    <div id={id} className="w-full py-24 border-b border-white/5 space-y-12 bg-[#050505]">
        <div className="container px-6 mx-auto">
            <div className="space-y-1 border-l-2 border-emerald-500 pl-6 text-left">
                <h2 className="text-xl font-black uppercase italic tracking-tighter font-headline text-white">{title}</h2>
                <p className="text-zinc-500 italic font-medium text-[10px] uppercase tracking-widest">{description}</p>
            </div>
        </div>
        <div className="w-full relative overflow-hidden min-h-[95vh] flex flex-col justify-center border-y border-white/5">
            <AtmosphericBg />
            <div className="relative z-10 w-full">
                {children}
            </div>
            
            {/* Functional Hyperlinked Marquee Strip */}
            <div className="absolute bottom-0 w-full overflow-hidden flex items-center h-14 bg-black/80 backdrop-blur-md border-t border-white/5 z-20">
                 <div className="flex flex-nowrap gap-12 animate-marquee whitespace-nowrap px-10">
                    {ELITE_INDUSTRIES.map((ind) => (
                        <Link key={ind.id} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase italic tracking-[0.4em] text-zinc-600 group-hover/link:text-primary transition-colors">{ind.name}</span>
                            <ChevronRight className="w-3 h-3 text-zinc-800 group-hover/link:text-primary" />
                        </Link>
                    ))}
                    {ELITE_INDUSTRIES.map((ind) => (
                        <Link key={`${ind.id}-dup`} href={`/packs/${ind.id}`} className="group/link flex items-center gap-3">
                            <span className="text-[10px] font-black uppercase italic tracking-[0.4em] text-zinc-600 group-hover/link:text-primary transition-colors">{ind.name}</span>
                            <ChevronRight className="w-3 h-3 text-zinc-800 group-hover/link:text-primary" />
                        </Link>
                    ))}
                 </div>
            </div>
        </div>
    </div>
);

export default function HeroLabClient() {
    return (
        <div className="bg-[#050505] text-white font-sans selection:bg-emerald-500/30">
            
            <div className="container px-6 pt-32 pb-8 mx-auto text-center space-y-4">
                <Badge variant="outline" className="text-emerald-500 border-emerald-500/30 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none bg-emerald-500/5">
                    SOVEREIGN HERO LAB v5.0 (ATMOSPHERIC)
                </Badge>
                <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter leading-tight text-white">
                    Operational <span className="text-emerald-500">Clarity</span>.
                </h1>
            </div>

            {/* --- ARCHETYPE 01: THE SOVEREIGN MONOLITH --- */}
            <LabSection id="opt-1" title="01. The Sovereign Monolith" description="Centered mandate. High whitespace. Maximum brand authority.">
                <div className="container mx-auto max-w-[900px] text-center space-y-12">
                    <LabHeader />
                    <div className="space-y-6 flex flex-col items-center">
                        <h1 className="text-[44px] md:text-[84px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                            YOUR BUSINESS <br/> SHOULD NOT RUN <br/> <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                        </h1>
                        <p className="text-lg md:text-2xl italic font-medium text-zinc-400 mx-auto max-w-2xl">
                            Stop chasing staff on WhatsApp. Turn SOPs into daily execution.
                        </p>
                    </div>
                    <div className="space-y-10">
                        <TechnicalPayload />
                        <ActionUnit />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 02: THE COMMAND SPLIT --- */}
            <LabSection id="opt-2" title="02. The Command Split" description="Narrative left, focus on 'System' feel. Uses technical framing.">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 text-left">
                            <LabHeader />
                            <div className="space-y-6">
                                <h1 className="text-[44px] md:text-[72px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                    CAPTURE <br/> <span style={{ color: BRAND_GREEN }}>MEMORY.</span>
                                </h1>
                                <p className="text-xl italic font-medium text-zinc-400 max-w-lg leading-tight">
                                    Stop the stress of management gaps. Turn your SOPs into a shared operational system.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <TechnicalPayload />
                                <ActionUnit centered={false} />
                            </div>
                        </div>
                        <div className="hidden lg:block relative group">
                            <div className="absolute -inset-10 blur-[100px] opacity-20 bg-primary rounded-full pointer-events-none" />
                            <div className="relative p-10 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl space-y-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">SYSTEM CORE</p>
                                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">Ready Operational System</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "No app installation required",
                                        "Works on phones (Google Sheets)",
                                        "Audit-ready execution logs",
                                        "Built for real frontline teams"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-primary/60" />
                                            <span className="text-xs font-bold text-white/50 uppercase italic tracking-widest">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 03: THE ATMOSPHERIC HUD --- */}
            <LabSection id="opt-3" title="03. The Atmospheric HUD" description="The fan favorite: Glass pill narrative + Monospaced telemetry.">
                <div className="container mx-auto max-w-[1000px] text-center space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                            <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.4em]">SYSTEM_STABLE_V18.1</span>
                        </div>
                        <h1 className="text-[54px] md:text-[90px] font-black font-headline leading-[0.8] uppercase italic tracking-tighter text-white relative z-10">
                             MEMORY IS NOT <br/> <span style={{ color: BRAND_GREEN }}>A SYSTEM.</span>
                        </h1>
                    </div>
                    
                    <div className="max-w-2xl mx-auto space-y-10 relative z-10 p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
                        <p className="text-xl text-zinc-400 italic font-medium leading-relaxed">
                            Turn your expert knowledge into daily execution. Ready in 10 minutes. No monthly fees.
                        </p>
                        
                        <div className="pt-4">
                            <ActionUnit />
                        </div>
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 04: THE PROCESS HERO --- */}
            <LabSection id="opt-4" title="04. The Process Hero" description="Emphasizing the simple 4-step deployment flow.">
                <div className="container mx-auto max-w-[1100px] text-center space-y-16">
                    <div className="space-y-12">
                        <LabHeader />
                        <h1 className="text-[44px] md:text-[80px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                            SOP EXECUTION, <br/> <span style={{ color: BRAND_GREEN }}>MADE SIMPLE.</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                        {[
                            { t: "DOWNLOAD", d: "Ready System", i: Download },
                            { t: "UPLOAD", d: "To Sheets", i: Upload },
                            { t: "ASSIGN", d: "Your Team", i: UserPlus },
                            { t: "RUN", d: "Daily Ops", i: Play }
                        ].map((item, i) => (
                            <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm space-y-3">
                                <item.i className="w-6 h-6 text-primary/60 mx-auto" />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black text-white italic uppercase tracking-tighter leading-none">{item.t}</p>
                                    <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="space-y-10 max-w-xl mx-auto">
                        <ActionUnit />
                    </div>
                </div>
            </LabSection>

            {/* --- ARCHETYPE 05: PRESTIGIOUS MINIMAL --- */}
            <LabSection id="opt-5" title="05. Prestigious Minimal" description="Cleanest implementation. Focuses on the core business mandate.">
                <div className="container mx-auto max-w-[1200px] text-center space-y-16">
                    <div className="space-y-6">
                        <LabHeader />
                        <h1 className="text-[64px] md:text-[120px] font-black font-headline leading-[0.75] uppercase italic tracking-tighter text-white">
                            SOVEREIGN <br/> <span className="text-zinc-800">OPERATIONS.</span>
                        </h1>
                        <div className="h-1 w-24 bg-primary mx-auto" />
                    </div>

                    <div className="space-y-12">
                        <p className="text-xl md:text-3xl text-zinc-400 font-bold italic uppercase tracking-widest max-w-4xl mx-auto leading-tight">
                            A ready operational system <br/> for your business.
                        </p>
                        <ActionUnit />
                        <TechnicalPayload />
                    </div>
                </div>
            </LabSection>

            <style jsx global>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    width: fit-content;
                    animation: marquee 80s linear infinite;
                }
            `}</style>
        </div>
    );
}

