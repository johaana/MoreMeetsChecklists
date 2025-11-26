'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!paymentId || !formContainerRef.current) return;

        // Clear any previous form to avoid duplicates
        if (formContainerRef.current) {
            formContainerRef.current.innerHTML = '';
        }

        const form = document.createElement('form');
        
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        form.appendChild(script);
        formContainerRef.current.appendChild(form);
        
    }, [paymentId]);
    
    return <div ref={formContainerRef} className={className} />;
};
