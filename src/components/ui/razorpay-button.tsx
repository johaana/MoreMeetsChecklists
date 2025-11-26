
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const formContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!paymentId) return;

        const form = document.createElement('form');
        
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        form.appendChild(script);

        const container = formContainerRef.current;
        if (container) {
            // Clear previous content and append the new form
            container.innerHTML = '';
            container.appendChild(form);
        }
        
    }, [paymentId]);
    
    return <div ref={formContainerRef} className={className} />;
};
