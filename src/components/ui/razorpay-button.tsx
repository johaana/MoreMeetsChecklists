
'use client';

import * as React from 'react';

const RazorpayButton = ({ paymentButtonId }: { paymentButtonId: string }) => {
    const formHtml = `<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="${paymentButtonId}" async> </script> </form>`;
    
    return (
        <div 
          className={`
            w-full
            [&>form]:w-full 
            [&>form>div]:w-full 
            [&_.razorpay-payment-button]:w-full
            [&_.razorpay-payment-button]:h-11
            [&_.razorpay-payment-button]:bg-accent
            [&_.razorpay-payment-button]:text-accent-foreground
            hover:[&_.razorpay-payment-button]:opacity-90
            [&_.razorpay-payment-button]:rounded-md
            [&_.razorpay-payment-button]:font-bold
            [&_.razorpay-payment-button]:transition-opacity
          `}
          dangerouslySetInnerHTML={{ __html: formHtml }} 
        />
    );
};

export default RazorpayButton;

    