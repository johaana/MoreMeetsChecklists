
'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconComponent } from "@/components/icons";

export const ValueCard = ({ icon, title, children }: { icon: string, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left h-full">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
            <IconComponent name={icon} className="w-8 h-8 text-accent"/>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);
