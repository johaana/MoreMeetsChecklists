
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
import { verifyRazorpayPayment } from '@/app/packs/actions';
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
        alert("Could not find the item data. Please contact support.");
        return;
    }

    const wb = utils.book_new();

    const safeSheetName = (title: string) => {
        const sanitized = title.replace(/[\s&/\\?*:[\]]/g, '_');
        return sanitized.substring(0, 30);
    }
    
    // --- STYLES ---
    const titleStyle = { font: { sz: 16, bold: true, color: { rgb: "FFFFFF" } }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', horizontal: 'center' } };
    const sectionHeaderStyle = { font: { sz: 14, bold: true, color: { rgb: "000000" } }, fill: { fgColor: { rgb: "F5A623" } }, alignment: { vertical: 'center', horizontal: 'center'} };
    const instructionBodyStyle = { font: { sz: 11, color: {rgb: "4A4A4A"} }, alignment: { wrapText: true, vertical: 'top' } };
    const instructionTitleStyle = { font: { bold: true, sz: 12 }, alignment: { vertical: 'top' } };
    const footerStyle = { font: { italic: true, sz: 9, color: { rgb: "808080" } }, alignment: { horizontal: 'center' } };
    const linkStyle = { font: { color: { rgb: "0000FF" }, underline: true } };
    const headerStyle = { font: { bold: true, color: { rgb: "FFFFFF" }, sz: 11 }, fill: { fgColor: { rgb: "0A2540" } }, alignment: { vertical: 'center', wrapText: true, horizontal: 'center' } };
    const dateStyle = { numFmt: 'dd-mm-yyyy' };
    
    // --- CONDITIONAL FORMATTING ---
    const overdueFill = { fgColor: { rgb: "FFC7CE" } };
    const overdueFont = { color: { rgb: "9C0006" } };
    const overdueConditionalFmt = {
        type: "expression",
        formula: `ISNUMBER(SEARCH("ACTION REQUIRED",INDIRECT("K"&ROW())))`,
        style: { fill: overdueFill, font: overdueFont },
    };

    const completedFill = { fgColor: { rgb: "C6EFCE" } };
    const completedFont = { color: { rgb: "006100" } };
    const completedConditionalFmt = {
        type: "expression",
        formula: `ISNUMBER(SEARCH("Completed",INDIRECT("K"&ROW())))`,
        style: { fill: completedFill, font: completedFont },
    };
    
    // --- HELPER FUNCTIONS ---
    const setColumnWidths = (ws: WorkSheet, widths: number[]) => {
        ws['!cols'] = widths.map(wch => ({ wch }));
    };
    
    const addFooter = (ws: WorkSheet, lastRow: number, numCols: number) => {
        const merge = { s: { r: lastRow + 2, c: 0 }, e: { r: lastRow + 2, c: numCols - 1 } };
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push(merge);
        const footerCell: CellObject = { v: "For support, contact more@moremeets.com | © 2025 MoreMeets - The Professional Standard for Operational Checklists.", t: 's', s: footerStyle };
        utils.sheet_add_aoa(ws, [[footerCell]], { origin: { r: lastRow + 2, c: 0 } });
    };

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
    
     // --- INSTRUCTIONS & LEGEND SHEET ---
    const instructionsData = [
        [{ v: `MoreMeets Operations Pack: ${packTitle}`, t: 's', s: titleStyle }, null, null, null],
        [],
        [{ v: 'Quick Start Guide', t: 's', s: sectionHeaderStyle }, null, null, null],
        [{ v: '1. Update ONLY ONE Column', t: 's', s: instructionTitleStyle }, { v: "Find your task. When it's done, enter the completion date in the 'Date Completed (dd-mm-yyyy)' column. This is the only column you ever need to edit.", t: 's', s: instructionBodyStyle }],
        [{ v: '2. See The Live Status', t: 's', s: instructionTitleStyle }, { v: "The 'Status' and 'Next Due Date' columns will update automatically. Completed tasks turn GREEN. Overdue tasks turn RED.", t: 's', s: instructionBodyStyle }],
        [{ v: '3. Add Context (If Needed)', t: 's', s: instructionTitleStyle }, { v: "Use the 'Notes' column for important context, like 'Delayed - Awaiting Parts' or 'Not Applicable this month'.", t: 's', s: instructionBodyStyle }],
        [],
        [{ v: 'Pro-Tips for Optimum Use', t: 's', s: sectionHeaderStyle }, null, null, null],
        [{ v: 'Create Instant Reports with Filters', t: 's', s: instructionTitleStyle }, { v: "Go to the 'Data' tab in Excel and click the 'Filter' icon. Dropdown arrows will appear on each header. Now you can create instant reports. For example: Filter the 'Status' column to see only 'ACTION REQUIRED' tasks, or filter the 'Role' column to see a to-do list for a specific person.", t: 's', s: instructionBodyStyle }],
        [{ v: 'Use the Audit Trail', t: 's', s: instructionTitleStyle }, { v: "Every task has a unique 'Task ID' and a required 'Proof / Evidence'. When discussing an issue, refer to the Task ID for perfect clarity. The 'Proof' column creates a clear, consistent audit trail for every action.", t: 's', s: instructionBodyStyle }],
        [{ v: 'Train Your Team with Consequences', t: 's', s: instructionTitleStyle }, { v: "Use the 'Consequence of Failure' column as a training tool. In team meetings, discuss *why* a task is important. This builds a culture of ownership and safety, which is more effective than just giving orders.", t: 's', s: instructionBodyStyle }],
        [],
        [{ v: 'Legend', t: 's', s: sectionHeaderStyle }, null, null, null],
        [{v: 'Status', s: instructionTitleStyle}, {v: 'Pending: The task is not yet completed.\nCompleted: The task was completed on time.\nACTION REQUIRED: The task was not completed by its calculated due date and is now overdue.', s: instructionBodyStyle}],
        [{v: 'Priority', s: instructionTitleStyle}, {v: 'High: Critical task. Failure has a major impact on operations, safety, or compliance.\nMedium: Important task. Failure has a moderate impact.\nLow: Routine task. Failure has a minor impact.', s: instructionBodyStyle}],
        [{v: 'Risk Level', s: instructionTitleStyle}, {v: 'High: Carries a significant safety, legal, or financial risk if not performed correctly.\nMedium: Carries a moderate risk.\nLow: Carries a low risk.', s: instructionBodyStyle}],
    ];
    
    const instructionsWs = utils.aoa_to_sheet(instructionsData);
    instructionsWs['!merges'] = [
        { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, 
        { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }, 
        { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } }, 
        { s: { r: 12, c: 0 }, e: { r: 12, c: 3 } },
        { s: { r: 3, c: 1 }, e: { r: 3, c: 3 } }, { s: { r: 4, c: 1 }, e: { r: 4, c: 3 } }, { s: { r: 5, c: 1 }, e: { r: 5, c: 3 } },
        { s: { r: 8, c: 1 }, e: { r: 8, c: 3 } }, { s: { r: 9, c: 1 }, e: { r: 9, c: 3 } }, { s: { r: 10, c: 1 }, e: { r: 10, c: 3 } },
        { s: { r: 13, c: 1 }, e: { r: 13, c: 3 } }, { s: { r: 14, c: 1 }, e: { r: 14, c: 3 } }, { s: { r: 15, c: 1 }, e: { r: 15, c: 3 } }
    ];
    setColumnWidths(instructionsWs, [30, 30, 30, 30]);
    instructionsWs['!rows'] = [ 
        { hpt: 30 }, null, { hpt: 25 }, { hpt: 50 }, { hpt: 50 }, { hpt: 50 }, null, 
        { hpt: 25 }, { hpt: 80 }, { hpt: 80 }, { hpt: 80 }, null,
        { hpt: 25 }, { hpt: 60 }, { hpt: 60 }, { hpt: 60 }
    ];
    instructionsData.forEach((row, r) => {
        const cell = instructionsWs[utils.encode_cell({r:r, c:1})];
        if (cell && typeof cell.v === 'string') {
            cell.s = { ...cell.s, ...instructionBodyStyle };
        }
    });
    addFooter(instructionsWs, 17, 4);
    utils.book_append_sheet(wb, instructionsWs, "Instructions & Legend");


    // --- COVER PAGE ---
    if (type === 'pack' && checklists.length > 1) {
        const coverPageData: any[][] = [
            [{ v: packTitle, s: titleStyle }, null, null, null],
            [],
            [{v:"Click any checklist title below to navigate directly to its sheet.", s: { font: { italic: true, sz: 11 }, alignment: { horizontal: 'center' } }}, null, null, null],
            [],
            [{v:"Checklist Title", s: headerStyle}, {v:"Department", s: headerStyle}, {v:"Frequency", s: headerStyle}, {v:"Primary Role", s: headerStyle}],
        ];
        checklists.forEach((checklist, index) => {
            const sName = safeSheetName(checklist.title);
            coverPageData.push([
                { t: 's', v: checklist.title, l: { Target: `#'${sName}'!A1` }, s: linkStyle },
                checklist.department, checklist.frequency, checklist.role
            ]);
        });
        const coverWs = utils.aoa_to_sheet(coverPageData);
        setColumnWidths(coverWs, [60, 25, 20, 25]);
        coverWs['!rows'] = [{ hpt: 30 }];
        coverWs['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } }];
        addFooter(coverWs, coverPageData.length, 4);
        utils.book_append_sheet(wb, coverWs, "Cover Page");
    }

    // --- CHECKLIST SHEETS ---
    checklists.forEach((checklist, index) => {
        const headerEndCol = 'M';
        const sName = safeSheetName(checklist.title);
        const wsData: any[][] = [
            [{v: checklist.title, s: titleStyle}], [],
            ['Task ID', 'Task Description', 'Priority', 'Risk Level', 'Consequence of Failure', 'Proof / Evidence', 'Frequency', 'Department', 'Role', 'Date Completed (dd-mm-yyyy)', 'Status (Auto-updates)', 'Next Due Date (Auto-calculated)', 'Notes'],
        ];

        checklist.tasks.forEach((task, taskIndex) => {
            const rowNum = 4 + taskIndex;
            const dateCell = `J${rowNum}`;
            const freqCell = `G${rowNum}`;
            const nextDueDateCell = `L${rowNum}`;

            const isEventDrivenFormula = `OR(ISNUMBER(SEARCH("required",LOWER(${freqCell}))),ISNUMBER(SEARCH("incident",LOWER(${freqCell}))),ISNUMBER(SEARCH("ongoing",LOWER(${freqCell}))),ISNUMBER(SEARCH("hire",LOWER(${freqCell}))),ISNUMBER(SEARCH("delivery",LOWER(${freqCell}))),ISNUMBER(SEARCH("order",LOWER(${freqCell}))),ISNUMBER(SEARCH("transaction",LOWER(${freqCell}))),ISNUMBER(SEARCH("franchisee",LOWER(${freqCell}))),ISNUMBER(SEARCH("campaign",LOWER(${freqCell}))),ISNUMBER(SEARCH("case",LOWER(${freqCell}))),ISNUMBER(SEARCH("visit",LOWER(${freqCell}))),ISNUMBER(SEARCH("item",LOWER(${freqCell}))),ISNUMBER(SEARCH("audit",LOWER(${freqCell}))),ISNUMBER(SEARCH("deviation",LOWER(${freqCell}))))`;
            const daysToAddFormula = `IF(ISNUMBER(SEARCH("daily",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("weekly",LOWER(${freqCell}))),7,IF(ISNUMBER(SEARCH("fortnightly",LOWER(${freqCell}))),14,0)))`;
            const monthsToAddFormula = `IF(ISNUMBER(SEARCH("monthly",LOWER(${freqCell}))),1,IF(ISNUMBER(SEARCH("quarterly",LOWER(${freqCell}))),3,IF(ISNUMBER(SEARCH("half-yearly",LOWER(${freqCell}))),6,IF(ISNUMBER(SEARCH("annually",LOWER(${freqCell}))),12,0))))`;

            const nextDueDateFormula = `IF(ISBLANK(${dateCell}), "", IF(${monthsToAddFormula}>0,EDATE(${dateCell},${monthsToAddFormula}),${dateCell}+${daysToAddFormula}))`;
            const statusFormula = `IF(ISBLANK(${dateCell}),"Pending",IF(OR(${isEventDrivenFormula}, ${nextDueDateCell}=""),"Completed",IF(TODAY()>${nextDueDateCell},"ACTION REQUIRED","Completed")))`;
            
            wsData.push([
                task.id, task.description, task.priority, task.riskLevel, task.consequence, task.proof, 
                task.frequency || checklist.frequency, task.department || checklist.department, task.role || checklist.role,
                null, 
                { t: 'f', f: statusFormula }, 
                { t: 'f', f: nextDueDateFormula }, 
                null,
            ]);
        });
        
        const ws = utils.aoa_to_sheet(wsData);
        ws['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 12 } }];
        ws['!rows'] = [{ hpt: 30 }];
        setColumnWidths(ws, [10, 50, 10, 10, 30, 25, 15, 20, 20, 25, 25, 25, 30]);
        const headerCells = ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3', 'K3', 'L3', 'M3'];
        headerCells.forEach(cell => { if (ws[cell]) ws[cell].s = headerStyle; });
        
        const range = utils.decode_range(ws['!ref'] || 'A1');

        for (let R = 3; R <= range.e.r; ++R) {
            const dateCellJ = utils.encode_cell({c: 9, r: R});
            if(!ws[dateCellJ]) ws[dateCellJ] = {t:'n', z: 'dd-mm-yyyy'};
            else ws[dateCellJ].z = 'dd-mm-yyyy';

            const dateCellL = utils.encode_cell({c: 11, r: R});
            if(ws[dateCellL]) ws[dateCellL].s = dateStyle;
        }

        ws['!conditional_formatting'] = ws['!conditional_formatting'] || [];
        ws['!conditional_formatting'].push(
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [overdueConditionalFmt] },
            { ref: `A4:${headerEndCol}${range.e.r + 1}`, rules: [completedConditionalFmt] }
        );
        
        ws['!views'] = [{state: 'frozen', ySplit: 3}];
        addFooter(ws, wsData.length, 13);
        utils.book_append_sheet(wb, ws, sName);
    });
    
    // Re-order sheets
    const sheetNames = wb.SheetNames;
    const sortedSheetNames = ["Instructions & Legend", "Cover Page"].filter(name => sheetNames.includes(name));
    sheetNames.forEach(name => {
        if (!sortedSheetNames.includes(name)) {
            sortedSheetNames.push(name);
        }
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
        handleDownload(result.item as (PremiumPack | IndividualChecklist), result.type as 'pack' | 'individual');
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

    

    