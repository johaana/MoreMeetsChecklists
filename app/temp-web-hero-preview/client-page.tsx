'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Lock,
    ChevronRight,
    Activity,
    ClipboardCheck,
    Smartphone,
    ShieldCheck,
    Target,
    Zap,
    Scale,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_7 = [
    { name: "Restaurants", id: "restaurants", icon: Utensils },
    { name: "Hotels & Resorts", id: "hotels_and_resorts", icon: Building },
    { name: "Healthcare", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "Schools", id: "school_operations_pack", icon: School },
    { name: "Franchise Networks", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities", id: "facility_management_blueprint", icon: Building2 },
    { name: "Cinemas", id: "cinema_operations_pack", icon: Popcorn }
];

const TECHNICAL_PAYLOAD = [
    { t: "120+ Pre-built SOPs", i: ClipboardCheck },
    { t: "Live Dashboard", i: Activity },
    { t: "No SaaS. Own your data.", i: Lock },
    { t: "Trainer Notes for staff", i: Smartphone }
];

const PreviewFrame = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => (
    <div className="flex flex-col space-y-6 w-full max-w-7xl mx-auto">
        <div className="space-y-1 pl-4 border-l-4 border-primary">
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary-text">{title}</h3>
            {description && <p className="text-sm text-secondary-text italic font-medium">{description}</p>}
        </div>
        <div className="w-full aspect-[16/8] min-h-[800px] border border-white/10 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative">
            {children}
        </div>
    </div>
);

const DesktopCTA = ({ price = "₹999", className }: { price?: string, className?: string }) => (
    <button className={cn("h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none flex items-center justify-center", className)}>
        GO LIVE IN 10 MINUTES: {price} <ArrowRight className="ml-2 h-5 w-5" />
    </button>
);

const IndustrySelector = ({ className }: { className?: string }) => (
    <div className={cn("bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6 shadow-2xl", className)}>
        <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
        <div className="grid grid-cols-1 gap-2">
            {ELITE_7.map((ind) => (
                <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-primary/5 transition-all group">
                    <div className="flex items-center gap-4">
                        <ind.icon className="w-5 h-5 text-primary/60 group-hover:text-primary" />
                        <span className="text-sm font-bold uppercase italic text-white/70">{ind.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/10 group-hover:text-primary" />
                </Link>
            ))}
        </div>
    </div>
);

export default function WebHeroPreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-6 space-y-40 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Sovereign Minimalist Lab v5.1</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-white">Refining the "Elite" Aesthetic</h1>
                    <p className="text-secondary-text italic font-medium">Testing mirrored orientations and typographic gravity.</p>
                </div>

                {/* VARIANT 1: THE BASELINE COMMAND */}
                <PreviewFrame title="1. The Baseline Command" description="The proven formula: Side-by-side, glass card, and integrated technical payload.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-10">
                            <div className="space-y-5">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6 max-w-lg leading-relaxed">
                                    Know what's done. What's missed. What's delayed. <br />
                                    Across your entire operation.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-4 h-4 text-primary" />
                                        <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA />
                        </div>
                        <IndustrySelector />
                    </div>
                </PreviewFrame>

                {/* VARIANT 2: THE MINIMALIST MIRROR (A) */}
                <PreviewFrame title="2. The Minimalist Mirror (A)" description="Reversed orientation with left-aligned sector selection and right-aligned narrative.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center px-32 gap-32">
                        <IndustrySelector />
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-r border-white/20 pr-10 leading-relaxed text-right ml-auto">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <div className="flex flex-col items-end gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-end">
                                <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 3: THE MINIMALIST MIRROR (B - REVERSED 5) */}
                <PreviewFrame title="3. The Minimalist Mirror (B)" description="Variation of 5: Reversed orientation with left-aligned sector selection and right-aligned narrative.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,1.2fr] items-center px-32 gap-32">
                        <div className="p-1 border-r border-white/10 space-y-12 pr-20 text-right">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-6">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:-translate-x-3">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span className="text-primary">SYSTEMS.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                                    Memory is not a system. Serious operations deserve more than improvisation.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 4: THE MINIMALIST ELITE MIRROR (Content of 2 in Format 5) */}
                <PreviewFrame title="4. The Elite Mirror (Content 2 / Format 5)" description="The narrative of 'Memory Capture' in the ultra-refined vertical stack format.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1fr,1.2fr] items-center px-32 gap-32">
                        {/* Selector on Left (Format 5 style reversed) */}
                        <div className="p-1 border-r border-white/10 space-y-12 pr-20 text-right">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">TARGET SECTOR</span>
                            <div className="space-y-6">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:-translate-x-3">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        {/* Narrative on Right (Format 5 style reversed + Content of 2) */}
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    CAPTURE<br />
                                    <span className="text-primary">MEMORY.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                                    Institutional memory is an asset. <br /> Anything else is just luck.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                        </div>
                    </div>
                </PreviewFrame>

                {/* VARIANT 5: THE MINIMALIST ELITE */}
                <PreviewFrame title="5. The Minimalist Elite" description="The selected high-end variant: Focus on line-art, whitespace, and prestigious spacing.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20" />
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center px-32 gap-32">
                        <div className="space-y-16">
                            <div className="space-y-8">
                                <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                                    DEPLOY<br />
                                    <span className="text-primary">SYSTEMS.</span>
                                </h1>
                                <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">
                                    Memory is not a system. Serious operations deserve more than improvisation.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                {TECHNICAL_PAYLOAD.slice(0, 3).map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span className="text-[11px] font-black text-white/30 uppercase tracking-[0.3em] italic">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                            <DesktopCTA className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12" />
                        </div>
                        <div className="p-1 border-l border-white/10 space-y-12 pl-20">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.6em]">SELECT VERTICAL</span>
                            <div className="space-y-6">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="block text-2xl font-bold uppercase italic text-white/20 hover:text-primary transition-all hover:translate-x-3">
                                        {ind.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}