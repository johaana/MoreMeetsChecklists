'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24 bg-white border-t border-zinc-100">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic text-zinc-950 tracking-tighter">OPERATIONAL OBJECTIONS</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">We already have SOPs. Why do we need this?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                           <p>Most businesses already have SOPs. <strong>The problem is execution.</strong></p>
                           <p>SOPs sit in folders or PDFs. They depend on memory. They are not followed daily.</p>
                           <p>MoreMeets converts static SOPs into a <strong>Live Operating System</strong> where work is assigned and execution is recorded in real time.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-whatsapp" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Why not just use WhatsApp for tracking?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>WhatsApp is great for chat, but terrible for infrastructure.</p>
                            <p>Instructions get buried. Handovers are unsearchable. There is zero verifiable audit trail for compliance. MoreMeets™ provides a <strong>single source of truth</strong> that WhatsApp cannot offer.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-difficulty" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Is this difficult for non-technical staff?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>No. Your team already knows how to use a phone and a spreadsheet.</p>
                          <p>There is no new software to install, no passwords to manage, and no complex retraining. They simply enter their initials when a task is done.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-edit" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can we edit or add our own tasks?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>Yes. Unlike a locked SaaS app, <strong>you own the engine.</strong></p>
                          <p>You can add, delete, or modify any task to fit your brand's unique protocols. It is 100% customizable and yours forever.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-phones" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Does this actually work on phones?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>Yes. By using Google Sheets, your team gets a native mobile app experience.</p>
                          <p>We have engineered the column widths and row heights specifically for high-speed mobile task execution.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-smallbiz" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Is this for small businesses too?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                           <p><strong>Yes.</strong> Most single-location businesses are actually the biggest beneficiaries.</p>
                           <p>Why? Because in a small business, execution usually depends on the owner personally following up every day. This system automates that visibility, giving you your time back.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-staffleave" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">What happens when key staff leave?</AccordionTrigger>
                        <AccordionContent className="text-zinc-500 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>The <strong>System stays.</strong> MoreMeets™ converts tribal knowledge into permanent institutional memory. When someone resigns, your standards don't leave with them.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
