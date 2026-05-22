'use client';

import Link from "next/link";
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, ArrowRight, AlertTriangle, Loader2, HelpCircle, ShieldCheck, Lock, MonitorSmartphone, Settings2 } from "lucide-react";
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
        setError("Product ID not found in the URL.");
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
        setError(result.error ?? "Verification failed.");
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
        }
        setIsLoading(false);
    }
    else if (rzpPaymentId) {
        verify(rzpPaymentId);
    }
    else {
        setError("Payment session not found.");
        setIsLoading(false);
    }

  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <Loader2 className="h-16 w-16 text-primary animate-spin" />
        <h1 className="text-3xl font-black font-headline italic uppercase">Securing Deployment...</h1>
      </div>
    );
  }

  if (error) {
     return (
       <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <AlertTriangle className="h-20 w-20 text-destructive" />
          <h1 className="text-3xl font-black font-headline italic uppercase">Verification Failed</h1>
          <p className="font-bold text-destructive uppercase tracking-widest">{error}</p>
          <Button asChild variant="outline"><Link href="/contact">Contact Support</Link></Button>
      </div>
    );
  }

  if (verifiedItem) {
    return (
       <div className="flex flex-col items-center justify-center space-y-12 text-center">
          <div className="space-y-4">
              <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Authenticated Deployment</Badge>
              <h1 className="text-4xl md:text-6xl font-black font-headline text-primary-text italic uppercase tracking-tighter leading-tight">
                  Sovereign Master Secured.
              </h1>
              <p className="max-w-[650px] text-secondary-text text-lg italic border-l-2 border-primary/20 pl-8 mx-auto">
                  Your system for <strong>{verifiedItem.title}</strong> has been generated.
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
              <Card className="p-10 bg-zinc-950 border-white/5 space-y-6 flex flex-col items-center text-center shadow-2xl hover:border-primary/20 transition-all">
                  <Download className="w-12 h-12 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-black uppercase italic tracking-tighter">1. Get Master File</h3>
                    <p className="text-xs text-zinc-500 font-medium italic">Download your raw .xlsx system engine.</p>
                  </div>
                  <Button size="lg" className="w-full h-14 text-sm font-black uppercase italic bg-primary text-black" onClick={() => handleDownload(verifiedItem, itemType!)}>
                      Download Master
                  </Button>
              </Card>

              <Card className="p-10 bg-zinc-950 border-white/5 space-y-6 flex flex-col items-center text-center shadow-2xl hover:border-emerald-500/20 transition-all">
                  <Settings2 className="w-12 h-12 text-emerald-500" />
                  <div className="space-y-2">
                    <h3 className="text-lg font-black uppercase italic tracking-tighter">2. Setup Guide</h3>
                    <p className="text-xs text-zinc-500 font-medium italic">Visual steps to activate the audit heartbeat.</p>
                  </div>
                  <Button asChild size="lg" variant="secondary" className="w-full h-14 text-sm font-black uppercase italic bg-emerald-500 text-black">
                      <Link href="/deploy-guide">View Setup Guide</Link>
                  </Button>
              </Card>
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20 text-left w-full max-w-md">
              <MonitorSmartphone className="w-5 h-5 text-primary mb-2" />
              <p className="text-xs text-secondary-text leading-relaxed italic font-medium">
                  Mobile Browser? Tap the <span className="text-white font-bold">three dots (...)</span> and select <span className="text-white font-bold">"Open in System Browser"</span> to start the download.
              </p>
          </div>
      </div>
    );
  }

  return null;
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl mx-auto py-12 md:py-24">
          <Suspense fallback={<Loader2 className="h-8 w-8 animate-spin text-primary" />}>
            <ThankYouContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}
