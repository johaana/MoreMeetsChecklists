
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';
import { SiteHeader } from "@/components/layout/header";

export const metadata: Metadata = {
  title: 'Terms of Service | MoreMeets™',
  description: 'Please read the MoreMeets™ Terms of Service. By using our site and purchasing our products, you agree to these terms.',
};


const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline text-primary uppercase italic tracking-tight">{title}</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
            {children}
        </div>
    </div>
);

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline italic uppercase">
                        Terms of Service
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto italic">
                        Last Updated: July 28, 2024
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-12">
                    <LegalSection title="1. Agreement to Terms">
                        <p>
                            By accessing or using our website, www.moremeets.com (the "Site"), and purchasing our digital products ("Products"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you do not have permission to access the Service.
                        </p>
                    </LegalSection>

                    <LegalSection title="2. Operational Disclaimer">
                        <p>
                            The Products provided on this Site (Standard Operating Procedures, Checklists, and Templates) are intended as management tools to assist in organizational consistency and are not a substitute for professional, legal, safety, or medical advice. 
                        </p>
                        <p>
                            Use of these Products does not guarantee compliance with any specific local laws or regulations, nor does it replace the requirement for qualified professionals (e.g., Fire Safety Officers, Legal Counsel, Certified Auditors) to inspect and certify your operations. 
                        </p>
                        <p className="font-bold text-foreground">
                            Chain of Custody Notice: MoreMeets™ assumes no liability for operational failures, accidents, data errors, or regulatory penalties incurred while using these tools, especially if the original technical logic, formulas, or task descriptions have been modified by the user post-download.
                        </p>
                    </LegalSection>

                    <LegalSection title="3. Intellectual Property & Licensing">
                        <p>
                            The Site and its original content, features, functionality, and all digital products (including but not limited to checklists, templates, and SOPs in Excel format) are and will remain the exclusive property of MoreMeets™ and its licensors. 
                        </p>
                        <p>
                            <strong>Standard License:</strong> Each purchase grants a limited, non-exclusive, non-transferable license for use within a single Brand or Business Group. You may not resell, redistribute, or share the Products with third parties, including but not limited to external clients or non-affiliated business entities.
                        </p>
                    </LegalSection>

                    <LegalSection title="4. Purchases and Payment">
                        <p>
                            We accept payments through our designated payment processors (e.g., Razorpay, Stripe). You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. All payments shall be in the currency specified at the time of purchase. 
                        </p>
                    </LegalSection>
                    
                    <LegalSection title="5. Cancellation and Refund Policy">
                        <p>
                            Due to the digital nature of our Products, all sales are final. We do not offer refunds, returns, or exchanges once a purchase is made and the product has been delivered (i.e., the download link has been made available). For more details, please see our full <Link href="/refund" className="text-primary underline">Cancellation and Refund Policy</Link>.
                        </p>
                    </LegalSection>

                    <LegalSection title="6. Shipping and Delivery Policy">
                        <p>
                            Our Products are digital and delivered instantly. Upon successful completion of your payment, you will receive access to download the files immediately on the confirmation page and/or via an email sent to the address provided during checkout. For more details, please see our <Link href="/shipping" className="text-primary underline">Shipping and Delivery Policy</Link>.
                        </p>
                    </LegalSection>

                    <LegalSection title="7. Prohibited Activities">
                       <p>You may not access or use the Site for any purpose other than that for which we make the Site available. As a user of the Site, you agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Resell, sublicense, or redistribute our Products in any form, digital or physical.</li>
                            <li>Use the Site or Products for any illegal or unauthorized purpose.</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the Site.</li>
                            <li>Engage in any automated use of the system, such as using scripts or data mining tools.</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="8. Disclaimer of Warranties">
                        <p>The Site and our Products are provided on an "AS IS" and "AS AVAILABLE" basis. MoreMeets™ makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties of merchantability or fitness for a particular purpose. The checklists are provided for guidance and are not a substitute for professional, legal, or safety advice.</p>
                    </LegalSection>

                    <LegalSection title="9. Limitation of Liability">
                        <p>In no event shall MoreMeets™, nor its directors, employees, or partners, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, or other intangible losses, resulting from your use of or inability to use the Service or Products.</p>
                    </LegalSection>
                    
                    <LegalSection title="10. Legal Disclaimer">
                        <p><strong>This document was generated by an AI language model. It is intended for informational purposes only and does not constitute legal advice.</strong> The content is not guaranteed to be complete, accurate, or up-to-date. You should not act or refrain from acting based on this information without seeking professional legal counsel in your jurisdiction.</p>
                    </LegalSection>

                    <LegalSection title="11. Governing Law">
                        <p>These Terms shall be governed and construed in accordance with the laws of India. Any legal action of whatever nature brought by either you or us shall be commenced or prosecuted in the state and federal courts located in Mumbai, India.</p>
                    </LegalSection>

                    <LegalSection title="12. Contact Us">
                        <p>
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:legal@moremeets.com" className="text-primary underline">legal@moremeets.com</a> or visit our <Link href="/contact" className="text-primary underline">Contact Us</Link> page.
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
