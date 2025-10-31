
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertTriangle, ShieldCheck, BookCopy } from 'lucide-react';
import React from 'react';

const boeingPost = {
    title: "Mid-Air Blowout: How a Missing Bolt on a Boeing 737 Became a Masterclass in Quality Control.",
    content: `
        <p>On January 5, 2024, passengers on Alaska Airlines Flight 1282 experienced a terrifying ordeal. Just minutes after takeoff, a large panel on the side of the brand-new Boeing 737 MAX aircraft—a "door plug" used to seal an unused emergency exit—blew out, causing explosive decompression at 16,000 feet. Miraculously, no one was seriously injured, but the incident sent shockwaves through the aviation industry and grounded hundreds of aircraft worldwide.</p>
        <p>The initial findings from the National Transportation Safety Board (NTSB) were stunningly simple and deeply troubling: the four bolts designed to secure the door plug to the airframe were missing. They were likely never installed at the Boeing factory. This wasn't a complex design flaw or a mysterious material failure; it was a basic, catastrophic lapse in the manufacturing and quality control process.</p>
    `
};

const failurePoints = [
    {
        title: "Missing Bolts",
        description: "The core failure was physical: the four bolts securing the door plug were never installed.",
        sop: "In-Process Quality Control (IPQC)",
        solution: "This SOP introduces a mandatory 'Quality Gate.' Work cannot proceed until a separate QC inspector independently verifies (with a signature and timestamp) that all fasteners are correctly installed and torqued. It creates a 'forcing function' that makes it impossible to forget a critical step.",
        icon: <AlertTriangle className="w-6 h-6 text-destructive" />
    },
    {
        title: "Incomplete Handover",
        description: "Work on the door plug was reportedly started by one team and finished by another, with no formal handover process.",
        sop: "Shift Handover Protocol",
        solution: "This checklist mandates a detailed, written handover. The outgoing team must explicitly state the job's exact status, including what was and was not completed. The incoming team signs to acknowledge they understand, preventing fatal assumptions.",
        icon: <BookCopy className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Lack of Accountability",
        description: "Without a verifiable record, it was impossible to know who was responsible for installing the bolts and who was supposed to check their work.",
        sop: "Traceability & Batch Records",
        solution: "This system ties every critical assembly step to the specific employee who performed it. A completed checklist becomes a permanent, signed record, linking installation, torquing, and final QC to individuals and creating clear accountability.",
        icon: <ShieldCheck className="w-6 h-6 text-green-500" />
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
              dangerouslySetInnerHTML={{ __html: boeingPost.content }}
            />

            <Separator className="my-12" />

            {/* --- STYLE 1: NARRATIVE LIST --- */}
            <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter font-headline text-center mb-8">Style 1: The Narrative List</h2>
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold font-headline text-primary flex items-center gap-3">{failurePoints[0].icon} The Anatomy of the Failure: Missing Bolts</h3>
                        <p className="text-muted-foreground mt-2 ml-9">{failurePoints[0].description}</p>
                        <p className="mt-2 ml-9"><strong className="text-foreground">The Checklisted Solution:</strong> Our <code className="font-semibold text-accent bg-secondary p-1 rounded-md">In-Process Quality Control (IPQC)</code> SOP introduces a mandatory 'Quality Gate.' Work cannot proceed until a separate QC inspector independently verifies (with a signature and timestamp) that all fasteners are correctly installed and torqued. This creates a 'forcing function' that makes it impossible to 'forget' a critical step.</p>
                    </div>
                     <div>
                        <h3 className="text-xl font-semibold font-headline text-primary flex items-center gap-3">{failurePoints[1].icon} The Communication Breakdown: Incomplete Handover</h3>
                        <p className="text-muted-foreground mt-2 ml-9">{failurePoints[1].description}</p>
                        <p className="mt-2 ml-9"><strong className="text-foreground">The Checklisted Solution:</strong> The <code className="font-semibold text-accent bg-secondary p-1 rounded-md">Shift Handover Protocol</code> mandates a detailed, written handover. The outgoing team must explicitly state the job's exact status—what was and was not completed. The incoming team signs to acknowledge they understand, preventing fatal assumptions between shifts.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold font-headline text-primary flex items-center gap-3">{failurePoints[2].icon} The Accountability Void: No Verifiable Record</h3>
                        <p className="text-muted-foreground mt-2 ml-9">{failurePoints[2].description}</p>
                        <p className="mt-2 ml-9"><strong className="text-foreground">The Checklisted Solution:</strong> Our system for <code className="font-semibold text-accent bg-secondary p-1 rounded-md">Traceability & Batch Records</code> ties every critical assembly step to the specific employee who performed it. A completed checklist becomes a permanent, signed record, linking installation, torquing, and final QC to individuals and creating undeniable accountability.</p>
                    </div>
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
                                    <CardTitle className="text-xl font-headline text-destructive">The Failure: {point.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">{point.description}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="bg-secondary/50 p-6">
                                <h4 className="font-semibold text-primary">The Fortress of Procedure</h4>
                                <p className="text-sm text-foreground/80 mt-2">The <code className="font-semibold text-accent bg-background p-1 rounded-md">{point.sop}</code> SOP prevents this by mandating a verifiable checklist. {point.solution}</p>
                            </CardContent>
                        </Card>
                    ))}
                 </div>
            </div>

             <div className="prose prose-lg dark:prose-invert max-w-none mx-auto mt-12">
                <h3 class="text-xl font-bold mt-6 mb-4 font-headline text-primary">Conclusion: You Can't Afford to Assume</h3>
                <p>The Boeing door plug incident is a powerful lesson for every operations manager. It proves that even in the most advanced manufacturing environments, the simplest steps are often the most critical. It demonstrates that verbal communication is unreliable and that assumptions are the enemy of safety and quality.</p>
                <p>A physical checklist that must be signed at each critical stage of a process is not bureaucracy. It is the most effective tool ever invented to prevent human error. Before you sign off on your next product shipment, ask yourself: do you have a verifiable record that all the "bolts" have been installed, or are you just assuming they have?</p>
             </div>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
