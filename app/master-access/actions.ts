
"use server";

import { z } from "zod";

const PasswordSchema = z.object({
  password: z.string(),
});

export async function verifyPassword(input: { password: string }): Promise<{ success: boolean }> {
  try {
    const validatedInput = PasswordSchema.parse(input);
    const { password } = validatedInput;

    const adminPassword = process.env.ADMIN_PASSWORD || "moremeets_admin_2024";

    if (password === adminPassword) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
}
