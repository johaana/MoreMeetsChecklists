
'use client';

import * as React from 'react';
import { premiumPacks, PremiumPack } from '@/lib/premium-packs';
import { useSearchParams } from 'next/navigation';

// In a real app, this would be a map of payment_id -> pack_id from your backend database
// For this simulation, we'll just check if the payment ID format is valid.
const virtualPersonalizedPack = {
  id: 'personalized_pack',
  title: 'Personalized Pack',
  // Use checklists from a sample pack for generation logic
  checklists: premiumPacks[0]?.checklists || [], 
  // Add other required fields for PremiumPack type
  priceUSD: 0,
  priceINR: 10999,
  category: "Personalized",
  description: "A custom pack tailored for you.",
  icon: <></>,
  sampleItems: [],
};


export function useRazorpayVerification() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pack, setPack] = React.useState<PremiumPack | (typeof virtualPersonalizedPack) | null>(null);
  const searchParams = useSearchParams();

  const verifyPayment = async (paymentId: string) => {
    setIsLoading(true);
    setError(null);
    setPack(null);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Basic validation
    if (!paymentId || !paymentId.startsWith('pay_')) {
      setError('Invalid Payment ID format.');
      setIsLoading(false);
      return;
    }

    // In a real application, you would make an API call to your backend here.
    // Your backend would then call the Razorpay API to verify the payment ID's status
    // and return the pack_id associated with that transaction.
    // For this simulation, we'll get the pack_id from the URL.

    const packId = searchParams.get('pack_id');
    const isPersonalized = searchParams.get('type') === 'personalized';

    if (isPersonalized) {
      setPack(virtualPersonalizedPack);
    } else if (packId) {
      const foundPack = premiumPacks.find(p => p.id === packId);
      if (foundPack) {
        setPack(foundPack);
      } else {
        setError('Could not find the purchased pack associated with your order.');
      }
    } else {
      setError('Missing pack information in the URL. Please check the link from your email.');
    }

    setIsLoading(false);
  };

  return { isLoading, error, pack, verifyPayment };
}
