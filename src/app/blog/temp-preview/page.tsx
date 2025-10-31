
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, ShieldCheck, BookCopy, Zap, ChevronsRight, MessageSquareWarning, Users, Link, FileSignature } from 'lucide-react';
import React from 'react';

const boeingPost = {
    title: "Mid-Air Blowout: How a Missing Bolt on a Boeing 737 Became a Masterclass in Quality Control.",
    introduction: `
        <p>On January 5, 2024, passengers on Alaska Airlines Flight 1282 experienced a terrifying ordeal. Just minutes after takeoff, a large panel on the side of the brand-new Boeing 737 MAX aircraft—a "door plug" used to seal an unused emergency exit—blew out, causing explosive decompression at 16,000 feet. Miraculously, no one was seriously injured, but the incident sent shockwaves through the aviation industry and grounded hundreds of aircraft worldwide.</p>
        <p>The initial findings from the National Transportation Safety Board (NTSB) were stunningly simple and deeply troubling: the four bolts designed to secure the door plug to the airframe were missing. They were likely never installed at the Boeing factory after the plug was opened to allow for a rework of nearby rivets. This wasn't a complex design flaw or a mysterious material failure; it was a basic, catastrophic lapse in the manufacturing and quality control process that put hundreds of lives at risk.</p>
    `
};

const failurePoints = [
    {
        icon: <FileSignature className="h-6 w-6 text-primary" />,
        title: "The Oversight: Missing Bolts",
        step: "Step 1: The Physical Failure",
        description: "The NTSB found clear evidence that the door plug had been opened at the Boeing factory to allow contractors to fix improperly installed rivets nearby. The investigation concluded that when the rework was finished, the four critical bolts needed to secure the plug were never re-installed. The interior cabin panel was then put back on, hiding the fatal error from view. It was a simple, manual oversight with catastrophic potential.",
        sop: "In-Process Quality Control (IPQC)",
        solution: "This checklist introduces a mandatory 'Quality Gate.' Work cannot proceed to the next stage (e.g., re-installing the interior panel) until a separate QC inspector independently verifies (with a signature and timestamp) that all fasteners are correctly installed and torqued to specification. It creates a 'forcing function' that makes it physically impossible to 'forget' a critical step."
    },
    {
        icon: <MessageSquareWarning className="h-6 w-6 text-primary" />,
        title: "The Breakdown: Communication Gap",
        step: "Step 2: The Communication Gap",
        description: "The work on the rivets and the door plug was performed across different shifts. NTSB reports suggest that there was ambiguity and a lack of clear, formal communication about the status of the job. It's the classic 'I thought you were going to do it' problem. Without a written, verifiable handover, the incoming shift likely assumed the bolts had been re-installed, as a job of that nature would normally require.",
        sop: "Shift Handover Protocol",
        solution: "This SOP mandates a detailed, written handover checklist. The outgoing team must explicitly state the job's exact status—what was completed, what was not, and the precise state of the hardware. The incoming team must review and sign the document, acknowledging they understand the status. This prevents fatal assumptions between shifts."
    },
    {
        icon: <Users className="h-6 w-6 text-primary" />,
        title: "The Black Hole: Accountability Void",
        step: "Step 3: The Accountability Void",
        description: "In the initial investigation, it was incredibly difficult for Boeing to determine who worked on the door plug and who was responsible for the final inspection. Because the work was not properly documented in the manufacturing execution system, there was no clear, verifiable record of the actions taken. Without a paper trail, accountability disappears into a black hole.",
        sop: "Traceability & Batch Records",
        solution: "This system ties every critical assembly step to the specific employee who performed it and the inspector who verified it. A completed digital or physical checklist becomes a permanent, auditable record, linking the installation, torquing, and final QC to specific individuals. It creates undeniable accountability and a clear path for investigation if a failure occurs."
    }
];

