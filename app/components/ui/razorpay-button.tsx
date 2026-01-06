
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const scriptRef = useRef<HTMLScriptElement | null>(null);

    useEffect(() => {
        if (!paymentId) return;

        // Ensure the script is added only once
        if (scriptRef.current) return;

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        const currentForm = formRef.current;
        if (currentForm) {
            currentForm.appendChild(script);
            scriptRef.current = script;
        }

        return () => {
            // Clean up the script when the component unmounts
            if (currentForm && scriptRef.current && currentForm.contains(scriptRef.current)) {
                try {
                    currentForm.removeChild(scriptRef.current);
                } catch (e) {
                    console.warn("Failed to remove Razorpay script on cleanup.", e);
                }
            }
            scriptRef.current = null;
        };
    }, [paymentId]);

    // Apply button styling directly to a wrapper or the form
    // The Razorpay script will replace the form content with its own button.
    // The key is that the Razorpay script creates a button with the class `razorpay-payment-button`.
    // We can style this form to look like a button, and the Razorpay button will inherit some of it.
    // To be more explicit, we can let Razorpay do its thing and just wrap it.
    return (
      <div className={cn(buttonVariants({ size: 'lg' }), "w-full max-w-xs", className)}>
        <form ref={formRef} />
      </div>
    );
};
