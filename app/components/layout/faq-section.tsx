
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic text-primary-text tracking-tighter">BEFORE YOU DEPLOY</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What exactly is MoreMeets™?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                           <p>MoreMeets™ is a <strong>pre-built operational system</strong> designed to automate institutional discipline. It combines structured SOPs, live execution tracking, and a real-time executive dashboard into a single engine.</p>
                           <p>Your team performs daily tasks, the system captures execution automatically, and you see everything live. This is not a checklist—it is a system that runs your operations.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">We already have SOPs. Why do we need this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                           <p>Most businesses already have SOPs. <strong>The problem is execution.</strong></p>
                           <p>SOPs sit in folders. They depend on memory. They are not visible or followed daily. MoreMeets turns SOPs into a <strong>Live Operating System</strong> where responsibility is assigned and execution is recorded in real time.</p>
                           <p className="text-primary-text font-black border-t border-white/5 pt-2">SOPs = Documentation. <br/> MoreMeets = Execution.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">How does this work without being an app?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                          <p>It runs on tools your team already understands (Excel / Google Sheets), meaning <strong>nothing new needs to be installed or learned.</strong></p>
                          <p>The system structures activity into clear operational data. You open one dashboard and see what's done, missed, or delayed across all branches without ever having to ask for a report.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What do I actually get when I deploy this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           You get a complete operational engine: Pre-built daily/weekly/monthly systems, role-based task allocation, a live telemetry dashboard, audit-ready logs, and <strong>Trainer Notes/Consequences</strong> for every single task. You start with a working system, not a blank page.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">How does this help if I'm not present at the site?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          MoreMeets provides <strong>Remote Executive Visibility.</strong> Because names and timestamps are entered as work happens, the dashboard builds a real-time "Digital Twin" of your operation. You can be anywhere in the world and know exactly which branch is falling behind.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Will our team actually use this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Yes, because it’s <strong>Simple.</strong> They don't have to report separately. They simply open their role-specific view, see exactly what needs to be done, and enter their name when it's completed. It turns mechanical ticking into intentional discipline.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What happens when a manager resigns?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          The <strong>System continues.</strong> MoreMeets converts tribal knowledge into permanent institutional memory. When someone resigns, your standards don't leave with them. The new hire simply follows the built-in Trainer’s Notes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Can I edit tasks or add my own?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          Yes. Unlike a locked SaaS app, <strong>you own the engine.</strong> You can add, delete, or modify any task to fit your brand's unique needs. It is fully customizable and yours forever.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Is this system audit-ready?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Absolutely. Every system is built using <strong>real compliance standards</strong> (ISO, HACCP, OSHA). The logs generated are time-stamped and provide the exact "Proof of Evidence" required by inspectors and auditors.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
