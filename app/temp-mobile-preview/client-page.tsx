
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
    Smartphone
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

const PROOF_LINE = () => (
    <div className="flex justify-between items-center px-1 pt-2 border-t border-white/5">
        {[
            { t: "EXCEL READY", i: ShieldCheck },
            { t: "OWN FOREVER", i: Zap },
            { t: "AUDIT READY", i: ShieldCheck }
        ].map((point, i) => (
            <div key={i} className="flex items-center gap-1">
                <point.i className="w-2 h-2 text-primary/60" />
                <span className="text-[6px] font-black text-white/20 uppercase tracking-widest">{point.t}</span>
            </div>
        ))}
    </div>
);

const DeployButton = ({ className }: { className?: string }) => (
    <Button asChild className={cn("w-full h-14 bg-primary text-black font-black uppercase italic text-[10px] tracking-widest rounded-xl shadow-lg border-none active:scale-95 transition-all", className)}>
        <Link href="/library">GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
    </Button>
);

const PayloadBlock = ({ className }: { className?: string }) => (
    <div className={cn("grid grid-cols-2 gap-x-4 gap-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5", className)}>
        {TECHNICAL_PAYLOAD.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
                <item.i className="w-3 h-3 text-primary/60" />
                <span className="text-[8px] font-bold text-white/40 uppercase italic tracking-tight">{item.t}</span>
            </div>
        ))}
    </div>
);

const PreviewFrame = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle?: string }) => (
    <div className="flex flex-col items-center space-y-4">
        <div className="text-center space-y-1">
            <Badge variant="outline" className="text-[10px] font-black uppercase tracking-[0.2em] text-primary border-primary/20">{title}</Badge>
            {subtitle && <p className="text-[10px] text-zinc-500 italic font-medium uppercase tracking-widest">{subtitle}</p>}
        </div>
        <div className="w-[375px] h-[750px] border-[10px] border-zinc-900 rounded-[3.5rem] bg-black overflow-hidden shadow-2xl relative flex flex-col ring-1 ring-white/10">
            {children}
        </div>
    </div>
);

const VideoHeader = ({ height = "30%", children }: { height?: string, children?: React.ReactNode }) => (
    <div style={{ height }} className="w-full relative overflow-hidden bg-zinc-900">
        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
            {children}
        </div>
    </div>
);

