'use client';

import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Utensils, Building, Hospital, School, Store, Building2, Popcorn } from "lucide-react";
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const VIDEO_URL = "https://res.cloudinary.com/dxqe8xdea/video/upload/q_auto,vc_h264,w_1920/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4";

const ELITE_INDUSTRIES = [
    { name: "Restaurant Operations", id: "restaurants", icon: Utensils },
    { name: "Hotel Operations", id: "hotels_and_resorts", icon: Building },
    { name: "Hospital Operations", id: "healthcare_and_hospital_operations", icon: Hospital },
    { name: "School Operations", id: "school_operations_pack", icon: School },
    { name: "Franchise Operations", id: "franchise_operations_pack", icon: Store },
    { name: "Facilities Operations", id: "facility_management_blueprint", icon: Building2 },
    { name: "Multiplex Operations", id: "cinema_operations_pack", icon: Popcorn }
];

const PROOF_STRIP = "EXCEL & SHEETS • OWN FOREVER • NO SaaS";

export default function HeroLabPage() {
    return (
        <div className="min-h-screen bg-zinc-50">
            <SiteHeader />
            <main>
                <div className="bg-zinc-950 text-white py-20 border-b border-white/10">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <Badge className="bg-primary text-black mb-4 px-4 py-1">SOVEREIGN DESIGN LAB</Badge>
                        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Identity & Media Test Route</h1>
                        <p className="text-zinc-400 mt-4 max-w-2xl italic">Testing visual parity for headline stacking and video framing. No production code was modified to generate this page.</p>
                    </div>
                </div>

                {/* --- DESKTOP SECTION --- */}
                <div className="bg-zinc-100 py-20">
                    <div className="container mx-auto max-w-[1200px] px-6">
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-zinc-400 border-l-4 border-primary pl-6">SECTION 1: DESKTOP HERO VARIANTS (HIDDEN ON MOBILE)</h2>
                    </div>

                    {/* VARIANT A */}
                    <div className="mb-32">
                        <div className="container mx-auto max-w-[1200px] px-6 mb-6">
                            <Badge variant="outline" className="border-zinc-300 bg-white text-zinc-600 font-black">VARIANT A: CURRENT PRODUCTION BASELINE (ITALIC / 8XL)</Badge>
                        </div>
                        <div className="hidden md:flex flex-row items-center h-[650px] relative bg-black overflow-hidden border-y border-zinc-200">
                            <div className="absolute inset-0 z-0">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                            </div>
                            <div className="container px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24 mx-auto">
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h1 className="text-8xl font-black font-headline text-white leading-[0.8] uppercase italic tracking-tighter">CAPTURE<br /><span className="text-primary">MEMORY.</span></h1>
                                        <p className="text-xl text-white/40 italic font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">Your business should not depend on memory. <br /> Serious operations deserve more than improvisation.</p>
                                    </div>
                                    <Button size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest">
                                        GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT B */}
                    <div className="mb-32">
                        <div className="container mx-auto max-w-[1200px] px-6 mb-6">
                            <Badge variant="outline" className="border-zinc-300 bg-white text-zinc-600 font-black">VARIANT B: NON-ITALIC | TEXT-7XL | MAX-W-5XL</Badge>
                        </div>
                        <div className="hidden md:flex flex-row items-center h-[650px] relative bg-black overflow-hidden border-y border-zinc-200">
                            <div className="absolute inset-0 z-0">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                            </div>
                            <div className="container px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24 mx-auto">
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h1 className="text-6xl lg:text-7xl font-black font-headline text-white leading-[1.05] uppercase tracking-tighter max-w-5xl">
                                            YOUR BUSINESS SHOULD NOT <br />
                                            <span className="text-primary">DEPEND ON MEMORY.</span>
                                        </h1>
                                        <p className="text-xl text-white/40 font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">Your business should not depend on memory. <br /> Serious operations deserve more than improvisation.</p>
                                    </div>
                                    <Button size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest">
                                        GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* VARIANT C */}
                    <div className="mb-20">
                        <div className="container mx-auto max-w-[1200px] px-6 mb-6">
                            <Badge variant="outline" className="border-zinc-300 bg-white text-zinc-600 font-black">VARIANT C: NON-ITALIC | TEXT-7XL | MAX-W-4XL</Badge>
                        </div>
                        <div className="hidden md:flex flex-row items-center h-[650px] relative bg-black overflow-hidden border-y border-zinc-200">
                            <div className="absolute inset-0 z-0">
                                <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale" />
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                            </div>
                            <div className="container px-32 relative z-10 h-full grid grid-cols-[1.2fr,1fr] items-center gap-24 mx-auto">
                                <div className="space-y-12">
                                    <div className="space-y-6">
                                        <h1 className="text-6xl lg:text-7xl font-black font-headline text-white leading-[1.05] uppercase tracking-tighter max-w-4xl">
                                            YOUR BUSINESS SHOULD NOT <br />
                                            <span className="text-primary">DEPEND ON MEMORY.</span>
                                        </h1>
                                        <p className="text-xl text-white/40 font-medium max-w-sm border-l border-white/20 pl-10 leading-relaxed">Your business should not depend on memory. <br /> Serious operations deserve more than improvisation.</p>
                                    </div>
                                    <Button size="lg" className="bg-transparent border border-primary/40 text-primary hover:bg-primary hover:text-black shadow-none w-fit px-12 h-16 rounded-xl font-black uppercase italic text-sm tracking-widest">
                                        GO LIVE IN 10 MINUTES: ₹999 <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE SECTION --- */}
                <div className="bg-white py-32 border-t border-zinc-200">
                    <div className="container mx-auto max-w-[1200px] px-6 text-center">
                        <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-6 text-zinc-400 border-l-4 border-primary pl-6 inline-block">SECTION 2: MOBILE VIDEO FRAMING (SIMULATED VIEWPORTS)</h2>
                        <p className="text-zinc-500 mb-20 max-w-lg mx-auto italic font-medium">Evaluating face visibility and operational context within the 16:9 mobile window using the production Cloudinary source.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
                            
                            {/* VERSION 1 */}
                            <div className="space-y-8">
                                <Badge variant="secondary" className="px-6 py-1">VERSION 1: CURRENT PRODUCTION</Badge>
                                <div className="mx-auto w-[320px] h-[568px] border-[12px] border-zinc-900 rounded-[3rem] bg-black relative overflow-hidden shadow-2xl ring-1 ring-black/10">
                                    <div className="absolute inset-0 z-0">
                                        <video src={VIDEO_URL} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-20 grayscale" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                                    </div>
                                    <div className="relative z-10 p-6 pt-12 text-left">
                                        <h1 className="text-2xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">CAPTURE <br/><span className="text-primary">MEMORY.</span></h1>
                                    </div>
                                </div>
                            </div>

                            {/* VERSION 2 */}
                            <div className="space-y-8">
                                <Badge variant="secondary" className="px-6 py-1">VERSION 2: CENTER 10% (TILT UP)</Badge>
                                <div className="mx-auto w-[320px] h-[568px] border-[10px] border-zinc-900 rounded-[2.5rem] bg-black relative overflow-hidden shadow-2xl ring-1 ring-black/10">
                                    <div className="absolute inset-0 z-0">
                                        <video 
                                            src={VIDEO_URL} 
                                            autoPlay loop muted playsInline 
                                            className="w-full h-full object-cover opacity-20 grayscale" 
                                            style={{ objectPosition: 'center 10%' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                                    </div>
                                    <div className="relative z-10 p-6 pt-12 text-left">
                                        <h1 className="text-2xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">CAPTURE <br/><span className="text-primary">MEMORY.</span></h1>
                                    </div>
                                </div>
                            </div>

                            {/* VERSION 3 */}
                            <div className="space-y-8">
                                <Badge variant="secondary" className="px-6 py-1">VERSION 3: CENTER 20% (MAX TILT)</Badge>
                                <div className="mx-auto w-[320px] h-[568px] border-[10px] border-zinc-900 rounded-[2.5rem] bg-black relative overflow-hidden shadow-2xl ring-1 ring-black/10">
                                    <div className="absolute inset-0 z-0">
                                        <video 
                                            src={VIDEO_URL} 
                                            autoPlay loop muted playsInline 
                                            className="w-full h-full object-cover opacity-20 grayscale" 
                                            style={{ objectPosition: 'center 20%' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
                                    </div>
                                    <div className="relative z-10 p-6 pt-12 text-left">
                                        <h1 className="text-2xl font-black font-headline text-white uppercase italic tracking-tighter leading-[0.85]">CAPTURE <br/><span className="text-primary">MEMORY.</span></h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
