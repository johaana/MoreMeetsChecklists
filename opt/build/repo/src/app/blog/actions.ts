'use server';

import { z } from 'zod';

const SubscribeFormSchema = z.object({
  email: z.string().email(),
});

type SubscribeFormInputs = z.infer<typeof SubscribeFormSchema>;

// This function will add a contact to a specific Brevo list for blog subscribers.
// The List ID (8) is hardcoded here as requested.
export async function subscribeToBlog(data: SubscribeFormInputs) {
    const { email } = data;
    const listId = 8; // Brevo List ID for "Blog subscribers"

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
        console.error('Brevo API key is not configured.');
        return { success: false, message: 'Server configuration error. Could not subscribe.' };
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
            return { success: true, message: 'Successfully subscribed!' };
        } else {
            const errorData = await response.json();
            console.error('Failed to add contact to Brevo:', errorData);
            // Provide a user-friendly message
            if (errorData?.code === 'duplicate_parameter') {
                return { success: true, message: 'This email is already subscribed.' };
            }
            return { success: false, message: errorData.message || 'Failed to subscribe. Please try again.' };
        }
    } catch (error) {
        console.error('Error contacting Brevo API:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
