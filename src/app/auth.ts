
'use server';

import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";
import firebase_app from "@/lib/firebase";
import { redirect } from 'next/navigation';
import type { UserCredential } from "firebase/auth";

const auth = getAuth(firebase_app);
const googleProvider = new GoogleAuthProvider();

export async function signUpWithEmail(email: string, password: string): Promise<{result?: UserCredential, error?: string}> {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function signInWithEmail(email: string, password: string): Promise<{result?: UserCredential, error?: string}> {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { result };
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function signInWithGoogle(): Promise<{result?: UserCredential, error?: string}> {
  try {
    await signInWithRedirect(auth, googleProvider);
    // After the redirect, the result needs to be handled on page load.
    // The following code may not be reached if the redirect is successful.
    const result = await getRedirectResult(auth);
    if (result) {
        return { result };
    }
    return {}; // No error, but no immediate result either.
  } catch (error: any) {
    return { error: error.message };
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error("Error signing out: ", error);
    return { error: "Failed to sign out." };
  }
  redirect('/');
}
