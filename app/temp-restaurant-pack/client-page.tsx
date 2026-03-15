
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
    Lock,
    Clock,
    Target
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
                            V2.7 TOTAL GOVERNANCE BUILD
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">Ledger.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The ultimate "Best-of-All" build. Smart status logic that separates Today from the Future, ensuring your audit trail is 100% surgical.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download V2.7 Governance Suite <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <span className="flex items-center gap-1.5 text-primary"><ShieldCheck className="w-3 h-3"/> Active Filters</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><Clock className="w-3 h-3"/> Smart History</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><Target className="w-3 h-3"/> Date-Range Reporting</span>
                    </div>
                </div>
            </div>
        </section>

        {/* GOVERNANCE FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Zero-Friction Accountability</h2>
                    <p className="text-secondary-text italic font-medium">Why V2.7 is the definitive Operational Standard.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <BarChart3 className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Smart Status Engine</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The ledger knows the date. If a task was due yesterday and is empty, it turns 🔴 OVERDUE. If it's for next week, it stays ⏳ DUE SHORTLY. No reporting skew.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Search className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Motivation Design</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">High-priority compliance points are tinted in subtle seafoam green. Staff recognize these as "Brand Defenders" that protect the business license.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <History className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Window-Based Reporting</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The Dashboard allows the owner to choose any window (e.g. Month of March) and get an instant compliance score for that period alone.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* CLINICAL DATA FLOW */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Audit Ledger Sequence</h2>
                    <p className="text-secondary-text italic font-medium">The most efficient layout for rapid entry and 100% auditable proof.</p>
                </div>
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                        {[
                            { step: "01", label: "Entry Date", sub: "Shift Anchor" },
                            { step: "02", label: "Branch", sub: "Location Hook" },
                            { step: "03", label: "Personnel", sub: "Human Owner" },
                            { step: "04", label: "Date Done", sub: "The Trigger" },
                            { step: "05", label: "Auto Status", sub: "Clinical Proof" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                                <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">{item.step}</div>
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
