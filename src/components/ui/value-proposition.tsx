
import { Check, X } from "lucide-react"

type ValuePropositionProps = {
    ourPrice: string;
    competitorPrice: string;
    valueStatement: string;
};

export const ValueProposition = ({ ourPrice, competitorPrice, valueStatement }: ValuePropositionProps) => {
    return (
        <div className="w-full text-center bg-background/50 p-4 rounded-lg border border-dashed border-primary/20">
            <h4 className="text-sm font-bold text-primary mb-2">The MoreMeets Advantage</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-2 rounded-md bg-green-100/50 dark:bg-green-900/30">
                    <p className="font-bold text-green-700 dark:text-green-300">Our Price</p>
                    <p className="font-extrabold text-lg text-foreground">{ourPrice}</p>
                </div>
                 <div className="p-2 rounded-md bg-red-100/50 dark:bg-red-900/30">
                    <p className="font-bold text-red-700 dark:text-red-300">Industry Average</p>
                    <p className="font-extrabold text-lg text-muted-foreground line-through">{competitorPrice}</p>
                </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 italic">{valueStatement}</p>
        </div>
    )
}
