
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
                            V4.2 ENTERPRISE CONTINUITY
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Operational <br/> <span className="text-primary">System.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        A high-performance governance suite with multi-branch identity, facility matrix, and phased rollout support.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download Enterprise ROCS v4.2 <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <div className="flex flex-wrap justify-center items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
                        <span className="flex items-center gap-1.5 text-primary"><Target className="w-3 h-3"/> Branch Identity</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><LayoutGrid className="w-3 h-3"/> Facility Matrix</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><ShieldCheck className="w-3 h-3"/> Phased Rollout</span>
                    </div>
                </div>
            </div>
        </section>

        {/* OS FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Multi-Branch Governance</h2>
                    <p className="text-secondary-text italic font-medium max-w-xl mx-auto">One system to manage the entire group. Every row is an audit-ready record of truth.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Target className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Identity Anchors</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Auto-filling Branch Names and "Actioned By (Full Name)" fields turn standard logs into legal-grade operational evidence.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <LayoutGrid className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Facility Switchboard</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Toggle specific areas (Bar, Pool, Valet) ON/OFF for each branch independently. Protected compliance scores that stay honest.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <ShieldCheck className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Audit Authority</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Digital watermarking and slim-line navigation create a professional document pedigree that commands respect during inspections.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
