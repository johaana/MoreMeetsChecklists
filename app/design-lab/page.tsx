
'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Download,
    LayoutGrid,
    ClipboardCheck,
    Clock,
    ShieldCheck,
    Lock,
    Users,
    AlertTriangle,
    Activity,
    FileSpreadsheet,
    HelpCircle,
    Smartphone,
    Globe,
    Zap,
    GraduationCap,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const DASHBOARD_IMAGE = "https://i.postimg.cc/g2xq1Xz8/Screenshot-2026-04-08-015852.png";

// --- DESIGN SYSTEM CONSTANTS ---
const COLORS = {
    PRIMARY: "#0E9F6E", // Deep Green
    BACKGROUND: "#F9FAFB", // Off-white
    TEXT_PRIMARY: "#0F172A", // Dark
    TEXT_SECONDARY: "#4B5563", // Grey
    GREY_LIGHT: "#F3F4F6"
};

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 px-4 md:px-6", className)}>
        <div className="container mx-auto max-w-7xl">
            {children}
        </div>
    </section>
);

export default function DesignLabPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-body text-[#0F172A]">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* 🔴 SECTION 1: GLASS HERO (ABOVE THE FOLD) */}
                <section className="relative w-full min-h-[100svh] flex flex-col justify-center pt-16 overflow-hidden">
                    <div className="container px-6 lg:px-12 mx-auto relative z-10">
                        <div className="grid lg:grid-cols-[1.5fr,1fr] gap-12 items-center">
                            
                            {/* Left: Glass Card Narrative */}
                            <div className="bg-white/88 backdrop-blur-md border border-zinc-200 rounded-[20px] p-8 md:p-12 shadow-xl space-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
                                <div className="space-y-4">
                                    <span className="text-[11px] font-black text-[#4B5563] uppercase tracking-[0.4em] leading-none">
                                        INSTITUTIONAL OPERATING SYSTEM
                                    </span>
                                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                                        Stop chasing your team. <br/>
                                        <span className="text-[#0E9F6E]">See daily work done.</span>
                                    </h1>
                                    <p className="text-xl md:text-2xl font-medium text-[#4B5563]">
                                        Even when you’re not there.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-lg font-medium text-[#0F172A] leading-relaxed">
                                        No follow-ups. No confusion. <br/>
                                        No dependency on memory.
                                    </p>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {[
                                            "Pre-built, editable SOPs",
                                            "Daily task tracking",
                                            "Trainer notes (faster training)",
                                            "Defined accountability",
                                            "Live dashboard visibility"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <Check className="w-5 h-5 text-[#0E9F6E] shrink-0" />
                                                <span className="text-sm font-bold text-[#4B5563]">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-6 pt-4 border-t border-zinc-100">
                                    <div className="space-y-1">
                                        <p className="text-xs font-black text-[#0F172A] uppercase tracking-widest">
                                            Runs on Excel / Google Sheets
                                        </p>
                                        <p className="text-[10px] text-[#4B5563] uppercase tracking-widest">
                                            No software. No subscription.
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-start gap-2">
                                        <button className="h-16 px-10 rounded-xl bg-[#0E9F6E] text-white font-black uppercase italic tracking-widest text-lg hover:brightness-110 transition-all shadow-lg active:scale-95 border-none">
                                            <Link href="/library" className="flex items-center gap-3">
                                                Start Your System → ₹2,999
                                            </Link>
                                        </button>
                                        <p className="text-[10px] font-bold text-[#4B5563] uppercase tracking-widest pl-2">
                                            One-time payment • Own forever
                                        </p>
                                    </div>

                                    <p className="text-[9px] font-bold text-[#4B5563]/60 uppercase tracking-[0.2em]">
                                        Used across restaurants, hotels, healthcare & operations teams
                                    </p>
                                </div>
                            </div>

                            {/* Right: Dashboard Proof */}
                            <div className="relative group animate-in fade-in zoom-in-95 duration-1000 delay-200">
                                <div className="absolute top-4 left-4 bg-[#0F172A] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest z-20 shadow-xl">
                                    Live Operational Dashboard
                                </div>
                                <div className="rounded-[20px] overflow-hidden border border-zinc-200 shadow-2xl bg-white">
                                    <img 
                                        src={DASHBOARD_IMAGE} 
                                        alt="System Dashboard" 
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-1000" 
                                    />
                                </div>
                                <div className="mt-6 space-y-2 text-center md:text-left md:pl-4">
                                    <p className="text-[11px] font-black text-[#0F172A] uppercase tracking-[0.3em]">Track tasks. See what’s done. Catch what’s missed.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 🔴 SECTION 2: PROBLEM */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Why operations break</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                            <div className="space-y-6">
                                {[
                                    "Tasks get skipped",
                                    "Work is assumed done",
                                    "Staff executes differently"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-medium text-[#4B5563]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4B5563]" /> {item}
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {[
                                    "Managers keep following up",
                                    "No real visibility",
                                    "No proper records"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg font-medium text-[#4B5563]">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#4B5563]" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                                Small misses. Every day. <br/>
                                <span className="text-[#4B5563]">That’s where control is lost.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 3: SOLUTION */}
                <Section className="bg-[#F3F4F6] text-center">
                    <div className="max-w-3xl mx-auto space-y-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">This changes how your operations run</h2>
                        <div className="space-y-4 text-xl md:text-2xl text-[#4B5563] font-medium leading-relaxed">
                            <p>Tasks are already defined.</p>
                            <p>Work gets updated daily.</p>
                            <p>You see what’s done vs missed instantly.</p>
                        </div>
                        <div className="pt-6 space-y-2">
                            <p className="text-2xl font-bold text-[#0E9F6E] uppercase tracking-tighter italic">No follow-ups required.</p>
                            <p className="text-2xl font-bold text-[#0E9F6E] uppercase tracking-tighter italic">No dependency on memory.</p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 4: HOW IT WORKS */}
                <Section className="bg-white">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Start in minutes</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {[
                                { t: "Download the system", i: Download },
                                { t: "Open in Excel / Sheets", i: FileSpreadsheet },
                                { t: "Assign to your team", i: Users },
                                { t: "Team updates tasks daily", i: Clock },
                                { t: "Dashboard shows live status", i: Activity }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-16 h-16 rounded-2xl bg-[#F3F4F6] flex items-center justify-center text-[#0F172A]">
                                        <step.i className="w-8 h-8" />
                                    </div>
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-black text-[#4B5563]">STEP 0{i+1}</span>
                                        <h4 className="font-bold text-sm leading-tight px-4">{step.t}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-xs font-black text-[#4B5563] uppercase tracking-widest">
                                Works on phone or desktop • No training required
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 5: WHAT YOU SEE */}
                <Section className="bg-[#F9FAFB]">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-6xl font-bold text-[#0F172A]">Your daily view</h2>
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-4 h-4 rounded-full bg-red-500 shrink-0" />
                                    <span className="text-2xl font-bold text-[#0F172A]">Pending tasks</span>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-4 h-4 rounded-full bg-[#0E9F6E] shrink-0" />
                                    <span className="text-2xl font-bold text-[#0F172A]">Completed tasks</span>
                                </div>
                                <div className="flex items-center gap-6 group">
                                    <div className="w-4 h-4 rounded-full bg-[#0F172A] shrink-0" />
                                    <span className="text-2xl font-bold text-[#0F172A]">Performance by role / location</span>
                                </div>
                            </div>
                            <div className="pt-8 border-l-4 border-[#0E9F6E] pl-8">
                                <p className="text-3xl md:text-4xl font-bold text-[#0F172A]">
                                    You don’t ask. <br/>
                                    <span className="text-[#4B5563]">You already know.</span>
                                </p>
                            </div>
                        </div>
                        <div className="rounded-[20px] overflow-hidden border border-zinc-200 shadow-2xl bg-white scale-110 lg:translate-x-12">
                            <img src={DASHBOARD_IMAGE} alt="Dashboard Detail" className="w-full h-auto" />
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 6: WHAT YOU GET */}
                <Section className="bg-white">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">A Ready-to-Run System</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { t: "120+ pre-built SOPs", i: ClipboardCheck },
                                { t: "Daily execution tracking", i: Clock },
                                { t: "Trainer notes for every task", i: GraduationCap },
                                { t: "Defined consequences for accountability", i: ShieldCheck },
                                { t: "Live dashboard", i: Activity },
                                { t: "Multi-role & multi-location visibility", i: LayoutGrid },
                                { t: "Fully editable system", i: FileSpreadsheet },
                                { t: "Admin controls (lock formulas & structure)", i: Lock }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-8 rounded-2xl bg-[#F9FAFB] border border-zinc-100 group hover:border-[#0E9F6E]/30 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#0E9F6E] shadow-sm group-hover:bg-[#0E9F6E] group-hover:text-white transition-all">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-lg text-[#0F172A]">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 7: WHY THIS WORKS */}
                <Section className="bg-[#F3F4F6]">
                    <div className="grid lg:grid-cols-2 gap-1 gap-y-12">
                        <div className="p-12 space-y-10">
                            <h3 className="text-xl font-black text-[#4B5563] uppercase tracking-widest">Why others fail</h3>
                            <div className="space-y-8">
                                {[
                                    "SOPs sit in files",
                                    "Staff doesn’t understand them",
                                    "No one tracks execution"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-xl font-bold text-[#4B5563]/60 line-through">
                                        <div className="w-2 h-2 rounded-full bg-red-400" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-12 bg-white rounded-[32px] shadow-xl space-y-10">
                            <h3 className="text-xl font-black text-[#0E9F6E] uppercase tracking-widest">Your System</h3>
                            <div className="space-y-8">
                                {[
                                    "Clear what to do",
                                    "Trainer notes explain how",
                                    "Consequences show why it matters",
                                    "Daily tracking ensures it gets done"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 text-xl font-bold text-[#0F172A]">
                                        <div className="w-2 h-2 rounded-full bg-[#0E9F6E]" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-16">
                        <p className="text-2xl md:text-3xl font-bold text-[#0F172A]">
                            This is not documentation. <br/>
                            <span className="text-[#0E9F6E]">This is execution.</span>
                        </p>
                    </div>
                </Section>

                {/* 🔴 SECTION 8: RISKS PREVENTED */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Risks Prevented</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {[
                                "Missed safety checks",
                                "Equipment failures",
                                "Poor customer experience",
                                "Audit issues",
                                "Revenue loss"
                            ].map((item, i) => (
                                <div key={i} className="px-10 py-6 rounded-full bg-[#F9FAFB] border border-zinc-100 font-bold text-lg text-[#0F172A]">
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                            <p className="text-xl font-bold italic text-[#4B5563]">
                                "Small misses don’t become big problems."
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 9: WHO THIS IS FOR */}
                <Section className="bg-[#F3F4F6]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Built for serious operations</h2>
                            <p className="text-[11px] font-black text-[#4B5563] uppercase tracking-[0.4em]">One system. Multiple Verticals.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {[
                                "Restaurants", "Hotels", "Hospitals", "Retail", "Cinemas", "Facilities", "Franchises"
                            ].map((ind, i) => (
                                <div key={i} className="aspect-square rounded-2xl bg-white flex items-center justify-center text-center p-4 border border-zinc-100 hover:border-[#0E9F6E]/40 transition-all group">
                                    <span className="font-black uppercase italic tracking-tighter text-sm text-[#0F172A] group-hover:text-[#0E9F6E] transition-colors">{ind}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8">
                             <p className="text-sm font-bold text-[#4B5563] uppercase tracking-widest">Built for single units and multi-location teams</p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 10: CLARITY BLOCK */}
                <Section className="bg-white">
                    <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[40px] bg-[#F3F4F6] space-y-10 text-center relative overflow-hidden">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">This is not just Excel</h2>
                            <p className="text-xl md:text-2xl font-medium text-[#4B5563] italic">It’s a complete operational system built for daily execution.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 text-center pt-10 border-t border-zinc-200">
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Zero Software Debt</h4>
                                <p className="text-xs text-[#4B5563]">No implementation lag.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Zero Recurring Cost</h4>
                                <p className="text-xs text-[#4B5563]">No monthly bills.</p>
                             </div>
                             <div className="space-y-1">
                                <h4 className="text-sm font-black uppercase tracking-widest text-[#0F172A]">Zero Complexity</h4>
                                <p className="text-xs text-[#4B5563]">Works everywhere.</p>
                             </div>
                        </div>
                        <div className="pt-10">
                            <p className="text-xl font-bold text-[#0F172A]">
                                Simple for teams. <br/>
                                <span className="text-[#0E9F6E]">Powerful for managers.</span>
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 SECTION 11: SUPPORT */}
                <Section className="bg-white text-center">
                    <div className="max-w-2xl mx-auto space-y-6">
                        <h2 className="text-2xl font-bold text-[#0F172A]">Need help setting this up?</h2>
                        <p className="text-[#4B5563] text-lg font-medium">Customization and setup support available.</p>
                        <Button asChild variant="link" className="text-[#0E9F6E] font-black uppercase tracking-widest">
                            <Link href="/contact">Message Support →</Link>
                        </Button>
                    </div>
                </Section>

                {/* 🔴 FINAL CTA */}
                <Section className="bg-[#0F172A] text-white py-24 text-center">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-7xl font-bold tracking-tight uppercase italic leading-[0.9]">Start running your <br/> system today</h2>
                            <p className="text-xl md:text-2xl text-white/60 font-medium">Setup takes less than 10 minutes</p>
                        </div>
                        
                        <div className="flex flex-col items-center gap-6">
                            <button className="h-20 px-16 rounded-2xl bg-[#0E9F6E] text-white font-black uppercase italic tracking-widest text-2xl hover:scale-105 transition-all border-none shadow-[0_20px_50px_-10px_rgba(14,159,110,0.5)]">
                                <Link href="/library">Get Your System → ₹2,999</Link>
                            </button>
                            <p className="text-[12px] font-bold text-white/40 uppercase tracking-[0.4em]">
                                One-time payment • Own forever • Limited-time pricing
                            </p>
                        </div>
                    </div>
                </Section>

                {/* 🔴 FAQ */}
                <Section className="bg-white pb-32">
                    <div className="max-w-3xl mx-auto space-y-16">
                        <div className="text-center">
                             <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A]">Common Questions</h2>
                        </div>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Can my team break the system?</AccordionTrigger>
                                <AccordionContent className="text-[#4B5563] text-lg leading-relaxed pb-8 font-medium">
                                    No. You can lock formulas and key sections so only tasks can be updated. This ensures the engine remains bulletproof while allowing daily entry.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Is this difficult to use?</AccordionTrigger>
                                <AccordionContent className="text-[#4B5563] text-lg leading-relaxed pb-8 font-medium">
                                    No. Your team already knows Excel / Sheets. There is no new software to learn, no passwords to manage, and no complex training required.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">Can I edit the system?</AccordionTrigger>
                                <AccordionContent className="text-[#4B5563] text-lg leading-relaxed pb-8 font-medium">
                                    Yes. It is fully customizable to your unique operations. You can add, delete, or modify any task to fit your specific brand standards.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-zinc-200">
                                <AccordionTrigger className="text-xl font-bold text-[#0F172A] hover:no-underline py-8">What if I need help?</AccordionTrigger>
                                <AccordionContent className="text-[#4B5563] text-lg leading-relaxed pb-8 font-medium">
                                    Support and customization available. We provide 1-on-1 discovery calls if you need a bespoke engine built for a specialized sector.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
