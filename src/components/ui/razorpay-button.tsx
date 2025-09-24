'use client';

import React, { useEffect, useRef } from 'react';

const RazorpayButton: React.FC<{ buttonId: string }> = ({ buttonId }) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
        // Clear any existing scripts to prevent duplicates during development hot-reloads
        while (formRef.current.firstChild) {
            formRef.current.removeChild(formRef.current.firstChild);
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
        script.async = true;
        script.dataset.payment_button_id = buttonId;
        
        formRef.current.appendChild(script);
    }
  }, [buttonId]);

  return <form ref={formRef}></form>;
};

export default RazorpayButton;
