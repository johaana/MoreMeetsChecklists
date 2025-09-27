
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';

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
  size = 'lg',
  ...props
}: RazorpayPaymentButtonProps) => {
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // To prevent script duplication on re-renders, check if it's already there
    if (form.querySelector('script')) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;

    form.appendChild(script);

    // No cleanup function needed, as we want the script to persist
  }, [buttonId]);

  return (
    <div
      className={cn('relative w-full', className)}
      // The side-effect onClick (e.g., sessionStorage) is attached here
      onClick={onClick}
    >
      {/* 1. The Decoy Button: This is what the user sees. It has no click event of its own. */}
      <Button
        variant={variant}
        size={size}
        className="w-full font-bold pointer-events-none" // pointer-events-none ensures clicks go "through" to the element behind it
        aria-hidden="true" // Hide from screen readers as it's not the interactive element
        tabIndex={-1} // Not focusable
        {...props}
      >
        {children}
      </Button>

      {/* 2. The Real Button (Invisible): This form is stretched over the decoy button. */}
      {/* It's transparent, but it's what the user ACTUALLY clicks. */}
      <form
        ref={formRef}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        aria-label={`Purchase ${children}`}
      >
        {/*
          The Razorpay script will inject its own button inside this form.
          By making the form itself a positioned, zero-opacity overlay, we ensure
          the user is clicking the real, functional element without seeing it.
        */}
      </form>
    </div>
  );
};

export default RazorpayPaymentButton;
