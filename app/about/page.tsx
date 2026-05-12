'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
    AlertTriangle, 
    ShieldCheck, 
    History, 
    ArrowRight,
    ClipboardList,
    GraduationCap,
    Scale,
    Binary,
    Zap,
    Fingerprint
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6 mx-auto">
            {children}
        </div>
    </section>
);

const MissedTaskItem = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
        <span className="text-sm md:text-base text-secondary-text">{text}</span>
    </div>
);

const DifferencePoint = ({ title, description, icon: Icon }: { title: string, description: string, icon: any }) => (
    <div className="flex gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1">
            <h3 className="font-bold text-lg text-primary-text">{title}</h3>
            <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{description}</p>
        </div>
    </div>
);

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            
            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="w-full pt-20 pb-12 md:pt-32 md:pb-24 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#2eb86b_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="container px-4 md:px-6 mx-auto relative z-10">
                        <div className="max-w-4xl space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 mb-4 uppercase tracking-[0.3em] font-black text-[10px]">Forensic Pedigree</Badge>
                            <h1 className="text-4xl md:text-6xl font-black font-headline !leading-[1.1] text-primary-text tracking-tighter uppercase italic">
                                Systems are not suggestions. <br />
                                <span className="text-primary">They are infrastructure.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary-text max-w-2xl font-medium leading-relaxed italic border-l-2 border-primary/20 pl-6">
                                Over 30 years of cumulative exposure to high-stakes operational failure has taught us one thing: Consistency is either engineered, or it is non-existent.
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE PEDIGREE */}
                <Section className="bg-alternate-background relative">
                    {/* Blueprint Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:40px_40px]" />
                    
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-black font-headline text-primary-text uppercase italic tracking-tighter">The Engineering of Reliability</h2>
                                <p className="text-lg text-secondary-text leading-relaxed">
                                    MoreMeets™ was born from over <span className="text-primary font-black">30 years of cumulative operational exposure.</span> Our founders have spent three decades directing and optimizing complex environments across hospitality, healthcare, and industrial sectors. 
                                </p>
                                <p className="text-lg text-secondary-text leading-relaxed">
                                    We realized a recurring, dangerous pattern: Most businesses don't actually have systems. They have heroes who remember how things work. When those heroes leave, the standard leaves with them. 
                                </p>
                                <p className="text-lg text-secondary-text leading-relaxed font-bold text-primary-text">
                                    We built MoreMeets™ to convert individual brilliance into permanent organizational infrastructure.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Operational Depth", value: "30+ Years", icon: Binary },
                                { label: "Industries Vetted", value: "12+", icon: ShieldCheck },
                                { label: "Technical Missions", value: "5,000+", icon: ClipboardList },
                                { label: "Protocol Alignment", value: "ISO/HACCP", icon: Scale }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-black/40 flex flex-col gap-2 group hover:border-primary/20 transition-colors backdrop-blur-sm">
                                    <stat.icon className="w-6 h-6 text-primary/50 group-hover:text-primary transition-colors" />
                                    <p className="text-2xl font-black text-primary-text">{stat.value}</p>
                                    <p className="text-[10px] uppercase font-black tracking-widest text-secondary-text">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                {/* THE REALITY CHECK */}
                <Section>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-bold font-headline text-primary-text uppercase italic tracking-tighter">What Happens When a Task Is Missed?</h2>
                                <p className="text-secondary-text italic font-medium">Operational failures rarely begin with disasters. They begin small. One miss becomes a pattern. A pattern becomes exposure.</p>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-3">
                                <MissedTaskItem text="Daily temperature not logged" />
                                <MissedTaskItem text="Cleaning checklist skipped" />
                                <MissedTaskItem text="Reconciliation delayed" />
                                <MissedTaskItem text="Compliance not updated" />
                                <MissedTaskItem text="Shift handover undocumented" />
                                <MissedTaskItem text="Safety check assumed complete" />
                                <MissedTaskItem text="Training step not verified" />
                            </div>
                        </div>
                        <div className="p-8 md:p-12 rounded-3xl bg-red-500/5 border border-red-500/20 space-y-6">
                            <h3 className="text-xl font-bold text-red-500 uppercase tracking-widest flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5" /> The Consequences
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary-text font-bold uppercase italic">
                                {[
                                    "Financial loss", "Audit non-conformance", "Regulatory penalties", 
                                    "Legal disputes", "License suspension", "Franchise conflicts", 
                                    "Insurance complications", "Brand damage", "Operational shutdown"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-[10px] tracking-tight">
                                        <ArrowRight className="w-4 h-4 text-red-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-4 text-sm text-secondary-text italic border-t border-white/10">
                                In healthcare, manufacturing, and safety-critical industries, a single missed step can endanger lives. That is documented reality.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* WHAT MAKES US DIFFERENT */}
                <Section className="bg-alternate-background">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-text uppercase italic tracking-tighter">Institutional Memory as a Service</h2>
                            <p className="text-lg text-secondary-text italic font-medium">We transform experience into structured execution frameworks.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            <DifferencePoint 
                                title="Role-Based Control" 
                                description="Clearly defined roles and assigned task ownership for every action." 
                                icon={Zap} 
                            />
                            <DifferencePoint 
                                title="Frequency Mapping" 
                                description="Daily, weekly, monthly, and annual task cycles built into the logic." 
                                icon={ClipboardList} 
                            />
                            <DifferencePoint 
                                title="Consequences If Missed" 
                                description="Team understands why a step matters, turning mechanical ticking into intentional compliance." 
                                icon={AlertTriangle} 
                            />
                            <DifferencePoint 
                                title="Trainer Notes" 
                                description="Step-by-step guidance for faster onboarding and lower manager dependency." 
                                icon={GraduationCap} 
                            />
                            <DifferencePoint 
                                title="Audit Alignment" 
                                description="Documentation logic and evidence expectations mapped to global standards." 
                                icon={ShieldCheck} 
                            />
                            <DifferencePoint 
                                title="Permanent Infrastructure" 
                                description="Converts tribal knowledge into structured frameworks that stay when staff leave." 
                                icon={History} 
                            />
                        </div>
                    </div>
                </Section>

                {/* RESIGNATION RISK */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 md:p-16 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-5">
                            <img 
                                src="https://i.postimg.cc/jdMQXJpq/resignation1.jpg" 
                                alt="Institutional Memory Protection" 
                                className="w-full h-full object-cover opacity-20"
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                            <div className="space-y-4 flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary-text uppercase italic tracking-tighter">When Someone Resigns: The System Stays</h3>
                                <p className="text-secondary-text leading-relaxed font-medium italic">
                                    This is one of the biggest silent risks in operations. When experienced staff leave, unwritten shortcuts disappear and undocumented practices break. MoreMeets™ ensures the process is owned by the business, not the individual.
                                </p>
                            </div>
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <History className="w-16 h-16 md:w-24 md:h-24 text-primary opacity-20" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* FINAL CTA */}
                <Section className="text-center py-24 md:py-32">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text tracking-tighter uppercase italic">
                            Less misses. <br /> More standards.
                        </h2>
                        <p className="text-lg text-secondary-text max-w-lg mx-auto italic font-medium">
                            Because memory is not a system. And serious operations deserve more than improvisation.
                        </p>
                        <Button size="lg" asChild className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all border-none">
                            <Link href="/library">Explore Operational Standards <ArrowRight className="ml-2 w-5 h-5"/></Link>
                        </Button>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
