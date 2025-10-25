
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

    useEffect(() => {
        const scriptId = `razorpay-script-${paymentId.replace(/[^a-zA-Z0-9]/g, '')}`;

        // If script is already loaded, don't add it again.
        if (document.getElementById(scriptId)) {
            return;
        }

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;
        
        const form = document.createElement('form');
        if (params) {
            for (const key in params) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = String(params[key]);
                form.appendChild(input);
            }
        }
        form.appendChild(script);

        if (formRef.current) {
            formRef.current.innerHTML = ''; // Clear previous content
            formRef.current.appendChild(form);
        }

        return () => {
            // Cleanup script if component unmounts, though usually not necessary
            const existingScript = document.getElementById(scriptId);
            if (existingScript) {
                existingScript.remove();
            }
        };

    }, [paymentId, params]);
    
    const formClass = `razorpay-form ${className || ''}`.trim();

    return <div ref={formRef} className={formClass} />;
};
