
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
    TableProperties
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
                            V2.9 THE MATRIX BUILD
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">Database.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The ultimate 365-day audit trail. Pre-populated matrix across all branches. Modular facility toggles. Action-first UI sequence.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download V2.9 Operational Matrix <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        <span className="flex items-center gap-1.5 text-primary"><LayoutGrid className="w-3 h-3"/> Modular Toggles</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><TableProperties className="w-3 h-3"/> 365-Day Matrix</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><BarChart3 className="w-3 h-3"/> Trend Analytics</span>
                    </div>
                </div>
            </div>
        </section>

        {/* MATRIX FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Unified Command Infrastructure</h2>
                    <p className="text-secondary-text italic font-medium max-w-xl mx-auto">One file. Every branch. Every shift. Total governance.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Zap className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Department Toggles</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">No Bar? No Problem. Use the Switchboard on Page 1 to turn off modules. The 365-day ledger automatically updates every relevant row to "N/A," keeping your audit clean.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Activity className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Multi-Unit Matrix</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The system clones the full task payload for every branch in your network. Audit Bandra and Colaba from one master dashboard without switching files.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <BarChart3 className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Trend Analytics</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Includes pre-configured data tables designed for Pivot Charts. Visualize compliance trends month-over-month to spot operational drift before it causes failure.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* ACTION SEQUENCE */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Surgical Data Flow</h2>
                    <p className="text-secondary-text italic font-medium">Engineered for shift speed. Reference notes are siloed to the far right.</p>
                </div>
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                        {[
                            { step: "01", label: "Date & Branch", sub: "The Identity" },
                            { step: "02", label: "Operational Task", sub: "The Mission" },
                            { step: "03", label: "Date Done", sub: "The Trigger" },
                            { step: "04", label: "Live Status", sub: "The Audit" },
                            { step: "05", label: "Reference Data", sub: "The Notes" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                                <div className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">{item.step}</div>
                                <p className="font-bold text-xs uppercase tracking-widest text-primary-text">{item.label}</p>
                                <p className="text-[10px] text-muted-foreground italic leading-tight">{item.sub}</p>
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
