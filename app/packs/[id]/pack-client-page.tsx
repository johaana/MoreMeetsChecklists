'use client';

import React, { useState, useEffect } from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    LayoutGrid,
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
    Sparkles,
    Leaf,
    Recycle,
    Wrench,
    FileSignature,
    Monitor,
    Popcorn,
    Projector,
    Ticket,
    ChevronRight,
    SearchCheck,
    Thermometer,
    Pill,
    Bus,
    Scale,
    Building2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    ShoppingBag
} from 'lucide-react';
import Link from 'next/link';
import PricingClient from '../pricing-client';
import { packResolutions, defaultResolution } from '@/lib/pack-resolutions';
import { IconComponent } from '@/components/icons';

// --- SECTOR METADATA: THE SOVEREIGN MANDATE ---
const SECTOR_METADATA: Record<string, {
    marquee: string[];
    sustainability: { t: string; d: string; i: any }[];
}> = {
    'restaurants': {
        marquee: [
            "HACCP_SWEEP_COMPLETE",
            "FRYER_TEMP_VARIANCE",
            "COLD_STORAGE_ALERT",
            "OPENING_LINE_CHECK_ACTIVE",
            "EXPIRY_LOG_VALIDATED",
            "WASTE_YIELD_MONITORING",
            "GAS_SHUTDOWN_CONFIRMATION",
            "ALLERGEN_STATION_VERIFIED",
            "SHIFT_COMPLIANCE_100%"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Daily AC and lighting shutdown logs for unoccupied dining zones stop unmonitored power waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water vitals logging and faucet aerator audits reduce utility consumption by 15%.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Prep waste tracking and food-cost variance monitoring identify overproduction before the bin.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Scheduled kitchen equipment deep-cleaning extends the lifespan of reach-ins and fryers.", i: Wrench }
        ]
    },
    'hotels_and_resorts': {
        marquee: [
            "ROOM_RELEASE_VERIFIED",
            "LINEN_CYCLE_TRACKING",
            "HVAC_RESPONSE_PENDING",
            "POOL_CHEMISTRY_LOG_ACTIVE",
            "GUEST_COMPLAINT_ESCALATION",
            "FIRE_PANEL_HEALTH_STABLE",
            "NIGHT_AUDIT_COMPLETE",
            "PRIVACY_SWEEP_100%"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Automated HVAC setback protocols for vacant rooms reduce energy overheads significantly.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Daily water meter parity checks detect underground plumbing leaks before they damage infrastructure.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Linen grey-scale audits and chemical dosing calibration reduce water and detergent waste.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive maintenance for boilers and chillers extends asset life and prevents emergency CAPEX.", i: Wrench }
        ]
    },
    'healthcare_and_hospital_operations': {
        marquee: [
            "CRASH_CART_SEAL_VERIFIED",
            "MEDICATION_SIGNOFF_PENDING",
            "SHARPS_DISPOSAL_TRACKING",
            "OXYGEN_LINE_STATUS_STABLE",
            "INFECTION_CONTROL_SWEEP",
            "ICU_HANDOVER_COMPLETE",
            "SANITIZATION_AUDIT_ACTIVE",
            "NABH_INDICATOR_SYNC_100%"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Medical equipment idle-power checks and lighting shutdown logs in non-clinical zones.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water TDS monitoring and RO system backwash cycles ensure resource purity and efficiency.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Bio-medical waste segregation at source reduces hazardous disposal costs and environmental footprint.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Technical uptime audits for MRI/CT suites and UPS banks extend the life of life-saving hardware.", i: Wrench }
        ]
    },
    'school_operations_pack': {
        marquee: [
            "BUS_DISPATCH_VERIFIED",
            "POCSO_LOG_CONFIRMATION",
            "CAMPUS_SWEEP_COMPLETE",
            "ATTENDANCE_VARIANCE_FLAGGED",
            "CAFETERIA_TEMP_CHECK_ACTIVE",
            "VISITOR_GATE_VALIDATION",
            "PLAYGROUND_STRUCTURE_AUDIT"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Classroom and library shutdown compliance logs stop unmonitored lighting and AC waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Potable water point hygiene and plumbing leak patrols reduce campus utility wastage.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Canteen yield monitoring and zero-junk zone patrolling reduce food waste and packaging litter.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Playground and mechanical structural audits extend equipment life and reduce e-waste.", i: Wrench }
        ]
    },
    'franchise_operations_pack': {
        marquee: [
            "UNIT_COMPLIANCE_SYNC",
            "BRAND_STANDARD_AUDIT",
            "MULTI_SITE_VARIANCE_ALERT",
            "SOP_VERSION_VALIDATED",
            "TRAINING_COMPLETION_PENDING",
            "DAILY_REPORTING_GAP",
            "ROYALTY_SHIELD_ACTIVE"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Multi-unit AC shutdown logs and energy-benchmark monitoring across all franchise locations.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water meter logging and leak detection protocols enforced across the entire network.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Centralized supply chain yield audits reduce inventory waste and packaging environmental footprint.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive maintenance audits for standardized equipment extend fleet and store-asset lifespan.", i: Wrench }
        ]
    },
    'facility_management_blueprint': {
        marquee: [
            "DG_RUNTIME_MONITORING",
            "BMS_PANEL_ALERT",
            "WATER_TANK_LEVEL_STABLE",
            "CHILLER_RESPONSE_DELAY",
            "AMC_COMPLIANCE_TRACKING",
            "PREVENTIVE_MAINTENANCE_DUE",
            "UPTIME_99.9%"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "BMS panel health monitoring and KWH meter variance tracking eliminate unmonitored energy spikes.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "STP/WTP effluent pulse monitoring and tank overflow logic prevent water resource wastage.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Hazardous waste disposal manifests and recycling weights logged for 100% environmental compliance.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Detailed panel thermography and pump bearing audits extend the life of heavy MEP infrastructure.", i: Wrench }
        ]
    },
    'retail_operations_system': {
        marquee: [
            "OPENING_AUDIT_COMPLETE",
            "CASH_VARIANCE_REVIEW",
            "VISUAL_MERCH_SWEEP",
            "SHRINKAGE_MONITORING_ACTIVE",
            "FLOOR_READINESS_CONFIRMED",
            "STOCK_ROOM_ACCESS_PENDING",
            "LEGAL_METROLOGY_SYNC"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Storefront and showroom lighting shutdown compliance logs for after-hours energy savings.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Cleaning chemical dilution calibration and spill kit readiness reduce chemical and water waste.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Markdown logic and expiry sweep protocols identify perishable waste before it becomes total loss.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Thermal battery logs and serialized asset audits extend the life of demo tech and floor hardware.", i: Wrench }
        ]
    },
    'cinema_operations_pack': {
        marquee: [
            "DCP_SYNC_CONFIRMED",
            "SUBTITLE_TRACK_VALIDATED",
            "PROJECTOR_LAMP_HOURS_MONITORED",
            "AUDIO_CHANNEL_CALIBRATION_ACTIVE",
            "SCREEN_TEMP_RANGE_STABLE",
            "KDM_EXPIRY_WARNING",
            "VOID_BILL_AUDIT_ACTIVE",
            "POPCORN_YIELD_1:40_STABLE"
        ],
        sustainability: [
            { t: "ENERGY DISCIPLINE", d: "Daily AC shutdown compliance logs for empty auditoriums stop unmonitored power waste.", i: Zap },
            { t: "RESOURCE CONSERVATION", d: "Water vitals logging and overnight leak detection through digital meter-parity checks.", i: Leaf },
            { t: "WASTE MITIGATION", d: "Concession yield logic (corn-to-bucket) identifies production waste before it reaches the bin.", i: Recycle },
            { t: "ASSET LONGEVITY", d: "Preventive uptime audits extend technical hardware life by 30%, reducing e-waste footprint.", i: Wrench }
        ]
    }
};