export default function TempBlogPreviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <article>
            <header className="mb-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-headline tracking-tight mb-4 text-primary">
                {boeingPost.title}
              </h1>
               <p className="text-muted-foreground text-sm md:text-base">
                Temporary Blog Style Preview
              </p>
            </header>
            
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mx-auto prose-headings:font-headline prose-headings:text-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-p:text-foreground/80"
              dangerouslySetInnerHTML={{ __html: boeingPost.introduction }}
            />

            <Separator className="my-12" />

            {/* --- STYLE 1: NARRATIVE LIST --- */}
            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline text-center mb-8">Style 1: The Narrative List</h2>
                <div className="space-y-8">
                    {failurePoints.map((point) => (
                        <div key={point.title}>
                            <h3 className="text-xl font-semibold font-headline text-primary flex items-center gap-3">{point.icon} {point.title}</h3>
                            <p className="text-muted-foreground mt-2 ml-9">{point.description}</p>
                            <p className="mt-2 ml-9"><strong className="text-foreground">The Checklisted Solution:</strong> Our <code className="font-semibold text-accent bg-secondary p-1 rounded-md">{point.sop}</code> {point.solution.toLowerCase()}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Separator className="my-12" />

            {/* --- STYLE 2: MINI CASE STUDY CARDS --- */}
            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline text-center mb-8">Style 2: Mini Case-Study Cards</h2>
                 <div className="space-y-6">
                    {failurePoints.map((point, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg border-l-4 border-destructive">
                           <CardHeader className="flex flex-row items-start gap-4">
                                {point.icon}
                                <div>
                                    <CardTitle className="text-xl font-headline text-destructive">{point.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="bg-secondary/50 p-6">
                                <h4 className="font-semibold text-primary">The Fortress of Procedure: <code className="font-semibold text-accent bg-background p-1 rounded-md">{point.sop}</code></h4>
                                <p className="text-sm text-foreground/80">{point.solution}</p>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>

            <Separator className="my-12" />
            
            {/* --- STYLE 3: SPLIT CARD LAYOUT --- */}
            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline text-center mb-8">Style 3: Split Card Layout</h2>
                <div className="space-y-8">
                    {failurePoints.map((point, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg border-t-4 border-primary">
                            <CardHeader>
                                 <CardTitle className="text-xl font-headline text-primary flex items-center gap-3">{point.icon} {point.title}</CardTitle>
                            </CardHeader>
                            <div className="grid md:grid-cols-2">
                                <CardContent className="space-y-2 border-b md:border-b-0 md:border-r">
                                    <h4 className="font-bold text-destructive">Anatomy of Failure</h4>
                                    <p className="text-sm text-muted-foreground">{point.description}</p>
                                </CardContent>
                                <CardContent className="space-y-2 bg-secondary/30">
                                    <h4 className="font-bold text-green-700 dark:text-green-400">The Fortress of Procedure</h4>
                                    <p className="text-sm text-foreground/80">The <code className="font-semibold text-accent bg-background p-1 rounded-md">{point.sop}</code> prevents this. {point.solution}</p>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
            
            <Separator className="my-12" />

            {/* --- STYLE 4: THE CHAIN OF FAILURE --- */}
            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline text-center mb-8">Style 4: The Chain of Failure</h2>
                 <div className="relative space-y-10 pl-8">
                     <div className="absolute left-0 top-0 h-full w-px bg-border ml-4"></div>
                     {failurePoints.map((point, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-8 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                            <div className="pl-4">
                                <h3 className="text-xl font-semibold font-headline text-primary">{point.step}</h3>
                                <p className="text-muted-foreground mt-1">{point.description}</p>
                                <div className="mt-3 flex items-start gap-3 rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                                    <Zap className="h-5 w-5 text-green-600 mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-green-700 dark:text-green-400">The Procedural Intervention: <code className="font-semibold text-accent bg-background p-1 rounded-md">{point.sop}</code></h4>
                                        <p className="text-sm text-foreground/80">{point.solution}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

             <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-12">
                <h3 class="text-xl font-bold mt-6 mb-4 font-headline text-primary">Conclusion: You Can't Afford to Assume</h3>
                <p>The Boeing door plug incident is a powerful lesson for every operations manager. It proves that even in the most advanced manufacturing environments, the simplest steps are often the most critical. It demonstrates that verbal communication is unreliable and that assumptions are the enemy of safety and quality.</p>
                <p>A physical or digital checklist that must be signed at each critical stage of a process is not bureaucracy. It is the most effective tool ever invented to prevent human error. Before you sign off on your next product shipment, ask yourself: do you have a verifiable record that all the "bolts" have been installed, or are you just assuming they have?</p>
             </div>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    