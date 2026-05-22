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
    ShieldAlert,
    Info,
    Smartphone,
    MousePointer2,
    UploadCloud,
    FileSpreadsheet
} from 'lucide-react';

const STEPS = [
  {
    title: "1. Upload to Google Drive",
    desc: "First, you need to get your file into the cloud. Open Google Drive in your browser. Click the big '+ New' button at the top left and upload the Excel (.xlsx) file you just downloaded.",
    img: "https://i.postimg.cc/F1tmz8ym/Screenshot-2026-05-23-034010.png"
  },
  {
    title: "2. The Conversion Rule",
    desc: "Open the file you just uploaded. You'll see a green '.XLSX' badge at the top. This means the file is in 'Preview' mode and automation is disabled. Click 'File' at the top left, then select 'Save as Google Sheets'.",
    img: "https://i.postimg.cc/Th8G1FVf/Screenshot-2026-05-23-034053.png"
  },
  {
    title: "3. Identify the Live File",
    desc: "A new browser tab will open automatically. Look at the top—the green badge is GONE. This is your active Master Engine. Close the old tab immediately to avoid any confusion.",
    img: "https://i.postimg.cc/dDMv3p2J/Screenshot-2026-05-23-034117.png"
  },
  {
    title: "4. Access the Engine Room",
    desc: "In your new 'No Badge' file, click on 'Extensions' in the top menu, then select 'Apps Script'. This opens the brain of your system.",
    img: "https://i.postimg.cc/QVLsCwQX/Screenshot-2026-05-23-034358.png"
  },
  {
    title: "5. Clear the Editor",
    desc: "The script editor will open in a new window. You will see some default text like 'function myFunction()'. Highlight it all and delete it so the entire window is completely blank.",
    img: "https://i.postimg.cc/dDMv3p2t/Screenshot-2026-05-23-034427.png"
  },
  {
    title: "6. Deploy the Sovereign Logic",
    desc: "Copy the code provided at the bottom of your 'SETUP_GUIDE' sheet in the workbook and paste it into this window. It should look exactly like the screen shown here.",
    img: "https://i.postimg.cc/kDr9GzQM/Screenshot-2026-05-23-034456.png"
  },
  {
    title: "7. Save the Brain",
    desc: "Click the 'Floppy Disk' (Save) icon at the top. If prompted for a project name, you can call it 'Sovereign Audit Engine'.",
    img: "https://i.postimg.cc/Th8G1FVP/Screenshot-2026-05-23-034519.png"
  },
  {
    title: "8. Open the Heartbeat Dashboard",
    desc: "On the far left sidebar, click the small 'Clock' icon. This is the Triggers menu, where we tell Google when to run your audit script.",
    img: "https://i.postimg.cc/CdyY5XG1/Screenshot-2026-05-23-034638.png"
  },
  {
    title: "9. Add the Connection",
    desc: "At the bottom right corner of the screen, click the big blue '+ Add Trigger' button.",
    img: "https://i.postimg.cc/23pmyMQ3/Screenshot-2026-05-23-034722.png"
  },
  {
    title: "10. Technical Configuration",
    desc: "Ensure the settings match this image exactly: Function: 'onEdit', Source: 'From spreadsheet', Event: 'On edit'. Leave others as they are.",
    img: "https://i.postimg.cc/2j1ZqWQv/Screenshot-2026-05-23-034857.png"
  },
  {
    title: "11. Secure the Trigger",
    desc: "Click the blue 'Save' button at the bottom right of the popup window.",
    img: "https://i.postimg.cc/qBN3tKs6/Screenshot-2026-05-23-034915.png"
  },
  {
    title: "12. Start Authorization",
    desc: "Google needs your permission to allow this script to work. A window will appear. Click on your own Gmail account name.",
    img: "https://i.postimg.cc/G34yBDFy/Screenshot-2026-05-23-034934.png"
  },
  {
    title: "13. Identity Match",
    desc: "Click on your account again to confirm you are the owner and want to proceed.",
    img: "https://i.postimg.cc/jqD7WfHf/Screenshot-2026-05-23-034956.png"
  },
  {
    title: "14. The 'Advanced' Hurdle",
    desc: "Google may show a warning: 'Google hasn't verified this app.' This is normal for private scripts. Click the small 'Advanced' link on the left.",
    img: "https://i.postimg.cc/nVXDsm4q/Screenshot-2026-05-23-035028.png"
  },
  {
    title: "15. Safe Passage",
    desc: "A small link will appear at the very bottom. Click 'Go to Sovereign Audit Engine (unsafe)' to continue setup.",
    img: "https://i.postimg.cc/gcxZwhVv/Screenshot-2026-05-23-035048.png"
  },
  {
    title: "16. Confirm Authority",
    desc: "On the final screen, scroll down and click the blue 'Allow' button. This gives the system permission to create your permanent audit trail.",
    img: "https://i.postimg.cc/jqD7WfHH/Screenshot-2026-05-23-035105.png"
  },
  {
    title: "17. Permission Granted",
    desc: "You have now successfully linked the automation to your sheet. You will see a final confirmation screen.",
    img: "https://i.postimg.cc/2j1ZqWQ7/Screenshot-2026-05-23-035125.png"
  },
  {
    title: "18. Active Status",
    desc: "You should now see your trigger listed in the dashboard. This means the system is live and watching for every edit your team makes.",
    img: "https://i.postimg.cc/9XD749dP/Screenshot-2026-05-23-035255.png"
  },
  {
    title: "19. Test the Heartbeat",
    desc: "Return to your 'DAILY_TASKS' tab in the spreadsheet. Find any row and type your initials into the 'DONE BY' column.",
    img: "https://i.postimg.cc/T2KDybV9/Screenshot-2026-05-23-035319.png"
  },
  {
    title: "20. The Success Signal",
    desc: "Wait 2-4 seconds. A small popup should appear in the bottom right corner of your screen: '1 audit records secured'.",
    img: "https://i.postimg.cc/wx1mtNXk/Screenshot-2026-05-23-035412.png"
  },
  {
    title: "21. Audit Secured",
    desc: "Look at Column J (STAMP). A permanent, tamper-proof timestamp has appeared. Your institutional audit trail is now live.",
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
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-6 py-2 uppercase font-black tracking-widest text-[10px]">Institutional Deployment Hub</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-tight">
              Activating your <span className="text-emerald-500">Sovereign Engine</span>
            </h1>
            <p className="text-zinc-500 text-lg italic font-medium max-w-2xl mx-auto">
              A step-by-step visual walkthrough to install your audit heartbeat and unlock live team reporting.
            </p>
          </div>

          {/* Critical Conversion Warning */}
          <div className="p-8 bg-red-50 rounded-[2rem] border border-red-200 space-y-4 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldAlert className="w-32 h-32 text-red-600" />
             </div>
             <div className="flex items-center gap-3 text-red-600">
                <AlertTriangle className="w-6 h-6" />
                <h3 className="text-xl font-black uppercase italic tracking-tighter">THE MANDATORY CONVERSION RULE</h3>
             </div>
             <p className="text-zinc-700 font-bold italic text-base leading-relaxed relative z-10">
                Google automation <span className="text-red-600">CANNOT RUN</span> while the file is an Excel (.xlsx) preview. You must save it as a native Google Sheet (Step 2) before you can install the engine.
             </p>
          </div>

          {/* The Visual Scroll */}
          <div className="space-y-40 py-10">
            {STEPS.map((step, i) => (
              <div key={i} className="grid md:grid-cols-[340px,1fr] gap-12 items-start group">
                <div className="space-y-6 sticky top-32">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-2xl shadow-xl group-hover:bg-emerald-500 transition-colors">
                    {i+1}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter text-zinc-900 leading-tight">{step.title}</h3>
                    <p className="text-sm text-zinc-500 font-bold leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
                <div className="relative rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2">
                  <img 
                    src={step.img} 
                    alt={step.title} 
                    className="w-full h-auto rounded-[1.5rem] border border-zinc-100" 
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Support Bridge */}
          <Card className="p-12 border-emerald-500/20 bg-emerald-50/50 rounded-[3rem] text-center space-y-8 shadow-inner">
             <div className="flex flex-col items-center gap-3">
                <ShieldCheck className="w-16 h-16 text-emerald-500" />
                <h2 className="text-3xl font-black uppercase italic tracking-tighter text-zinc-900">Deployment Successful</h2>
             </div>
             <p className="text-zinc-500 font-medium italic max-w-xl mx-auto">
                Once Column J is populating with timestamps, your institutional audit trail is secure. Your team can now operate live from their smartphones.
             </p>
             <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="h-16 px-10 rounded-xl bg-zinc-900 text-white font-black uppercase italic tracking-widest">
                    <Link href="/library">Explore Systems hub</Link>
                </Button>
                <Button asChild variant="outline" className="h-16 px-10 rounded-xl border-zinc-300 font-black uppercase italic tracking-widest bg-white">
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
