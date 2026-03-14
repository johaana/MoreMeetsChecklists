
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
    Filter,
    Siren,
    CheckCircle,
    Binary,
    ArrowRight,
    MapPin,
    EyeOff,
    Gem,
    Activity,
    Database,
    Zap,
    LayoutDashboard
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
                {/* Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-accent border-accent/30 py-1 px-5 uppercase tracking-[0.5em] font-black text-[10px] bg-accent/5 rounded-full backdrop-blur-sm">
                            Executive Build V2.18 • COMMAND & CONTROL
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-accent">Governance.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-accent/20 pl-8">
                        The V2.18 build converts industry experience into a high-stakes **Control System**. It features CCP Escalation, Risk Concentration alerts, and a "Swiss Private Bank" software UX.
                    </p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-20 px-12 bg-accent text-accent-foreground font-black uppercase italic text-lg shadow-[0_0_50px_-12px_rgba(212,175,55,0.5)] hover:scale-105 active:scale-95 transition-all rounded-2xl border-none"
                    >
                        <Download className="mr-3 w-6 h-6" />
                        Download Executive V2.18
                    </Button>
                </div>
            </div>
        </section>

        {/* GOVERNANCE SPECIFICATIONS */}
        <section className="py-32 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-20 space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/20 uppercase tracking-widest text-[9px]">Aviation-Grade Architecture</Badge>
                    <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Beyond Checklists</h2>
                    <p className="text-secondary-text max-w-xl mx-auto italic font-medium leading-relaxed">Position your operation as a "Clinical Standard" with these V2.18 features.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <FeatureItem 
                        icon={Zap} 
                        title="CCP Escalation" 
                        description="If a 'Critical Control Point' (e.g. Gas Safety) fails, the system automatically triggers an entry in the Incident Log requiring GM sign-off."
                    />
                    <FeatureItem 
                        icon={LayoutDashboard} 
                        title="My Tasks Today" 
                        description="Staff select their name and see ONLY their daily list. Zero noise. 100% adoption. This is the core of our 'Minimum Motion' UX."
                    />
                    <FeatureItem 
                        icon={Activity} 
                        title="Risk Concentration" 
                        description="Dashboard detects if too many critical tasks belong to one person, flagging human-dependency risks before they become disasters."
                    />
                    <FeatureItem 
                        icon={Gem} 
                        title="Prestige Visuals" 
                        description="Swiss Private Bank styling. Charcoal backgrounds, Gold accents, and zero gridlines. It feels like software, not a spreadsheet."
                    />
                    <FeatureItem 
                        icon={Database} 
                        title="Master Logic Register" 
                        description="A hidden 'Engine Room' consolidates 140+ control points into a single data string for easy COO portfolio-level reporting."
                    />
                    <FeatureItem 
                        icon={Lock} 
                        title="Unit Isolation" 
                        description="1-File-1-Branch architecture ensures that Mumbai staff can never see or edit Delhi's safety and personnel data."
                    />
                </div>
            </div>
        </section>

        {/* THE FINAL BUILD CTA */}
        <section className="py-24 md:py-48">
            <div className="container px-4 md:px-6 text-center space-y-12">
                <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-black font-headline uppercase italic text-primary-text tracking-tighter">Institutional Integrity</h3>
                    <p className="text-xl md:text-2xl text-secondary-text italic font-medium leading-relaxed max-w-2xl mx-auto">
                        Ready to deploy the clinical standard for multi-unit control? Get the V2.18 Executive Build now.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-24 px-16 bg-accent text-accent-foreground font-black uppercase italic text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all rounded-[2rem]"
                    >
                        <Download className="mr-4 w-8 h-8" />
                        Download Final V2.18
                    </Button>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em]">One-Time Build • 100% Offline • Lifetime Control</p>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
