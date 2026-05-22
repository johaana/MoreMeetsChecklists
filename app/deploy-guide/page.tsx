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
    Info
} from 'lucide-react';

const STEPS = [
  {
    title: "1. The Conversion Check",
    desc: "Open your file in Google Sheets. Notice the green '.XLSX' badge next to the filename? This means the file is in 'Preview' mode. We need to unlock it. Click 'File' at the top left.",
    img: "https://i.postimg.cc/F1tmz8ym/Screenshot-2026-05-23-034010.png"
  },
  {
    title: "2. Activating the Engine",
    desc: "In the File menu, select 'Save as Google Sheets'. This is the most important step. It creates a native version that supports our Audit Heartbeat.",
    img: "https://i.postimg.cc/Th8G1FVf/Screenshot-2026-05-23-034053.png"
  },
  {
    title: "3. Switch to the New File",
    desc: "A new browser tab will open automatically. Look at the top—the '.XLSX' badge is now GONE. This is your working Master Engine. Close the old tab to avoid any confusion.",
    img: "https://i.postimg.cc/dDMv3p2J/Screenshot-2026-05-23-034117.png"
  },
  {
    title: "4. Access the Engine Room",
    desc: "In your new file, click on 'Extensions' in the top menu, then select 'Apps Script'.",
    img: "https://i.postimg.cc/QVLsCwQX/Screenshot-2026-05-23-034358.png"
  },
  {
    title: "5. Clear the Editor",
    desc: "The script editor will open in a new tab. You will see some placeholder text like 'function myFunction()'. Highlight it all and delete it so the window is completely blank.",
    img: "https://i.postimg.cc/dDMv3p2t/Screenshot-2026-05-23-034427.png"
  },
  {
    title: "6. Deploy the Logic",
    desc: "Copy the code provided at the bottom of your 'SETUP_GUIDE' sheet and paste it here. It should look like the screen shown.",
    img: "https://i.postimg.cc/kDr9GzQM/Screenshot-2026-05-23-034456.png"
  },
  {
    title: "7. Save the Brain",
    desc: "Click the 'Floppy Disk' icon at the top to save. You can name the project 'Sovereign Audit Engine'.",
    img: "https://i.postimg.cc/Th8G1FVP/Screenshot-2026-05-23-034519.png"
  },
  {
    title: "8. Open the Heartbeat Dashboard",
    desc: "On the far left sidebar, click the small 'Clock' icon. This is where we tell Google when to run the script.",
    img: "https://i.postimg.cc/CdyY5XG1/Screenshot-2026-05-23-034638.png"
  },
  {
    title: "9. Add the Trigger",
    desc: "At the bottom right of the screen, click the big blue '+ Add Trigger' button.",
    img: "https://i.postimg.cc/23pmyMQ3/Screenshot-2026-05-23-034722.png"
  },
  {
    title: "10. Technical Configuration",
    desc: "Ensure the settings match exactly: Function: 'onEdit', Source: 'From spreadsheet', Event: 'On edit'.",
    img: "https://i.postimg.cc/2j1ZqWQv/Screenshot-2026-05-23-034857.png"
  },
  {
    title: "11. Save the Connection",
    desc: "Click the 'Save' button in the bottom right of the popup window.",
    img: "https://i.postimg.cc/qBN3tKs6/Screenshot-2026-05-23-034915.png"
  },
  {
    title: "12. Start Authorization",
    desc: "Google will ask for permission to let this script work. Click the 'Choose an account' button (select your own email).",
    img: "https://i.postimg.cc/G34yBDFy/Screenshot-2026-05-23-034934.png"
  },
  {
    title: "13. Identity Match",
    desc: "Click on your Gmail account to proceed with the security setup.",
    img: "https://i.postimg.cc/jqD7WfHf/Screenshot-2026-05-23-034956.png"
  },
  {
    title: "14. The 'Advanced' Hurdle",
    desc: "Google may show a warning: 'Google hasn't verified this app.' This is normal for private scripts. Click the 'Advanced' link on the left.",
    img: "https://i.postimg.cc/nVXDsm4q/Screenshot-2026-05-23-035028.png"
  },
  {
    title: "15. Safe Passage",
    desc: "A small link will appear at the bottom. Click 'Go to Sovereign Audit Engine (unsafe)' to continue.",
    img: "https://i.postimg.cc/gcxZwhVv/Screenshot-2026-05-23-035048.png"
  },
  {
    title: "16. Confirm Authority",
    desc: "On the next screen, scroll down and click the blue 'Allow' button. This gives the system permission to create your audit trail.",
    img: "https://i.postimg.cc/jqD7WfHH/Screenshot-2026-05-23-035105.png"
  },
  {
    title: "17. Permission Granted",
    desc: "You have now successfully linked the engine to your spreadsheet. You will see a final confirmation screen.",
    img: "https://i.postimg.cc/2j1ZqWQ7/Screenshot-2026-05-23-035125.png"
  },
  {
    title: "18. Active Trigger Status",
    desc: "You should now see your trigger listed in the dashboard. This means the system is watching for edits.",
    img: "https://i.postimg.cc/9XD749dP/Screenshot-2026-05-23-035255.png"
  },
  {
    title: "19. Initial Verification",
    desc: "Return to your 'DAILY_TASKS' tab. Find any row and enter your initials into the 'DONE BY' column.",
    img: "https://i.postimg.cc/T2KDybV9/Screenshot-2026-05-23-035319.png"
  },
  {
    title: "20. The Success Signal",
    desc: "Wait 2-4 seconds. A small popup should appear in the bottom right corner of your sheet: '1 audit records secured'.",
    img: "https://i.postimg.cc/wx1mtNXk/Screenshot-2026-05-23-035412.png"
  },
  {
    title: "21. Heartbeat Active",
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
              <div key={i} className="grid md:grid-cols-[320px,1fr] gap-12 items-start group">
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
                  <img src={step.img} alt={step.title} className="w-full h-auto rounded-[1.5rem]" />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
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
             <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="h-16 px-10 rounded-xl bg-zinc-900 text-white font-black uppercase italic">
                    <Link href="/library">Explore Systems hub</Link>
                </Button>
                <Button asChild variant="outline" className="h-16 px-10 rounded-xl border-zinc-300 font-black uppercase italic">
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
