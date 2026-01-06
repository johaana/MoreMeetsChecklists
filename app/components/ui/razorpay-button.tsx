
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RazorpayButtonProps {
    paymentId: string;
    className?: string;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, className }) => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = paymentId;

        const style = document.createElement('style');
        style.innerHTML = `
          .razorpay-payment-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            border-radius: 0.375rem; /* rounded-md */
            font-size: 1rem; /* text-lg */
            font-weight: 500;
            height: 3rem; /* h-12 -> lg */
            padding-left: 2rem; /* px-8 -> lg */
            padding-right: 2rem; /* px-8 -> lg */
            width: 100%;
            background-color: hsl(var(--authority-green)) !important;
            color: hsl(var(--bg-primary)) !important;
            transition: background-color 0.3s;
          }
           .razorpay-payment-button:hover {
             background-color: hsl(var(--authority-green) / 0.9) !important;
          }
        `;
        document.head.appendChild(style);

        const currentFormRef = formRef.current;
        if (currentFormRef) {
            currentFormRef.appendChild(script);
        }

        const interval = setInterval(() => {
            const button = formRef.current?.querySelector('.razorpay-payment-button');
            if (button) {
                button.textContent = 'Buy Now – Instant Download';
                clearInterval(interval);
            }
        }, 100);

        return () => {
          if (currentFormRef && currentFormRef.contains(script)) {
              try {
                  currentFormRef.removeChild(script);
              } catch (e) {
                  // This can happen on fast navigations, it's safe to ignore.
              }
          }
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
          clearInterval(interval);
        };
    }, [paymentId]);

    return (
      <form ref={formRef} className={cn("w-full", className)} />
    );
};
