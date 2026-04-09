
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
    Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ConceptSection = ({ title, description, bgClass, textClass, children, id }: { title: string, description: string, bgClass: string, textClass: string, children: React.ReactNode, id?: string }) => (
    <section id={id} className={cn("w-full py-16 border-b border-zinc-200", bgClass)}>
        <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-12 text-center space-y-2">
                <Badge variant="outline" className={cn("uppercase tracking-[0.3em] font-black text-[10px] border-zinc-300")}>Color Archetype</Badge>
                <h2 className={cn("text-3xl font-black font-headline uppercase italic tracking-tighter", textClass)}>{title}</h2>
                <p className={cn("text-sm opacity-60 italic font-medium", textClass)}>{description}</p>
            </div>
            {children}
        </div>
    </section>
);

const TaskSnippet = ({ title, audit, action, risk, colorClass, bgCard = "bg-white", borderClass = "border-zinc-200", labelClass = "text-zinc-400", textMain = "text-zinc-900" }: any) => (
    <div className={cn("p-6 rounded-2xl border shadow-sm space-y-5", bgCard, borderClass)}>
        <div className="flex items-center gap-3">
            <div className={cn("p-2 rounded-lg bg-zinc-100", colorClass)}>
                <Utensils className="w-5 h-5" />
            </div>
            <h4 className={cn("text-xl font-black uppercase italic tracking-tighter font-headline leading-none", textMain)}>{title}</h4>
        </div>
        <div className="space-y-4">
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><SearchCheck className="w-3 h-3"/> AUDIT (TECHNICAL)</span>
                <p className={cn("text-sm font-bold italic leading-tight", textMain)}>{audit}</p>
            </div>
            <div className="space-y-1">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2", labelClass)}><GraduationCap className="w-3 h-3"/> ACTION (TRAINER)</span>
                <p className={cn("text-sm font-medium italic opacity-80", textMain)}>{action}</p>
            </div>
            <div className="pt-3 border-t border-zinc-100">
                <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] flex items-center gap-2"><ShieldAlert className="w-3 h-3"/> RISK (CONSEQUENCE)</span>
                <p className="text-xs text-red-600 font-black uppercase italic pt-1">{risk}</p>
            </div>
        </div>
    </div>
);

