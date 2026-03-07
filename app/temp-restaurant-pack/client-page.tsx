
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownloadV2 } from './download-v2';
import { Download, BarChart3, Lock, Users, Settings2, ShieldCheck, Zap, Globe } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon className="h-6 w-6" />
        </div>
        <div className="space-y-1">
            <h4 className="font-bold text-primary-text text-[13px] uppercase tracking-wider">{title}</h4>
            <p className="text-sm text-secondary-text leading-relaxed italic">{description}</p>
        </div>
    </div>
);

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-6 text-center">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Architecture: Executive Governance v2.12</Badge>
            <h1 className="text-4xl md:text-7xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[1.05]">
              The Executive <br/> <span className="text-primary">Governance Engine</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto border-l-2 border-primary/20 pl-8">
              A command-level framework designed for high-gravity operations. This build includes <strong>Active Formulas</strong>, <strong>Trainer’s Notes</strong>, and <strong>Input-Yellow UX</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem 
                icon={Zap} 
                title="Active Formulas" 
                description="The .xlsx file is alive. Completion percentages, risk scores, and overdue alerts update the second a manager types a date."
            />
            <FeatureItem 
                icon={Users} 
                title="Trainer’s Coaching Notes" 
                description="Column N provides specific 'How-to' coaching tips for every task, turning a simple checklist into a powerful staff training tool."
            />
            <FeatureItem 
                icon={Settings2} 
                title="Input-Yellow UX" 
                description="Yellow-shaded cells act as a visual heatmap, guiding managers exactly where to type without needing technical training."
            />
            <FeatureItem 
                icon={BarChart3} 
                title="Dynamic Risk IQ" 
                description="The Dashboard uses INDEX/MATCH logic to automatically name your most overloaded staff member based on current task allocation."
            />
            <FeatureItem 
                icon={Lock} 
                title="Portfolio Mode" 
                description="Toggle between Single-Unit and Multi-Unit modes to activate regional benchmarking and God-view leadership dashboards."
            />
            <FeatureItem 
                icon={ShieldCheck} 
                title="Clinical Hardening" 
                description="Forced centering and padding ensure that zero text is truncated, even on complex mobile Excel viewers."
            />
          </div>

          <div className="pt-12">
            <div className="p-8 md:p-16 rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl relative overflow-hidden group text-center space-y-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-4xl font-black font-headline uppercase italic text-primary-text">Final Review: V2.12 Build</h3>
                    <p className="text-lg text-secondary-text italic font-medium leading-relaxed">
                        Download the hardened build below. This version contains the full formula suite and the expanded 'Trainer Notes' Column.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownloadV2(pack)}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                    >
                        <Download className="mr-3 w-7 h-7" />
                        Download Executive Build
                    </Button>
                    
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-40">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-black tracking-widest">Active Formulas Verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-black tracking-widest">Coaching Notes Integrated</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center gap-2 opacity-20 text-center">
                <p className="text-[10px] text-white uppercase font-black tracking-widest">Build Signature: 2.12.EXECUTIVE.RESTAURANT.DEMO</p>
                <p className="text-[9px] text-white italic max-w-lg">Formula Objects Enabled. Column N (Trainer Notes) Activated. Input-Yellow UX Standard applied.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
