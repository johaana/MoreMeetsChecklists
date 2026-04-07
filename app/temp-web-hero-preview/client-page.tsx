
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    ArrowRight, 
    ShieldCheck, 
    Utensils,
    Building,
    Hospital,
    School,
    Store,
    Building2,
    Popcorn,
    Zap,
    Lock,
    ChevronRight,
    CheckCircle2,
    Activity,
    ClipboardCheck,
    Smartphone,
    LayoutGrid,
    Target,
    Settings2,
    Check
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

const PROOFS = [
    { t: "EXCEL READY", i: ShieldCheck },
    { t: "OWN FOREVER", i: Zap },
    { t: "AUDIT READY", i: ShieldCheck }
];

const PreviewFrame = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => (
    <div className="flex flex-col space-y-6 w-full max-w-7xl mx-auto">
        <div className="space-y-1 pl-4 border-l-4 border-primary">
            <h3 className="text-xl font-black uppercase italic tracking-tighter text-primary-text">{title}</h3>
            {description && <p className="text-sm text-secondary-text italic font-medium">{description}</p>}
        </div>
        <div className="w-full aspect-[16/8] min-h-[600px] border border-white/10 rounded-[3rem] bg-black overflow-hidden shadow-2xl relative">
            {children}
        </div>
    </div>
);

const VideoBg = () => (
    <div className="absolute inset-0 z-0">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 grayscale-[0.5]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </div>
);

const DesktopCTA = () => (
    <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase italic text-base shadow-[0_0_40px_-10px_rgba(46,184,107,0.5)] hover:scale-[1.02] transition-all border-none">
        <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-5 w-5" /></Link>
    </Button>
);

const PayloadGrid = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-4", className)}>
        {TECHNICAL_PAYLOAD.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
                <item.i className="w-4 h-4 text-primary" />
                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">{item.t}</span>
            </div>
        ))}
    </div>
);

