
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadV2 } from './download-v2';
import { 
    Download, 
    Shield,
    Lock,
    Users,
    Siren,
    CheckCircle,
    Binary,
    ArrowRight,
    Gem,
    Activity,
    Database,
    Zap,
    LayoutDashboard,
    AlertTriangle,
    EyeOff
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
    <div className="flex flex-col min-h-screen bg-background">
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-accent border-accent/30 py-1 px-5 uppercase tracking-[0.5em] font-black text-[10px] bg-accent/5 rounded-full backdrop-blur-sm">
                            V2.2 Surgical Build • PRESTIGE SERIES
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-accent">Governance.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-accent/20 pl-8">
                        The V2.2 "Surgical" engine transforms your operation into an Aviation-grade control system. Featuring 3-layer architecture, CCP escalation, and Human Risk detection.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-20 px-12 bg-accent text-accent-foreground font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl border-none"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Download Surgical V2.2
                    </Button>
                </div>
            </div>
        </section>

        {/* GOVERNANCE SPECIFICATIONS */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/20 uppercase tracking-widest text-[9px]">High-Gravity Architecture</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Command Centre Features</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium leading-relaxed">Engineered for CEOs who need zero-ambiguity oversight across their entire portfolio.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Zap} 
                        title="CCP Escalation" 
                        badge="Safety"
                        description="If a Critical Control Point (e.g. Gas Check) is failed or missed, the system triggers an automatic audit incident entry."
                    />
                    <FeatureItem 
                        icon={LayoutDashboard} 
                        title="My Tasks Today" 
                        badge="UX"
                        description="Staff select their name and see only their specific duties. Reduces cognitive load and ensures 100% execution."
                    />
                    <FeatureItem 
                        icon={Activity} 
                        title="Risk Concentration" 
                        badge="Logic"
                        description="Detects when too many critical tasks belong to one person, flagging human-dependency risks before they fail."
                    />
                    <FeatureItem 
                        icon={Siren} 
                        title="Incident Log" 
                        badge="Audit"
                        description="An automated, high-stakes 'Black Box' that records all failures and requires manager sign-off for legal compliance."
                    />
                    <FeatureItem 
                        icon={Database} 
                        title="Engine Architecture" 
                        badge="Stable"
                        description="Uses a 3-layer system separating UI, Logic, and Data. Virtually impossible for users to break the core governance math."
                    />
                    <FeatureItem 
                        icon={EyeOff} 
                        title="Stealth Engine" 
                        badge="Premium"
                        description="Hidden gridlines, charcoal visuals, and internal navigation bars. It behaves like bespoke software, not a spreadsheet."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-48 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
                <Shield className="w-full h-full" />
            </div>
            <div className="container px-4 md:px-6 relative z-10 space-y-12">
                <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter">Institutional Integrity</h3>
                    <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                        Ready to deploy the clinical standard for operational control?
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-24 px-16 bg-accent text-accent-foreground font-black uppercase italic text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all rounded-[2rem]"
                    >
                        <Download className="mr-4 w-8 h-8" />
                        Download Build V2.2
                    </Button>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">One-Time Purchase • Lifetime Governance • Clinical Grade</p>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
