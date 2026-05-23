'use client';

import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Check, 
    ArrowRight, 
    Activity,
    ShieldCheck,
    Clock,
    UserCheck,
    Smartphone,
    LayoutGrid,
    ChevronRight,
    Utensils,
    Building,
    ShoppingBag,
    Hospital,
    School,
    Popcorn
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Link from 'next/link';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-24 md:py-32 relative overflow-hidden", className)}>
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
            {children}
        </div>
    </section>
);

const LedgerRow = ({ task, status, person, time, isAlt }: { task: string, status: 'Complete' | 'Pending', person: string, time?: string, isAlt?: boolean }) => (
    <div className={cn(
        "grid grid-cols-[1fr,100px,80px,100px] gap-4 px-6 py-4 border-b border-white/5 items-center transition-colors hover:bg-white/[0.02]",
        isAlt && "bg-white/[0.01]"
    )}>
        <span className="text-[13px] font-bold text-white/90 uppercase tracking-tight">{task}</span>
        <div className="flex justify-center">
            <span className={cn(
                "text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border",
                status === 'Complete' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
            )}>{status}</span>
        </div>
        <span className="text-[11px] font-mono text-center text-white/40">{person}</span>
        <span className="text-[11px] font-mono text-right text-white/20">{time || "--:--"}</span>
    </div>
);

