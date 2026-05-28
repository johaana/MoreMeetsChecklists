'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    AlertTriangle, 
    CheckCircle2, 
    ArrowRight, 
    ShieldCheck, 
    Lock, 
    History, 
    Activity, 
    Smartphone,
    FileSpreadsheet,
    Users,
    ClipboardCheck,
    Cpu,
    Target,
    Image as ImageIcon,
    Camera,
    Settings2,
    Maximize2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ManualSection = ({ title, badge, children, className, id }: { title: string, badge?: string, children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("space-y-8 py-12 border-b border-zinc-100 last:border-0", className)}>
        <div className="space-y-2">
            {badge && <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-4 py-1 uppercase font-black tracking-widest text-[9px] italic">{badge}</Badge>}
            <h2 className="text-2xl md:text-4xl font-black font-headline italic uppercase tracking-tighter text-zinc-950">{title}</h2>
        </div>
        <div className="space-y-6">
            {children}
        </div>
    </section>
);

const StepItem = ({ number, title, description }: { number: number, title: string, description: string }) => (
    <div className="flex gap-6 group">
        <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-lg shadow-lg shrink-0 group-hover:bg-emerald-500 transition-colors">{number}</div>
        <div className="space-y-1">
            <h4 className="text-lg font-black uppercase italic tracking-tighter text-zinc-950">{title}</h4>
            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">{description}</p>
        </div>
    </div>
);

export default function DeployGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0B0F14]">
      <SiteHeader forceTheme="dark" />
      
      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 pb-12 border-b border-zinc-100">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-6 py-2 uppercase font-black tracking-widest text-[10px] italic">Institutional Deployment Hub</Badge>
            <h1 className="text-4xl md:text-7xl font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-[0.9]">
                Sovereign Engine <br/><span className="text-emerald-500">Deployment Manual</span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl italic font-medium max-w-2xl mx-auto pt-4 leading-tight">
              A comprehensive guide to activating audit trails, visual standards, and administrative controls.
            </p>
          </div>

          {/* SECTION A — CRITICAL WARNING */}
          <section className="p-8 md:p-12 bg-red-50 rounded-[2.5rem] border border-red-200 space-y-8 shadow-sm relative overflow-hidden">
                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-red-600">
                        <AlertTriangle className="w-6 h-6" />
                        <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter font-headline">SECTION A — CRITICAL WARNING</h3>
                    </div>
                    <p className="text-lg md:text-xl font-black text-zinc-950 uppercase italic leading-none">🚫 Excel Mode Will NOT Work</p>
                </div>
                
                <div className="space-y-6 text-zinc-700">
                    <p className="font-bold italic text-base leading-relaxed">
                        Automation scripts do NOT run inside standard Excel (.XLSX) mode. You MUST perform this conversion first:
                    </p>
                    <div className="p-6 bg-white border-l-4 border-red-500 rounded-r-xl shadow-inner space-y-4">
                        <p className="font-black text-zinc-950 text-lg uppercase italic">👉 Click File → Save as Google Sheets</p>
                        <p className="text-sm font-bold text-zinc-400 italic uppercase tracking-widest">Only after this step: Scripts will run, timestamps will appear, and the engine will activate.</p>
                    </div>
                </div>
          </section>

          {/* SECTION B — INSTALLATION STEPS */}
          <ManualSection title="INSTALLATION STEPS" badge="SECTION B">
            <div className="grid gap-10">
                <StepItem 
                    number={1} 
                    title="Download File" 
                    description="Download the provided Excel (.xlsx) file to your local machine." 
                />
                <StepItem 
                    number={2} 
                    title="Upload to Google Drive" 
                    description="Upload the file to your institution's Google Drive repository." 
                />
                <StepItem 
                    number={3} 
                    title="Open File" 
                    description="Open the uploaded file in Google Drive to enter the preview mode." 
                />
                <StepItem 
                    number={4} 
                    title="Convert to Google Sheets (MANDATORY)" 
                    description="Click File → Save as Google Sheets. A new tab will open; this is your LIVE system. Close the old tab." 
                />
                <StepItem 
                    number={5} 
                    title="Open Apps Script" 
                    description="In the new file, go to Extensions → Apps Script. This opens the automation engine." 
                />
                <StepItem 
                    number={6} 
                    title="Clear Existing Code" 
                    description="Delete everything in the editor. Leave it completely blank." 
                />
                <StepItem 
                    number={7} 
                    title="Paste System Code" 
                    description="Copy the code from the SETUP_GUIDE sheet in your workbook and paste it into the editor." 
                />
                <StepItem 
                    number={8} 
                    title="Save Script" 
                    description="Click the 💾 Save button. Name the project: 'Sovereign Audit Engine'." 
                />
                <StepItem 
                    number={9} 
                    title="Run Script" 
                    description="Click ▶️ Run. Google will ask for permissions; select your account and click 'Allow' to activate." 
                />
                <StepItem 
                    number={10} 
                    title="Return to Sheet" 
                    description="Go back to your Google Sheets tab. The deployment is now complete." 
                />
            </div>
          </ManualSection>

          {/* NEW: SECTION C — EVIDENCE & REFERENCE LAYER */}
          <ManualSection title="THE EVIDENCE LAYER" badge="SECTION C">
            <div className="space-y-8">
                <p className="text-zinc-500 font-bold italic leading-relaxed">
                    The Sovereign system includes two high-gravity columns to capture institutional memory and verify execution.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                        <div className="flex items-center gap-3 text-emerald-600">
                            <Target className="w-5 h-5" />
                            <h4 className="font-black uppercase italic tracking-tighter">Column K: PROOF</h4>
                        </div>
                        <p className="text-sm text-zinc-500 font-medium italic">
                            Used by teams to optionally paste Drive links, photo links, or maintenance proof. This turns "Done" into "Verifiable."
                        </p>
                    </div>
                    <div className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 space-y-4">
                        <div className="flex items-center gap-3 text-blue-600">
                            <ImageIcon className="w-5 h-5" />
                            <h4 className="font-black uppercase italic tracking-tighter">Column L: REFERENCE</h4>
                        </div>
                        <p className="text-sm text-zinc-500 font-medium italic">
                            Used by managers to place "Ideal Standard" images. Staff can compare the expected benchmark against their actual work.
                        </p>
                    </div>
                </div>
            </div>
          </ManualSection>

          {/* NEW: SECTION D — PHOTO EVIDENCE PROTOCOL */}
          <ManualSection title="HOW TO ADD PHOTO PROOF" badge="SECTION D">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <ImageIcon className="w-5 h-5 text-zinc-400" />
                        <h4 className="font-black uppercase italic tracking-tighter">Desktop Instructions</h4>
                    </div>
                    <ul className="space-y-4 text-sm font-bold italic text-zinc-500">
                        <li className="flex items-start gap-3"><span className="text-zinc-950 font-black">1.</span> Click the PROOF / EVIDENCE cell.</li>
                        <li className="flex items-start gap-3"><span className="text-zinc-950 font-black">2.</span> Paste a Google Drive image link.</li>
                        <li className="flex items-start gap-3"><span className="text-zinc-950 font-black">3.</span> OR: Go to Insert → Image → Image in Cell.</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Camera className="w-5 h-5 text-emerald-500" />
                        <h4 className="font-black uppercase italic tracking-tighter">Mobile App Instructions</h4>
                    </div>
                    <ul className="space-y-4 text-sm font-bold italic text-zinc-500">
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-black">1.</span> Tap the PROOF / EVIDENCE cell.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-black">2.</span> Tap the [+] icon at the top right.</li>
                        <li className="flex items-start gap-3"><span className="text-emerald-500 font-black">3.</span> Tap Image → From Camera or Gallery.</li>
                    </ul>
                </div>
            </div>
          </ManualSection>

          {/* REFINED: SECTION F — ADMIN PROTECTION */}
          <ManualSection title="OPTIONAL ADMIN CONTROLS" badge="SECTION E">
            <div className="space-y-8">
                <p className="text-zinc-500 font-bold italic leading-relaxed">
                    Most teams should start by operating the sheet normally. Once trained, use these native Google Sheets tools to harden the grid:
                </p>
                
                <div className="grid gap-6">
                    {/* Visual Stability */}
                    <div className="p-8 bg-zinc-950 text-white rounded-[2rem] space-y-6">
                        <div className="flex items-center gap-3 text-emerald-500">
                            <Maximize2 className="w-5 h-5" />
                            <h4 className="text-lg font-black uppercase italic tracking-tighter">VISUAL STABILITY (FREEZE)</h4>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">01. FREEZE HEADERS</p>
                                <p className="text-sm font-bold italic text-white/70">View → Freeze → 3 Rows. Keeps instructions visible while scrolling.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">02. FREEZE TASKS</p>
                                <p className="text-sm font-bold italic text-white/70">View → Freeze → Up to Column C. Keeps task names visible while scrolling right.</p>
                            </div>
                        </div>
                    </div>

                    {/* Logic Hardening */}
                    <div className="p-8 bg-zinc-50 border border-zinc-200 rounded-[2rem] space-y-6">
                        <div className="flex items-center gap-3 text-zinc-950">
                            <Lock className="w-5 h-5" />
                            <h4 className="text-lg font-black uppercase italic tracking-tighter">LOGIC HARDENING (PROTECT)</h4>
                        </div>
                        <div className="space-y-4">
                            <p className="text-sm font-bold italic text-zinc-500">Go to Data → Protect sheets and ranges to lock the following:</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 bg-white border border-zinc-100 rounded-xl">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">RECOMMENDED LOCKS</p>
                                    <p className="text-xs font-bold text-zinc-400 mt-1 italic">Columns A, D, G, J (Formulas & Timestamps)</p>
                                </div>
                                <div className="p-4 bg-white border border-red-100 rounded-xl">
                                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest">⚠️ NEVER PROTECT</p>
                                    <p className="text-xs font-bold text-zinc-400 mt-1 italic">Columns E, F, K (Done By, Verified By, Proof)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </ManualSection>

          {/* SECTION G — SUPPORT */}
          <div className="pt-20 text-center border-t border-zinc-100">
            <div className="max-w-2xl mx-auto space-y-8">
                <h3 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-950 font-headline">SECTION G — SUPPORT</h3>
                <p className="text-zinc-500 font-bold italic text-lg">If you require assistance with setup or institutional deployment, please contact the MoreMeets™ support team.</p>
                <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-zinc-950 text-white font-black uppercase italic tracking-widest shadow-xl hover:bg-emerald-500 transition-all border-none">
                    <Link href="/contact">Initiate Support Protocol</Link>
                </Button>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
