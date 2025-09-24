
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface RazorpayPaymentButtonProps {
  buttonId: string;
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const RazorpayPaymentButton = ({ buttonId, className, children, onClick }: RazorpayPaymentButtonProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    
    // Clear the form before appending the new script
    while (form.firstChild) {
      form.removeChild(form.firstChild);
    }
    
    form.appendChild(script);

    // Style the button created by Razorpay's script
    const style = document.createElement('style');
    style.innerHTML = `
      .razorpay-payment-button {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };

  }, [buttonId]);

  const handleButtonClick = () => {
    onClick();
    const razorpayButton = formRef.current?.querySelector('.razorpay-payment-button');
    if (razorpayButton instanceof HTMLElement) {
      razorpayButton.click();
    }
  };

  return (
    <div className={cn('relative w-full', className)}>
      <Button
        onClick={handleButtonClick}
        className="w-full font-bold"
      >
        {children}
      </Button>
      <form ref={formRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, zIndex: -1 }}></form>
    </div>
  );
};

export default RazorpayPaymentButton;
