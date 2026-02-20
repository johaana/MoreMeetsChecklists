"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconComponent } from "@/components/icons";

type PainPointProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export const PainPoint = ({ icon, title, description }: PainPointProps) => {
    return (
        <Card className="flex flex-col h-full bg-background border-border shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    {typeof icon === 'string' ? (
                        <IconComponent name={icon} className="h-6 w-6 text-accent"/>
                    ) : (
                        <span className="h-6 w-6 text-accent flex items-center justify-center">
                            {icon}
                        </span>
                    )}
                </div>
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    );
};
