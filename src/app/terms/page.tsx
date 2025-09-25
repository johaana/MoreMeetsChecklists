
import Link from "next/link";
import { Logo } from "@/components/icons";

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline text-primary">{title}</h2>
        <div className="space-y-4 text-muted-foreground">
            {children}
        </div>
    </div>
);

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/packs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                All Packages
            </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        Terms of Service
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Last Updated: July 28, 2024
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <LegalSection title="1. Agreement to Terms">
                        <p>
                            By accessing or using our website, www.moremeets.com (the "Site"), and purchasing our digital products ("Products"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you do not have permission to access the Service.
                        </p>
                    </LegalSection>

                    <LegalSection title="2. Intellectual Property Rights">
                        <p>
                            The Site and its original content, features, functionality, and all digital products (including but not limited to checklists, templates, and SOPs in Excel format) are and will remain the exclusive property of MoreMeets and its licensors. Our Products are protected by copyright, trademark, and other laws of both the India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MoreMeets. You are granted a limited, non-exclusive, non-transferable license to use the purchased Products for your internal business or personal use. You may not resell, redistribute, or share the Products in any form.
                        </p>
                    </LegalSection>

                    <LegalSection title="3. Purchases and Payment">
                        <p>
                            We accept payments through our designated payment processors (e.g., Razorpay, Stripe). You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. All payments shall be in the currency specified at the time of purchase. You agree to pay all charges at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order.
                        </p>
                    </LegalSection>
                    
                    <LegalSection title="4. Cancellation and Refund Policy">
                        <p>
                            Due to the digital nature of our Products, all sales are final. We do not offer refunds, returns, or exchanges once a purchase is made and the product has been delivered (i.e., the download link has been made available). Please review the product descriptions carefully before making a purchase. For more details, please see our full <Link href="/refund" className="text-primary underline">Cancellation and Refund Policy</Link>.
                        </p>
                    </LegalSection>

                    <LegalSection title="5. Shipping and Delivery Policy">
                        <p>
                            Our Products are digital and delivered instantly. Upon successful completion of your payment, you will receive access to download the files immediately on the confirmation page and/or via an email sent to the address provided during checkout. There are no physical goods shipped. For more details, please see our <Link href="/shipping" className="text-primary underline">Shipping and Delivery Policy</Link>.
                        </p>
                    </LegalSection>

                    <LegalSection title="6. Prohibited Activities">
                       <p>You may not access or use the Site for any purpose other than that for which we make the Site available. As a user of the Site, you agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Resell, sublicense, or redistribute our Products in any form, digital or physical.</li>
                            <li>Use the Site or Products for any illegal or unauthorized purpose.</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the Site.</li>
                            <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="7. Disclaimer of Warranties">
                        <p>The Site and our Products are provided on an "AS IS" and "AS AVAILABLE" basis. MoreMeets makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. The checklists are provided for guidance and are not a substitute for professional, legal, or safety advice.</p>
                    </LegalSection>

                    <LegalSection title="8. Limitation of Liability">
                        <p>In no event shall MoreMeets, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.</p>
                    </LegalSection>
                    
                    <LegalSection title="9. Legal Disclaimer">
                        <p><strong>This document was generated by an AI language model. It is intended for informational purposes only and does not constitute legal advice.</strong> The content is not guaranteed to be complete, accurate, or up-to-date. You should not act or refrain from acting based on this information without seeking professional legal counsel in your jurisdiction. Your use of this document does not create an attorney-client relationship. MoreMeets and its AI provider assume no liability for the use or interpretation of this information.</p>
                    </LegalSection>

                    <LegalSection title="10. Governing Law">
                        <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any legal action of whatever nature brought by either you or us shall be commenced or prosecuted in the state and federal courts located in Mumbai, India.</p>
                    </LegalSection>

                    <LegalSection title="11. Contact Us">
                        <p>
                            To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <a href="mailto:legal@moremeets.com" className="text-primary underline">legal@moremeets.com</a> or visit our <Link href="/contact" className="text-primary underline">Contact Us</Link> page.
                        </p>
                    </LegalSection>
                </div>
            </div>
        </section>
      </main>

       <footer className="w-full border-t bg-secondary/50 mt-12">
            <div className="container grid items-center justify-center gap-8 px-4 py-8 text-center md:py-12 md:grid-cols-3 md:text-left">
                <div className="flex flex-col items-center md:items-start gap-2">
                     <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
                        <Logo className="h-6 w-6 text-primary" />
                        <span className="font-headline text-lg font-bold">MoreMeets</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs">
                        The Professional Standard for Compliance & Operations Checklists.
                    </p>
                </div>
                 <div className="flex flex-col gap-2 items-center text-sm">
                    <p className="font-semibold">Quick Links</p>
                    <Link href="/packs" className="text-muted-foreground hover:text-foreground" prefetch={false}>Packages</Link>
                    <Link href="/#why-us" className="text-muted-foreground hover:text-foreground" prefetch={false}>Why Us</Link>
                    <Link href="/contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>Contact Us</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                     <p className="font-semibold">Legal</p>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/refund" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Refund Policy
                    </Link>
                     <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  );
}

    