
'use client';

import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params, className }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const scriptLoaded = useRef(false);

    useEffect(() => {
        const loadScript = () => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
            script.async = true;
            script.dataset.payment_button_id = paymentId;
            
            // Remove any existing Razorpay buttons to avoid duplicates.
            const existingButton = formRef.current?.querySelector('.razorpay-payment-button');
            if(existingButton) {
                existingButton.remove();
            }

            if (formRef.current) {
                formRef.current.appendChild(script);
            }
        };

        if (!scriptLoaded.current) {
            loadScript();
            scriptLoaded.current = true;
        }

    }, [paymentId]);

    const formClass = `razorpay-form ${className || ''}`.trim();

    return (
        <form ref={formRef} className={formClass}>
            {params && Object.entries(params).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={String(value)} />
            ))}
        </form>
    );
};

    