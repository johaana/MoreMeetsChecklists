'use client';

import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithEmail, signInWithGoogle } from "@/app/auth";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { GoogleIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { getAuth, getRedirectResult } from "firebase/auth";
import firebase_app from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { result, error } = await signInWithEmail(email, password);

    if (error) {
       console.error("Error during login: ", error);
       toast({
         variant: "destructive",
         title: "Login Failed",
         description: error || "Please check your credentials and try again.",
       });
       return;
    }
    
    // else successful
    router.push('/dashboard');
  };

  const handleGoogleSignIn = async () => {
    const { result, error } = await signInWithGoogle();
    if (error) {
      console.error("Error during Google sign-in: ", error);
      toast({
        variant: "destructive",
        title: "Google Sign-In Failed",
        description: error || "Could not sign in with Google. Please try again.",
      });
      return;
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="ml-auto inline-block text-sm underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Input 
              id="password" 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
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
            Login with Google
        </Button>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
