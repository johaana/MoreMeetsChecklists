
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
import { 
    Download, 
    BarChart3, 
    Users, 
    Settings2, 
    ShieldCheck, 
    Zap, 
    Binary,
    Shield,
    Calendar,
    AlertCircle,
    UserCheck,
    Stethoscope,
    ArrowRight
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

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
                            Executive Command Build V2.17
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Command <br/> <span className="text-primary underline decoration-primary/20 underline-offset-8">Intelligence.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        V2.17: Featuring the **Command Timeframe** dynamic filter and **Bipolar performance Heatmaps**. The standard for zero-ambiguity governance.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownload(pack, 'pack')}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Download Executive Build V2.17
                    </Button>
                    <div className="flex items-center gap-3 text-white/20 font-black uppercase tracking-[0.3em] text-[10px] italic">
                        <Shield className="w-4 h-4" /> SECURED COMMAND V2.17
                    </div>
                </div>
            </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20">System Specs</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Governance Engine Components</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium">Technical specifications of the V2.17 "Command" Build.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Calendar} 
                        title="Command Timeframe" 
                        description="Input a Start/End date on the Dashboard. All scores and heatmaps recalculate instantly for that specific Week or Month."
                    />
                    <FeatureItem 
                        icon={AlertCircle} 
                        title="Continuity Protocol" 
                        description="If a person resigns, the Dashboard triggers a RED ALERT instructing the manager to RE-ASSIGN tasks immediately in Settings."
                    />
                    <FeatureItem 
                        icon={BarChart3} 
                        title="Bipolar Heatmap" 
                        description="Visual '█' blocks in Green (Execution) and Red (Risk) show you exactly where the gaps are in your personnel load."
                    />
                    <FeatureItem 
                        icon={Stethoscope} 
                        title="Coaching Infrastructure" 
                        description="Integrated 'How to Coach' notes turn your floor managers into field auditors during their rounds."
                    />
                    <FeatureItem 
                        icon={Users} 
                        title="Settings Brain" 
                        description="A dedicated 'Configuration & Mapping' sheet. Put info here once; it flows to every checklist automatically."
                    />
                    <FeatureItem 
                        icon={Settings2} 
                        title="Dynamic Scope Toggle" 
                        description="Type 'N/A' for any department (e.g. Bar). The Dashboard math adjusts to ignore those tasks for fair scoring."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-48 relative overflow-hidden">
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
                            <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter leading-tight">V2.17 Command Build</h3>
                            <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                                The ultimate anchor for high-stakes operational reliability.
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-10">
                        <Button 
                            size="lg" 
                            onClick={() => handleDownload(pack, 'pack')}
                            className="h-24 px-16 bg-primary text-black font-black uppercase italic text-2xl shadow-[0_0_60px_-15px_rgba(46,184,107,0.6)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto rounded-[2rem]"
                        >
                            <Download className="mr-4 w-8 h-8" />
                            Download Build V2.17
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
