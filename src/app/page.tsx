import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Zap, Users, Leaf, Hotel, PartyPopper, Star, ShieldCheck } from "lucide-react";
import { Logo } from "@/components/icons";
import Image from 'next/image';
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
  const featureImage1 = PlaceHolderImages.find(p => p.id === 'feature1');
  const featureImage2 = PlaceHolderImages.find(p => p.id === 'feature2');
  const testimonialAvatar1 = PlaceHolderImages.find(p => p.id === 'testimonial1');
  const testimonialAvatar2 = PlaceHolderImages.find(p => p.id === 'testimonial2');
  const testimonialAvatar3 = PlaceHolderImages.find(p => p.id === 'testimonial3');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
          <Logo className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">MoreMeets</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            prefetch={false}
          >
            Testimonials
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Login
          </Link>
          <Button asChild>
            <Link href="/signup" prefetch={false}>
              Sign Up Free
            </Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 relative">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 pb-2">
                Stop Forgetting. Start Finishing.
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                The smart AI-driven checklist platform for events, hospitality, training, and sustainability. Never miss a detail again.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg">
                  <Link href="/signup" prefetch={false}>
                    Get Started for Free
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                   <Link href="/dashboard/premium-packs" prefetch={false}>
                    View Premium Packs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
           {heroImage && <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            className="object-cover -z-10 opacity-5"
            data-ai-hint={heroImage.imageHint}
          />}
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Everything you need to be successful</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered suggestions to seamless collaboration, we've got you covered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20 mt-16">
              <div className="space-y-6">
                  <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-full border-2 border-accent/20 text-accent">
                          <Zap className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">AI Task Suggester</h3>
                          <p className="text-muted-foreground mt-1">Our intelligent assistant analyzes your checklist and suggests crucial tasks you might have missed, ensuring complete coverage.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-full border-2 border-accent/20 text-accent">
                          <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Photo Proof of Completion</h3>
                          <p className="text-muted-foreground mt-1">For tasks that require visual confirmation, mandate a photo upload. Perfect for quality control and accountability.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-full border-2 border-accent/20 text-accent">
                          <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                          <h3 className="text-xl font-bold">Premium Templates</h3>
                          <p className="text-muted-foreground mt-1">Access professionally-crafted checklists for dozens of complex scenarios, saving you hours of research and planning.</p>
                      </div>
                  </div>
              </div>
              {featureImage1 && <Image
                src={featureImage1.imageUrl}
                width="600"
                height="400"
                alt={featureImage1.description}
                data-ai-hint={featureImage1.imageHint}
                className="rounded-xl shadow-lg mx-auto"
              />}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
               {featureImage2 && <Image
                src={featureImage2.imageUrl}
                width="600"
                height="400"
                alt={featureImage2.description}
                data-ai-hint={featureImage2.imageHint}
                className="rounded-xl shadow-lg mx-auto"
              />}
              <div className="space-y-4">
                 <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">For Every Industry</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Built for Versatility</h2>
                <p className="text-muted-foreground md:text-lg">
                  MoreMeets is designed for a wide range of industries where precision and thoroughness are paramount.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <PartyPopper className="w-6 h-6 text-primary" />
                    <span className="font-semibold">Events</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Hotel className="w-6 h-6 text-primary" />
                    <span className="font-semibold">Hospitality</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="font-semibold">Training</span>
                  </div>
                   <div className="flex items-center gap-3">
                    <Leaf className="w-6 h-6 text-primary" />
                    <span className="font-semibold">Sustainability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30 dark:bg-muted/10">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Loved by Professionals Worldwide</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See how MoreMeets is transforming how teams get work done.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        {testimonialAvatar1 && <Avatar>
                            <AvatarImage src={testimonialAvatar1.imageUrl} data-ai-hint={testimonialAvatar1.imageHint}/>
                            <AvatarFallback>SP</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Sarah P.</p>
                            <p className="text-sm text-muted-foreground">Lead Event Coordinator</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"MoreMeets has been a game-changer for our event planning. The AI suggestions are surprisingly smart and have saved us from missing critical steps."</p>
                  </div>
                </CardContent>
              </Card>
               <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                         {testimonialAvatar2 && <Avatar>
                            <AvatarImage src={testimonialAvatar2.imageUrl} data-ai-hint={testimonialAvatar2.imageHint}/>
                            <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Michael J.</p>
                            <p className="text-sm text-muted-foreground">Hotel Operations Manager</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"The photo-proof feature is brilliant for our housekeeping audits. It has dramatically improved accountability and our quality standards."</p>
                  </div>
                </CardContent>
              </Card>
               <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        {testimonialAvatar3 && <Avatar>
                            <AvatarImage src={testimonialAvatar3.imageUrl} data-ai-hint={testimonialAvatar3.imageHint}/>
                            <AvatarFallback>AD</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">Anika D.</p>
                            <p className="text-sm text-muted-foreground">Startup Founder</p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-left">"As a startup, we have to move fast. The pre-built templates for launch events saved us so much time and made sure we looked professional from day one."</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Ready to Organize Your Success?</h2>
                    <p className="text-muted-foreground md:text-xl">
                        Sign up today and experience a new level of clarity and control in your projects.
                    </p>
                    <div className="space-x-4">
                        <Button asChild size="lg">
                        <Link href="/signup" prefetch={false}>
                            Get Started for Free
                        </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 MoreMeets. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
