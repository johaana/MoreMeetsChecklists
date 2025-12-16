
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

        formRef.current?.appendChild(script);

        return () => {
          if (formRef.current) {
            const scriptInForm = formRef.current.querySelector('script');
            if (scriptInForm) {
              formRef.current.removeChild(scriptInForm);
            }
          }
        };
    }, [paymentId]);

    return (
      <form ref={formRef} className={className}>
        {/* The script will inject the button here. We can have a fallback button. */}
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
