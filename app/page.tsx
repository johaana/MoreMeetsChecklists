
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { 
    Check, 
    X,
    ArrowRight, 
    Activity,
    Lock,
    ClipboardCheck,
    Smartphone,
    AlertTriangle,
    GraduationCap,
    ShieldCheck,
    CheckCircle2,
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    History,
    ShieldAlert,
    Target,
    LayoutGrid,
    FileSignature,
    SearchCheck,
    Briefcase,
    Users,
    FileSpreadsheet,
    Globe,
    CheckSquare,
    ChevronRight,
    TrendingUp,
    Scale,
    Gem,
    Cpu,
    ShoppingBasket,
    Clapperboard,
    Download,
    ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { FaqSection } from '@/components/layout/faq-section';
import { Button } from '@/components/ui/button';

const BRAND_GREEN = "#22C55E";
const TRUST_STRIP = "WORKS ON PHONES • NO APP INSTALL • ONE-TIME PURCHASE • DEPLOY IN 10 MINUTES • BUILT IN EXCEL • RUNS ON GOOGLE SHEETS";
const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const MARQUEE_SIGNALS = [
    "HACCP_SWEEP_COMPLETE", 
    "REVENUE_LEAKAGE_PLUGGED", 
    "COLD_STORAGE_STABLE", 
    "OPENING_AUDIT_VERIFIED", 
    "EXPIRY_LOG_VALIDATED", 
    "VOID_BILL_MONITORING", 
    "GAS_SHUTDOWN_CONFIRMED", 
    "SOP_VERSION_V18.1", 
    "SHIFT_COMPLIANCE_100%", 
    "ROI_ENGINE_ACTIVE"
];

const ELITE_INDUSTRIES = [
    { name: "Hotel Operations", id: "hotels_and_resorts" },
    { name: "Restaurant Operations", id: "restaurants" },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations" },
    { name: "School Operations", id: "school_operations_pack" },
    { name: "Franchise Operations", id: "franchise_operations_pack" },
    { name: "Facilities Operations", id: "facility_management_blueprint" },
    { name: "Multiplex Operations", id: "cinema_operations_pack" }
];

const Section = ({ children, className, id, noSpine = false }: { children: React.ReactNode, className?: string, id?: string, noSpine?: boolean }) => (
    <section id={id} className={cn("w-full py-16 md:py-32 relative overflow-hidden", className)}>
        {!noSpine && <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-zinc-100 z-0 hidden lg:block" />}
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black pt-16">
             {/* Background Architecture */}
             <div className="absolute inset-0 z-0">
                <video 
                    src={VIDEO_URL} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="h-full w-full object-cover opacity-25 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 md:via-black/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            </div>
            
            <div className="relative z-20 container mx-auto max-w-[1200px] px-6 py-12 md:py-20">
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-24 items-center">
                    
                    {/* Left: The Mandate */}
                    <div className="space-y-12 md:space-y-16">
                        <div className="space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/30 py-1.5 px-6 uppercase tracking-[0.4em] font-black text-[10px] bg-primary/5 rounded-none backdrop-blur-md">Institutional Architecture</Badge>
                            <h1 className="text-[34px] md:text-[80px] lg:text-[90px] font-black font-headline leading-[0.85] uppercase italic tracking-tighter text-white">
                                YOUR BUSINESS <br />
                                <span style={{ color: BRAND_GREEN }}>SHOULD NOT RUN</span> <br/>
                                <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                            </h1>
                            <div className="space-y-4 max-w-2xl">
                                <p className="text-lg md:text-[22px] italic font-medium text-zinc-400 leading-tight">
                                    Pre-built operational systems for hotels, restaurants, hospitals, schools, retail, facilities, cinemas, and franchise groups.
                                </p>
                                <div className="border-l-2 border-primary/40 pl-6 py-1">
                                    <p className="text-sm md:text-base text-zinc-500 font-bold italic uppercase tracking-wider">
                                        BUILT IN EXCEL. OPERATED THROUGH GOOGLE SHEETS. <br/>
                                        YOUR TEAM ALREADY KNOWS HOW TO USE IT.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-10">
                             <div className="flex flex-col sm:flex-row gap-5 items-start md:items-center">
                                <Button asChild size="lg" className="h-16 md:h-20 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-base md:text-lg shadow-[0_20px_60px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group">
                                    <Link href="/library" className="flex items-center gap-4">
                                        Deploy Your System <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </Button>
                                <div className="flex flex-col pl-2">
                                    <span className="text-[32px] md:text-4xl font-black text-white italic tracking-tighter leading-none">₹3,499</span>
                                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">ONE-TIME ACCESS</span>
                                </div>
                             </div>
                             
                             <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 max-w-xl">
                                {[
                                    { t: "120+ PRE-BUILT SOPs", i: Target },
                                    { t: "LIVE DASHBOARDS", i: Activity },
                                    { t: "NO SaaS LOCK-IN", i: Lock },
                                    { t: "TRAINER NOTES INCLUDED", i: GraduationCap }
                                ].map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <spec.i className="w-4 h-4 text-primary/40" />
                                        <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest italic">{spec.t}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>

                    {/* Right: The Sector Command */}
                    <div className="relative group lg:border-l border-white/10 lg:pl-16 space-y-10">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.6em] italic">SELECT VERTICAL</p>
                            <div className="h-px w-20 bg-primary/40" />
                        </div>
                        
                        <div className="flex flex-col space-y-4 md:space-y-6">
                            {ELITE_INDUSTRIES.map((ind) => (
                                <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center justify-between py-1 transition-all">
                                    <span className="text-xl md:text-2xl lg:text-3xl font-black font-headline uppercase italic tracking-tighter text-white/20 group-hover:text-primary group-hover:translate-x-3 transition-all duration-500">
                                        {ind.name}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-white/5 group-hover:text-primary transition-all" />
                                </Link>
                            ))}
                        </div>

                        <div className="pt-10 border-t border-white/5">
                             <p className="text-[9px] md:text-[11px] text-zinc-700 font-black uppercase tracking-[0.3em] md:tracking-[0.45em] italic leading-tight">
                                {TRUST_STRIP}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TELEMETRY MARQUEE --- */}
            <div className="absolute bottom-0 w-full bg-zinc-950/90 backdrop-blur-xl h-12 md:h-14 overflow-hidden border-t border-white/5 flex items-center shadow-2xl">
                <div className="flex flex-nowrap items-center gap-20 animate-marquee whitespace-nowrap px-10">
                    {MARQUEE_SIGNALS.map((signal, i) => (
                        <span key={i} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-3 text-zinc-600">
                            <span className="text-primary">[✓]</span>
                            <span className="opacity-80">{signal}</span>
                        </span>
                    ))}
                    {/* Loop replication */}
                    {MARQUEE_SIGNALS.map((signal, i) => (
                        <span key={`dup-${i}`} className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.4em] flex items-center gap-3 text-zinc-600">
                            <span className="text-primary">[✓]</span>
                            <span className="opacity-80">{signal}</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default function Home() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);
    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SiteHeader />
            <main className="flex-1">
                <HeroSection />

                {/* --- NOT ANOTHER SaaS TOOL --- */}
                <Section className="bg-white" id="not-saas" noSpine>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge className="bg-red-500/10 text-red-500 border-red-500/20 uppercase font-black tracking-widest text-[10px]">THE SaaS ANTIDOTE</Badge>
                                    <h2 className="text-[34px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.9] uppercase italic tracking-tighter">
                                        NOT ANOTHER <br/> <span className="text-red-600">SaaS TOOL.</span>
                                    </h2>
                                    <p className="text-xl text-zinc-500 italic font-medium leading-tight">
                                        Most operational software fails because frontline teams never fully adopt it.
                                    </p>
                                </div>
                                
                                <div className="space-y-4 border-l-2 border-zinc-100 pl-8">
                                    {[
                                        "Too complex",
                                        "Too many logins",
                                        "Too much training",
                                        "Too much resistance"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-zinc-400 font-bold italic uppercase tracking-tight">
                                            <X className="w-5 h-5 text-red-300" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 space-y-4">
                                    <p className="text-zinc-950 font-black italic uppercase text-lg">MoreMeets™ works differently.</p>
                                    <p className="text-zinc-500 font-medium italic">Your operational system is delivered as a pre-built Excel master file optimized for Google Sheets.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { t: "DOWNLOAD", d: "Get your system", i: Download },
                                    { t: "UPLOAD", d: "To Google Drive", i: Globe },
                                    { t: "SHARE", d: "With your team", i: Users },
                                    { t: "OPERATE", d: "Start running live", i: Activity }
                                ].map((step, i) => (
                                    <div key={i} className="p-8 bg-zinc-950 rounded-[2rem] flex flex-col items-center text-center space-y-3">
                                        <step.i className="w-8 h-8 text-primary" />
                                        <p className="text-white font-black italic uppercase tracking-tighter leading-none">{step.t}</p>
                                        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{step.d}</p>
                                    </div>
                                ))}
                                <div className="col-span-2 p-6 border-2 border-dashed border-zinc-200 rounded-[2rem] text-center">
                                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">NO IT SETUP • NO CONSULTANTS • NO SaaS TAX</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- WHAT YOU ACTUALLY GET --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="inclusions">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                             <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">WHAT YOU ACTUALLY GET</h2>
                             <p className="text-zinc-400 font-bold italic uppercase tracking-widest">Every Operational Pack includes:</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
                            {[
                                { t: "Industry-specific SOPs pre-built", i: Target },
                                { t: "Daily operational task system", i: ClipboardCheck },
                                { t: "Shift handover tracking", i: History },
                                { t: "Role-based accountability", i: FileSignature },
                                { t: "Audit-ready execution logs", i: ShieldCheck },
                                { t: "Incident management registers", i: ShieldAlert },
                                { t: "Trainer notes for every dept", i: GraduationCap },
                                { t: "Simple-language for staff", i: Smartphone },
                                { t: "Audit-language for supervisors", i: Scale },
                                { t: "Risks & consequences explained", i: AlertTriangle },
                                { t: "Verification checkpoints", i: SearchCheck },
                                { t: "Google Sheets deployment guide", i: FileSpreadsheet }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 group">
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-primary" />
                                    </div>
                                    <span className="text-sm md:text-base font-black uppercase italic tracking-tight text-zinc-950 group-hover:text-primary transition-colors">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- REAL OPERATIONAL INTELLIGENCE --- */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-20 md:space-y-32">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-zinc-400 border-zinc-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-white shadow-sm">FORENSIC ENGINEERING</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                BUILT USING REAL <br/> OPERATIONAL INTELLIGENCE
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center pt-4">
                                This is not generic checklist software. Each system is built around how industries actually fail in real life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Hotel Operations",
                                    icon: Building,
                                    points: ["Room readiness failures", "Housekeeping coordination gaps", "Front desk ↔ housekeeping dependencies", "Multi-department execution breakdowns"]
                                },
                                {
                                    title: "Restaurant Operations",
                                    icon: Utensils,
                                    points: ["Kitchen bottlenecks", "Cold chain failures", "Oil safety controls", "Table turnover delays"]
                                },
                                {
                                    title: "Grocery Store Operations",
                                    icon: ShoppingBasket,
                                    points: ["Expiry management", "Spoilage prevention", "Cold storage compliance", "Shrinkage control"]
                                },
                                {
                                    title: "Jewellery Store Operations",
                                    icon: Gem,
                                    points: ["Vault custody protocols", "Dual-signoff verification", "Gram-level inventory control", "CCTV-linked accountability"]
                                },
                                {
                                    title: "Electronics Store Operations",
                                    icon: Cpu,
                                    points: ["IMEI / serial tracking", "Warranty fraud prevention", "Demo unit governance", "Return abuse control"]
                                }
                            ].map((sector, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 space-y-6 hover:shadow-2xl transition-all group">
                                    <div className="flex items-center gap-4">
                                        <sector.icon className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">{sector.title}</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {sector.points.map((p, j) => (
                                            <li key={j} className="flex items-start gap-3 text-xs md:text-sm font-bold text-zinc-400 italic leading-snug">
                                                <div className="w-1 h-1 rounded-full bg-red-400 mt-1.5 shrink-0" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- NOT THE REAL PROBLEM --- */}
                <Section className="bg-zinc-950 text-white" id="problem" noSpine>
                    <div className="max-w-6xl mx-auto space-y-20">
                         <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-primary/5">THE EXECUTION GAP</Badge>
                            <h2 className="text-[34px] md:text-[54px] font-black font-headline uppercase italic tracking-tighter leading-[0.95]">
                                YOUR SOPs ARE PROBABLY <br/> <span className="text-red-500">NOT THE REAL PROBLEM.</span>
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center pt-4">
                                Most businesses already have SOP documents. But SOPs sitting in folders do not create execution.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <div className="p-10 md:p-20 bg-white/5 border-r border-white/10 relative text-left">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-black font-headline text-red-500 uppercase italic tracking-tighter">Instead of:</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "PDFs nobody opens",
                                            "WhatsApp reminders",
                                            "Verbal follow-ups",
                                            "Manual checking",
                                            "Dependency on individuals"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-zinc-500 text-lg md:text-xl font-bold italic leading-snug">
                                                <X className="w-6 h-6 text-red-500/30 shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-10 md:p-20 bg-emerald-500/5 relative text-left">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-black font-headline text-primary uppercase italic tracking-tighter">You Get:</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Daily execution visibility",
                                            "Structured accountability",
                                            "Permanent operational memory",
                                            "Faster onboarding",
                                            "Consistent branch standards",
                                            "Audit-ready records"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-white text-lg md:text-xl font-black italic leading-snug uppercase">
                                                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- EVERY TASK EXPLAINED --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                EVERY TASK IS EXPLAINED CLEARLY
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-medium italic max-w-2xl mx-auto text-center">
                                Your team does not need operational expertise to follow the system.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { t: "WHAT TO DO", i: Target },
                                { t: "HOW TO DO IT", i: GraduationCap },
                                { t: "WHY IT MATTERS", i: History },
                                { t: "RISKS IF MISSED", i: AlertTriangle },
                                { t: "ESCALATIONS", i: ShieldAlert },
                                { t: "VERIFICATION", i: SearchCheck }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center gap-4 group hover:border-primary transition-all">
                                    <item.i className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
                                    <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] italic text-zinc-950">{item.t}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-zinc-950 rounded-[2.5rem] p-10 md:p-16 text-center text-white space-y-8 shadow-2xl">
                             <h3 className="text-2xl md:text-4xl font-black font-headline uppercase italic tracking-tighter">Built for frontline teams</h3>
                             <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {[
                                    "Managers", "Supervisors", "Housekeeping", "Kitchen staff", "Retail floor staff", "Technicians", "Front desk", "Security", "Operations heads"
                                ].map((role, i) => (
                                    <Badge key={i} variant="outline" className="text-white/40 border-white/10 py-2 px-6 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest italic">{role}</Badge>
                                ))}
                             </div>
                             <p className="text-zinc-400 font-bold italic text-base md:text-xl">If someone can use Google Sheets on a phone, they can operate MoreMeets™.</p>
                        </div>
                    </div>
                </Section>

                {/* --- HOW DEPLOYMENT WORKS --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="how-it-works">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                             <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">HOW DEPLOYMENT WORKS</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { t: "DOWNLOAD", d: "Purchase and instantly download your operational system." },
                                { t: "UPLOAD", d: "Upload the Excel master file to Google Drive." },
                                { t: "SHARE", d: "Assign roles and share access with your team." },
                                { t: "OPERATE", d: "Daily tasks begin populating automatically by role, date, and frequency — live across your team." }
                            ].map((step, i) => (
                                <div className="space-y-8 group text-left" key={i}>
                                    <div className="text-6xl md:text-8xl font-black italic text-zinc-200 group-hover:text-primary transition-colors leading-none">
                                        {i+1}
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-black text-xl md:text-2xl uppercase italic leading-tight font-headline text-zinc-950 text-left">{step.t}</h4>
                                        <p className="text-base text-zinc-500 font-bold italic leading-relaxed text-left">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- WHY EXCEL + SHEETS --- */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-zinc-500 border-zinc-200 uppercase tracking-[0.4em] font-black text-[10px]">THE ADOPTION ENGINE</Badge>
                                <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-left">
                                    WHY EXCEL + <br/> GOOGLE SHEETS?
                                </h2>
                                <p className="text-lg text-zinc-500 font-bold italic">Because operational teams already understand it.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                    <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed italic">No behavioral resistance. No learning curve. No complicated software adoption cycle. Your team opens the sheet and starts working immediately.</p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-4">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">FOR MANAGERS</p>
                                        <ul className="text-[11px] font-black text-zinc-950 uppercase italic space-y-2">
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Live visibility</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Execution records</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Operational continuity</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">FOR TEAMS</p>
                                        <ul className="text-[11px] font-black text-zinc-950 uppercase italic space-y-2">
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Clear instructions</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Daily priorities</li>
                                            <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Structured handovers</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-primary/20 rounded-[2.5rem] blur-xl opacity-20"></div>
                            <img src="https://i.postimg.cc/y88kgqJb/Screenshot-2026-05-11-170353.png" className="rounded-[2.5rem] shadow-2xl border border-zinc-100 relative z-10" alt="Mobile Spreadsheet Execution" />
                        </div>
                    </div>
                </Section>

                {/* --- SINGLE VS MULTI --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="who-it-is-for" noSpine>
                    <div className="max-w-6xl mx-auto space-y-20">
                         <div className="text-center space-y-4">
                            <h2 className="text-[34px] md:text-[54px] font-black font-headline uppercase italic tracking-tighter leading-[0.95] text-zinc-950 text-center">
                                BUILT FOR SINGLE LOCATIONS <br/> AND LARGE GROUPS
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 md:p-16 rounded-[3rem] bg-white border border-zinc-200 space-y-8 relative overflow-hidden group hover:shadow-2xl transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Target className="w-48 h-48" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter text-zinc-950">Single-unit operators</h3>
                                    <p className="text-zinc-500 text-lg font-bold italic leading-relaxed">
                                        Run tighter daily operations without constantly chasing staff. Capture your expert knowledge so the business runs even when you aren't on the floor.
                                    </p>
                                </div>
                            </div>
                            <div className="p-12 md:p-16 rounded-[3rem] bg-primary text-black space-y-8 relative overflow-hidden shadow-xl hover:scale-[1.02] transition-all">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <LayoutGrid className="w-48 h-48" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <h3 className="text-2xl font-black font-headline italic uppercase tracking-tighter">Multi-unit groups</h3>
                                    <p className="text-black/70 text-lg font-bold italic leading-relaxed">
                                        Standardize execution across branches. Protect operational quality, compliance, and brand consistency at scale across your entire network.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* --- OPERATIONAL PACKS --- */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 uppercase italic tracking-tight leading-none text-center">OPERATIONAL PACKS</h2>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {[
                                { cat: "Hospitality", items: ["Hotel Operations", "Restaurant Operations"], icon: Utensils },
                                { cat: "Retail", items: ["Grocery Store Ops", "Fashion Store Ops", "Jewellery Store Ops", "Electronics Store Ops"], icon: ShoppingBag },
                                { cat: "Healthcare", items: ["Hospital Operations"], icon: Hospital },
                                { cat: "Education", items: ["School Operations"], icon: School },
                                { cat: "Infrastructure", items: ["Facilities Operations"], icon: Building2 },
                                { cat: "Entertainment", items: ["Multiplex Operations"], icon: Popcorn },
                                { cat: "Franchise", items: ["Franchise Operations"], icon: Store }
                            ].map((group, i) => (
                                <div key={i} className="space-y-4 p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 group hover:border-primary transition-all">
                                    <group.icon className="w-6 h-6 text-zinc-300 group-hover:text-primary transition-colors" />
                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] font-headline">{group.cat}</h4>
                                        <ul className="space-y-1.5">
                                            {group.items.map((item, j) => (
                                                <li key={j} className="text-[11px] font-black text-zinc-950 uppercase italic leading-tight">{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <FaqSection />

                {/* --- ONE-TIME PURCHASE --- */}
                <Section className="bg-zinc-950 text-white py-32" noSpine id="pricing">
                    <div className="max-w-4xl mx-auto text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline uppercase italic tracking-tighter leading-[0.95]">
                                ONE-TIME PURCHASE. <br/> OWN FOREVER.
                            </h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic uppercase tracking-widest">NO SaaS TAX • NO PER-USER PRICING • NO LOCK-IN</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex items-baseline gap-4">
                                <p className="text-6xl md:text-8xl font-black italic text-primary">₹3,499</p>
                                <span className="text-2xl md:text-4xl font-bold text-white/30 italic">/ $49</span>
                            </div>
                            
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] bg-primary text-black font-black uppercase italic text-xl shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none group">
                                <Link href="/library" className="flex items-center gap-6">Get Your Operational Pack <ArrowRight className="w-8 h-8 md:w-10 md:h-10" /></Link>
                            </Button>
                            
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 italic">DEPLOY ONCE. OPERATE DAILY. OWN PERMANENTLY.</p>
                        </div>
                    </div>
                </Section>

                {/* --- FINAL MANDATE --- */}
                <Section className="bg-primary text-white text-center py-32 md:py-48 relative overflow-hidden" noSpine>
                    <div className="max-w-5xl mx-auto space-y-12 relative z-10 px-6">
                        <h2 className="text-[42px] md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-black text-center">
                            STOP RUNNING OPERATIONS THROUGH WHATSAPP, MEMORY, AND FOLLOW-UPS.
                        </h2>
                        <p className="text-xl md:text-[32px] text-black/60 font-bold italic text-center leading-tight">
                            Deploy a live operational system your team can actually use. <br/>
                            Built in Excel. Powered through Google Sheets. Ready in 10 minutes.
                        </p>
                        <div className="pt-8">
                            <Button asChild size="lg" className="h-20 px-12 rounded-[20px] bg-black text-white font-black uppercase italic text-lg md:text-2xl hover:scale-[1.05] transition-all border-none">
                                <Link href="/library">START YOUR DEPLOYMENT</Link>
                            </Button>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />

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
