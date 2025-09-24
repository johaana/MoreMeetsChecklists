
'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

interface RazorpayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  buttonId: string;
  onPurchase: () => void;
  children: React.ReactNode;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  buttonId,
  children,
  onPurchase,
  className,
  variant,
  size,
  ...props
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;

    const form = formRef.current;
    if (form) {
      // Clear previous script to avoid duplicates
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
      ref={buttonWrapperRef}
      onClick={handleWrapperClick}
      className={cn(buttonVariants({ variant, size, className }), 'w-full font-bold relative cursor-pointer')}
    >
      {children}
      <form ref={formRef} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
        {/* The script will inject the button here. The form's opacity is 0, making it invisible but clickable. */}
      </form>
    </div>
  );
};

export default RazorpayButton;
