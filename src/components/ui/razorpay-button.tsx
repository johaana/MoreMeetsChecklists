
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params }) => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        if (formRef.current) {
            // Clear any previous scripts to avoid duplicates on re-render
            formRef.current.innerHTML = ''; 
            formRef.current.appendChild(script);
        }

        // Cleanup function to remove the script when the component unmounts
        return () => {
            if (formRef.current) {
                formRef.current.innerHTML = '';
            }
        };
    }, [paymentId]); // Re-run the effect if the paymentId changes

    return (
        <form ref={formRef}>
            {params && Object.entries(params).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={String(value)} />
            ))}
            {/* The Razorpay script will be appended here by the useEffect hook */}
        </form>
    );
};
