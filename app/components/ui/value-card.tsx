
'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const ValueCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col text-center md:text-left h-full">
        <CardHeader className="flex flex-col md:flex-row items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);
