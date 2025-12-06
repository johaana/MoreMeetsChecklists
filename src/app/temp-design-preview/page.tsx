
'use client';

import * as React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight, Zap, ShieldCheck, CheckCircle, FileLock, BookOpen, Wrench, AlertTriangle } from "lucide-react";
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


const AiVsMoreMeetsOption1 = () => (
    <SectionWrapper
        id="ai-vs-moremeets-1"
        title="Why AI is a Great First Draft, But a Terrible Final Answer."
        description={<p>For mission-critical operations, you need a system that's verified, not just generated.</p>}
        bg="bg-secondary/30"
    >
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <Card className="border-amber-500/30 bg-amber-500/5 h-full p-6">
                <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-amber-600 dark:text-amber-400 flex items-center gap-2"><AlertTriangle className="w-6 h-6"/> The AI Gamble</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                   <div className="bg-amber-100/50 dark:bg-amber-900/30 p-4 rounded-lg border border-dashed border-amber-500/50 flex items-center justify-center h-full min-h-[180px]">
                        <p className="font-mono text-center text-sm md:text-base font-semibold text-amber-800 dark:text-amber-200">"ChatGPT can make mistakes. Check important info."</p>
                   </div>
                </CardContent>
            </Card>
            <Card className="border-primary/30 bg-background shadow-lg h-full p-6">
                <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-primary flex items-center gap-2"><ShieldCheck className="w-6 h-6"/> The MoreMeets Standard</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-foreground p-0">
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Human-Verified & Researched:</strong> Built by industry experts on a foundation of global standards (ISO, OSHA, HACCP), not generic web scrapes.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Audit-Ready by Design:</strong> Every checklist is a structured system with fields for owner, proof of completion, and version control that an auditor will accept.</span></p>
                    <p className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1"/><span><strong>Offline and Secure:</strong> Your proprietary operational data stays on your systems as an Excel file, not on a third-party AI server, eliminating data privacy risks.</span></p>
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
            <p>⚠️ Design Preview Page: "AI vs. MoreMeets" - Improvised ⚠️</p>
        </div>
        
        <AiVsMoreMeetsOption1 />
        
      </main>
      <Footer />
    </div>
  );
}

