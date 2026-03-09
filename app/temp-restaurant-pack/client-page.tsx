
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadV2 } from './download-v2';
import { 
    Download, 
    BarChart3, 
    Lock, 
    Users, 
    Settings2, 
    ShieldCheck, 
    Zap, 
    ArrowRight,
    ChevronRight,
    Binary,
    Shield
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-primary/20 group">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
            <h4 className="font-black text-primary-text text-[11px] uppercase tracking-[0.2em]">{title}</h4>
            <p className="text-sm text-secondary-text leading-relaxed italic font-medium">{description}</p>
        </div>
    </div>
);

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full h-[75vh] md:h-[85vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-5 uppercase tracking-[0.5em] font-black text-[10px] bg-primary/5 rounded-full backdrop-blur-sm">
                            Executive Governance Engine v2.12
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Systems Over <br/> <span className="text-primary underline decoration-primary/20 underline-offset-8">Surprises.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The final hardened build for multi-unit restaurant operations. Moving from simple task lists to permanent organizational infrastructure.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Initiate V2.12 Build
                    </Button>
                    <div className="flex items-center gap-3 text-white/20 font-black uppercase tracking-[0.3em] text-[10px] italic">
                        <Shield className="w-4 h-4" /> Hardened Protocol
                    </div>
                </div>
            </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20">Build Specifications</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">V2.12 Structural Logic</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium">Framing the forensic components of the Executive Portfolio build.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Zap} 
                        title="Active Formula Logic" 
                        description="The .xlsx is alive. Completion percentages, risk scores, and overdue alerts update the second a manager types a date in a yellow cell."
                    />
                    <FeatureItem 
                        icon={Users} 
                        title="Integrated Coaching" 
                        description="Specific 'How-to' coaching tips for every task are integrated directly in Column C, turning the sheet into a manager's field manual."
                    />
                    <FeatureItem 
                        icon={Settings2} 
                        title="Input-Yellow UX" 
                        description="A clear visual heatmap guides non-tech staff. 'If it's yellow, type here.' Everything else is protected and automatic."
                    />
                    <FeatureItem 
                        icon={BarChart3} 
                        title="God-View Dashboard" 
                        description="Uses INDEX/MATCH array logic to automatically identify the most overloaded staff member in the entire portfolio."
                    />
                    <FeatureItem 
                        icon={Lock} 
                        title="Scope Toggle" 
                        description="Activate or deactivate entire departments (e.g., 'Pool' or 'Valet') in the Mapping sheet to keep your governance scores fair."
                    />
                    <FeatureItem 
                        icon={ShieldCheck} 
                        title="Zero-Truncation Design" 
                        description="Hardened column widths and forced cell centering ensure zero text is cut off, even on mobile Excel viewers."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-48 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-10 md:p-24 rounded-[4rem] border border-white/10 bg-black shadow-2xl relative overflow-hidden group text-center space-y-12">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    
                    <div className="relative z-10 space-y-8">
                        <div className="flex justify-center">
                            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Binary className="w-10 h-10 text-primary" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter leading-tight">Hardened Build: V2.12</h3>
                            <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                                Finalizing the deployment. Contains the full formula suite, expanded 'How to Coach' column, and God-View risk logic.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-10">
                        <Button 
                            size="lg" 
                            onClick={() => handleDownloadV2(pack)}
                            className="h-24 px-16 bg-primary text-black font-black uppercase italic text-2xl shadow-[0_0_60px_-15px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto rounded-[2rem]"
                        >
                            <Download className="mr-4 w-8 h-8" />
                            Download Executive Build
                        </Button>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30">
                            {[
                                { icon: ShieldCheck, label: "Formulas Verified" },
                                { icon: Users, label: "Coach Notes Active" },
                                { icon: Binary, label: "Macro-Free Logic" },
                                { icon: Lock, label: "Portfolio Ready" }
                            ].map((proof, i) => (
                                <div key={i} className="flex flex-col items-center gap-3">
                                    <proof.icon className="w-6 h-6 text-primary" />
                                    <span className="text-[10px] uppercase font-black tracking-widest text-white">{proof.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 flex flex-col items-center gap-4 opacity-20 text-center">
                    <p className="text-[11px] text-white uppercase font-black tracking-[0.4em]">Build Signature: 2.12.EXECUTIVE.PORTFOLIO.HARDENED</p>
                    <p className="text-[10px] text-white italic max-w-xl font-medium leading-relaxed">
                        Formula Objects Enabled. Gridline Suppression Active. Column C (How to Coach) Activated. Input-Yellow UX Standard applied. Index/Match Risk Logic Integrated.
                    </p>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
