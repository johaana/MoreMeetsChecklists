'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    CheckCircle2, 
    ArrowRight, 
    ShieldCheck, 
    AlertTriangle, 
    ShieldAlert,
    Smartphone,
    FileSpreadsheet,
    Play,
    Save,
    Trash2,
    FileCode
} from 'lucide-react';

const IMAGES = {
    DRIVE_UPLOAD: "https://i.postimg.cc/F1tmz8ym/Screenshot-2026-05-23-034010.png",
    EXCEL_PREVIEW: "https://i.postimg.cc/Th8G1FVf/Screenshot-2026-05-23-034053.png",
    CONVERTED_SHEET: "https://i.postimg.cc/dDMv3p2J/Screenshot-2026-05-23-034117.png",
    OPEN_SCRIPT: "https://i.postimg.cc/QVLsCwQX/Screenshot-2026-05-23-034358.png",
    EMPTY_EDITOR: "https://i.postimg.cc/dDMv3p2t/Screenshot-2026-05-23-034427.png",
    PASTED_CODE: "https://i.postimg.cc/kDr9GzQM/Screenshot-2026-05-23-034456.png",
    SAVE_SCRIPT: "https://i.postimg.cc/Th8G1FVP/Screenshot-2026-05-23-034519.png",
    ALLOW_SCREEN: "https://i.postimg.cc/jqD7WfHH/Screenshot-2026-05-23-035105.png",
    SUCCESS_POPUP: "https://i.postimg.cc/wx1mtNXk/Screenshot-2026-05-23-035412.png",
    FINAL_STAMP: "https://i.postimg.cc/MZnQcB75/Screenshot-2026-05-23-035444.png"
};

export default function DeployGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader forceTheme="dark" />
      
      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-6 py-2 uppercase font-black tracking-widest text-[10px]">Institutional Deployment Hub</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-tight">
                Institutional <span className="text-emerald-500">Deployment Guide</span>
            </h1>
            <p className="text-zinc-500 text-lg italic font-medium max-w-2xl mx-auto">
              Follow these steps to activate your Audit Heartbeat and unlock live team reporting.
            </p>
          </div>

          {/* SECTION A — VERY IMPORTANT */}
          <div className="space-y-8" id="section-a">
            <div className="p-8 bg-red-50 rounded-[2rem] border border-red-200 space-y-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-32 h-32 text-red-600" />
                </div>
                <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">SECTION A — VERY IMPORTANT</h3>
                </div>
                <div className="space-y-4 relative z-10">
                    <p className="text-xl font-bold text-zinc-900 leading-tight">
                        🚫 Excel mode will NOT run Apps Script
                    </p>
                    <p className="text-zinc-700 font-medium italic text-base leading-relaxed">
                        After downloading and opening your file in Google Sheets, you MUST perform this conversion:
                    </p>
                    <div className="p-4 bg-white/50 border border-red-100 rounded-xl font-black text-red-600 text-lg">
                        👉 File → Save as Google Sheets
                    </div>
                </div>
                <div className="space-y-3 pt-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-400">VISUAL PROOF: CONVERTED FILE (NO .XLSX BADGE)</p>
                    <div className="rounded-2xl overflow-hidden border border-red-100 shadow-xl bg-white p-2">
                        <img src={IMAGES.CONVERTED_SHEET} alt="Live Google Sheet" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </div>
          </div>

          {/* SECTION B — SIMPLE SETUP */}
          <div className="space-y-16" id="section-b">
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge className="bg-zinc-900 text-white rounded-full px-6 uppercase font-black tracking-widest text-[10px]">SECTION B</Badge>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">SIMPLE SETUP</h2>
            </div>

            <div className="space-y-32">
                {/* 1. Download */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl">1</div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Download File</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Download the Excel (.xlsx) file provided.</p>
                        </div>
                    </div>
                    <div className="p-12 bg-white rounded-3xl border border-zinc-100 shadow-sm flex items-center justify-center">
                        <FileSpreadsheet className="w-24 h-24 text-zinc-200" />
                    </div>
                </div>

                {/* 2. Upload */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl">2</div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Upload to Drive</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Upload the downloaded file into your Google Drive.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.DRIVE_UPLOAD} alt="Drive Upload" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 4. Convert */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl">4</div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Convert to Sheets</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Open the file and click File → Save as Google Sheets. A new tab opens. This is your LIVE file.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.EXCEL_PREVIEW} alt="Save as Sheets" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 5. Open Apps Script */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl">5</div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Open Apps Script</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">In the new tab, go to Extensions → Apps Script to open the engine room.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.OPEN_SCRIPT} alt="Open Script" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 6. Delete Code */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-red-500 text-white flex items-center justify-center font-black italic text-xl"><Trash2 /></div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Delete Old Code</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Select all existing placeholder text and delete it. The window must be blank.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.EMPTY_EDITOR} alt="Clear Editor" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 7. Paste Code */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black italic text-xl"><FileCode /></div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Paste Master Code</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Copy the code from your SETUP_GUIDE sheet and paste it here.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.PASTED_CODE} alt="Paste Code" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 8. Save */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl"><Save /></div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Save the Engine</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Click the Save icon. You can name the project "Sovereign Audit Engine".</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.SAVE_SCRIPT} alt="Save Script" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 9. Run & Authorize */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-primary text-black flex items-center justify-center font-black italic text-xl"><Play /></div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Run & Authorize</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Click Run. Follow the prompts: Advanced → Go to Project (unsafe) → Allow.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.ALLOW_SCREEN} alt="Authorize" className="w-full h-auto rounded-xl" />
                    </div>
                </div>

                {/* 10. Success */}
                <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group">
                    <div className="space-y-6 sticky top-32">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black italic text-xl"><CheckCircle2 /></div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">System Active</h4>
                            <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">Return to your Google Sheet tab. The audit heartbeat is now operational.</p>
                        </div>
                    </div>
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                        <img src={IMAGES.FINAL_STAMP} alt="Live Sheet" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </div>
          </div>

          {/* SECTION C — HOW TO TEST */}
          <div className="space-y-12 py-20 border-t border-zinc-200" id="section-c">
            <div className="text-center space-y-4">
                <Badge className="bg-emerald-500 text-black uppercase font-black px-6 tracking-widest text-[10px] rounded-full py-1">SECTION C</Badge>
                <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter text-zinc-900">HOW TO TEST SYSTEM</h2>
            </div>
            
            <div className="bg-white rounded-[2.5rem] border border-zinc-200 p-8 md:p-12 space-y-12 shadow-sm">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <Smartphone className="text-primary w-6 h-6" />
                        <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">Perform the Heartbeat Test</h4>
                    </div>
                    <p className="text-zinc-600 font-medium italic">Go to the <span className="text-zinc-950 font-black">DAILY_TASKS</span> sheet. Enter your initials into any <span className="text-zinc-950 font-black">DONE BY</span> cell.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">1. WATCH FOR SUCCESS SIGNAL</p>
                        <img src={IMAGES.SUCCESS_POPUP} alt="Success Popup" className="rounded-xl border border-zinc-100 shadow-lg" />
                    </div>
                    <div className="space-y-4">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">2. VERIFY AUDIT STAMP</p>
                        <img src={IMAGES.FINAL_STAMP} alt="Timestamp Audit" className="rounded-xl border border-zinc-100 shadow-lg" />
                    </div>
                </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-20 text-center">
            <Button asChild variant="outline" className="h-16 px-10 rounded-xl border-zinc-300 font-black uppercase italic tracking-widest bg-white hover:bg-zinc-50 transition-colors">
                <Link href="/library">Return to Systems Hub</Link>
            </Button>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
