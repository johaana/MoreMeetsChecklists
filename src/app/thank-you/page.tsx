
'use client';

import Link from "next/link";
import * as React from 'react';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Download, AlertTriangle, Sparkles } from "lucide-react";
import { premiumPacks, PremiumPack } from "@/lib/premium-packs";
import { writeFile, utils } from 'xlsx-js-style';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Footer } from "@/components/layout/footer";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const handleDownload = (pack: PremiumPack | undefined) => {
    if (!pack) {
        alert("Could not find the purchased pack. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };

    // --- Cover Page ---
    const coverPageName = "Cover Page";
    const coverPageHeader = [pack.title];
    const coverPageData = [
        [" "],
        ["Click to navigate:"],
        ["Checklist Title", "Department", "Frequency", "Role"],
         ...pack.checklists.map((checklist) => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            return [
                { v: checklist.title, f: formula },
                checklist.department,
                checklist.frequency,
                checklist.role
            ];
        })
    ];

    const coverWorksheet = utils.aoa_to_sheet([coverPageHeader, ...coverPageData]);
    coverWorksheet['!cols'] = [{ wch: 60 }, { wch: 25 }, { wch: 20 }, { wch: 25 }];
    
    // Style header
    coverWorksheet['A1'].s = { font: { sz: 24, bold: true }};
    
    // Style table headers
    ['A4', 'B4', 'C4', 'D4'].forEach(cell => {
        if (coverWorksheet[cell]) coverWorksheet[cell].s = headerStyle;
    });

    // Style hyperlinks
    const rangeLinks = utils.decode_range(coverWorksheet['!ref']!);
    for (let R = 4; R <= rangeLinks.e.r; ++R) { // Start from row 5 (index 4)
        const address = utils.encode_cell({ r: R, c: 0 });
        if (coverWorksheet[address] && coverWorksheet[address].f) {
             coverWorksheet[address].s = { font: { color: { rgb: "0000FF" }, underline: true } };
        }
    }
    
    utils.book_append_sheet(workbook, coverWorksheet, coverPageName);

    // --- Master View ---
    const masterSheetName = "Master View";
    const masterSheetData = [
        ["Checklist Title", "Task ID", "Task Description", "Priority", "Risk Level"],
        ...pack.checklists.flatMap((checklist) => 
            checklist.tasks.map(task => [
                checklist.title,
                task.id,
                task.description,
                task.priority,
                task.riskLevel
            ])
        )
    ];
    
    const masterWorksheet = utils.aoa_to_sheet(masterSheetData);
    masterWorksheet['!cols'] = [{ wch: 40 }, { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 }];
    
    const rangeMaster = utils.decode_range(masterWorksheet['!ref']!);
    for (let C = rangeMaster.s.c; C <= rangeMaster.e.c; ++C) {
        const address = utils.encode_cell({ r: 0, c: C });
        if (masterWorksheet[address]) {
            masterWorksheet[address].s = headerStyle;
        }
    }
    masterWorksheet['!views'] = [{state: 'frozen', ySplit: 1}];
    
    utils.book_append_sheet(workbook, masterWorksheet, masterSheetName);

    // --- Individual Checklist Sheets ---
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
        const worksheet = utils.aoa_to_sheet(checklistDataWithHeader);
        
        worksheet['!cols'] = [
            { wch: 15 }, { wch: 60 }, { wch: 15 }, { wch: 15 }, 
            { wch: 25 }, { wch: 15 }, { wch: 20 }, { wch: 30 }
        ];

         const headerRange = utils.decode_range(worksheet['!ref']!);
         for (let C = headerRange.s.c; C <= headerRange.e.c; ++C) {
            const address = utils.encode_cell({ r: 0, c: C });
            if(worksheet[address]) {
                worksheet[address].s = headerStyle;
            }
         }
         worksheet['!views'] = [{state: 'frozen', ySplit: 1}];

        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(workbook, worksheet, sheetName);
    });

    writeFile(workbook, `${pack.title.replace(/ /g, '_')}.xlsx`);
}


const personalizationSchema = z.object({
    companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
    locations: z.string().min(1, { message: "Please enter the number of locations." }),
    biggestChallenge: z.string().min(10, { message: "Please describe your challenge in at least 10 characters." }),
    primaryGoal: z.string().min(10, { message: "Please describe your goal in at least 10 characters." }),
    department: z.string().optional(),
});


