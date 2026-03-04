
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Loader2, CheckCircle, Filter, ChevronDown, X, FileText, ShieldAlert } from 'lucide-react';
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from '@/components/ui/scroll-area';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { subscribeToBlog } from './actions';

const primaryTags = [
    "Hotel & Resort Operations", 
    "Restaurant & F&B Operations"
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
const secondaryTags = allTags.filter(tag => !primaryTags.includes(tag));

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function formatDate(dateStr: string) {
  const [year, month, day] = dateStr.split('-');
  return `${months[parseInt(month) - 1]} ${parseInt(day)}, ${year}`;
}

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
        description: "You are now enrolled in the Black Box Debrief.",
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
        <div className="flex items-center justify-center p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary">
            <CheckCircle className="w-5 h-5 mr-3" />
            <p className="font-black uppercase text-xs tracking-widest">Protocol Accepted. Welcome to the hub.</p>
        </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
      <Input
        type="email"
        placeholder="Enter institutional email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 bg-black/40 border-white/10"
      />
      <Button type="submit" disabled={loading} className="w-full sm:w-auto font-black uppercase tracking-widest text-xs h-10">
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Mail className="mr-2 h-4 w-4" />
        )}
        Join Debrief
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
                    className="rounded-full font-black uppercase text-[10px] tracking-widest h-9 px-6"
                >
                    All Reports
                </Button>
                {primaryTags.map(tag => (
                    <Button
                        key={tag}
                        variant={activeFilter === tag ? 'default' : 'outline'}
                        onClick={() => setActiveFilter(tag)}
                        className="rounded-full font-black uppercase text-[10px] tracking-widest h-9 px-6"
                    >
                        {tag}
                    </Button>
                ))}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="rounded-full font-black uppercase text-[10px] tracking-widest h-9 px-6">
                           {activeFilter && secondaryTags.includes(activeFilter) ? activeFilter : "Operational Intelligence"}
                           <ChevronDown className="w-4 h-4 ml-2" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-h-[50vh] overflow-y-auto bg-alternate-background border-white/10">
                        {secondaryTags.map(tag => (
                             <DropdownMenuItem key={tag} onSelect={() => setActiveFilter(tag)} className="font-black uppercase text-[9px] tracking-widest p-3">
                                {tag}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                 {activeFilter && (
                    <Button variant="ghost" size="sm" onClick={() => setActiveFilter(null)} className="rounded-full text-primary font-black uppercase text-[9px] tracking-widest">
                        <X className="w-3 h-3 mr-2" />
                        Reset
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
                        className="rounded-full shadow-2xl h-12 px-6 font-black uppercase text-[10px] tracking-widest bg-black border border-white/10"
                    >
                        <X className="w-4 h-4 mr-1 text-primary" />
                        Reset
                    </Button>
                )}
                 <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                    <SheetTrigger asChild>
                        <Button size="icon" className="rounded-full w-14 h-14 shadow-2xl bg-primary text-black">
                            <Filter className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="rounded-t-[2rem] bg-alternate-background border-t border-white/10">
                        <SheetHeader className="mb-6">
                            <SheetTitle className="uppercase font-black tracking-widest text-xs">Technical Verticals</SheetTitle>
                        </SheetHeader>
                        <ScrollArea className="h-[50vh]">
                            <div className="flex flex-col gap-2 pr-4 pb-8">
                                 <Button
                                    variant={activeFilter === null ? 'default' : 'ghost'}
                                    onClick={() => handleFilterClick(null)}
                                    className="justify-start text-sm font-black uppercase tracking-widest"
                                >
                                    All Reports
                                </Button>
                                {allTags.map(tag => (
                                     <Button
                                        key={tag}
                                        variant={activeFilter === tag ? 'default' : 'ghost'}
                                        onClick={() => handleFilterClick(tag)}
                                        className="justify-start text-sm font-black uppercase tracking-widest"
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

const BlogCard = ({ post }: { post: BlogPost }) => (
    <Card className="flex flex-col rounded-[1.5rem] overflow-hidden shadow-lg hover:shadow-primary/5 transition-all duration-500 border border-white/5 bg-black group/card">
        <Link href={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-[16/10]">
            {post.imageUrl ? (
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[0.4] group-hover/card:grayscale-0 group-hover/card:scale-105 transition-all duration-700"
                />
            ) : (
                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                    <p className="text-muted-foreground text-[8px] uppercase font-black tracking-widest">No signal detected</p>
                </div>
            )}
            <div className="absolute top-4 left-4">
                <Badge className="bg-black/60 backdrop-blur-md text-white/70 border-white/10 text-[8px] font-black uppercase tracking-widest px-3 py-1">
                    Protocol: {post.protocol || "Standard"}
                </Badge>
            </div>
        </Link>
        <CardHeader className="space-y-3 p-8">
            <div className="space-y-1">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                    Sector: {post.tags[0]}
                </p>
                <CardTitle className="text-xl font-headline leading-tight italic uppercase tracking-tighter">
                    <Link href={`/blog/${post.slug}`} className="text-white hover:text-primary transition-colors">
                        {post.title}
                    </Link>
                </CardTitle>
            </div>
            <CardDescription className="text-secondary-text line-clamp-3 italic font-medium text-sm leading-relaxed">
                {post.description}
            </CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-col items-start gap-6 p-8 pt-0 mt-auto">
            <div className="w-full flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/20">
                <p>{formatDate(post.publishedDate)}</p>
                <span>{Math.ceil(post.content.split(' ').length / 200)} min read</span>
            </div>
            <Button asChild variant="secondary" size="sm" className="w-full h-12 font-black uppercase tracking-widest text-[10px] bg-white/5 text-white hover:bg-primary hover:text-black rounded-xl border border-white/5">
                <Link href={`/blog/${post.slug}`}>Review Analysis <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
            </Button>
        </CardFooter>
    </Card>
);

export default function BlogClientPage() {
  const searchParams = useSearchParams();
  
  const allPostsSorted = React.useMemo(() => 
    [...blogPosts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()), 
    []
  );

  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
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

  const displayedPosts = React.useMemo(() => {
    if (activeFilter) {
      return allPostsSorted.filter(p => p.tags.includes(activeFilter));
    }
    return allPostsSorted;
  }, [activeFilter, allPostsSorted]);

  const currentFeaturedPost = !activeFilter ? displayedPosts[0] : null;
  const postsForGrid = activeFilter ? displayedPosts : displayedPosts.slice(1);
  
  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-20 pb-12 md:pb-24 lg:pb-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <Badge variant="outline" className="text-primary border-primary/30 py-1 px-3 uppercase tracking-[0.3em] font-black text-[10px]">Forensic Intelligence Hub</Badge>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter font-headline text-primary italic uppercase">
                        Black Box Debrief
                    </h1>
                    <p className="max-w-[800px] text-secondary-text text-lg md:text-xl font-medium italic border-l-2 border-primary/20 pl-6 mx-auto">
                        Forensic deconstructions of operational failures to build high-gravity institutional infrastructure.
                    </p>
                </div>

                {/* Featured Post */}
                {currentFeaturedPost && (
                    <div className="mb-20">
                        <Link href={`/blog/${currentFeaturedPost.slug}`} className="block group">
                             <Card className="overflow-hidden rounded-[2rem] shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-white/5 bg-black">
                                <div className="md:hidden">
                                    <div className="relative w-full h-auto aspect-[16/9] overflow-hidden">
                                     {currentFeaturedPost.imageUrl && (
                                        <img
                                            src={currentFeaturedPost.imageUrl}
                                            alt={currentFeaturedPost.title}
                                            className="object-cover w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-black/60 backdrop-blur-md text-white/70 border-white/10 text-[8px] font-black uppercase tracking-widest px-3 py-1">
                                            Protocol: {currentFeaturedPost.protocol || "Standard"}
                                        </Badge>
                                    </div>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                                                Sector: {currentFeaturedPost.tags[0]}
                                            </p>
                                            <CardTitle className="text-2xl font-headline text-white italic uppercase tracking-tighter">{currentFeaturedPost.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-secondary-text italic line-clamp-3">{currentFeaturedPost.description}</CardDescription>
                                        <Button variant="outline" className="mt-4 border-white/10 text-white font-black uppercase text-[10px] tracking-widest h-12 w-full rounded-xl">
                                            Initiate Full Debrief <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                                        </Button>
                                    </div>
                                </div>
                                
                                <div className="hidden md:block relative min-h-[500px]">
                                    <div className="grid md:grid-cols-[1fr,1.2fr] items-stretch h-full">
                                        <div className="relative overflow-hidden">
                                             {currentFeaturedPost.imageUrl && (
                                                <img
                                                    src={currentFeaturedPost.imageUrl}
                                                    alt={currentFeaturedPost.title}
                                                    className="absolute inset-0 object-cover w-full h-full grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black" />
                                            <div className="absolute top-8 left-8">
                                                <Badge className="bg-black/60 backdrop-blur-md text-white/70 border-white/10 text-[9px] font-black uppercase tracking-widest px-4 py-1.5">
                                                    Protocol: {currentFeaturedPost.protocol || "Standard"}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="relative z-10 p-16 flex flex-col justify-center space-y-8 bg-black">
                                            <div className="space-y-4">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
                                                        Sector: {currentFeaturedPost.tags[0]}
                                                    </p>
                                                    <CardTitle className="text-4xl lg:text-5xl font-headline text-white italic uppercase tracking-tighter leading-[1.05]">
                                                        {currentFeaturedPost.title}
                                                    </CardTitle>
                                                </div>
                                                <p className="text-xl text-secondary-text font-medium italic border-l-2 border-primary/20 pl-8 leading-relaxed">
                                                    {currentFeaturedPost.description}
                                                </p>
                                            </div>
                                            
                                            <div className="flex items-center gap-8 text-[10px] font-black text-white/30 uppercase tracking-[0.3em] pt-4">
                                                <span>{formatDate(currentFeaturedPost.publishedDate)}</span>
                                                <span>{Math.ceil(currentFeaturedPost.content.split(' ').length / 200)} min read</span>
                                            </div>
                                            
                                            <Button variant="outline" className="bg-white/5 text-white border-white/10 hover:bg-primary hover:text-black transition-all font-black uppercase tracking-[0.2em] text-[11px] h-14 w-fit px-10 rounded-xl mt-4">
                                                Read The Full story <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
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
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

                 <div className="max-w-2xl mx-auto mt-32 flex flex-col items-center gap-6 p-12 border border-white/5 rounded-[2.5rem] bg-alternate-background relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <ShieldAlert className="w-48 h-48 text-primary" />
                    </div>
                    <div className="relative z-10 space-y-4">
                        <Badge variant="outline" className="text-primary border-primary/30 uppercase tracking-[0.2em] font-black text-[9px]">Intel Subscription</Badge>
                        <h3 className="text-2xl md:text-3xl font-black font-headline italic uppercase tracking-tighter text-white">Get the analysis behind the headlines.</h3>
                        <p className="text-secondary-text max-w-md mx-auto italic font-medium">Join 5,000+ COOs and Founders receiving bi-weekly forensic debriefs on operational risk.</p>
                    </div>
                    <div className="relative z-10 w-full flex justify-center pt-2">
                        <SubscriptionForm />
                    </div>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
