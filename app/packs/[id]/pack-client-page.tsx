'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Target,
    ArrowRight,
    Check,
    Activity,
    ShieldCheck,
    CheckCircle2,
    Zap,
    ShieldAlert,
    Smartphone,
    Users,
    History,
    GraduationCap,
    FileSpreadsheet,
    AlertTriangle,
    Leaf,
    Recycle,
    Wrench,
    LayoutGrid,
    Eye,
    ChevronRight,
    Camera
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';
import { packResolutions, defaultResolution } from '@/lib/pack-resolutions';
import { getDisplayTitle } from '@/lib/ui-mappings';
import { IconComponent } from '@/components/icons';

// --- INSTITUTIONAL PALETTE ---
const BRAND_GREEN = "#1F3A34";
const BRAND_GOLD = "#B89B5E";

const SECTOR_METADATA: Record<string, {
    sustainability: { t: string; d: string; i: any }[];
}> = {
    'restaurants': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Daily AC and lighting shutdown logs for unoccupied zones stop unmonitored power waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water vitals logging and overnight leak detection through digital meter-parity checks.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Prep waste tracking and food-cost variance monitoring identify overproduction before the bin.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Scheduled kitchen equipment deep-cleaning extends the lifespan of reach-ins and fryers.", i: Wrench }
        ]
    },
    'hotels_and_resorts': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Automated HVAC setback protocols for vacant rooms reduce energy overheads significantly.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Daily water meter parity checks detect underground plumbing leaks before they damage infrastructure.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Linen grey-scale audits and chemical dosing calibration reduce water and detergent waste.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive maintenance for boilers and chillers extends asset life and prevents emergency CAPEX.", i: Wrench }
        ]
    },
    'healthcare_and_hospital_operations': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Medical equipment idle-power checks and lighting shutdown logs in non-clinical zones.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water TDS monitoring and RO system backwash cycles ensure resource purity and efficiency.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Bio-medical waste segregation at source reduces hazardous disposal costs.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Technical uptime audits for MRI/CT suites and UPS banks extend the life of clinical hardware.", i: Wrench }
        ]
    },
    'school_operations_pack': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Classroom and library shutdown compliance logs stop unmonitored lighting and AC waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Potable water point hygiene and plumbing leak patrols reduce campus utility wastage.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Canteen yield monitoring and zero-junk zone patrolling reduce food waste.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Playground and mechanical structural audits extend equipment life and reduce e-waste.", i: Wrench }
        ]
    },
    'franchise_operations_pack': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Multi-unit AC shutdown logs and energy-benchmark monitoring across all franchise locations.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water meter logging and leak detection protocols enforced across the entire network.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Centralized supply chain yield audits reduce inventory waste and environmental footprint.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive maintenance audits for standardized equipment extend store-asset lifespan.", i: Wrench }
        ]
    },
    'facility_management_blueprint': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "BMS panel health monitoring and KWH meter variance tracking eliminate unmonitored energy spikes.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "STP/WTP effluent pulse monitoring and tank overflow logic prevent water wastage.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Hazardous waste disposal manifests and recycling weights logged for 100% compliance.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Detailed panel thermography and pump bearing audits extend the life of MEP infrastructure.", i: Wrench }
        ]
    },
    'retail_operations_system': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Storefront and showroom lighting shutdown compliance logs for after-hours energy savings.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Cleaning chemical dilution calibration and pill kit readiness reduce chemical waste.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Markdown logic and expiry sweep protocols identify perishable waste before it becomes total loss.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Thermal battery logs and serialized asset audits extend the life of demo tech.", i: Wrench }
        ]
    },
    'cinema_operations_pack': {
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Daily AC shutdown compliance logs for empty auditoriums stop unmonitored power waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water vitals logging and overnight leak detection through digital meter-parity checks.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Concession yield logic (corn-to-bucket) identifies production waste before it reaches the bin.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive uptime audits extend technical hardware life by 30%, reducing e-waste footprint.", i: Wrench }
        ]
    }
};