const DEFAULT_MARQUEE = [
    "OPERATIONAL_DRIFT_PREVENTED",
    "REVENUE_LEAKAGE_PLUGGED",
    "MISSED_SAFETY_CHECKS_ELIMINATED",
    "UNVERIFIED_READINESS_STOPPED",
    "INSTITUTIONAL_MEMORY_SECURED",
    "AUDIT_FAILURE_AVOIDED"
];

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
        <section id={id} className={cn("w-full py-12 md:py-24 relative overflow-hidden", className)}>
            {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
            <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}

function BrowserFrame({ src, viewLabel }: { src: string, viewLabel: string }) {
    return (
        <div className="group space-y-3 w-full max-w-lg mx-auto">
            <div className="relative rounded-[1rem] overflow-hidden shadow-2xl border border-zinc-200 bg-[#0A0F19] transition-all duration-1000">
                <div className="bg-[#0D121F] border-b border-white/5 px-4 py-2 flex items-center gap-3">
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-red-500/20" />
                        <div className="w-1 h-1 rounded-full bg-amber-500/20" />
                        <div className="w-1 h-1 rounded-full bg-emerald-500/20" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-black/40 border border-white/5 rounded px-6 py-0.5 text-[7px] font-black text-white/20 uppercase tracking-[0.4em] italic leading-none">
                            moremeets-master-engine.xlsx
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[120px] md:h-[160px] overflow-hidden bg-zinc-900">
                    <img 
                        src={src} 
                        alt={viewLabel} 
                        className="w-full h-auto object-cover object-top grayscale-[0.6] group-hover:grayscale-[0.3] transition-all duration-1000 opacity-30 group-hover:opacity-60 blur-[2px] group-hover:blur-[1px]" 
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0A0F19] via-transparent to-transparent pointer-events-none" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.3em] italic leading-none">{viewLabel}</span>
            </div>
        </div>
    );
}

