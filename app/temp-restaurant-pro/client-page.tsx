
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
    Lock
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center space-y-10">
                <div className="space-y-6">
                    <div className="flex justify-center">
                        <Badge variant="outline" className="text-accent border-accent/30 py-1 px-5 uppercase tracking-[0.5em] font-black text-[10px] bg-accent/5 rounded-full backdrop-blur-sm">
                            EXPERIMENTAL PRO BUILD
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Software <br/> <span className="text-primary">Experience.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        Testing the Tile-Based Console, Full-Width Headers, and Distributed Fingerprinting.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadPro(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download ROCS v4.2 PRO <Download className="ml-2 h-6 w-6" />
                    </Button>
                </div>
            </div>
        </section>

        {/* PRO DESIGN PILLARS */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <LayoutGrid className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Tile Console</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Replaces lists with a grid of "App Tiles" for a premium mobile-software feel upon first open.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Target className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Chassis Header</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The header bar now spans the entire active workspace, "containing" the grid and removing the infinite-excel feel.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Lock className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm text-primary">Hidden DRM</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Distributed identity fragments hidden in remote cells ensure that copies remain traceable even if visible watermarks are deleted.</p>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
