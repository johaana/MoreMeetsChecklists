
import Link from "next/link";
import { Logo } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                All Packages
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        Contact Us
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        We're here to help. Reach out to us with any questions or inquiries.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-headline text-primary">Get in Touch</h2>
                            <p className="text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
                        </div>
                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-3"><Mail className="w-5 h-5 text-primary"/> General Inquiries</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a href="mailto:support@moremeets.com" className="text-primary underline">support@moremeets.com</a>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-3"><Phone className="w-5 h-5 text-primary"/> Phone</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">(+91) 123-456-7890</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-3"><MapPin className="w-5 h-5 text-primary"/> Office</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <p className="text-muted-foreground">123 Business Avenue, Mumbai, India</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="space-y-8">
                         <div className="space-y-4">
                            <h2 className="text-2xl font-bold font-headline text-primary">Send a Message</h2>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter your email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                                </div>
                                <Button type="submit" className="w-full" variant="accent">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </main>

       <footer className="w-full border-t bg-secondary/50 mt-12">
            <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                     <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The Professional Standard for Compliance & Operations Checklists.
                    </p>
                </div>
                 <div className="flex flex-col gap-2 items-center text-sm">
                    <p className="font-semibold">Quick Links</p>
                    <Link href="/packs" className="text-muted-foreground hover:text-foreground">Packages</Link>
                    <Link href="/#why-us" className="text-muted-foreground hover:text-foreground">Why Us</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                     <p className="font-semibold">Legal</p>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/refund" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Refund Policy
                    </Link>
                     <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  );
}
