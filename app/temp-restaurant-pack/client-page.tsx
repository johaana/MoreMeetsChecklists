
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
import { Download, ShieldCheck, BarChart3, Lock, Users, LayoutDashboard, Settings2, Globe } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
            <h4 className="font-bold text-primary-text text-sm uppercase tracking-tight">{title}</h4>
            <p className="text-xs text-secondary-text leading-relaxed italic">{description}</p>
        </div>
    </div>
);

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  return (
    <section className="py-20 bg-background min-h-screen">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-12 text-center">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Governance Intelligence v2.12</Badge>
            <h1 className="text-4xl md:text-7xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-[1.05]">
              Portfolio Governance <br/> <span className="text-primary">Engine</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary-text italic max-w-3xl mx-auto border-l-2 border-primary/20 pl-8">
              A command-level framework designed for multi-unit operators. This system separates <strong>Structural Authority</strong> from <strong>Human Resource Load</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            <FeatureItem 
                icon={Settings2} 
                title="Unit Configuration Center" 
                description="The Scope Toggle: Turn entire modules (Pool, Bar, Spa) on/off. The dashboard adapts instantly to your specific unit profile."
            />
            <FeatureItem 
                icon={BarChart3} 
                title="Portfolio Leaderboard" 
                description="Benchmarking Section: Compare this unit's compliance score against the regional average and the top-performing facility."
            />
            <FeatureItem 
                icon={Users} 
                title="Safe-Mapping Logic" 
                description="Human-Structural Separation: If a staff member resigns, the system flags 'VACANT' alerts in every relevant module automatically."
            />
            <FeatureItem 
                icon={Lock} 
                title="Executive Lockdown" 
                description="Formula Protection: The instructions now guide you on how to lock the intelligence layers from staff while keeping checklists editable."
            />
          </div>

          <div className="pt-12 space-y-8">
            <div className="p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-2xl relative overflow-hidden group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl font-black font-headline uppercase italic text-primary-text">Ready for Deployment?</h3>
                    <p className="text-secondary-text italic font-medium">Download the experimental V2.12 build. This version includes the McKinsey-style in-cell bar charts and the Cluster Manager scope logic.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button 
                            size="lg" 
                            onClick={() => handleDownload(pack, 'pack')}
                            className="h-16 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all"
                        >
                            <Download className="mr-3 w-6 h-6" />
                            Download v2.12 Build
                        </Button>
                    </div>
                </div>
            </div>
            
            <div className="space-y-2 opacity-40">
                <p className="text-[10px] text-white uppercase font-black tracking-widest">Build ID: 2.12.PORTFOLIO.MASTER</p>
                <p className="text-[9px] text-white italic">Clinical Integrity Verified: All VLOOKUP ranges expanded to include Backup Personnel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
