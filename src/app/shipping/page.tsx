
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from 'next';
import { SiteHeader } from "@/components/layout/header";

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | MoreMeets',
  description: 'Learn about the instant digital delivery of your purchased checklist packs from MoreMeets.',
};

const LegalSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline text-primary">{title}</h2>
        <div className="space-y-4 text-muted-foreground">
            {children}
        </div>
    </div>
);

export default function ShippingPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <SiteHeader />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        Shipping & Delivery Policy
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Last Updated: July 28, 2024
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <LegalSection title="Product Format">
                        <p>
                           All products available on MoreMeets are digital files (Microsoft Excel .xlsx format). There are no physical products, and nothing will be shipped to your physical address.
                        </p>
                    </LegalSection>

                    <LegalSection title="Instant Delivery">
                        <p>
                           Delivery of our digital products is instant and automatic.
                        </p>
                        <p>
                           Upon successful completion of your payment, you will be immediately redirected to a confirmation page that includes a secure link to download your purchased checklist pack(s).
                        </p>
                        <p>
                           Additionally, a confirmation email with the same download link will be sent to the email address you provided during checkout. Please ensure your email address is correct to avoid any delays.
                        </p>
                    </LegalSection>

                     <LegalSection title="Accessing Your Files">
                        <p>
                           Your download link will remain active so you can access your files in the future. We recommend downloading and saving your files to your computer or cloud storage service as soon as you receive them.
                        </p>
                    </LegalSection>
                    
                     <LegalSection title="Troubleshooting">
                        <p>
                           <strong>Did not receive an email?</strong> Please check your spam or junk folder. If you still cannot find the email, contact our support team, and we will resend it to you.
                        </p>
                        <p>
                           <strong>Download link not working?</strong> If you encounter any issues with the download link, please try a different web browser or device. If the problem persists, contact us immediately for assistance.
                        </p>
                    </LegalSection>

                     <LegalSection title="Legal Disclaimer">
                        <p><strong>This document is for informational purposes and does not constitute legal advice.</strong> We recommend consulting with a legal professional to ensure your policies align with all applicable laws and regulations for digital commerce.</p>
                    </LegalSection>

                     <LegalSection title="Contact Us">
                        <p>
                           For any issues related to the delivery or download of your files, please contact our support team.
                        </p>
                        <p>
                            You can reach us via our <Link href="/contact" className="text-primary underline">Contact Us</Link> page or by emailing us directly at <a href="mailto:more@moremeets.com" className="text-primary underline">more@moremeets.com</a>.
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
