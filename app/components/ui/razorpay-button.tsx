
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
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (formRef.current?.querySelector('script')) {
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        const currentForm = formRef.current;
        if (currentForm) {
            currentForm.appendChild(script);
        }

    }, [paymentId]);

    // This component now only renders the form which Razorpay's script will target.
    // All styling and surrounding text is handled by the parent component.
    return (
        <form ref={formRef} className={cn("w-full", className)} />
    );
};
