
'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Check, 
    Zap, 
    CheckCircle, 
    Timer, 
    Target, 
    Eye, 
    Lock, 
    Infinity, 
    Users, 
    LifeBuoy, 
    X, 
    ShieldAlert,
    ChevronRight,
    ClipboardCheck,
    History,
    GraduationCap,
    Globe,
    Laptop,
    ShieldCheck,
    FileSpreadsheet,
    PackageCheck,
    AlertTriangle,
    LayoutGrid,
    Building2,
    Crown
} from "lucide-react";
import React from 'react';
import { cn } from "@/lib/utils";
import { TestimonialsSection } from "@/components/layout/testimonials-section";
import { FaqSection } from "@/components/layout/faq-section";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";

const Section = ({ className, id, children, ...props }: React.HTMLAttributes<HTMLElement> & { id?: string }) => (
    <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)} {...props}>
        <div className="container px-4 md:px-6">
            {children}
        </div>
    </section>
);

const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);

const HeroSection = () => (
    <section className="relative w-full flex flex-col md:flex-row md:items-center h-[calc(100dvh-64px)] md:h-screen md:min-h-[700px] overflow-hidden bg-background">
        {/* Visual Brand Layer - PRESERVED */}
        <div className="relative h-[28vh] md:absolute md:top-0 md:left-0 md:h-full md:w-full z-0 overflow-hidden shrink-0">
            <video
                src="https://res.cloudinary.com/dxqe8xdea/video/upload/v1766838730/8572189-uhd_4096_2160_25fps_rjv4wg.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover contrast-[1.15] brightness-[1.15] md:contrast-100 md:brightness-100"
            />
            {/* Desktop Gradient Overlay */}
            <div className="hidden md:block absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(10,15,25,1.0)_0%,rgba(10,15,25,0.8)_40%,rgba(10,15,25,0.3)_70%,rgba(10,15,25,0.05)_100%)]" />
            
            {/* Mobile Gradient Overlay */}
            <div className="md:hidden absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/10 to-background" />
            
            {/* Soft Bleed for Mobile Transition */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-15" />
        </div>

        {/* Content Layer */}
        <div className="container px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-center">
            <div className="max-w-3xl space-y-6">
                <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl font-black font-headline tracking-tighter !leading-[1.05] text-primary-text drop-shadow-lg uppercase italic">
                    Stop managing. <br />
                    <span className="text-primary">Start seeing.</span>
                </h1>
                
                <p className="text-lg md:text-2xl font-bold text-primary uppercase tracking-[0.1em] border-l-4 border-primary pl-6">
                    A system that runs your business daily.
                </p>

                <p className="text-sm md:text-xl max-w-[600px] text-secondary-text leading-relaxed font-medium italic">
                    MoreMeets™ replaces human memory with engineered consistency. No follow-ups. No manual reports. Just real-time clarity.
                </p>

                <div className="pt-4 space-y-4">
                    <p className="text-xs md:text-sm font-black text-white/40 uppercase tracking-widest">
                        Pre-built • Ready to use • Fully editable
                    </p>
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <Button size="lg" asChild className="group h-16 px-10 rounded-xl shadow-2xl transition-all active:scale-95 bg-primary text-black hover:brightness-90 font-black uppercase text-sm tracking-widest">
                            <Link href="/library">
                                Get Your Operating System
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="h-16 px-10 rounded-xl border-white/10 text-white font-black uppercase text-sm tracking-widest hover:bg-white/5">
                            <Link href="#how-it-works">View Sample Console</Link>
                        </Button>
                    </div>
                </div>

                <div className="flex items-center gap-6 pt-4">
                    <span className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest">
                        <Lock className="w-3 h-3" /> No SaaS. Own Forever.
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-black text-accent uppercase tracking-widest">
                        <Zap className="w-3 h-3" /> Ready in 10 Minutes
                    </span>
                </div>
            </div>
        </div>
    </section>
);

const ClaritySection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Strategic Insight</Badge>
            <SectionHeadline>What happens when you use MoreMeets?</SectionHeadline>
            <p className="text-secondary-text italic font-medium">Clarity replaces confusion. Action replaces asking.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
                { t: "Team Knows Exactly What to Do", d: "Roles are assigned. Steps are clear. Memory is removed from the equation.", i: ClipboardCheck },
                { t: "Tasks Completed in Seconds", d: "Reporting is built into the workflow. Two minutes at end of shift, and you're done.", i: Timer },
                { t: "Dashboards Update Automatically", d: "No manual collation. No data entry. Open one file and see your entire empire.", i: Zap }
            ].map(item => (
                <div key={item.t} className="p-8 rounded-3xl bg-black/40 border border-white/5 space-y-4 shadow-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.i className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-black uppercase italic text-primary-text">{item.t}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                </div>
            ))}
        </div>
        <div className="mt-16 p-8 rounded-[2rem] bg-primary/5 border border-primary/20 text-center max-w-4xl mx-auto">
            <p className="text-xl font-bold text-primary italic">No follow-ups. No reporting. No confusion.</p>
        </div>
    </Section>
);

