
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
    TrendingUp,
    LayoutGrid,
    ArrowRight,
    Activity,
    Lock,
    Target,
    BarChart3,
    TableProperties,
    BookOpen,
    MessageSquareQuote,
    AlertCircle,
    CheckCircle2
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
                            V4.0 MARKET READY EDITION
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">Software.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The definitive Restaurant Operations Control System (ROCS). A high-performance governance database with interval-aware scheduling and ROI intelligence.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download ROCS v4.0 System <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        <span className="flex items-center gap-1.5 text-primary"><TrendingUp className="w-3 h-3"/> ROI Calculator</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><History className="w-3 h-3"/> Shift Handovers</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><Lock className="w-3 h-3"/> Normalized Engine</span>
                    </div>
                </div>
            </div>
        </section>

        {/* OS FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Engineered Infrastructure</h2>
                    <p className="text-secondary-text italic font-medium max-w-xl mx-auto">The "Software Illusion" hides 26,000 rows of data behind a clinical management interface.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <TableProperties className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Normalized Architecture</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Task definitions are stored once in a hidden library. Update a SOP in one place, and the entire 365-day year updates instantly. No database fatigue.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Activity className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Liability Tracking</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Integrated Incident Log with 'Estimated Loss' calculation. Quantify the financial impact of operational failures and protect your P&L.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <TrendingUp className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">ROI Intelligence</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">A dedicated calculator sheet helps owners see the annual savings generated by reducing operational leakage. The system pays for itself.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* WORKFLOW SEQUENCE */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">The Market-Ready Standard</h2>
                    <p className="text-secondary-text italic font-medium">Enterprise grade. One-time purchase. Lifetime value.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">01</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Staff Workspace</h4>
                                <p className="text-sm text-secondary-text italic">Dynamic 'Today's Mission' filters tasks by risk. Staff interacts with only one column to maintain speed.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">02</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Audit Verification</h4>
                                <p className="text-sm text-secondary-text italic">High-risk tasks require manager sign-off. Built-in compliance meter turns Red if critical steps are ignored.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">03</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Reset Logic</h4>
                                <p className="text-sm text-secondary-text italic">The system isn't static. Change the Start Date in Setup, and the entire matrix regenerates for the new year.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="bg-black rounded-[1.9rem] p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="text-primary w-6 h-6" />
                                <h3 className="font-black uppercase tracking-widest text-xs">V4.0 Capabilities</h3>
                            </div>
                            <ul className="space-y-3 text-xs text-secondary-text italic font-medium">
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> ROI Intelligence Module</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Incident & Liability Log</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Shift Handover Bridge</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Compound Key Engine</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> 140+ Technical SOPs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