export default function DesignLab() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    if (!mounted) return null;

    return (
        <div className="bg-[#05070A] text-[#F5F7FA] font-sans antialiased selection:bg-emerald-500/30">
            <SiteHeader forceTheme="dark" />

            <main className="flex-1">
                
                {/* --- 1. HERO: EMOTION + PROOF --- */}
                <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden bg-black">
                    {/* Cinematic Video Background */}
                    <div className="absolute inset-0 z-0">
                        <video 
                            src={VIDEO_URL} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            className="w-full h-full object-cover opacity-30 grayscale brightness-[0.4]" 
                        />
                        <div 
                            className="absolute inset-0 z-10" 
                            style={{ background: 'rgba(5, 7, 10, 0.72)' }} 
                        />
                    </div>

                    <div className="relative z-20 container mx-auto max-w-[1300px] px-6 flex items-center h-full pt-16">
                        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-24 items-center w-full">
                            
                            {/* Left: Emotional Mandate (58%) */}
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <h1 className="text-[56px] md:text-[80px] lg:text-[100px] font-extrabold tracking-[-0.06em] leading-[0.9] uppercase text-[#F5F7FA]">
                                        YOUR BUSINESS <br/> SHOULD NOT <br/> DEPEND <br/> ON MEMORY.
                                    </h1>
                                    <div className="space-y-6 max-w-[620px]">
                                        <p className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-[#A7B0BE]">
                                            MoreMeets gives your team ready-to-use live SOP systems with daily tasks, built-in instructions, timestamps, accountability, and clear operational standards.
                                        </p>
                                        <p className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-[#A7B0BE]">
                                            So work gets done properly — even when managers are away, staff change, or operations get busy.
                                        </p>
                                        <div className="space-y-1 pt-2">
                                            <p className="text-sm font-bold text-white/20 uppercase tracking-widest">No new apps to learn.</p>
                                            <p className="text-sm font-bold text-white/20 uppercase tracking-widest">No training headaches.</p>
                                            <p className="text-sm font-bold text-white/20 uppercase tracking-widest">Works directly on Google Sheets.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Button asChild className="h-16 px-10 rounded-2xl bg-[#F5F7FA] text-[#05070A] font-bold uppercase text-xs tracking-widest shadow-2xl transition-all hover:-translate-y-1 hover:bg-white">
                                        <Link href="/library">See how it works</Link>
                                    </Button>
                                    <Button variant="outline" asChild className="h-16 px-10 rounded-2xl border-white/10 bg-white/[0.03] backdrop-blur-xl font-bold uppercase text-xs tracking-widest hover:bg-white/10 text-white">
                                        <Link href="#interface">View Live System</Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right: The Proof (The Real Sheet) (42%) */}
                            <div className="hidden lg:block relative group">
                                <div className="absolute -inset-10 bg-emerald-500/10 blur-[100px] opacity-20 rounded-full" />
                                <div className="relative p-1 rounded-[30px] bg-gradient-to-b from-white/10 to-transparent">
                                    <div className="bg-[#0F1720]/80 backdrop-blur-[24px] rounded-[28px] overflow-hidden shadow-2xl">
                                        {/* Pulse Header */}
                                        <div className="bg-black/40 px-8 py-5 flex items-center justify-between border-b border-white/5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500/80">Live Operations Active</span>
                                            </div>
                                            <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Branch_Main_01</span>
                                        </div>
                                        
                                        {/* Table Mock */}
                                        <div className="flex flex-col">
                                            <div className="grid grid-cols-[1fr,100px,80px,100px] gap-4 px-6 py-3 bg-white/[0.02] border-b border-white/5">
                                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest">Task</span>
                                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-center">Status</span>
                                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-center">User</span>
                                                <span className="text-[9px] font-black text-white/20 uppercase tracking-widest text-right">Time</span>
                                            </div>
                                            <LedgerRow task="Opening Audit Verified" status="Complete" person="AK" time="08:14 AM" />
                                            <LedgerRow task="Cold Storage Temp Logged" status="Complete" person="RD" time="09:02 AM" isAlt />
                                            <LedgerRow task="Fire Exit Path Sweep" status="Pending" person="--" time="" />
                                            <LedgerRow task="Kitchen Hygiene Cycle" status="Complete" person="SK" time="11:27 AM" isAlt />
                                            <LedgerRow task="Shift Handover Signed" status="Complete" person="AM" time="12:01 PM" />
                                        </div>
                                        
                                        {/* Footer Hint */}
                                        <div className="p-6 bg-white/[0.02] border-t border-white/5">
                                            <p className="text-[10px] text-zinc-500 italic text-center">Actual real-time execution ledger interface.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- 2. TRUST STRIP --- */}
                <div className="w-full bg-[#05070A] py-8 border-y border-white/5 overflow-hidden">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em]">Used for daily operations in</span>
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                                {["Restaurants", "Hotels", "Multiplexes", "Retail", "Hospitals", "Schools"].map((ind) => (
                                    <span key={ind} className="text-[11px] font-bold text-white uppercase tracking-[0.1em] italic">{ind}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- 3. WHY TEAMS ACTUALLY USE IT --- */}
                <Section className="bg-[#05070A]">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
                        {[
                            {
                                t: "No training needed",
                                d: "If your team can use Google Sheets on a phone, they can use MoreMeets. No complex software onboarding.",
                                i: Smartphone
                            },
                            {
                                t: "Daily accountability",
                                d: "Every single task is assigned, timestamped, and visible. No more verbal chasing for updates.",
                                i: UserCheck
                            },
                            {
                                t: "Built for real operations",
                                d: "Hardened protocols for restaurants, hotels, hospitals, retail, and multiplexes. Not generic templates.",
                                i: LayoutGrid
                            }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                                    <item.i className="w-6 h-6" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{item.t}</h3>
                                    <p className="text-[#A7B0BE] leading-relaxed italic">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* --- 4. REAL INTERFACE --- */}
                <Section className="bg-[#090B10]" id="interface">
                    <div className="space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-[32px] md:text-[54px] font-extrabold text-white tracking-tight uppercase italic">The actual interface.</h2>
                            <p className="text-[#A7B0BE] text-lg max-w-2xl mx-auto">No complex dashboards. No charts. Just a clear, high-density execution ledger that your team follows every day.</p>
                        </div>

                        <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(34,197,94,0.15)] group">
                             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none z-10" />
                             <img 
                                src="https://i.postimg.cc/kggB6rVZ/Screenshot-2026-05-11-170916.png" 
                                alt="Real Operational Ledger" 
                                className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
                             />
                             <div className="absolute bottom-10 left-10 z-20 space-y-1">
                                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Audit Heartbeat</p>
                                <p className="text-xl font-bold text-white italic">Tamper-proof completion timestamps.</p>
                             </div>
                        </div>
                    </div>
                </Section>

                {/* --- 5. INDUSTRIES --- */}
                <Section className="bg-[#05070A]">
                    <div className="space-y-20">
                        <div className="text-center">
                            <h2 className="text-[32px] md:text-[54px] font-extrabold text-white tracking-tight uppercase italic">Industries</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { t: "Restaurants", i: "https://i.postimg.cc/wxF6Cpdx/restaurant-backoffice.jpg", sub: "Kitchen hygiene, opening checks, inventory discipline.", icon: Utensils },
                                { t: "Hotels", i: "https://i.postimg.cc/7hPq5BSy/hotel-ops.webp", sub: "Housekeeping parity, front desk, engineering vitals.", icon: Building },
                                { t: "Retail", i: "https://i.postimg.cc/ DyFXgFdj/people-stands-looks-documents.jpg", sub: "Loss prevention, stock integrity, visual standards.", icon: ShoppingBag },
                                { t: "Hospitals", i: "https://i.postimg.cc/zvDqydKt/healthcare.jpg", sub: "Clinical nursing, pharmacy audits, statutory compliance.", icon: Hospital },
                                { t: "Schools", i: "https://i.postimg.cc/pXGLFt00/school-safety.webp", sub: "Transport safety, perimeter security, statutory logs.", icon: School },
                                { t: "Multiplexes", i: "https://i.postimg.cc/VsXtn5MJ/view-3d-cinema-theatre-room.jpg", sub: "Projection quality, concession yield, crowd flow.", icon: Popcorn }
                            ].map((item, i) => (
                                <Link key={i} href="/library" className="relative h-[400px] rounded-[32px] overflow-hidden group">
                                    <img src={item.i} alt={item.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] opacity-40" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-[#05070A]/60 to-transparent" />
                                    <div className="absolute inset-0 p-10 flex flex-col justify-end gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase leading-none">{item.t}</h3>
                                        <p className="text-sm font-medium text-[#A7B0BE] leading-relaxed max-w-[200px]">{item.sub}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* --- 6. FINAL CTA --- */}
                <Section className="bg-[#05070A] py-32 md:py-48" noSpine>
                    <div className="max-w-4xl mx-auto space-y-12 text-center">
                        <div className="space-y-4">
                            <h2 className="text-[44px] md:text-[90px] font-extrabold leading-[0.85] tracking-tighter uppercase italic text-[#F5F7FA]">
                                STOP CHASING <br/> STAFF FOR UPDATES.
                            </h2>
                            <p className="text-xl md:text-[28px] text-[#A7B0BE] font-medium italic leading-tight">
                                Deploy operational clarity across your business.
                            </p>
                        </div>
                        <div className="pt-8">
                            <Button asChild size="lg" className="h-20 px-16 rounded-[20px] bg-[#F5F7FA] text-[#05070A] font-black uppercase text-sm tracking-widest hover:bg-white hover:scale-[1.05] transition-all shadow-2xl border-none">
                                <Link href="/library">Get Your System</Link>
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
                    animation: marquee 40s linear infinite;
                }
            `}</style>
        </div>
    );
}
