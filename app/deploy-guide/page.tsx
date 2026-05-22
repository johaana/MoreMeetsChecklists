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
    Target
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
                Audit Engine <br/><span className="text-emerald-500">Onboarding Manual</span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl italic font-medium max-w-2xl mx-auto pt-4 leading-tight">
              Sovereign Tier Deployment Guide for MoreMeets™ Audit Infrastructure.
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
                        Apps Script does NOT run inside Excel (.XLSX) mode. You MUST perform this conversion first:
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

          {/* SECTION C — HOW TO TEST */}
          <ManualSection title="VERIFY SYSTEM HEARTBEAT" badge="SECTION C">
            <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 space-y-6">
                <p className="font-black text-zinc-950 uppercase italic tracking-tighter text-lg">Testing the execution logic:</p>
                <div className="space-y-4 text-sm font-bold italic text-zinc-500">
                    <p>1. Go to the <span className="text-zinc-950 font-black underline">DAILY_TASKS</span> sheet.</p>
                    <p>2. Enter your initials in any <span className="text-emerald-600 font-black">DONE BY</span> column cell.</p>
                    <p>3. Wait 2–4 seconds. A timestamp MUST appear in <span className="text-zinc-950 font-black">Column J (STAMP)</span>.</p>
                    <p>4. Watch for the success signal: <span className="text-zinc-950 font-black">“1 audit record secured”</span>.</p>
                </div>
            </div>
          </ManualSection>

          {/* SECTION D — AUDIT HISTORY */}
          <ManualSection title="AUDIT HISTORY ACCESS" badge="SECTION D">
            <p className="text-zinc-500 font-bold italic leading-relaxed">
                The full audit trail is stored in a secure, hidden layer. To view:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 bg-white border border-zinc-100 rounded-xl space-y-2">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">HOW TO ACCESS</p>
                    <p className="text-sm font-black text-zinc-950 uppercase italic">Right-click any tab → Unhide → _RECORDS_VAULT</p>
                </div>
                <div className="p-6 bg-white border border-zinc-100 rounded-xl space-y-2">
                    <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none">GOVERNANCE RULE</p>
                    <p className="text-sm font-black text-zinc-950 uppercase italic">Do NOT edit vault manually. It is append-only history.</p>
                </div>
            </div>
          </ManualSection>

          {/* SECTION E — SAFE USAGE */}
          <ManualSection title="SAFE USAGE RULES" badge="SECTION E">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest">SAFE TO DO</p>
                    <ul className="space-y-3">
                        {["Edit task text", "Add new rows", "Duplicate existing rows"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-black text-zinc-950 uppercase italic">
                                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <p className="text-xs font-black text-red-600 uppercase tracking-widest">PROHIBITED ACTIONS</p>
                    <ul className="space-y-3">
                        {["Delete formulas (Col G)", "Overwrite full rows", "Delete hidden sheets", "Bulk sort entire sheet"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-black text-zinc-400 uppercase italic">
                                <AlertTriangle className="w-4 h-4 text-red-300" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </ManualSection>

          {/* SECTION F — ADMIN PROTECTION */}
          <ManualSection title="ADMIN PROTECTION GUIDE" badge="SECTION F">
            <div className="space-y-8">
                <p className="text-zinc-500 font-bold italic leading-relaxed">Recommended structural hardening for administrators:</p>
                <div className="grid gap-6">
                    <div className="p-8 bg-zinc-950 text-white rounded-[2rem] space-y-6">
                        <div className="grid sm:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">01. FREEZE</p>
                                <p className="text-xs font-bold italic text-zinc-400">Freeze headers for scroll stability.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">02. PROTECT</p>
                                <p className="text-xs font-bold italic text-zinc-400">Lock Column G and hidden vault sheets.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">03. INPUTS</p>
                                <p className="text-xs font-bold italic text-zinc-400">Keep only DONE BY / VERIFIED BY columns editable.</p>
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
