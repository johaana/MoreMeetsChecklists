'use client';

import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Loader2, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { subscribeToBlog } from './actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

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
        <div className="flex items-center justify-center p-4 rounded-lg bg-green-100 border border-green-200 text-green-800">
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


export default function BlogListPage() {
  const [featuredPost, ...otherPosts] = [...blogPosts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  const filteredPosts = activeFilter
    ? otherPosts.filter(post => post.tags.includes(activeFilter))
    : otherPosts;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-20 pb-12 md:pb-24 lg:pb-32">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary">
                        Black Box Debrief
                    </h1>
                    <p className="max-w-[800px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        Deconstructing the world's most costly operational disasters to build more resilient organizations. An insights hub by MoreMeets.
                    </p>
                </div>

                 <div className="max-w-xl mx-auto mb-16 flex flex-col items-center gap-4 p-6 border rounded-2xl bg-secondary/50">
                    <h3 className="font-bold text-center">Get the analysis behind the headlines.</h3>
                    <SubscriptionForm />
                </div>


                {/* Featured Post */}
                {featuredPost && (
                    <div className="mb-16">
                        <Link href={`/blog/${featuredPost.slug}`} className="block group">
                            <Card className="relative grid md:grid-cols-2 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[300px] md:min-h-[400px] items-center">
                                {featuredPost.imageUrl ? (
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={featuredPost.imageUrl}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/70 md:to-transparent" />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 bg-primary z-0" />
                                )}

                                <div className="relative z-10 p-6 md:p-10 space-y-4 text-white">
                                    <div className="flex flex-wrap gap-2">
                                        {featuredPost.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none">{tag}</Badge>
                                        ))}
                                    </div>
                                    <CardTitle className="text-2xl md:text-4xl font-headline text-white drop-shadow-lg">
                                        {featuredPost.title}
                                    </CardTitle>
                                    <CardDescription className="text-base md:text-lg text-white/90 hidden sm:block">
                                        {featuredPost.description}
                                    </CardDescription>
                                    <div className="flex justify-between items-center text-xs text-white/80">
                                        <span>{new Date(featuredPost.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span className="font-semibold">{Math.ceil(featuredPost.content.split(' ').length / 200)} min read</span>
                                    </div>
                                    <Button variant="outline" className="bg-transparent text-white border-white mt-4 group-hover:bg-white group-hover:text-primary transition-colors">
                                        Read The Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                                <div className="hidden md:block">
                                    {/* This div is a placeholder for the grid layout */}
                                </div>
                            </Card>
                        </Link>
                    </div>
                )}
                
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    <Button
                        variant={activeFilter === null ? 'default' : 'outline'}
                        onClick={() => setActiveFilter(null)}
                        className="rounded-full"
                    >
                        All
                    </Button>
                    {allTags.map(tag => (
                        <Button
                            key={tag}
                            variant={activeFilter === tag ? 'default' : 'outline'}
                            onClick={() => setActiveFilter(tag)}
                            className="rounded-full"
                        >
                            {tag}
                        </Button>
                    ))}
                </div>


                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            {post.imageUrl ? (
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={600}
                                        height={340}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
                            ): (
                               <div className="w-full h-48 bg-secondary flex items-center justify-center">
                                 <p className="text-muted-foreground text-sm">No Image</p>
                               </div>
                            )}
                            <CardHeader>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {post.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-xl font-headline">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <CardDescription className="text-sm md:text-base">{post.description}</CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center mt-auto">
                                <p className="text-xs text-muted-foreground">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                 <span className="text-xs text-muted-foreground">{Math.ceil(post.content.split(' ').length / 200)} min read</span>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
