
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';

interface RazorpayButtonProps extends React.HTMLAttributes<HTMLFormElement> {
  buttonId: string;
  onPurchase: () => void;
  children: React.ReactNode;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  buttonId,
  children,
  onPurchase,
  className,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;

    const form = formRef.current;
    if (form) {
      // Clear previous script to avoid duplicates when the buttonId changes
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      form.appendChild(script);
    }
  }, [buttonId]);

  const handleWrapperClick = () => {
    onPurchase();
  };

  return (
    <div
      onClick={handleWrapperClick}
      className={cn(buttonVariants({ variant: 'default', size: 'default' }), 'w-full font-bold relative cursor-pointer')}
    >
      {children}
      <form
        ref={formRef}
        {...props}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      >
        {/* Razorpay script will inject the button here */}
      </form>
    </div>
  );
};

export default RazorpayButton;
