
'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from './button';

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

        const currentFormRef = formRef.current;
        if (currentFormRef) {
            currentFormRef.appendChild(script);
        }

        return () => {
          if (currentFormRef) {
            const scriptInForm = currentFormRef.querySelector('script');
            if (scriptInForm) {
                try {
                    currentFormRef.removeChild(scriptInForm);
                } catch (e) {
                    // This can happen on fast navigations, it's safe to ignore.
                }
            }
          }
        };
    }, [paymentId]);

    return (
      <form ref={formRef} className={className}>
        <noscript>
          <Button asChild size="lg">
            <a href={`https://rzp.io/l/${paymentId}`} target="_blank" rel="noopener noreferrer">
              Buy Now
            </a>
          </Button>
        </noscript>
      </form>
    );
};
