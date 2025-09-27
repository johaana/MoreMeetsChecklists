'use server';

import { premiumPacks, PremiumPack } from '@/lib/premium-packs';

const virtualPersonalizedPack = {
  id: 'personalized_pack',
  title: 'Personalized Pack',
  checklists: premiumPacks[0]?.checklists || [], 
  priceUSD: 0,
  priceINR: 10999,
  category: "Personalized",
  description: "A custom pack tailored for you.",
  sampleItems: [],
};

type VerificationResult = {
    success: true;
    pack: PremiumPack | (typeof virtualPersonalizedPack);
} | {
    success: false;
    error: string;
};

export async function verifyRazorpayPayment(paymentId: string, packId: string | null, isPersonalized: boolean): Promise<VerificationResult> {
    if (!paymentId || !paymentId.startsWith('pay_')) {
        return { success: false, error: 'Invalid Payment ID format.' };
    }

    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
        console.error("Razorpay API keys are not set in environment variables.");
        return { success: false, error: 'Server configuration error. Please contact support.' };
    }

    try {
        const response = await fetch(`https://api.razorpay.com/v1/payments/${paymentId}`, {
            headers: {
                'Authorization': `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString('base64')}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Razorpay API Error:", errorData);
            return { success: false, error: `Payment verification failed: ${errorData.error.description}` };
        }

        const payment = await response.json();

        if (payment.status !== 'captured') {
            return { success: false, error: `Payment not completed. Status: ${payment.status}` };
        }
        
        let foundPack: PremiumPack | (typeof virtualPersonalizedPack) | null = null;
        
        if (isPersonalized) {
             foundPack = virtualPersonalizedPack;
        } else if (packId) {
             foundPack = premiumPacks.find(p => p.id === packId) || null;
        }

        if (!foundPack) {
            return { success: false, error: 'Could not find the purchased pack associated with your order.' };
        }
        
        // Final check on amount. Razorpay amount is in paise.
        const expectedAmount = foundPack.priceINR * 100;
        if (payment.amount !== expectedAmount) {
             return { success: false, error: `Payment amount mismatch. Expected ${expectedAmount}, got ${payment.amount}.` };
        }

        return { success: true, pack: foundPack };

    } catch (err) {
        console.error("Network or other error during Razorpay verification:", err);
        return { success: false, error: 'An unexpected error occurred while verifying your payment.' };
    }
}