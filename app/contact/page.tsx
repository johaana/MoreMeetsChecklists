
'use client';

import * as React from 'react';
import { WhatsAppIcon } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';


export default function ContactUsPage() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const recipientWhatsApp = '919860997711';
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const whatsappLink = `https://wa.me/${recipientWhatsApp}?text=${encodeURIComponent(body)}`;

  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />

      <main className="flex-1">
        <section className="w-full pt-12">
            <div className="container px-2 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        Contact Us
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        We're here to help. Reach out to us with any questions or inquiries.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                     <div className="space-y-8">
                        <div className="space-y-4 text-center">
                            <h2 className="text-2xl font-bold font-headline text-primary">Get in Touch</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                             <Card className="text-center">
                                <CardHeader>
                                    <CardTitle className="text-lg flex flex-col items-center justify-center gap-3"><WhatsAppIcon className="w-8 h-8"/> WhatsApp</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="text-primary underline">Chat with us</a>
                                </CardContent>
                            </Card>
                            <Card className="text-center">
                                <CardHeader>
                                    <CardTitle className="text-lg flex flex-col items-center justify-center gap-3"><Mail className="w-8 h-8 text-primary"/> General Inquiries</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <a href="mailto:more@moremeets.com" className="text-primary underline">more@moremeets.com</a>
                                </CardContent>
                            </Card>
                             <Card className="text-center">
                                <CardHeader>
                                    <CardTitle className="text-lg flex flex-col items-center justify-center gap-3"><MapPin className="w-8 h-8 text-primary"/> Office</CardTitle>
                                </CardHeader>
                                <CardContent>
                                     <p className="text-muted-foreground text-sm md:text-base">Borivali East, Mumbai 400066</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                     <div className="space-y-8">
                         <div className="space-y-4 text-center">
                            <h2 className="text-2xl font-bold font-headline text-primary">Send a Message</h2>
                             <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">For the fastest response, send your message on WhatsApp.</p>
                         </div>
                        <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <Button asChild className="w-full" variant="accent">
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Send Message on WhatsApp</a>
                            </Button>
                        </form>
                    </div>
                </div>
                 <div className="max-w-4xl mx-auto mt-16 text-center text-xs text-muted-foreground p-4 border rounded-lg bg-secondary/50">
                    <strong>Disclaimer:</strong> The legal documents and policies on this site are for informational purposes only and do not constitute legal advice. Please consult with a qualified legal professional for your specific needs.
                </div>
            </div>
        </section>
      </main>

       <Footer />
    </div>
  );
}
