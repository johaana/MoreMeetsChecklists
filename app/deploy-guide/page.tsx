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
    FileCode,
    Clock,
    UserCheck,
    Lock
} from 'lucide-react';

const IMAGES = {
    DRIVE_UPLOAD: "https://i.postimg.cc/F1tmz8ym/Screenshot-2026-05-23-034010.png",
    EMPTY_EDITOR: "https://i.postimg.cc/dDMv3p2t/Screenshot-2026-05-23-034427.png",
    OPEN_TRIGGERS: "https://i.postimg.cc/CdyY5XG1/Screenshot-2026-05-23-034638.png",
    ADD_TRIGGER: "https://i.postimg.cc/23pmyMQ3/Screenshot-2026-05-23-034722.png",
    CONFIG_TRIGGER: "https://i.postimg.cc/2j1ZqWQv/Screenshot-2026-05-23-034857.png",
    CHOOSE_ACCOUNT: "https://i.postimg.cc/qBN3tKs6/Screenshot-2026-05-23-034915.png",
    UNVERIFIED_APP: "https://i.postimg.cc/G34yBDFy/Screenshot-2026-05-23-034934.png",
    ADVANCED_LINK: "https://i.postimg.cc/jqD7WfHf/Screenshot-2026-05-23-034956.png",
    ALLOW_PERMISSIONS: "https://i.postimg.cc/2j1ZqWQ7/Screenshot-2026-05-23-035125.png",
    TRIGGER_LIST: "https://i.postimg.cc/9XD749dP/Screenshot-2026-05-23-035255.png",
    SUCCESS_POPUP: "https://i.postimg.cc/wx1mtNXk/Screenshot-2026-05-23-035412.png"
};

const StepCard = ({ number, title, description, image }: { number: number, title: string, description: string, image?: string }) => (
    <div className="grid md:grid-cols-[300px,1fr] gap-12 items-start group py-20 border-b border-zinc-100 last:border-0">
        <div className="space-y-6 sticky top-32">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-black italic text-xl shadow-lg">{number}</div>
            <div className="space-y-2">
                <h4 className="text-xl font-black uppercase italic tracking-tighter text-zinc-950">{title}</h4>
                <p className="text-sm text-zinc-500 font-bold leading-relaxed italic" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
        {image && (
            <div className="rounded-[2rem] overflow-hidden border border-zinc-200 shadow-2xl bg-white p-2 transition-transform duration-700 group-hover:scale-[1.01]">
                <img src={image} alt={title} className="w-full h-auto rounded-xl" />
            </div>
        )}
    </div>
);

