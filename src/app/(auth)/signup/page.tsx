'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUpWithEmail, signInWithGoogle } from "@/app/auth";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { GoogleIcon } from "@/components/icons";
import { getAuth, getRedirectResult } from "firebase/auth";
import firebase_app from "@/lib/firebase";


export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const auth = getAuth(firebase_app);
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          router.push('/dashboard');
        }
      })
      .catch((error) => {
        console.error("Error during Google sign-in redirect: ", error);
        toast({
          variant: "destructive",
          title: "Google Sign-In Failed",
          description: error.message || "Could not sign in with Google. Please try again.",
        });
      });
  }, [router, toast]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { result, error } = await signUpWithEmail(email, password);

    if (error) {
      console.error("Error during signup: ", error);
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: error || "An error occurred. Please try again.",
      });
      return;
    }
    
    // You can also save the first name and last name to Firestore or user profile here
    router.push('/dashboard');
  };

  const handleGoogleSignIn = async () => {
    const { error } = await signInWithGoogle();
    if (error) {
      console.error("Error during Google sign-in: ", error);
      toast({
        variant: "destructive",
        title: "Google Sign-In Failed",
        description: error || "Could not sign in with Google. Please try again.",
      });
      return;
    }
    
    // On redirect, the useEffect will handle routing to the dashboard.
  }


  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSignup} className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input 
                id="first-name" 
                placeholder="Max" 
                required 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input 
                id="last-name" 
                placeholder="Robinson" 
                required 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             />
          </div>
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </form>
         <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
        </div>
         <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
            <GoogleIcon className="mr-2 h-4 w-4" />
            Sign up with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
