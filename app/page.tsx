'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, CheckCircle, Timer, Target, Eye, Lock, Infinity, Users, LifeBuoy, X, ShieldAlert } from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { HeroSection } from "@/components/layout/hero-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

const Section = ({ className, id, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props} />
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const ReportingChainSection = () => (
    <Section id="kill-reporting" className="bg-alternate-background border-y border-white/5">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Efficiency Multiplier</Badge>
                <SectionHeadline>Kill the Reporting Chain</SectionHeadline>
                <p className="text-secondary-text italic font-medium">Reporting should not be a job. It should be automatic.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden max-w-6xl mx-auto shadow-2xl">
                {/* OLD WAY */}
                <div className="bg-black/40 p-8 md:p-16 space-y-10">
                    <div className="space-y-2">
                        <h3 className="text-red-500 font-black uppercase tracking-widest text-sm flex items-center gap-2">
                            <X className="w-5 h-5" /> The Old World (Chaos)
                        </h3>
                        <p className="text-xs text-white/30 italic">Manual follow-ups consume 12+ hours of manager time per week.</p>
                    </div>
                    
                    <div className="space-y-6 relative">
                        {[
                            "Staff fills notebook / WhatsApp",
                            "Supervisor checks & signs",
                            "Manager collates data into Excel",
                            "GM asks for 'Status Updates'",
                            "Owner receives outdated reports"
                        ].map((step, i) => (
                            <div key={step} className="flex items-center gap-4 opacity-50">
                                <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center text-[10px] font-black text-red-500">{i+1}</div>
                                <span className="text-sm text-secondary-text font-medium">{step}</span>
                            </div>
                        ))}
                        <div className="pt-6 border-t border-white/5">
                            <p className="text-red-500 font-bold italic text-sm">Result: ❌ Delayed, ❌ Incomplete, ❌ Time Wasted</p>
                        </div>
                    </div>
                </div>

                {/* NEW WAY */}
                <div className="bg-primary/5 p-8 md:p-16 space-y-10 border-l border-primary/20">
                    <div className="space-y-2">
                        <h3 className="text-primary font-black uppercase tracking-widest text-sm flex items-center gap-2">
                            <Check className="w-5 h-5" /> The MoreMeets World (Command)
                        </h3>
                        <p className="text-xs text-primary/40 italic">Data moves from the floor to the dashboard in 0 seconds.</p>
                    </div>

                    <div className="space-y-6">
                        {[
                            "Staff marks task 'Done' in seconds",
                            "Excel file updates instantly",
                            "GM opens file → sees Live Dashboard",
                            "No calls. No emails. No chasing."
                        ].map((step, i) => (
                            <div key={step} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-black">{i+1}</div>
                                <span className="text-sm text-primary-text font-bold">{step}</span>
                            </div>
                        ))}
                        <div className="pt-6 border-t border-white/5">
                            <p className="text-primary font-black italic text-sm">Result: ✅ Live, ✅ Accurate, ✅ Zero Effort</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const USPPowerSection = () => {
    const cards = [
        { 
            title: "2-Minute Reporting", 
            icon: Timer,
            content: ["Staff update tasks in 120 seconds", "Only see what's assigned to them", "Zero-friction daily pulse", "100% team adoption"], 
            closing: "Stop chasing reports.", 
            subClosing: "Execution without follow-ups." 
        },
        { 
            title: "Operational Independence", 
            icon: ShieldAlert,
            content: ["No reliance on 'key staff'", "System runs even if someone leaves", "Knowledge stays with the business", "New staff training is automated"], 
            closing: "Systems, not heroes.", 
            subClosing: "Institutional memory secured." 
        },
        { 
            title: "Multi-Branch Command", 
            icon: Eye,
            content: ["Run 10 locations from one screen", "Healthy competition across units", "Spot weak branches immediately", "Remote eyes on every shift"], 
            closing: "Know without asking.", 
            subClosing: "Full clarity, zero dependency." 
        },
        { 
            title: "No-SaaS Freedom", 
            icon: Lock,
            content: ["No monthly subscriptions", "No logins or training struggle", "Works on Excel/Google Sheets", "One-time payment, own forever"], 
            closing: "Zero recurring cost.", 
            subClosing: "Lifetime updates included." 
        }
    ];
    return(
    <Section id="superpowers">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
                <SectionHeadline>Your Operational Superpowers</SectionHeadline>
                <p className="text-secondary-text italic font-medium text-lg">MoreMeets transforms your daily operations into a system that runs itself.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {cards.map(card => (
                    <div key={card.title} className="p-8 rounded-[2rem] border border-white/5 bg-black/40 text-secondary-text shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <card.icon className="w-24 h-24 text-primary" />
                        </div>
                        <h3 className="text-xl font-black uppercase italic text-primary mb-6 flex items-center gap-2">
                            {card.title}
                        </h3>
                        <ul className="space-y-3 text-sm min-h-[140px]">
                            {card.content.map(item => <li key={item} className="flex items-start"><span className="mr-2 mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" /><span>{item}</span></li>)}
                        </ul>
                        <div className="pt-6 border-t border-white/5 mt-4">
                            <p className="font-black text-primary-text leading-tight uppercase italic text-sm">{card.closing}</p>
                            <p className="text-[10px] mt-1.5 opacity-60 uppercase tracking-widest font-bold">{card.subClosing}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </Section>
)};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ReportingChainSection />
        <USPPowerSection />
        <TestimonialsSection />
        <FaqSection />
        <Section id="final-cta" className="bg-black border-t border-white/5">
            <div className="container px-4 md:px-6 text-center max-w-2xl mx-auto space-y-8">
                <SectionHeadline>Stop Managing People. <br/> Start Managing Systems.</SectionHeadline>
                <p className="text-lg text-secondary-text italic font-bold">Your team already does the work. This system makes sure it gets done properly.</p>
                <div className="flex flex-col items-center gap-4 pt-4">
                    <Button size="lg" asChild className="group h-16 px-10 rounded-xl bg-primary text-black font-black uppercase text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        <Link href="/library" className="flex items-center">
                            Eliminate Operational Risk <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <div className="flex items-center gap-6 pt-2">
                        <div className="text-center space-y-0.5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5"><Lock className="w-3 h-3" /> No SaaS Lock-in.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Own your engine forever.</p>
                        </div>
                        <div className="text-center space-y-0.5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1.5"><Infinity className="w-3 h-3" /> One-Time Payment.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">No monthly subscriptions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
