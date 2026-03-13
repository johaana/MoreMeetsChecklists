
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
import { 
    Download, 
    BarChart3, 
    Lock, 
    Users, 
    Settings2, 
    ShieldCheck, 
    Zap, 
    ArrowRight,
    Binary,
    Shield,
    Link as LinkIcon,
    AlertCircle,
    UserCheck,
    Stethoscope
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
                            Hardened Portfolio Build V2.16
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Execution <br/> <span className="text-primary underline decoration-primary/20 underline-offset-8">Infrastructure.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        V2.16: Shifting from static checklists to a name-centric Governance Nervous System. Now featuring Name-Sync mapping, Personnel Status IQ, and Red Alert Resolution Protocols.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownload(pack, 'pack')}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Download Portfolio Build V2.16
                    </Button>
                    <div className="flex items-center gap-3 text-white/20 font-black uppercase tracking-[0.3em] text-[10px] italic">
                        <Shield className="w-4 h-4" /> SECURED PROTOCOL V2.16
                    </div>
                </div>
            </div>
        </section>

        {/* FEATURES GRID */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20">Governance IQ</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Command-Ready Components</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium">Technical specifications of the V2.16 "Professional" Build.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={UserCheck} 
                        title="Name-Sync Architecture" 
                        description="Assign roles by Name, not ID. Validation formulas flag if a person is Resigned or On-Leave instantly."
                    />
                    <FeatureItem 
                        icon={AlertCircle} 
                        title="Red Alert Protocol" 
                        description="Dashboard guidance on resolving overdue tasks. Status changes to 'ACTION REQUIRED' to demand manager attention."
                    />
                    <FeatureItem 
                        icon={Stethoscope} 
                        title="Integrated Coaching" 
                        description="Dedicated 'How to Coach' notes for every task turn your floor managers into expert field auditors."
                    />
                    <FeatureItem 
                        icon={BarChart3} 
                        title="Visual Load Index" 
                        description="Real-time personnel workload heatmap. Growing '█' blocks detect single points of failure in your team."
                    />
                    <FeatureItem 
                        icon={LinkIcon} 
                        title="Navigational Hyperlinks" 
                        description="Functional 'Jump Links' built into the Guide. Move between Dashboard, Mapping, and Satellites with zero friction."
                    />
                    <FeatureItem 
                        icon={Settings2} 
                        title="Scope Control Toggle" 
                        description="Toggle modules like 'Bar' or 'Pool' to N/A. Dashboard math adapts instantly for fair unit scoring."
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
                            <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter leading-tight">V2.16 Executive Build</h3>
                            <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                                Hardened formulas, Name-Sync logic, and the Integrated Red Alert Resolution Protocol.
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
                            Download V2.16 Build
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