const PrebuiltSopSection = () => (
    <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">The Infrastructure Edge</Badge>
                    <SectionHeadline>No need to design SOPs. <br /> <span className="text-primary">We've already done it.</span></SectionHeadline>
                    <p className="text-lg text-secondary-text font-medium italic border-l-2 border-primary/20 pl-6 leading-relaxed">
                        Most businesses struggle because SOPs are incomplete, buried in folders, or exist only in someone's head.
                    </p>
                </div>
                <div className="space-y-4">
                    {[
                        "World-class, industry-grade SOPs built-in",
                        "Audit-ready operational standards",
                        "Daily, weekly, and monthly task logic",
                        "100% Fully editable to your brand"
                    ].map(item => (
                        <div key={item} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            <span className="text-primary-text font-bold uppercase italic text-sm">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-xl font-black text-white/20 uppercase tracking-tighter">You don't start from zero. You start from a proven system.</p>
            </div>
            <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-10 group-hover:opacity-30 transition-opacity" />
                <Card className="bg-black/60 border-white/10 p-8 rounded-[2.5rem] space-y-6 relative z-10">
                    <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <ShieldCheck className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-black uppercase text-primary-text italic">Sovereign v4.4 Engine</h4>
                            <p className="text-[10px] text-white/30 uppercase tracking-widest">Built for Institutional Scale</p>
                        </div>
                    </div>
                    <p className="text-secondary-text italic text-sm leading-relaxed font-medium">
                        "MoreMeets replaces memory with system. Add your branches, assign your team, and watch the standards become a permanent reality."
                    </p>
                    <div className="pt-4">
                        <Button asChild variant="link" className="text-primary p-0 h-auto font-black uppercase text-xs tracking-widest group">
                            <Link href="/library" className="flex items-center">
                                Browse Industry Systems <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    </Section>
);

const ReportingChainSection = () => (
    <Section id="kill-reporting" className="bg-alternate-background border-y border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">The Efficiency Multiplier</Badge>
            <SectionHeadline>Kill the Reporting Chain</SectionHeadline>
            <p className="text-secondary-text italic font-medium">Reporting should not be a job. It should be automatic.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden max-w-6xl mx-auto shadow-2xl">
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
    </Section>
);

const WorkflowSection = () => (
    <Section>
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-accent border-accent/30 uppercase tracking-[0.3em] font-black text-[10px]">Daily Pulse</Badge>
            <SectionHeadline>Your business, without chaos.</SectionHeadline>
            <p className="text-secondary-text italic font-medium text-lg">A day in the life of a MoreMeets™ operation.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
                { t: "MORNING", d: "Team opens file → sees exactly what to do for their specific role.", i: "01" },
                { t: "DURING DAY", d: "Tasks get marked done in seconds as they occur. 100% adoption.", i: "02" },
                { t: "ANYTIME", d: "You open the dashboard → see everything live from anywhere.", i: "03" },
                { t: "END OF DAY", d: "No reports needed. Data is already collated. Shift closed.", i: "04" }
            ].map(item => (
                <div key={item.t} className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] space-y-4 group hover:border-primary/20 transition-all">
                    <span className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">{item.i}</span>
                    <h3 className="font-black text-primary italic uppercase tracking-widest">{item.t}</h3>
                    <p className="text-sm text-secondary-text font-medium leading-relaxed italic">{item.d}</p>
                </div>
            ))}
        </div>
    </Section>
);

