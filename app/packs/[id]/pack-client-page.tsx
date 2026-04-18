
'use client';

import React from 'react';
import type { PremiumPack } from "@/lib/premium-packs";
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    LayoutGrid,
    ClipboardCheck,
    Clock,
    ShieldCheck,
    Lock,
    Activity,
    FileSpreadsheet,
    CheckCircle2,
    Zap,
    GraduationCap,
    Smartphone,
    AlertTriangle,
    Download,
    HelpCircle,
    Target
} from 'lucide-react';
import Link from 'next/link';
import { IconComponent } from '@/components/icons';

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container mx-auto max-w-[1200px] px-6">
            {children}
        </div>
    </section>
);

const AnimatedAnnotation = ({ children, className, delay = "0s", color = "green" }: { children: React.ReactNode, className?: string, delay?: string, color?: "green" | "red" | "blue" }) => {
    const pingColors = {
        green: "bg-emerald-500",
        red: "bg-red-500",
        blue: "bg-blue-500"
    };

    return (
        <div className={cn(
            "absolute z-30 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-xl flex items-center gap-2 border border-[#E6E8EC] animate-in fade-in zoom-in duration-700 whitespace-nowrap",
            className
        )} style={{ animationDelay: delay }}>
            <span className="relative flex h-1.5 w-1.5">
                <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-100 scale-[4.5]", pingColors[color as keyof typeof pingColors])}></span>
                <span className={cn("relative inline-flex rounded-full h-1.5 w-1.5", pingColors[color as keyof typeof pingColors])}></span>
            </span>
            <span className="text-[9px] font-black text-[#0B0F14] uppercase tracking-widest leading-none">{children}</span>
        </div>
    );
};

// Industry specific strings helper
const getIndustryContent = (id: string) => {
    const defaults = {
        pitfalls: ["Tasks get skipped during busy shifts", "Work depends on memory of key people", "Inconsistent standards across locations"],
        prevents: [
            { t: "Safety failures", d: "Prevents fatal gaps in protocols." },
            { t: "Operational drift", d: "Ensures consistent quality every day." },
            { t: "PR disasters", d: "Protects your brand reputation instantly." }
        ]
    };

    const mapping: Record<string, typeof defaults> = {
        'restaurants': {
            pitfalls: ["Critical food safety checks missed", "Inconsistent recipe execution", "Revenue leakage in the kitchen"],
            prevents: [
                { t: "Food safety incidents", d: "Zero-fail HACCP compliance." },
                { t: "Margin erosion", d: "Stops unmonitored waste and theft." },
                { t: "Service collapse", d: "Ensures kitchen readiness for rush." }
            ]
        },
        'hotels_and_resorts': {
            pitfalls: ["Room readiness gaps", "Safety protocol lapses", "Reputation damage on social media"],
            prevents: [
                { t: "Refund requests", d: "Ensures 100% room parity." },
                { t: "Guest safety gaps", d: "Verified perimeter and life safety." },
                { t: "Brand dilution", d: "Maintains 5-star standards daily." }
            ]
        },
        'cinema_operations_pack': {
            pitfalls: ["Projection issues go unnoticed", "Concession revenue leakage", "Fire safety checks skipped"],
            prevents: [
                { t: "Projection failure", d: "Zero-fail technical checks." },
                { t: "Revenue leakage", d: "Stops concession profit bleed." },
                { t: "Safety disasters", d: "Daily physical exit verification." }
            ]
        }
    };

    return mapping[id] || defaults;
};

