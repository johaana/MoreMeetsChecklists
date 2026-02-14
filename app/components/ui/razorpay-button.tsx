
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !paymentId) return;

        // Clear any existing content to prevent duplicate buttons
        containerRef.current.innerHTML = '';

        // Create the form element required by Razorpay
        const form = document.createElement('form');
        
        // Create the script element provided by user
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', paymentId);
        script.async = true;

        form.appendChild(script);
        containerRef.current.appendChild(form);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [paymentId]);

    return (
        <div 
            ref={containerRef} 
            className={className || "w-full flex justify-center min-h-[50px]"} 
        />
    );
};
