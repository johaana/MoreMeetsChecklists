
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadMaster } from './download-master';
import { 
    Download, 
    ShieldCheck,
    LayoutGrid,
    Target,
    Maximize2,
    Crown
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-accent border-accent/30 py-1.5 px-6 uppercase tracking-[0.5em] font-black text-[10px] bg-accent/5 rounded-full backdrop-blur-md">
                            SOVEREIGN MASTER BUILD V4.3
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Integrated <br/> <span className="text-primary">Command.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        The full Multi-Branch Data Engine meets the Symmetric Zero-Clipping interface. Standardizing 240+ control points across your entire group.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-20 px-16 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-xl shadow-[0_0_50px_-5px_rgba(46,184,107,0.5)] rounded-2xl"
                    >
                        Download Sovereign Master v4.3 <Download className="ml-3 h-7 w-7" />
                    </Button>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">Full 11-Sheet Data Engine Included</p>
                </div>
            </div>
        </section>

        {/* SOVEREIGN DESIGN PILLARS */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Target className="h-32 w-32" />
                        </div>
                        <Target className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Multi-Branch Engine</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">A single Master Excel file that controls up to 10 branches simultaneously. Independent facility toggles ensure perfect local relevance.</p>
                        </div>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Maximize2 className="h-32 w-32" />
                        </div>
                        <Maximize2 className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Zero-Clipping Grid</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">Re-engineered 6-column symmetric spine ensures that branch names and person-of-the-day records never get cut off.</p>
                        </div>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldCheck className="h-32 w-32" />
                        </div>
                        <ShieldCheck className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Audit-Ready Pedigree</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">Digital watermarks and license verification embedded into the core structure to command respect during official inspections.</p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