export default function DesignLabPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-zinc-900">
            <SiteHeader />

            <main className="flex-1">
                
                {/* --- PROTOTYPE C: THE FLOATING GLASS CARD (Localized Light) --- */}
                <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-zinc-900 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-40" />
                    </div>
                    <div className="container px-6 relative z-10 mx-auto">
                        <div className="max-w-2xl bg-white/95 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/20 space-y-8">
                            <div className="space-y-4">
                                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[10px]">Prototype C: Floating Command</Badge>
                                <h1 className="text-5xl md:text-7xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                    CAPTURE <br/><span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-lg text-zinc-600 italic font-medium leading-relaxed border-l-4 border-primary/20 pl-6">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <Button className="h-16 px-10 bg-zinc-900 text-white font-black uppercase italic rounded-xl border-none shadow-xl hover:scale-105 transition-all">
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
                                    SYSTEMS <br/><span className="text-primary">ONLY.</span>
                                </h1>
                                <p className="text-xl text-zinc-500 italic font-medium max-w-sm">
                                    Stop managing manually. Deploy forensically engineered infrastructure.
                                </p>
                            </div>
                            <Button className="h-16 px-12 bg-primary text-white font-black uppercase italic rounded-full shadow-2xl hover:brightness-110 transition-all">
                                View Technical Packs <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-all" />
                            <div className="relative bg-zinc-900 rounded-[2.5rem] p-3 border-8 border-white shadow-2xl overflow-hidden aspect-video">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[1.5rem]" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PROTOTYPE E: THE MINIMALIST SPLIT (Pure Pro) --- */}
                <section className="relative w-full min-h-[90vh] flex overflow-hidden border-b border-zinc-200">
                    <div className="w-1/2 bg-white flex flex-col justify-center px-20 space-y-12 border-r border-zinc-100">
                        <div className="space-y-6">
                            <h1 className="text-7xl font-black font-headline text-zinc-900 uppercase italic tracking-tighter leading-[0.85]">
                                DEPLOY <br/><span className="text-primary">GRAVITY.</span>
                            </h1>
                            <p className="text-xl text-zinc-400 italic font-medium max-w-sm leading-relaxed">
                                Zero-fail operational protocols built for high-stakes environments.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <Button className="h-16 px-10 bg-zinc-900 text-white font-black uppercase italic rounded-xl">
                                Standardize Your Brand <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <p className="text-[10px] text-zinc-300 font-black uppercase tracking-[0.5em] pl-2">NO SAAS • NO SUBSCRIPTIONS</p>
                        </div>
                    </div>
                    <div className="w-1/2 relative bg-zinc-100">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
                    </div>
                </section>

                {/* --- PROTOTYPE G: THE SOOTHING INSURANCE STANDARD (Sky/Navy) --- */}
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
                    title="1. Paper Technical" 
                    description="Clean white with zinc text. The highest legibility standard."
                    bgClass="bg-white"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Thermal Integrity"
                            audit="Cold-Chain Validation (CCP-1)"
                            action="Log fridge temps: Target 1°C to 4°C."
                            risk="Pathogen growth and stock loss."
                            colorClass="text-primary"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="2. Corporate Sky" 
                    description="Soothing blue-tinted background with navy text. High-trust."
                    bgClass="bg-[#f8faff]"
                    textClass="text-[#1e293b]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Legal Compliance"
                            audit="Statutory License Validity Audit"
                            action="Verify validity of FSSAI and Trade licenses."
                            risk="Government sealing of premises."
                            colorClass="text-blue-600"
                            bgCard="bg-white"
                            textMain="text-slate-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="3. Organic Mint" 
                    description="Extremely soothing pale green. Low ocular fatigue."
                    bgClass="bg-[#f0f9f4]"
                    textClass="text-[#064e3b]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Kitchen Hygiene"
                            audit="Sanitization Validation Protocol"
                            action="Sanitize all counters and verify with strips."
                            risk="Mass food poisoning and brand damage."
                            colorClass="text-primary"
                            bgCard="bg-white"
                            textMain="text-emerald-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="4. Modern Sand" 
                    description="Warm, catchy and inviting boardroom aesthetic."
                    bgClass="bg-[#fafaf9]"
                    textClass="text-[#44403c]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Asset Protection"
                            audit="Serialized Inventory Reconciliation"
                            action="Count high-value units against daily sales."
                            risk="Internal theft and margin erosion."
                            colorClass="text-orange-600"
                            bgCard="bg-white"
                            textMain="text-stone-900"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="5. Steel Minimal" 
                    description="Industrial grey with stark black typography. Catchy and bold."
                    bgClass="bg-[#f1f5f9]"
                    textClass="text-black"
                >
                    <div className="max-w-xl mx-auto border-2 border-black p-10 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4">
                            <Zap className="w-8 h-8 text-primary" />
                            <h3 className="text-3xl font-black uppercase italic font-headline">SOVEREIGN V11.9</h3>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-4">High-Readability Deployment Mode</p>
                        <Button className="w-full h-14 bg-black text-white font-black uppercase rounded-none mt-8">Secure System</Button>
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="6. Clinical Minimal" 
                    description="Sterile, high-trust healthcare palette."
                    bgClass="bg-white"
                    textClass="text-[#0d4d4d]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Surgical Safety"
                            audit="WHO 'Time Out' Execution"
                            action="Verify Patient, Site, and Procedure before incision."
                            risk="Wrong-site surgery (Fatal never-event)."
                            colorClass="text-teal-600"
                            borderClass="border-teal-100"
                            textMain="text-teal-950"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="7. Executive Parchment" 
                    description="Light cream with deep espresso accents. Prestigious."
                    bgClass="bg-[#fffcf5]"
                    textClass="text-[#2d1b10]"
                >
                    <div className="max-w-xl mx-auto p-10 rounded-[2rem] border border-[#2d1b10]/10 bg-white shadow-xl space-y-6">
                        <h4 className="text-2xl font-black italic uppercase tracking-tighter font-headline text-[#2d1b10]">Strategic Governance</h4>
                        <div className="h-px bg-[#2d1b10]/10" />
                        <p className="text-sm italic font-medium text-[#2d1b10]/70">Consistency is the luxury of the well-engineered.</p>
                        <Button className="bg-[#2d1b10] text-[#fffcf5] font-black uppercase rounded-xl h-14 w-full">Review Vitals</Button>
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="8. High-Contrast Slate" 
                    description="Sharp slate-blue with white cards. Very modern."
                    bgClass="bg-[#eff6ff]"
                    textClass="text-[#1e3a8a]"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Data Integrity"
                            audit="Cloud Backup Verification"
                            action="Confirm 100% daily sync of operational logs."
                            risk="Total loss of institutional memory."
                            colorClass="text-blue-700"
                            bgCard="bg-white"
                            textMain="text-blue-950"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="9. Soft Graphite" 
                    description="Matte grey with vibrant green accents. Catchy."
                    bgClass="bg-[#f4f4f5]"
                    textClass="text-zinc-800"
                >
                    <div className="max-w-xl mx-auto">
                        <TaskSnippet 
                            title="Machine Uptime"
                            audit="OEE Performance Sweep"
                            action="Track machine downtime and quality defects."
                            risk="Loss of manufacturing throughput."
                            colorClass="text-primary"
                            bgCard="bg-white"
                        />
                    </div>
                </ConceptSection>

                <ConceptSection 
                    title="10. Neutral Blueprint" 
                    description="Off-white with technical grid and deep borders."
                    bgClass="bg-[#fafafa]"
                    textClass="text-zinc-900"
                >
                    <div className="max-w-xl mx-auto p-8 border-4 border-zinc-900 bg-white flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-zinc-900 text-white flex items-center justify-center font-black">V11</div>
                            <h3 className="text-2xl font-black uppercase font-headline">MASTER ENGINE</h3>
                        </div>
                        <p className="text-xs font-bold leading-relaxed text-zinc-500 italic">SYSTEM_STATUS: ACTIVE // READABILITY: OPTIMIZED</p>
                        <Button className="bg-zinc-900 text-white rounded-none font-black uppercase h-14">Initiate Audit</Button>
                    </div>
                </ConceptSection>

                {/* FINAL CTA PROTOTYPE */}
                <section className="py-24 text-center bg-zinc-50 border-t border-zinc-200">
                    <div className="max-w-2xl mx-auto space-y-10 px-4">
                        <h2 className="text-3xl font-black font-headline italic text-zinc-400 uppercase tracking-tighter">Testing High-Readability CTA</h2>
                        <div className="flex flex-col gap-4">
                            <Button className="h-20 bg-zinc-900 text-white font-black uppercase text-lg rounded-xl shadow-2xl hover:bg-black transition-all">
                                Deploy (White Text on Black) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                            <Button className="h-20 bg-primary text-white font-black uppercase text-lg rounded-xl shadow-2xl hover:brightness-110 border-none transition-all">
                                Deploy (White Text on Green) <ArrowRight className="ml-2 h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
