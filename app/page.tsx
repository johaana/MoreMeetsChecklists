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
    Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';
import { TestimonialsSection } from '@/components/layout/testimonials-section';
import { FaqSection } from '@/components/layout/faq-section';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const BRAND_GREEN = "#22C55E";

const TRUST_STRIP = "WORKS ON PHONES • NO INSTALLATION • DEPLOY IN 10 MINUTES • BUILT IN EXCEL • OPERATED THROUGH GOOGLE SHEETS";

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
        <section className="relative w-full min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black pt-16">
             <div className="absolute inset-0 z-0">
                <img
                    src="https://i.postimg.cc/kXX5G5yS/top-view-businessman-using-tablet-pc-analyzing-financial-charts-documents-sitting-desk-corporate-off.jpg"
                    alt="Institutional Oversight"
                    className="h-full w-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent" />
            </div>
            
            <div className="relative z-20 container mx-auto max-w-[1200px] px-6 py-12 md:py-24">
                <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 md:gap-20 items-center">
                    <div className="space-y-8 md:space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-[34px] md:text-[84px] lg:text-[90px] font-black font-headline leading-[0.9] uppercase italic tracking-tighter text-white">
                                YOUR OPERATIONS <br />
                                <span style={{ color: BRAND_GREEN }}>SHOULD NOT DEPEND</span> <br/>
                                <span style={{ color: BRAND_GREEN }}>ON MEMORY.</span>
                            </h1>
                            <p className="text-lg md:text-[22px] italic font-medium text-zinc-400 max-w-2xl leading-tight">
                                MoreMeets™ transforms SOPs into live daily execution. Track work, handovers, accountability, and compliance across your team using Excel + Google Sheets.
                            </p>
                        </div>

                        <div className="space-y-8">
                             <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-[#22C55E] text-black font-black uppercase italic text-base shadow-[0_20px_50px_-10px_rgba(34,197,94,0.4)] hover:bg-white transition-all border-none">
                                    <Link href="/library">Deploy Your System <ArrowRight className="ml-2 w-6 h-6" /></Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-xl border-white/20 text-white font-black uppercase italic hover:bg-white/5">
                                    <Link href="/library">View Operational Packs</Link>
                                </Button>
                             </div>
                             
                             <div className="bg-white/5 border border-white/10 backdrop-blur-md py-4 px-6 rounded-xl inline-block">
                                 <p className="text-[8px] md:text-[11px] text-zinc-300 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] italic leading-none">
                                    {TRUST_STRIP}
                                </p>
                             </div>
                        </div>
                    </div>

                    <div className="relative group hidden lg:block">
                        <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-2xl opacity-20"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 aspect-[4/5]">
                             <img 
                                src={PlaceHolderImages.find(i => i.id === 'sovereign-ledger')?.imageUrl} 
                                alt="Live Execution Ledger" 
                                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                             />
                             <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                                 <Badge className="bg-primary/20 text-primary border-primary/30 uppercase font-black tracking-widest text-[9px] mb-2">LIVE RUNTIME</Badge>
                                 <p className="text-white font-headline font-black italic uppercase text-xl">Sovereign Mission Ledger</p>
                             </div>
                        </div>
                    </div>
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

                {/* --- SECTION 2: RELATABLE PAIN --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="pain">
                    <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
                        <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-red-500 border-red-200 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-red-50/50">OPERATIONAL REALITY</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">
                                WHAT BREAKS DAILY OPERATIONS
                            </h2>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { t: "Managers chasing confirmations", d: "“Done?” messages across WhatsApp all day because work isn't visible.", i: Smartphone },
                                { t: "Shift handovers getting lost", d: "Critical instructions disappearing between teams during rotations.", i: History },
                                { t: "SOPs existing only in folders", d: "Documentation exists in a PDF somewhere. Daily execution does not.", i: ClipboardCheck },
                                { t: "Operations depend on specific people", d: "When key staff resign, the standard leaves with them. Systems collapse.", i: Users }
                            ].map((item, i) => (
                                <div key={i} className="space-y-6 p-10 bg-white border border-zinc-200 rounded-[2rem] hover:shadow-xl transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-300 group-hover:text-red-500 transition-colors">
                                        <item.i className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black uppercase italic tracking-tight text-zinc-950 leading-tight">{item.t}</h4>
                                        <p className="text-sm font-bold text-zinc-400 italic leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center pt-8 border-t border-zinc-200/50">
                             <p className="text-xl md:text-3xl font-black font-headline text-zinc-950 uppercase italic tracking-tighter">
                                Most businesses do not have an SOP problem. <br/>
                                <span className="text-red-500">They have an execution problem.</span>
                             </p>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 3: THE BRIDGE --- */}
                <Section className="bg-white" id="what-it-is">
                    <div className="max-w-6xl mx-auto space-y-20">
                         <div className="text-center space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.5em] font-black text-[10px] px-8 py-2 rounded-none italic bg-primary/5">THE RESOLUTION</Badge>
                            <h2 className="text-[32px] md:text-[54px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">NOT SOFTWARE. <br/> OPERATIONAL INFRASTRUCTURE.</h2>
                            <p className="text-zinc-500 text-lg md:text-xl font-bold italic leading-tight uppercase max-w-2xl mx-auto text-center pt-4">
                                MoreMeets™ gives teams a live operational system using tools they already know: Excel and Google Sheets.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 border border-zinc-200 rounded-[3rem] overflow-hidden shadow-2xl">
                            <div className="p-10 md:p-20 bg-zinc-50 border-r border-zinc-200 relative text-left">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl md:text-4xl font-black font-headline text-red-600 uppercase italic tracking-tighter">Without MoreMeets</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "SOP PDFs nobody opens",
                                            "WhatsApp follow-ups",
                                            "Manual checking",
                                            "Verbal handovers",
                                            "No accountability trail",
                                            "Training resets when staff leave"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-zinc-400 text-lg md:text-xl font-bold italic leading-snug">
                                                <X className="w-6 h-6 text-red-300 shrink-0 mt-0.5" />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="p-10 md:p-20 bg-emerald-50/30 relative text-left">
                                <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary" />
                                <div className="space-y-8">
                                    <h3 className="text-2xl md:text-4xl font-black font-headline text-primary uppercase italic tracking-tighter">With MoreMeets</h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Daily execution tracking",
                                            "Live accountability visibility",
                                            "Structured handovers",
                                            "Built-in trainer notes",
                                            "Audit-ready records",
                                            "Institutional continuity"
                                        ].map((text, i) => (
                                            <li key={i} className="flex items-start gap-5 text-zinc-950 text-lg md:text-xl font-black italic leading-snug uppercase">
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

                {/* --- SECTION 4: HOW IT WORKS --- */}
                <Section className="bg-zinc-50 border-y border-zinc-100" id="how-it-works">
                    <div className="max-w-[1200px] mx-auto space-y-24">
                        <div className="text-center space-y-4">
                             <h2 className="text-[36px] md:text-[64px] font-black font-headline text-zinc-950 leading-[0.95] tracking-tight uppercase italic text-center">DEPLOY IN 10 MINUTES</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                            {[
                                { t: "Download", d: "Get your pre-built, industry-specific operational pack instantly." },
                                { t: "Upload", d: "Upload your Excel Master to Google Drive for live team access." },
                                { t: "Assign", d: "Map your branches and assign personnel roles once." },
                                { t: "Run", d: "Daily operations begin live. No app rollout required." }
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
                        <div className="text-center">
                             <p className="text-lg md:text-2xl font-black text-zinc-400 uppercase italic tracking-tight">
                                No app rollout. No IT setup. No retraining.
                             </p>
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 5: INCLUSIONS --- */}
                <Section className="bg-white" id="inclusions">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                             <h2 className="text-[32px] md:text-[44px] font-black font-headline text-zinc-950 leading-tight tracking-tight uppercase italic text-center">EVERY PACK INCLUDES</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[
                                { t: "Daily Task Register", i: Activity },
                                { t: "Shift Handover System", i: History },
                                { t: "Incident Log", i: ShieldAlert },
                                { t: "SOP Library", i: LayoutGrid },
                                { t: "Trainer Notes", i: GraduationCap },
                                { t: "Consequences Of Failure", i: AlertTriangle },
                                { t: "Audit Language Tasks", i: ShieldCheck },
                                { t: "Mobile Execution", i: Smartphone },
                                { t: "Role-Based Control", i: FileSignature },
                                { t: "Deployment Guide", i: Target }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-4 hover:border-primary transition-colors group">
                                    <item.i className="w-8 h-8 text-zinc-300 group-hover:text-primary transition-colors" />
                                    <span className="text-[10px] font-black uppercase italic tracking-widest text-zinc-600 leading-tight">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- SECTION 6: SINGLE VS MULTI --- */}
                <Section className="bg-zinc-950 text-white" id="who-it-is-for" noSpine>
                    <div className="max-w-6xl mx-auto space-y-20">
                         <div className="text-center space-y-4">
                            <h2 className="text-[34px] md:text-[54px] font-black font-headline uppercase italic tracking-tighter leading-[0.95]">
                                BUILT FOR SINGLE LOCATIONS <br/> AND MULTI-UNIT GROUPS
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="p-12 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Target className="w-48 h-48" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <Badge className="bg-emerald-500/20 text-emerald-500 border-emerald-500/30 uppercase font-black tracking-widest text-[9px]">SME OPERATORS</Badge>
                                    <h3 className="text-3xl font-black font-headline italic uppercase tracking-tighter">Single-unit operators</h3>
                                    <p className="text-zinc-400 text-lg font-bold italic leading-relaxed">
                                        "Run tighter daily operations without constantly following up. Capture your expert knowledge so the business runs even when you aren't on the floor."
                                    </p>
                                </div>
                            </div>
                            <div className="p-12 md:p-16 rounded-[3rem] bg-emerald-500 text-black space-y-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <LayoutGrid className="w-48 h-48" />
                                </div>
                                <div className="space-y-6 relative z-10">
                                    <Badge className="bg-black/10 text-black border-black/20 uppercase font-black tracking-widest text-[9px]">ENTERPRISE GROUPS</Badge>
                                    <h3 className="text-3xl font-black font-headline italic uppercase tracking-tighter">Multi-unit groups</h3>
                                    <p className="text-black/70 text-lg font-bold italic leading-relaxed">
                                        "Standardize execution across branches without losing visibility. One master engine to protect brand parity and royalty integrity across your entire network."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <TestimonialsSection />
                <FaqSection />

                {/* --- FINAL CTA --- */}
                <Section className="bg-primary text-white text-center py-32 md:py-48 relative overflow-hidden" noSpine id="pricing">
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]" />
                    <div className="max-w-5xl mx-auto space-y-16 relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-[48px] md:text-[90px] font-black leading-[0.9] tracking-tighter uppercase italic font-headline text-black text-center">STOP RUNNING OPERATIONS <br/> FROM MEMORY.</h2>
                            <p className="text-xl md:text-[32px] text-black/60 font-bold italic text-center leading-tight">Deploy a live operational system your team can actually follow.</p>
                        </div>
                        <div className="flex flex-col items-center gap-10 md:gap-14">
                            <button className="h-16 md:h-24 px-12 md:px-20 rounded-[20px] md:rounded-[30px] bg-black text-white font-black uppercase italic text-lg md:text-3xl shadow-2xl hover:scale-[1.05] active:scale-95 transition-all border-none group flex items-center justify-center gap-6">
                                <Link href="/library" className="flex items-center gap-6">Get Your Operational Pack <ArrowRight className="w-8 h-8 md:w-12 md:h-12" /></Link>
                            </button>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex items-baseline gap-5">
                                    <p className="text-[56px] md:text-[84px] font-black italic text-black">₹3,499</p>
                                    <span className="text-2xl md:text-4xl font-bold text-black/40 italic">/ $49</span>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-sm font-black uppercase tracking-[0.5em] text-black/60">One-time purchase • Own forever</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Built for single-unit operators and multi-unit groups.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
