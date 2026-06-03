'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24 bg-white border-t border-zinc-100">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <SectionEyebrow text="COMMON INQUIRIES" />
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic text-zinc-950 tracking-tighter">FAQS</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">We already have SOPs. How is this different?</AccordionTrigger>
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
                            <p><strong>Because most teams already know how to use it.</strong></p>
                            <p>Many business software tools fail because employees stop using them after a few weeks.</p>
                            <p>People forget passwords.</p>
                            <p>People avoid learning new systems.</p>
                            <p>Managers end up chasing updates again.</p>
                            <p>Google Sheets removes that problem.</p>
                            <p>There are no app downloads, no training sessions, and no adoption battle.</p>
                            <p>The goal is not to introduce another tool.</p>
                            <p>The goal is to make sure important work gets done every day.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-templates" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Are these just spreadsheet templates?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p><strong>No.</strong></p>
                            <p>A template gives you a blank structure.</p>
                            <p>MoreMeets gives you a complete system.</p>
                            <p>Each pack includes:</p>
                            <p>
                                • industry-specific SOPs<br />
                                • daily task schedules<br />
                                • built-in instructions<br />
                                • accountability tracking<br />
                                • verification workflows<br />
                                • audit-ready records
                            </p>
                            <p>Instead of building everything from scratch, you start with a system that is already organized and ready to use.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-excel" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can I use Excel instead of Google Sheets?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p><strong>Our systems are designed to run in Google Sheets.</strong></p>
                            <p>You will receive the file in Excel format, but the recommended setup is to upload it to Google Drive and use it in Google Sheets.</p>
                            <p>Google Sheets makes it easier to:</p>
                            <p>
                                • collaborate with your team<br />
                                • access the system from mobile devices<br />
                                • work across multiple locations<br />
                                • keep everyone on the latest version
                            </p>
                            <p>The setup takes only a few minutes and instructions are included inside the file.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-ai" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Why not generate SOPs with AI?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p><strong>AI can generate instructions.</strong></p>
                            <p>The challenge is knowing what instructions should exist, how often tasks should happen, what proof should be collected, and what managers should verify.</p>
                            <p>MoreMeets systems are built around real operational workflows, accountability, and daily execution.</p>
                            <p>AI can help write text.</p>
                            <p>Operations require structure, consistency, and follow-through.</p>
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
