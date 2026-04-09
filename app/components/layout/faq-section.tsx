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
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">We already have SOPs. Why do we need this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                           <p>Most businesses already have SOPs. <strong>The problem is execution.</strong></p>
                           <p>SOPs sit in folders. They depend on memory. They are not followed daily.</p>
                           <p>MoreMeets converts SOPs into a <strong>Live Operating System</strong> where responsibility is assigned and execution is recorded in real time.</p>
                           <p className="text-primary-text font-black border-t border-white/5 pt-2">SOPs = Documentation. <br/> MoreMeets = Execution.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">How does this work without being an app?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                          <p>It runs on tools your team already understands (Excel / Google Sheets), meaning <strong>nothing new needs to be installed or learned.</strong></p>
                          <p>The system structures activity into clear operational data. You open one dashboard and see what's done, missed, or delayed across all branches without ever having to ask for a report.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Will our team actually use this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Yes, because it’s <strong>Simple.</strong> They don't have to report separately. They simply open their role-specific view, see exactly what needs to be done, and enter their name when it's completed. It turns mechanical ticking into intentional discipline.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What happens when a manager resigns?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          The <strong>System continues.</strong> MoreMeets converts tribal knowledge into permanent institutional memory. When someone resigns, your standards don't leave with them. The new hire simply follows the built-in Trainer’s Notes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Can I edit tasks or add my own?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          Yes. Unlike a locked SaaS app, <strong>you own the engine.</strong> You can add, delete, or modify any task to fit your brand's unique needs. It is 100% customizable and yours forever.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-lock" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Is the system locked? Can I prevent staff from changing my SOPs?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          No, the system is <strong>100% unlocked</strong> and yours to own. To prevent accidental edits by staff, we recommend using the "Protect Sheet" feature in Excel or Google Sheets. You can lock everything except the "Done By" and "Date" columns, ensuring your core protocols and formulas remain bulletproof while allowing daily reporting.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-modify" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What if I accidentally break a formula or task?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                          <p>The system is fully unlocked, which is its greatest power. We recommend keeping an original <strong>Master Copy</strong> untouched.</p>
                          <p>If you accidentally modify or break the logic, reach out to us with your order ID—we can provide a fresh copy of the latest master format. Additionally, step-by-step instructions on how to "Lock" your final protocols are included within the file itself.</p>
                          <p className="text-primary-text/40 pt-2 border-t border-white/5">MoreMeets is not responsible for operational failures or compliance lapses resulting from post-download edits or misuse of the file logic.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border-white/10">
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
