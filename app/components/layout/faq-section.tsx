
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase italic">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                     <AccordionItem value="item-1">
                        <AccordionTrigger>We already have SOPs. Why do we need MoreMeets?</AccordionTrigger>
                        <AccordionContent>
                           Most SOPs are outdated, inconsistent, or not audit-ready "dead documents." MoreMeets is not a document; it is a <strong>live operational engine</strong>. It upgrades your existing knowledge into a structured, multi-branch framework that mandates daily discipline and provides instant executive visibility.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger>Can't I just use AI like ChatGPT to create these checklists?</AccordionTrigger>
                        <AccordionContent>
                          You can, but it's a significant operational risk. AI generates "plausible-sounding" lists based on internet data, but it lacks <strong>forensic engineering</strong>. Our systems are built on over 30 years of high-stakes auditing and analysis of real-world operational failures (fires, outbreaks, heists). An AI-generated checklist doesn't know the specific "Consequences of Failure" or the mandatory "Yellow Target" verification points needed to actually prevent a disaster.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>Are these SOPs globally compliant and audit-ready?</AccordionTrigger>
                        <AccordionContent>
                           Absolutely. Every Sovereign pack is mapped to global standards including <strong>ISO, HACCP, OSHA, JCI, and FSSAI</strong>. Each task includes mandatory "Proof of Evidence" fields designed to command respect from official inspectors and insurance auditors.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Will this system fit our unique workflows?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Over 80% of operational best practices are universal. We provide the <strong>globally benchmarked infrastructure</strong>, and since the file is a standard Excel/Google Sheets engine, you can easily customize the final 20% to fit your brand's specific terminology and layout.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>Why is this an Excel file and not a dedicated app?</AccordionTrigger>
                        <AccordionContent>
                          Apps create "SaaS Friction." They require logins, training, and monthly subscription bills. Excel is <strong>universally understood, 100% private, and works offline.</strong> It allows your team to start reporting in 2 minutes without a setup phase. Plus, you own the engine forever—no monthly fees to access your own data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>What does "expert customization" mean?</AccordionTrigger>
                        <AccordionContent>
                          Each pack includes one <strong>Expert Customization</strong> session. After purchase, our team works with you to align the file with your specific brand colors, unique facility modules, or internal department names, ensuring the toolkit fits your organization like a glove.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger>What ROI can we expect from implementing this?</AccordionTrigger>
                        <AccordionContent>
                            Operational chaos typically leaks <strong>2% to 5% of gross revenue</strong> through waste, theft, and downtime. By engineering consistency, our clients recover this loss immediately. Preventing a single safety incident or regulatory fine pays for the entire library 100 times over.
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
                           Building a multi-branch, logically-aware data engine with forensically-vetted protocols takes <strong>3–6 months of senior leadership time.</strong> MoreMeets gives you a better result instantly, at a fraction of the cost of one week of a consultant's time.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
