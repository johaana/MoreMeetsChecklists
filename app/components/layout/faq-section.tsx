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
                            <p>Many businesses already have some form of SOPs.</p>
                            <p>The question is not whether instructions exist.</p>
                            <p>The question is whether they are complete, up to date, easy for staff to follow, and actually used every day.</p>
                            <p>Many SOPs are:</p>
                            <p>
                                • outdated<br />
                                • difficult for frontline staff to understand<br />
                                • missing accountability<br />
                                • missing verification<br />
                                • stored in documents that nobody opens
                            </p>
                            <p>MoreMeets combines industry-specific SOP intelligence with daily execution tracking, built-in instructions, accountability, timestamps, and proof of completion.</p>
                            <p>So instead of relying on memory, follow-ups, or assumptions, managers can see what was completed, what was missed, and what needs attention.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-sheets" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Why Google Sheets instead of dedicated software?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Software often fails in the real world because of "app fatigue" and the friction of learning new interfaces.</p>
                            <p>Google Sheets is a tool your team already knows. It works offline, supports real-time collaboration, and integrates perfectly with your existing workspace. It ensures the system is actually followed, which is the only thing that matters in operations.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-templates" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Are these just spreadsheet templates?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>No. MoreMeets delivers complete <strong>operational systems</strong>.</p>
                            <p>A template is a static document; a MoreMeets system includes technical protocols, frequency mapping, accountability structures, and built-in audit trails. We are selling the engineering of your operations; Google Sheets is just the layer where that engineering lives.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-excel" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can I use Excel instead of Google Sheets?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes. Our systems are delivered in Excel (.xlsx) format.</p>
                            <p>While we recommend Google Sheets for its superior real-time collaboration and mobile ease-of-use, the system remains fully functional in desktop Excel or other spreadsheet environments.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-ai" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Why not generate SOPs with AI?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>AI is excellent at writing general text, but it lacks the <strong>forensic operational experience</strong> to build a fail-safe execution system.</p>
                            <p>Our SOPs are engineered from 30 years of high-stakes field exposure. We define the consequences of failure, the specific proof required for an audit, and the exact floor actions needed—details that generic AI cannot reliably produce for real-world risk management.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-training" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Do employees need technical training?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Very minimal. Most teams start using it immediately.</p>
                            <p>Because it runs inside Google Sheets on their phones, the behavior is intuitive. Each task includes step-by-step instructions and reference images, acting as an on-the-job coach. Tasks can still be logged during unstable connectivity and sync automatically once internet resumes.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-multi" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can this work across multiple branches?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes. MoreMeets™ is engineered for <strong>multi-location operational control.</strong></p>
                            <p>Management can track completion rates and incidents across several outlets from a single master dashboard, maintaining a group-wide standard of excellence.</p>
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
