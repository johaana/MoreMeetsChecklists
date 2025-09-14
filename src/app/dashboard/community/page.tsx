import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Rss, Search, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

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
]

export default function CommunityPage() {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold font-headline">Community Hub</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Post
                </Button>
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

// Add PlusCircle icon if it doesn't exist.
function PlusCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
    )
}