function PulsatingStressText({ text, className, delay = "0s" }: { text: string, className?: string, delay?: string }) {
    return (
        <div className={cn("animate-pulse duration-[2000ms] transition-all", className)} style={{ animationDelay: delay }}>
            <span className="text-[11px] md:text-[14px] font-black text-red-600/60 uppercase tracking-tighter italic drop-shadow-[0_0_15px_rgba(220,38,38,0.1)] leading-tight block text-left lg:text-right">
                {text}
            </span>
        </div>
    );
}

export default function PackClientPage({ pack, heroImageUrl }: { pack: PremiumPack, heroImageUrl: string }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    const res = packResolutions[pack.id] || defaultResolution;
    const sectorData = SECTOR_METADATA[pack.id] || { marquee: DEFAULT_MARQUEE, sustainability: DEFAULT_SUSTAINABILITY };
    
    const getVerticalName = (p: PremiumPack) => {
        const title = p.title.toLowerCase();
        if (title.includes('restaurant')) return 'RESTAURANTS';
        if (title.includes('hotel')) return 'HOTELS';
        if (title.includes('hospital')) return 'HOSPITALS';
        if (title.includes('cinema')) return 'CINEMAS';
        if (title.includes('school')) return 'SCHOOLS';
        if (title.includes('retail')) return 'RETAIL STORES';
        if (title.includes('franchise')) return 'FRANCHISES';
        if (title.includes('facility')) return 'FACILITIES';
        return p.category.toUpperCase() + 's';
    };
    const verticalName = getVerticalName(pack);

    return (
        <div className="bg-white text-[#0B0F14] font-sans antialiased selection:bg-primary/20">
            
            {/* --- HERO SECTION: ONE GLANCE COMMAND --- */}
            <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <img 
                        src={heroImageUrl} 
                        alt="" 
                        className="w-full h-full object-cover opacity-40 grayscale brightness-[0.35]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 md:via-black/70 to-transparent" />
                </div>

                <div className="relative z-20 container mx-auto max-w-[1200px] px-6 pt-20 pb-12">
                    <div className="flex flex-col lg:grid lg:grid-cols-[1.4fr,0.6fr] lg:gap-16 items-center">
                        <div className="space-y-6 md:space-y-8 w-full">
                            <div className="space-y-3">
                                <h1 className="font-headline font-black text-[32px] md:text-[44px] lg:text-[54px] xl:text-[60px] leading-none uppercase italic tracking-tighter text-white lg:whitespace-nowrap">
                                    {res.heroTitle || pack.title.toUpperCase()}
                                </h1 >
                                <div className="space-y-3">
                                    <p className="text-lg md:text-[24px] font-medium text-zinc-300 max-w-3xl leading-tight">
                                        {res.heroSubline}
                                    </p>
                                    <div className="border-l-2 border-primary/40 pl-6">
                                        <p className="text-sm md:text-base text-zinc-400 font-bold max-w-xl leading-relaxed italic">
                                            {res.strategicParagraph}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-5 bg-emerald-500 shadow-[0_0_10px_rgba(16,124,16,0.5)]" />
                                    <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">SYSTEM SPECIFICATIONS</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-3">
                                    {[
                                        { t: `PRE-BUILT OPERATIONAL SOPs FOR ${verticalName}`, i: Target },
                                        { t: "LIVE OPERATIONAL DASHBOARD", i: Activity },
                                        { t: "TRAINER NOTES INCLUDED", i: GraduationCap },
                                        { t: "AUDIT-READY OPERATIONAL INFRASTRUCTURE", i: FileSpreadsheet }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 md:gap-4 group">
                                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                                                <Check className="w-2.5 h-2.5 text-[#22C55E]" />
                                            </div>
                                            <span className="text-[11px] md:text-[13px] font-bold uppercase tracking-[0.05em] italic leading-tight text-white/70 group-hover:text-white transition-colors">
                                                {item.t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 md:space-y-5 pt-2">
                                <div className="space-y-3">
                                    <div className="space-y-3">
                                        <Button asChild size="lg" className="w-full sm:w-auto h-14 md:h-16 px-10 md:px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-sm md:text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group flex items-center justify-center gap-4">
                                            <Link href="#pricing">
                                                LIVE IN 10 MINUTES <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-zinc-950 transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </Button>
                                        <div className="space-y-1.5 pl-1">
                                            <p className="text-[10px] md:text-[12px] text-emerald-500/90 font-black uppercase tracking-[0.2em] italic leading-tight text-center sm:text-left">
                                                BUILT IN EXCEL. SHARED THROUGH GOOGLE SHEETS. NO APP ROLLOUT REQUIRED.
                                            </p>
                                            <p className="text-[10px] md:text-[11px] text-zinc-600 font-black uppercase tracking-[0.4em] italic leading-tight text-center sm:text-left">
                                                ONE-TIME PURCHASE • OWN FOREVER • NO SUBSCRIPTIONS
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full lg:border-l-2 border-red-500/20 pl-6 lg:pl-0 lg:pr-10 lg:text-right mt-12 lg:mt-0 space-y-6 md:space-y-8">
                             <p className="text-[9px] font-black text-red-500/40 uppercase tracking-[0.7em] italic">DAILY OPERATIONAL RISKS</p>
                             <div className="flex flex-col gap-3 md:gap-5 lg:gap-6">
                                 {res.risks.map((risk, i) => (
                                    <PulsatingStressText key={i} text={risk.title} delay={`${i * 0.2}s`} />
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OPERATIONAL TELEMETRY: OXBLOOD MARQUEE --- */}
            <div className="w-full bg-[#450a0a] h-10 overflow-hidden border-y border-black/20 relative z-30 flex items-center shadow-2xl">
                <div className="flex flex-nowrap items-center gap-16 animate-marquee whitespace-nowrap px-10">
                    {sectorData.marquee.map((signal, i) => {
                        const isAlert = signal.includes('ALERT') || signal.includes('WARNING') || signal.includes('FLAGGED') || signal.includes('DELAY');
                        return (
                            <span key={i} className={cn(
                                "text-[10px] font-mono font-black uppercase tracking-[0.25em] flex items-center gap-3",
                                isAlert ? "text-red-400" : "text-zinc-500/80"
                            )}>
                                <span className="text-[8px] opacity-40">[{isAlert ? '!' : '✓'}]</span>
                                {signal}
                            </span>
                        );
                    })}
                    {/* Duplicate for seamless loop */}
                    {sectorData.marquee.map((signal, i) => {
                        const isAlert = signal.includes('ALERT') || signal.includes('WARNING') || signal.includes('FLAGGED') || signal.includes('DELAY');
                        return (
                            <span key={`dup-${i}`} className={cn(
                                "text-[10px] font-mono font-black uppercase tracking-[0.25em] flex items-center gap-3",
                                isAlert ? "text-red-400" : "text-zinc-500/80"
                            )}>
                                <span className="text-[8px] opacity-40">[{isAlert ? '!' : '✓'}]</span>
                                {signal}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* --- SECTION 2: WHY EXECUTION BREAKS --- */}
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
                                <p className="text-zinc-500 text-sm md:text-base font-bold italic leading-relaxed text-left">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- SECTION 3: RESTORING CONTROL --- */}
            <Section className="bg-zinc-50/50">
                <div className="max-w-5xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic">RESOLUTION PROTOCOL</Badge>
                        <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                            How the system restores control
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 relative">
                        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />
                        <div className="space-y-6 p-8 border-l-4 border-primary bg-white shadow-sm rounded-r-[1.5rem] text-left">
                            <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] italic font-headline">
                                WHAT CHANGES DAILY
                            </p>
                            <div className="space-y-4">
                                {res.whatChangesDaily.map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
                                
                                {res.compliance && (
                                    <div className="space-y-3 pt-2">
                                        <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.4em]">COMPLIANCE COVERAGE</p>
                                        <div className="flex flex-wrap gap-2">
                                            {res.compliance.map((item, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-100 rounded-lg shadow-sm">
                                                    <ShieldCheck className="w-3 h-3 text-primary" />
                                                    <span className="text-[9px] font-black uppercase text-zinc-600 tracking-wider">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- SECTION: TECHNICAL PROOF (HUD ARTIFACTS) --- */}
            <Section className="bg-white" id="evidence">
                <div className="max-w-6xl mx-auto space-y-16 md:space-y-32">
                    <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 lg:gap-24 items-center">
                        <div className="space-y-8 text-left">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[9px] px-6 py-1.5 rounded-none italic bg-zinc-50">TECHNICAL PROOF</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left">
                                    Executive <br/> Operations View
                                </h2>
                                <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-l-2 border-primary/20 pl-8 text-left">
                                    Know what's done and what's missed without attending a single meeting. Real-time visibility into multi-unit health.
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <BrowserFrame src="https://i.postimg.cc/W1Yt09r8/Screenshot-2026-05-11-170634.png" viewLabel="EXECUTIVE COMMAND PULSE" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center">
                        <div className="order-2 lg:order-1 w-full">
                            <BrowserFrame src="https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png" viewLabel="DAILY EXECUTION LEDGER" />
                        </div>
                        <div className="space-y-8 text-left order-1 lg:order-2">
                            <div className="space-y-4">
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left lg:text-right">
                                    Staff Mobile <br/> Execution
                                </h2>
                                <p className="text-zinc-500 text-sm md:text-base font-bold italic uppercase leading-relaxed border-r-2 border-primary/20 pr-8 text-left lg:text-right">
                                    No app training required. Staff log completion in seconds. If it's not logged, it's not done.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- SECTION: OPERATIONAL SUSTAINABILITY --- */}
            <Section className="bg-white border-t border-zinc-100" id="esg">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-6 text-center">
                        <Badge variant="outline" className="text-emerald-600 border-emerald-100 bg-emerald-50 uppercase tracking-[0.5em] font-black text-[10px] italic px-10 py-3 rounded-none">OPERATIONAL SUSTAINABILITY</Badge>
                        <h2 className="text-[34px] md:text-[64px] font-black font-headline uppercase italic leading-[0.9] tracking-tighter text-center">Sustainability through Rigor.</h2>
                        <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase border-l-2 border-emerald-500/20 pl-8 mx-auto max-w-xl text-center">
                            Environmental sustainability isn't a report. It's the byproduct of daily operational discipline and visibility.
                        </p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-8 md:gap-12 text-left">
                        {sectorData.sustainability.map((item, i) => (
                            <div key={i} className="flex flex-col gap-4 items-start group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-400 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-black uppercase italic text-zinc-950 leading-tight text-left">{item.t}</h4>
                                    <p className="text-[11px] font-bold text-zinc-400 italic uppercase leading-relaxed text-left">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- SECTION: BUILT FOR REAL TEAMS --- */}
            <Section className="bg-zinc-50 border-y border-zinc-100">
                <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
                    <div className="text-center space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">OPERATIONAL REASSURANCE</Badge>
                        <h2 className="text-[28px] md:text-[50px] font-black font-headline text-zinc-950 uppercase italic tracking-tighter leading-[0.95]">
                            Built for real teams
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                        {[
                            {
                                t: "FASTER TEAM TRAINING",
                                d: "New teams understand responsibilities faster using built-in instructions and operational guidance.",
                                i: GraduationCap
                            },
                            {
                                t: "REDUCED DEPENDENCY",
                                d: "Operations stop collapsing when one experienced person is absent. Memory becomes infrastructure.",
                                i: History
                            },
                            {
                                t: res.reassuranceTrustTitle || "STAKEHOLDER TRUST",
                                d: res.reassuranceTrustDescription || "Operational consistency customers notice and trust.",
                                i: Users
                            },
                            {
                                t: "EASY FOR TEAMS",
                                d: "No apps. No software rollout. Teams simply update one shared <strong>operations dashboard</strong> daily.",
                                i: CheckCircle2
                            },
                            {
                                t: "EDITABLE INFRASTRUCTURE",
                                d: "Add, remove, or customize technical tasks anytime to fit your unique property protocols.",
                                i: Zap
                            },
                            {
                                t: "AUDIT-READY RECORDS",
                                d: "Institutional proof for inspectors, insurers, and owners is generated automatically.",
                                i: ShieldCheck
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-5 p-8 bg-white rounded-[2rem] border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 group text-left">
                                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
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

            {/* --- PRICING SECTION --- */}
            <div id="pricing" className="scroll-mt-20" />
            <PricingClient pack={pack} />

            {/* --- CUSTOMIZATION BRIDGE --- */}
            <Section className="bg-zinc-950 text-white" noSpine>
                <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[2rem] border border-white/10 bg-white/[0.02] relative overflow-hidden text-center space-y-8">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Sparkles className="w-48 h-48 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-3">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[9px]">OPTIONAL CUSTOMIZATION SUPPORT</Badge>
                        <h2 className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter leading-tight">
                            Need this system tailored <br/> to your specific brand?
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg font-medium italic max-w-2xl mx-auto">
                            If our standard framework requires professional adaptation to your unique department hierarchy or multi-unit reporting structure, we offer 1-on-1 discovery calls.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <Button asChild size="lg" className="h-14 px-8 rounded-xl bg-primary text-black font-black uppercase italic text-xs shadow-2xl hover:scale-105 transition-all border-none">
                            <Link href="https://calendly.com/more-moremeets/30min" target="_blank">
                                BOOK CUSTOMIZATION DISCOVERY <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-white/20">TAILORED IMPLEMENTATION STARTS AT ₹9,999 / $125 USD</p>
                    </div>
                </div>
            </Section>

            {/* --- FINAL MANDATE --- */}
            <Section className="bg-[#0F3D2E] text-white py-20 md:py-32" noSpine>
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 md:gap-20 items-center">
                        <div className="space-y-8 md:space-y-12 text-center lg:text-left">
                            <div className="space-y-5">
                                <h2 className="text-[36px] md:text-[64px] font-black tracking-tighter uppercase italic leading-[0.9]">
                                    {res.ctaTitle?.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>{line}<br/></React.Fragment>
                                    )) || (
                                        <>BRING STRUCTURE <br/> BACK TO <br/> <span className="text-emerald-500">OPERATIONS.</span></>
                                    )}
                                </h2>
                                <p className="text-base md:text-[26px] text-white/40 font-bold italic leading-tight">
                                    {res.ctaSubline || "LESS CHASING. MORE VISIBILITY. CALMER MORNINGS."}
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center lg:items-start gap-4">
                                <button className="h-14 md:h-20 px-8 md:px-16 rounded-xl bg-[#F4A261] text-black font-black uppercase italic text-sm md:text-xl shadow-2xl hover:bg-white hover:scale-[1.05] active:scale-95 transition-all border-none group w-full lg:w-fit flex items-center justify-center">
                                    <Link href="#pricing" className="flex items-center gap-3">
                                        LIVE IN 10 MINUTES NOW <ArrowRight className="w-6 h-6 md:w-7 md:h-7 transition-transform group-hover:translate-x-3" />
                                    </Link>
                                </button>
                                <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.2em] text-emerald-500/60 italic">
                                    BUILT IN EXCEL • NO APP ROLLOUT • ONE-TIME BUY
                                </p>
                            </div>
                        </div>

                        {/* Outcomes Stack */}
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] space-y-6 shadow-2xl">
                             <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em] italic font-headline">OPERATIONAL OUTCOMES</p>
                             <div className="space-y-3">
                                {res.outcomes.map((outcome, i) => (
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