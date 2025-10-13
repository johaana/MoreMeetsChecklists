
'use client';

import React from 'react';

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params }) => {
    const scriptSrc = `https://checkout.razorpay.com/v1/payment-button.js`;
    const scriptContent = `
        var rzp = new Razorpay({
            key: "${process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID}"
        });
        document.getElementById('rzp-button-${paymentId}').onclick = function(e){
            rzp.open();
            e.preventDefault();
        }
    `;

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
