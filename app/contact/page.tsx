'use client';

import * as React from 'react';
import { WhatsAppIcon } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';
import { Badge } from '@/components/ui/badge';

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
        <section className="w-full pt-24 pb-12 md:pt-32 md:pb-24">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Institutional Comms</Badge>
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-7xl font-headline uppercase italic">
                        Contact Command
                    </h1>
                    <p className="max-w-[700px] text-secondary-text text-lg md:text-xl font-medium italic border-l-2 border-primary/20 pl-6 mx-auto">
                        Direct lines for operational support and bespoke forensic engineering.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto space-y-24">
                    {/* CUSTOM SOLUTIONS SECTION - PRIMARY FOCUS */}
                    <div className="relative group" id="bespoke-engineering">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                        <Card className="overflow-hidden bg-black border border-white/10 rounded-[2rem] relative z-10">
                            <div className="p-8 md:p-12 grid md:grid-cols-[1fr,350px] gap-12 items-center">
                                <div className="space-y-6 text-left">
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-6 h-6 text-primary" />
                                        <span className="text-[10px] font-black uppercase text-primary tracking-[0.4em]">Sovereign Custom Builds</span>
                                    </div>
                                    <h2 className="text-2xl md:text-4xl font-black font-headline text-primary-text uppercase italic tracking-tighter">Forensic System Customization</h2>
                                    <p className="text-secondary-text text-lg italic leading-relaxed font-medium">
                                        If our standard packs don't fit your unique branch hierarchy or you require a ground-up institutional engine, book a 1-on-1 discovery session with our engineers.
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-[9px] font-black uppercase text-white/20 tracking-widest">
                                        <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/40" /> Tailored Logic</span>
                                        <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/40" /> Brand-Specific SOPs</span>
                                        <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary/40" /> Station & Branch Mapping</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <Button asChild size="lg" className="h-16 rounded-xl bg-primary text-black font-black uppercase italic text-sm shadow-2xl hover:scale-105 transition-all border-none">
                                        <a href="https://calendly.com/more-moremeets/30min" target="_blank" rel="noopener noreferrer">
                                            Book Discovery Session <ArrowRight className="ml-2 w-5 h-5" />
                                        </a>
                                    </Button>
                                    <p className="text-[8px] text-white/20 text-center uppercase tracking-widest font-black">TAILORED BUILDS START AT ₹9,999 / $125 USD</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-16">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black font-headline text-primary uppercase italic tracking-tighter">General Channels</h2>
                                <p className="text-secondary-text italic font-medium">Standard support and administrative inquiries.</p>
                            </div>
                            
                            <div className="space-y-6 text-left">
                                <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <WhatsAppIcon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Instant Response</p>
                                        <p className="text-lg font-bold text-primary-text italic uppercase tracking-tight">Chat on WhatsApp</p>
                                    </div>
                                </a>

                                <a href="mailto:more@moremeets.com" className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Formal Inquiry</p>
                                        <p className="text-lg font-bold text-primary-text italic uppercase tracking-tight">more@moremeets.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-none">Institutional HQ</p>
                                        <p className="text-sm font-bold text-primary-text italic uppercase tracking-tight">Borivali East, Mumbai 400066</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 space-y-8 text-left">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black font-headline text-primary uppercase italic tracking-tighter">Secure Message</h2>
                                <p className="text-xs text-white/30 uppercase tracking-widest font-black italic">Fastest resolution via WhatsApp.</p>
                            </div>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-1">Name</Label>
                                        <Input id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="h-12 bg-black border-white/10 rounded-xl" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-1">Email</Label>
                                        <Input id="email" type="email" placeholder="Institutional Email" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 bg-black border-white/10 rounded-xl" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-[10px] font-black uppercase text-white/20 tracking-widest ml-1">Message</Label>
                                    <Textarea id="message" placeholder="Technical or operational inquiry..." className="min-h-[150px] bg-black border-white/10 rounded-xl italic" value={message} onChange={(e) => setMessage(e.target.value)} />
                                </div>
                                <Button asChild className="w-full h-14 bg-white/5 border border-white/10 hover:bg-primary hover:text-black hover:border-transparent transition-all rounded-xl font-black uppercase italic text-xs tracking-widest" variant="outline">
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Initiate WhatsApp Send</a>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                 
                 <div className="max-w-4xl mx-auto mt-32 text-center">
                    <p className="text-[9px] text-white/10 font-black uppercase tracking-[0.5em] leading-relaxed">
                        DISCLAIMER: TECHNICAL DOCUMENTS PROVIDED BY MOREMEETS™ ARE OPERATIONAL INSTRUMENTS AND DO NOT CONSTITUTE FORMAL LEGAL OR REGULATORY CERTIFICATION. 
                    </p>
                </div>
            </div>
        </section>
      </main>

       <Footer />
    </div>
  );
}
