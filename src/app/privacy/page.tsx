
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

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Last Updated: July 27, 2024
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <p className="text-muted-foreground">
                        MoreMeets ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.moremeets.com (the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                    </p>

                    <LegalSection title="Collection of Your Information">
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <p><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you purchase our products or when you choose to participate in various activities related to the Site. You are under no obligation to provide us with personal information of any kind; however, your refusal to do so may prevent you from using certain features of the Site.</p>
                        <p><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, or exchange from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, and you are encouraged to review their privacy policy and contact them directly for responses to your questions.</p>
                    </LegalSection>

                    <LegalSection title="Use of Your Information">
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                         <ul className="list-disc pl-6 space-y-2">
                            <li>Process payments and refunds.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Improve our products and services.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                        </ul>
                    </LegalSection>

                    <LegalSection title="Disclosure of Your Information">
                        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you (such as payment processors), so long as those parties agree to keep this information confidential.</p>
                    </LegalSection>
                    
                    <LegalSection title="Security of Your Information">
                       <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                    </LegalSection>

                    <LegalSection title="Policy for Children">
                        <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>
                    </LegalSection>

                    <LegalSection title="Changes to This Privacy Policy">
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                    </LegalSection>
                    
                     <LegalSection title="Disclaimer">
                        <p>This Privacy Policy was generated by an AI language model. While it is based on common privacy principles, it is not a substitute for professional legal advice. You should consult with a qualified legal professional to ensure that this policy meets the specific needs and legal requirements of your business and jurisdiction.</p>
                    </LegalSection>

                    <LegalSection title="Contact Us">
                        <p>
                            If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:legal@moremeets.com" className="text-primary underline">legal@moremeets.com</a>
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
                    <Link href="/packs" className="text-muted-foreground hover:text-foreground">Packages</Link>
                    <Link href="/#why-us" className="text-muted-foreground hover:text-foreground">Why Us</Link>
                    <Link href="/#faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
                </div>
                <div className="flex flex-col gap-2 items-center md:items-end text-sm">
                     <p className="font-semibold">Legal</p>
                    <Link href="/terms" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="/sitemap.xml" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                        Sitemap
                    </Link>
                     <p className="text-xs text-muted-foreground mt-4">&copy; 2024 MoreMeets. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  );
}
