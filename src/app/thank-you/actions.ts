
'use server';

import { premiumPacks, PremiumPack } from '@/lib/premium-packs';
import { individualChecklists, IndividualChecklist } from '@/lib/individual-checklists';

const virtualPersonalizedPack = (basePack: PremiumPack): PremiumPack => ({
  ...basePack, // Inherit details from the original pack
  id: 'personalized_pack',
  title: `Global Compliance Edition: ${basePack.title}`,
});


type FoundItem = PremiumPack | IndividualChecklist;

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
        let expectedAmount = 0;

        const basePack = premiumPacks.find(p => p.id === packId);

        if (isPersonalized) {
             if (!basePack) return { success: false, error: 'Could not find the base pack for personalization.' };
             foundItem = virtualPersonalizedPack(basePack);
             itemType = 'pack';
             // Hardcoded price for the global compliance pack
             expectedAmount = 10999 * 100;
        } else if (packId) {
             foundItem = basePack || null;
             itemType = 'pack';
             if (foundItem) expectedAmount = foundItem.priceINR * 100;
        } else if (checklistId) {
             foundItem = individualChecklists.find(c => c.id === checklistId) || null;
             itemType = 'individual';
             if (foundItem) expectedAmount = foundItem.priceINR * 100;
        }

        if (!foundItem) {
            return { success: false, error: 'Could not find the purchased item associated with your order.' };
        }
        
        if (payment.amount !== expectedAmount) {
             return { success: false, error: `Payment amount mismatch. Expected ₹${expectedAmount / 100} but paid ₹${payment.amount / 100}. Please contact support.` };
        }

        return { success: true, item: foundItem, type: itemType! };

    } catch (err) {
        console.error("Network or other error during Razorpay verification:", err);
        return { success: false, error: 'An unexpected error occurred while verifying your payment.' };
    }
}