const DEFAULT_SUSTAINABILITY = [
    { t: "ENERGY DISCIPLINE", d: "Verified shutdown compliance for lighting, HVAC, and idle infrastructure.", i: Zap },
    { t: "RESOURCE CONSERVATION", d: "Resource vitals logging and overnight leak detection through digital checks.", i: Leaf },
    { t: "WASTE MITIGATION", d: "Yield monitoring and operational controls reduce preventable waste and leakage.", i: Recycle },
    { t: "ASSET LONGEVITY", d: "Preventive maintenance rigor extends equipment lifespan and reduces replacement cycles.", i: Wrench }
];

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    noSpine?: boolean;
}

function Section({ children, className, id, noSpine = false }: SectionProps) {
    return (
        <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
            {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
            <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}

const SectionEyebrow = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 md:gap-4 mb-6">
        <div className="w-8 md:w-12 h-px bg-[#B89B5E] opacity-40 shrink-0" />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-[#B89B5E] font-headline whitespace-nowrap">
            {text}
        </span>
    </div>
);

const BlueprintSection = ({ packId, verticalName }: { packId: string, verticalName: string }) => {
    const res = packResolutions[packId] || defaultResolution;
    if (!res.blueprint) return null;

    return (
        <Section className="bg-white border-b border-zinc-100">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4 text-center md:text-left">
                    <SectionEyebrow text="SYSTEM ANATOMY" />
                    <h2 className="text-3xl md:text-5xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                        What do SOPs look like in a well-run {verticalName}?
                    </h2>
                    <p className="text-lg text-zinc-600 font-medium italic leading-relaxed">
                        A well-run {verticalName.toLowerCase()} doesn't operate on luck. It operates on a set of consistent, verifiable routines that maintain standards even when managers aren't on the floor.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-[#F8F6F2] p-8 md:p-12 rounded-[2.5rem] border border-[#B89B5E]/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                        <LayoutGrid className="w-64 h-64" />
                    </div>
                    <div className="space-y-6 relative z-10">
                        <p className="text-[10px] font-black text-[#B89B5E] uppercase tracking-[0.4em] italic font-headline">CORE TRACKING NODES</p>
                        <div className="grid gap-4">
                            {res.blueprint.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm border border-zinc-100 flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
                                        <Check className="w-4 h-4 text-emerald-500" strokeWidth={4} />
                                    </div>
                                    <span className="text-base md:text-lg font-black text-zinc-900 uppercase italic tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8 relative z-10 flex flex-col justify-center">
                        <div className="p-6 bg-zinc-950 rounded-2xl border-l-4 border-emerald-500 shadow-xl">
                            <p className="text-white text-sm md:text-base font-bold italic leading-relaxed">
                                "These routines help maintain safety, service consistency, and operational discipline by converting tribal knowledge into permanent organizational infrastructure."
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.4em]">IMPACT SUMMARY</p>
                            <div className="grid gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[11px] font-black text-zinc-900 uppercase italic">Reduced Dependence on Memory</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[11px] font-black text-zinc-900 uppercase italic">Audit-Ready Documentation</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-[11px] font-black text-zinc-900 uppercase italic">Faster Team Onboarding</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default function PackClientPage({ pack, backgroundUrl, squircleUrl }: { pack: PremiumPack, backgroundUrl: string, squircleUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const res = packResolutions[pack.id] || defaultResolution;
    const sectorData = SECTOR_METADATA[pack.id] || { sustainability: DEFAULT_SUSTAINABILITY };
    
    const verticalName = getDisplayTitle(pack.id, pack.title);
    const getVerticalParts = (p: PremiumPack) => {
        const displayTitle = getDisplayTitle(p.id, p.title);
        const parts = displayTitle.toUpperCase().split(' ');
        if (parts.length === 1) return [parts[0], "OPERATIONS", "SYSTEM."];
        if (parts.length === 2) return [parts[0], parts[1], ""];
        return [parts[0], parts.slice(1).join(' '), ""];
    };
    const titleParts = getVerticalParts(pack);

    return (
        <div className="bg-[#F8F6F2] text-[#111111] font-sans antialiased selection:bg-primary/20">
            
            {/* --- HERO SECTION: THE INSTITUTIONAL COMMAND --- */}
            <section className="relative w-full overflow-hidden bg-[#F8F6F2]">
                
                {/* --- MOBILE ARCHITECTURE --- */}
                <div className="md:hidden flex flex-col bg-[#F8F6F2] pt-[72px]">
                    <div className="w-full aspect-video bg-zinc-900 relative overflow-hidden">
                        <img 
                            src={squircleUrl} 
                            alt={pack.title} 
                            className="absolute inset-0 w-full h-full object-cover object-top grayscale-[0.2] brightness-[0.9]" 
                        />
                        <div className="absolute inset-0 bg-black/5" />
                    </div>
                    <div className="p-6 pt-8 space-y-7 flex flex-col justify-start">
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-px bg-[#B89B5E] opacity-60 shrink-0" />
                                <span className="text-[7.5px] font-black uppercase tracking-[0.15em] text-[#B89B5E] font-headline whitespace-nowrap">
                                    SPREADSHEET-NATIVE OPERATIONAL INFRASTRUCTURE
                                </span>
                            </div>
                            <h1 className="text-[2.2rem] font-bold font-headline leading-[0.9] uppercase italic tracking-tighter" style={{ color: BRAND_GREEN }}>
                                {titleParts[0]} <br/> 
                                {titleParts[1]} <br/>
                                {titleParts[2]}
                            </h1>
                        </div>
                        <p className="text-[13px] font-medium leading-[1.5] text-zinc-800 italic">
                            {res.heroSubline}
                        </p>
                        <div className="flex flex-col gap-2.5">
                            {[
                                "Works directly on Google Sheets.",
                                "No app-adoption battle.",
                                "Works during internet disruptions."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                        <Check className="w-2 md:w-2.5 h-2 md:h-2.5 text-[#2E7D5A]" />
                                    </div>
                                    <span className="text-[10px] font-bold text-[#121212] uppercase tracking-wide">{text}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-2">
                            <button className="h-14 px-8 rounded-2xl text-black font-black uppercase italic text-[11px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] active:scale-95 transition-all w-full" style={{ backgroundColor: BRAND_GOLD }}>
                                <Link href="#pricing">DEPLOY IN 10 MINUTES • ₹2,499 / $29</Link>
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- DESKTOP ARCHITECTURE --- */}
                <div className="hidden md:block relative w-full min-h-[700px] pt-[120px] pb-12">
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={backgroundUrl} 
                            alt="" 
                            className="w-full h-full object-cover object-top opacity-30 grayscale-[0.2] brightness-[1.1]" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2] via-[#F8F6F2]/90 to-transparent pointer-events-none z-10" />
                    </div>

                    <div className="relative z-30 container mx-auto max-w-[1200px] px-6 h-full flex items-center">
                        <div className="max-w-4xl space-y-10 w-full relative">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-[#B89B5E] opacity-40 shrink-0" />
                                    <span className="text-[11px] font-black uppercase tracking-[0.12em] text-[#B89B5E] font-headline whitespace-nowrap">
                                        SPREADSHEET-NATIVE OPERATIONAL INFRASTRUCTURE
                                    </span>
                                </div>

                                <h1 className="text-[32px] md:text-[58px] font-bold font-headline leading-[1.05] uppercase tracking-[-0.04em]" style={{ color: BRAND_GREEN }}>
                                    {titleParts[0]} <br/> 
                                    {titleParts[1]} <br/>
                                    {titleParts[2]}
                                </h1>
                                
                                <div className="space-y-4">
                                    <p className="text-[16px] md:text-[20px] font-medium leading-[1.5] text-zinc-800 max-w-2xl border-l-[3px] border-[#B89B5E]/20 pl-8 italic">
                                        {res.heroSubline} <br/>
                                        <span className="text-zinc-500 text-base">{res.strategicParagraph}</span>
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-x-10 gap-y-4 pt-4">
                                    {[
                                        { t: `${pack.checklists.reduce((sum, cl) => sum + cl.tasks.length, 0)}+ PRE-BUILT OPERATIONAL SOPs`, i: Target },
                                        { t: "PHOTO-BACKED VERIFICATION", i: Camera },
                                        { t: "EXCEL MASTER • GOOGLE SHEETS READY", i: GraduationCap },
                                        { t: "AUDIT-READY DOCUMENTATION", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#2E7D5A]" />
                                            </div>
                                            <span className="text-[12px] font-bold text-[#111111] uppercase tracking-wide">{item.t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-4">
                                <button className="h-16 px-10 rounded-[16px] bg-primary text-black font-black uppercase text-[11px] md:text-[13px] tracking-widest shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(184,155,94,0.3)] group" style={{ backgroundColor: BRAND_GOLD }}>
                                    <Link href="#pricing" className="flex items-center justify-center gap-3">
                                        DEPLOY IN 10 MINUTES • ₹2,499 / $29 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </button>
                                <p className="text-[10px] font-black text-[#8B6B3F] uppercase tracking-[0.3em] pl-2 italic">
                                    ONE-TIME PURCHASE • OWN FOREVER • FULLY EDITABLE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW SECTION: SYSTEM ANATOMY (BLUEPRINT) --- */}
            <BlueprintSection packId={pack.id} verticalName={verticalName} />

            {/* --- 2. WHY EXECUTION BREAKS --- */}
            <Section className="bg-white border-b border-zinc-100">
                <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-red-500 border-red-100 bg-red-50/50 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">OPERATIONAL REALITY</Badge>
                        <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                            Why daily execution breaks
                        </h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                            {res.whyExecutionBreaksParagraph}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        {res.risks.map((point, index) => (
                            <div key={index} className="flex flex-col gap-5 p-8 border border-zinc-100 bg-zinc-50/30 rounded-[1.5rem] hover:bg-white hover:shadow-xl transition-all duration-500 relative group">
                                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <ShieldAlert className="w-20 h-20 text-red-600" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="relative flex h-2.5 w-2.5 shrink-0">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black font-headline uppercase italic tracking-tighter text-zinc-950">
                                        {point.title}
                                    </h3>
                                </div>
                                <p className="text-zinc-700 text-sm md:text-base font-bold italic leading-relaxed text-left">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- 3. RESOLUTION PROTOCOL --- */}
            <Section className="bg-zinc-50/50">
                <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/20 bg-[#B89B5E]/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">RESOLUTION PROTOCOL</Badge>
                        <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                            How the system restores control
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        <div className="space-y-6 p-8 border-l-4 border-[#B89B5E] bg-white shadow-sm rounded-r-[1.5rem] text-left">
                            <p className="text-[9px] font-black text-[#B89B5E] uppercase tracking-[0.4em] italic font-headline">
                                WHAT CHANGES DAILY
                            </p>
                            <div className="space-y-4">
                                {res.whatChangesDaily.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <CheckCircle2 className="w-5 h-5 text-[#B89B5E] shrink-0 mt-0.5" />
                                        <span className="text-zinc-950 font-black text-base md:text-lg leading-tight italic uppercase">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8 text-left">
                            <div className="space-y-6">
                                <h4 className="text-xl md:text-2xl font-black italic uppercase tracking-tighter text-zinc-950 font-headline">
                                    What your team actually uses
                                </h4>
                                <div className="p-6 bg-zinc-950 rounded-xl border-l-4 border-emerald-500 shadow-2xl">
                                    <p className="text-white text-sm md:text-base font-bold italic leading-relaxed">
                                        Your team does not need new software, logins, or technical training. <br/><br/>
                                        <span className="text-emerald-500 uppercase">They simply open our <strong>operational checklists</strong> in Excel or Google Sheets and begin running operations daily.</span>
                                    </p>
                                </div>
                                <div className="space-y-3 pt-2">
                                    <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">COMPLIANCE COVERAGE</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Audit Standards", "Fire Safety", "FSSAI/HACCP", "LOTO", "Personnel Certs"].map((item, i) => (
                                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-100 rounded-lg shadow-sm">
                                                <ShieldCheck className="w-3 h-3 text-primary" />
                                                <span className="text-[9px] font-black uppercase text-zinc-600 tracking-wider">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- 4. OPERATIONAL CONTINUITY --- */}
            <Section className="bg-white border-t border-zinc-100" noSpine>
                <div className="max-w-5xl mx-auto p-8 md:p-16 rounded-[2.5rem] border border-zinc-200 bg-zinc-50/50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 hidden md:block">
                        <History className="w-64 h-64 text-zinc-950" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10 text-left">
                        <div className="space-y-6 flex-1">
                            <Badge variant="outline" className="text-zinc-500 border-zinc-300 uppercase tracking-[0.4em] font-black text-[10px]">INSTITUTIONAL CONTINUITY</Badge>
                            <h2 className="text-[30px] md:text-[44px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-tight">
                                When someone resigns, <br/> the system stays.
                            </h2>
                            <p className="text-zinc-700 text-base md:text-lg font-bold italic leading-relaxed">
                                One of the biggest silent risks in operations is the loss of tribal knowledge. When experienced staff leave, unwritten shortcuts disappear and undocumented practices break. 
                                <br/><br/>
                                MoreMeets™ ensures your standards are owned by the business, not the individual. Knowledge becomes permanent infrastructure.
                            </p>
                        </div>
                        <div className="w-full md:w-[320px] shrink-0">
                             <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl aspect-[4/5]">
                                <img 
                                    src="https://i.postimg.cc/jdMQXJpq/resignation1.jpg" 
                                    alt="Operational Risk" 
                                    className="w-full h-full object-cover grayscale-[0.2]" 
                                />
                             </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- 5. BUILT FOR REAL TEAMS --- */}
            <Section className="bg-zinc-50/50">
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 uppercase tracking-[0.3em] font-black text-[10px]">OPERATIONAL REASSURANCE</Badge>
                        <h2 className="text-[28px] md:text-[50px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95] text-center">
                            Built for real teams
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {[
                            { t: "FASTER TEAM TRAINING", d: "New teams understand responsibilities faster using built-in instructions.", i: GraduationCap },
                            { t: "REDUCED DEPENDENCY", d: "Operations stop collapsing when key staff leave. Memory becomes infrastructure.", i: History },
                            { t: res.reassuranceTrustTitle || "STAKEHOLDER TRUST", d: res.reassuranceTrustDescription || "Operational consistency customers notice.", i: Users },
                            { t: "EASY FOR TEAMS", d: "No apps. No software rollout. Teams simply update one shared dashboard daily.", i: CheckCircle2 },
                            { t: "EDITABLE INFRASTRUCTURE", d: "Add, remove, or customize tasks anytime to fit your unique property protocols.", i: Zap },
                            { t: "AUDIT-READY RECORDS", d: "Institutional proof for inspectors and insurers is generated automatically.", i: ShieldCheck }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 p-8 bg-white rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-[#B89B5E] group-hover:bg-[#B89B5E] group-hover:text-white transition-all shadow-inner">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-2 text-left">
                                    <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950 leading-none text-left">{item.t}</h4>
                                    <p className="text-zinc-500 text-sm md:text-base italic font-medium leading-relaxed text-left" dangerouslySetInnerHTML={{ __html: item.d }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- 6. OPERATIONAL SUSTAINABILITY --- */}
            <Section className="bg-[#1F3A34] text-white py-20 md:py-32" noSpine>
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-6 text-center">
                        <Badge variant="outline" className="text-emerald-500 border-emerald-500/20 bg-emerald-500/5 uppercase tracking-[0.5em] font-black text-[10px] italic px-10 py-3 rounded-none">OPERATIONAL SUSTAINABILITY</Badge>
                        <h2 className="text-[34px] md:text-[64px] font-black font-headline uppercase italic leading-[0.9] tracking-tighter text-center">Operational <br/> Sustainability.</h2>
                        <p className="text-white/60 text-lg md:text-xl font-bold italic leading-tight uppercase border-l-2 border-emerald-500/20 pl-8 mx-auto max-w-xl text-center">
                            Environmental sustainability is the byproduct of daily operational discipline and resource visibility.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                        {sectorData.sustainability.map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-[#B89B5E] group-hover:text-black transition-all duration-500 shadow-inner">
                                    <item.i className="w-6 h-6" style={{ color: i % 2 === 0 ? BRAND_GOLD : '#10B981' }} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-black uppercase italic text-white leading-tight text-left">{item.t}</h4>
                                    <p className="text-zinc-400 text-[11px] font-bold italic uppercase leading-relaxed text-left">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- 8. PRICING SECTION --- */}
            <div id="pricing" className="scroll-mt-20" />
            <PricingClient pack={pack} />

            {/* --- 9. CUSTOMIZATION BRIDGE --- */}
            <Section className="bg-zinc-950 text-white" noSpine>
                <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2rem] border border-white/10 bg-white/[0.02] relative overflow-hidden text-center space-y-8">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles className="w-48 h-48 text-[#B89B5E]" />
                    </div>
                    <div className="relative z-10 space-y-3">
                        <Badge variant="outline" className="text-[#B89B5E] border-[#B89B5E]/30 uppercase tracking-[0.3em] font-black text-[9px]">OPTIONAL CUSTOMIZATION SUPPORT</Badge>
                        <h2 className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                            Need this system tailored <br/> to your specific brand?
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg font-medium italic max-w-2xl mx-auto">
                            If our standard framework requires professional adaptation to your unique department hierarchy, we offer 1-on-1 discovery calls.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-[#B89B5E] text-black font-black uppercase italic text-xs shadow-2xl hover:scale-105 transition-all border-none">
                            <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                BOOK CUSTOMIZATION DISCOVERY <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">TAILORED IMPLEMENTATION STARTS AT ₹9,999 / $125 USD</p>
                    </div>
                </div>
            </Section>

            {/* --- 10. FINAL MANDATE --- */}
            <Section className="bg-[#1F3A34] text-white py-20 md:py-32" noSpine>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 md:gap-20 items-center">
                        <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                            <div className="space-y-5">
                                <h2 className="text-[36px] md:text-[64px] font-black tracking-tighter uppercase italic leading-[0.9]">
                                    BRING STRUCTURE <br/> BACK TO <br/> <span className="text-emerald-500">OPERATIONS.</span>
                                </h2>
                                <p className="text-base md:text-[26px] text-white/40 font-bold italic leading-tight">
                                    LESS CHASING. MORE VISIBILITY. CALMER MORNINGS.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center gap-4">
                                <button className="h-14 md:h-20 px-8 md:px-16 rounded-xl text-black font-black uppercase italic text-sm md:text-xl shadow-2xl hover:bg-white hover:scale-[1.05] active:scale-95 transition-all border-none group w-full lg:w-fit flex items-center justify-center" style={{ backgroundColor: "#B89B5E" }}>
                                    <Link href="#pricing" className="flex items-center gap-3">
                                        DEPLOY IN 10 MINUTES • ₹2,499 / $29 <ArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-3" />
                                    </Link>
                                </button>
                                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-emerald-500/60 italic">
                                    EXCEL MASTER • NO APP ROLLOUT • ONE-TIME BUY
                                </p>
                            </div>
                        </div>

                        {/* Outcomes Stack */}
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] space-y-6 shadow-2xl">
                             <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">OPERATIONAL OUTCOMES</p>
                             <div className="space-y-3">
                                {[
                                    "Visibility secured instantly",
                                    "Teams aligned daily",
                                    "Managers stop chasing",
                                    "Execution tracked via proof",
                                    "Compliance verified automatically"
                                ].map((outcome, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                            <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                                        </div>
                                        <span className="text-base md:text-lg font-black text-white/80 uppercase italic tracking-tight">{outcome}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

const Sparkles = ({ className }: { className?: string }) => (
    <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
        <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
);
