
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
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">We already have SOPs. Why do we need MoreMeets?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                           <p>Most businesses already have SOPs. <strong>The problem is execution.</strong></p>
                           <p>Traditional SOPs sit in folders, depend on people remembering, and are not visible daily. MoreMeets turns documentation into a <strong>Live Execution System.</strong></p>
                           <p>Tasks are structured, responsibility is assigned by role, and execution is logged in real-time. Every task includes exactly <strong>What</strong> to do, <strong>How</strong> to do it (Trainer Notes), and <strong>Why</strong> it matters (Consequences of Failure).</p>
                           <p className="text-primary-text font-black border-t border-white/5 pt-2">SOPs = Documentation. <br/> MoreMeets = Execution.</p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">How does this work without being an app?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic space-y-4">
                          <p>Because nothing new needs to be installed or learned. Your team updates tasks in a <strong>standalone system they already understand.</strong></p>
                          <p>As work gets completed on the floor, status updates automatically and logs build in real-time. The system structures this activity into <strong>Live Operational Telemetry.</strong></p>
                          <p>You open one dashboard and see what’s done, missed, or delayed across all branches. <strong>This is not software you manage—it’s a system that runs your operations.</strong></p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">How does this help me if I'm not physically present?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          This is the core power of the system. The <strong>Multi-Branch Dashboard</strong> and <strong>Incident Log</strong> act as your "Remote Eyes." You can see exactly which high-risk points were verified by managers and if any profit-leak incidents occurred from anywhere in the world, without chasing people for updates.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Will our team actually use this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Yes, because we follow the <strong>2-Minute Pulse rule.</strong> Your team only sees the tasks assigned to their specific role. They update their status in seconds at the end of a shift. It's built for industrial speed, not bureaucratic paperwork.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">What happens when an experienced manager resigns?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                            MoreMeets converts "Tribal Knowledge" into <strong>Permanent Institutional Memory.</strong> When a hero manager leaves, their standards stay in the system. The new hire simply follows the built-in "Trainer's Notes," ensuring the standard is owned by the business, not the individual.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Can I add my own custom tasks or branding?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          Yes. Unlike a locked SaaS app, <strong>you own the core engine.</strong> You can add, delete, or modify tasks to fit your brand's unique needs. You can also paste your logo on the Home Console to make it your institutional standard.
                        </AccordionContent>
                    </AccordionItem>

                     <AccordionItem value="item-7" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic text-left">Are these systems globally compliant and audit-ready?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Absolutely. Every system is forensically vetted and aligned with global standards including <strong>ISO, HACCP, OSHA, and JCI.</strong> Each task includes mandatory "Proof of Evidence" fields designed to command respect from official inspectors and insurance auditors.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
