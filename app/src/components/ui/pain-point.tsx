
import React from 'react';

type PainPointProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export const PainPoint = ({ icon, title, description }: PainPointProps) => (
  <div className="flex items-start gap-6 rounded-lg border bg-background p-6 transition-shadow hover:shadow-md h-full">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shrink-0 mt-1">
      {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8 text-primary" })}
    </div>
    <div>
      <h3 className="text-lg font-bold text-primary">{title}</h3>
      <p className="text-muted-foreground mt-1 text-sm md:text-base">{description}</p>
    </div>
  </div>
);
