
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const initializedRef = useRef<string | null>(null);

    useEffect(() => {
        if (!containerRef.current || !paymentId) return;
        
        // Prevent re-initialization if the paymentId hasn't changed
        // This is critical to avoid "Too many requests" errors from Razorpay
        if (initializedRef.current === paymentId) return;

        const container = containerRef.current;
        container.innerHTML = ''; // Clear previous button

        const form = document.createElement('form');
        const script = document.createElement('script');
        
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.setAttribute('data-payment_button_id', paymentId);
        script.async = true;

        form.appendChild(script);
        container.appendChild(form);
        
        initializedRef.current = paymentId;

        return () => {
            // Optional: Cleanup if needed, but usually the form handles its own removal
            // initializedRef.current = null;
        };
    }, [paymentId]);

    return (
        <div 
            ref={containerRef} 
            className={className || "w-full flex justify-center min-h-[60px]"} 
        />
    );
};
