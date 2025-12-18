
'use client';

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type PainPointProps = {
    icon: LucideIcon;
    title: string;
    description: string;
};

export const PainPoint = ({ icon: Icon, title, description }: PainPointProps) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Icon className="h-6 w-6 text-accent"/>
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </CardContent>
    </Card>
);
