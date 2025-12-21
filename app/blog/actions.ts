
"use server";

import { z } from "zod";

const brevoApiKey = process.env.BREVO_API_KEY;
const blogSubscriberListId = 8;

const SubscribeSchema = z.object({
    email: z.string().email(),
});

export async function subscribeToBlog(input: { email: string }): Promise<{ success: boolean, message: string }> {
    try {
        const validatedInput = SubscribeSchema.parse(input);
        const email = validatedInput.email;
        
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
                listIds: [blogSubscriberListId],
                updateEnabled: true 
            })
        });

        if (response.ok) {
            return { success: true, message: "Successfully subscribed." };
        } else {
            const errorData = await response.json();
            console.error("Brevo API Error:", errorData);
            return { success: false, message: errorData.message || "Failed to subscribe." };
        }
    } catch (error) {
        console.error("Subscription Error:", error);
        if (error instanceof z.ZodError) {
             return { success: false, message: "Invalid email address provided." };
        }
        return { success: false, message: "An unexpected error occurred." };
    }
}
