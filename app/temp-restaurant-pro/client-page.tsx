
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadPro } from './download-pro';
import { 
    Download, 
    ShieldCheck,
    LayoutGrid,
    Target,
    Zap,
    Lock,
    Maximize2,
    Crown
} from 'lucide-react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card } from '@/components/ui/card';

export default function TempRestaurantProClient({ pack }: { pack: PremiumPack }) {
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
                            SOVEREIGN PRO BUILD V4.3
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Symmetric <br/> <span className="text-primary">Command.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Testing the Zero-Clipping Symmetric Grid, App-Like Navigation Tiles, and Triple-Chamber Motivation Dashboard.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadPro(pack)} 
                        className="h-20 px-16 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-xl shadow-[0_0_50px_-5px_rgba(46,184,107,0.5)] rounded-2xl"
                    >
                        Download Sovereign PRO v4.3 <Download className="ml-3 h-7 w-7" />
                    </Button>
                    <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">Requires Excel 2016+ or Google Sheets</p>
                </div>
            </div>
        </section>

        {/* SOVEREIGN DESIGN PILLARS */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Maximize2 className="h-32 w-32" />
                        </div>
                        <Maximize2 className="h-12 w-12 text-accent group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Zero-Clipping Grid</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">Calculated 40-unit column widths for primary labels ensure that even long-tail operational strings are perfectly legible without horizontal scrolling.</p>
                        </div>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <LayoutGrid className="h-32 w-32" />
                        </div>
                        <LayoutGrid className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Symmetric Tiles</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">Navigation is now an immersive 3x3 grid of "App Tiles" with 50pt row heights and high-contrast green "active" borders for a premium software feel.</p>
                        </div>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-10 space-y-6 hover:border-primary/30 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Crown className="h-32 w-32" />
                        </div>
                        <Crown className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                        <div className="space-y-2">
                            <h3 className="font-black uppercase tracking-widest text-sm text-primary">Triple Chamber</h3>
                            <p className="text-xs text-secondary-text leading-relaxed italic">The motivation dashboard is isolated into three distinct governance chambers: Glory (Individual), Momentum (Unit), and Vitals (Governance).</p>
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
