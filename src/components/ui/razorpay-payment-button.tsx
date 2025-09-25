
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';

interface RazorpayPaymentButtonProps extends ButtonProps {
  buttonId: string;
  onClick: () => void;
}

const RazorpayPaymentButton = ({ 
    buttonId, 
    className, 
    children, 
    onClick,
    variant,
    ...props
}: RazorpayPaymentButtonProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Clear previous script if any
    const existingScript = form.querySelector('script');
    if (existingScript) {
      form.removeChild(existingScript);
    }
    const existingButton = form.querySelector('.razorpay-payment-button');
     if (existingButton) {
        // This is tricky as Razorpay might control this element fully.
        // A simple removal might be best.
        try {
            form.removeChild(existingButton);
        } catch (e) {
            // Ignore if it fails, the script will handle it.
        }
    }


    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    
    form.appendChild(script);

    return () => {
        // Clean up the script and button when the component unmounts
        if (form && script.parentNode === form) {
            form.removeChild(script);
        }
    };
  }, [buttonId]);

  const handleCustomButtonClick = () => {
    onClick();
    // Find the button rendered by Razorpay and click it
    const razorpayButton = formRef.current?.querySelector('.razorpay-payment-button');
    if (razorpayButton instanceof HTMLElement) {
      razorpayButton.click();
    }
  };

  return (
    <div ref={wrapperRef} className={cn('relative w-full', className)} onClick={handleCustomButtonClick}>
        {/* Our styled button */}
        <Button
            className="w-full font-bold"
            variant={variant}
            {...props}
        >
            {children}
        </Button>
        
        {/* The form where Razorpay script injects its button */}
        <form ref={formRef} className="absolute inset-0 w-full h-full z-[-1] opacity-0 pointer-events-none">
             {/* This style ensures the injected button is not visible */}
             <style jsx global>{`
                .razorpay-payment-button {
                    display: none !important;
                }
            `}</style>
        </form>
    </div>
  );
};

export default RazorpayPaymentButton;
