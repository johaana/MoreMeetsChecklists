
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-black font-headline uppercase italic">Objection-Killer FAQs</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-11">
                     <AccordionItem value="item-1">
                        <AccordionTrigger>We already have SOPs. Why do we need MoreMeets?</AccordionTrigger>
                        <AccordionContent>
                           Most SOPs are outdated, inconsistent, or not audit-ready "dead documents." MoreMeets is not a document: it is a <strong>live operational engine</strong>. It upgrades your existing knowledge into a structured, multi-branch framework that mandates daily discipline and provides instant executive visibility.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Why is this an Excel file and not a dedicated app?</AccordionTrigger>
                        <AccordionContent>
                          Apps create "SaaS Friction." They require logins, training, and monthly subscription bills. Excel is <strong>universally understood, 100% private, and works offline.</strong> It allows your team to start reporting in 2 minutes without a setup phase. Plus, you own the engine forever: no monthly fees to access your own data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>How does this help me if I'm not physically present?</AccordionTrigger>
                        <AccordionContent>
                          This is the core power of MoreMeets. The <strong>Live Performance Dashboard</strong> and <strong>Incident Log</strong> act as your "Remote Eyes." You can see exactly which tasks were signed off, which high-risk points were verified by managers, and if any safety or profit-leak incidents occurred: from anywhere in the world.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>Can I add my own custom tasks or branding?</AccordionTrigger>
                        <AccordionContent>
                          Yes. Unlike a locked app, you own the infrastructure. Since it's a standard Excel/Google Sheets engine, you can <strong>add, delete, or modify tasks</strong> to fit your brand's unique needs. You can also paste your logo on the Home Console to make it your own institutional standard.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>Are these SOPs globally compliant and audit-ready?</AccordionTrigger>
                        <AccordionContent>
                           Absolutely. Every system is mapped to global standards including <strong>ISO, HACCP, OSHA, JCI, and FSSAI</strong>. Each task includes mandatory "Proof of Evidence" fields designed to command respect from official inspectors and insurance auditors.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Will our team actually use this?</AccordionTrigger>
                        <AccordionContent>
                           Yes, because we follow the <strong>2-Minute Pulse rule.</strong> Your team only sees the tasks assigned to their specific role. They update their status in seconds at the end of a shift. It's built for speed, not paperwork.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>What happens when an experienced manager resigns?</AccordionTrigger>
                        <AccordionContent>
                            This is our biggest USP. MoreMeets converts "Tribal Knowledge" into <strong>Institutional Memory</strong>. When a hero manager leaves, their standards stay in the system. The new hire simply follows the built-in instructions and "Trainer's Notes," ensuring the standard never leaves with the person.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-8">
                        <AccordionTrigger>Can my internal team build this instead?</AccordionTrigger>
                        <AccordionContent>
                           Building a multi-branch, logically-aware data engine with forensically-vetted protocols takes <strong>3.6 months of senior leadership time.</strong> MoreMeets gives you a better result instantly, at a fraction of the cost of one week of a consultant's time.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
