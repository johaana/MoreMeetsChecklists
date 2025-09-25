
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

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const scriptId = `razorpay-script-${buttonId}`;
    
    // Check if script already exists
    if (document.getElementById(scriptId)) {
        return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    
    form.appendChild(script);

  }, [buttonId]);

  return (
    <div className={cn('relative w-full', className)} onClick={onClick}>
        <Button
            className="w-full font-bold pointer-events-none"
            variant={variant}
            {...props}
        >
            {children}
        </Button>
        <form 
            ref={formRef} 
            className="absolute inset-0 w-full h-full z-10"
        >
            {/* The script will inject a button here. We make it transparent. */}
            <style jsx global>{`
                form[data-button-id="${buttonId}"] .razorpay-payment-button {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    cursor: pointer;
                }
            `}</style>
             <div className="absolute inset-0" data-button-id={buttonId} />
        </form>
    </div>
  );
};

export default RazorpayPaymentButton;
