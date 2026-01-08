
'use client';

import React from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

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

    React.useEffect(() => {
        const script = document.createElement('script');
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
            document.body.removeChild(script);
        };
    }, [toast]);


    const displayRazorpay = () => {
        if (!isScriptLoaded) {
             toast({
                variant: "destructive",
                title: "Payment Gateway Not Ready",
                description: "Please wait a moment for the payment gateway to load.",
            });
            return;
        }
        
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
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <Button 
            onClick={displayRazorpay} 
            className={cn("w-full font-bold", className)} 
            size="lg"
            variant="accent"
        >
            Get Instant Access
        </Button>
    );
};
