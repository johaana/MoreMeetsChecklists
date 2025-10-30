
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | MoreMeets',
    description: 'Insights and expert analysis on operational excellence, compliance, and risk management for modern businesses.',
};

export default function BlogListPage() {
  const [featuredPost, ...otherPosts] = [...blogPosts].sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-2 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        MoreMeets Blog
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground text-base md:text-xl/relaxed mx-auto">
                        Insights on operational excellence, compliance, and risk management.
                    </p>
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

                {/* Other Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {otherPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            {post.imageUrl && (
                                <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={600}
                                        height={340}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </Link>
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
                                <Button asChild variant="ghost" size="sm">
                                    <Link href={`/blog/${post.slug}`}>
                                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
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
