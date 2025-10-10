
'use server';

import { premiumPacks, PremiumPack } from '@/lib/premium-packs';
import { individualChecklists, IndividualChecklist } from '@/lib/individual-checklists';

const virtualPersonalizedPack = {
  id: 'personalized_pack',
  title: 'Personalized Pack',
  checklists: premiumPacks.flatMap(p => p.checklists), 
  priceUSD: 0,
  priceINR: 11999,
  category: "Personalized",
  description: "A custom pack tailored for you.",
  sampleItems: [],
};

type FoundItem = PremiumPack | (typeof virtualPersonalizedPack) | IndividualChecklist;

type VerificationResult = {
    success: true;
    item: FoundItem;
    type: 'pack' | 'individual'
} | {
    success: false;
    error: string;
};

export async function verifyRazorpayPayment(
    paymentId: string, 
    packId: string | null,
    checklistId: string | null, 
    isPersonalized: boolean
): Promise<VerificationResult> {
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
            return { success: false, error: `Payment verification failed. Please check your Payment ID or contact support.` };
        }

        const payment = await response.json();

        if (payment.status !== 'captured') {
            return { success: false, error: `Payment not completed. Status: ${payment.status}` };
        }
        
        let foundItem: FoundItem | null = null;
        let itemType: 'pack' | 'individual' | null = null;

        if (isPersonalized) {
             foundItem = virtualPersonalizedPack;
             itemType = 'pack';
        } else if (packId) {
             foundItem = premiumPacks.find(p => p.id === packId) || null;
             itemType = 'pack';
        } else if (checklistId) {
             foundItem = individualChecklists.find(c => c.id === checklistId) || null;
             itemType = 'individual';
        }

        if (!foundItem) {
            return { success: false, error: 'Could not find the purchased item associated with your order.' };
        }
        
        const expectedAmount = foundItem.priceINR * 100;
        if (payment.amount !== expectedAmount) {
             return { success: false, error: `Payment amount mismatch. Please contact support for assistance.` };
        }

        return { success: true, item: foundItem, type: itemType! };

    } catch (err) {
        console.error("Network or other error during Razorpay verification:", err);
        return { success: false, error: 'An unexpected error occurred while verifying your payment.' };
    }
}
