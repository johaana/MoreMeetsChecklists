
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
    MonitorCheck,
    ShieldAlert,
    Rocket,
    LayoutList,
    Gauge
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const BuildCard = ({ title, description, icon: Icon, mode, pack }: { title: string, description: string, icon: any, mode: any, pack: any }) => (
    <Card className="bg-black/40 border-white/5 hover:border-primary/30 transition-all group flex flex-col h-full">
        <CardHeader className="flex flex-row items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
            </div>
            <div className="space-y-1">
                <CardTitle className="text-sm font-black uppercase tracking-widest">{title}</CardTitle>
                <p className="text-xs text-secondary-text italic">{description}</p>
            </div>
        </CardHeader>
        <CardContent className="mt-auto">
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
                            Architectural Lab • V2.4 Logbook suite
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Logbook <br/> <span className="text-primary">Protocols.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Explore 5 "Logbook" variations of the Restaurant System. Built for history, auditability, and multi-location power.
                    </p>
                </div>
            </div>
        </section>

        {/* VARIATIONS GRID */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <BuildCard 
                        title="1. Standard Logbook"
                        description="Consultant's Baseline. Includes Cadence & Risk Maps."
                        icon={LayoutList}
                        mode="STANDARD_LOGBOOK"
                        pack={pack}
                    />
                    <BuildCard 
                        title="2. Audit-Shield Pro"
                        description="Focus: Consequences & Evidence Required."
                        icon={ShieldAlert}
                        mode="AUDIT_SHIELD"
                        pack={pack}
                    />
                    <BuildCard 
                        title="3. Multi-Unit Command"
                        description="Focus: Outlet Registry & Branch Aggregation."
                        icon={Rocket}
                        mode="MULTI_UNIT"
                        pack={pack}
                    />
                    <BuildCard 
                        title="4. Rapid Shift Entry"
                        description="Focus: Minimalist, tablet-optimized entry."
                        icon={Zap}
                        mode="RAPID_SHIFT"
                        pack={pack}
                    />
                    <BuildCard 
                        title="5. Governance Scorecard"
                        description="Focus: Compliance % & Real-time KPIs."
                        icon={Gauge}
                        mode="GOVERNANCE"
                        pack={pack}
                    />
                </div>
            </div>
        </section>

        {/* LOGIC SPECS */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Operational Ledger Protocol</h2>
                    <p className="text-secondary-text italic font-medium">These variations move from a "Status Tracker" to a "Legal Record" of work.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 text-sm">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <ArrowRight className="h-4 w-4" />
                            <span className="font-black uppercase tracking-widest">Audit Readiness</span>
                        </div>
                        <p className="text-secondary-text leading-relaxed">Unlike trackers, Logbooks create a dated history. If an inspector asks for last Tuesday's data, the Logbook provides it instantly.</p>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary">
                            <ArrowRight className="h-4 w-4" />
                            <span className="font-black uppercase tracking-widest">Enterprise Aggregation</span>
                        </div>
                        <p className="text-secondary-text leading-relaxed">By tagging entries with Location IDs, a headquarters can pull data from 50 outlets into one master dashboard via Google Sheets.</p>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