export default function MobilePreviewClient() {
    return (
        <div className="flex flex-col min-h-screen bg-zinc-950 text-foreground">
            <SiteHeader />
            
            <main className="flex-1 py-20 px-4 space-y-40">
                
                {/* OPTION 1: THE COMMAND GRID */}
                <PreviewFrame title="Option 1: The Command Grid" subtitle="Balanced Density & Icons">
                    <VideoHeader height="35%">
                        <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                            STOP CHASING.<br />
                            <span className="text-primary">START SEEING.</span>
                        </h1>
                    </VideoHeader>
                    <div className="flex-1 bg-black p-6 flex flex-col justify-between overflow-y-auto no-scrollbar">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                                <div className="grid grid-cols-2 gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center gap-2.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] active:bg-primary/5">
                                            <ind.icon className="w-3.5 h-3.5 text-primary/60" />
                                            <span className="text-[8px] font-black uppercase italic tracking-tight text-white/70">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <PayloadBlock />
                        </div>
                        <div className="space-y-3 pt-4">
                            <DeployButton />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 2: THE DENSITY HUB */}
                <PreviewFrame title="Option 2: The Density Hub" subtitle="High Content / 3-Col Grid">
                    <VideoHeader height="28%">
                        <Badge className="bg-primary text-black font-black text-[7px] rounded-none mb-2 tracking-[0.3em]">SOVEREIGN V11.9</Badge>
                        <h1 className="text-xl font-black font-headline text-white leading-tight uppercase italic tracking-tighter">
                            SYSTEMS THAT RUN THEMSELVES.
                        </h1>
                    </VideoHeader>
                    <div className="flex-1 bg-black p-5 flex flex-col justify-between overflow-y-auto no-scrollbar">
                        <div className="space-y-5">
                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                                <div className="grid grid-cols-3 gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center active:bg-primary/5">
                                            <ind.icon className="w-4 h-4 text-primary/40" />
                                            <span className="text-[6px] font-black uppercase text-white/40 leading-tight">{ind.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-2 border-l-2 border-primary/30 pl-4 py-1">
                                <p className="text-[10px] text-white/80 font-bold uppercase italic tracking-tight">Pre-built SOPs with Dashboard.</p>
                                <p className="text-[10px] text-white/40 font-medium italic">No SaaS for your business. Own it forever.</p>
                            </div>
                            <PayloadBlock className="bg-primary/[0.02]" />
                        </div>
                        <div className="space-y-3 pt-4">
                            <DeployButton className="rounded-2xl" />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 3: THE AUTHORITY LIST */}
                <PreviewFrame title="Option 3: The Authority List" subtitle="Industrial Precision">
                    <VideoHeader height="32%">
                        <h1 className="text-2xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                            DEPLOY OPERATIONAL<br />
                            <span className="text-primary">INFRASTRUCTURE.</span>
                        </h1>
                    </VideoHeader>
                    <div className="flex-1 bg-zinc-950 p-6 flex flex-col justify-between overflow-y-auto no-scrollbar">
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                                <div className="space-y-1">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-3.5 border-b border-white/5 group active:bg-primary/5">
                                            <div className="flex items-center gap-3">
                                                <ind.icon className="w-4 h-4 text-primary/60" />
                                                <span className="text-[10px] font-bold uppercase italic text-white/80">{ind.name}</span>
                                            </div>
                                            <ChevronRight className="w-3 h-3 text-white/10 group-hover:text-primary" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <PayloadBlock />
                        </div>
                        <div className="pt-4 border-t border-white/5 space-y-3">
                            <DeployButton />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 4: THE FEATURE STACK */}
                <PreviewFrame title="Option 4: The Feature Stack" subtitle="Conversion & Value First">
                    <VideoHeader height="25%">
                        <h1 className="text-xl font-black font-headline text-white leading-[0.85] uppercase italic tracking-tighter">
                            STOP MANAGING.<br />
                            <span className="text-primary">START SEEING.</span>
                        </h1>
                    </VideoHeader>
                    <div className="flex-1 bg-black p-6 flex flex-col justify-between overflow-y-auto no-scrollbar">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><CheckCircle2 className="w-4 h-4" /></div>
                                        <p className="text-[10px] font-black text-white/80 uppercase italic tracking-tight">Pre-built Industry SOPs</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><Activity className="w-4 h-4" /></div>
                                        <p className="text-[10px] font-black text-white/80 uppercase italic tracking-tight">Live Group Dashboard</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary"><Lock className="w-4 h-4" /></div>
                                        <p className="text-[10px] font-black text-white/80 uppercase italic tracking-tight">No SaaS dependency</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                                <div className="flex flex-wrap gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[8px] font-black uppercase italic text-white/40 active:bg-primary active:text-black">
                                            {ind.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 pt-4">
                            <DeployButton className="h-16 shadow-[0_0_40px_-10px_rgba(46,184,107,0.4)]" />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

                {/* OPTION 5: THE TACTICAL SPLIT */}
                <PreviewFrame title="Option 5: The Tactical Split" subtitle="Direct Impact Design">
                    <VideoHeader height="40%">
                        <h1 className="text-3xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">
                            LESS MISSES.<br />
                            <span className="text-primary">MORE STANDARDS.</span>
                        </h1>
                    </VideoHeader>
                    <div className="flex-1 bg-black p-6 flex flex-col justify-between overflow-y-auto no-scrollbar">
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <span className="text-[8px] font-black text-white/20 uppercase tracking-[0.2em]">SEE HOW IT WORKS FOR YOUR BUSINESS</span>
                                <div className="grid grid-cols-2 gap-2">
                                    {ELITE_7.map((ind) => (
                                        <Link key={ind.id} href={`/packs/${ind.id}`} className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.02] active:bg-primary/5">
                                            <span className="text-[8px] font-black uppercase italic tracking-tight text-white/60">{ind.name}</span>
                                            <ChevronRight className="w-2.5 h-2.5 text-white/10" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <PayloadBlock className="bg-primary/5 border-primary/10" />
                        </div>
                        <div className="space-y-3 pt-4">
                            <DeployButton />
                            <PROOF_LINE />
                        </div>
                    </div>
                </PreviewFrame>

            </main>
            
            <Footer />
        </div>
    );
}