const NotAChecklistSection = () => (
    <Section className="bg-black border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-4">
                <Badge variant="destructive" className="uppercase font-black tracking-widest text-[9px] px-4 py-1">Crucial Distinction</Badge>
                <SectionHeadline>This is NOT a Checklist. <br /> <span className="text-primary">It's a system.</span></SectionHeadline>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <Card className="p-8 bg-white/[0.02] border-white/5 rounded-3xl space-y-4">
                    <h3 className="text-xl font-bold text-primary-text uppercase italic">A Checklist...</h3>
                    <p className="text-secondary-text italic text-sm">Reminds people of what they might forget. It is static, unmonitored, and often ignored after the first week.</p>
                </Card>
                <Card className="p-8 bg-primary/5 border-primary/20 rounded-3xl space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Check className="w-16 h-16 text-primary" /></div>
                    <h3 className="text-xl font-bold text-primary uppercase italic">MoreMeets™ Ensures...</h3>
                    <p className="text-primary-text font-medium text-sm italic">Execution. Tasks are assigned, work is tracked live, data updates instantly, and reports are auto-created.</p>
                </Card>
            </div>
        </div>
    </Section>
);

const SuperpowersSection = () => {
    const cards = [
        { 
            title: "2-Minute Reporting", 
            icon: Timer,
            content: ["Staff update tasks in seconds", "No reporting effort required", "Live visibility always"], 
            closing: "Stop chasing reports.", 
            subClosing: "Execution without follow-ups." 
        },
        { 
            title: "Faster Training", 
            icon: GraduationCap,
            content: ["New staff ready from Day 1", "No shadowing required", "Learning happens by doing"], 
            closing: "No more hand-holding.", 
            subClosing: "Onboarding debt eliminated." 
        },
        { 
            title: "Operational Independence", 
            icon: ShieldAlert,
            content: ["No reliance on 'key managers'", "System stays if people leave", "Knowledge is institutionalized"], 
            closing: "Systems, not heroes.", 
            subClosing: "Institutional memory secured." 
        },
        { 
            title: "Multi-Branch Command", 
            icon: Eye,
            content: ["Run 10 locations from one screen", "Compare performance instantly", "Spot weak branches in seconds"], 
            closing: "Know without asking.", 
            subClosing: "Full clarity, zero dependency." 
        },
        { 
            title: "No-SaaS Freedom", 
            icon: Lock,
            content: ["No monthly subscriptions", "No logins or training struggle", "One-time payment, own forever"], 
            closing: "Zero recurring cost.", 
            subClosing: "Lifetime updates included." 
        }
    ];
    return(
    <Section id="superpowers" className="bg-alternate-background border-b border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <SectionHeadline>Your Operational Superpowers</SectionHeadline>
            <p className="text-secondary-text italic font-medium text-lg">MoreMeets transforms your daily operations into a system that runs itself.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
    </Section>
)};

const CostOfMissSection = () => (
    <Section className="bg-black">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="p-10 md:p-16 rounded-[3rem] bg-red-500/5 border border-red-500/20 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><AlertTriangle className="w-32 h-32 text-red-500" /></div>
                <div className="space-y-4">
                    <Badge variant="destructive" className="uppercase font-black tracking-widest text-[9px]">The Stake</Badge>
                    <h2 className="text-3xl md:text-5xl font-black font-headline text-primary-text uppercase italic leading-tight">One missed step <br /> <span className="text-red-500">can cost everything.</span></h2>
                </div>
                <ul className="space-y-6">
                    {[
                        { t: "Missed check → customer complaints", i: "PR Risk" },
                        { t: "Missed process → major financial loss", i: "Profit Leak" },
                        { t: "Missed safety step → legal liability", i: "Safety Crisis" }
                    ].map(item => (
                        <li key={item.t} className="space-y-1">
                            <p className="text-primary-text font-bold flex items-center gap-2 italic"><ArrowRight className="w-4 h-4 text-red-500" /> {item.t}</p>
                            <p className="text-[10px] uppercase font-black tracking-widest text-white/20 pl-6">{item.i}</p>
                        </li>
                    ))}
                </ul>
                <blockquote className="pt-8 border-t border-white/5 text-secondary-text font-medium italic leading-relaxed">
                    "Problems don't happen because people don't care. They happen because systems don't exist."
                </blockquote>
            </div>
            <div className="space-y-8">
                <div className="space-y-4">
                    <SectionHeadline className="text-left">Built for Compliance & Consistency</SectionHeadline>
                    <p className="text-lg text-secondary-text italic font-medium leading-relaxed">
                        MoreMeets is engineered to meet real-world operational standards (ISO, HACCP, OSHA) across hospitality, healthcare, and retail.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {[
                        { t: "Structured Workflows", i: LayoutGrid },
                        { t: "Repeatable Execution", i: History },
                        { t: "Audit-Ready Logs", i: ShieldCheck },
                        { t: "Evidence-Based", i: FileSpreadsheet }
                    ].map(item => (
                        <div key={item.t} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-3">
                            <item.i className="w-6 h-6 text-primary/50" />
                            <span className="text-xs font-black uppercase text-primary-text tracking-widest">{item.t}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
);

const ExcelAdvantageSection = () => (
    <Section className="bg-alternate-background border-y border-white/5">
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.3em] font-black text-[10px]">Technology Philosophy</Badge>
            <SectionHeadline>Why Excel is Your Advantage</SectionHeadline>
            <p className="text-secondary-text italic font-medium text-lg">Software creates friction. Excel removes it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
                { t: "Zero Learning Curve", d: "Your team already knows how to use it. No logins, no passwords, no training apps.", i: Users },
                { t: "Works Offline Anywhere", d: "Warehouses, basements, remote resorts. No Wi-Fi required for daily command.", i: Globe },
                { t: "100% Data Privacy", d: "Your operational secrets never leave your hard drive. No SaaS data-lock-in.", i: Lock }
            ].map(item => (
                <div key={item.t} className="space-y-4 p-8 rounded-3xl bg-black/40 border border-white/5 hover:border-primary/20 transition-colors shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <item.i className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-black uppercase italic text-primary-text">{item.t}</h3>
                    <p className="text-sm text-secondary-text leading-relaxed font-medium italic">{item.d}</p>
                </div>
            ))}
        </div>
    </Section>
);

