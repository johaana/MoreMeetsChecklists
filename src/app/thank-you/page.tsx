
'use client';

import Link from "next/link";
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { writeFile, utils } from 'xlsx-js-style';
import type { PremiumPack, Checklist as PackChecklist } from "@/lib/premium-packs";
import type { IndividualChecklist } from "@/lib/individual-checklists";
import { verifyRazorpayPayment } from './actions';
import { premiumPacks } from '@/lib/premium-packs';
import { SiteHeader } from "@/components/layout/header";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';

const handleDownload = (item: PremiumPack | IndividualChecklist, type: 'pack' | 'individual') => {
    if (!item) {
        alert("Could not find the purchased item data. Please contact support.");
        return;
    }
    
    const workbook = utils.book_new();
    const headerStyle = {
        font: { bold: true, color: { rgb: "FFFFFF" } },
        fill: { fgColor: { rgb: "0A2540" } }
    };

    if (type === 'pack') {
        const pack = item as PremiumPack;
        const allChecklists = pack.id === 'personalized_pack' 
          ? premiumPacks.flatMap(p => p.checklists)
          : pack.checklists;

        allChecklists.forEach(checklist => addChecklistSheet(workbook, checklist, headerStyle));
        
    } else if (type === 'individual') {
        const checklist = item as IndividualChecklist;
        addChecklistSheet(workbook, {
            title: checklist.title,
            tasks: checklist.tasks,
            department: checklist.category, // fallback
            frequency: 'N/A',
            role: 'N/A',
            summary: checklist.longDescription
        }, headerStyle);
    }

    const fileName = item.title.replace(/ /g, '_') + '.xlsx';
    writeFile(workbook, fileName);
};

const addChecklistSheet = (workbook: any, checklist: PackChecklist, headerStyle: any) => {
    const checklistHeaders = [
        'Task ID', 'Task Description', 'Priority', 'Risk Level', 
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
}


function ThankYouContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [verifiedItem, setVerifiedItem] = React.useState<any | null>(null);
  const [itemType, setItemType] = React.useState<'pack' | 'individual' | null>(null);
  const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);

  React.useEffect(() => {
    const rzpPaymentId = searchParams.get('razorpay_payment_id');
    const packId = searchParams.get('pack_id');
    const checklistId = searchParams.get('checklist_id');
    const isPersonalized = searchParams.get('type') === 'personalized';

    if (!rzpPaymentId) {
      setError("Payment ID not found. Please check your email from Razorpay or contact support.");
      setIsLoading(false);
      return;
    }

    const verify = async () => {
      setIsLoading(true);
      setError(null);
      setVerifiedItem(null);

      const result = await verifyRazorpayPayment(rzpPaymentId, packId, checklistId, !!isPersonalized);
      
      if (result.success) {
        setVerifiedItem(result.item);
        setItemType(result.type);
        handleDownload(result.item, result.type);
        setShowDownloadConfirm(true);
      } else {
        setError(result.error);
      }
      
      setIsLoading(false);
    };

    verify();
  }, [searchParams]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Loader2 className="h-16 w-16 text-primary animate-spin" />
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
            Verifying your payment...
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
            Please wait while we confirm your transaction.
          </p>
        </div>
      );
    }

    if (error) {
       return (
         <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <AlertTriangle className="h-20 w-20 text-destructive" />
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Verification Failed
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed mx-auto">
                    There was an issue verifying your payment:
                </p>
                <p className="font-semibold text-destructive">{error}</p>
                <p className="text-muted-foreground text-sm pt-4">
                    Please contact our support team with your Payment ID for assistance.
                </p>
                 <Button asChild className="mt-4">
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </div>
      );
    }

    if (verifiedItem) {
      return (
         <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <CheckCircle className="h-20 w-20 text-green-500" />
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                    Thank You! Your download has started.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-lg/relaxed mx-auto">
                    Your file for <strong>{verifiedItem.title}</strong> is being downloaded. Please check your browser's download folder. If the download doesn't start automatically, use the button below.
                </p>
            </div>
            <Button size="lg" className="group mt-4 text-lg py-7 px-10" onClick={() => handleDownload(verifiedItem, itemType!)}>
                <Download className="mr-2 h-5 w-5" />
                Download Again
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

    return null; // Should not be reached
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center">
         <AlertDialog open={showDownloadConfirm} onOpenChange={setShowDownloadConfirm}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2"><Download className="w-5 h-5"/> Download Started</AlertDialogTitle>
                    <AlertDialogDescription>
                        Your checklist has started downloading. Please check your downloads folder.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setShowDownloadConfirm(false)}>OK</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <section className="w-full max-w-3xl mx-auto py-12 md:py-24 lg:py-32 px-2 md:px-6">
          {renderContent()}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <React.Suspense fallback={
        <div className="flex flex-col min-h-screen bg-background">
          <SiteHeader />
           <main className="flex-1 flex items-center justify-center">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                    Loading...
                </h1>
                </div>
           </main>
          <Footer />
        </div>
    }>
      <ThankYouContent />
    </React.Suspense>
  );
}
