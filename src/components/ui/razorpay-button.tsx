
'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from './button';

const RazorpayButton: React.FC<{ buttonId: string, children: React.ReactNode }> = ({ buttonId, children }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current) {
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

  const handleCustomButtonClick = () => {
    const razorpayButton = formRef.current?.querySelector('.razorpay-payment-button') as HTMLElement | null;
    if (razorpayButton) {
      razorpayButton.click();
    }
  };

  return (
    <div ref={wrapperRef} onClick={handleCustomButtonClick} className="w-full">
      {children}
      <div style={{ display: 'none' }}>
        <form ref={formRef}></form>
      </div>
    </div>
  );
};

export default RazorpayButton;
