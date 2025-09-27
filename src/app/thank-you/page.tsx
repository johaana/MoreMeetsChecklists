
'use client';

import Link from "next/link";
import * as React from 'react';
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { useRazorpayVerification } from "@/hooks/use-razorpay-verification";
import { writeFile, utils } from 'xlsx-js-style';
import type { PremiumPack } from "@/lib/premium-packs";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';


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

function ThankYouContent() {
  const [paymentId, setPaymentId] = React.useState('');
  const { isLoading, error, pack, verifyPayment } = useRazorpayVerification();
  const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyPayment(paymentId);
  };
  
  const onDownload = () => {
    handleDownload(pack as PremiumPack);
    setShowDownloadConfirm(true);
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4">
          <Loader2 className="h-12 w-12 text-primary animate-spin" />
          <p className="text-muted-foreground">Verifying your payment...</p>
        </div>
      );
    }

    if (error) {
       return (
        <div className="w-full text-center">
            <div className="flex items-center justify-center gap-2 text-red-500 mb-4">
                <AlertTriangle className="h-6 w-6"/>
                <span className="font-semibold text-lg">{error}</span>
            </div>
            {renderVerificationForm()}
        </div>
       )
    }

    if (pack) {
      return (
         <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Verification Successful!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                    Click the button below to download your <strong>{pack.title}</strong> pack.
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
      );
    }
    
    return renderVerificationForm();
  };

  const renderVerificationForm = () => (
      <div className="w-full">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <CheckCircle className="h-20 w-20 text-green-500" />
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                    Thank You for Your Purchase!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                   To download your checklist pack, please enter the Payment ID from your Razorpay confirmation email.
                </p>
            </div>
        </div>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="payment-id">Razorpay Payment ID</Label>
            <Input
              id="payment-id"
              placeholder="pay_xxxxxxxxxxxxxx"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Verify & Download
          </Button>
        </form>
         <div className="text-center mt-8">
             <Button size="lg" asChild className="group mt-4" variant="outline">
                <Link href="/packs">
                    Explore All Packages
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
            </Button>
        </div>
      </div>
  )

  return (
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

        <section className="w-full max-w-3xl mx-auto py-12 md:py-24 lg:py-32 px-4 md:px-6">
          {renderContent()}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ThankYouContent />
    </React.Suspense>
  );
}
