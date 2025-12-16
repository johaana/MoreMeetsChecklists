
'use client';

import Link from "next/link";
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2 } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { verifyRazorpayPayment } from '@/app/packs/actions';
import { SiteHeader } from "@/components/layout/header";
import { handleDownload } from '@/lib/download';
import type { PremiumPack } from "@/lib/premium-packs";
import type { IndividualChecklist } from "@/lib/individual-checklists";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';


function ThankYouContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [verifiedItem, setVerifiedItem] = React.useState<any | null>(null);
  const [itemType, setItemType] = React.useState<'pack' | 'individual' | null>(null);
  const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);
  const hasTriggeredDownload = React.useRef(false);

  React.useEffect(() => {
    const rzpPaymentId = searchParams.get('razorpay_payment_id');
    const packId = searchParams.get('pack_id');
    const checklistId = searchParams.get('checklist_id');
    
    // Check session storage first
    if (typeof window !== 'undefined') {
        const storedPurchase = sessionStorage.getItem('lastPurchase');
        if (storedPurchase) {
          try {
            const { item, type } = JSON.parse(storedPurchase);
            setVerifiedItem(item);
            setItemType(type);
            setIsLoading(false);
            if (!hasTriggeredDownload.current) {
                handleDownload(item as (PremiumPack | IndividualChecklist), type as 'pack' | 'individual');
                setShowDownloadConfirm(true);
                hasTriggeredDownload.current = true;
            }
            return;
          } catch (e) {
            sessionStorage.removeItem('lastPurchase');
          }
        }
    }

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
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('lastPurchase', JSON.stringify({ item: result.item, type: result.type }));
        }
        if (!hasTriggeredDownload.current) {
            handleDownload(result.item as (PremiumPack | IndividualChecklist), result.type as 'pack' | 'individual');
            setShowDownloadConfirm(true);
            hasTriggeredDownload.current = true;
        }
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
                <Link href="/library">
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
