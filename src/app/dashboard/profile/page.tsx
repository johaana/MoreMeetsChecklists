import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
        <h1 className="text-2xl font-semibold md:text-3xl font-headline">My Profile</h1>
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
                        <Select defaultValue="event-planner">
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
                    <Textarea id="bio" placeholder="Tell us a little about yourself" className="min-h-[100px]" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="est">
                        <SelectTrigger>
                            <SelectValue placeholder="Select your timezone" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className="flex justify-end pt-4">
                    <Button>Save Changes</Button>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}
