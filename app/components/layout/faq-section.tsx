
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic">Objection-Killer FAQs</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                    <AccordionItem value="item-1" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">We already have SOPs. Why do we need MoreMeets?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Most SOPs are <strong>"Dead Documents"</strong>—outdated, inconsistent, or hidden in a folder. MoreMeets is not a document; it is a <strong>Live Operational Engine.</strong> It upgrades your existing knowledge into a structured, multi-branch framework that mandates daily discipline and provides instant executive visibility via telemetry. It turns "knowing" into "doing."
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">Why standalone infrastructure instead of a dedicated App?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          Apps create <strong>"SaaS Friction."</strong> They require monthly subscriptions, logins, staff training curves, and constant internet. Our standalone engine is <strong>universally understood, 100% private, and works offline.</strong> It allows your team to start reporting in 2 minutes without a setup phase. Plus, you own the infrastructure forever—no monthly fees to access your own operational data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">How does this help me if I'm not physically present?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          This is the core power of the system. The <strong>Multi-Branch Dashboard</strong> and <strong>Incident Log</strong> act as your "Remote Eyes." You can see exactly which tasks were signed off, which high-risk points were verified by managers, and if any profit-leak incidents occurred from anywhere in the world.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">Can I add my own custom tasks or branding?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                          Yes. Unlike a locked SaaS app, <strong>you own the core engine.</strong> You can add, delete, or modify tasks to fit your brand's unique needs. You can also paste your logo on the Home Console to make it your institutional standard.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">Are these systems globally compliant and audit-ready?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Absolutely. Every system is forensically vetted and aligned with global standards including <strong>ISO, HACCP, OSHA, and JCI.</strong> Each task includes mandatory "Proof of Evidence" fields designed to command respect from official inspectors and insurance auditors.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">Will our team actually use this?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                           Yes, because we follow the <strong>2-Minute Pulse rule.</strong> Your team only sees the tasks assigned to their specific role. They update their status in seconds at the end of a shift. It's built for industrial speed, not bureaucratic paperwork.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7" className="border-white/10">
                        <AccordionTrigger className="text-primary-text font-bold hover:no-underline uppercase tracking-tighter italic">What happens when an experienced manager resigns?</AccordionTrigger>
                        <AccordionContent className="text-secondary-text leading-relaxed font-medium italic">
                            This is our biggest USP. MoreMeets converts "Tribal Knowledge" into <strong>Institutional Memory.</strong> When a hero manager leaves, their standards stay in the system. The new hire simply follows the built-in "Trainer's Notes," ensuring the standard never leaves with the person.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
