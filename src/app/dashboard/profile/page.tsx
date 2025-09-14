'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { Sparkles, Loader2, ListChecks, Package, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { personalizeProfile, PersonalizeProfileOutput } from '@/ai/flows/personalize-profile';

export default function ProfilePage() {
  const { toast } = useToast();
  const [role, setRole] = useState('event-planner');
  const [bio, setBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<PersonalizeProfileOutput | null>(null);

  const handleAnalyzeProfile = async () => {
    if (!bio || !role) {
        toast({
            variant: "destructive",
            title: "Missing Information",
            description: "Please provide your role and a brief bio to get personalized recommendations.",
        });
        return;
    }
    
    setIsLoading(true);
    setRecommendations(null);

    try {
        const result = await personalizeProfile({ role, bio });
        setRecommendations(result);
        toast({
            title: "Analysis Complete!",
            description: "We've generated some personalized recommendations for you.",
        });
    } catch (error) {
        console.error("Error analyzing profile:", error);
        toast({
            variant: "destructive",
            title: "Analysis Failed",
            description: "We couldn't generate recommendations at this time. Please try again later.",
        });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">My Profile</h1>
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Update your personal details and professional information here.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-6">
                            <Avatar className="h-24 w-24">
                                <AvatarImage src="https://picsum.photos/seed/1/200/200" data-ai-hint="profile picture"/>
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1.5 flex-1">
                               <Label htmlFor="picture">Profile Photo</Label>
                               <Input id="picture" type="file" />
                               <p className="text-sm text-muted-foreground">Upload a new photo. Recommended size: 200x200px.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" defaultValue="Alex Robinson" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" defaultValue="alex.robinson@example.com" type="email" disabled/>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" placeholder="e.g. Your Company LLC" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <Select value={role} onValueChange={setRole}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select your role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="event-planner">Event Planner</SelectItem>
                                        <SelectItem value="hotel-manager">Hotel Manager</SelectItem>
                                        <SelectItem value="smb-owner">SMB Owner</SelectItem>
                                        <SelectItem value="sustainability-officer">Sustainability Officer</SelectItem>
                                        <SelectItem value="freelancer">Freelancer</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" placeholder="Tell us a little about yourself, your company, or the types of projects you work on." className="min-h-[100px]" value={bio} onChange={(e) => setBio(e.target.value)} />
                        </div>
                    </CardContent>
                     <CardFooter className="border-t px-6 py-4">
                        <Button>Save Changes</Button>
                        <Button variant="outline" onClick={handleAnalyzeProfile} disabled={isLoading} className="ml-auto">
                            {isLoading ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Sparkles className="mr-2 h-4 w-4" />
                            )}
                            Analyze Profile with AI
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>AI Recommendations</CardTitle>
                        <CardDescription>Suggestions based on your profile.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {isLoading && (
                            <div className="flex items-center justify-center h-48">
                                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                            </div>
                        )}
                        {!isLoading && !recommendations && (
                             <div className="text-center text-sm text-muted-foreground py-10">
                                <p>Click the "Analyze Profile" button to get personalized recommendations.</p>
                            </div>
                        )}
                        {recommendations && (
                            <div className="space-y-6">
                                {recommendations.suggestedChecklists && recommendations.suggestedChecklists.length > 0 && (
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm flex items-center"><ListChecks className='h-4 w-4 mr-2'/>Suggested Checklists</h4>
                                        <ul className="space-y-1 list-disc list-inside text-muted-foreground text-sm">
                                            {recommendations.suggestedChecklists.map((item, i) => <li key={i}>{item}</li>)}
                                        </ul>
                                    </div>
                                )}
                                 {recommendations.suggestedPremiumPacks && recommendations.suggestedPremiumPacks.length > 0 && (
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm flex items-center"><Package className='h-4 w-4 mr-2'/>Suggested Premium Packs</h4>
                                        <ul className="space-y-1 list-disc list-inside text-muted-foreground text-sm">
                                            {recommendations.suggestedPremiumPacks.map((item, i) => (
                                                <li key={i}>
                                                    <Link href="/dashboard/premium-packs" className="underline hover:text-primary">{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                 {recommendations.suggestedCommunityTopics && recommendations.suggestedCommunityTopics.length > 0 && (
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-sm flex items-center"><MessageSquare className='h-4 w-4 mr-2'/>Suggested Community Topics</h4>
                                        <ul className="space-y-1 list-disc list-inside text-muted-foreground text-sm">
                                            {recommendations.suggestedCommunityTopics.map((item, i) => (
                                                <li key={i}>
                                                     <Link href="/dashboard/community" className="underline hover:text-primary">{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    </div>
  )
}
