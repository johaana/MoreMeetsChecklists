
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
                            V2.9 SURGICAL GOVERNANCE BUILD
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[0.9] drop-shadow-2xl">
                        Action <br/> <span className="text-primary">Ledger.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary-text italic max-w-2xl mx-auto font-medium leading-relaxed border-l-2 border-primary/20 pl-8">
                        "Action-First" design. Reference notes moved to the right to clear the eye-line for daily staff. High-gravity audit history pre-populated for the full year.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <Button 
                        size="lg"
                        onClick={() => handleDownloadMaster(pack)} 
                        className="h-16 px-12 bg-primary text-black hover:scale-105 transition-all font-black uppercase italic tracking-widest text-lg shadow-[0_0_40px_-5px_rgba(46,184,107,0.4)]"
                    >
                        Download V2.9 Operational Suite <Download className="ml-2 h-6 w-6" />
                    </Button>
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground uppercase tracking-widest font-bold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                        <span className="flex items-center gap-1.5 text-primary"><ShieldCheck className="w-3 h-3"/> Action-First UI</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-accent"><History className="w-3 h-3"/> 365-Day Log</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="flex items-center gap-1.5 text-white/60"><Lock className="w-3 h-3"/> Audit Ready</span>
                    </div>
                </div>
            </div>
        </section>

        {/* GOVERNANCE FEATURES */}
        <section className="py-24 bg-alternate-background">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Engineered for Survival</h2>
                    <p className="text-secondary-text italic font-medium">Built to survive the reality of a busy kitchen environment.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Zap className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Action-First Layout</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Reference data (Notes & Consequences) is moved to the far right. Staff see only the Task and the Input Zone on their screen, maximizing speed and reducing friction.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Activity className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Full-Cycle Matrix</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">The ledger is pre-populated for every branch across 365 days. No copy-pasting, no daily setup. Open the sheet, filter for Today, and execute.</p>
                    </Card>
                    <Card className="bg-black/40 border-white/5 p-8 space-y-4 hover:border-primary/20 transition-colors group">
                        <Lock className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="font-black uppercase tracking-widest text-sm">Governance Lock</h3>
                        <p className="text-xs text-secondary-text leading-relaxed italic">Structural integrity is maintained by keeping the task list consistent. Changes are handled via a yearly refresh, ensuring the audit trail remains surgical and unbroken.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* ACTION SEQUENCE */}
        <section className="py-24 border-t border-white/5">
            <div className="container px-4 md:px-6 max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black font-headline uppercase italic">Surgical Action Sequence</h2>
                    <p className="text-secondary-text italic font-medium">Optimized for rapid entry. Reference data is hidden to the right until needed.</p>
                </div>
                
                <div className="relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 hidden md:block" />
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 relative z-10">
                        {[
                            { step: "01", label: "Task", sub: "The Mission" },
                            { step: "02", label: "Name", sub: "The Human" },
                            { step: "03", label: "Date Done", sub: "The Trigger" },
                            { step: "04", label: "Live Status", sub: "Confirmation" },
                            { step: "05", label: "Issue", sub: "Problem Log" }
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
