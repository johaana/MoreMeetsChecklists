
'use client';

import React from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params }) => {
    const scriptSrc = `https://checkout.razorpay.com/v1/payment-button.js`;

    return (
        <form>
            {params && Object.entries(params).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={String(value)} />
            ))}
            <script
                src={scriptSrc}
                data-payment_button_id={paymentId}
                async
            >
            </script>
        </form>
    );
};
