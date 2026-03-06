
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
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
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Architecture: Governance v2.12</Badge>
            <h1 className="text-4xl md:text-7xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[1.05]">
              The Portfolio <br/> <span className="text-primary">Governance Engine</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto border-l-2 border-primary/20 pl-8">
              A command-level framework designed for multi-unit operators. This system separates <strong>Structural Authority</strong> from <strong>Human Resource Load</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem 
                icon={Settings2} 
                title="Module Scope Control" 
                description="Turn entire modules (Pool, Bar, Spa) on/off. The dashboard and completion math adapt instantly to your unit's specific profile."
            />
            <FeatureItem 
                icon={Users} 
                title="Personnel Register" 
                description="Safe-Mapping Logic: If a staff member leaves, simply delete their name. The system flags 'VACANT' alerts in every relevant module automatically."
            />
            <FeatureItem 
                icon={BarChart3} 
                title="In-Cell Visualizations" 
                description="McKinsey-style data bars built directly into cells using high-precision text logic. Institutional reporting without the instability of chart objects."
            />
            <FeatureItem 
                icon={Globe} 
                title="Regional Leaderboard" 
                description="Compare your current unit's governance score against regional averages and top-performing locations in real-time."
            />
            <FeatureItem 
                icon={Lock} 
                title="Role-Based Security" 
                description="Learn how to lock the intelligence layers (formulas/dashboard) from staff while keeping operational checklists 100% editable."
            />
            <FeatureItem 
                icon={Zap} 
                title="Automated Alerting" 
                description="Step-by-step instructions for setting up mobile and email alerts using Microsoft Power Automate or Google Notification Rules."
            />
          </div>

          <div className="pt-12">
            <div className="p-8 md:p-16 rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl relative overflow-hidden group text-center space-y-8">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
                    <h3 className="text-2xl md:text-4xl font-black font-headline uppercase italic text-primary-text">Ready for Deployment?</h3>
                    <p className="text-lg text-secondary-text italic font-medium leading-relaxed">
                        Download the full v2.12 build. This version includes the Personnel Aggregator, the Scope Toggle, and the Success Partner Onboarding Guide.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <Button 
                        size="lg" 
                        onClick={() => handleDownload(pack, 'pack')}
                        className="h-20 px-12 bg-primary text-black font-black uppercase italic text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
                    >
                        <Download className="mr-3 w-7 h-7" />
                        Download v2.12 Enterprise Build
                    </Button>
                    
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-40">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-black tracking-widest">Clinical Integrity Verified</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            <span className="text-[10px] uppercase font-black tracking-widest">Formula Protected</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex flex-col items-center gap-2 opacity-20 text-center">
                <p className="text-[10px] text-white uppercase font-black tracking-widest">Build Signature: 2.12.PORTFOLIO.MASTER.RELATIONAL</p>
                <p className="text-[9px] text-white italic max-w-lg">VLOOKUP ranges expanded to include Backup Personnel. INDEX/MATCH logic applied to Peak Load identification.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
