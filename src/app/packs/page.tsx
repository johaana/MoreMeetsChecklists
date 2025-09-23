
import Link from "next/link";
import { premiumPacks } from "@/lib/premium-packs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Logo } from "@/components/icons";

export default function AllPacksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
       <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" prefetch={false}>
                Home
            </Link>
        </nav>
      </header>
      <main>
        <section id="packs" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        All Checklist Packages
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed mx-auto">
                        Get instant access to expert-crafted operational SOPs. One-time purchase, lifetime updates. Downloadable in Excel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {premiumPacks.map((pack) => (
                        <Card key={pack.id} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                            <CardHeader className="p-6 relative">
                                {pack.badgeText && (
                                    <Badge variant={pack.badgeVariant} className="py-1 px-3 font-bold z-10 flex items-center gap-1.5 mb-4 w-fit">
                                    <Star className="w-4 h-4" /> {pack.badgeText}
                                    </Badge>
                                )}
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full border border-primary/20 shrink-0">
                                        {pack.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-xl font-headline">{pack.title}</CardTitle>
                                        <CardDescription className="mt-1">{pack.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 flex-1">
                                <p className="font-semibold text-sm mb-3 text-primary">WHAT'S INSIDE:</p>
                                <ul className="space-y-2 text-muted-foreground text-sm">
                                    {pack.sampleItems.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <Check className="h-4 w-4 mr-2 mt-1 shrink-0 text-primary/80"/>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                             <CardFooter className="p-6 pt-2 mt-auto">
                                <Button asChild className="w-full font-bold bg-accent/20 text-accent hover:bg-accent/30" variant="secondary">
                                    <Link href={`/packs/${pack.id}`}>
                                        View Full Checklist & Purchase
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
