
'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24 bg-white border-t border-zinc-100">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <SectionEyebrow text="COMMON INQUIRIES" />
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic text-zinc-950 tracking-tighter">OPERATIONAL QUESTIONS</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">We already have SOPs. Why do we need this?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-8">
                            <p>Most businesses already have SOPs. The problem is execution.</p>
                            <p>Instructions become verbal. Managers lose visibility. Accountability disappears. MoreMeets converts SOPs into <strong>live daily execution systems</strong> with timestamps and audit-ready proof, so standards are followed even when you're absent.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-whatsapp" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can’t I just use WhatsApp to track tasks?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>WhatsApp is communication, not execution.</p>
                            <p>Messages are easy to miss, forget, or misinterpret. MoreMeets provides <strong>timestamped proof</strong>, live audit tracking, and multi-shift visibility—without the noise and app fatigue of chat tools.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-training" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Do employees need technical training?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Very minimal. Most teams start using it immediately.</p>
                            <p>Because it runs inside Google Sheets on their phones, the behavior is intuitive. Each task includes step-by-step instructions, acting as an on-the-job coach.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-multi" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can this work across multiple branches?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes. MoreMeets™ is engineered for <strong>multi-location operational control.</strong></p>
                            <p>Management can track completion rates and incidents across several outlets from a single master dashboard, maintaining a group-wide standard of excellence.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-edit" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can we customize or add our own tasks?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>Yes. Every system is <strong>100% editable</strong>.</p>
                          <p>It works like a master template. You can add, delete, or modify any technical task to fit your unique brand protocols forever.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-staffleave" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">What happens when key staff leave?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                          <p>The <strong>System stays.</strong></p>
                          <p>Their operational knowledge remains embedded in the master ledger and library. MoreMeets™ ensures your standards are owned by the business, not the individual.</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);

const SectionEyebrow = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3 md:gap-4 mb-6 justify-center">
        <div className="w-8 md:w-12 h-px bg-zinc-200 shrink-0" />
        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 font-headline whitespace-nowrap">
            {text}
        </span>
        <div className="w-8 md:w-12 h-px bg-zinc-200 shrink-0" />
    </div>
);
