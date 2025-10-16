
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FileCheck2, Shield, Trophy, GalleryVertical, Layers } from 'lucide-react';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const sampleChecklists = [
    {
        icon: <Trophy />,
        title: "Sports Infrastructure & Equipment Maintenance",
        description: "Ensure the safety and quality of your sports facilities, from turf management to goalpost integrity."
    },
    {
        icon: <GalleryVertical />,
        title: "Tournament & Event Management",
        description: "Execute flawless sporting events, from pre-event setup to post-event breakdown."
    },
    {
        icon: <Shield />,
        title: "Member & Guest Safety",
        description: "Create a safe and welcoming environment with daily checks for facility readiness and first aid."
    }
];

export default function IconOptionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-16">
        <div className="container px-2 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Checklist Icon Layout Options
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto mt-4">
              Here are a few different ways we can display the icons for the checklists. Please review and let me know which option you prefer.
            </p>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            {/* --- Option A --- */}
            <div>
              <h2 className="text-2xl font-headline font-bold mb-4 text-primary">Option A: Current Style (Two Icons)</h2>
              <div className="space-y-4">
                {sampleChecklists.map((checklist, index) => (
                  <Card key={index} className="rounded-xl overflow-hidden shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <FileCheck2 className="w-6 h-6 text-primary shrink-0" />
                        {React.cloneElement(checklist.icon, { className: "w-6 h-6 text-primary shrink-0" })}
                        {checklist.title}
                      </CardTitle>
                      <CardDescription className="pl-18">
                        {checklist.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* --- Option B --- */}
            <div>
              <h2 className="text-2xl font-headline font-bold mb-4 text-primary">Option B: Single Thematic Icon</h2>
              <div className="space-y-4">
                {sampleChecklists.map((checklist, index) => (
                  <Card key={index} className="rounded-xl overflow-hidden shadow-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        {React.cloneElement(checklist.icon, { className: "w-6 h-6 text-primary shrink-0" })}
                        {checklist.title}
                      </CardTitle>
                      <CardDescription className="pl-9">
                        {checklist.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* --- Option C --- */}
            <div>
              <h2 className="text-2xl font-headline font-bold mb-4 text-primary">Option C: Icon in Container</h2>
               <div className="space-y-4">
                {sampleChecklists.map((checklist, index) => (
                  <Card key={index} className="rounded-xl overflow-hidden shadow-sm">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                         {React.cloneElement(checklist.icon, { className: "w-6 h-6 text-primary" })}
                      </div>
                      <div>
                        <CardTitle>{checklist.title}</CardTitle>
                        <CardDescription>{checklist.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* --- Option D --- */}
            <div>
              <h2 className="text-2xl font-headline font-bold mb-4 text-primary">Option D: Icon with Badge Overlay</h2>
               <div className="space-y-4">
                {sampleChecklists.map((checklist, index) => (
                  <Card key={index} className="rounded-xl overflow-hidden shadow-sm">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="relative h-12 w-12 shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                           {React.cloneElement(checklist.icon, { className: "w-7 h-7 text-primary" })}
                        </div>
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground border-2 border-background">
                            <FileCheck2 className="w-3 h-3" />
                        </div>
                      </div>
                      <div>
                        <CardTitle>{checklist.title}</CardTitle>
                        <CardDescription>{checklist.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
