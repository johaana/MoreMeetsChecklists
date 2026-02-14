
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptInjectedRef = useRef<boolean>(false);

    useEffect(() => {
        if (!containerRef.current || !paymentId) return;
        
        // Prevent redundant script injection
        if (scriptInjectedRef.current) return;

        const container = containerRef.current;
        container.innerHTML = ''; 

        const form = document.createElement('form');
        const script = document.createElement('script');
        
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', paymentId);
        script.async = true;

        // Script will automatically render the button inside the form
        form.appendChild(script);
        container.appendChild(form);
        
        scriptInjectedRef.current = true;

        return () => {
            // Optional: container.innerHTML = '';
        };
    }, [paymentId]);

    return (
        <div 
            ref={containerRef} 
            className={className || "w-full flex justify-center min-h-[60px] razorpay-container"} 
        />
    );
};
