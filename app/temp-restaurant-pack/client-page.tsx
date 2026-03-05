
'use client';

import React from 'react';
import type { PremiumPack } from '@/lib/premium-packs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { handleDownload } from '@/lib/download';
import { Download, ShieldCheck, CheckCircle, Lock, Users } from 'lucide-react';

export default function TempRestaurantClient({ pack }: { pack: PremiumPack }) {
  const totalTasks = pack.checklists.reduce((sum, checklist) => sum + checklist.tasks.length, 0);

  return (
    <section className="py-20 bg-alternate-background min-h-screen">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-widest font-black text-[10px]">Governance Sandbox v2.1</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text italic uppercase tracking-tighter">
              Accountability Prototype
            </h1>
            <p className="text-xl text-secondary-text italic max-w-2xl mx-auto">
              Testing the "Two-Layer Role Mapping" architecture. This download separates <strong>Fixed Responsibilities</strong> from <strong>Fluid Designations</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Lock className="w-5 h-5" /> Layer 1: Structural
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-secondary-text">
                <p>• <strong>Fixed Structural Roles</strong> (Locked logic)</p>
                <p>• <strong>Dynamic Name Pulling</strong> (XLOOKUP)</p>
                <p>• No manual role typing in checklists</p>
                <p>• Automated Escalation Mapping</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-accent">
                  <Users className="w-5 h-5" /> Layer 2: Mapped
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-secondary-text">
                <p>• <strong>Editable Designations</strong> (Local titles)</p>
                <p>• <strong>Assigned Person</strong> Control Center</p>
                <p>• Single Point of Update for all sheets</p>
                <p>• Unassigned Task detection</p>
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
              Download v2.1 Framework
            </Button>
            <div className="mt-6 space-y-1">
                <p className="text-[10px] text-white/20 uppercase font-black tracking-widest">Version 2.1 Stability Patch: XLOOKUP Logic Integration</p>
                <p className="text-[9px] text-white/10 italic">Experimental Build: Verify formula performance across 30+ sheets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
