import Link from "next/link";
import { Logo } from "@/components/icons";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900/20 p-4">
       <div className="absolute top-4 left-4">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
       </div>
      {children}
    </div>
  );
}
