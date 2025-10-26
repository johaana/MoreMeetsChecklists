
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';
import { SiteHeader } from "@/components/layout/header";

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | MoreMeets',
  description: 'Read the MoreMeets cancellation and refund policy for our instantly downloadable digital checklist products.',
};

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline text-primary">{title}</h2>
        <div className="space-y-4 text-muted-foreground">
            {children}
        </div>
    </div>
);

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        Cancellation & Refund Policy
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Last Updated: July 28, 2024
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <LegalSection title="Our Policy on Digital Products">
                        <p>
                           At MoreMeets, we specialize in providing high-quality, instantly downloadable digital products in the form of operational checklists and Standard Operating Procedures (SOPs).
                        </p>
                         <p className="font-bold text-foreground">
                           Due to the digital nature of our products and the fact that they are delivered instantly upon purchase, we have a strict no-refund policy.
                        </p>
                    </LegalSection>

                    <LegalSection title="No Refunds or Exchanges">
                        <p>
                           All sales are final. Once a purchase is completed and the digital file has been made available for download, we cannot offer a refund, exchange, or cancellation.
                        </p>
                        <p>
                            We encourage all customers to carefully review the product descriptions, sample items, and included checklist details on each product page before making a purchase. This will help ensure that the product you select meets your specific needs.
                        </p>
                    </LegalSection>

                     <LegalSection title="Why We Have This Policy">
                        <p>
                           Unlike physical goods, digital items cannot be "returned." Once the file is downloaded, it remains in the possession of the customer. This policy is in place to protect our intellectual property and is a standard practice for businesses that sell digital goods.
                        </p>
                    </LegalSection>
                    
                     <LegalSection title="Exceptional Circumstances">
                        <p>
                           The only exception to this policy is if you accidentally purchase the same product twice. In such a case, please contact our support team with both order numbers, and we will be happy to assist with a refund for the duplicate purchase.
                        </p>
                    </LegalSection>

                     <LegalSection title="Legal Disclaimer">
                        <p><strong>This document is based on standard templates and is intended for informational purposes only. It does not constitute legal advice.</strong> You should consult with a qualified legal professional to ensure this policy meets the specific legal requirements of your business and jurisdiction.</p>
                    </LegalSection>

                     <LegalSection title="Contact Us">
                        <p>
                            If you have any questions about our Cancellation and Refund Policy, or if you encounter any issues with downloading or accessing your purchased files, please do not hesitate to contact us.
                        </p>
                        <p>
                            You can reach us via our <Link href="/contact" className="text-primary underline">Contact Us</Link> page, by emailing us directly at <a href="mailto:more@moremeets.com" className="text-primary underline">more@moremeets.com</a>, or for immediate assistance with a download issue, contact us on <a href="https://wa.me/919860997711" target="_blank" rel="noopener noreferrer" className="text-primary underline">WhatsApp at +91 98609 97711</a>.
                        </p>
                    </LegalSection>
                </div>
            </div>
        </section>
      </main>

       <Footer />
    </div>
  );
}

    
