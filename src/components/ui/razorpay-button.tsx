
'use client';

import React, { useEffect, useRef } from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params }) => {
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (formRef.current && formRef.current.children.length === 0) {
            const script = document.createElement('script');
            script.src = `https://checkout.razorpay.com/v1/payment-button.js`;
            script.async = true;
            script.setAttribute('data-payment_button_id', paymentId);
            
            const form = document.createElement('form');
            if(params) {
                for (const key in params) {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = String(params[key]);
                    form.appendChild(input);
                }
            }
            form.appendChild(script);
            
            formRef.current.appendChild(form);
        }
    }, [paymentId, params]);

    return <div ref={formRef}></div>;
};
