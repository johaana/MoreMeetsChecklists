
'use client';

import React from 'react';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
    AlertTriangle, 
    CheckCircle2, 
    Users, 
    Zap, 
    ShieldCheck, 
    History, 
    ArrowRight,
    ClipboardList,
    GraduationCap,
    HeartPulse,
    Factory,
    Store,
    Building2,
    Scale,
    Lock,
    Stethoscope,
    FileWarning,
    Briefcase
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
    <section id={id} className={cn("w-full py-16 md:py-24", className)}>
        <div className="container px-4 md:px-6">
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
            <p className="text-sm text-secondary-text leading-relaxed">{description}</p>
        </div>
    </div>
);

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            
            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="w-full pt-20 pb-12 md:pt-32 md:pb-24 border-b border-white/5">
                    <div className="container px-4 md:px-6">
                        <div className="max-w-4xl space-y-6">
                            <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 mb-4 uppercase tracking-widest">About Us</Badge>
                            <h1 className="text-4xl md:text-6xl font-black font-headline !leading-[1.1] text-primary-text tracking-tighter">
                                Every business believes <br className="hidden md:block" /> it has systems. <br />
                                <span className="text-primary italic">Until something goes wrong.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary-text max-w-2xl font-medium leading-relaxed">
                                An audit uncovers gaps. A regulator asks for proof. A safety step is skipped. Suddenly you realize: You weren’t running on systems. You were running on people.
                            </p>
                        </div>
                    </div>
                </section>

                {/* THE PEDIGREE - NEW */}
                <Section className="bg-alternate-background">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-3xl md:text-4xl font-black font-headline text-primary-text uppercase italic tracking-tighter">The Engineering of Reliability</h2>
                                <p className="text-xl text-secondary-text leading-relaxed font-medium italic border-l-2 border-primary/20 pl-6">
                                    MoreMeets™ was born from over <span className="text-primary font-black">30 years of cumulative operational exposure.</span>
                                </p>
                                <p className="text-lg text-secondary-text leading-relaxed">
                                    Our founders have spent three decades auditing, directing, and optimizing complex, high-stakes environments across hospitality, healthcare, and industrial sectors. They realized a recurring, dangerous pattern: Most businesses don't actually have "systems"—they have heroes who remember how things work. 
                                </p>
                                <p className="text-lg text-secondary-text leading-relaxed">
                                    When those heroes leave, resign, or simply have a bad day, the standard leaves with them. We built MoreMeets™ to convert individual brilliance into permanent organizational infrastructure.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Cumulative Experience", value: "30+ Years", icon: History },
                                { label: "Industries Audited", value: "12+", icon: ShieldCheck },
                                { label: "Critical Procedures", value: "5,000+", icon: ClipboardList },
                                { label: "Compliance Alignment", value: "ISO/HACCP", icon: Scale }
                            ].map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col gap-2">
                                    <stat.icon className="w-6 h-6 text-primary/50" />
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
                                <h2 className="text-3xl font-bold font-headline text-primary-text">What Really Happens When a Task Is Missed?</h2>
                                <p className="text-secondary-text">Operational failures rarely begin with disasters. They begin small. One miss becomes a pattern. A pattern becomes exposure.</p>
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
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-primary-text font-bold">
                                {[
                                    "Financial loss", "Audit non-conformance", "Regulatory penalties", 
                                    "Legal disputes", "License suspension", "Franchise conflicts", 
                                    "Insurance complications", "Brand damage", "Operational shutdown"
                                ].map(item => (
                                    <li key={item} className="flex items-center gap-2 text-sm">
                                        <ArrowRight className="w-4 h-4 text-red-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="pt-4 text-sm text-secondary-text italic border-t border-white/10">
                                In healthcare, manufacturing, and safety-critical industries, a single missed step can endanger lives. That is not dramatic. That is documented reality.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* WHAT MAKES US DIFFERENT */}
                <Section className="bg-alternate-background">
                    <div className="max-w-5xl mx-auto space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary-text">MoreMeets™ is Operational Infrastructure</h2>
                            <p className="text-lg text-secondary-text">We transform experience into structured execution frameworks.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                            <DifferencePoint 
                                title="Role-Based Control" 
                                description="Clearly defined roles and assigned task ownership for every action." 
                                icon={Users} 
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
                                title="Institutional Memory" 
                                description="Converts tribal knowledge into structured frameworks that stay when staff leave." 
                                icon={History} 
                            />
                        </div>
                    </div>
                </Section>

                {/* RESIGNATION RISK */}
                <Section>
                    <div className="max-w-4xl mx-auto p-8 md:p-16 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-8">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="space-y-4 flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary-text">When Someone Resigns — The System Stays</h3>
                                <p className="text-secondary-text leading-relaxed">
                                    This is one of the biggest silent risks in operations. When experienced staff leave, unwritten shortcuts disappear and undocumented practices break. MoreMeets™ ensures the process is owned by the business, not the individual.
                                </p>
                            </div>
                            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                                <History className="w-16 h-16 md:w-24 md:h-24 text-primary opacity-20" />
                            </div>
                        </div>
                    </div>
                </Section>

                {/* INDUSTRIES */}
                <Section className="bg-alternate-background">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold font-headline text-primary-text">Built for Real Operational Environments</h2>
                        <p className="text-secondary-text">Structured execution across industries where failure is not an option.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {[
                            { name: "Hospitality", icon: Building2 },
                            { name: "Healthcare", icon: HeartPulse },
                            { name: "Manufacturing", icon: Factory },
                            { name: "Retail", icon: Store },
                            { name: "Logistics", icon: ArrowRight },
                            { name: "Education", icon: GraduationCap },
                            { name: "Compliance", icon: Scale },
                            { name: "Cybersecurity", icon: Lock },
                        ].map(industry => (
                            <div key={industry.name} className="p-6 rounded-2xl border border-white/5 bg-background flex flex-col items-center gap-4 text-center hover:border-primary/30 transition-all group">
                                <industry.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="font-bold text-primary-text text-sm md:text-base">{industry.name}</span>
                            </div>
                        ))}
                    </div>
                </Section>

                {/* CORE BELIEF */}
                <Section>
                    <div className="max-w-4xl mx-auto text-center p-12 md:p-20 rounded-[3rem] bg-primary text-primary-foreground space-y-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-10">
                            <ShieldCheck className="w-64 h-64" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-headline tracking-tighter uppercase leading-[0.9]">
                            Our Core Belief
                        </h2>
                        <div className="space-y-4 text-lg md:text-xl font-bold max-w-2xl mx-auto opacity-90">
                            <p>You cannot manually supervise everything.</p>
                            <p>You cannot scale through reminders.</p>
                            <p>You cannot rely on memory.</p>
                            <p>You cannot afford preventable errors.</p>
                        </div>
                        <div className="pt-8 space-y-4">
                            <p className="text-xs font-black uppercase tracking-[0.3em] opacity-60">The Mission</p>
                            <p className="text-2xl md:text-3xl font-bold leading-tight">
                                To protect businesses from preventable operational failure.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* FINAL CTA */}
                <Section className="text-center py-24 md:py-32">
                    <div className="max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-text tracking-tighter">
                            Less misses. <br /> More standards.
                        </h2>
                        <p className="text-lg text-secondary-text">
                            Because memory is not a system. And serious operations deserve more than improvisation.
                        </p>
                        <Button size="lg" asChild className="h-16 px-10 rounded-xl bg-primary text-black font-black uppercase text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all">
                            <Link href="/library">Explore Operational Standards <ArrowRight className="ml-2 w-5 h-5"/></Link>
                        </Button>
                    </div>
                </Section>
            </main>
            
            <Footer />
        </div>
    );
}
