
'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Zap, ShieldCheck, XCircle, CheckCircle } from "lucide-react";
import { SiteHeader } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const SectionWrapper = ({ id, title, description, children, bg = "bg-background" }: { id: string; title: React.ReactNode; description: React.ReactNode; children: React.ReactNode; bg?: string; }) => (
    <section id={id} className={cn("w-full py-16 md:py-24 border-t", bg)}>
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                {typeof title === 'string' ? <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">{title}</h2> : title}
                <div className="text-muted-foreground mt-4 text-base md:text-lg">{description}</div>
            </div>
            {children}
        </div>
    </section>
);

// --- OPTION 1: The "Split Card" Comparison ---
const AiVsMoreMeetsOption1 = () => (
    <SectionWrapper
        id="ai-vs-moremeets-1"
        title="Why AI is a Great First Draft, But a Terrible Final Answer."
        description={<p>For mission-critical operations, you need a system that's verified, not just generated.</p>}
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <Card className="border-amber-500/30 bg-amber-500/5 h-full">
                <CardHeader>
                    <CardTitle className="text-amber-600 flex items-center gap-2"><Zap className="w-6 h-6"/> The AI Gamble</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                   <div className="bg-amber-100/50 dark:bg-amber-900/30 p-4 rounded-lg border border-dashed border-amber-500/50">
                        <p className="font-mono text-center text-sm md:text-base font-semibold text-amber-800 dark:text-amber-200">"ChatGPT can make mistakes. Check important info."</p>
                   </div>
                </CardContent>
            </Card>
            <Card className="border-primary/30 bg-background shadow-lg h-full">
                <CardHeader>
                    <CardTitle className="text-primary flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> The MoreMeets Standard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground">
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Human-Verified & Researched:</strong> Built by industry experts on a foundation of global standards (ISO, OSHA, HACCP), not generic web scrapes.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Audit-Ready by Design:</strong> Every checklist is a structured system with fields for owner, proof of completion, and version control that an auditor will accept.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Offline and Secure:</strong> Your proprietary operational data stays on your systems as an Excel file, not on a third-party AI server, eliminating data privacy risks.</span></p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);


// --- OPTION 2: The "Subtle Dismissal" Layout ---
const AiVsMoreMeetsOption2 = () => (
    <SectionWrapper
        id="ai-vs-moremeets-2"
        title="Your Operations Deserve More Than a First Draft."
        description={<p>AI is a useful tool, but for compliance, safety, and audits, you need a system built on reliability.</p>}
        bg="bg-background"
    >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl font-bold font-headline text-primary">The MoreMeets Standard: Human-Verified Reliability</h3>
                 <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1"/><span><strong>Audit-Ready Systems:</strong> Built with the structure, evidence logs, and version control that auditors demand.</span></p>
                 <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1"/><span><strong>Industry-Specific Research:</strong> Based on global compliance standards (ISO, HACCP, etc.), not generic web scrapes.</span></p>
                 <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-1"/><span><strong>Risk Intelligence Built-in:</strong> The "Consequence of Failure" column turns your team into proactive risk managers.</span></p>
            </div>
            <Card className="border-muted bg-secondary/30 h-full">
                <CardHeader className="pb-4">
                    <CardTitle className="text-base font-semibold text-muted-foreground flex items-center gap-2"><Zap className="w-4 h-4"/> The AI Gamble</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                   <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5"/><span>Risk of "hallucinated" steps</span></p>
                   <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5"/><span>No verifiable audit trail</span></p>
                   <p className="flex items-start gap-2"><XCircle className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5"/><span>Contextually generic output</span></p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);


// --- OPTION 3: The "Feature Grid" Approach ---
const AiVsMoreMeetsOption3 = () => (
    <SectionWrapper
        id="ai-vs-moremeets-3"
        title="Why Professionals Choose Verifiable Systems Over AI Drafts"
        description={<p className="font-quote text-foreground/80">"ChatGPT can make mistakes. Check important info."</p>}
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-background">
                <CardHeader>
                    <ShieldCheck className="w-8 h-8 text-accent mb-2"/>
                    <CardTitle>Human-Verified Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Our checklists are built by industry experts referencing global standards, eliminating the risk of AI "hallucinations" in critical safety and compliance steps.</p>
                </CardContent>
            </Card>
            <Card className="bg-background">
                <CardHeader>
                    <ArrowRight className="w-8 h-8 text-accent mb-2"/>
                    <CardTitle>Audit-Ready Structure</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Designed for accountability with fields for owner, proof, and version control. AI provides text; we provide a system an auditor will accept.</p>
                </CardContent>
            </Card>
            <Card className="bg-background">
                <CardHeader>
                    <Zap className="w-8 h-8 text-accent mb-2"/>
                    <CardTitle>Offline & Secure</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">Your proprietary operational data stays on your systems as an Excel file, not on a third-party AI server, eliminating data privacy risks.</p>
                </CardContent>
            </Card>
        </div>
    </SectionWrapper>
);


export default function TempDesignPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="text-center py-4 bg-yellow-200 text-yellow-900 font-bold">
            <p>⚠️ Design Preview Page: "AI vs. MoreMeets" Options ⚠️</p>
        </div>
        
        <div className="p-4 bg-muted">
            <h2 className="text-center font-bold text-lg font-headline">Option 1: The "Split Card" Comparison</h2>
            <p className="text-center text-sm text-muted-foreground">A direct, balanced comparison in a two-card layout.</p>
        </div>
        <AiVsMoreMeetsOption1 />

        <div className="p-4 bg-muted mt-8">
            <h2 className="text-center font-bold text-lg font-headline">Option 2: The "Subtle Dismissal" Layout</h2>
            <p className="text-center text-sm text-muted-foreground">Visually minimizes the AI option to position it as a less serious alternative.</p>
        </div>
        <AiVsMoreMeetsOption2 />

        <div className="p-4 bg-muted mt-8">
            <h2 className="text-center font-bold text-lg font-headline">Option 3: The "Feature Grid" Approach</h2>
            <p className="text-center text-sm text-muted-foreground">Focuses positively on your core benefits, reframing the conversation away from AI.</p>
        </div>
        <AiVsMoreMeetsOption3 />
        
      </main>
      <Footer />
    </div>
  );
}
