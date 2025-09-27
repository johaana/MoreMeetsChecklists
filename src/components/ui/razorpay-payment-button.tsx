
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

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
  // Generate a unique ID for the form input to connect the label
  const inputId = React.useId();

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Clear previous script if any to prevent duplicates on re-render
    const existingScript = form.querySelector('script');
    if (existingScript) {
      form.removeChild(existingScript);
    }
    
    // The Razorpay script will look for this form and inject its button/input
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;
    
    form.appendChild(script);

    return () => {
        // Clean up the script when the component unmounts
        if (form && script.parentNode === form) {
            try {
                form.removeChild(script);
            } catch (e) {
                // Ignore errors during cleanup
            }
        }
    };
  }, [buttonId]);

  const handleWrapperClick = () => {
    // This function is now only responsible for the side-effect (saving to session storage)
    onClick();
  };

  return (
    <div 
        className={cn('relative w-full', className)} 
        onClick={handleWrapperClick}
    >
        {/* Our styled button is now a Label pointing to the Razorpay input */}
        <Label
            htmlFor={inputId}
            className={cn(
                'w-full font-bold',
                // We manually apply button styles to the Label
                'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                variant === 'accent' ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'bg-primary text-primary-foreground hover:bg-primary/90',
                'h-11 rounded-md px-8', // Match "lg" size from original Button
                'cursor-pointer' // Make it look clickable
            )}
        >
            {children}
        </Label>
        
        {/* The form where Razorpay script injects its button. It remains hidden. */}
        <form ref={formRef} className="absolute inset-0 w-full h-full z-[-1] opacity-0 pointer-events-none">
            {/* The script will inject an input here. We give it an ID so our Label can target it. */}
             <input type="hidden" id={inputId} />
             {/* This style ensures the injected button from Razorpay remains invisible */}
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
