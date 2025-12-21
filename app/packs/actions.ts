
"use server";

import { z } from "zod";
import crypto from 'crypto';
import { premiumPacks } from "@/lib/premium-packs";
import { individualChecklists } from "@/lib/individual-checklists";

const brevoApiKey = process.env.BREVO_API_KEY;
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

const AddContactSchema = z.object({
  email: z.string().email(),
  packId: z.string(),
});

export async function addContact(input: { email: string, packId: string }): Promise<{ success: boolean, message?: string }> {
  try {
    const validatedInput = AddContactSchema.parse(input);
    const { email, packId } = validatedInput;

    const pack = premiumPacks.find(p => p.id === packId);
    if (!pack || !pack.listId) {
      return { success: false, message: "Invalid pack ID." };
    }

    if (!brevoApiKey) {
        console.error("Brevo API key is not configured.");
        return { success: false, message: "Subscription service is currently unavailable." };
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        listIds: [pack.listId],
        updateEnabled: true
      })
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, message: errorData.message || 'Failed to add contact.' };
    }
  } catch (error) {
     if (error instanceof z.ZodError) {
      return { success: false, message: "Invalid input provided." };
    }
    console.error("Error adding contact to Brevo list:", error);
    return { success: false, message: "An unexpected error occurred." };
  }
}

export async function verifyRazorpayPayment(paymentId: string, packId: string | null, checklistId: string | null): Promise<{ success: boolean; item?: any; type?: 'pack' | 'individual', error?: string }> {
    if (!razorpayKeySecret) {
        return { success: false, error: 'Payment gateway not configured.' };
    }
    
    if (!packId && !checklistId) {
        return { success: false, error: 'No product ID provided.' };
    }

    let item: any = null;
    let type: 'pack' | 'individual' | null = null;
    
    if (packId) {
        item = premiumPacks.find(p => p.id === packId);
        type = 'pack';
    } else if (checklistId) {
        item = individualChecklists.find(c => c.id === checklistId);
        type = 'individual';
    }

    if (!item) {
        return { success: false, error: 'Product not found.' };
    }
    
    const paymentUrl = `https://api.razorpay.com/v1/payments/${paymentId}`;
    const username = process.env.RAZORPAY_KEY_ID;
    const password = razorpayKeySecret;

    try {
        const paymentResponse = await fetch(paymentUrl, {
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        });

        if (!paymentResponse.ok) {
            const errorData = await paymentResponse.json();
            console.error('Razorpay API error:', errorData);
            return { success: false, error: 'Failed to fetch payment details from Razorpay.' };
        }

        const payment = await paymentResponse.json();

        if (payment.status === 'captured') {
            return { success: true, item, type: type as 'pack' | 'individual' };
        } else {
            return { success: false, error: `Payment status is '${payment.status}'. Verification failed.` };
        }

    } catch (error) {
        console.error('Error verifying Razorpay payment:', error);
        return { success: false, error: 'An unexpected error occurred during payment verification.' };
    }
}
