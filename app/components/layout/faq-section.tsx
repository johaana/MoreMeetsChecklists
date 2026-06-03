'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24 bg-white border-t border-zinc-100">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <SectionEyebrow text="COMMON QUESTIONS" />
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic text-zinc-950 tracking-tighter">QUESTIONS BEFORE YOU BUY</h2>
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
                            <p>AI can help write instructions.</p>
                            <p>But someone still needs to decide:</p>
                            <p>
                                • what tasks should exist<br />
                                • how often they should happen<br />
                                • what employees should record<br />
                                • what managers should verify<br />
                                • what proof should be collected<br />
                                • what happens when standards are missed
                            </p>
                            <p>Building a complete SOP system takes time, operational experience, and constant refinement.</p>
                            <p>MoreMeets gives you a ready-to-use system with industry-specific SOPs, task schedules, accountability, and execution tracking already built in.</p>
                            <p>Instead of starting from a blank page, you start with a system that is ready to use and fully editable.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-training" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Do employees need technical training?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>No specialized training is required.</p>
                            <p>The system runs inside Google Sheets, which most teams already know how to use.</p>
                            <p>Each task includes clear instructions, expected actions, and completion logs, making it easy for staff to follow the process consistently.</p>
                            <p>Most teams can begin using the system with a short walkthrough from a supervisor.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-multi" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can this work across multiple branches?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes.</p>
                            <p>The systems can be used across multiple locations and teams.</p>
                            <p>Because everything runs inside Google Sheets, managers can review activity, completion records, and operational logs without collecting updates manually from every branch.</p>
                            <p>The exact reporting and oversight available depends on the specific system being used.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-staffleave" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">What happens when key staff leave?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Important knowledge often leaves with them.</p>
                            <p>Procedures become inconsistent.</p>
                            <p>New employees receive different instructions.</p>
                            <p>Managers spend time rebuilding processes that already existed.</p>
                            <p>MoreMeets helps document tasks, instructions, and expected standards in one place, so your business is less dependent on individual employees and more dependent on a repeatable system.</p>
                            <p>The goal is to make sure important knowledge stays with the business.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-records" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can I download reports and records?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes.</p>
                            <p>Because MoreMeets™ operates inside your own Google Sheets environment, operational records remain fully accessible to your business.</p>
                            <p>You can export, print, archive, review, filter, or share records whenever required.</p>
                            <p>This includes task completion records, timestamps, accountability logs, verification records, and audit evidence maintained inside the system.</p>
                            <p>Your data remains under your control.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-internet" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">What happens if internet connectivity is unstable?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Operations should not stop because connectivity drops.</p>
                            <p>Team members can continue completing tasks even when internet access is unstable or temporarily unavailable.</p>
                            <p>Each task can still be marked as completed, and the actual completion time is recorded so managers can see when the work was truly done—not simply when the device reconnects.</p>
                            <p>Once connectivity returns, updates synchronize automatically.</p>
                            <p>The goal is operational continuity, accountability, and accurate records, even in environments where internet access is unreliable.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-lockin" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Is my data locked into MoreMeets™?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>No.</p>
                            <p>Unlike traditional software subscriptions, your operational system remains fully editable and accessible.</p>
                            <p>You own the file, the structure, the SOPs, and the records.</p>
                            <p>There is no vendor lock-in.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-multi-loc" className="border-zinc-200">
                        <AccordionTrigger className="text-zinc-950 font-black hover:no-underline uppercase tracking-tighter italic text-left py-6">Can managers monitor multiple locations?</AccordionTrigger>
                        <AccordionContent className="text-zinc-600 leading-relaxed font-bold italic space-y-4 pb-6">
                            <p>Yes. The systems are designed to support single-unit and multi-location operations.</p>
                            <p>Businesses can maintain consistent standards across departments, stations, outlets, or branches while maintaining visibility over execution records and daily completion activity.</p>
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
