
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { blogPosts } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Loader2, CheckCircle, Filter, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from '@/components/ui/scroll-area';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { subscribeToBlog } from '@/app/packs/actions';


const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
const primaryTags = ["Cybersecurity", "Risk Management", "Safety", "Supply Chain"];
const secondaryTags = allTags.filter(tag => !primaryTags.includes(tag));

function SubscriptionForm() {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await subscribeToBlog({ email });

    if (result.success) {
      setSubmitted(true);
       toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to the debrief.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: result.message,
      });
    }
    setLoading(false);
  };

  if (submitted) {
    return (
        <div className="flex items-center justify-center p-4 rounded-lg bg-green-100 border border-green-200 text-green-800 dark:bg-green-900/50 dark:text-green-200 dark:border-green-800">
            <CheckCircle className="w-5 h-5 mr-3" />
            <p className="font-semibold">Thank you for subscribing!</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={loading} className="w-full sm:w-auto">
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Subscribe
      </Button>
    </form>
  );
}

const FilterControls = ({ activeFilter, setActiveFilter }: { activeFilter: string | null, setActiveFilter: (filter: string | null) => void }) => {
    const [isSheetOpen, setSheetOpen] = React.useState(false);

    const handleFilterClick = (tag: string | null) => {
        setActiveFilter(tag);
        setSheetOpen(false);
    }
    
    return (
        <>
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-wrap items-center justify-center gap-2 mb-12">
                 <Button
                    variant={activeFilter === null ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(null)}
                    className="rounded-full"
                >
                    All Posts
                </Button>
                {primaryTags.map(tag => (
                    <Button
                        key={tag}
                        variant={activeFilter === tag ? 'default' : 'outline'}
                        onClick={() => setActiveFilter(tag)}
                        className="rounded-full"
                    >
                        {tag}
                    </Button>
                ))}
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-full">
                           {activeFilter && secondaryTags.includes(activeFilter) ? activeFilter : "More Categories"}
                           <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-h-[50vh] overflow-y-auto">
                        {secondaryTags.map(tag => (
                             <DropdownMenuItem key={tag} onSelect={() => setActiveFilter(tag)}>
                                {tag}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                 {activeFilter && (
                    <Button variant="ghost" size="sm" onClick={() => setActiveFilter(null)} className="rounded-full">
                        <X className="w-4 h-4 mr-2" />
                        Clear filter
                    </Button>
                )}
            </div>

            {/* Mobile Filters */}
            <div className="md:hidden fixed bottom-4 right-4 z-40 flex items-center gap-2">
                 {activeFilter && (
                    <Button 
                        size="sm" 
                        variant="secondary" 
                        onClick={() => setActiveFilter(null)} 
                        className="rounded-full shadow-lg h-12"
                    >
                        <X className="w-4 h-4 mr-1" />
                        Clear
                    </Button>
                )}
                 <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" className="rounded-full w-14 h-14 shadow-lg">
                            <Filter className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="rounded-t-2xl">
                        <SheetHeader className="mb-4">
                            <SheetTitle>Filter by Category</SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="h-[50vh]">
                            <div className="flex flex-col gap-2 pr-4">
                                 <Button
                                    variant={activeFilter === null ? 'default' : 'ghost'}
                                    onClick={() => handleFilterClick(null)}
                                    className="justify-start text-lg"
                                >
                                    All
                                </Button>
                                {allTags.map(tag => (
                                     <Button
                                        key={tag}
                                        variant={activeFilter === tag ? 'default' : 'ghost'}
                                        onClick={() => handleFilterClick(tag)}
                                        className="justify-start text-lg"
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </div>
                        </ScrollArea>
                    </SheetContent>
                </Sheet>
            </div>
        </>
    );
}

export default function BlogClientPage() {
  const searchParams = useSearchParams();
  const tagFilterFromUrl = searchParams.get('tag');
  
  const allPostsSorted = React.useMemo(() => 
    [...blogPosts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()), 
    []
  );

  const [activeFilter, setActiveFilter] = React.useState<string | null>(tagFilterFromUrl);

  React.useEffect(() => {
    setActiveFilter(searchParams.get('tag'));
  }, [searchParams]);


  const handleSetFilter = (tag: string | null) => {
    const params = new URLSearchParams(window.location.search);
    if (tag) {
      params.set('tag', tag);
    } else {
      params.delete('tag');
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
    setActiveFilter(tag);
  };
  
  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    e.preventDefault();
    handleSetFilter(tag);
  };

  const displayedPosts = React.useMemo(() => {
    if (activeFilter) {
      return allPostsSorted.filter(p => p.tags.includes(activeFilter));
    }
    return allPostsSorted;
  }, [activeFilter, allPostsSorted]);

  const currentFeaturedPost = !activeFilter ? displayedPosts[0] : null;
  const postsForGrid = activeFilter ? displayedPosts : displayedPosts.slice(1);
  

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-20 pb-12 md:pb-24 lg:pb-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                        Black Box Debrief
                    </h1>
                    <p className="max-w-[800px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        Deconstructing the world's most costly operational disasters to build more resilient organizations. An insights hub by MoreMeets.
                    </p>
                </div>

                {/* Featured Post */}
                {currentFeaturedPost && (
                    <div className="mb-16">
                        <Link href={`/blog/${currentFeaturedPost.slug}`} className="block group">
                             <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                                {/* Mobile Layout: Image on top */}
                                <div className="md:hidden">
                                    <div className="relative w-full h-auto aspect-[16/9]">
                                     {currentFeaturedPost.imageUrl && (
                                        <Image
                                            src={currentFeaturedPost.imageUrl}
                                            alt={currentFeaturedPost.title}
                                            fill
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                    </div>
                                    <div className="p-6 bg-card">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {currentFeaturedPost.tags.map(tag => ( 
                                                <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors cursor-pointer" onClick={(e) => handleTagClick(e, tag)}>
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <CardTitle className="text-2xl font-headline">{currentFeaturedPost.title}</CardTitle>
                                        <CardDescription className="mt-2 text-base">{currentFeaturedPost.description}</CardDescription>
                                        <Button variant="outline" className="mt-4">
                                            Read The Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                
                                {/* Desktop Layout: Image overlay */}
                                <div className="hidden md:block relative min-h-[400px]">
                                    <div className="grid md:grid-cols-2 items-center h-full">
                                        <div className="absolute inset-0 z-0">
                                             {currentFeaturedPost.imageUrl && (
                                                <>
                                                    <Image
                                                        src={currentFeaturedPost.imageUrl}
                                                        alt={currentFeaturedPost.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-transparent" />
                                                </>
                                            )}
                                        </div>
                                        <div className="relative z-10 p-10 space-y-4 text-white">
                                            <div className="flex flex-wrap gap-2">
                                                {currentFeaturedPost.tags.map(tag => (
                                                    <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none hover:bg-white/30 transition-colors cursor-pointer" onClick={(e) => handleTagClick(e, tag)}>
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <CardTitle className="text-4xl font-headline text-white drop-shadow-lg">
                                                {currentFeaturedPost.title}
                                            </CardTitle>
                                            <CardDescription className="text-lg text-white/90">
                                                {currentFeaturedPost.description}
                                            </CardDescription>
                                            <div className="flex justify-between items-center text-xs text-white/80">
                                                <span>{new Date(currentFeaturedPost.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                <span className="font-semibold">{Math.ceil(currentFeaturedPost.content.split(' ').length / 200)} min read</span>
                                            </div>
                                            <Button variant="outline" className="bg-transparent text-white border-white mt-4 group-hover:bg-white group-hover:text-primary transition-colors">
                                                Read The Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                        <div className="hidden md:block">{/* Placeholder for grid */}</div>
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                )}
                
                <FilterControls activeFilter={activeFilter} setActiveFilter={handleSetFilter} />


                {/* Other Posts */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {postsForGrid.map((post) => (
                        <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                           <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                            <div className="relative w-full h-auto aspect-[16/9]">
                            {post.imageUrl ? (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                            ): (
                               <div className="w-full h-full bg-secondary flex items-center justify-center">
                                 <p className="text-muted-foreground text-sm">No Image</p>
                               </div>
                            )}
                            </div>
                            </Link>
                            <CardHeader>
                                <div className="flex flex-wrap gap-2 mb-2">
                                     {post.tags.map(tag => (
                                         <Badge key={tag} variant="secondary" className="hover:bg-primary/10 transition-colors cursor-pointer" onClick={(e) => handleTagClick(e, tag)}>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-xl font-headline">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription>{post.description}</CardDescription>
                            </CardContent>
                             <CardFooter className="flex flex-col items-start gap-4 p-4 md:p-6 mt-auto">
                                <div className="w-full flex justify-between items-center text-xs text-muted-foreground">
                                    <p>{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                    <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                                </div>
                                <Button asChild variant="secondary" size="sm" className="w-full mt-2">
                                  <Link href={`/blog/${post.slug}`}>Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                 <div className="max-w-xl mx-auto mt-24 flex flex-col items-center gap-4 p-6 border rounded-2xl bg-secondary/50">
                    <h3 className="font-bold text-center">Get the analysis behind the headlines.</h3>
                    <SubscriptionForm />
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
