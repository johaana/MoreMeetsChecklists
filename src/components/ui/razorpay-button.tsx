
'use client';

import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';

interface RazorpayButtonProps extends React.FormHTMLAttributes<HTMLFormElement>, VariantProps<typeof buttonVariants> {
  buttonId: string;
  onClick: () => void;
  children: React.ReactNode;
}

const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  buttonId,
  children,
  onClick,
  className,
  variant,
  size,
  ...props
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;
    script.dataset.payment_button_id = buttonId;

    const form = document.getElementById(`razorpay-form-${buttonId}`);
    if (form) {
      // Clear previous script if any
      while (form.firstChild) {
        form.removeChild(form.firstChild);
      }
      form.appendChild(script);
    }
    
    // Add custom styles to make the razorpay button look like our button
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

  const handleWrapperClick = () => {
    onClick();
    const razorpayButton = document.querySelector(
      `#razorpay-form-${buttonId} .razorpay-payment-button`
    ) as HTMLElement | null;
    if (razorpayButton) {
      razorpayButton.click();
    }
  };

  return (
    <div onClick={handleWrapperClick} className={cn(buttonVariants({ variant, size, className }), 'w-full font-bold')}>
        {children}
      <form id={`razorpay-form-${buttonId}`} {...props} style={{ display: 'none' }}></form>
    </div>
  );
};

export default RazorpayButton;