export default function DeployGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <SiteHeader forceTheme="dark" />
      
      <main className="flex-1 py-20 px-6">
        <div className="container mx-auto max-w-5xl space-y-16">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50 px-6 py-2 uppercase font-black tracking-widest text-[10px]">Institutional Deployment Hub</Badge>
            <h1 className="text-4xl md:text-6xl font-black font-headline italic uppercase tracking-tighter text-zinc-900 leading-tight">
                Institutional <span className="text-emerald-500">Deployment Guide</span>
            </h1>
            <p className="text-zinc-500 text-lg italic font-medium max-w-2xl mx-auto">
              Follow these visual steps to activate your Audit Engine and secure your operational records.
            </p>
          </div>

          {/* SECTION A — CONVERSION */}
          <div className="space-y-8" id="section-a">
            <div className="p-8 bg-red-50 rounded-[2rem] border border-red-200 space-y-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <ShieldAlert className="w-32 h-32 text-red-600" />
                </div>
                <div className="flex items-center gap-3 text-red-600">
                    <AlertTriangle className="w-6 h-6" />
                    <h3 className="text-2xl font-black uppercase italic tracking-tighter">SECTION A — MANDATORY CONVERSION</h3>
                </div>
                <div className="space-y-4 relative z-10">
                    <p className="text-xl font-bold text-zinc-900 leading-tight">
                        🚫 Excel mode (.xlsx) will NOT run the Audit Engine.
                    </p>
                    <p className="text-zinc-700 font-medium italic text-base leading-relaxed">
                        After uploading to Google Drive, you MUST convert the file:
                    </p>
                    <div className="p-4 bg-white/50 border border-red-100 rounded-xl font-black text-red-600 text-lg shadow-inner">
                        👉 File → Save as Google Sheets
                    </div>
                </div>
            </div>
          </div>

          {/* SECTION B — INSTALLATION */}
          <div className="space-y-8">
            <div className="flex flex-col items-center gap-4 text-center">
                <Badge className="bg-zinc-900 text-white rounded-full px-6 uppercase font-black tracking-widest text-[10px]">SECTION B</Badge>
                <h2 className="text-3xl font-black uppercase italic tracking-tighter">STEP-BY-STEP INSTALLATION</h2>
            </div>

            <div className="space-y-0">
                <StepCard 
                    number={1} 
                    title="Upload to Drive" 
                    description="Upload the downloaded Excel file into your Google Drive." 
                    image={IMAGES.DRIVE_UPLOAD} 
                />
                
                <StepCard 
                    number={2} 
                    title="Save as Google Sheets" 
                    description="Open the file and click <b>File -> Save as Google Sheets</b>. Close the old tab. Only use the <b>NEW</b> file that opens." 
                />

                <StepCard 
                    number={3} 
                    title="Open Script Editor" 
                    description="In the new file, go to <b>Extensions -> Apps Script</b>." 
                />

                <StepCard 
                    number={4} 
                    title="Clear the Editor" 
                    description="Delete all existing placeholder text until the window is completely blank." 
                    image={IMAGES.EMPTY_EDITOR} 
                />

                <StepCard 
                    number={5} 
                    title="Paste Master Code" 
                    description="Copy the code provided in your <b>SETUP_GUIDE</b> sheet and paste it here. Click the <b>Save</b> (floppy disk) icon." 
                />

                <StepCard 
                    number={6} 
                    title="Open Triggers" 
                    description="Click the <b>Clock icon</b> (Triggers) on the left sidebar to start the automation setup." 
                    image={IMAGES.OPEN_TRIGGERS} 
                />

                <StepCard 
                    number={7} 
                    title="Add New Trigger" 
                    description="Click the blue <b>+ Add Trigger</b> button at the bottom right." 
                    image={IMAGES.ADD_TRIGGER} 
                />

                <StepCard 
                    number={8} 
                    title="Configure Event" 
                    description="Ensure settings match: <br/>• Function: <b>onEdit</b> <br/>• Source: <b>From spreadsheet</b> <br/>• Event: <b>On edit</b>" 
                    image={IMAGES.CONFIG_TRIGGER} 
                />

                <StepCard 
                    number={9} 
                    title="Choose Account" 
                    description="Select your Google account when the permission window appears." 
                    image={IMAGES.CHOOSE_ACCOUNT} 
                />

                <StepCard 
                    number={10} 
                    title="Bypass Security Warning" 
                    description="Google will show a warning for private scripts. Click <b>Advanced</b> to show hidden options." 
                    image={IMAGES.UNVERIFIED_APP} 
                />

                <StepCard 
                    number={11} 
                    title="Confirm Safe Access" 
                    description="Click the link at the bottom that says <b>Go to... (unsafe)</b> to continue." 
                    image={IMAGES.ADVANCED_LINK} 
                />

                <StepCard 
                    number={12} 
                    title="Final Authorization" 
                    description="Click <b>Allow</b> to give the Audit Engine permission to record timestamps." 
                    image={IMAGES.ALLOW_PERMISSIONS} 
                />

                <StepCard 
                    number={13} 
                    title="Verify Active Status" 
                    description="The trigger should now appear in your list. The automation is now live." 
                    image={IMAGES.TRIGGER_LIST} 
                />

                <StepCard 
                    number={14} 
                    title="Perform Heartbeat Test" 
                    description="Go to <b>DAILY_TASKS</b>. Enter your initials in any <b>DONE BY</b> cell. Wait 2 seconds for the success signal." 
                    image={IMAGES.SUCCESS_POPUP} 
                />
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="pt-20 text-center border-t border-zinc-200">
            <div className="max-w-2xl mx-auto space-y-8">
                <p className="text-zinc-500 font-bold italic">The system is now operational. You can share the file with your team to begin live execution tracking.</p>
                <Button asChild size="lg" className="h-16 px-12 rounded-xl bg-emerald-500 text-black font-black uppercase italic tracking-widest shadow-xl">
                    <Link href="/library">Return to Systems Hub</Link>
                </Button>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
