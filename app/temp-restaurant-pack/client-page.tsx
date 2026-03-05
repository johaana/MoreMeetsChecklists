
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
import { Download, ShieldCheck, FileSpreadsheet, CheckCircle, ArrowRight } from 'lucide-react';

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  const totalTasks = pack.checklists.reduce((acc, c) => acc + c.tasks.length, 0);

  return (
    <section className="py-20 bg-alternate-background">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest font-black text-[10px]">Technical Sandbox v2.1</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text italic uppercase tracking-tighter">
              Restaurant Pack Prototype
            </h1>
            <p className="text-xl text-secondary-text italic max-w-2xl mx-auto">
              Experimenting with the "Simple, Stable, Sellable" Excel structure. This download contains the full restaurant data in our new minimalist governance format.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <ShieldCheck className="w-5 h-5" /> 2.1 Logic Check
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-secondary-text">
                <p>• Role Mapping Matrix (Sheet 3)</p>
                <p>• Weighted Risk Scoring (3, 2, 1)</p>
                <p>• SPOF Concentration Detection</p>
                <p>• Minimalist 5-Column Checklist</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-5 h-5" /> System Payload
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-secondary-text">
                <p>• {pack.checklists.length} Checklist Modules</p>
                <p>• {totalTasks} Technical Tasks</p>
                <p>• FSSAI / HACCP Integration</p>
                <p>• Emergency Escalation Matrix</p>
              </CardContent>
            </Card>
          </div>

          <div className="pt-10">
            <Button 
              size="lg" 
              onClick={() => handleDownload(pack, 'pack')}
              className="h-16 px-12 bg-primary text-black font-black uppercase italic text-lg shadow-2xl hover:scale-105 transition-all"
            >
              <Download className="mr-3 w-6 h-6" />
              Download Test .XLSX
            </Button>
            <p className="mt-4 text-[10px] text-white/20 uppercase font-black tracking-widest">Version 2.1 Governance Standard • Audit-Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
}
