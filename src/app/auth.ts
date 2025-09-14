
'use server';

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  signOut as firebaseSignOut
} from "firebase/auth";
import firebase_app from "@/lib/firebase";
import { redirect } from 'next/navigation';

const auth = getAuth(firebase_app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    // The signInWithPopup function returns a promise that resolves with a UserCredential object.
    // We are not using the result here, but it's available if you need user information.
    // const result = await signInWithPopup(auth, provider);
    // const user = result.user;
    // console.log(user);
  } catch (error) {
    console.error("Error signing in with Google: ", error);
    return { error: "Failed to sign in with Google." };
  }

  // After successful sign-in, redirect to the dashboard.
  // Note: This server-side redirect might not work as expected in a client component event handler.
  // The redirection is handled on the client side in the component itself.
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
