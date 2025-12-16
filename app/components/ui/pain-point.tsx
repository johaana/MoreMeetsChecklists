
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface IconComponentProps {
  icon: LucideIcon;
  className?: string;
}

export function IconComponent({ icon: Icon, className }: IconComponentProps) {
  if (!Icon) return null;
  return <Icon className={className ?? "h-6 w-6"} />;
}

export const PainPoint = ({ icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
    <Card>
        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <IconComponent icon={icon} className="w-6 h-6 text-accent" />
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </CardContent>
    </Card>
);
