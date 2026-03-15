
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
    LayoutGrid,
    ArrowRight,
    Activity,
    Lock,
    Target,
    BarChart3,
    TableProperties,
    BookOpen,
    MessageSquareQuote,
    AlertCircle
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
                            V4.0 THE OPERATIONAL OS
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Command <br/> <span className="text-primary">Center.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Beyond spreadsheets. A normalized operational database with software-style interface, shift handovers, and critical verification layers.
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
                        <span className="flex items-center gap-1.5 text-primary"><MessageSquareQuote className="w-3 h-3"/> Shift Handovers</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><AlertCircle className="w-3 h-3"/> Incident Tracking</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><Lock className="w-3 h-3"/> Hidden Database</span>
                    </div>
                </div>
            </div>
        </section>

        {/* OS FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Engineered for Human Speed</h2>
                    <p className="text-secondary-text italic font-medium max-w-xl mx-auto">The "Software Illusion" makes industrial governance simple enough for a busy shift.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <TableProperties className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Normalized Task Library</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Tasks are defined once in a hidden library. Update a rule in one place, and the entire 365-day year is updated instantly. No more repetitive data entry.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Activity className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Verification Layer</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">High-risk tasks (like gas or fire checks) trigger a "Manager Verification" flag. Staff completes the work; the manager verifies the evidence. True audit integrity.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <History className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Continuity Handover</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Problems don't disappear between shifts. The Handover Log ensures issues like "fluctuating fridge temps" are logged and carried forward until resolved.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* WORKFLOW SEQUENCE */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">The Governance Lifecycle</h2>
                    <p className="text-secondary-text italic font-medium">Capture everything. Lose nothing.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">01</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Today's Mission</h4>
                                <p className="text-sm text-secondary-text italic">Staff only sees Today's relevant tasks. High-risk items are automatically moved to the top of the list.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">02</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Liability Shield</h4>
                                <p className="text-sm text-secondary-text italic">Every incident is logged with an Estimated Loss value, giving the owner immediate visibility into operational leakage.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-black text-xs shrink-0 mt-1">03</div>
                            <div>
                                <h4 className="font-bold text-primary-text uppercase tracking-tight">Executive Pulse</h4>
                                <p className="text-sm text-secondary-text italic">The Dashboard turns Red if a High-Risk task is missed, acting as an industrial early-warning system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-1 rounded-[2rem] bg-gradient-to-br from-primary/20 to-accent/20">
                        <div className="bg-black rounded-[1.9rem] p-8 space-y-6">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-primary w-6 h-6" />
                                <h3 className="font-black uppercase tracking-widest text-xs">V4.0 Payload</h3>
                            </div>
                            <ul className="space-y-3 text-xs text-secondary-text italic font-medium">
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Normalized Task Library</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> 365-Day Master Ledger</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Incident & Loss Tracker</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Shift Handover Bridge</li>
                                <li className="flex items-center gap-2"><ArrowRight className="w-3 h-3 text-primary"/> Verification & Audit Layer</li>
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
