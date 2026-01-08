
import React from 'react';

interface ValuePropositionProps {
    ourPrice: string;
    competitorPrice: string;
    valueStatement: string;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ ourPrice, competitorPrice, valueStatement }) => (
    <div className="rounded-lg bg-secondary/30 p-4 text-center border-2 border-dashed border-primary/20">
        <h4 className="text-sm font-semibold mb-2 uppercase text-secondary-text/80">The MoreMeets Advantage</h4>
        <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col items-center p-2 rounded-md bg-background/50">
                <p className="text-xs text-muted-foreground">Typical Enterprise Solution</p>
                <p className="text-lg font-bold text-destructive line-through">{competitorPrice}</p>
                 <p className="text-xs text-muted-foreground text-center">Long setup · Contracts · Consultants</p>
            </div>
            <div className="flex flex-col items-center p-2 rounded-md bg-green-100 dark:bg-green-900/50">
                 <p className="text-xs text-green-800 dark:text-green-200 font-semibold">MoreMeets</p>
                <p className="text-lg font-bold text-green-700 dark:text-green-300">{ourPrice}</p>
                <p className="text-xs text-muted-foreground text-center">Ready today · Practical · Proven</p>
            </div>
        </div>
         <p className="text-xs text-muted-foreground mt-2">{valueStatement}</p>
    </div>
);
    