export default function PackClientPage({ pack }: { pack: PremiumPack }) {
  const content = getIndustryContent(pack.id);
  const totalChecklists = pack.checklists?.length || 0;
  const totalTasks = pack.checklists?.reduce((sum, cl) => sum + cl.tasks.length, 0) || 0;

  return (
    <div className="bg-[#F7F8FA] text-[#0B0F14]">
        
        {/* SECTION 1 — HERO */}
        <section className="w-full bg-[#F7F8FA] pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
            <div className="container mx-auto max-w-[1200px] px-6">
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT SIDE */}
                    <div className="space-y-8 relative z-20">
                        <div className="space-y-4">
                            <span className="text-[12px] font-black uppercase tracking-[0.1em] text-[#5B6670]">{pack.category.toUpperCase()}</span>
                            <h1 className="text-[32px] md:text-[48px] font-black text-[#0B0F14] leading-[1.1] tracking-tighter uppercase italic">
                                {pack.title} <br/> <span className="text-[#0F3D2E]">Operating System</span>
                            </h1>
                            <p className="text-[20px] text-[#5B6670] italic font-medium leading-tight">
                                {pack.description}
                            </p>
                        </div>

                        <div className="border-l-[3px] border-[#0F3D2E] pl-[16px] space-y-2 py-1">
                            <p className="text-[18px] font-black leading-tight text-[#0B0F14] italic uppercase">Even when you’re not there.</p>
                            <div className="space-y-1 opacity-60">
                                <p className="text-sm font-bold text-[#0B0F14]">Without follow-ups</p>
                                <p className="text-sm font-bold text-[#0B0F14]">Without confusion</p>
                                <p className="text-sm font-bold text-[#0B0F14]">Without depending on memory</p>
                            </div>
                        </div>

                        <p className="text-sm font-bold text-[#0B0F14]">Pre-built, editable SOPs with live tracking and dashboard</p>

                        <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
                            <button className="h-[64px] px-10 rounded-[12px] bg-[#F4A261] text-white font-black uppercase italic text-lg shadow-[0_12px_30px_-5px_rgba(244,162,97,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border-none group">
                                <a href="#pricing" className="flex items-center gap-3">
                                    Deploy your system → ₹{pack.priceINR}
                                </a>
                            </button>
                            <div className="flex flex-col">
                                <p className="text-[11px] font-black text-[#5B6670] uppercase tracking-widest">One-time • Own forever</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: DASHBOARD PROOF */}
                    <div className="relative lg:-ml-44">
                        <div className="relative mx-auto w-fit scale-125 transition-all duration-1000">
                            <AnimatedAnnotation className="top-[32%] -left-2" color="red" delay="0.5s">Missed</AnimatedAnnotation>
                            <AnimatedAnnotation className="top-[12%] -right-2" color="green" delay="1s">Completed</AnimatedAnnotation>
                            <AnimatedAnnotation className="bottom-[18%] -left-6" color="blue" delay="1.5s">Dashboard</AnimatedAnnotation>

                            <div className="rounded-[24px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] bg-white border border-[#E6E8EC] relative max-w-lg">
                                <div className="bg-[#0B0F14] h-10 w-full flex items-center px-4 gap-2">
                                    <div className="flex gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500/30" /><div className="w-2 h-2 rounded-full bg-amber-500/30" /><div className="w-2 h-2 rounded-full bg-emerald-500/30" /></div>
                                    <div className="flex-1 flex justify-center"><div className="bg-white/10 px-6 py-1 rounded text-[8px] font-black text-white/40 uppercase tracking-widest italic">SOVEREIGN_SYSTEM_CONSOLE</div></div>
                                </div>
                                <img src={DASHBOARD_IMAGE} alt="System Dashboard" className="w-full h-auto grayscale-[0.05]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 2 — WHY THIS MATTERS */}
        <Section className="bg-white border-y border-[#E6E8EC]">
            <div className="max-w-[720px] mx-auto text-center space-y-10">
                <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Why {pack.title.toLowerCase()} operations break</h2>
                <div className="grid gap-4 text-left">
                    {content.pitfalls.map((p, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#F7F8FA] border border-[#E6E8EC]">
                            <div className="w-2 h-2 rounded-full bg-red-500" />
                            <span className="text-[#5B6670] font-bold italic">{p}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xl font-black text-red-500 uppercase italic">Small misses create big failures.</p>
            </div>
        </Section>

        {/* SECTION 3 — WHAT THIS SYSTEM DOES */}
        <Section>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { t: "Pre-built SOPs", d: "Everything already defined", i: ClipboardCheck },
                    { t: "Daily tracking", d: "Tasks updated as work happens", i: Clock },
                    { t: "Live dashboard", d: "See what’s done vs missed instantly", i: Activity }
                ].map((card, i) => (
                    <div key={i} className="bg-white p-8 rounded-2xl border border-[#E6E8EC] shadow-sm hover:shadow-md transition-all text-center space-y-4">
                        <div className="w-12 h-12 rounded-xl bg-[#0F3D2E]/5 flex items-center justify-center text-[#0F3D2E] mx-auto">
                            <card.i className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg font-black uppercase italic">{card.t}</h4>
                            <p className="text-[#5B6670] text-sm font-medium italic">{card.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* SECTION 4 — HOW IT WORKS */}
        <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
            <div className="space-y-12">
                <div className="text-center space-y-2">
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">Start in minutes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                        { t: "Download system", d: "Get your industry-specific file with pre-built SOPs — ready to use." },
                        { t: "Open in Sheets", d: "Upload once. Access from phone or desktop." },
                        { t: "Share with team", d: "Assign roles. Lock structure so nothing breaks." },
                        { t: "See everything live", d: "Track tasks as they get done. Know what’s missed — without asking." }
                    ].map((step, i) => (
                        <div className="bg-white border border-[#E6E8EC] p-6 rounded-2xl space-y-4" key={i}>
                            <div className="w-8 h-8 rounded-lg bg-[#0F3D2E] text-white flex items-center justify-center font-black italic">{i+1}</div>
                            <div className="space-y-1">
                                <h4 className="font-black text-sm uppercase italic">{step.t}</h4>
                                <p className="text-xs text-[#5B6670] font-medium italic leading-relaxed">{step.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <p className="text-[20px] font-black text-[#0B0F14] uppercase italic tracking-tighter">👉 No setup. No training. Ready in minutes.</p>
                </div>
            </div>
        </Section>

        {/* SECTION 5 — PACK-SPECIFIC DEPTH */}
        <Section className="bg-white">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.4em] font-black text-[10px]">OS Interior</Badge>
                    <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] uppercase italic tracking-tight">What’s inside the system</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {pack.checklists.map((checklist, index) => (
                        <div key={index} className="flex gap-4 p-6 rounded-2xl bg-[#F7F8FA] border border-[#E6E8EC] group hover:bg-white hover:shadow-xl transition-all">
                            <div className="w-10 h-10 rounded-xl bg-white border border-[#E6E8EC] flex items-center justify-center text-[#0F3D2E] shrink-0 group-hover:bg-[#0F3D2E] group-hover:text-white transition-all">
                                <IconComponent name={checklist.icon || "ClipboardCheck"} className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-black text-base uppercase italic">{checklist.title}</h4>
                                <p className="text-sm text-[#5B6670] italic font-medium leading-snug">{checklist.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* SECTION 6 — ROLES / MODULES */}
        <Section className="bg-[#F7F8FA] border-y border-[#E6E8EC]">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {pack.checklists.slice(0, 6).map((checklist, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-[#E6E8EC] space-y-4 shadow-sm">
                        <div className="flex justify-between items-start">
                            <h4 className="text-sm font-black uppercase text-[#5B6670] tracking-widest">{checklist.role}</h4>
                            <Badge variant="outline" className="text-[8px] font-black">{checklist.frequency.toUpperCase()}</Badge>
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg font-black italic uppercase leading-none">{checklist.title.replace('System', '').replace('Command', '')}</p>
                            <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{checklist.tasks.length} Checkpoints</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* SECTION 7 — REAL RISKS */}
        <Section className="bg-white">
            <div className="max-w-[800px] mx-auto space-y-12">
                <h2 className="text-[32px] md:text-[44px] font-bold text-[#0B0F14] text-center uppercase italic tracking-tight">What this prevents</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {content.prevents.map((item, i) => (
                        <div key={i} className="space-y-2 text-center">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mx-auto">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <h4 className="font-black text-sm uppercase italic">{item.t}</h4>
                            <p className="text-xs text-[#5B6670] italic font-medium">{item.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>

        {/* PRICING SECTION (Integrated 8, 9, 10, 11) */}
        <Section id="pricing" className="bg-[#0F3D2E] text-white">
            <div className="max-w-xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-[40px] md:text-[64px] font-bold leading-[0.9] tracking-tighter uppercase italic">Deploy your system</h2>
                    <div className="flex flex-col items-center">
                        <div className="flex items-baseline gap-3">
                            <p className="text-[48px] font-black italic">₹{pack.priceINR}</p>
                            <span className="text-xl font-bold text-white/30 italic line-through">₹1,999</span>
                        </div>
                        <p className="text-[12px] font-black uppercase tracking-[0.3em] text-white/40">One-time payment • Own forever</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-left">
                    {[
                        { t: "Pre-built SOPs", i: ClipboardCheck },
                        { t: "Auto dashboard", i: Activity },
                        { t: "Trainer notes", i: GraduationCap },
                        { t: "Admin controls", i: Lock },
                        { t: "Multi-location ready", i: LayoutGrid },
                        { t: "100% Unlocked Excel", i: FileSpreadsheet }
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <item.i className="w-4 h-4 text-[#F4A261]" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">{item.t}</span>
                        </div>
                    ))}
                </div>

                <div className="space-y-8">
                    <button className="h-[80px] w-full px-12 rounded-[16px] bg-[#F4A261] text-white font-black uppercase italic text-2xl shadow-[0_20px_50px_-10px_rgba(244,162,97,0.5)] hover:scale-[1.05] active:scale-95 transition-all border-none group">
                        <Link href={`/packs/${pack.id}#pricing`} className="flex items-center justify-center gap-4">
                            DEPLOY SYSTEM NOW <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
                        </Link>
                    </button>
                    <p className="text-[20px] font-black uppercase italic tracking-tighter text-white">👉 Start running your {pack.title.toLowerCase()} properly</p>
                </div>
            </div>
        </Section>

    </div>
  );
}