const DeploySection = () => (
    <Section>
        <div className="max-w-4xl mx-auto p-10 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-5"><PackageCheck className="w-64 h-64 text-primary" /></div>
            <div className="relative z-10 space-y-12">
                <div className="text-center space-y-4">
                    <SectionHeadline>Go Live in 10 Minutes</SectionHeadline>
                    <p className="text-secondary-text italic font-medium text-lg">No setup. No onboarding. No delays.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { s: "01", t: "Setup Branches", d: "Name your locations and toggle modules ON/OFF." },
                        { s: "02", t: "Add Your Team", d: "List your staff in the Team Hub once." },
                        { s: "03", t: "Start Command", d: "Open the file and see the 'Empire Mood' instantly." }
                    ].map(item => (
                        <div key={item.s} className="space-y-3">
                            <span className="text-5xl font-black text-primary/20">{item.s}</span>
                            <h4 className="font-black uppercase text-primary italic">{item.t}</h4>
                            <p className="text-xs text-secondary-text font-medium leading-relaxed italic">{item.d}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center pt-8">
                    <Button size="lg" asChild className="h-16 px-12 rounded-xl bg-primary text-black font-black uppercase italic shadow-2xl hover:scale-105 active:scale-95 transition-all">
                        <Link href="/library">Get Started Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
            </div>
        </div>
    </Section>
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ClaritySection />
        <PrebuiltSopSection />
        <ReportingChainSection />
        <WorkflowSection />
        <NotAChecklistSection />
        <SuperpowersSection />
        <CostOfMissSection />
        <ExcelAdvantageSection />
        <DeploySection />
        <TestimonialsSection />
        <FaqSection />
        
        {/* FINAL CTA */}
        <Section id="final-cta" className="bg-black border-t border-white/5 text-center">
            <div className="max-w-3xl mx-auto space-y-10">
                <SectionHeadline>Stop managing people. <br/> <span className="text-primary">Start managing systems.</span></SectionHeadline>
                <p className="text-lg text-secondary-text italic font-bold">Your team already does the work. This system makes sure it gets done properly.</p>
                <div className="flex flex-col items-center gap-6">
                    <Button size="lg" asChild className="group h-20 px-12 rounded-2xl bg-primary text-black font-black uppercase text-lg shadow-[0_0_50px_-10px_rgba(46,184,107,0.5)] hover:scale-105 active:scale-95 transition-all">
                        <Link href="/library" className="flex items-center">
                            Eliminate Operational Risk <ArrowRight className="ml-3 h-6 w-6" />
                        </Link>
                    </Button>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <div className="text-center space-y-0.5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1.5 justify-center"><Lock className="w-3 h-3" /> No SaaS Lock-in.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">Own your engine forever.</p>
                        </div>
                        <div className="text-center space-y-0.5">
                            <p className="text-[10px] font-black uppercase tracking-widest text-accent flex items-center gap-1.5 justify-center"><Infinity className="w-3 h-3" /> One-Time Payment.</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/20 italic">No monthly subscriptions.</p>
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
