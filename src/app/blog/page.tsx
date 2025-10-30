
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import type { Metadata } from 'next';
import React from 'react';
import { premiumPacks } from '@/lib/premium-packs';
import { individualChecklists } from '@/lib/individual-checklists';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
    title: 'Blog | MoreMeets',
    description: 'Insights and expert analysis on operational excellence, compliance, and risk management for modern businesses.',
};

type BlogPost = (typeof blogPosts)[0];

function getPostIcon(post: BlogPost): React.ReactElement {
    let item: any = null;

    if (post.relatedPackId) {
        item = premiumPacks.find(p => p.id === post.relatedPackId);
    } else if (post.relatedChecklistId) {
        item = individualChecklists.find(c => c.id === post.relatedChecklistId);
    }

    if (item && item.icon) {
        return React.cloneElement(item.icon, { className: "w-8 h-8 text-primary" });
    }

    return <FileText className="w-8 h-8 text-primary" />;
}

function calculateReadingTime(content: string): string {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
}

const BlogCard = ({ post, className }: { post: BlogPost, className?: string }) => (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
        <Card className={cn("flex flex-col h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 group-hover:scale-[1.02]", className)}>
            <CardHeader>
                <div className="flex items-start gap-4">
                     <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                       {getPostIcon(post)}
                     </div>
                    <div className="flex-1">
                        <div className="flex flex-wrap gap-2 mb-2">
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                        <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                           {post.title}
                        </CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <CardDescription className="text-sm md:text-base">{post.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
                <p className="text-xs text-muted-foreground">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <p className="text-xs font-semibold text-primary">{calculateReadingTime(post.content)}</p>
            </CardFooter>
        </Card>
    </Link>
);

const FeaturedBlogCard = ({ post }: { post: BlogPost }) => (
    <Link href={`/blog/${post.slug}`} className="group block">
        <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 group-hover:scale-[1.01] md:grid md:grid-cols-2 md:items-center">
            <CardHeader className="p-6 md:p-8">
                 <div className="p-4 bg-secondary rounded-full border border-primary/10 shrink-0 w-fit mb-4">
                   {getPostIcon(post)}
                 </div>
                <div className="flex flex-wrap gap-2 mb-2">
                    {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                </div>
                <CardTitle className="text-2xl md:text-3xl font-headline group-hover:text-primary transition-colors">
                    {post.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8 pt-0 md:pt-6">
                <CardDescription className="text-base md:text-lg mb-6">{post.description}</CardDescription>
                 <div className="flex justify-between items-center mt-auto">
                    <p className="text-sm text-muted-foreground">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <p className="text-sm font-semibold text-primary">{calculateReadingTime(post.content)}</p>
                </div>
                <Button variant="link" className="p-0 h-auto mt-4 text-base group-hover:text-primary font-bold">
                    Read The Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    </Link>
);


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
                        Insights and expert analysis on operational excellence, compliance, and risk management for modern businesses.
                    </p>
                </div>

                {featuredPost && (
                    <div className="mb-12 md:mb-16 max-w-5xl mx-auto">
                         <h2 className="text-2xl font-bold font-headline mb-4 ml-2">Latest Article</h2>
                        <FeaturedBlogCard post={featuredPost} />
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {otherPosts.map((post) => (
                       <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
