
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
    Binary
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
        <section className="relative w-full h-[70vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.4] opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-8">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/30 py-1 px-4 uppercase tracking-[0.4em] font-black text-[10px] bg-primary/5">
                        Operational Infrastructure v2.12
                    </Badge>
                    <h1 className="text-4xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.95]">
                        The Executive <br/> <span className="text-primary">Governance Engine</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed">
                        Moving beyond simple checklists into hardened organizational infrastructure. Built for zero-ambiguity authority.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-16 px-10 bg-primary text-black font-black uppercase italic text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all"
                    >
                        <Download className="mr-2 w-5 h-5" />
                        Download Executive Build
                    </Button>
                    <Button variant="outline" className="h-16 px-10 border-white/10 text-white font-black uppercase text-xs tracking-widest hover:bg-white/5">
                        Review Technical Specs <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-black font-headline text-primary-text uppercase italic tracking-tighter">System Architecture</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium">Framing the technical components of the V2.12 Portfolio build.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Zap} 
                        title="Active Formula Objects" 
                        description="The .xlsx file is alive. Completion percentages, risk scores, and overdue alerts update the second a manager types a date."
                    />
                    <FeatureItem 
                        icon={Users} 
                        title="Trainer’s Coaching Notes" 
                        description="Specific 'How-to' coaching tips for every task are integrated, turning a simple checklist into a powerful staff training tool."
                    />
                    <FeatureItem 
                        icon={Settings2} 
                        title="Input-Yellow UX" 
                        description="Yellow-shaded cells act as a visual heatmap, guiding managers exactly where to type without needing technical training."
                    />
                    <FeatureItem 
                        icon={BarChart3} 
                        title="Dynamic Risk IQ" 
                        description="The Dashboard uses INDEX/MATCH logic to automatically name your most overloaded staff member based on current task allocation."
                    />
                    <FeatureItem 
                        icon={Lock} 
                        title="Portfolio Mode" 
                        description="Toggle between Single-Unit and Multi-Unit modes to activate regional benchmarking and God-view leadership dashboards."
                    />
                    <FeatureItem 
                        icon={ShieldCheck} 
                        title="Clinical Hardening" 
                        description="Forced centering and padding ensure that zero text is truncated, even on complex mobile Excel viewers."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto p-8 md:p-20 rounded-[3rem] border border-white/10 bg-white/[0.02] shadow-2xl relative overflow-hidden group text-center space-y-10">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    
                    <div className="relative z-10 space-y-6">
                        <div className="flex justify-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <Binary className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-5xl font-black font-headline uppercase italic text-primary-text tracking-tighter">Final Review: V2.12 Build</h3>
                            <p className="text-lg md:text-xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                                Download the hardened build below. This version contains the full formula suite, the expanded 'How to Coach' column, and God-View logic.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <Button 
                            size="lg" 
                            onClick={() => handleDownloadV2(pack)}
                            className="h-20 px-12 bg-primary text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                        >
                            <Download className="mr-3 w-7 h-7" />
                            Download Executive Build
                        </Button>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
                            {[
                                { icon: ShieldCheck, label: "Formulas Verified" },
                                { icon: Users, label: "Coach Notes Active" },
                                { icon: Binary, label: "Macro-Free Logic" },
                                { icon: Lock, label: "Portfolio Ready" }
                            ].map((proof, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <proof.icon className="w-5 h-5 text-primary" />
                                    <span className="text-[9px] uppercase font-black tracking-widest text-white">{proof.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-16 flex flex-col items-center gap-3 opacity-20 text-center">
                    <p className="text-[10px] text-white uppercase font-black tracking-[0.3em]">Build Signature: 2.12.EXECUTIVE.PORTFOLIO.DEMO</p>
                    <p className="text-[9px] text-white italic max-w-lg font-medium leading-relaxed">
                        Formula Objects Enabled. Column C (How to Coach) Activated. Input-Yellow UX Standard applied. Index/Match Risk Logic Integrated.
                    </p>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
