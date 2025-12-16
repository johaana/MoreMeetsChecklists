
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from 'react';
import * as LucideIcons from 'lucide-react';

const Icon = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = (LucideIcons as any)[name];
    if (!LucideIcon) {
        return <LucideIcons.Package className={className} />;
    }
    return <LucideIcon className={className} />;
};


export const PainPoint = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                {icon}
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </CardContent>
    </Card>
);
