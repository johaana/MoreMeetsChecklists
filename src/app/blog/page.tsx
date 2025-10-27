
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';
import { SiteHeader } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { premiumPacks } from '@/lib/premium-packs';
import { individualChecklists } from '@/lib/individual-checklists';
import React from 'react';

export const metadata: Metadata = {
    title: 'Blog | MoreMeets',
    description: 'Insights and expert analysis on operational excellence, compliance, and risk management for modern businesses.',
};

export default function BlogListPage() {
  const getIconForPost = (post: typeof blogPosts[0]) => {
    if (post.relatedPackId) {
      const pack = premiumPacks.find(p => p.id === post.relatedPackId);
      if (pack) return pack.icon;
    }
    if (post.relatedChecklistId) {
      const checklist = individualChecklists.find(c => c.id === post.relatedChecklistId);
      if (checklist) return checklist.icon;
    }
    return <BookOpen />;
  }

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {blogPosts.map((post) => (
                        <Card key={post.slug} className="flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                            <CardHeader>
                                <div className="flex justify-between items-start gap-4">
                                  <div className="flex-1">
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
                                  </div>
                                   <div className="p-3 bg-secondary rounded-full border border-primary/10 shrink-0">
                                      {React.cloneElement(getIconForPost(post), { className: "w-8 h-8 text-primary" })}
                                  </div>
                                </div>
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
