'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Rss, Search, Users, PlusCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const forumTopics = [
    {
        title: "Wedding Planning Tips & Tricks",
        posts: "1.2k",
        lastPost: "2 hours ago",
        icon: <MessageSquare className="w-5 h-5 text-primary" />
    },
    {
        title: "Hotel Management Best Practices",
        posts: "876",
        lastPost: "5 hours ago",
        icon: <MessageSquare className="w-5 h-5 text-primary" />
    },
    {
        title: "Startup Launch Stories",
        posts: "453",
        lastPost: "1 day ago",
        icon: <MessageSquare className="w-5 h-5 text-primary" />
    },
    {
        title: "Sustainable Event Ideas",
        posts: "312",
        lastPost: "3 days ago",
        icon: <MessageSquare className="w-5 h-5 text-primary" />
    }
];

const communityMembers = [
    { name: "Sarah J.", role: "Event Planner", avatar: "https://picsum.photos/seed/10/100/100" },
    { name: "Mike L.", role: "Hotel GM", avatar: "https://picsum.photos/seed/11/100/100" },
    { name: "Chen W.", role: "Sustainability Lead", avatar: "https://picsum.photos/seed/12/100/100" },
    { name: "Priya K.", role: "Startup Founder", avatar: "https://picsum.photos/seed/13/100/100" },
];

export default function CommunityPage() {
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);
    const { toast } = useToast();

    const handleCreatePost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = formData.get('title');
        const content = formData.get('content');

        if (!title || !content) {
            toast({
                variant: 'destructive',
                title: 'Incomplete Post',
                description: 'Please provide both a title and content for your post.',
            });
            return;
        }

        // In a real app, you'd submit this to a backend.
        console.log({ title, content });

        setIsNewPostOpen(false);
        toast({
            title: 'Post Created!',
            description: 'Your new post has been successfully added to the community.',
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">Community Hub</h1>
                <Dialog open={isNewPostOpen} onOpenChange={setIsNewPostOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            New Post
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a New Post</DialogTitle>
                            <DialogDescription>
                                Share your thoughts, ask questions, and connect with the community.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleCreatePost} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="post-title">Title</Label>
                                <Input id="post-title" name="title" placeholder="Enter a catchy title" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="post-content">Content</Label>
                                <Textarea id="post-content" name="content" placeholder="What's on your mind?" className="min-h-32"/>
                            </div>
                            <DialogFooter>
                                <Button type="button" variant="outline" onClick={() => setIsNewPostOpen(false)}>Cancel</Button>
                                <Button type="submit">Create Post</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <p className="text-lg text-muted-foreground">
                Connect with peers, share insights, and learn from industry experts.
            </p>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search forums and members..." className="pl-10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Rss className="h-6 w-6" />
                                <span>Discussion Forums</span>
                            </CardTitle>
                            <CardDescription>
                                Jump into conversations on various topics.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {forumTopics.map((topic) => (
                                    <li key={topic.title} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-4">
                                            {topic.icon}
                                            <div>
                                                <h3 className="font-semibold">{topic.title}</h3>
                                                <p className="text-sm text-muted-foreground">{topic.posts} posts</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{topic.lastPost}</p>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                     <Card>
                        <CardHeader>
                           <CardTitle className="flex items-center gap-2">
                                <Users className="h-6 w-6" />
                                <span>Featured Members</span>
                            </CardTitle>
                            <CardDescription>
                                Connect with active community members.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {communityMembers.map((member) => (
                                    <li key={member.name} className="flex items-center gap-4">
                                        <Avatar>
                                            <AvatarImage src={member.avatar} data-ai-hint="profile picture"/>
                                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold">{member.name}</h4>
                                            <p className="text-sm text-muted-foreground">{member.role}</p>
                                        </div>
                                         <Button variant="outline" size="sm" className="ml-auto">Follow</Button>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
