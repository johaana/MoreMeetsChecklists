
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadV2 } from './download-v2';
import { 
    Download, 
    Shield,
    Activity,
    Database,
    Zap,
    LayoutDashboard,
    Siren,
    Briefcase,
    UserCheck,
    BarChart3,
    ArrowRight
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const FeatureItem = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => (
    <div className="flex gap-4 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-primary/20 group relative overflow-hidden">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
            <div className="flex items-center gap-2">
                <h4 className="font-black text-primary-text text-[11px] uppercase tracking-[0.2em]">{title}</h4>
                {badge && <Badge variant="outline" className="text-[8px] py-0 px-1.5 border-primary/30 text-primary uppercase">{badge}</Badge>}
            </div>
            <p className="text-sm text-secondary-text leading-relaxed italic font-medium">{description}</p>
        </div>
    </div>
);

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full h-[85vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <video
                    src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2] opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-primary border-primary/30 py-1 px-5 uppercase tracking-[0.5em] font-black text-[10px] bg-primary/5 rounded-full backdrop-blur-sm">
                            V2.3 Executive Build • X-SELECTION ENGINE
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">Governance.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The V2.3 "Executive Command" build solves the typing problem. Use the X-Selection Matrix to manage personnel and view tasks without manual data entry.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl border-none"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Download V2.3 Executive .xlsx
                    </Button>
                </div>
            </div>
        </section>

        {/* GOVERNANCE SPECIFICATIONS */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-widest text-[9px]">Aviation-Grade Logic</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Choose-Mode Interface</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium leading-relaxed">Redesigned from the ground up to support three distinct user personas.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Briefcase} 
                        title="X-Selection Grid" 
                        badge="New"
                        description="Owner simply types 'X' in the status column to choose Available, Leave, or Resigned. No typing words required."
                    />
                    <FeatureItem 
                        icon={Activity} 
                        title="Manager Cockpit" 
                        badge="Tactical"
                        description="One-click lists of Pending and Failed tasks across the entire facility. Powered by a live filter engine."
                    />
                    <FeatureItem 
                        icon={LayoutDashboard} 
                        title="Staff Task Selector" 
                        badge="Operator"
                        description="Employees choose their name using the built-in selector. They see only their tasks, removing 95% of the noise."
                    />
                    <FeatureItem 
                        icon={Siren} 
                        title="Black Box Log" 
                        badge="Auditable"
                        description="Failed CCPs are automatically detectable for the signed Incident Log, providing legal and insurance armor."
                    />
                    <FeatureItem 
                        icon={UserCheck} 
                        title="Human Risk Metric" 
                        badge="Harden"
                        description="Identifies if you rely too heavily on one manager. Detects concentration of critical safety controls."
                    />
                    <FeatureItem 
                        icon={BarChart3} 
                        title="Clinical Formatting" 
                        badge="Standard"
                        description="Strict Left-Align for text and Center-Align for data. Zero-grid backgrounds for a professional application feel."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-48 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none text-white">
                <Shield className="w-full h-full" />
            </div>
            <div className="container px-4 md:px-6 relative z-10 space-y-12">
                <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter">Institutional Integrity</h3>
                    <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                        Deploy the clinical standard for operational governance. Built for results, not just checklists.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-24 px-16 bg-primary text-black font-black uppercase italic text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all rounded-[2rem]"
                    >
                        <Download className="mr-4 w-8 h-8" />
                        Download Executive V2.3
                    </Button>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">One-Time Purchase • Lifetime Support • Clinical Grade</p>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
