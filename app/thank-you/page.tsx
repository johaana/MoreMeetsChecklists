
'use client';

import Link from "next/link";
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2, HelpCircle, ShieldCheck, Lock } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { verifyRazorpayPayment } from '@/packs/actions';
import { SiteHeader } from "@/components/layout/header";
import { handleDownload } from '@/lib/download';
import type { PremiumPack } from "@/lib/premium-packs";
import { premiumPacks } from "@/lib/premium-packs";
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Suspense } from "react";
import { Badge } from "@/components/ui/badge";

function ThankYouContent() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [verifiedItem, setVerifiedItem] = React.useState<any | null>(null);
  const [itemType, setItemType] = React.useState<'pack' | 'individual' | null>(null);
  const [showDownloadConfirm, setShowDownloadConfirm] = React.useState(false);
  const hasTriggeredDownload = React.useRef(false);

  React.useEffect(() => {
    const packId = searchParams.get('pack_id');
    const rzpPaymentId = searchParams.get('razorpay_payment_id');
    const lsSuccess = searchParams.get('checkout_id'); 

    const verify = async (paymentId: string) => {
      setIsLoading(true);
      setError(null);
      setVerifiedItem(null);

      if (!packId) {
        setError("Product ID not found in the URL. Cannot verify purchase.");
        setIsLoading(false);
        return;
      }
      
      const result = await verifyRazorpayPayment(paymentId, packId, null);
      
      if (result.success && result.item && result.type) {
        setVerifiedItem(result.item);
        setItemType(result.type);
        if (!hasTriggeredDownload.current) {
            handleDownload(result.item as (PremiumPack | IndividualChecklist), result.type);
            setShowDownloadConfirm(true);
            hasTriggeredDownload.current = true;
        }
      } else {
        setError(result.error ?? "Verification failed. Please contact support.");
      }
      
      setIsLoading(false);
    };
    
    if (lsSuccess && packId) {
        const item = premiumPacks.find(p => p.id === packId);
        if (item) {
            setVerifiedItem(item);
            setItemType('pack');
             if (!hasTriggeredDownload.current) {
                handleDownload(item, 'pack');
                setShowDownloadConfirm(true);
                hasTriggeredDownload.current = true;
            }
        } else {
            setError("Purchased product could not be found.");
        }
        setIsLoading(false);
    }
    else if (rzpPaymentId) {
        verify(rzpPaymentId);
    }
    else {
        setError("Payment information not found in URL. Please check your email for a download link or contact support.");
        setIsLoading(false);
    }

  }, [searchParams]);

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Loader2 className="h-16 w-16 text-primary animate-spin" />
          <h1 className="text-3xl font-black tracking-tighter sm:text-4xl font-headline italic uppercase">
            Verifying Deployment...
          </h1>
          <p className="max-w-[600px] text-muted-foreground text-base md:text-xl/relaxed mx-auto italic font-medium">
            Securing your Sovereign v5.8 Master Build. This will take only a few seconds.
          </p>
        </div>
      );
    }

    if (error) {
       return (
         <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <AlertTriangle className="h-20 w-20 text-destructive" />
            <div className="space-y-2">
                <h1 className="text-3xl font-black tracking-tighter sm:text-4xl md:text-5xl font-headline italic uppercase">
                    Verification Failed
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-base md:text-lg/relaxed mx-auto italic font-medium">
                    There was an issue verifying your payment:
                </p>
                <p className="font-black text-destructive uppercase tracking-widest">{error}</p>
                <p className="text-muted-foreground text-sm pt-4 font-medium italic">
                    Please check your email for a receipt and download link. If you still need help, contact our support team.
                </p>
                 <Button asChild className="mt-4" variant="outline">
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
        </div>
      );
    }

    if (verifiedItem) {
      return (
         <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Authenticated Deployment</Badge>
                <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-tight">
                    Sovereign v5.8 Master Build <br /> <span className="text-primary">Secured.</span>
                </h1>
                <p className="max-w-[650px] text-secondary-text text-lg md:text-xl font-medium italic border-l-2 border-primary/20 pl-8 mx-auto">
                    Your Operating System for <strong>{verifiedItem.title}</strong> has been generated. Your download should begin automatically.
                </p>
            </div>
            
            <div className="flex flex-col items-center gap-6 w-full max-w-md">
                <Button size="lg" className="w-full h-20 text-xl font-black uppercase italic bg-primary text-black shadow-[0_0_50px_-5px_rgba(46,184,107,0.4)] hover:scale-105 transition-all" onClick={() => handleDownload(verifiedItem, itemType!)} variant="default">
                    <Download className="mr-3 h-7 w-7" />
                    Download .XLSX Master
                </Button>
                
                <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left space-y-1">
                        <p className="text-[10px] font-black uppercase text-white/20 tracking-widest">Format</p>
                        <p className="text-xs font-bold text-primary italic">EDITABLE EXCEL</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-left space-y-1">
                        <p className="text-[10px] font-black uppercase text-white/20 tracking-widest">Version</p>
                        <p className="text-xs font-bold text-primary italic">SOVEREIGN v5.8</p>
                    </div>
                </div>

                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-left w-full space-y-3">
                    <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div className="space-y-1">
                            <p className="text-sm font-black uppercase tracking-tight text-primary">Mobile Browser detected?</p>
                            <p className="text-xs text-secondary-text leading-relaxed italic font-medium">
                                If using WhatsApp/Instagram, tap the <span className="text-white font-bold">three dots (...)</span> and select <span className="text-white font-bold">"Open in System Browser"</span> to trigger the download.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-8 pt-12 border-t border-white/5 w-full max-w-3xl text-center">
                <div className="space-y-4">
                    <h3 className="text-2xl font-black font-headline text-primary uppercase italic">Post-Deployment Protocol</h3>
                    <p className="text-lg text-secondary-text leading-relaxed font-medium italic">
                        Our technical team will reach out within <span className="font-black text-primary-text uppercase">48 Hours</span> to schedule your included expert customization session.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild variant="outline" className="h-14 px-8 font-black uppercase italic border-white/10 hover:bg-white/5">
                        <Link href="/library" className="flex items-center">
                            Explore More Systems
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <Button asChild variant="secondary" className="h-14 px-8 font-black uppercase italic">
                        <Link href="https://wa.me/919860997711" target="_blank" className="flex items-center gap-2">
                            Urgent Support via WhatsApp
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
      );
    }

    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main className="flex-1 flex items-center justify-center p-4">
         <AlertDialog open={showDownloadConfirm} onOpenChange={setShowDownloadConfirm}>
            <AlertDialogContent className="rounded-[2.5rem] border-white/10 bg-black p-10 max-w-md">
                <AlertDialogHeader className="space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                        <Download className="w-8 h-8 text-primary"/>
                    </div>
                    <AlertDialogTitle className="text-center text-primary-text font-black uppercase italic text-2xl tracking-tight">System Transfer Active</AlertDialogTitle>
                    <AlertDialogDescription className="text-center text-secondary-text font-medium italic text-base leading-relaxed">
                        Your Sovereign v5.8 master file is being transferred. Please check your browser's download queue.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="pt-6">
                    <AlertDialogAction onClick={() => setShowDownloadConfirm(false)} className="w-full h-14 bg-primary text-black font-black uppercase italic rounded-xl">Initialize Local System</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        <div className="w-full max-w-4xl mx-auto py-12 md:py-24">
          <Suspense fallback={<div className="text-center font-black uppercase tracking-widest text-primary animate-pulse">Initializing Security Layers...</div>}>
            <ThankYouContent />
          </Suspense>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ThankYouPageWrapper() {
  return (
    <Suspense fallback={
        <div className="flex flex-col min-h-screen bg-background">
          <SiteHeader />
           <main className="flex-1 flex items-center justify-center">
               <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Loader2 className="h-16 w-16 text-primary animate-spin" />
                <h1 className="text-3xl font-black tracking-tighter sm:text-4xl font-headline uppercase italic">
                    Deploying...
                </h1>
                </div>
           </main>
          <Footer />
        </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
