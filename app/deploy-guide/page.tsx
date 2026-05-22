'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
    CheckCircle2, 
    ArrowRight, 
    ShieldCheck, 
    AlertTriangle, 
    Info,
    FileSpreadsheet,
    Code2,
    Clock,
    MousePointer2,
    ShieldAlert
} from 'lucide-react';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    title: "1. Convert to Native Sheets",
    desc: "Open your downloaded Excel file in Google Sheets. Go to File -> Save as Google Sheets. This is the most important step.",
    img: "https://i.postimg.cc/Th8G1FVf/Screenshot-2026-05-23-034053.png"
  },
  {
    title: "2. Verify Conversion",
    desc: "A new tab will open. Ensure there is NO '.XLSX' badge next to the filename. Close the old Excel tab.",
    img: "https://i.postimg.cc/dDMv3p2J/Screenshot-2026-05-23-034117.png"
  },
  {
    title: "3. Open Apps Script",
    desc: "In your new file, go to Extensions -> Apps Script.",
    img: "https://i.postimg.cc/QVLsCwQX/Screenshot-2026-05-23-034358.png"
  },
  {
    title: "4. The Editor",
    desc: "The script editor will open. You will see a blank space for code.",
    img: "https://i.postimg.cc/dDMv3p2t/Screenshot-2026-05-23-034427.png"
  },
  {
    title: "5. Paste the Engine Code",
    desc: "Delete any existing placeholder text. Paste the code provided in your setup guide sheet.",
    img: "https://i.postimg.cc/kDr9GzQM/Screenshot-2026-05-23-034456.png"
  },
  {
    title: "6. Save the Project",
    desc: "Click the floppy disk icon (Save) at the top. Give it a name like 'Audit Engine'.",
    img: "https://i.postimg.cc/Th8G1FVP/Screenshot-2026-05-23-034519.png"
  },
  {
    title: "7. Access Triggers",
    desc: "Click the Clock icon (Triggers) on the left sidebar.",
    img: "https://i.postimg.cc/CdyY5XG1/Screenshot-2026-05-23-034638.png"
  },
  {
    title: "8. Add New Trigger",
    desc: "Click the '+ Add Trigger' button at the bottom right.",
    img: "https://i.postimg.cc/23pmyMQ3/Screenshot-2026-05-23-034722.png"
  },
  {
    title: "9. Configure Settings",
    desc: "Set Function to 'onEdit', Source to 'From spreadsheet', and Event to 'On edit'.",
    img: "https://i.postimg.cc/2j1ZqWQv/Screenshot-2026-05-23-034857.png"
  },
  {
    title: "10. Initial Authorization",
    desc: "Click Save. Google will ask you to choose an account.",
    img: "https://i.postimg.cc/jqD7WfHf/Screenshot-2026-05-23-034956.png"
  },
  {
    title: "11. Safety Warning",
    desc: "Google may warn you the app isn't verified. This is normal for private scripts. Click 'Advanced'.",
    img: "https://i.postimg.cc/nVXDsm4q/Screenshot-2026-05-23-035028.png"
  },
  {
    title: "12. Proceed Unsafe",
    desc: "Click the link at the bottom that says 'Go to [Project Name] (unsafe)'.",
    img: "https://i.postimg.cc/jqD7WfHH/Screenshot-2026-05-23-035105.png"
  },
  {
    title: "13. Allow Access",
    desc: "Click 'Allow' to give the script permission to write to your spreadsheet.",
    img: "https://i.postimg.cc/2j1ZqWQ7/Screenshot-2026-05-23-035125.png"
  },
  {
    title: "14. Success Status",
    desc: "Your trigger is now active and listed in the dashboard.",
    img: "https://i.postimg.cc/9XD749dP/Screenshot-2026-05-23-035255.png"
  },
  {
    title: "15. Initial Testing",
    desc: "Return to your DAILY_TASKS sheet. Enter your initials in the DONE BY column.",
    img: "https://i.postimg.cc/T2KDybV9/Screenshot-2026-05-23-035319.png"
  },
  {
    title: "16. Verification Toast",
    desc: "Wait 2 seconds. A 'SUCCESS' popup should appear at the bottom right.",
    img: "https://i.postimg.cc/wx1mtNXk/Screenshot-2026-05-23-035412.png"
  },
  {
    title: "17. Heartbeat Active",
    desc: "A permanent timestamp will appear in Column J. Your audit engine is live.",
    img: "https://i.postimg.cc/MZnQcB75/Screenshot-2026-05-23-035444.png"
  }
];

export default function DeployGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader forceTheme="dark" />
      
      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-4xl space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-6 py-2 uppercase font-black tracking-widest text-[10px]">Institutional Deployment Guide</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-tight">
              Activating your <span className="text-emerald-500">Sovereign Engine</span>
            </h1>
            <p className="text-zinc-500 text-lg italic font-medium max-w-2xl mx-auto">
              Follow this visual walkthrough to install your audit heartbeat and unlock live team reporting.
            </p>
          </div>

          {/* Environmental Red Alert */}
          <div className="p-8 bg-red-50 rounded-[2rem] border border-red-200 space-y-4 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-32 h-32 text-red-600" />
             </div>
             <div className="flex items-center gap-3 text-red-600">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-xl font-black uppercase italic tracking-tighter">PHASE 0: THE CONVERSION RULE</h3>
             </div>
             <p className="text-zinc-700 font-bold italic text-base leading-relaxed relative z-10">
                Google Apps Script <span className="text-red-600">DOES NOT WORK</span> in Excel (.xlsx) preview mode. You must convert the file to a native Google Sheet before starting Step 1.
             </p>
             <div className="bg-white p-4 rounded-xl border border-red-100 flex items-center gap-4 relative z-10">
                <div className="flex-1 text-sm font-black uppercase text-zinc-400 tracking-widest">Action: File -> Save as Google Sheets</div>
                <CheckCircle2 className="w-5 h-5 text-red-300" />
             </div>
          </div>

          {/* The Visual Scroll */}
          <div className="space-y-32 py-10">
            {STEPS.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[280px,1fr] gap-12 items-start group">
                <div className="space-y-6 sticky top-32">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-2xl shadow-xl group-hover:bg-emerald-500 transition-colors">
                    {i+1}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase italic tracking-tighter text-zinc-900">{step.title}</h3>
                    <p className="text-sm text-zinc-500 font-medium leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                  <img src={step.img} alt={step.title} className="w-full h-auto rounded-[1.5rem]" />
                </div>
              </div>
            ))}
          </div>

          {/* Support Bridge */}
          <Card className="p-12 border-emerald-500/20 bg-emerald-50/50 rounded-[3rem] text-center space-y-8">
             <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="w-16 h-16 text-emerald-500" />
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-zinc-900">Deployment Successful</h2>
             </div>
             <p className="text-zinc-500 font-medium italic max-w-xl mx-auto">
                Once Column J is populating, your institutional audit trail is secure. Your team can now operate live from their smartphones.
             </p>
             <div className="pt-4">
                <Button asChild variant="outline" className="h-14 px-10 rounded-xl border-zinc-300 font-black uppercase italic">
                    <Link href="/contact">Need Technical Assistance?</Link>
                </Button>
             </div>
          </Card>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
