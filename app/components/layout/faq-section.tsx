
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => (
    <section id="faq" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                     <AccordionItem value="item-1">
                        <AccordionTrigger>We already have SOPs. Why do we need MoreMeets?</AccordionTrigger>
                        <AccordionContent>
                           Most SOPs are outdated, inconsistent, or not audit-ready. MoreMeets upgrades your existing system into a <strong>globally compliant, structured, and inspection-ready framework</strong>. It delivers a complete operational system—policies, risk controls, and workflows—that strengthens, not just replaces, what you have.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-2">
                        <AccordionTrigger>Can't I just use AI like ChatGPT to create these checklists?</AccordionTrigger>
                        <AccordionContent>
                          You can, but it's a significant risk. Think of AI like a brilliant but inexperienced intern. It can generate a generic, plausible-sounding list. However, our checklists are more like a seasoned COO's playbook. They are not just 'written'; they are <strong>engineered based on deep research into global best practices, industry-specific compliance standards (like ISO and HACCP), and analysis of real-world operational failures.</strong> An AI-generated checklist doesn't know what it doesn't know. It can miss critical safety steps, create non-compliant workflows, and has no concept of legal or financial liability. Our packs provide a verified, audit-ready framework that you can trust when it matters most.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger>Are these SOPs globally compliant and audit-ready?</AccordionTrigger>
                        <AccordionContent>
                           Absolutely. Our packs reference ISO, OSHA, FSSAI, and other global standards. Each checklist includes specific <strong>audit controls, evidence fields, and documentation flows</strong> designed to meet the rigorous demands of both internal and external inspections.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Will this system fit our unique workflows?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Over 80% of operational best practices are universal. We provide the <strong>globally benchmarked structure</strong>, and you can easily customize the last 20% to fit your specific organizational needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>How does the free customization work?</AccordionTrigger>
                        <AccordionContent>
                          After payment, your file downloads instantly. Our team will then send you a welcome email within one business day to collect your requirements and begin the free customization process.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-5">
                        <AccordionTrigger>What ROI can we expect from implementing this?</AccordionTrigger>
                        <AccordionContent>
                            Clients report <strong>fewer operational mistakes, faster onboarding, improved audit scores, and reduced compliance risk</strong>. Ultimately, preventing a single major safety or compliance failure can save more than the cost of our entire library.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-10">
                        <AccordionTrigger>Will I be charged tax?</AccordionTrigger>
                        <AccordionContent>
                          Taxes, if applicable, are applied automatically at checkout by our payment processor as per local regulations. Prices shown may be inclusive or exclusive of tax depending on your region.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Will our team actually use this?</AccordionTrigger>
                        <AccordionContent>
                           Yes. Our SOPs are written in simple, actionable language. They include <strong>Trainer’s Notes</strong> and real-world examples that make daily adoption effortless and turn managers into expert coaches.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>How does this reduce dependency on key managers?</AccordionTrigger>
                        <AccordionContent>
                            MoreMeets captures expert knowledge into a structured system. This means new and existing staff can perform critical tasks with the <strong>same accuracy and consistency as your top performers</strong>, reducing your reliance on any single individual.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-8">
                        <AccordionTrigger>Can my internal team build this instead?</AccordionTrigger>
                        <AccordionContent>
                           They can, but building a complete, compliant SOP library takes <strong>3–6 months of cross-functional effort.</strong> MoreMeets gives you a better outcome instantly, at a fraction of the cost.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
);
