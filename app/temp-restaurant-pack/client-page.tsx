
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadMaster } from './download-master';
import { 
    Download, 
    ShieldCheck,
    History,
    Zap,
    BarChart3,
    Calendar,
    ArrowRight,
    Search,
    Activity,
    Lock
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';

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
                            V2.6 ON-DEMAND REPORTING BUILD
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">Governance.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Permanent history meets real-time intelligence. Choose a date range on the dashboard and see compliance scores instantly.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download V2.6 Governance Ledger <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Includes Date-Range Filters & Multi-Location Branch Registry</p>
                </div>
            </div>
        </section>

        {/* GOVERNANCE FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">High-Gravity Control</h2>
                    <p className="text-secondary-text italic font-medium">Engineered for the demands of multi-unit ownership.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4">
                        <BarChart3 className="h-10 w-10 text-accent" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Window-Based Reporting</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The dashboard is live. Set a "Start Date" and "End Date" to see exactly how your team performed in February vs March. No manual math required.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4">
                        <Search className="h-10 w-10 text-primary" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Monthly Drill-Down</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Active filters allow you to isolate a specific month, person, or branch. Audit trails remain permanent and searchable forever.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4">
                        <ShieldCheck className="h-10 w-10 text-primary" />
                        <h3 className="font-black uppercase tracking-widest text-sm">The "Strict Status" Engine</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">All tasks stay PENDING or turn OVERDUE if the date passes. They only flip to GREEN COMPLETED when a human signs off. Pure accountability.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* CLINICAL DATA FLOW */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Clinical Ledger Sequence</h2>
                    <p className="text-secondary-text italic font-medium">Optimized for speed of entry and depth of audit.</p>
                </div>
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                        {[
                            { step: "01", label: "Entry Date", sub: "Shift Anchor" },
                            { step: "02", label: "Branch", sub: "Location Link" },
                            { step: "03", label: "Personnel", sub: "Human Owner" },
                            { step: "04", label: "Date Done", sub: "The Trigger" },
                            { step: "05", label: "Auto Status", sub: "Digital Proof" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-black text-xs">{item.step}</div>
                                <p className="font-bold text-xs uppercase tracking-widest">{item.label}</p>
                                <p className="text-[10px] text-muted-foreground italic">{item.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
