
'use server';

import { z } from 'zod';
import { premiumPacks, type PremiumPack } from '@/lib/premium-packs';
import { individualChecklists, type IndividualChecklist } from '@/lib/individual-checklists';

const ContactFormSchema = z.object({
  email: z.string().email(),
  packId: z.string(),
});

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function addContact(data: ContactFormInputs) {
    const { email, packId } = data;
    
    const pack = premiumPacks.find(p => p.id === packId);
    const listId = pack?.listId;
    
    if (!listId) {
        return { success: false, message: 'Invalid pack ID or no list associated.' };
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
        console.error('Brevo API key is not configured.');
        return { success: false, message: 'Server configuration error.' };
    }

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
            body: JSON.stringify({
                email,
                listIds: [listId],
                updateEnabled: true,
            }),
        });

        if (response.ok) {
            return { success: true, message: 'Contact added successfully.' };
        } else {
            const errorData = await response.json();
            console.error('Failed to add contact to Brevo:', errorData);
            return { success: false, message: 'Failed to subscribe. Please try again.' };
        }
    } catch (error) {
        console.error('Error contacting Brevo API:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}


type FoundItem = PremiumPack | IndividualChecklist;

export type VerificationResult = {
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
    checklistId: string | null
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
        
        let foundItem: FoundItem | undefined;
        let itemType: 'pack' | 'individual' | null = null;
        let expectedAmount = 0;

        if (packId) {
             foundItem = premiumPacks.find(p => p.id === packId);
             if (foundItem) {
                itemType = 'pack';
                expectedAmount = foundItem.priceINR * 100;
             }
        } else if (checklistId) {
             foundItem = individualChecklists.find(c => c.id === checklistId);
             if (foundItem) {
                itemType = 'individual';
                expectedAmount = foundItem.priceINR * 100;
             }
        }

        if (!foundItem) {
            return { success: false, error: 'Could not find the purchased item associated with your order.' };
        }
        
        if (foundItem.priceINR > 0 && payment.amount !== expectedAmount) {
             return { success: false, error: `Payment amount mismatch. Expected ₹${expectedAmount / 100} but paid ₹${payment.amount / 100}. Please contact support.` };
        }

        return { success: true, item: foundItem, type: itemType! };

    } catch (err) {
        console.error("Network or other error during Razorpay verification:", err);
        return { success: false, error: 'An unexpected error occurred while verifying your payment.' };
    }
}

