
'use client';

import React from 'react';
import Script from 'next/script';

interface RazorpayButtonProps {
    paymentId: string;
    params?: Record<string, string | number>;
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({ paymentId, params }) => {
    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/payment-button.js" strategy="lazyOnload" />
            <form>
                {params && Object.entries(params).map(([key, value]) => (
                    <input key={key} type="hidden" name={key} value={value} />
                ))}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            var rzp_payment_button_id = "${paymentId}";
                        `,
                    }}
                />
            </form>
        </>
    );
};
