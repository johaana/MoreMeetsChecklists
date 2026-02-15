
import { cn } from "@/lib/utils";

export const SectionHeadline = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={cn("text-3xl font-bold tracking-tight font-headline sm:text-4xl md:text-[40px] !leading-tight text-primary-text", className)}>
        {children}
    </h2>
);
