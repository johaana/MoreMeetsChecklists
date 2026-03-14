
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
    ArrowRight,
    Search,
    Clock,
    UserCircle,
    MonitorCheck
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BuildCard = ({ title, description, icon: Icon, mode, pack }: { title: string, description: string, icon: any, mode: any, pack: any }) => (
    <Card className="bg-black/40 border-white/5 hover:border-primary/30 transition-all group">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-sm font-black uppercase tracking-widest">{title}</CardTitle>
                <p className="text-xs text-secondary-text italic">{description}</p>
            </div>
        </CardHeader>
        <CardContent>
            <Button 
                onClick={() => handleDownloadV2(pack, mode)} 
                className="w-full h-12 bg-white/5 hover:bg-primary hover:text-black font-black uppercase italic text-[10px] tracking-widest border border-white/5"
            >
                Download This Version <Download className="ml-2 h-3.5 w-3.5" />
            </Button>
        </CardContent>
    </Card>
);

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
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
                            Architectural Lab • V2.3 Suite
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        The Build <br/> <span className="text-primary">Library.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Explore 5 unique architectural philosophies for the Restaurant Operational System. Each build serves a different operational priority.
                    </p>
                </div>
            </div>
        </section>

        {/* VARIATIONS GRID */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <BuildCard 
                        title="1. Executive Command"
                        description="Focus: Numerical input & software logic."
                        icon={Briefcase}
                        mode="EXECUTIVE"
                        pack={pack}
                    />
                    <BuildCard 
                        title="2. Surgical Compliance"
                        description="Focus: Risk, Consequence & FSSAI Audit."
                        icon={Siren}
                        mode="SURGICAL"
                        pack={pack}
                    />
                    <BuildCard 
                        title="3. Shift Navigator"
                        description="Focus: Chronological Timeline (Time-of-Day)."
                        icon={Clock}
                        mode="SHIFT"
                        pack={pack}
                    />
                    <BuildCard 
                        title="4. Role-Based Matrix"
                        description="Focus: Individual Persona Environments."
                        icon={UserCircle}
                        mode="ROLE"
                        pack={pack}
                    />
                    <BuildCard 
                        title="5. Governance Dashboard"
                        description="Focus: Visual Health Bars & Scorecards."
                        icon={MonitorCheck}
                        mode="DASHBOARD"
                        pack={pack}
                    />
                </div>
            </div>
        </section>

        {/* LOGIC SPECS */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Surgical Specifications</h2>
                    <p className="text-secondary-text italic font-medium">Every variation in this suite adheres to the Path B Clinical Alignment Protocol.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 text-sm">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <ArrowRight className="h-4 w-4" />
                            <span className="font-black uppercase tracking-widest">Text-Left (Readability)</span>
                        </div>
                        <p className="text-secondary-text leading-relaxed">Descriptions, steps, and coaching notes are aligned left to mirror human eye movement during rapid reading.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <ArrowRight className="h-4 w-4" />
                            <span className="font-black uppercase tracking-widest">Data-Center (Precision)</span>
                        </div>
                        <p className="text-secondary-text leading-relaxed">IDs, Codes, Status Labels, and Dates are centered to create visual "anchors" for quick data verification.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
