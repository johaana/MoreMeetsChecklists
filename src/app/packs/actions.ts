
'use server';

import { premiumPacks } from "@/lib/premium-packs";

export type ContactData = {
    name: string;
    email: string;
    listId: number;
}

// Brevo (formerly Sendinblue) API details
const brevoApiUrl = 'https://api.brevo.com/v3/contacts';

/**
 * Adds a contact to a Brevo list.
 * @param data - The contact data including name, email, and list ID.
 * @returns An object indicating success or failure.
 */
export async function addContact(data: ContactData): Promise<{ success: boolean; message: string }> {
    const brevoKey = process.env.BREVO_API_KEY;

    if (!brevoKey) {
        console.error("Brevo API key is not set in environment variables.");
        return { success: false, message: "Server configuration error. Please contact support." };
    }

    try {
        const response = await fetch(brevoApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': brevoKey,
            },
            body: JSON.stringify({
                email: data.email,
                attributes: {
                    NAME: data.name,
                },
                listIds: [data.listId],
                updateEnabled: true,
            }),
        });

        if (response.ok) {
            return { success: true, message: "Successfully subscribed!" };
        } else {
            const errorData = await response.json();
            console.error("Brevo API Error:", errorData);
            return { success: false, message: errorData.message || "Could not subscribe. Please try again." };
        }
    } catch (error) {
        console.error("Network or other error during contact creation:", error);
        return { success: false, message: "An unexpected error occurred." };
    }
}
