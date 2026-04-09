
'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, 
    Utensils,
    SearchCheck,
    GraduationCap,
    ShieldAlert,
    Zap,
    ShieldCheck,
    Maximize2,
    LayoutGrid,
    Cpu,
    Target,
    Compass,
    Sparkles,
    Building2,
    Shield,
    HeartPulse,
    School
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ConceptSection = ({ title, description, bgClass, textClass, children, id }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode, id?: string }) => (
    <section id={id} className={cn("w-full py-16 border-b", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
                <Badge variant="outline" className={cn("uppercase tracking-[0.3em] font-black text-[10px] border-black/10")}>Technical Palette</Badge>
                <h2 className={cn("text-3xl md:text-5xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className={cn("text-sm opacity-70 italic font-medium", textClass)}>{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, colorClass, bgCard = "bg-white", borderClass = "border-black/5", labelClass = "text-black/40", textMain = "text-zinc-900" }: any) => (
    <div className={cn("p-6 md:p-10 rounded-3xl border shadow-sm space-y-6", bgCard, borderClass)}>
        <div className="flex items-center gap-4">
            <div className={cn("p-2 rounded-xl bg-white shadow-sm border border-black/5", colorClass)}>
                <Zap className="w-6 h-6" />
            </div>
            <h4 className={cn("text-xl md:text-3xl font-black uppercase italic tracking-tighter font-headline leading-none", textMain)}>{title}</h4>
        </div>
        <div className="space-y-5">
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><SearchCheck className="w-3 h-3"/> AUDIT (TECHNICAL)</span>
                <p className={cn("text-sm md:text-base font-bold italic leading-tight", textMain)}>{audit}</p>
            </div>
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><GraduationCap className="w-3 h-3"/> ACTION (TRAINER)</span>
                <p className={cn("text-sm md:text-base font-medium italic opacity-80", textMain)}>{action}</p>
            </div>
            <div className="pt-4 border-t border-black/5">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3 h-3"/> RISK (CONSEQUENCE)</span>
                <p className="text-xs md:text-sm text-red-600 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-zinc-900">
            <SiteHeader />

            <main className="flex-1">
                
                {/* --- PROTOTYPE C: THE FLOATING GOLD CARD (localized light) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-zinc-100 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto">
                        <div className="max-w-2xl bg-white/95 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/20 space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-amber-600 border-amber-600/30 uppercase tracking-[0.4em] font-black text-[10px]">Prototype C: Floating Command</Badge>
                                <h1 className="text-5xl md:text-7xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                    CAPTURE <br/><span className="text-amber-600">MEMORY.</span>
                                </h1>
                                <p className="text-lg text-zinc-600 italic font-medium leading-relaxed border-l-4 border-amber-600/20 pl-6">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <Button className="h-16 px-10 bg-amber-600 text-white font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-105 transition-all">
                                Deploy System Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </section>

                {/* --- PROTOTYPE D: THE TECHNICAL BLUEPRINT (Framed Video) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-[#f8fafc] border-y border-zinc-200">
                    <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center py-20">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <Badge variant="outline" className="text-zinc-500 border-zinc-300 uppercase tracking-[0.4em] font-black text-[10px]">Prototype D: Blueprint Framed</Badge>
                                <h1 className="text-6xl md:text-8xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                    SYSTEMS <br/><span className="text-emerald-600">ONLY.</span>
                                </h1>
                                <p className="text-xl text-zinc-500 italic font-medium max-w-sm">
                                    Stop managing manually. Deploy forensically engineered infrastructure.
                                </p>
                            </div>
                            <Button className="h-16 px-12 bg-emerald-600 text-white font-black uppercase italic rounded-full shadow-2xl hover:brightness-110 transition-all">
                                View Technical Packs <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-emerald-600/5 rounded-[3rem] blur-2xl group-hover:bg-emerald-600/10 transition-all" />
                            <div className="relative bg-zinc-900 rounded-[2.5rem] p-3 border-8 border-white shadow-2xl overflow-hidden aspect-video">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[1.5rem]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PROTOTYPE G: THE SOOTHING INSURANCE STANDARD (Azure/Navy) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-[#f0f7ff] overflow-hidden border-b border-blue-100">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="container px-6 relative z-10 mx-auto text-center space-y-12">
                        <div className="space-y-6 max-w-4xl mx-auto">
                            <Badge className="bg-blue-600 text-white uppercase tracking-[0.4em] font-black text-[10px] px-6 py-1.5 rounded-full">Prototype G: Institutional Sky</Badge>
                            <h1 className="text-6xl md:text-[7rem] font-black font-headline text-[#0f172a] uppercase italic tracking-tighter leading-[0.82]">
                                TRUST IS <br/><span className="text-blue-600">ENGINEERED.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 italic font-medium max-w-2xl mx-auto">
                                The professional standard for global compliance and operational continuity.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Button className="h-20 px-12 bg-[#0f172a] text-white font-black uppercase italic rounded-2xl text-lg shadow-2xl">
                                Explore The Library <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button variant="outline" className="h-20 px-12 border-blue-200 text-blue-600 bg-white font-black uppercase italic rounded-2xl text-lg hover:bg-blue-50">
                                Talk To An Engineer
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 10 SOOTHING COLOR COMBOS */}
                <ConceptSection 
                    title="1. Golden Ivory" 
                    description="Prestigious cream with rich gold accents. Optimized for high-end hospitality and resorts."
                    bgClass="bg-[#fffdf5]"
                    textClass="text-[#43302b]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Guest Arrival Protocol"
                            audit="VIP Tier-1 Reception Readiness (SOP-01)"
                            action="Verify celebration amenities and personalized greetings."
                            risk="Loss of high-LTV loyalty and negative luxury ranking."
                            colorClass="text-amber-600"
                            bgCard="bg-white"
                            textMain="text-[#43302b]"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="2. sage botanical" 
                    description="Soothing mint green. Reduces eye fatigue for long-form kitchen and safety audits."
                    bgClass="bg-[#f0f9f4]"
                    textClass="text-[#1a3a2a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Thermal Integrity"
                            audit="Cold-Chain Validation (HACCP CCP-1)"
                            action="Log fridge temps: Target 1°C to 4°C."
                            risk="Pathogen growth and total inventory loss."
                            colorClass="text-emerald-600"
                            bgCard="bg-white"
                            textMain="text-emerald-950"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="3. Shell Peach" 
                    description="Gentle, catchy peach tones. Inviting for wellness, beauty, and retail sectors."
                    bgClass="bg-[#fff5f0]"
                    textClass="text-[#5a3a2a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Hygiene Parity"
                            audit="Treatment Room Sanitization Protocol"
                            action="Disinfect all surfaces between guest appointments."
                            risk="Cross-infection and health department closure."
                            colorClass="text-orange-500"
                            bgCard="bg-white"
                            textMain="text-orange-950"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="4. Executive Pearl" 
                    description="Classic high-trust corporate palette. Off-white with deep emerald."
                    bgClass="bg-[#fcfcfc]"
                    textClass="text-[#0a2a1a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Statutory Filing"
                            audit="ROC Annual Compliance Audit"
                            action="Confirm all mandatory filings for the current quarter."
                            risk="Government penalties and company strike-off."
                            colorClass="text-emerald-700"
                            bgCard="bg-white"
                            textMain="text-zinc-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="5. Copper Sand" 
                    description="Industrial sand with burnt copper accents. Earthy and authoritative."
                    bgClass="bg-[#faf7f2]"
                    textClass="text-[#3a2a1a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Machine Uptime"
                            audit="LOTO Safety Verification"
                            action="Verify lock-out tag-out on all active MEP repairs."
                            risk="Fatal industrial accidents and legal disaster."
                            colorClass="text-orange-700"
                            bgCard="bg-white"
                            textMain="text-stone-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="6. Sky Corporate" 
                    description="Clean Azure blue with navy. The standard for institutional trust."
                    bgClass="bg-[#f0f8ff]"
                    textClass="text-[#002244]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Data Integrity"
                            audit="Cloud Backup Sync Validation"
                            action="Confirm 100% daily backup of operational logs."
                            risk="Total loss of institutional memory during server crash."
                            colorClass="text-blue-600"
                            bgCard="bg-white"
                            textMain="text-blue-950"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="7. Rose Technical" 
                    description="Soft rose-tinted white. Modern, inviting, and highly readable."
                    bgClass="bg-[#fdf8f8]"
                    textClass="text-[#4a2a2a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Staff Safety"
                            audit="POSH Policy Implementation"
                            action="Confirm display of safety charts in all staff breakrooms."
                            risk="Severe legal liability and toxic culture development."
                            colorClass="text-pink-600"
                            bgCard="bg-white"
                            textMain="text-zinc-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="8. Minimalist Mint" 
                    description="Stark white with vibrant neon-mint highlights. Catchy and high-energy."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Retail Readiness"
                            audit="Visual Merchandising Parity Check"
                            action="Audit store displays against the master planogram."
                            risk="Brand dilution and missed promotional conversion."
                            colorClass="text-green-500"
                            borderClass="border-green-100"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="9. Parchment Slate" 
                    description="Academic warm-grey with deep charcoal. Prestigious and focused."
                    bgClass="bg-[#f4f4f4]"
                    textClass="text-[#1a1a1a]"
                >
                    <div className="max-w-2xl mx-auto">
                        <TaskSnippet 
                            title="Clinical Safety"
                            audit="WHO Surgical Time-Out Execution"
                            action="Verify Patient, Site, and Procedure before incision."
                            risk="Fatal never-events and loss of hospital license."
                            colorClass="text-zinc-800"
                            bgCard="bg-white"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="10. Azure Blueprint" 
                    description="Light blue with technical grid. Engineering-first aesthetic."
                    bgClass="bg-[#f0f4f8]"
                    textClass="text-[#102a43]"
                >
                    <div className="max-w-2xl mx-auto p-10 border-4 border-[#102a43] bg-white shadow-[12px_12px_0px_0px_rgba(16,42,67,1)]">
                        <div className="flex items-center gap-4">
                            <Cpu className="w-10 h-10 text-blue-600" />
                            <h3 className="text-3xl font-black uppercase italic font-headline text-[#102a43]">Sovereign Engine</h3>
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mt-4">V11.9 Technical Infrastructure</p>
                        <Button className="w-full h-14 bg-[#102a43] text-white font-black uppercase rounded-none mt-8">Initiate System</Button>
                    </div>
                </ConceptSection>

                {/* FINAL CTA PROTOTYPE */}
                <section className="py-24 text-center bg-zinc-50 border-t border-zinc-200">
                    <div className="max-w-3xl mx-auto space-y-10 px-4">
                        <h2 className="text-3xl md:text-5xl font-black font-headline italic text-zinc-400 uppercase tracking-tighter">Testing High-Readability CTA</h2>
                        <div className="flex flex-col gap-4">
                            <Button className="h-20 bg-zinc-900 text-white font-black uppercase text-xl rounded-2xl shadow-2xl hover:bg-black transition-all">
                                Deploy System (Deep Contrast) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button className="h-20 bg-amber-600 text-white font-black uppercase text-xl rounded-2xl shadow-2xl hover:brightness-110 border-none transition-all">
                                Deploy System (Golden Authority) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
    
    
    