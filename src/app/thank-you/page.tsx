
'use client';

import Link from "next/link";
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { writeFile, utils, type WorkSheet, type CellObject } from 'xlsx-js-style';
import type { PremiumPack, Checklist as PackChecklist } from "@/lib/premium-packs";
import type { IndividualChecklist } from "@/lib/individual-checklists";
import { verifyRazorpayPayment } from './actions';
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

    const wb = utils.book_new();

    // --- Enhanced Styles ---
    const titleStyle = { font: { sz: 16, bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center' } };
    const instructionHeaderStyle = { font: { sz: 14, bold: true, color: { rgb: "000000" } }, fill: { fgColor: { rgb: "F5A623" } }, alignment: { vertical: 'center', horizontal: 'center'} };
    const instructionBodyStyle = { font: { sz: 11, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const footerStyle = { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const checklistHeaderStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', wrapText: true } };
    
    const overdueFill = { fgColor: { rgb: "FFC7CE" } };
    const overdueFont = { color: { rgb: "9C0006" } };
    const overdueConditionalFmt = {
        type: "expression",
        formula: 'AND(INDIRECT("K"&ROW())<>"",TODAY()>=INDIRECT("K"&ROW()))',
        style: { fill: overdueFill, font: overdueFont },
    };

    const completedFill = { fgColor: { rgb: "E6FFEC" } };
    const completedFont = { color: { rgb: "006100" } };
    const completedConditionalFmt = {
        type: "expression",
        formula: 'LEFT(INDIRECT("J"&ROW()), 9)="Completed"',
        style: { fill: completedFill, font: completedFont },
    };


    // --- Helper Functions ---
    const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
        ws['!cols'] = widths.map(wch => ({ wch }));
    };
    
    const addFooter = (ws: WorkSheet, lastRow: number, numCols: number) => {
        const merge = { s: { r: lastRow + 2, c: 0 }, e: { r: lastRow + 2, c: numCols - 1 } };
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(merge);
        const footerCell: CellObject = { v: "For support, contact more@moremeets.com | © 2024 MoreMeets - The Professional Standard for Operational Checklists.", t: 's', s: footerStyle };
        utils.sheet_add_aoa(ws, [[footerCell]], { origin: `A${lastRow + 3}` });
    };
    
    // --- Data Preparation ---
    let checklists: PackChecklist[] = [];
    const packTitle = item.title;

    if (type === 'pack') {
        checklists = (item as PremiumPack).checklists;
    } else {
        const checklist = item as IndividualChecklist;
        checklists = [{
            title: checklist.title,
            tasks: checklist.tasks,
            department: checklist.category,
            frequency: 'As Required',
            role: 'User',
            summary: checklist.longDescription,
            icon: checklist.icon
        }];
    }

    // --- Professional Instructions Sheet ---
    const instructionsData = [
        [{ v: `MoreMeets Operations Pack: ${packTitle}`, t: 's', s: titleStyle }, null, null, null, null],
        [],
        [{ v: 'How To Use This "Smart" Checklist', t: 's', s: instructionHeaderStyle }, null, null, null, null],
        [
            { v: "This isn't a static list; it's a dynamic operational tool designed for accountability and easy tracking. Here’s how to use its smart features:" , t: 's', s: { ...instructionBodyStyle, alignment: { wrapText: true, vertical: 'center', horizontal: 'center' } } },
            null, null, null, null
        ],
        [],
        [{ v: '1. Complete a Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "Simply enter the completion date in the 'Date Last Completed' column. The 'Status' and 'Next Due Date' columns will update automatically. Completed tasks turn green.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '2. Handle "As Required" Tasks', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "For tasks with a frequency of 'As Required' or 'Per Incident', the 'Next Due Date' will show 'N/A'. The status will simply show 'Completed' once you enter a date.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '3. Automatic "Overdue" Alerts', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "When a recurring task's due date arrives, the 'Status' will change to 'ACTION REQUIRED - OVERDUE' and the entire row will highlight red, showing you exactly what needs attention.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '4. Reset a Recurring Task', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "To start the next cycle for a recurring task (e.g., weekly, monthly), just clear the date from the 'Date Last Completed' cell. The row will turn white again, ready for the next completion date.", t: 's', s: instructionBodyStyle }, null, null, null],
        [{ v: '5. Handle Exceptions', t: 's', s: {font: {bold: true, sz: 12}} }, { v: "If a task is delayed (e.g., 'Awaiting Parts') or not applicable, use the 'Notes' column. This keeps the primary system clean while providing important context for managers and auditors.", t: 's', s: instructionBodyStyle }, null, null, null],
    ];
    
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } },
        { s: { r: 2, c: 0 }, e: { r: 2, c: 4 } },
        { s: { r: 3, c: 0 }, e: { r: 3, c: 4 } },
        { s: { r: 5, c: 1 }, e: { r: 5, c: 4 } },
        { s: { r: 6, c: 1 }, e: { r: 6, c: 4 } },
        { s: { r: 7, c: 1 }, e: { r: 7, c: 4 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 4 } },
        { s: { r: 9, c: 1 }, e: { r: 9, c: 4 } },
    ];
    setColumnWidths(instructionsWs, [20, 25, 25, 25, 25]);
    instructionsWs['!rows'] = [ { hpt: 30 }, { hpt: 15 }, { hpt: 25 }, { hpt: 60 }, { hpt: 15 }, { hpt: 40 }, { hpt: 50 }, { hpt: 60 }, { hpt: 50 }, { hpt: 60 }];
    addFooter(instructionsWs, 12, 5);
    utils.book_append_sheet(wb, instructionsWs, "Instructions");


    // --- Cover Page ---
    if (type === 'pack' && checklists.length > 1) {
        const coverPageName = "Cover Page";
        const coverPageData: any[][] = [
            [{ v: packTitle, s: titleStyle }, null, null, null],
            [],
            [{v:"Click any checklist title below to navigate directly to its sheet.", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } }}, null, null, null],
            [],
            ["Checklist Title", "Department", "Frequency", "Primary Role"],
        ];

        checklists.forEach(checklist => {
            const safeSheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
            const formula = `HYPERLINK("#'${safeSheetName}'!A1", "${checklist.title}")`;
            coverPageData.push([{ t: 's', v: checklist.title, f: formula, s: linkStyle }, checklist.department, checklist.frequency, checklist.role ]);
        });

        const coverWs = utils.aoa_to_sheet(coverPageData);
        setColumnWidths(coverWs, [60, 25, 20, 25]);
        coverWs['!rows'] = [{ hpt: 30 }];
        coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }];
        
        ['A5', 'B5', 'C5', 'D5'].forEach(cell => { if (coverWs[cell]) coverWs[cell].s = checklistHeaderStyle; });

        addFooter(coverWs, coverPageData.length, 4);
        utils.book_append_sheet(wb, coverWs, coverPageName);
    }

    // --- Individual Checklist Sheets ---
    checklists.forEach(checklist => {
        const wsData = [
            [checklist.title],
            [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Consequence of Failure', 'Proof / Evidence', 'Frequency', 'Date Last Completed', 'Status', 'Next Due Date', 'Notes'],
        ];
        
        checklist.tasks.forEach((task, index) => {
            const rowNum = 4 + index; 
            const freqCell = `G${rowNum}`;
            const dateCell = `H${rowNum}`;
            const statusCell = `I${rowNum}`;
            const nextDueDateCell = `J${rowNum}`;

            const isEventDriven = `OR(LOWER(${freqCell})="as required", LOWER(${freqCell})="per incident", LOWER(${freqCell})="per order", LOWER(${freqCell})="per delivery", LOWER(${freqCell})="per transaction", LOWER(${freqCell})="per new franchisee", LOWER(${freqCell})="per campaign", LOWER(${freqCell})="per case")`;
            
            const nextDueDateFormula = `IF(${isEventDriven}, "N/A", IF(${dateCell}="", "", SWITCH(LOWER(${freqCell}), "daily", ${dateCell}+1, "weekly", ${dateCell}+7, "monthly", EDATE(${dateCell}, 1), "quarterly", EDATE(${dateCell}, 3), "annually", EDATE(${dateCell}, 12), "N/A")))`;
            
            const statusFormula = `IF(${dateCell}<>"", "Completed", IF(AND(${nextDueDateCell}<>"N/A", TODAY()>=${nextDueDateCell}), "ACTION REQUIRED - OVERDUE", "Pending"))`;

            wsData.push([
                task.id, task.description, task.priority, task.riskLevel, task.consequence, task.proof, 
                checklist.frequency,
                null,
                { t: 'f', f: statusFormula },
                { t: 'f', f: nextDueDateFormula },
                '' 
            ]);
        });

        const ws = utils.aoa_to_sheet(wsData);
        
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 10 } }];
        if (ws['A1']) ws['A1'].s = titleStyle;
        ws['!rows'] = [{ hpt: 30 }];
        
        setColumnWidths(ws, [15, 60, 10, 10, 30, 25, 15, 20, 30, 20, 30]);

        // Apply header style
        const headerCells = ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3'];
        headerCells.forEach(cell => { if (ws[cell]) ws[cell].s = checklistHeaderStyle; });
        
        const range = utils.decode_range(ws['!ref'] || 'A1');
        ws['!conditional_formatting'] = ws['!conditional_formatting'] || [];
        ws['!conditional_formatting'].push(
            { ref: `A4:K${range.e.r + 1}`, rules: [overdueConditionalFmt] },
            { ref: `A4:K${range.e.r + 1}`, rules: [completedConditionalFmt] }
        );
        
        // Apply date formatting
        for (let R = 3; R <= range.e.r; ++R) {
            const dateCellH = ws[utils.encode_cell({c: 7, r: R})]; 
            if (dateCellH) {
                dateCellH.t = 'd';
                dateCellH.s = { numFmt: 'dd-mmm-yyyy' };
            }
            const dateCellJ = ws[utils.encode_cell({c: 9, r: R})];
            if(dateCellJ) {
                 dateCellJ.s = { numFmt: 'dd-mmm-yyyy' };
            }
        }
        
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length, 11);
        
        const sheetName = checklist.title.replace(/[^\w\s]/gi, '').substring(0, 31);
        utils.book_append_sheet(wb, ws, sheetName);
    });
    
    // Remove default 'Sheet1' if it exists
    const sheet1Index = wb.SheetNames.indexOf('Sheet1');
    if (sheet1Index > -1) {
        wb.SheetNames.splice(sheet1Index, 1);
        delete wb.Sheets['Sheet1'];
    }

    const sortedSheetNames = wb.SheetNames.sort((a, b) => {
        if (a === 'Instructions') return -1;
        if (b === 'Instructions') return 1;
        if (a === 'Cover Page') return -1;
        if (b === 'Cover Page') return 1;
        return a.localeCompare(b);
    });
     wb.SheetNames = sortedSheetNames;

    const fileName = item.title.replace(/[^a-z0-9]/gi, '_').replace(/_+/g, '_') + '_MoreMeets.xlsx';
    writeFile(wb, fileName);
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
    
    if (!rzpPaymentId) {
      setError("Payment ID not found. Please check your email from Razorpay or contact support.");
      setIsLoading(false);
      return;
    }

    const verify = async () => {
      setIsLoading(true);
      setError(null);
      setVerifiedItem(null);

      const result = await verifyRazorpayPayment(rzpPaymentId, packId, checklistId);
      
      if (result.success) {
        setVerifiedItem(result.item);
        setItemType(result.type);
        handleDownload(result.item as (PremiumPack | IndividualChecklist), result.type);
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
          <p className="max-w-[600px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
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
                <p className="max-w-[600px] text-muted-foreground text-base md:text-lg/relaxed mx-auto">
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
                <p className="max-w-[600px] text-muted-foreground text-base md:text-lg/relaxed mx-auto">
                    Your file for <strong>{verifiedItem.title}</strong> is being downloaded. Please check your browser's download folder. If the download doesn't start automatically, use the button below.
                </p>
                 <p className="text-sm text-muted-foreground pt-2">
                    If you face any difficulty downloading your pack, please email us at <a href="mailto:more@moremeets.com" className="font-semibold text-primary underline">more@moremeets.com</a> for immediate assistance.
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
