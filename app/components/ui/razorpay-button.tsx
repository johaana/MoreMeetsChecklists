
'use client';

import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
    packId: string;
}

declare global {
    interface Window {
        Razorpay: any;
    }
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className, packId }) => {
    const { toast } = useToast();
    const [isScriptLoaded, setIsScriptLoaded] = React.useState(false);
    const [isProcessing, setIsProcessing] = React.useState(false);

    React.useEffect(() => {
        const scriptId = 'razorpay-checkout-js';
        if (document.getElementById(scriptId)) {
            setIsScriptLoaded(true);
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => setIsScriptLoaded(true);
        script.onerror = () => {
             toast({
                variant: "destructive",
                title: "Payment Error",
                description: "Could not load the payment gateway. Please check your network or try again.",
            });
        }
        document.body.appendChild(script);

        return () => {
            // We keep the script once loaded to avoid re-loading on re-renders
        };
    }, [toast]);


    const displayRazorpay = () => {
        if (!isScriptLoaded) {
             toast({
                variant: "destructive",
                title: "Initializing...",
                description: "Please wait a moment for the payment gateway to load.",
            });
            return;
        }

        setIsProcessing(true);
        
        try {
            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
                "payment_button_id": paymentId,
                "prefill": {
                    "name": "",
                    "email": "",
                    "contact": ""
                },
                "callback_url": `${window.location.origin}/thank-you?pack_id=${packId}`,
                "redirect": true,
                "modal": {
                    "ondismiss": function() {
                        setIsProcessing(false);
                    }
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (err) {
            console.error("Razorpay Open Error:", err);
            setIsProcessing(false);
            toast({
                variant: "destructive",
                title: "Launch Error",
                description: "Could not open the payment gateway. Please ensure popups are allowed or try another browser.",
            });
        }
    };

    return (
        <Button 
            onClick={displayRazorpay} 
            className={cn("w-full font-bold h-12", className)} 
            size="lg"
            variant="accent"
            disabled={isProcessing}
        >
            {isProcessing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Get Instant Access
        </Button>
    );
};
