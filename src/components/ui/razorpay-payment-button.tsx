
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface RazorpayPaymentButtonProps extends ButtonProps {
  packId: string;
  packType: 'professional' | 'personalized';
  amount: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPaymentButton = ({
  className,
  children,
  packId,
  packType,
  variant,
  amount,
  size = 'lg',
  ...props
}: RazorpayPaymentButtonProps) => {
  const router = useRouter();
  const [scriptLoaded, setScriptLoaded] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => {
        alert("Failed to load payment gateway. Please check your internet connection and try again.");
    }
    document.body.appendChild(script);

    return () => {
      // Check if the script is still in the body before trying to remove it
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleClick = () => {
     if (!scriptLoaded) {
        alert("Payment gateway is still loading. Please wait a moment and try again.");
        return;
    }
    setIsLoading(true);

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "MoreMeets",
        description: `Purchase of ${packType} pack: ${packId}`,
        handler: function (response: any){
            // On successful payment, redirect to the thank-you page with params
            router.push(`/thank-you?pack_id=${packId}&pack_type=${packType}&payment_id=${response.razorpay_payment_id}`);
        },
        prefill: {
            name: "Test User",
            email: "test.user@example.com",
            contact: "9999999999"
        },
        notes: {
            packId: packId,
            packType: packType,
        },
        theme: {
            "color": "#0A2540"
        },
        modal: {
            ondismiss: function() {
                setIsLoading(false);
            }
        }
    };
    
    if (typeof window !== 'undefined' && window.Razorpay) {
      const rzp = new window.Razorpay(options);
       rzp.on('payment.failed', function (response: any){
            alert(`Oops! Something went wrong. Payment Failed. Error: ${response.error.description}`);
            setIsLoading(false);
        });
      rzp.open();
    } else {
        alert("Payment gateway is not available at the moment. Please try again later.");
        setIsLoading(false);
    }
  };

  if (!scriptLoaded) {
    return (
      <Button size={size} variant={variant} className={cn('w-full font-bold', className)} disabled>
        Loading Gateway...
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn('w-full font-bold', className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Processing..." : children}
    </Button>
  );
};

export default RazorpayPaymentButton;
