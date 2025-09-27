
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface RazorpayPaymentButtonProps extends ButtonProps {
  buttonId: string;
  packId: string;
  packType: 'professional' | 'personalized';
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPaymentButton = ({
  buttonId,
  className,
  children,
  packId,
  packType,
  variant,
  size = 'lg',
  ...props
}: RazorpayPaymentButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      sessionStorage.setItem('purchasedPackId', packId);
      sessionStorage.setItem('purchasedPackType', packType);

      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Ensure you have this in your .env.local
        button_id: buttonId,
        handler: function (response: any) {
          // This function is called after a successful payment
          router.push('/thank-you');
        },
      });
      
      rzp.open();
    } else {
        console.error("Razorpay script not loaded");
        alert("Payment gateway is not available at the moment. Please try again later.");
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn('w-full font-bold', className)}
      {...props}
    >
      {children}
    </Button>
  );
};

export default RazorpayPaymentButton;