export default function WebHeroPreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-6 space-y-40 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.4em] font-black text-[11px]">Web Architecture Lab</Badge>
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">Desktop Hero Strategies</h1>
                    <p className="text-secondary-text italic font-medium">Testing "One-Glance" conversion with integrated Technical Payloads.</p>
                </div>

                {/* OPTION 1: THE INTEGRATED COMMAND */}
                <PreviewFrame title="1. The Integrated Command" description="Evolution of current Side-by-Side. Highly efficient.">
                    <VideoBg />
                    <div className="relative z-10 h-full grid grid-cols-2 items-center px-20 gap-20">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h1 className="text-7xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                                    STOP CHASING.<br />
                                    <span className="text-primary">START SEEING.</span>
                                </h1>
                                <p className="text-xl text-secondary-text italic font-medium border-l-2 border-primary/20 pl-6">
                                    Know what's done. What's missed. What's delayed. <br />
                                    Across your entire operation.
                                </p>
                            </div>
                            <PayloadGrid />
                            <DesktopCTA />
                        </div>
                        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] space-y-6">
                            <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em]">SELECT YOUR OPERATING SECTOR</span>
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
                    </div>
                </PreviewFrame>

                {/* OPTION 2: THE THREE-COLUMN TRIAGE */}
                <PreviewFrame title="2. The Three-Column Triage" description="Balanced cockpit layout. Narrative -> Spec -> Action.">
                    <div className="absolute inset-0 bg-zinc-950" />
                    <div className="relative z-10 h-full grid grid-cols-[1.2fr,1fr,1.2fr] items-center gap-px bg-white/5">
                        <div className="h-full bg-black flex flex-col justify-center px-12 space-y-8">
                            <h1 className="text-5xl font-black font-headline text-white leading-[0.9] uppercase italic tracking-tighter">
                                LESS MISSES.<br />
                                <span className="text-primary">MORE STANDARDS.</span>
                            </h1>
                            <p className="text-sm text-secondary-text italic font-medium leading-relaxed">
                                Deploy forensically engineered data engines to run your daily operations without chaos.
                            </p>
                            <DesktopCTA />
                        </div>
                        <div className="h-full bg-black/40 flex flex-col justify-center px-12 space-y-10">
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">SYSTEM SPECIFICATION</span>
                            <div className="space-y-8">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <div className="flex items-center gap-3 text-primary">
                                            <item.i className="w-5 h-5" />
                                            <span className="text-sm font-black uppercase italic tracking-tight">{item.t}</span>
                                        </div>
                                        <p className="text-[10px] text-zinc-500 italic pl-8 leading-tight">Industry-grade technical infrastructure.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="h-full bg-black flex flex-col justify-center px-12 space-y-6">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">DEPLOYMENT SECTOR</span>
                            <div className="grid grid-cols-1 gap-1">
                                {ELITE_7.map((ind) => (
                                    <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center gap-4 p-3 hover:bg-white/[0.03] rounded-lg transition-colors border-b border-white/5">
                                        <ind.icon className="w-4 h-4 text-white/20" />
                                        <span className="text-xs font-bold uppercase italic text-white/60">{ind.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 3: THE MINIMALIST SOVEREIGN */}
                <PreviewFrame title="3. The Minimalist Sovereign" description="Clean, high-authority typography. High whitespace.">
                    <div className="absolute inset-0 bg-white" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center p-20 space-y-16">
                        <div className="text-center space-y-6">
                            <Badge variant="outline" className="border-black/10 text-black/40 uppercase tracking-[0.5em] font-black text-[10px]">Institutional Standard</Badge>
                            <h1 className="text-8xl font-black font-headline text-black leading-none uppercase italic tracking-tighter">
                                START <span className="text-primary">SEEING.</span>
                            </h1>
                            <p className="text-xl text-zinc-500 italic font-medium max-w-2xl mx-auto">
                                The professional plug for revenue leakage and food safety risks—across every branch in your group.
                            </p>
                        </div>

                        <div className="flex items-center gap-12 border-y border-black/5 py-8 w-full justify-center">
                            {TECHNICAL_PAYLOAD.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <item.i className="w-4 h-4 text-primary" />
                                    <span className="text-[10px] font-black text-black/60 uppercase tracking-widest">{item.t}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {ELITE_7.map((ind) => (
                                    <div key={ind.id} title={ind.name} className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-white flex items-center justify-center text-zinc-400">
                                        <ind.icon className="w-4 h-4" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest px-4">Available for 7 Sectors</span>
                            <Button asChild size="lg" className="h-16 px-12 bg-black text-white rounded-none font-black uppercase italic tracking-widest text-sm hover:bg-primary hover:text-black transition-all">
                                <Link href="/library">DEPLOY SYSTEM : ₹999</Link>
                            </Button>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 4: THE FLOATING COMMAND DECK */}
                <PreviewFrame title="4. The Floating Command Deck" description="Immersive video with focused glass interaction.">
                    <div className="absolute inset-0 z-0">
                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center px-20">
                        <div className="w-full max-w-5xl bg-black/60 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)] grid grid-cols-[1.5fr,1fr] gap-12">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Badge className="bg-primary text-black font-black text-[9px] uppercase tracking-widest rounded-sm">V11.9 SOVEREIGN</Badge>
                                    <h1 className="text-6xl font-black text-white leading-[0.9] uppercase italic tracking-tighter">
                                        SYSTEMS DON'T FORGET. <span className="text-primary">PEOPLE DO.</span>
                                    </h1>
                                </div>
                                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                                    {TECHNICAL_PAYLOAD.map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary shrink-0"><item.i className="w-4 h-4" /></div>
                                            <div className="space-y-0.5">
                                                <p className="text-[10px] font-black text-white/80 uppercase italic tracking-tight">{item.t}</p>
                                                <p className="text-[8px] text-white/20 uppercase font-black tracking-widest">Built-in</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <DesktopCTA />
                            </div>
                            <div className="border-l border-white/5 pl-12 space-y-6">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">DEPLOYMENT READY:</span>
                                <div className="grid grid-cols-1 gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="group flex items-center gap-4 p-2 rounded-lg hover:bg-white/5 transition-all">
                                            <div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/40 transition-all">
                                                <ind.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-[11px] font-bold uppercase italic text-white/40 group-hover:text-white transition-all">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 5: THE SEQUENTIAL FUNNEL */}
                <PreviewFrame title="5. The Sequential Funnel" description="Top-down visual flow. Clear logical sequence.">
                    <div className="absolute inset-0 bg-zinc-950" />
                    <div className="relative z-10 h-full flex flex-col">
                        {/* 1. Impact Header */}
                        <div className="h-[40%] flex flex-col items-center justify-center text-center space-y-4 border-b border-white/5">
                            <h1 className="text-7xl font-black font-headline text-white leading-none uppercase italic tracking-tighter">
                                STOP CHASING. <span className="text-primary">START SEEING.</span>
                            </h1>
                            <p className="text-lg text-secondary-text italic font-medium">Run one unit perfectly. Scale without chaos.</p>
                        </div>
                        
                        {/* 2. Feature Ribbon */}
                        <div className="bg-primary/5 border-b border-primary/10 py-6">
                            <div className="flex justify-center gap-16">
                                {TECHNICAL_PAYLOAD.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <item.i className="w-5 h-5 text-primary" />
                                        <span className="text-[11px] font-black text-primary-text uppercase tracking-widest">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Selection & Action */}
                        <div className="flex-1 grid grid-cols-[1fr,400px] items-stretch">
                            <div className="p-12 flex flex-col justify-center border-r border-white/5">
                                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-8">CHOOSE YOUR INDUSTRY COMMAND MODULE:</span>
                                <div className="grid grid-cols-4 gap-4">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="aspect-square rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                                            <ind.icon className="w-6 h-6 text-white/20 group-hover:text-primary" />
                                            <span className="text-[8px] font-black uppercase text-center px-2 text-white/40 group-hover:text-white">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="p-12 flex flex-col justify-center items-center text-center space-y-6">
                                <div className="space-y-1">
                                    <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">ONE-TIME DEPLOYMENT</span>
                                    <p className="text-5xl font-black text-primary italic leading-none">₹999</p>
                                </div>
                                <DesktopCTA />
                                <div className="flex gap-4">
                                    {PROOFS.map(p => <p key={p.t} className="text-[8px] font-black text-white/20 uppercase tracking-widest italic">{p.t}</p>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
