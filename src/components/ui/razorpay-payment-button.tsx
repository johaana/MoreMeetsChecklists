
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
  const [scriptLoaded, setScriptLoaded] = React.useState(false);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.Razorpay) {
      const rzp = new window.Razorpay({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use your test key
        button_id: buttonId,
        handler: function (response: any) {
           // On successful payment, redirect to the thank-you page with params
           router.push(`/thank-you?pack_id=${packId}&pack_type=${packType}`);
        },
      });
      
      rzp.open();
    } else {
        console.error("Razorpay script not loaded or available");
        alert("Payment gateway is not available at the moment. Please try again later.");
    }
  };

  if (!scriptLoaded) {
    return (
      <Button size={size} variant={variant} className={cn('w-full font-bold', className)} disabled>
        Loading...
      </Button>
    );
  }

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
