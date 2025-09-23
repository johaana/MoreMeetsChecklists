
'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { premiumPacks } from '@/lib/premium-packs';
import type { PremiumPack } from '@/lib/premium-packs';
import { Logo } from '@/components/icons';
import { ArrowLeft, FileCheck2, Sparkles, Check, X } from 'lucide-react';
import { writeFile, utils, WorkSheet } from 'xlsx-js-style';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const handleDownload = (pack: PremiumPack) => {
    // This function will be updated to handle the checkout process
    // For now, it will continue to trigger the direct download
    const workbook = utils.book_new();

    const headerStyle = {
      font: { bold: true, color: { rgb: "FFFFFF" } },
      fill: { fgColor: { rgb: "0A2540" } }
    };
    
    const highPriorityColor = { rgb: "FFC7CE" }; 

    const applyStylesAndFilter = (ws: WorkSheet, data: any[][]) => {
        if(!data || data.length === 0) return;
        
        const headers = data[0];
        const priorityColIndex = headers.indexOf('Priority');
        const riskLevelColIndex = headers.indexOf('Risk Level');

        for (let R = 1; R < data.length; ++R) {
            const row = data[R];
            
            const applyHighlight = (colIndex: number, value: string) => {
                if (colIndex !== -1 && value === 'High') {
                    for(let C = 0; C < headers.length; ++C) {
                        const cellAddress = utils.encode_cell({r: R, c: C});
                        if (!ws[cellAddress]) ws[cellAddress] = { t: 's', v: row[C] };
                         ws[cellAddress].s = { fill: { fgColor: highPriorityColor } };
                    }
                }
            }
            if (priorityColIndex !== -1) {
                applyHighlight(priorityColIndex, row[priorityColIndex]);
            }
             if (riskLevelColIndex !== -1) {
                applyHighlight(riskLevelColIndex, row[riskLevelColIndex]);
            }
        }
        
        ws['!ref'] = utils.encode_range(utils.decode_range(ws['!ref'] || "A1:A1"));
        if (data.length > 1) {
            const filterRange = utils.encode_range({s: {r: 0, c: 0}, e: {r: data.length - 1, c: headers.length - 1}});
            ws['!autofilter'] = { ref: filterRange };
        }
        ws['!views'] = [{state: 'frozen', ySplit: 1}];
    };

    // Master Sheet
    const masterHeaders = [
      'Checklist', 'Department', 'Frequency', 'Role Responsible', 
      'Task ID', 'Task', 'Priority', 'Risk Level', 'Proof / Evidence', 
      'Location / Site', 'Status'
    ];
    
    const masterSheetData = pack.checklists.flatMap(checklist => 
        checklist.tasks.map(task => [
            checklist.title,
            checklist.department,
            checklist.frequency,
            checklist.role,
            task.id,
            task.description,
            task.priority,
            task.riskLevel,
            task.proof,
            task.location,
            'Pending'
        ])
    );
    
    const masterDataWithHeader = [masterHeaders, ...masterSheetData];
    const masterWorksheet = utils.aoa_to_sheet(masterDataWithHeader.map((row, r_idx) => {
        return row.map((cell) => {
            if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
            return cell;
        })
    }));
    
    applyStylesAndFilter(masterWorksheet, masterDataWithHeader);

    masterWorksheet['!cols'] = [
        { wch: 40 }, { wch: 20 }, { wch: 15 }, { wch: 20 }, { wch: 15 }, 
        { wch: 60 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 20 }, { wch: 15 },
    ];
    const masterSheetName = "Master View";
    utils.book_append_sheet(workbook, masterWorksheet, masterSheetName);

    if (workbook.Sheets[masterSheetName]) {
        workbook.Sheets[masterSheetName]['!props'] = { tabColor: { rgb: "FFC000" } };
    }

    pack.checklists.forEach(checklist => {
        const checklistHeaders = [
          'Task ID', 'Task', 'Priority', 'Risk Level', 
          'Proof / Evidence', 'Status', 'Assigned To', 'Notes'
        ];
        
        const tasksForSheet = checklist.tasks.map(task => [
          task.id,
          task.description,
          task.priority,
          task.riskLevel,
          task.proof,
          'Pending',
          '',
          ''
        ]);

        const checklistDataWithHeader = [checklistHeaders, ...tasksForSheet];
        
        const worksheet = utils.aoa_to_sheet(checklistDataWithHeader.map((row, r_idx) => {
            return row.map((cell) => {
                if (r_idx === 0) return { v: cell, t: 's', s: headerStyle };
                return cell;
            })
        }));
        
        applyStylesAndFilter(worksheet, checklistDataWithHeader);
        
        worksheet['!cols'] = [
          { wch: 15 }, { wch: 50 }, { wch: 15 }, { wch: 15 }, 
          { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }
        ];
        
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    writeFile(workbook, `${pack.title.replace(/ /g, '_')}.xlsx`);
}

const PainPoint = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-background rounded-lg p-4">
        <h4 className="font-semibold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
    </div>
);

const PainPointsSection = ({ category }: { category: string }) => {
    const content = {
        Hospitality: {
            title: "Why This Checklist Is Your New Competitive Advantage",
            points: [
                { title: "Inconsistent Guest Experience", description: "Standardize every touchpoint, from check-in to room service, ensuring every guest receives the same 5-star treatment, every time. This builds loyalty and drives positive reviews." },
                { title: "Revenue Leakage & Cost Overruns", description: "Plug financial leaks by tracking minibar consumption accurately, preventing wastage in F&B, and implementing preventative maintenance to avoid costly emergency repairs." },
                { title: "Compliance Nightmares & Safety Risks", description: "Navigate complex safety regulations with ease. Our checklists ensure you're always compliant with fire safety, food hygiene (HACCP), and security protocols, protecting you from fines and reputational damage." },
                { title: "Inefficient Operations & Staff Turnover", description: "Empower your team with clear, step-by-step SOPs. This reduces training time, minimizes errors, and creates a less stressful work environment, leading to higher staff retention." }
            ]
        },
        Corporate: {
            title: "Why This Checklist Is Your New Strategic Asset",
            points: [
                { title: "Inefficient Use of Company Resources", description: "Our facility management checklists optimize everything from energy consumption to vendor contracts, cutting operational costs and improving your bottom line." },
                { title: "Unproductive Meetings & Wasted Time", description: "Standardize your meeting prep, from board meetings to AGMs, ensuring every session is focused, productive, and achieves its objectives." },
                { title: "Failed Product Launches & Messy Events", description: "Execute flawless product launches and corporate events by managing every detail, from venue booking and AV checks to press kits and social media campaigns." },
                { title: "Poor Employee Onboarding & Early Turnover", description: "Create a structured and welcoming onboarding experience. Our checklists ensure new hires have the access, information, and support they need to become productive members of the team from day one." }
            ]
        },
        Retail: {
            title: "Why This Checklist Is Your Key to Retail Dominance",
            points: [
                { title: "Inventory Shrinkage & Theft", description: "Implement ironclad security protocols for high-value items, from dual-control vault procedures to fitting room management, directly protecting your bottom line." },
                { title: "Inconsistent Customer Experience", description: "Standardize your sales process, visual merchandising, and customer service to ensure every shopper receives the same high-quality experience, building brand loyalty." },
                { title: "Lost Sales Due to Stockouts", description: "Streamline your inventory management, from receiving and stocking to daily audits, ensuring popular items are always available and reducing lost sales opportunities." },
                { title: "Poor Staff Performance & Product Knowledge", description: "Use our checklists for regular staff training on product features, sales techniques, and operational procedures, turning your team into expert brand ambassadors." }
            ]
        },
        Healthcare: {
             title: "Why This Checklist is Critical for Patient Safety & Compliance",
             points: [
                { title: "Risk of Medication Errors", description: "Our pharmacy checklists enforce the 'Five Rights' of medication dispensing and include strict verification protocols to minimize the risk of dangerous errors and protect your patients." },
                { title: "Compliance & Audit Failures", description: "Navigate complex healthcare regulations with confidence. Our checklists for hospitals and labs ensure you are always prepared for audits from bodies like NABH, JCI, and NABL, covering everything from infection control to documentation." },
                { title: "Patient Data & Confidentiality Breaches", description: "Implement robust protocols for handling patient information, from admission to billing, ensuring HIPAA/data privacy compliance and building patient trust." },
                { title: "Operational Inefficiencies & Delays in Care", description: "Standardize critical workflows in your ER, OT, and diagnostic labs. This reduces bottlenecks, minimizes errors, and ensures patients receive timely, high-quality care." }
             ]
        },
         Education: {
             title: "Why This Checklist is Essential for a Safe & Modern Campus",
             points: [
                { title: "Student Safety & Security Risks", description: "Implement a robust safety framework covering everything from daily campus patrols and visitor verification to student dismissal and emergency drills, ensuring a secure environment for students and staff." },
                { title: "Liability & Compliance Issues", description: "Proactively manage risks by ensuring all safety equipment is functional, playgrounds are hazard-free, and emergency procedures are regularly practiced, protecting your institution from legal and financial liability." },
                { title: "Operational Chaos & Inefficiency", description: "Standardize daily operations, from opening procedures to classroom safety checks, freeing up administrative time to focus on educational outcomes rather than firefighting daily issues." },
                { title: "Negative Parent Perception", description: "Demonstrate a clear commitment to safety and organization. A well-run, secure campus builds trust and confidence with parents, a key factor in school choice and reputation." }
             ]
        },
    };

    const selected = content[category as keyof typeof content] || content.Hospitality;

    return (
        <section id="why" className="w-full py-12 md:py-16 bg-secondary/30">
            <div className="container px-4 md:px-6">
                 <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        {selected.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {selected.points.map((point, index) => (
                        <PainPoint key={index} title={point.title} description={point.description} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const PersonalizationDialog = ({ pack, onConfirm }: { pack: PremiumPack, onConfirm: () => void }) => {
    return (
        <AlertDialogContent className="max-w-2xl">
            <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center gap-2 font-headline text-2xl">
                    <Sparkles className="w-6 h-6 text-accent" />
                    Personalize Your Checklist Pack
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Answer a few questions to help us tailor this pack to your exact needs. This will add a customized 'Priority Action Plan' to your download.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="space-y-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="q1">What is your primary business focus?</Label>
                        <Input id="q1" placeholder="e.g., 5-Star Luxury Hotel, Business Hotel..." />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="q2">Which department needs the most improvement?</Label>
                        <Input id="q2" placeholder="e.g., Housekeeping, Front Office, F&B..." />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="q3">What is the single biggest challenge you are facing?</Label>
                    <Input id="q3" placeholder="e.g., Inconsistent guest service, high costs..." />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="q4">What is your primary goal for the next quarter?</Label>
                    <Input id="q4" placeholder="e.g., Increase positive reviews, reduce costs..." />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="q5">Anything else you'd like us to know?</Label>
                    <Textarea id="q5" placeholder="e.g., Specific compliance needs like JCI, NABH, or any other unique challenges." />
                </div>
            </div>
            <AlertDialogFooter>
                <AlertDialogCancel onClick={() => handleDownload(pack)}>Skip &amp; Download Standard</AlertDialogCancel>
                <AlertDialogAction onClick={onConfirm}>
                    Add Personalization &amp; Proceed
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    );
}


export default function Page({ params }: { params: { id: string } }) {
  const pack = premiumPacks.find((p) => p.id === params.id);

  if (!pack) {
    notFound();
  }
  
  const curationMap: Record<string, string> = {
    "Hospitality": "Veteran General Managers, F&B Directors, and Heads of Security from leading 5-star hotel chains.",
    "Corporate": "Senior Facility Managers from Fortune 500 companies and Heads of Engineering overseeing large-scale corporate campuses.",
    "Retail": "Retail Operations Heads, District Managers, and Loss Prevention experts from major global brands.",
    "Healthcare": "Hospital Administrators, Chief Medical Officers, and NABH/JCI Compliance Consultants.",
    "Education": "School Principals, Senior Administrators, and Campus Security Heads from reputable institutions."
  };

  const curatedBy = curationMap[pack.category] || "a diverse group of over 200+ seasoned industry professionals.";
  const personalizationPriceUSD = 29;
  const personalizationPriceINR = 2299;

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
                <ArrowLeft className="w-4 h-4" />
                Back to All Packs
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-start gap-6 mb-6">
                        <div className="p-4 bg-primary/10 rounded-full border-2 border-primary/20 shrink-0 hidden md:block">
                            {pack.icon}
                        </div>
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                                {pack.title}
                            </h1>
                            <p className="text-muted-foreground mt-2 md:text-lg">
                                {pack.description}
                            </p>
                             <div className="mt-4 bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                                <p className="text-sm font-semibold text-primary">Curated By:</p>
                                <p className="text-sm text-foreground/80">{curatedBy}</p>
                            </div>
                        </div>
                    </div>
                     <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-6">
                        <h2 className="text-2xl font-bold font-headline mb-4">Choose Your Download</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                           
                           {/* Standard Pack Option */}
                            <Card className="flex flex-col text-left">
                                <CardHeader>
                                    <CardTitle>Standard Pack</CardTitle>
                                    <p className="text-2xl font-bold text-primary">${pack.priceUSD} / ₹{pack.priceINR}</p>
                                </CardHeader>
                                <CardContent className="flex-1 space-y-2 text-sm">
                                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" /> <span>The complete, expert-curated checklist pack.</span></p>
                                    <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" /> <span>Lifetime access and free updates.</span></p>
                                     <p className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 text-red-500 shrink-0" /> <span className="text-muted-foreground">Custom Priority Action Plan.</span></p>
                                </CardContent>
                                <CardFooter>
                                    <Button size="lg" className="w-full font-bold" variant="outline" onClick={() => handleDownload(pack)}>
                                        Get Standard
                                    </Button>
                                </CardFooter>
                            </Card>

                            {/* Personalized Pack Option */}
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                     <Card className="flex flex-col text-left border-2 border-accent cursor-pointer hover:shadow-lg transition-shadow">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Sparkles className="w-5 h-5 text-accent" />
                                                Personalized Pack
                                            </CardTitle>
                                            <p className="text-2xl font-bold text-primary">
                                                ${pack.priceUSD + personalizationPriceUSD} / ₹{pack.priceINR + personalizationPriceINR}
                                            </p>
                                        </CardHeader>
                                        <CardContent className="flex-1 space-y-2 text-sm">
                                             <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" /> <span>The complete expert-curated checklist pack.</span></p>
                                             <p className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" /> <span>Lifetime access and free updates.</span></p>
                                             <p className="flex items-start gap-2 font-semibold"><Check className="w-4 h-4 mt-0.5 text-green-500 shrink-0" /> <span>Custom Priority Action Plan.</span></p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button size="lg" className="w-full font-bold bg-accent text-accent-foreground hover:bg-accent/90">
                                                Personalize Now
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </AlertDialogTrigger>
                                <PersonalizationDialog pack={pack} onConfirm={() => handleDownload(pack)} />
                            </AlertDialog>

                        </div>
                         <div className="mt-4 text-xs text-muted-foreground space-y-1">
                            <p>One-Time Purchase, Lifetime Updates & 24/7 Priority Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <PainPointsSection category={pack.category} />

        <section id="checklists" className="w-full py-12 md:py-20 lg:py-24">
            <div className="container px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        What's Included: A Complete Operational Toolkit
                    </h2>
                     <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
                        This pack contains {pack.checklists.length} professional checklists, covering every aspect of your operation.
                    </p>
                </div>

                <div className="space-y-8 max-w-4xl mx-auto">
                    {pack.checklists.map((checklist, index) => (
                        <Card key={index} className="rounded-xl overflow-hidden shadow-sm">
                            <CardHeader className="bg-muted/30">
                                <CardTitle className="flex items-center gap-3">
                                    <FileCheck2 className="w-6 h-6 text-primary"/>
                                    <span>{checklist.title}</span>
                                </CardTitle>
                                <CardDescription>
                                    <strong>Department:</strong> {checklist.department} | <strong>Frequency:</strong> {checklist.frequency} | <strong>Role:</strong> {checklist.role}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                                <p className="text-muted-foreground">{checklist.summary}</p>
                                <p className="font-semibold text-primary/80 mt-2">Contains {checklist.tasks.length} detailed tasks.</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>


      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-16 bg-secondary/50">
        <p className="text-xs text-muted-foreground">&copy; 2024 MoreMeets. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

    

    