function PersonalizationForm({ onComplete }: { onComplete: () => void }) {
    const form = useForm<z.infer<typeof personalizationSchema>>({
        resolver: zodResolver(personalizationSchema),
        defaultValues: {
            companyName: "",
            locations: "",
            biggestChallenge: "",
            primaryGoal: "",
            department: "",
        },
    });

    function onSubmit(values: z.infer<typeof personalizationSchema>) {
        // Here you would typically send the form data to your backend
        console.log("Personalization data submitted:", values);
        onComplete();
    }

    return (
        <div className="w-full max-w-2xl mx-auto py-12">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <Sparkles className="h-16 w-16 text-accent" />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
                        Personalize Your Pack
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Your download will begin after you submit this form. This is required to create your Custom Priority Action Plan.
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full text-left space-y-4 pt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., Acme Hotels Inc." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="locations"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Number of Locations</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g., 1, 5, 20+" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="biggestChallenge"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>What is your single biggest operational challenge?</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="e.g., Inconsistent guest service across properties, high staff turnover..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="primaryGoal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>What is your primary goal for the next 90 days?</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Improve online reviews, reduce operational costs by 15%..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="department"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Which department needs the most urgent improvement? (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., Housekeeping, Front Office, F&B..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" variant="accent">
                            Submit & Prepare Download
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}

function ThankYouContent() {
  const [purchasedPack, setPurchasedPack] = React.useState<PremiumPack | undefined>(undefined);
  const [packType, setPackType] = React.useState<'professional' | 'personalized' | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showPersonalization, setShowPersonalization] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const packId = sessionStorage.getItem('purchasedPackId');
      const type = sessionStorage.getItem('purchasedPackType') as 'professional' | 'personalized' | null;

      if (packId && type) {
        const pack = premiumPacks.find(p => p.id === packId);
        setPurchasedPack(pack);
        setPackType(type);

        if (type === 'personalized') {
            setShowPersonalization(true);
        }
        
        // Clear the session storage items after retrieving them
        // This prevents the user from seeing this page again on refresh
        // sessionStorage.removeItem('purchasedPackId');
        // sessionStorage.removeItem('purchasedPackType');
      }
      setIsLoading(false);
    }
  }, []);
  
  const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);

  const onDownload = () => {
    handleDownload(purchasedPack);
    setShowDownloadConfirm(true);
  }

  const handlePersonalizationComplete = () => {
    setShowPersonalization(false);
  }
  
  const PageLayout = ({ children }: { children: React.ReactNode }) => (
       <div className="flex flex-col min-h-screen bg-background">
         <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
           <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">MoreMeets</span>
          </Link>
           <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
             <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
               All Packages
             </Link>
           </nav>
         </header>

         <main className="flex-1 flex items-center justify-center">
           {children}
         </main>

         <Footer />
       </div>
  )

  if (isLoading) {
    return <PageLayout><div>Loading...</div></PageLayout>;
  }

  return (
    <PageLayout>
      <AlertDialog open={showDownloadConfirm} onOpenChange={setShowDownloadConfirm}>
          <AlertDialogContent>
              <AlertDialogHeader>
                  <AlertDialogTitle className="flex items-center gap-2"><Download className="w-5 h-5"/> Download Started</AlertDialogTitle>
                  <AlertDialogDescription>
                      Your checklist pack has started downloading. Please check your downloads folder.
                  </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setShowDownloadConfirm(false)}>OK</AlertDialogAction>
              </AlertDialogFooter>
          </AlertDialogContent>
      </AlertDialog>

      <section className="w-full max-w-2xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6">
        {purchasedPack ? (
            showPersonalization ? (
                <PersonalizationForm onComplete={handlePersonalizationComplete} />
            ) : (
                <div className="flex flex-col items-center justify-center space-y-6 text-center">
                    <CheckCircle className="h-20 w-20 text-green-500" />
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                            Thank You for Your Purchase!
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                            Your payment was successful. Click the button below to download your <strong>{purchasedPack.title}</strong> pack.
                        </p>
                    </div>
                    <Button size="lg" className="group mt-4 text-lg py-7 px-10" onClick={onDownload}>
                        <Download className="mr-2 h-5 w-5" />
                        Download Your Pack
                    </Button>
                    <Button size="lg" asChild className="group mt-4" variant="outline">
                        <Link href="/packs">
                            Explore More Packages
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            )
        ) : (
           <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <AlertTriangle className="h-20 w-20 text-yellow-500" />
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                    Purchase Information Not Found
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                    We couldn't find your recent purchase details. If you have just completed a payment, please check your email for a download link. If you need assistance, please contact support.
                </p>
            </div>
            <Button size="lg" asChild className="group mt-4 text-lg py-7 px-10" variant="accent">
              <Link href="/packs">
                Explore All Packages
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </section>
    </PageLayout>
  );
}


export default function ThankYouPage() {
  // Wrap with Suspense to handle the client-side logic gracefully
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </React.Suspense>
  );
}
