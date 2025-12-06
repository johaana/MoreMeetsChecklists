
'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Users, Bot, Zap, Rocket, Search, Edit, BarChart, FileText, Star, BrainCircuit, Shield, FileCheck, LifeBuoy, Frown, Smile } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from '@/components/layout/header';
import { cn } from '@/lib/utils';


const SectionWrapper = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
    <section className="w-full py-12 md:py-16 border-t">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-sm font-bold tracking-widest uppercase text-accent mb-2">{title}</h2>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>
            {children}
        </div>
    </section>
);

// Option 1: The Anatomy of a Weak SOP
const Option1 = () => (
    <SectionWrapper title="Option 1: The Anatomy of a Weak SOP" description="Directly contrasts a generic SOP with the robust MoreMeets system to highlight superior value.">
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <Card className="border-destructive/30">
                <CardHeader>
                    <CardTitle className="text-destructive flex items-center gap-2"><Frown className="w-5 h-5"/> The Typical (Broken) SOP</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-2 text-sm"><span className="text-destructive">❌</span> Vague & Incomplete</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-destructive">❌</span> Not Audit-Ready</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-destructive">❌</span> Relies on Memory</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-destructive">❌</span> No Clear Ownership</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-destructive">❌</span> Lacks Training Value</p>
                </CardContent>
            </Card>
            <Card className="border-primary/30 bg-secondary/20">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><Smile className="w-5 h-5"/> The MoreMeets Standard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-foreground">
                    <p className="flex items-center gap-2 text-sm"><span className="text-primary">✅</span> Specific & Actionable Tasks</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-primary">✅</span> Globally Compliant & Audit-Ready</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-primary">✅</span> A Verifiable System of Record</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-primary">✅</span> Defines Clear Roles & Frequencies</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-primary">✅</span> Includes Trainer's Notes for Coaching</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

// Option 2: Process Transformation Flow
const Option2 = () => (
    <SectionWrapper title="Option 2: Process Transformation Flow" description="Visually shows how MoreMeets converts abstract knowledge into a concrete, team-wide system.">
        <div className="grid md:grid-cols-5 gap-4 items-center text-center max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-4 border-2 border-primary/20">
                    <BrainCircuit className="w-10 h-10" />
                </div>
                <h3 className="font-bold">1. Institutional Knowledge</h3>
                <p className="text-sm text-muted-foreground">The unwritten wisdom of your best managers.</p>
            </div>
            <div className="flex justify-center"><ArrowRight className="w-12 h-12 text-primary/50" /></div>
            <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-4 border-2 border-accent/20">
                    <FileCheck className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-accent">2. MoreMeets Checklists</h3>
                <p className="text-sm text-muted-foreground">We codify that wisdom into a globally compliant, actionable system.</p>
            </div>
            <div className="flex justify-center"><ArrowRight className="w-12 h-12 text-primary/50" /></div>
            <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 text-green-600 mb-4 border-2 border-green-500/20">
                    <Users className="w-10 h-10" />
                </div>
                <h3 className="font-bold text-green-600">3. Consistent Execution</h3>
                <p className="text-sm text-muted-foreground">Your entire team can now perform with the precision of your top experts.</p>
            </div>
        </div>
    </SectionWrapper>
);

// Option 3: The Three Pillars
const Option3 = () => (
    <SectionWrapper title="Option 3: The Three Pillars" description="A direct, benefit-driven approach clearly answering 'What's in it for me?' for business owners.">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Systematize Quality</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Move beyond reliance on individual memory. Our checklists provide a verifiable system to ensure critical tasks are done right, every time.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Accelerate Training</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Onboard new hires faster and more consistently. Our SOPs act as a day-one playbook, turning novice employees into productive team members in record time.</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>De-Risk Your Business</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">Mapped to global compliance standards (ISO, OSHA), our SOPs provide the audit trail you need to prove due diligence and protect your business from legal risks.</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);

// Option 4: "Your Playbook for What-If"
const Option4 = () => (
    <SectionWrapper title="Option 4: Your Playbook for What-If" description="Creates an emotional connection by addressing a manager's biggest fears and positioning the product as the solution.">
        <div className="text-center mb-10"><h2 className="text-3xl font-bold font-headline">What Happens When...</h2></div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
            <div>
                <h3 className="font-semibold text-lg text-primary">...your best manager quits?</h3>
                <p className="text-muted-foreground mt-2">Our checklists retain their knowledge, making your operations resilient.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-primary">...an auditor shows up unannounced?</h3>
                <p className="text-muted-foreground mt-2">Our audit-ready SOPs provide the verifiable proof of compliance you need.</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg text-primary">...a crisis hits at 2 AM?</h3>
                <p className="text-muted-foreground mt-2">Our emergency protocols give your team the exact steps to follow when they can't call you.</p>
            </div>
        </div>
    </SectionWrapper>
);

// Option 5: The MoreMeets Difference
const Option5 = () => (
    <SectionWrapper title="Option 5: The MoreMeets Difference" description="A detailed feature breakdown appealing to detail-oriented operations managers.">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10"><h2 className="text-3xl font-bold font-headline">More Than a Template. It's a System.</h2></div>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                    <FileCheck className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Task-Level Detail</h3>
                        <p className="text-muted-foreground text-sm">Every checklist breaks down high-level goals into specific, actionable tasks.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Users className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Built-in Accountability</h3>
                        <p className="text-muted-foreground text-sm">Includes columns for `Role`, `Frequency`, and `Proof of Completion`.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Shield className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Risk Intelligence</h3>
                        <p className="text-muted-foreground text-sm">The "Consequence of Failure" column explains *why* a task matters, building a culture of ownership.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Star className="w-8 h-8 text-accent shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold">Audit-Ready Framework</h3>
                        <p className="text-muted-foreground text-sm">Designed from the ground up to meet the demands of internal and external compliance audits.</p>
                    </div>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

// Option 6: Interactive Tabbed Benefits
const Option6 = () => (
    <SectionWrapper title="Option 6: Interactive Tabbed Benefits" description="An engaging way for users to explore the core benefits of the MoreMeets system.">
        <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
                <CardTitle>The Unified Operations Platform</CardTitle>
                <CardDescription>One system to solve your biggest operational challenges.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Tabs would be here (requires state, simplified for preview)</p>
                <div className="p-4 border rounded-lg mt-4">
                    <h4 className="font-bold">Systematize Quality</h4>
                    <p className="text-muted-foreground text-sm">Move beyond reliance on individual memory. Our checklists provide a verifiable system to ensure critical tasks are done right, every time.</p>
                </div>
            </CardContent>
        </Card>
    </SectionWrapper>
);

// Option 7: "Stop the Leak" Metaphor
const Option7 = () => (
    <SectionWrapper title="Option 7: The 'Stop the Leak' Metaphor" description="Uses a powerful metaphor to illustrate how operational gaps lead to business losses.">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-headline mb-4">Your business is leaking value. We plug the holes.</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div><p className="font-semibold text-destructive">❌ Lost Knowledge</p></div>
                <div><p className="font-semibold text-destructive">❌ Wasted Time</p></div>
                <div><p className="font-semibold text-destructive">❌ Compliance Fines</p></div>
                <div><p className="font-semibold text-destructive">❌ Failed Audits</p></div>
                <div><p className="font-semibold text-destructive">❌ Inconsistent Quality</p></div>
                <div><p className="font-semibold text-destructive">❌ Damaged Reputation</p></div>
            </div>
            <p className="mt-8 text-lg">MoreMeets checklists provide the structured processes to stop these leaks and protect your bottom line.</p>
        </div>
    </SectionWrapper>
);

// Option 8: The "Blueprint" Analogy
const Option8 = () => (
    <SectionWrapper title="Option 8: The 'Blueprint' Analogy" description="Positions the checklists as the foundational blueprint for a well-run operation.">
        <div className="text-center max-w-2xl mx-auto">
             <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary mb-6 mx-auto border-2 border-primary/20">
                <FileText className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold font-headline">Don't Wing It. Build on a Blueprint.</h2>
            <p className="text-muted-foreground mt-4 text-lg">You wouldn't build a house without a blueprint. Why build your operations on memory and guesswork? Our checklists are the architectural plans for a resilient, efficient, and compliant business.</p>
        </div>
    </SectionWrapper>
);

// Option 9: Checklist Feature Snippet
const Option9 = () => (
    <SectionWrapper title="Option 9: Checklist Feature Snippet" description="Gives a concrete, visual example of what the user is actually buying.">
         <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-bold font-headline">See the System in Action</h2>
             <p className="text-muted-foreground mt-2">Each line in our checklist is more than a task—it's a mini-system for accountability.</p>
        </div>
        <div className="max-w-5xl mx-auto p-4 border rounded-lg bg-secondary/20 font-mono text-xs overflow-x-auto">
           <p><span className="font-bold text-primary">[Task ID]</span> | <span className="font-bold text-primary">[Task Description]</span> | <span className="font-bold text-primary">[Consequence of Failure]</span> | <span className="font-bold text-primary">[Proof]</span></p>
           <p className="mt-2"><span className="text-muted-foreground">FIRE-04</span> | <span className="text-foreground">Daily check of fire exits</span> | <span className="text-destructive">Trap hazard, regulatory fine</span> | <span className="text-green-600">Signed Log</span></p>
        </div>
    </SectionWrapper>
);

// Option 10: The Value Proposition Grid
const Option10 = () => (
    <SectionWrapper title="Option 10: Value Proposition Grid" description="A clean, modern grid layout that highlights four key outcomes.">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg">Enhance Safety</h3>
                <p className="text-muted-foreground text-sm mt-1">Implement globally-recognized safety protocols to protect your team and customers.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg">Ensure Compliance</h3>
                <p className="text-muted-foreground text-sm mt-1">Stay audit-ready with checklists that map to ISO, OSHA, and other key regulations.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg">Increase Efficiency</h3>
                <p className="text-muted-foreground text-sm mt-1">Standardize your processes to reduce waste, eliminate rework, and improve productivity.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg">Build Resilience</h3>
                <p className="text-muted-foreground text-sm mt-1">Capture expert knowledge so your operation runs smoothly, even when key people leave.</p>
            </div>
        </div>
    </SectionWrapper>
);


export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
            <p>⚠️ This is a temporary design preview page with 10 options. ⚠️</p>
        </div>

        <Option1 />
        <Option2 />
        <Option3 />
        <Option4 />
        <Option5 />
        <Option6 />
        <Option7 />
        <Option8 />
        <Option9 />
        <Option10 />

      </main>
      <Footer />
    </div>
  );
}
