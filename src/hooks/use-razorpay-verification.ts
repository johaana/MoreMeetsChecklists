
'use client';

import * as React from 'react';
import { premiumPacks, PremiumPack } from '@/lib/premium-packs';

// In a real app, this would be a map of payment_id -> pack_id from your backend database
const paymentIdToPackIdMap: Record<string, string> = {
  // --- Professional Packs ---
  // Simulate successful payment for any Professional Pack
  // We'll use the Hospitality pack's paymentId as a representative example
  'pay_success_professional': 'hospitality_excellence_suite',

  // --- Personalized Packs ---
  // Simulate successful payment for any Personalized Pack
  'pay_success_personalized': 'personalized_pack', // A virtual ID for personalized packs

  // --- Invalid ID for testing ---
  'pay_invalid_id': 'invalid',
};

const virtualPersonalizedPack = {
  id: 'personalized_pack',
  title: 'Personalized Pack',
  checklists: premiumPacks[0].checklists, // Use checklists from a sample pack
};

export function useRazorpayVerification() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [pack, setPack] = React.useState<PremiumPack | (typeof virtualPersonalizedPack) | null>(null);

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
    // Your backend would then call the Razorpay API to verify the payment ID's status.
    // fetch(`/api/verify-payment?paymentId=${paymentId}`)

    // For this simulation, we'll use a hardcoded map.
    const testPackId = paymentIdToPackIdMap[paymentId];
    
    // A more realistic simulation for demo purposes
    if (paymentId === 'pay_success_professional') {
        // Just pick the first one for demonstration
        const foundPack = premiumPacks.find(p => p.id === 'hospitality_excellence_suite');
         if (foundPack) {
            setPack(foundPack);
        } else {
            setError('Could not find the purchased pack.');
        }
    } else if (paymentId === 'pay_success_personalized') {
        setPack(virtualPersonalizedPack);
    } else {
        setError('Payment ID not found or payment was not successful.');
    }

    setIsLoading(false);
  };

  return { isLoading, error, pack, verifyPayment };
}
